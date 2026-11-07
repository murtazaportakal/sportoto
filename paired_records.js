const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {digest,eligibility,writeOnce,recordSchedule,recordResult}=require('./evaluation_records');
const {LiveData}=require('./live_data');
const {FeatureEngineering}=require('./ml/feature_engineering');
const {PredictionEngine}=require('./ml/prediction_engine');
const {PredictionPipeline}=require('./ml/prediction_pipeline');
const {PairedPrediction}=require('./ml/paired_prediction');
const sources=['ml/feature_engineering.js','ml/prediction_engine.js','ml/prediction_pipeline.js','ml/paired_prediction.js'];
function validateProtocol(config) {
  if(config?.schemaVersion!==1||!/^[-a-z0-9]+$/.test(config.experimentId)||config.modelFamily!=='live-composite-v1')throw new Error('Invalid prospective protocol');
  if(!config.incumbent?.version||!config.candidate?.version||config.incumbent.version===config.candidate.version||!config.baseline?.version||config.uniform?.version!=='uniform-v1')throw new Error('Missing distinct model versions');
  for(const model of [config.incumbent,config.candidate]) {
    const p=model.params;
    if(!p||!Number.isFinite(p.sigmoidScale)||p.sigmoidScale<=0||!Number.isFinite(p.drawBase)||p.drawBase<=0||p.drawBase>=1||!Number.isFinite(p.homeAdvantageBoost)||p.homeAdvantageBoost<0||p.homeAdvantageBoost>.2)throw new Error('Invalid prospective parameters');
  }
  const b=config.baseline;
  if(!Number.isFinite(b.ratingScale)||b.ratingScale<=0||!Number.isFinite(b.homeAdvantage)||!Number.isFinite(b.drawProbability)||b.drawProbability<=0||b.drawProbability>=1)throw new Error('Invalid baseline parameters');
}
function recordPaired(data,config,directory,capturedAt=new Date().toISOString()) {
  LiveData.validate(data);validateProtocol(config);
  if(!Number.isFinite(Date.parse(capturedAt)))throw new Error('Invalid paired capture time');
  const code=Object.fromEntries(sources.map(name=>[name,fs.readFileSync(path.join(__dirname,name),'utf8')])),codeHash=digest(code);
  const registration={schemaVersion:1,config,codeHash,registeredAt:capturedAt};
  writeOnce(path.join(directory,'protocol.json'),registration);
  writeOnce(path.join(directory,'code',codeHash+'.json'),code);
  const registered=JSON.parse(fs.readFileSync(path.join(directory,'protocol.json'),'utf8'));
  if(digest(registered.config)!==digest(config))throw new Error('Frozen prospective protocol changed; use a new experiment ID');
  if(!Number.isFinite(Date.parse(registered.registeredAt))||Date.parse(capturedAt)<Date.parse(registered.registeredAt))throw new Error('Capture precedes protocol registration');
  const counts={captured:0,existing:0,ineligible:{},resultObservations:0,paused:null};
  if(registered.codeHash!==codeHash)counts.paused='prediction-code-changed-new-experiment-required';
  if(data.model.version!==config.incumbent.version||digest(data.model.params)!==digest(config.incumbent.params))counts.paused='active-model-changed-new-experiment-required';
  const inputs={schemaVersion:1,teams:data.teams,fixtures:data.fixtures,model:data.model,updatedAt:data.updatedAt},inputHash=digest(inputs);
  for(const fixture of data.fixtures) {
    if(!fixture.providerId)continue;
    recordSchedule(fixture,directory,capturedAt);if(recordResult(fixture,directory,capturedAt))counts.resultObservations++;
    const identity=digest({provider:'sportoto',id:fixture.providerId}),target=path.join(directory,'forecasts',identity+'.json');
    if(fs.existsSync(target)){counts.existing++;continue;}
    const reason=eligibility(fixture,data.teams,capturedAt,data.updatedAt);
    if(reason){counts.ineligible[reason]=(counts.ineligible[reason]||0)+1;continue;}
    if(counts.paused)continue;
    const predictions=PairedPrediction.predict({fixture,teams:data.teams,asOf:capturedAt,protocol:config},FeatureEngineering,PredictionEngine,PredictionPipeline);
    for(const value of Object.values(predictions))PredictionEngine.pickOutcome(value);
    writeOnce(path.join(directory,'inputs',inputHash+'.json'),inputs);writeOnce(path.join(directory,'code',codeHash+'.json'),code);
    const forecast={schemaVersion:1,evaluationType:'prospective-paired-live-models',experimentId:config.experimentId,provider:'sportoto',providerId:fixture.providerId,roundId:fixture.roundId,
      fixture,capturedAt,protocolHash:digest(registered),codeHash,inputHash,predictions,policy:'first-eligible-paired-observation-after-protocol-registration'};
    if(writeOnce(target,forecast))counts.captured++;else counts.existing++;
  }
  fs.writeFileSync(path.join(directory,'status.json'),JSON.stringify({checkedAt:capturedAt,roundId:data.round.id,...counts},null,2)+'\n');
  return counts;
}
function artifact(directory,kind,hash) {
  if(!/^[a-f0-9]{64}$/.test(hash))throw new Error('Invalid paired artifact hash');
  const value=JSON.parse(fs.readFileSync(path.join(directory,kind,hash+'.json'),'utf8'));
  if(digest(value)!==hash)throw new Error('Paired artifact hash mismatch');return value;
}
function replayPaired(forecast,registered,inputs,code) {
  validateProtocol(registered.config);
  if(forecast.protocolHash!==digest(registered)||forecast.codeHash!==registered.codeHash||digest(code)!==forecast.codeHash||digest(inputs)!==forecast.inputHash)throw new Error('Paired artifact mismatch');
  if(!Number.isFinite(Date.parse(registered.registeredAt))||Date.parse(forecast.capturedAt)<Date.parse(registered.registeredAt))throw new Error('Invalid paired registration cutoff');
  const fixture=inputs.fixtures.find(f=>f.providerId===forecast.providerId);
  if(!fixture||digest(fixture)!==digest(forecast.fixture)||forecast.experimentId!==registered.config.experimentId)throw new Error('Paired fixture mismatch');
  if(inputs.model.version!==registered.config.incumbent.version||digest(inputs.model.params)!==digest(registered.config.incumbent.params))throw new Error('Paired incumbent mismatch');
  if(eligibility(fixture,inputs.teams,forecast.capturedAt,inputs.updatedAt))throw new Error('Ineligible paired snapshot');
  const context=vm.createContext({inputs,fixture,asOf:forecast.capturedAt,protocol:registered.config});
  for(const name of sources){if(typeof code[name]!=='string')throw new Error('Missing paired source');vm.runInContext(code[name],context,{timeout:1000});}
  const predictions=vm.runInContext('PairedPrediction.predict({fixture,teams:inputs.teams,asOf,protocol},FeatureEngineering,PredictionEngine,PredictionPipeline)',context,{timeout:1000});
  for(const role of ['incumbent','candidate','baseline','uniform']) {
    PredictionEngine.pickOutcome(forecast.predictions[role]);
    if(['win','draw','loss'].some(k=>Math.abs(predictions[role][k]-forecast.predictions[role][k])>1e-12))throw new Error('Paired prediction replay mismatch');
  }
  return predictions;
}
module.exports={recordPaired,replayPaired,artifact,validateProtocol};
