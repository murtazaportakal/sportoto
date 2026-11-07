/** Shared live composite pipeline. Historical modifiers remain disabled by policy. */
const PredictionPipeline = {
  version: 'live-composite-v1',
  predict({fixture, vectors, params, asOf}, featureEngine, predictionEngine) {
    if (!Number.isFinite(Date.parse(asOf))) throw new Error('Explicit prediction time required');
    if (!vectors[fixture.home] || !vectors[fixture.away]) return null;
    const probabilities = predictionEngine.predictMatchOutcome(vectors[fixture.home], vectors[fixture.away], featureEngine, null, null, params);
    return {probabilities, pick: predictionEngine.pickOutcome(probabilities)};
  }
};
if (typeof module !== 'undefined' && module.exports) module.exports = {PredictionPipeline};
