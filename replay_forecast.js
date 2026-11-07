const vm = require('node:vm');
const {digest,eligibility} = require('./evaluation_records');
function replayForecast(forecast, inputs, code) {
  if (digest(inputs) !== forecast.inputHash || digest(code) !== forecast.codeHash) throw new Error('Artifact hash mismatch');
  const fixture = inputs.fixtures.find(f => f.providerId === forecast.providerId);
  if (!fixture || digest(fixture) !== digest(forecast.fixture) || digest(inputs.model) !== digest(forecast.model)) throw new Error('Forecast metadata differs from inputs');
  if (eligibility(fixture,inputs.teams,forecast.capturedAt,inputs.updatedAt)) throw new Error('Ineligible recorded inputs');
  const context = vm.createContext({inputs,fixture,asOf:forecast.capturedAt});
  for (const name of ['ml/feature_engineering.js','ml/prediction_engine.js','ml/prediction_pipeline.js']) {
    if (name === 'ml/prediction_pipeline.js' && !code[name]) continue; // Original v1 recordings.
    if (typeof code[name] !== 'string') throw new Error('Missing replay source');
    vm.runInContext(code[name], context, {timeout:1000});
  }
  const result = vm.runInContext(`(() => {
    const vectors = FeatureEngineering.buildAllFeatureVectors(inputs.teams, []);
    const probabilities = typeof PredictionPipeline !== 'undefined'
      ? PredictionPipeline.predict({fixture,vectors,params:inputs.model.params,asOf},FeatureEngineering,PredictionEngine).probabilities
      : PredictionEngine.predictMatchOutcome(vectors[fixture.home],vectors[fixture.away],FeatureEngineering,null,null,inputs.model.params);
    return {probabilities,pick:PredictionEngine.pickOutcome(probabilities)};
  })()`,context,{timeout:1000});
  if (result.pick !== forecast.pick || ['win','draw','loss'].some(k => Math.abs(result.probabilities[k]-forecast.probabilities[k]) > 1e-12)) throw new Error('Forecast replay mismatch');
  return result;
}
module.exports = {replayForecast};
