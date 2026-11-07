/** A release decision is evidence plus review; this function never writes the active model. */
function releaseGate(evidence) {
  const reasons=[];
  if(evidence?.evaluationType!=='prospective-paired-live-models')reasons.push('Prospective paired live-model evidence required');
  if(evidence?.modelFamily!=='live-composite-v1')reasons.push('Incompatible model family');
  if(!evidence?.dataHash||!evidence?.candidateVersion||!evidence?.incumbentVersion||!evidence?.rollbackVersion)reasons.push('Missing versioned evidence or rollback reference');
  const candidate=evidence?.candidate,incumbent=evidence?.incumbent,baseline=evidence?.baseline;
  if(!Number.isInteger(candidate?.count)||candidate.count<500)reasons.push('At least 500 eligible prospective forecasts required');
  if(candidate?.count!==incumbent?.count||candidate?.count!==baseline?.count||evidence?.identicalFixtureSet!==true)reasons.push('Models must use exactly the same fixtures');
  const valid=m=>m&&['logLoss','brierScore','calibrationError'].every(k=>Number.isFinite(m[k])&&m[k]>=0);
  if(![candidate,incumbent,baseline].every(valid))reasons.push('Missing valid probabilistic metrics');
  else {
    if(candidate.logLoss>=incumbent.logLoss||candidate.logLoss>=baseline.logLoss)reasons.push('Candidate must improve log loss against incumbent and baseline');
    if(candidate.brierScore>incumbent.brierScore||candidate.calibrationError>incumbent.calibrationError)reasons.push('Brier score or calibration regressed');
  }
  for(const key of ['incumbent','baseline']) {
    const interval=evidence?.pairedIntervals?.[key];
    if(!Number.isFinite(interval?.upper)||interval.upper>=0||interval.groups<2)reasons.push('Inconclusive paired interval: '+key);
  }
  const leagues=Object.values(evidence?.byLeague||{});
  if(!leagues.length||leagues.some(l=>!Number.isInteger(l.count)||l.count<100))reasons.push('At least 100 eligible forecasts per reported league required');
  if(evidence?.leagueAndClassReview!=='approved')reasons.push('League and class regression review required');
  if(evidence?.independentTestReview!=='approved')reasons.push('Independent test review required');
  return {eligible:reasons.length===0,reasons,automaticPromotion:false};
}
if(require.main===module) {
  const fs=require('node:fs');
  const evidence=process.argv[2]?JSON.parse(fs.readFileSync(process.argv[2],'utf8')):{};
  const decision=releaseGate(evidence);console.log(JSON.stringify(decision,null,2));if(!decision.eligible)process.exitCode=1;
}
module.exports={releaseGate};
