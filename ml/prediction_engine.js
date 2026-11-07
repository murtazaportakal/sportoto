/** Weekly Sportoto match outcome probabilities. */

const PredictionEngine = {
  params: { sigmoidScale: 4.5, drawBase: 0.26, drawGapThreshold: 6, homeAdvantageBoost: 0.05 },
  pickOutcome(probabilities) {
    const values = [probabilities.win, probabilities.draw, probabilities.loss];
    if (!values.every(p => Number.isFinite(p) && p >= 0 && p <= 1) || Math.abs(values.reduce((a, b) => a + b, 0) - 1) > 1e-9) {
      throw new Error('Invalid outcome probabilities');
    }
    return ['1', 'X', '2'][values.indexOf(Math.max(...values))];
  },

  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  },

  /**
   * Three-way logistic model: Win / Draw / Loss probabilities
   * Now integrates:
   *   - H2H history modifier (from H2HEngine)
   *   - Home/Away split stats momentum (from SplitStatsEngine)
   *   - Streak momentum modifier
   *   - Fixture congestion / rest days fatigue
   *
   * @param {Object} teamAFeatures  - home team feature vector
   * @param {Object} teamBFeatures  - away team feature vector
   * @param {Object} featureEngine
   * @param {Object} [h2hMap]       - optional H2H map from H2HEngine.buildH2HMap()
   * @param {Object} [splitStats]   - optional split stats from SplitStatsEngine.buildSplitStats()
   */
  predictMatchOutcome(teamAFeatures, teamBFeatures, featureEngine, h2hMap, splitStats, params = this.params) {
    let differential = featureEngine.calculateMatchDifferential(teamAFeatures, teamBFeatures);

    // ─ 1. Head-to-Head modifier ─────────────────────────────────────
    if (h2hMap && typeof H2HEngine !== 'undefined') {
      const h2hMod = H2HEngine.calculateH2HModifier(h2hMap, teamAFeatures.teamCode, teamBFeatures.teamCode);
      differential += h2hMod;
    }

    // ─ 2. Streak momentum & rest/fatigue modifiers ──────────────────
    if (splitStats && typeof SplitStatsEngine !== 'undefined') {
      const homeCtx = SplitStatsEngine.getContextFeatures(splitStats, teamAFeatures.teamCode, 'home');
      const awayCtx = SplitStatsEngine.getContextFeatures(splitStats, teamBFeatures.teamCode, 'away');

      // Streak momentum: hot home team gets +, struggling away team gets +
      const homeStreak = SplitStatsEngine.streakModifier(homeCtx.streakScore);
      const awayStreak = SplitStatsEngine.streakModifier(awayCtx.streakScore);
      differential += homeStreak - awayStreak;

      // Rest/fatigue: apply to differential proportionally
      const restDiff = (homeCtx.restModifier - awayCtx.restModifier) * 0.15;
      differential += restDiff;

      // Blend split win rates into differential (0.08 weight)
      const splitDiff = (homeCtx.winRate - awayCtx.winRate) * 0.08;
      differential += splitDiff;
    }

    // Final NaN guard
    if (isNaN(differential) || !isFinite(differential)) differential = 0;
    
    // Base probabilities from sigmoid
    const rawWinProb = this.sigmoid(differential * params.sigmoidScale);
    
    // Draw probability model: stronger when teams are close in strength
    const strengthGap = Math.abs(differential);
    const drawBase = params.drawBase * Math.exp(-strengthGap * 3.5);
    
    // Normalize to get W/D/L
    let winRaw = rawWinProb * (1 - drawBase);
    let lossRaw = (1 - rawWinProb) * (1 - drawBase);
    
    const homeBoost = (teamAFeatures.features.homeAdvantage ?? 0.8) * params.homeAdvantageBoost;
    winRaw += homeBoost;
    lossRaw = Math.max(0.05, lossRaw - homeBoost);
    const total = winRaw + drawBase + lossRaw;
    
    return {
      win: winRaw / total,
      draw: drawBase / total,
      loss: lossRaw / total,
      differential
    };
  },

};

if (typeof module !== 'undefined' && module.exports) {
  PredictionEngine.params = { ...PredictionEngine.params, ...require('../data/active_model.json').params };
  module.exports = { PredictionEngine };
}
