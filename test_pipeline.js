const { FeatureEngineering } = require('./ml/feature_engineering.js');
const { PredictionEngine } = require('./ml/prediction_engine.js');
const { TEAMS_DATA, FIXTURES_DATA } = require('./data/sportoto_data.js');

const fixturesToUse = FIXTURES_DATA;
const featureVectors = FeatureEngineering.buildAllFeatureVectors(TEAMS_DATA, []);

const predictions = fixturesToUse.map(fixture => {
  const homeTeam = TEAMS_DATA.find(t => t.code === fixture.home);
  const awayTeam = TEAMS_DATA.find(t => t.code === fixture.away);
  
  if (!homeTeam || !awayTeam) return null;
  
  const homeFeatures = featureVectors[homeTeam.code];
  const awayFeatures = featureVectors[awayTeam.code];
  
  const outcome = PredictionEngine.predictMatchOutcome(homeFeatures, awayFeatures, FeatureEngineering);
  return outcome;
});

console.log("Predictions length:", predictions.length);
console.log("Null count:", predictions.filter(p => p === null).length);
