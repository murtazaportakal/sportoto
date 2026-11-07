const fs=require('fs'),path=require('path');
const {digest}=require('./evaluation_records');
const {PredictionEngine}=require('./ml/prediction_engine');
function readRecords(directory,kind) {
 const folder=path.join(directory,kind);
 return fs.existsSync(folder)?fs.readdirSync(folder).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(folder,f),'utf8'))):[];
}
function evaluateRecords(directory=path.join(__dirname,'data','evaluation')) {
 const forecasts=readRecords(directory,'forecasts'),results=readRecords(directory,'results'),schedules=readRecords(directory,'schedules');
 const report={schemaVersion:1,evaluationType:'recorded-pre-match-forecasts',validationStatus:'insufficient-evidence',totalForecasts:forecasts.length,evaluated:0,excluded:{},accuracy:null,brierScore:null,logLoss:null,uniformLogLoss:Math.log(3)};
 let correct=0,brier=0,loss=0;
 const scored=[];
 const exclude=reason=>{report.excluded[reason]=(report.excluded[reason]||0)+1;};
 const newest=list=>list.sort((a,b)=>(b.revision||0)-(a.revision||0)||Date.parse(b.observedAt)-Date.parse(a.observedAt))[0];
 for(const forecast of forecasts) {
  const captured=Date.parse(forecast.capturedAt),kickoff=Date.parse(forecast.fixture?.kickoff);
  if(!Number.isFinite(captured)||!Number.isFinite(kickoff)||captured>=kickoff){exclude('invalid-pre-match-cutoff');continue;}
  const artifacts={};
  try {
   for(const [kind,hash] of [['inputs',forecast.inputHash],['code',forecast.codeHash]]) {
    if(!/^[a-f0-9]{64}$/.test(hash))throw new Error('Invalid hash');
    const saved=JSON.parse(fs.readFileSync(path.join(directory,kind,hash+'.json'),'utf8'));
    if(digest(saved)!==hash)throw new Error('Hash mismatch');
    artifacts[kind]=saved;
   }
   PredictionEngine.pickOutcome(forecast.probabilities);
   require('./replay_forecast').replayForecast(forecast,artifacts.inputs,artifacts.code);
  } catch {exclude('invalid-or-missing-artifact');continue;}
  // Changes known before a first eligible forecast do not invalidate that forecast.
  const history=schedules.filter(s=>s.providerId===forecast.providerId&&(!Number.isFinite(Date.parse(s.observedAt))||Date.parse(s.observedAt)>=captured));
  if(history.some(s=>Date.parse(s.kickoff)!==kickoff || s.home!==forecast.fixture.home || s.away!==forecast.fixture.away)) {exclude('fixture-changed-review-required');continue;}
  const latestSchedule=newest(history);
  if(!latestSchedule||latestSchedule.status!=='final'){exclude('awaiting-confirmed-final');continue;}
  const confirmedAt=Date.parse(latestSchedule.observedAt);
  if(!Number.isFinite(confirmedAt)||confirmedAt<=kickoff){exclude('invalid-final-confirmation-time');continue;}
  const result=newest(results.filter(r=>r.providerId===forecast.providerId));
  if(!result){exclude('awaiting-result');continue;}
  const resultObservedAt=Date.parse(result.observedAt);
  if(Date.parse(result.kickoff)!==kickoff || !Number.isFinite(resultObservedAt) || resultObservedAt<=kickoff){exclude('result-cutoff-mismatch');continue;}
  const r=result.result;
  if(!Number.isInteger(r?.homeGoals)||r.homeGoals<0||!Number.isInteger(r?.awayGoals)||r.awayGoals<0||r.outcome!==(r.homeGoals>r.awayGoals?'1':r.homeGoals<r.awayGoals?'2':'X')){exclude('invalid-result');continue;}
  const p=[forecast.probabilities.win,forecast.probabilities.draw,forecast.probabilities.loss],index=['1','X','2'].indexOf(r.outcome);
  correct+=PredictionEngine.pickOutcome(forecast.probabilities)===r.outcome?1:0;
  brier+=p.reduce((sum,value,i)=>sum+(value-(i===index?1:0))**2,0);
  loss-=Math.log(Math.max(1e-15,p[index]));report.evaluated++;
  const teams=artifacts.inputs.teams.filter(t=>[forecast.fixture.home,forecast.fixture.away].includes(t.code));
  scored.push({id:forecast.providerId,actualOutcome:r.outcome,probabilities:p,uniform:[1/3,1/3,1/3],league:forecast.fixture.leagueId??'unknown',season:teams.map(t=>t.statsSource?.season||'unknown').sort().join('/'),estimatedInputs:teams.some(t=>t.dataQuality?.estimatedFields?.length),group:String(forecast.roundId??forecast.fixture.kickoff.slice(0,10))});
 }
 if(report.evaluated){report.accuracy=correct/report.evaluated;report.brierScore=brier/report.evaluated;report.logLoss=loss/report.evaluated;}
 const {summarize,subsets,pairedInterval}=require('./ml/evaluation_metrics');
 report.metrics=summarize(scored);
 report.uniformBaseline=summarize(scored.map(r=>({...r,probabilities:r.uniform})));
 report.byLeague=subsets(scored,'league');report.bySeason=subsets(scored,'season');report.byEstimatedInputs=subsets(scored,'estimatedInputs');
 report.uniformLogLossDifference=pairedInterval(scored,'uniform');
 report.release={eligible:false,reasons:['Prospective paired candidate/incumbent comparison and review are required.']};
 const groups=new Map();for(const row of scored){if(!groups.has(row.group))groups.set(row.group,[]);groups.get(row.group).push(row);}
 report.coupons={evaluationType:'retrospective-fixed-rule-on-recorded-forecasts',policy:{doubleChances:4,strategy:'draw_protection'},completeRounds:0,incompleteRounds:0,coveredRounds:0,columnsPerTicket:16,cost:null,returns:null};
 for(const rows of groups.values()) {
   if(rows.length!==15){report.coupons.incompleteRounds++;continue;}
   const predictions=rows.map(r=>({id:r.id,probabilities:{win:r.probabilities[0],draw:r.probabilities[1],loss:r.probabilities[2]},homeWin:100*r.probabilities[0],draw:100*r.probabilities[1],awayWin:100*r.probabilities[2]}));
   const ticket=require('./ml/system_coupon_generator').SystemCouponGenerator.generateCoupon(predictions,4,'draw_protection');
   const settlement=require('./ml/coupon_evaluation').evaluateCoupon(ticket.ticketMatches,Object.fromEntries(rows.map(r=>[r.id,r.actualOutcome])));
   report.coupons.completeRounds++;if(settlement.covered)report.coupons.coveredRounds++;
 }
 report.bookmakers={evaluated:0,reason:'No fixture-specific timestamped pre-match bookmaker snapshots recorded'};
 return report;
}
if(require.main===module)console.log(JSON.stringify(evaluateRecords(),null,2));
module.exports={evaluateRecords};
