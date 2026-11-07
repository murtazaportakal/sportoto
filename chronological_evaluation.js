const fs=require('node:fs'),path=require('node:path');
const {ChronologicalModel}=require('./ml/chronological_model');
const {summarize,subsets,pairedInterval,temperature}=require('./ml/evaluation_metrics');
const {digest}=require('./evaluation_records');
function splitDates(matches) {
  const dates=[...new Set(ChronologicalModel.normalize(matches).rows.map(m=>m.date))];
  if(dates.length<15)throw new Error('At least 15 distinct dates required');
  return {developmentEnd:dates[Math.floor(dates.length*.6)-1],validationEnd:dates[Math.floor(dates.length*.8)-1],testEnd:dates.at(-1),policy:'60/20/20 distinct dates; whole dates stay together'};
}
function report(rows) {
  return {candidate:summarize(rows),baselines:Object.fromEntries(['uniform','frequency','rating'].map(key=>[key,summarize(rows.map(r=>({...r,probabilities:r[key]})))])),
    byLeague:subsets(rows,'league'),bySeason:subsets(rows,'season'),byEstimatedInputs:subsets(rows,'estimatedInputs'),
    logLossDifference:Object.fromEntries(['uniform','frequency','rating'].map(key=>[key,pairedInterval(rows,key)]))};
}
function prepare(matches) {
  const split=splitDates(matches),earlier=matches.filter(m=>m.date<=split.validationEnd);
  const baseline=new Map(ChronologicalModel.replay(earlier).rows.map(r=>[r.id,r.rating]));
  const candidates=[];
  for(const k of [16,24,32])for(const homeAdvantage of [40,80])for(const goalWeight of [0,30])for(const drawBase of [.24,.28]) {
    const params={k,homeAdvantage,goalWeight,drawBase},replay=ChronologicalModel.replay(earlier,params);
    const development=replay.rows.filter(r=>r.date<=split.developmentEnd);
    if(!development.length)throw new Error('No eligible development matches');
    candidates.push({params,developmentLoss:summarize(development).logLoss});
  }
  candidates.sort((a,b)=>a.developmentLoss-b.developmentLoss);
  let best;
  for(const candidate of candidates.slice(0,3)) {
    const replay=ChronologicalModel.replay(earlier,candidate.params);
    const validation=replay.rows.filter(r=>r.date>split.developmentEnd);
    if(!validation.length)throw new Error('No eligible validation matches');
    for(const t of [.75,1,1.25,1.5]) {
      const rows=validation.map(r=>({...r,rating:baseline.get(r.id),probabilities:temperature(r.probabilities,t)}));
      const score=summarize(rows).logLoss;
      if(!best||score<best.score)best={...candidate,temperature:t,score,rows};
    }
  }
  const development=ChronologicalModel.replay(earlier,best.params).rows.filter(r=>r.date<=split.developmentEnd);
  const dates=[...new Set(development.map(r=>r.date))];
  const walkForward=Array.from({length:3},(_,i)=>{
    const start=dates[Math.floor(i*dates.length/3)],end=dates[Math.floor((i+1)*dates.length/3)-1];
    return {start,end,metrics:summarize(development.filter(r=>r.date>=start&&r.date<=end)),role:'development diagnostics; not untouched test'};
  });
  return {schemaVersion:1,modelVersion:ChronologicalModel.version,evaluationType:'chronological-results-only-research',validationStatus:'research-only-not-live-model-validation',dataHash:digest(matches),split,
    params:best.params,calibrator:{type:'temperature',temperature:best.temperature,fittedOn:'validation',classOrder:['1','X','2']},
    featurePolicy:{seasonReset:true,recentWindowDays:180,recentWindowMatches:8,minHistory:5,sameDayResultsExcluded:true,rest:'disabled-incomplete-fixture-coverage',liveTeamInputs:false},
    selection:{gridSize:candidates.length,shortlistSize:3,objective:'log-loss',developmentCandidates:candidates},walkForward,validation:report(best.rows),
    limitations:['Imported history omits unmapped teams; coverage is incomplete.','Legacy league is tur.1; season inferred with a July boundary when absent.','The reserved test was previously available to legacy diagnostics; it is not pristine independent evidence.','No bookmaker or return comparison without timestamped pre-match odds.','This model cannot be promoted into the live composite engine.']};
}
function finalEvaluation(matches, frozen) {
  if(digest(matches)!==frozen.dataHash)throw new Error('Frozen dataset changed');
  const replay=ChronologicalModel.replay(matches,frozen.params),baseline=new Map(ChronologicalModel.replay(matches).rows.map(r=>[r.id,r.rating]));
  const rows=replay.rows.filter(r=>r.date>frozen.split.validationEnd).map(r=>({...r,rating:baseline.get(r.id),probabilities:temperature(r.probabilities,frozen.calibrator.temperature)}));
  return {schemaVersion:1,protocolHash:digest(frozen),evaluationType:frozen.evaluationType,validationStatus:frozen.validationStatus,
    split:frozen.split,exclusions:replay.excluded,totalImported:matches.length,eligibleTest:rows.length,metrics:report(rows),
    release:{eligible:false,reasons:['Reduced research model is incompatible with live composite model.','Prospective live forecast evidence is required.']},limitations:frozen.limitations};
}
function codeHash() {
  return digest(Object.fromEntries(['chronological_evaluation.js','ml/chronological_model.js','ml/evaluation_metrics.js'].map(f=>[f,fs.readFileSync(path.join(__dirname,f),'utf8')])));
}
function run(final=false) {
  const matches=require('./data/historical_matches.json').matches,directory=path.join(__dirname,'data','research');
  fs.mkdirSync(directory,{recursive:true});
  const protocolPath=path.join(directory,'protocol.json'),finalPath=path.join(directory,'final-test.json');
  let protocol;
  if(fs.existsSync(protocolPath)) {
    protocol=JSON.parse(fs.readFileSync(protocolPath,'utf8'));
    if(protocol.codeHash!==codeHash()||protocol.dataHash!==digest(matches))throw new Error('Frozen protocol differs from code/data; create a separately reviewed experiment instead of overwriting it');
  } else {
    protocol={...prepare(matches),codeHash:codeHash()};
    fs.writeFileSync(protocolPath,JSON.stringify(protocol,null,2)+'\n',{flag:'wx'});
  }
  if(!final)return protocol;
  if(fs.existsSync(finalPath)) {
    const saved=JSON.parse(fs.readFileSync(finalPath,'utf8'));
    if(saved.protocolHash!==digest(protocol))throw new Error('Final test protocol mismatch');
    return saved;
  }
  const result=finalEvaluation(matches,protocol);
  fs.writeFileSync(finalPath,JSON.stringify(result,null,2)+'\n',{flag:'wx'});
  return result;
}
if(require.main===module)console.log(JSON.stringify(run(process.argv.includes('--final')),null,2));
module.exports={prepare,finalEvaluation,splitDates,report};
