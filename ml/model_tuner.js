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
      
      // If team vector is missing, skip
      if (!homeFeatures || !awayFeatures) continue;

      const differential = featureEngine.calculateMatchDifferential(homeFeatures, awayFeatures);
      
      // 1. Calculate probabilities with tunable parameters
      const rawWinProb = predictionEngine.sigmoid(differential * params.sigmoidScale);
      const strengthGap = Math.abs(differential);
      const drawBase = params.drawBase * Math.exp(-strengthGap * 3.5);
      
      let winRaw = rawWinProb * (1 - drawBase);
      let lossRaw = (1 - rawWinProb) * (1 - drawBase);
      
      // Apply Home Advantage Boost
      const homeBoost = (homeFeatures.features.homeAdvantage || 0.8) * params.homeAdvantageBoost;
      winRaw += homeBoost;
      lossRaw = Math.max(0.05, lossRaw - homeBoost);

      const total = winRaw + drawBase + lossRaw;
      const pHome = winRaw / total;
      const pDraw = drawBase / total;
      const pAway = lossRaw / total;

      const hPct = pHome * 100;
      const aPct = pAway * 100;
      const gap = Math.abs(hPct - aPct);

      // 2. Classify prediction using Equilibrium Rule
      let predictedOutcome = '1';
      if (gap <= params.drawGapThreshold) {
        predictedOutcome = 'X';
      } else if (aPct > hPct) {
        predictedOutcome = '2';
      } else {
        predictedOutcome = '1';
      }

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
    const candidateDrawThreshold = [4.0, 5.0, 6.0, 7.0, 8.0];
    const candidateHomeBoost = [0.03, 0.05, 0.07];

    const baseline = this.evaluate(matches, teamsData, featureEngine, predictionEngine, this.defaultParams);
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

            // Objective function: balance Accuracy and balanced draw detection (lower Brier score)
            // We favor higher overall accuracy while penalizing extreme draw neglect
            const score = result.overallAccuracy - (result.brierScore * 10) + (result.draw.correct > 0 ? 1.0 : 0);
            const bestScore = bestResult.overallAccuracy - (bestResult.brierScore * 10) + (bestResult.draw.correct > 0 ? 1.0 : 0);

            if (score > bestScore) {
              bestResult = result;
              bestParams = testParams;
            }
          }
        }
      }
    }

    return {
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
