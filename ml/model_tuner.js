/**
 * Model Tuning and Backtesting Engine
 * 
 * Uses long-term historical match statistics to evaluate, calibrate,
 * and optimize prediction engine hyperparameters.
 */

const ModelTuner = {
  // Default hyperparameter baseline
  defaultParams: {
    sigmoidScale: 4.5,
    drawBase: 0.26,
    drawGapThreshold: 6.0,
    homeAdvantageBoost: 0.05
  },

  /**
   * Evaluates prediction accuracy and probabilistic calibration on a historical match dataset.
   */
  evaluate(matches, teamsData, featureEngine, predictionEngine, customParams = {}) {
    const params = { ...this.defaultParams, ...customParams };
    const featureVectors = featureEngine.buildAllFeatureVectors(teamsData, []);

    let correctTotal = 0;
    let homeCorrect = 0, homeTotalActual = 0, homeTotalPred = 0;
    let drawCorrect = 0, drawTotalActual = 0, drawTotalPred = 0;
    let awayCorrect = 0, awayTotalActual = 0, awayTotalPred = 0;
    let totalBrierScore = 0;
    let totalLogLoss = 0;
    let evaluatedCount = 0;

    for (const match of matches) {
      const homeFeatures = featureVectors[match.homeCode];
      const awayFeatures = featureVectors[match.awayCode];
      
      if (!["1", "X", "2"].includes(match.actualOutcome)) throw new Error("Invalid actual outcome");
      // If team vector is missing, skip
      if (!homeFeatures || !awayFeatures) continue;

      const outcome = predictionEngine.predictMatchOutcome(homeFeatures, awayFeatures, featureEngine, null, null, params);
      const pHome = outcome.win, pDraw = outcome.draw, pAway = outcome.loss;
      const predictedOutcome = predictionEngine.pickOutcome(outcome);

      const actual = match.actualOutcome;
      evaluatedCount++;

      // Track accuracy counters
      if (actual === '1') homeTotalActual++;
      if (actual === 'X') drawTotalActual++;
      if (actual === '2') awayTotalActual++;

      if (predictedOutcome === '1') homeTotalPred++;
      if (predictedOutcome === 'X') drawTotalPred++;
      if (predictedOutcome === '2') awayTotalPred++;

      if (predictedOutcome === actual) {
        correctTotal++;
        if (actual === '1') homeCorrect++;
        if (actual === 'X') drawCorrect++;
        if (actual === '2') awayCorrect++;
      }

      // Probabilistic Brier Score: sum of squared errors
      const yH = actual === '1' ? 1 : 0;
      const yD = actual === 'X' ? 1 : 0;
      const yA = actual === '2' ? 1 : 0;
      const brier = Math.pow(pHome - yH, 2) + Math.pow(pDraw - yD, 2) + Math.pow(pAway - yA, 2);
      totalBrierScore += brier;

      // Log-Loss
      const pActual = actual === '1' ? pHome : actual === 'X' ? pDraw : pAway;
      totalLogLoss += -Math.log(Math.max(0.001, pActual));
    }

    if (evaluatedCount === 0) return null;

    const overallAccuracy = (correctTotal / evaluatedCount) * 100;
    const brierScore = totalBrierScore / evaluatedCount;
    const logLoss = totalLogLoss / evaluatedCount;

    return {
      evaluationType: "diagnostic-current-inputs-on-historical-results",
      skippedCount: matches.length - evaluatedCount,
      evaluatedCount,
      params,
      overallAccuracy: parseFloat(overallAccuracy.toFixed(2)),
      brierScore: parseFloat(brierScore.toFixed(4)),
      logLoss: parseFloat(logLoss.toFixed(4)),
      home: {
        actual: homeTotalActual,
        predicted: homeTotalPred,
        correct: homeCorrect,
        recall: homeTotalActual > 0 ? parseFloat((homeCorrect / homeTotalActual * 100).toFixed(1)) : 0
      },
      draw: {
        actual: drawTotalActual,
        predicted: drawTotalPred,
        correct: drawCorrect,
        recall: drawTotalActual > 0 ? parseFloat((drawCorrect / drawTotalActual * 100).toFixed(1)) : 0
      },
      away: {
        actual: awayTotalActual,
        predicted: awayTotalPred,
        correct: awayCorrect,
        recall: awayTotalActual > 0 ? parseFloat((awayCorrect / awayTotalActual * 100).toFixed(1)) : 0
      }
    };
  },

  /**
   * Grid-search optimizer across hyperparameter space to find optimal tuning weights.
   */
  tune(matches, teamsData, featureEngine, predictionEngine) {
    const candidateSigmoid = [3.5, 4.0, 4.5, 5.0];
    const candidateDrawBase = [0.24, 0.26, 0.28, 0.30];
    const candidateDrawThreshold = [this.defaultParams.drawGapThreshold]; // Retained config field; not a prediction rule.
    const candidateHomeBoost = [0.03, 0.05, 0.07];

    const baseline = this.evaluate(matches, teamsData, featureEngine, predictionEngine, this.defaultParams);
    if (!baseline) throw new Error("No historical matches have matching team data.");
    let bestResult = baseline;
    let bestParams = { ...this.defaultParams };

    let iterations = 0;
    for (const sigmoidScale of candidateSigmoid) {
      for (const drawBase of candidateDrawBase) {
        for (const drawGapThreshold of candidateDrawThreshold) {
          for (const homeAdvantageBoost of candidateHomeBoost) {
            iterations++;
            const testParams = { sigmoidScale, drawBase, drawGapThreshold, homeAdvantageBoost };
            const result = this.evaluate(matches, teamsData, featureEngine, predictionEngine, testParams);
            
            if (!result) continue;

            // Research objective: minimize proper probabilistic log loss.
            const score = -result.logLoss;
            const bestScore = -bestResult.logLoss;

            if (score > bestScore) {
              bestResult = result;
              bestParams = testParams;
            }
          }
        }
      }
    }

    return {
      validationStatus: "unvalidated-diagnostic-only",
      iterations,
      baseline,
      optimized: bestResult,
      bestParams,
      improvementPct: parseFloat((bestResult.overallAccuracy - baseline.overallAccuracy).toFixed(2))
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ModelTuner };
}
