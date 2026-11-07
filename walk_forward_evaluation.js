const fs=require('node:fs');
const {ChronologicalModel}=require('./ml/chronological_model');
const {summarize}=require('./ml/evaluation_metrics');
const {digest}=require('./evaluation_records');
function walkForward(matches,developmentEnd) {
  const history=ChronologicalModel.normalize(matches).rows.filter(m=>m.date<=developmentEnd);
  const dates=[...new Set(history.map(m=>m.date))];
  if(dates.length<20)throw new Error('Insufficient development dates for walk-forward folds');
  const folds=[];
  for(let fold=1;fold<4;fold++) {
    const trainEnd=dates[Math.floor(fold*dates.length/4)-1],testEnd=dates[Math.floor((fold+1)*dates.length/4)-1];
    const train=history.filter(m=>m.date<=trainEnd),available=history.filter(m=>m.date<=testEnd);
    let best;
    for(const k of [16,24,32])for(const homeAdvantage of [40,80])for(const goalWeight of [0,30])for(const drawBase of [.24,.28]) {
      const params={k,homeAdvantage,goalWeight,drawBase},metrics=summarize(ChronologicalModel.replay(train,params).rows);
      if(metrics.count&&(!best||metrics.logLoss<best.loss))best={params,loss:metrics.logLoss};
    }
    if(!best)throw new Error('Insufficient eligible training results');
    const rows=ChronologicalModel.replay(available,best.params).rows.filter(m=>m.date>trainEnd);
    const baseline=ChronologicalModel.replay(available).rows.filter(m=>m.date>trainEnd);
    folds.push({trainEnd,testStart:dates[Math.floor(fold*dates.length/4)],testEnd,params:best.params,trainingLogLoss:best.loss,
      candidate:summarize(rows),ratingBaseline:summarize(baseline.map(r=>({...r,probabilities:r.rating}))),
      uniformBaseline:summarize(rows.map(r=>({...r,probabilities:r.uniform}))),frequencyBaseline:summarize(rows.map(r=>({...r,probabilities:r.frequency})))});
  }
  return {schemaVersion:1,evaluationType:'expanding-window-development-folds',dataHash:digest(history),developmentEnd,calibrator:'none; final protocol calibrator is fitted later',folds};
}
if(require.main===module) {
  const protocol=require('./data/research/protocol.json');
  const result=walkForward(require('./data/historical_matches.json').matches,protocol.split.developmentEnd);
  fs.writeFileSync('data/research/walk-forward.json',JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify(result,null,2));
}
module.exports={walkForward};
