const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {FeatureEngineering} = require('./ml/feature_engineering');
const {PredictionEngine} = require('./ml/prediction_engine');
const {LiveData} = require('./live_data');
const {PredictionPipeline} = require('./ml/prediction_pipeline');
const digest = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
function writeOnce(file, value) {
  fs.mkdirSync(path.dirname(file), {recursive:true});
  const temporary = file + '.' + crypto.randomUUID() + '.tmp';
  try {
    fs.writeFileSync(temporary, JSON.stringify(value,null,2)+'\n', {flag:'wx'});
    fs.linkSync(temporary, file); // Atomically create without replacing an existing record.
    return true;
  } catch (error) { if(error.code==='EEXIST') return false; throw error; }
  finally { if(fs.existsSync(temporary)) fs.unlinkSync(temporary); }
}
function eligibility(fixture, teams, capturedAt, updatedAt) {
  const now = Date.parse(capturedAt), kickoff = Date.parse(fixture.kickoff);
  if (!Number.isFinite(now)) return 'invalid-capture-time';
  if (!fixture.providerId) return 'missing-provider-id';
  if (!Number.isFinite(kickoff)) return 'unverified-kickoff-timezone';
  if (now >= kickoff) return 'not-before-kickoff';
  if (fixture.status === 'final' || fixture.result) return 'result-already-known';
  if (!['unconfirmed','scheduled'].includes(fixture.status)) return 'fixture-not-scheduled';
  if (Date.parse(updatedAt) > now) return 'future-snapshot';
  if (LiveData.freshness(updatedAt, now) !== 'fresh') return 'stale-snapshot';
  for (const code of [fixture.home,fixture.away]) {
    const team=teams.find(t=>t.code===code);
    if (!team) return 'missing-team';
    const sourcedAt=Date.parse(team.statsSource?.fetchedAt);
    if (!Number.isFinite(sourcedAt) || sourcedAt > now || now-sourcedAt > 48*3600000) return 'unverified-or-stale-team-input';
  }
  return null;
}
function recordEvaluation(data, directory=path.join(__dirname,'data','evaluation'), capturedAt=new Date().toISOString()) {
  LiveData.validate(data);
  const counts={captured:0,existing:0,ineligible:{},resultObservations:0};
  const inputs={schemaVersion:1,teams:data.teams,fixtures:data.fixtures,model:data.model,updatedAt:data.updatedAt};
  const inputHash=digest(inputs);
  const sourceCode=Object.fromEntries(['ml/feature_engineering.js','ml/prediction_engine.js','ml/prediction_pipeline.js'].map(p=>[p,fs.readFileSync(path.join(__dirname,p),'utf8')]));
  const codeHash=digest(sourceCode);
  const vectors=FeatureEngineering.buildAllFeatureVectors(data.teams,[]);
  for(const f of data.fixtures) {
    if(!f.providerId) continue;
    const identity=digest({provider:'sportoto',id:f.providerId});
    recordSchedule(f, directory, capturedAt);
    if (recordResult(f, directory, capturedAt)) counts.resultObservations++;
    const reason=eligibility(f,data.teams,capturedAt,data.updatedAt);
    if(reason) {counts.ineligible[reason]=(counts.ineligible[reason]||0)+1;continue;}
    const target=path.join(directory,'forecasts',identity+'.json');
    if(fs.existsSync(target)) {counts.existing++;continue;}
    const {probabilities,pick}=PredictionPipeline.predict({fixture:f,vectors,params:data.model.params,asOf:capturedAt},FeatureEngineering,PredictionEngine);
    writeOnce(path.join(directory,'inputs',inputHash+'.json'),inputs);
    writeOnce(path.join(directory,'code',codeHash+'.json'),sourceCode);
    const forecast={schemaVersion:1,featureSchemaVersion:'team-composite-v1',pipelineVersion:PredictionPipeline.version,provider:'sportoto',providerId:f.providerId,roundId:f.roundId,fixture:f,capturedAt,inputHash,codeHash,model:data.model,probabilities,pick,policy:'first-eligible-observation-before-explicit-kickoff'};
    if(writeOnce(target,forecast))counts.captured++;else counts.existing++;
  }
  fs.mkdirSync(directory,{recursive:true});
  fs.writeFileSync(path.join(directory,'status.json'),JSON.stringify({checkedAt:capturedAt,roundId:data.round.id,...counts},null,2)+'\n');
  return counts;
}
function appendObservation(directory, kind, providerId, state, observedAt) {
  if(!Number.isFinite(Date.parse(observedAt)))throw new Error('Invalid observation time');
  const folder=path.join(directory,kind);
  const identity=digest({provider:'sportoto',id:providerId});
  const previous=fs.existsSync(folder)?fs.readdirSync(folder).filter(f=>f.startsWith(identity+'-')&&f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(folder,f),'utf8'))).sort((a,b)=>(b.revision||0)-(a.revision||0)||Date.parse(b.observedAt)-Date.parse(a.observedAt))[0]:null;
  if(previous && Date.parse(observedAt)<Date.parse(previous.observedAt))throw new Error('Observation time moved backwards');
  const stateHash=digest(state);
  if(previous?.stateHash===stateHash)return false;
  const revision=(previous?.revision||0)+1;
  return writeOnce(path.join(folder,identity+'-'+String(revision).padStart(8,'0')+'.json'),{...state,observedAt,revision,stateHash});
}
function recordSchedule(f,directory,observedAt) {
  if(!f.providerId)return false;
  return appendObservation(directory,'schedules',f.providerId,{provider:'sportoto',providerId:f.providerId,roundId:f.roundId,home:f.home,away:f.away,kickoff:f.kickoff,kickoffRaw:f.kickoffRaw,status:f.status},observedAt);
}
function recordResult(f, directory, observedAt) {
  if(!f.providerId || !f.result || f.status !== 'final') return false;
  return appendObservation(directory,'results',f.providerId,{provider:'sportoto',providerId:f.providerId,roundId:f.roundId,kickoff:f.kickoff,kickoffRaw:f.kickoffRaw,result:f.result},observedAt);
}
async function refreshRecordedResults(fetchRound, currentRoundId, directory=path.join(__dirname,'data','evaluation'), observedAt=new Date().toISOString(), resolveFixtures=async fixtures=>fixtures) {
  const forecastsPath=path.join(directory,'forecasts');
  if(!fs.existsSync(forecastsPath))return {checked:0,added:0};
  const settled=new Set();
  const settledAt=new Map();
  const resultsPath=path.join(directory,'results');
  if(fs.existsSync(resultsPath)) for(const file of fs.readdirSync(resultsPath)) {
    const result=JSON.parse(fs.readFileSync(path.join(resultsPath,file),'utf8'));settled.add(result.providerId);
    settledAt.set(result.providerId,Math.max(settledAt.get(result.providerId)||0,Date.parse(result.observedAt)));
  }
  const schedulePath=path.join(directory,'schedules');
  const latestSchedules=new Map();
  if(fs.existsSync(schedulePath)) for(const file of fs.readdirSync(schedulePath).filter(f=>f.endsWith('.json'))) {
    const observation=JSON.parse(fs.readFileSync(path.join(schedulePath,file),'utf8'));
    if((latestSchedules.get(observation.providerId)?.revision||0)<observation.revision)latestSchedules.set(observation.providerId,observation);
  }
  for(const [id,schedule] of latestSchedules)if(schedule.status!=='final')settled.delete(id);
  const rounds=new Set();
  const savedFixtures=new Map();
  for(const file of fs.readdirSync(forecastsPath)) {
    const f=JSON.parse(fs.readFileSync(path.join(forecastsPath,file),'utf8'));
    savedFixtures.set(f.providerId,f.fixture);
    // Unsettled forecasts are never aged out. Recheck recent settled forecasts for corrections.
    if(f.roundId!==currentRoundId && (!settled.has(f.providerId) || Date.parse(observedAt)-(settledAt.get(f.providerId)||0)<30*86400000))rounds.add(f.roundId);
  }
  let added=0;
  for(const round of rounds) {
    const items=await fetchRound(round);
    if(!Array.isArray(items)||!items.length)throw new Error('Missing recorded-round results');
    const fixtures=await resolveFixtures(items.map((item,i)=>{
      const fixture=require('./provider_fixture').normalizeFixture(item,round,i+1);
      const previous=savedFixtures.get(fixture.providerId);
      return previous?.kickoffSource?{...fixture,kickoffSource:previous.kickoffSource}:fixture;
    }));
    for(const f of fixtures) {
      recordSchedule(f,directory,observedAt);
      if(recordResult(f,directory,observedAt))added++;
    }
  }
  return {checked:rounds.size,added};
}
module.exports={recordEvaluation,eligibility,digest,writeOnce,refreshRecordedResults,recordSchedule,recordResult};
