const {PredictionPipeline}=require('./ml/prediction_pipeline');
const {FeatureEngineering}=require('./ml/feature_engineering');
const {PredictionEngine}=require('./ml/prediction_engine');
const {LiveData}=require('./live_data');
function healthReport(data, previous, sources=[], now=data.updatedAt) {
  LiveData.validate(data);
  const codes=new Set(data.teams.map(t=>t.code));
  const missing=data.fixtures.filter(f=>!codes.has(f.home)||!codes.has(f.away)).map(f=>({id:f.id,home:f.homeName,away:f.awayName}));
  const required=new Set(data.fixtures.flatMap(f=>[f.home,f.away]));
  const staleTeams=data.teams.filter(t=>required.has(t.code)).filter(t=>!Number.isFinite(Date.parse(t.statsSource?.fetchedAt))||Date.parse(now)-Date.parse(t.statsSource.fetchedAt)>48*3600000||Date.parse(t.statsSource.fetchedAt)>Date.parse(now)).map(t=>t.code);
  let maxProbabilityChange=null,compared=0;
  if(previous) {
    LiveData.validate(previous);
    const vectors=FeatureEngineering.buildAllFeatureVectors(data.teams,[]),oldVectors=FeatureEngineering.buildAllFeatureVectors(previous.teams,[]);
    for(const fixture of data.fixtures) {
      const old=previous.fixtures.find(f=>f.providerId===fixture.providerId&&f.home===fixture.home&&f.away===fixture.away);
      if(!old)continue;
      const current=PredictionPipeline.predict({fixture,vectors,params:data.model.params,asOf:now},FeatureEngineering,PredictionEngine);
      const prior=PredictionPipeline.predict({fixture:old,vectors:oldVectors,params:previous.model.params,asOf:previous.updatedAt},FeatureEngineering,PredictionEngine);
      if(!current||!prior)continue;
      compared++;maxProbabilityChange=Math.max(maxProbabilityChange||0,...['win','draw','loss'].map(k=>Math.abs(current.probabilities[k]-prior.probabilities[k])));
    }
  }
  const warnings=[];
  if(missing.length)warnings.push('missing-team-coverage');
  if(staleTeams.length)warnings.push('stale-or-unverified-team-inputs');
  if(LiveData.freshness(data.updatedAt,Date.parse(now))!=='fresh')warnings.push('stale-snapshot');
  if(maxProbabilityChange>.15)warnings.push('large-probability-change');
  if(sources.some(s=>s.status==='failed'))warnings.push('optional-source-failure');
  return {schemaVersion:1,checkedAt:now,status:warnings.length?'degraded':'ok',warnings,modelVersion:data.model.version,
    supportedFixtures:15-missing.length,totalFixtures:15,missing,staleTeams,sources,drift:{compared,maxProbabilityChange,warningThreshold:.15}};
}
module.exports={healthReport};
