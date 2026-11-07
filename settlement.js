function newest(list){return list.sort((a,b)=>(b.revision||0)-(a.revision||0)||Date.parse(b.observedAt)-Date.parse(a.observedAt))[0];}
function settleForecast(forecast,schedules,results) {
  const captured=Date.parse(forecast.capturedAt),kickoff=Date.parse(forecast.fixture?.kickoff);
  if(!Number.isFinite(captured)||!Number.isFinite(kickoff)||captured>=kickoff)return {reason:'invalid-pre-match-cutoff'};
  const history=schedules.filter(s=>s.providerId===forecast.providerId&&(!Number.isFinite(Date.parse(s.observedAt))||Date.parse(s.observedAt)>=captured));
  if(history.some(s=>Date.parse(s.kickoff)!==kickoff||s.home!==forecast.fixture.home||s.away!==forecast.fixture.away))return {reason:'fixture-changed-review-required'};
  const latestSchedule=newest(history);
  if(!latestSchedule||latestSchedule.status!=='final')return {reason:'awaiting-confirmed-final'};
  const confirmedAt=Date.parse(latestSchedule.observedAt);
  if(!Number.isFinite(confirmedAt)||confirmedAt<=kickoff)return {reason:'invalid-final-confirmation-time'};
  const observation=newest(results.filter(r=>r.providerId===forecast.providerId));
  if(!observation)return {reason:'awaiting-result'};
  const observedAt=Date.parse(observation.observedAt);
  if(Date.parse(observation.kickoff)!==kickoff||!Number.isFinite(observedAt)||observedAt<=kickoff)return {reason:'result-cutoff-mismatch'};
  const result=observation.result;
  if(![result?.homeGoals,result?.awayGoals].every(v=>Number.isInteger(v)&&v>=0)||result.outcome!==(result.homeGoals>result.awayGoals?'1':result.homeGoals<result.awayGoals?'2':'X'))return {reason:'invalid-result'};
  return {result,observation};
}
module.exports={settleForecast};
