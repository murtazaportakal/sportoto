/** Prospective predictions share one snapshot and cutoff. No clock or external state. */
const PairedPrediction = {
  predict({fixture,teams,asOf,protocol},featureEngine,predictionEngine,pipeline) {
    const vectors=featureEngine.buildAllFeatureVectors(teams,[]);
    const run=params=>pipeline.predict({fixture,vectors,params,asOf},featureEngine,predictionEngine);
    const incumbent=run(protocol.incumbent.params),candidate=run(protocol.candidate.params);
    if(!incumbent||!candidate)return null;
    const home=teams.find(t=>t.code===fixture.home),away=teams.find(t=>t.code===fixture.away),b=protocol.baseline;
    const expected=1/(1+10**(-(home.eloRating-away.eloRating+b.homeAdvantage)/b.ratingScale));
    const baseline={win:expected*(1-b.drawProbability),draw:b.drawProbability,loss:(1-expected)*(1-b.drawProbability)};
    const uniform={win:1/3,draw:1/3,loss:1/3};
    return {incumbent:incumbent.probabilities,candidate:candidate.probabilities,baseline,uniform};
  }
};
if(typeof module!=='undefined'&&module.exports)module.exports={PairedPrediction};
