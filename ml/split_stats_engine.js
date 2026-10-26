/**
 * Home/Away Split Stats Module
 *
 * Computes separate home and away performance metrics for each team
 * from historical match data, replacing the single combined form stat.
 *
 * Outputs per team:
 *   - homeWinRate, awayWinRate
 *   - homeGoalsFor/Game, awayGoalsFor/Game
 *   - homeGoalsAgainst/Game, awayGoalsAgainst/Game
 *   - homeDrawRate, awayDrawRate
 *   - streakScore: momentum modifier from last N matches
 *   - restDays: days since last match (for fixture congestion penalty)
 */

const SplitStatsEngine = {

  /**
   * Minimum matches required to trust the split stats (otherwise fall back to combined)
   */
  MIN_MATCHES: 4,

  /**
   * Number of most recent matches to check for streak momentum
   */
  STREAK_WINDOW: 5,

  /**
   * Points per day of rest that count as fatigue relief (capped at 7 days)
   */
  REST_MAX_DAYS: 7,

  /**
   * Build home/away split stats for all teams.
   *
   * @param {Array} matches - historical_matches.json .matches array (sorted by date)
   * @returns {Object} splitStats map keyed by team code
   */
  buildSplitStats(matches) {
    const stats = {};

    // Sort matches chronologically
    const sorted = [...matches].sort((a, b) => new Date(a.date) - new Date(b.date));

    for (const m of sorted) {
      const { homeCode, awayCode, homeGoals, awayGoals, actualOutcome, date } = m;

      if (!homeCode || !awayCode) continue;

      // Initialize team slots
      for (const code of [homeCode, awayCode]) {
        if (!stats[code]) {
          stats[code] = {
            home: { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
            away: { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
            allMatches: []   // chronological, used for streak + rest days
          };
        }
      }

      // Home team stats
      const h = stats[homeCode].home;
      h.played++;
      h.goalsFor     += homeGoals;
      h.goalsAgainst += awayGoals;
      if (actualOutcome === '1') h.wins++;
      else if (actualOutcome === 'X') h.draws++;
      else h.losses++;
      stats[homeCode].allMatches.push({ date, outcome: actualOutcome === '1' ? 'W' : actualOutcome === 'X' ? 'D' : 'L' });

      // Away team stats
      const a = stats[awayCode].away;
      a.played++;
      a.goalsFor     += awayGoals;
      a.goalsAgainst += homeGoals;
      if (actualOutcome === '2') a.wins++;
      else if (actualOutcome === 'X') a.draws++;
      else a.losses++;
      stats[awayCode].allMatches.push({
        date,
        outcome: actualOutcome === '2' ? 'W' : actualOutcome === 'X' ? 'D' : 'L'
      });
    }

    // Compute derived metrics for each team
    for (const code in stats) {
      const s = stats[code];

      // Home rates
      const hPlayed = Math.max(1, s.home.played);
      s.home.winRate        = s.home.wins   / hPlayed;
      s.home.drawRate       = s.home.draws  / hPlayed;
      s.home.goalsForPG     = s.home.goalsFor     / hPlayed;
      s.home.goalsAgainstPG = s.home.goalsAgainst / hPlayed;

      // Away rates
      const aPlayed = Math.max(1, s.away.played);
      s.away.winRate        = s.away.wins   / aPlayed;
      s.away.drawRate       = s.away.draws  / aPlayed;
      s.away.goalsForPG     = s.away.goalsFor     / aPlayed;
      s.away.goalsAgainstPG = s.away.goalsAgainst / aPlayed;

      // Streak score from last STREAK_WINDOW matches (W=+1, D=0, L=-1), normalized -1..+1
      const recent = s.allMatches.slice(-this.STREAK_WINDOW);
      let streakRaw = 0;
      for (const r of recent) {
        streakRaw += r.outcome === 'W' ? 1 : r.outcome === 'D' ? 0 : -1;
      }
      s.streakScore = recent.length > 0 ? streakRaw / recent.length : 0;

      // Win streak / loss streak counters (for badge display)
      let winStreak = 0, lossStreak = 0;
      for (let i = s.allMatches.length - 1; i >= 0; i--) {
        const r = s.allMatches[i].outcome;
        if (r === 'W') { if (lossStreak > 0) break; winStreak++; }
        else if (r === 'L') { if (winStreak > 0) break; lossStreak++; }
        else break;
      }
      s.currentWinStreak  = winStreak;
      s.currentLossStreak = lossStreak;

      // Rest days: days since most recent match in the dataset
      if (s.allMatches.length > 0) {
        const lastDate = new Date(s.allMatches[s.allMatches.length - 1].date);
        const now = new Date();
        s.restDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
      } else {
        s.restDays = this.REST_MAX_DAYS; // Unknown = assume rested
      }

      // Fatigue modifier: 0-3 rest days = fatigued, 4+ = fully rested
      // Returns 0.90 .. 1.00 multiplier
      s.restModifier = s.restDays >= this.REST_MAX_DAYS ? 1.0
                     : 0.90 + (s.restDays / this.REST_MAX_DAYS) * 0.10;
    }

    return stats;
  },

  /**
   * Get context-aware performance features for a team for a specific match context (home or away).
   * Returns a consistent object that the feature engineering module can consume.
   *
   * Falls back to combined stats if split data is insufficient.
   *
   * @param {Object} splitStats - from buildSplitStats()
   * @param {string} teamCode
   * @param {'home'|'away'} context
   * @returns {Object} { winRate, drawRate, goalsForPG, goalsAgainstPG, streakScore, restModifier }
   */
  getContextFeatures(splitStats, teamCode, context) {
    const s = splitStats[teamCode];

    if (!s) {
      return { winRate: 0.33, drawRate: 0.28, goalsForPG: 1.2, goalsAgainstPG: 1.2, streakScore: 0, restModifier: 1.0 };
    }

    const split = s[context];
    const hasSufficientData = split.played >= this.MIN_MATCHES;

    if (hasSufficientData) {
      return {
        winRate:        split.winRate,
        drawRate:       split.drawRate,
        goalsForPG:     split.goalsForPG,
        goalsAgainstPG: split.goalsAgainstPG,
        streakScore:    s.streakScore,
        restModifier:   s.restModifier,
        currentWinStreak:  s.currentWinStreak,
        currentLossStreak: s.currentLossStreak
      };
    }

    // Fall back: blend home+away equally
    const all = {
      played:        s.home.played + s.away.played,
      wins:          s.home.wins   + s.away.wins,
      draws:         s.home.draws  + s.away.draws,
      goalsFor:      s.home.goalsFor  + s.away.goalsFor,
      goalsAgainst:  s.home.goalsAgainst + s.away.goalsAgainst
    };
    const p = Math.max(1, all.played);
    return {
      winRate:        all.wins  / p,
      drawRate:       all.draws / p,
      goalsForPG:     all.goalsFor     / p,
      goalsAgainstPG: all.goalsAgainst / p,
      streakScore:    s.streakScore,
      restModifier:   s.restModifier,
      currentWinStreak:  s.currentWinStreak,
      currentLossStreak: s.currentLossStreak
    };
  },

  /**
   * Calculate the streak momentum modifier for the prediction differential.
   * A team on a hot streak gets a +bonus, cold streak gets a -penalty.
   *
   * Scale: streakScore (-1..+1) mapped to differential modifier (-0.06..+0.06)
   *
   * @param {number} streakScore
   * @returns {number}
   */
  streakModifier(streakScore) {
    return streakScore * 0.06;
  },

  /**
   * Calculate fixture congestion penalty modifier.
   * Reduces team effectiveness if they've played many recent matches with little rest.
   *
   * @param {Object} splitStats
   * @param {string} teamCode
   * @returns {number} multiplier 0.90..1.00
   */
  congestionPenalty(splitStats, teamCode) {
    return splitStats[teamCode] ? splitStats[teamCode].restModifier : 1.0;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SplitStatsEngine };
}
