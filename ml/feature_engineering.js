/**
 * Feature Engineering Module for World Cup 2026 ML Prediction
 * 
 * Transforms raw team/player data into model-ready feature vectors.
 * Handles normalization, composite feature construction, and geographical calculations.
 */

const FeatureEngineering = {

  // =============== NORMALIZATION ===============

  /**
   * Min-Max normalization to [0, 1]
   */
  minMaxNormalize(values) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    if (max === min) return values.map(() => 0.5);
    return values.map(v => (v - min) / (max - min));
  },

  /**
   * Z-score standardization
   */
  zScoreNormalize(values) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const std = Math.sqrt(values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length);
    if (std === 0) return values.map(() => 0);
    return values.map(v => (v - mean) / std);
  },

  /**
   * Softmax for converting raw scores to probabilities
   */
  softmax(values, temperature = 1.0) {
    const maxVal = Math.max(...values);
    const exps = values.map(v => Math.exp((v - maxVal) / temperature));
    const sumExps = exps.reduce((a, b) => a + b, 0);
    return exps.map(e => e / sumExps);
  },

  // =============== COMPOSITE FEATURES ===============

  /**
   * Calculate a team's composite strength score (0-100)
   * Weighted combination of multiple raw features
   */
  calculateStrengthScore(team) {
    const weights = {
      eloRating: 0.20,
      impliedProb: 0.20,
      squadDepth: 0.15,
      historicalPedigree: 0.10,
      tacticalOffense: 0.08,
      tacticalDefense: 0.08,
      managerExp: 0.07,
      recentFormGoals: 0.05,
      recentFormDefense: 0.04,
      starDependencyPenalty: -0.03
    };

    // Normalize Elo to 0-1 (range roughly 1300-1920)
    const eloNorm = Math.max(0, Math.min(1, (team.eloRating - 1300) / 620));
    
    // Implied probability is already 0-1
    const probNorm = Math.min(1, team.impliedProb * 5); // Scale up since max is ~0.185
    
    // Squad depth is 1-10, normalize to 0-1
    const depthNorm = (team.squadDepth - 1) / 9;
    
    // Historical pedigree is 1-10
    const histNorm = (team.historicalPedigree - 1) / 9;
    
    // Tactical scores already 0-1
    const offNorm = team.tacticalStyle.offensive;
    const defNorm = team.tacticalStyle.defensive;
    
    // Manager experience 1-10
    const mgrNorm = (team.managerExpScore - 1) / 9;
    
    // Form: goals scored (higher better), goals conceded (lower better)
    const formGoalsNorm = Math.min(1, team.recentForm.goalsFor / 4.0);
    const formDefNorm = Math.max(0, 1 - team.recentForm.goalsAgainst / 2.0);
    
    // Star dependency penalty (higher dependency = worse)
    const starPenalty = team.starDependency;

    const rawScore = 
      weights.eloRating * eloNorm +
      weights.impliedProb * probNorm +
      weights.squadDepth * depthNorm +
      weights.historicalPedigree * histNorm +
      weights.tacticalOffense * offNorm +
      weights.tacticalDefense * defNorm +
      weights.managerExp * mgrNorm +
      weights.recentFormGoals * formGoalsNorm +
      weights.recentFormDefense * formDefNorm +
      weights.starDependencyPenalty * starPenalty;

    return Math.max(0, Math.min(100, rawScore * 100));
  },

  /**
   * Calculate injury impact modifier (reduces team strength)
   * Returns a multiplier 0.7-1.0 (1.0 = no injuries)
   */
  calculateInjuryImpact(team) {
    if (!team.injuredPlayers || team.injuredPlayers.length === 0) return 1.0;

    let totalImpact = 0;
    for (const injury of team.injuredPlayers) {
      let severityMultiplier;
      switch (injury.status) {
        case 'out': severityMultiplier = 1.0; break;
        case 'doubtful': severityMultiplier = 0.7; break;
        case 'managing': severityMultiplier = 0.4; break;
        default: severityMultiplier = 0.3;
      }
      totalImpact += (injury.impact / 10) * severityMultiplier;
    }
    
    // Cap the total impact and convert to multiplier
    const normalizedImpact = Math.min(0.3, totalImpact * 0.1);
    return 1.0 - normalizedImpact;
  },

  /**
   * Calculate geographical advantage for a team in a specific group
   */
  calculateGeographicalAdvantage(team, group) {
    let advantage = 0;

    // Home nation advantage
    advantage += team.homeAdvantage * 0.15;

    // Altitude adaptation
    if (group && group.venues) {
      const avgAltitude = group.venues.reduce((sum, v) => sum + v.altitudeFt, 0) / group.venues.length;
      if (avgAltitude > 3000) {
        advantage += team.altitudeAdaptation * 0.12;
      }
    }

    return advantage;
  },

  /**
   * Calculate a team's tournament endurance score
   * Predicts ability to sustain performance over 8 matches
   */
  calculateEnduranceScore(team) {
    // Squad depth is the primary driver
    const depthFactor = team.squadDepth / 10;
    
    // Injury burden reduces endurance
    const injuryFactor = this.calculateInjuryImpact(team);
    
    // Star dependency hurts endurance (injuries/fatigue to key player is devastating)
    const dependencyFactor = 1 - (team.starDependency * 0.3);
    
    // Age-related fatigue (approximated by manager experience as proxy for team maturity)
    const youthFactor = team.managerExpScore > 7 ? 0.9 : 1.0; // Very experienced managers often have older squads
    
    return depthFactor * injuryFactor * dependencyFactor * youthFactor;
  },

  /**
   * Build complete feature vector for a team
   * Returns normalized array suitable for ML model input
   */
  buildFeatureVector(team, group) {
    const strengthScore = this.calculateStrengthScore(team);
    const injuryImpact = this.calculateInjuryImpact(team);
    const geoAdvantage = this.calculateGeographicalAdvantage(team, group);
    const endurance = this.calculateEnduranceScore(team);
    
    return {
      teamCode: team.code,
      teamName: team.name,
      injuryImpact,
      features: {
        strengthScore: strengthScore / 100,
        injuryImpact,
        geoAdvantage,
        endurance,
        eloNormalized: (team.eloRating - 1300) / 620,
        impliedProbNormalized: Math.min(1, team.impliedProb * 5),
        squadDepthNormalized: (team.squadDepth - 1) / 9,
        offensiveRating: team.tacticalStyle.offensive,
        defensiveRating: team.tacticalStyle.defensive,
        transitionRating: team.tacticalStyle.transition,
        possessionRating: team.tacticalStyle.possession,
        historicalNormalized: (team.historicalPedigree - 1) / 9,
        managerExpNormalized: (team.managerExpScore - 1) / 9,
        starDependency: team.starDependency,
        homeAdvantage: team.homeAdvantage,
        altitudeAdaptation: team.altitudeAdaptation,
        goalsForPerGame: Math.min(1, team.recentForm.goalsFor / 3.0),
        goalsAgainstPerGame: Math.min(1, team.recentForm.goalsAgainst / 2.0),
        groupDifficulty: team.groupDifficulty / 10,
        injurySeverity: team.injurySeverity / 10
      },
      // Computed composite score used for match prediction
      compositeScore: strengthScore * injuryImpact * (1 + geoAdvantage),
      // Tournament depth prediction
      tournamentEndurance: endurance
    };
  },

  /**
   * Calculate pairwise match strength differential
   * Used for head-to-head match outcome prediction
   */
  calculateMatchDifferential(teamAFeatures, teamBFeatures) {
    const featureWeights = {
      strengthScore: 0.30,
      eloNormalized: 0.15,
      offensiveRating: 0.10,
      defensiveRating: 0.10,
      transitionRating: 0.05,
      historicalNormalized: 0.08,
      managerExpNormalized: 0.05,
      goalsForPerGame: 0.07,
      goalsAgainstPerGame: -0.05,
      homeAdvantage: 0.05
    };

    let differential = 0;
    for (const [feature, weight] of Object.entries(featureWeights)) {
      const aVal = teamAFeatures.features[feature] || 0;
      const bVal = teamBFeatures.features[feature] || 0;
      differential += (aVal - bVal) * weight;
    }

    // Apply injury impacts (with NaN guard)
    const aInjury = teamAFeatures.injuryImpact || 1;
    const bInjury = teamBFeatures.injuryImpact || 1;
    differential *= (aInjury / bInjury);

    // Final NaN guard
    if (isNaN(differential) || !isFinite(differential)) {
      differential = 0;
    }

    return differential;
  },

  /**
   * Build all feature vectors for all teams
   */
  buildAllFeatureVectors(teams, groups) {
    const vectors = {};
    for (const team of teams) {
      const group = groups.find(g => g.teams.includes(team.code));
      vectors[team.code] = this.buildFeatureVector(team, group);
    }
    return vectors;
  },

  // =============== GOLDEN BOOT FEATURES ===============

  /**
   * Build Golden Boot prediction features for a player
   */
  buildGoldenBootFeatures(player, teamFeatureVector) {
    // Expected minutes normalized (max ~640 minutes for 8 full matches)
    const minutesNorm = player.expectedMinutes / 720;
    
    // Goal scoring rate
    const goalRate = player.goalsPerGame;
    
    // Club season form
    const clubFormNorm = player.clubGoals / 30; // Normalize against top scorer benchmark
    
    // Penalty bonus
    const penaltyBonus = player.penaltyTaker ? 0.15 : 0;
    
    // Fatigue/injury penalty
    const fitnessPenalty = player.injuryStatus === 'fit' ? 0 : 
                           player.injuryStatus === 'managing' ? 0.1 :
                           player.injuryStatus === 'doubtful' ? 0.25 : 0.5;
    
    // Team's expected tournament depth boosts minutes
    const teamDepthBoost = teamFeatureVector ? teamFeatureVector.compositeScore / 100 : 0.5;
    
    // Age-related fatigue for 8-match tournament
    const agePenalty = player.age > 35 ? 0.15 : player.age > 32 ? 0.08 : 0;

    const rawScore = (
      goalRate * 0.30 +
      minutesNorm * 0.20 +
      clubFormNorm * 0.15 +
      penaltyBonus * 0.10 +
      teamDepthBoost * 0.15 -
      fitnessPenalty * 0.05 -
      agePenalty * 0.05
    );

    return {
      playerName: player.name,
      team: player.team,
      rawScore,
      features: {
        minutesNorm,
        goalRate,
        clubFormNorm,
        penaltyBonus,
        fitnessPenalty,
        teamDepthBoost,
        agePenalty
      }
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FeatureEngineering };
}
