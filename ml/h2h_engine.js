/**
 * Head-to-Head (H2H) Engine
 *
 * Analyses historical head-to-head records between two specific teams
 * and returns a bias modifier to adjust match differential in the prediction engine.
 *
 * Formula:
 *   H2H Modifier = (homeWinRate - awayWinRate) * weight * recencyFactor
 *
 * The modifier is added to the differential in predictMatchOutcome().
 * Positive = home team historically dominates, Negative = away team dominates.
 */

const H2HEngine = {

  /**
   * Maximum number of recent H2H matches to consider
   */
  MAX_H2H_MATCHES: 10,

  /**
   * Weight of the H2H modifier on the overall differential
   * (0.12 = 12% influence — meaningful but not dominant)
   */
  H2H_WEIGHT: 0.12,

  /**
   * Build an H2H lookup map from raw historical match array.
   * Key: "HOME_CODE:AWAY_CODE"
   * Value: Array of { date, homeGoals, awayGoals, outcome }
   *
   * @param {Array} matches - historical_matches.json .matches array
   * @returns {Object} h2hMap
   */
  buildH2HMap(matches) {
    const h2hMap = {};

    for (const m of matches) {
      if (!m.homeCode || !m.awayCode) continue;

      const key = `${m.homeCode}:${m.awayCode}`;
      if (!h2hMap[key]) h2hMap[key] = [];

      h2hMap[key].push({
        date: m.date,
        homeGoals: m.homeGoals,
        awayGoals: m.awayGoals,
        outcome: m.actualOutcome  // '1', 'X', '2'
      });
    }

    // Sort each list descending by date (most recent first)
    for (const key in h2hMap) {
      h2hMap[key].sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return h2hMap;
  },

  /**
   * Get H2H record between two teams regardless of home/away direction.
   * Returns merged list sorted most-recent first, from homeCode perspective.
   *
   * @param {Object} h2hMap
   * @param {string} homeCode  - team playing at home in the upcoming match
   * @param {string} awayCode  - team playing away in the upcoming match
   * @returns {Array}
   */
  getH2HRecord(h2hMap, homeCode, awayCode) {
    const results = [];

    // Direction 1: homeCode was actually home
    const fwd = h2hMap[`${homeCode}:${awayCode}`] || [];
    for (const m of fwd) {
      results.push({ ...m, _direction: 'fwd' });
    }

    // Direction 2: homeCode was actually away (flip outcomes)
    const rev = h2hMap[`${awayCode}:${homeCode}`] || [];
    for (const m of rev) {
      const flippedOutcome = m.outcome === '1' ? '2' : m.outcome === '2' ? '1' : 'X';
      results.push({
        date: m.date,
        homeGoals: m.awayGoals,
        awayGoals: m.homeGoals,
        outcome: flippedOutcome,
        _direction: 'rev'
      });
    }

    // Sort most recent first
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
    return results.slice(0, this.MAX_H2H_MATCHES);
  },

  /**
   * Calculate H2H modifier for a match differential.
   * Returns a float to ADD to the differential (negative = away historically stronger).
   *
   * Recency weighting: most recent match weight=1.0, then 0.85, 0.72... (geometric decay)
   *
   * @param {Object} h2hMap
   * @param {string} homeCode
   * @param {string} awayCode
   * @returns {number} modifier (typically -0.08 to +0.08)
   */
  calculateH2HModifier(h2hMap, homeCode, awayCode) {
    const record = this.getH2HRecord(h2hMap, homeCode, awayCode);
    if (record.length === 0) return 0;

    let weightedScore = 0;
    let totalWeight = 0;
    const DECAY = 0.85;

    for (let i = 0; i < record.length; i++) {
      const w = Math.pow(DECAY, i);
      const m = record[i];

      let resultScore;
      if (m.outcome === '1') resultScore = 1;        // homeCode won
      else if (m.outcome === 'X') resultScore = 0;   // Draw
      else resultScore = -1;                           // homeCode lost

      weightedScore += resultScore * w;
      totalWeight += w;
    }

    const normalizedScore = weightedScore / totalWeight;
    return normalizedScore * this.H2H_WEIGHT;
  },

  /**
   * Full H2H summary for UI display
   *
   * @param {Object} h2hMap
   * @param {string} homeCode
   * @param {string} awayCode
   * @param {string} homeName
   * @param {string} awayName
   * @returns {Object}
   */
  getH2HSummary(h2hMap, homeCode, awayCode, homeName, awayName) {
    const record = this.getH2HRecord(h2hMap, homeCode, awayCode);

    if (record.length === 0) {
      return {
        played: 0, homeWins: 0, draws: 0, awayWins: 0,
        homeWinPct: 0, drawPct: 0, awayWinPct: 0,
        recentMatches: [], modifier: 0
      };
    }

    const homeWins = record.filter(m => m.outcome === '1').length;
    const draws    = record.filter(m => m.outcome === 'X').length;
    const awayWins = record.filter(m => m.outcome === '2').length;
    const played   = record.length;

    return {
      played,
      homeWins,
      draws,
      awayWins,
      homeWinPct: ((homeWins / played) * 100).toFixed(0),
      drawPct:    ((draws    / played) * 100).toFixed(0),
      awayWinPct: ((awayWins / played) * 100).toFixed(0),
      homeName: homeName || homeCode,
      awayName: awayName || awayCode,
      recentMatches: record.slice(0, 5).map(m => ({
        date: m.date,
        homeGoals: m.homeGoals,
        awayGoals: m.awayGoals,
        result: m.outcome === '1' ? (homeName || homeCode)
               : m.outcome === '2' ? (awayName || awayCode)
               : 'Draw'
      })),
      modifier: this.calculateH2HModifier(h2hMap, homeCode, awayCode)
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { H2HEngine };
}
