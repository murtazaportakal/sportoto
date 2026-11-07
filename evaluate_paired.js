const fs=require('node:fs'),path=require('node:path');
const {digest}=require('./evaluation_records');
const {artifact,replayPaired,validateProtocol}=require('./paired_records');
const {settleForecast}=require('./settlement');
const {summarize,subsets,pairedInterval}=require('./ml/evaluation_metrics');
const {releaseGate,evidenceRequirements}=require('./release_gate');
function records(directory,kind) {
  const folder=path.join(directory,kind);
  return fs.existsSync(folder)?fs.readdirSync(folder).filter(f=>f.endsWith('.json')).sort().map(f=>JSON.parse(fs.readFileSync(path.join(folder,f),'utf8'))):[];
}
function evaluatePaired(directory) {
  const registered=JSON.parse(fs.readFileSync(path.join(directory,'protocol.json'),'utf8'));
  validateProtocol(registered.config);
  const config=registered.config,forecasts=records(directory,'forecasts'),schedules=records(directory,'schedules'),results=records(directory,'results'),rows=[],excluded={};
  const exclude=reason=>{excluded[reason]=(excluded[reason]||0)+1;};
  for(const forecast of forecasts) {
    if(!Number.isFinite(Date.parse(forecast.capturedAt))||!Number.isFinite(Date.parse(forecast.fixture?.kickoff))||Date.parse(forecast.capturedAt)>=Date.parse(forecast.fixture.kickoff)){exclude('invalid-pre-match-cutoff');continue;}
    let inputs;
    try {
      inputs=artifact(directory,'inputs',forecast.inputHash);
      replayPaired(forecast,registered,inputs,artifact(directory,'code',forecast.codeHash));
    } catch {exclude('invalid-or-missing-paired-artifact');continue;}
    const settled=settleForecast(forecast,schedules,results);
    if(settled.reason){exclude(settled.reason);continue;}
    const array=role=>['win','draw','loss'].map(k=>forecast.predictions[role][k]);
    const teams=inputs.teams.filter(t=>[forecast.fixture.home,forecast.fixture.away].includes(t.code));
    rows.push({id:forecast.providerId,actualOutcome:settled.result.outcome,probabilities:array('candidate'),incumbent:array('incumbent'),baseline:array('baseline'),uniform:array('uniform'),
      league:String(forecast.fixture.leagueId??'unknown'),season:[...new Set(teams.map(t=>t.statsSource?.season||'unknown'))].sort().join('/'),estimatedInputs:teams.some(t=>t.dataQuality?.estimatedFields?.length),
      group:String(forecast.roundId??forecast.fixture.kickoff.slice(0,10)),forecastHash:digest(forecast),resultHash:digest(settled.observation),observedAt:settled.observation.observedAt});
  }
  const roleMetrics=(list,role)=>summarize(role==='candidate'?list:list.map(row=>({...row,probabilities:row[role]})));
  const byLeague=Object.fromEntries([...new Set(rows.map(r=>r.league))].sort().map(league=>{const subset=rows.filter(r=>r.league===league);return [league,{count:subset.length,candidate:roleMetrics(subset,'candidate'),incumbent:roleMetrics(subset,'incumbent'),baseline:roleMetrics(subset,'baseline')}];}));
  const evaluationCodeHash=digest(Object.fromEntries(['evaluate_paired.js','settlement.js','ml/evaluation_metrics.js','release_gate.js','paired_records.js','evaluation_records.js'].map(file=>[file,fs.readFileSync(path.join(__dirname,file),'utf8').replace(/\r\n/g,'\n')])));
  const protocolHash=digest(registered),dataHash=digest({protocolHash,evaluationCodeHash,samples:rows.map(r=>({id:r.id,forecastHash:r.forecastHash,resultHash:r.resultHash}))});
  const reviewPath=path.join(directory,'review.json'),review=fs.existsSync(reviewPath)?JSON.parse(fs.readFileSync(reviewPath,'utf8')):null;
  const latestResult=Math.max(Date.parse(registered.registeredAt),...rows.map(r=>Date.parse(r.observedAt)));
  const reviewApplies=Boolean(review&&review.dataHash===dataHash&&review.protocolHash===protocolHash&&typeof review.approvedBy==='string'&&review.approvedBy.trim()&&Number.isFinite(Date.parse(review.reviewedAt))&&Date.parse(review.reviewedAt)>=latestResult);
  const evidence={schemaVersion:1,evaluationType:'prospective-paired-live-models',modelFamily:config.modelFamily,experimentId:config.experimentId,protocolHash,dataHash,evaluationCodeHash,
    registeredAt:registered.registeredAt,totalForecasts:forecasts.length,evaluated:rows.length,excluded,
    candidateVersion:config.candidate.version,incumbentVersion:config.incumbent.version,rollbackVersion:config.incumbent.version,baselineVersion:config.baseline.version,
    identicalFixtureSet:true,candidate:roleMetrics(rows,'candidate'),incumbent:roleMetrics(rows,'incumbent'),baseline:roleMetrics(rows,'baseline'),uniform:roleMetrics(rows,'uniform'),
    byLeague,bySeason:subsets(rows,'season'),byEstimatedInputs:subsets(rows,'estimatedInputs'),pairedIntervals:{incumbent:pairedInterval(rows,'incumbent'),baseline:pairedInterval(rows,'baseline')},
    independentTestReview:reviewApplies?review.independentTestReview:'pending',leagueAndClassReview:reviewApplies?review.leagueAndClassReview:'pending',
    reviewStatus:{provided:Boolean(review),appliesToEvidence:reviewApplies},
    sampleProgress:{requiredSettled:evidenceRequirements.settled,settled:rows.length,remainingSettled:Math.max(0,evidenceRequirements.settled-rows.length),requiredPerLeague:evidenceRequirements.perLeague}};
  evidence.release=releaseGate(evidence);
  evidence.validationStatus=evidence.release.eligible?'eligible-for-reviewed-promotion':'insufficient-evidence-or-review';
  return evidence;
}
if(require.main===module) {
  const config=require('./data/prospective_experiment.json');
  const directory=process.argv[2]||path.join(__dirname,'data','evaluation','paired',config.experimentId);
  console.log(JSON.stringify(evaluatePaired(directory),null,2));
}
module.exports={evaluatePaired};
