/**
 * ML Prediction Engine for World Cup 2026
 * 
 * Pure JavaScript implementation — no external dependencies.
 * 
 * Models:
 * 1. Logistic Regression — Pairwise match outcome prediction (W/D/L)
 * 2. Ensemble Weighted Model — Tournament winner prediction
 * 3. Monte Carlo Simulation — 10,000 full tournament simulations
 * 4. Poisson Model — Golden Boot goal prediction per player
 */

const PredictionEngine = {

  // =============== RANDOM SEED FOR REPRODUCIBILITY ===============
  _seed: 42,
  
  /**
   * Seeded pseudo-random number generator (Mulberry32)
   */
  seededRandom() {
    let t = this._seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  },

  resetSeed(seed = 42) {
    this._seed = seed;
  },

  // =============== SIGMOID & LOGISTIC FUNCTIONS ===============
  
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  },

  /**
   * Three-way logistic model: Win / Draw / Loss probabilities
   * Based on the strength differential between two teams
   */
  predictMatchOutcome(teamAFeatures, teamBFeatures, featureEngine) {
    const differential = featureEngine.calculateMatchDifferential(teamAFeatures, teamBFeatures);
    
    // Base probabilities from sigmoid
    const rawWinProb = this.sigmoid(differential * 4.5);
    
    // Draw probability model: stronger when teams are close in strength
    const strengthGap = Math.abs(differential);
    const drawBase = 0.26 * Math.exp(-strengthGap * 3.5);
    
    // Normalize to get W/D/L
    const winRaw = rawWinProb * (1 - drawBase);
    const lossRaw = (1 - rawWinProb) * (1 - drawBase);
    
    const total = winRaw + drawBase + lossRaw;
    
    return {
      win: winRaw / total,
      draw: drawBase / total,
      loss: lossRaw / total,
      differential
    };
  },

  /**
   * Predict expected goals in a match using Poisson-like model
   */
  predictMatchGoals(teamAFeatures, teamBFeatures) {
    // Base expected goals per team per match
    const baseGoals = 1.25;
    
    // Team A expected goals: boost by offensive rating, penalize by opponent defense
    // Note: goalsForPerGame is now normalized to 0-1 in features, so scale back
    const aOffense = teamAFeatures.features.offensiveRating;
    const bDefense = teamBFeatures.features.defensiveRating;
    const aForm = teamAFeatures.features.goalsForPerGame; // 0-1 normalized
    
    const bOffense = teamBFeatures.features.offensiveRating;
    const aDefense = teamAFeatures.features.defensiveRating;
    const bForm = teamBFeatures.features.goalsForPerGame;
    
    const teamAGoals = baseGoals * 
      (1 + (aOffense - 0.5) * 1.2) *
      (1 - (bDefense - 0.5) * 0.6) *
      (0.7 + aForm * 0.6); // Rescale from normalized
    
    const teamBGoals = baseGoals * 
      (1 + (bOffense - 0.5) * 1.2) *
      (1 - (aDefense - 0.5) * 0.6) *
      (0.7 + bForm * 0.6);
    
    return {
      teamAGoals: Math.max(0.2, teamAGoals),
      teamBGoals: Math.max(0.2, teamBGoals),
      totalGoals: Math.max(0.5, teamAGoals + teamBGoals)
    };
  },

  // =============== GROUP STAGE SIMULATION ===============

  /**
   * Simulate a single group stage (3 matches per team)
   * Returns final standings with points and GD
   */
  simulateGroup(groupTeamFeatures, featureEngine) {
    const teams = Object.keys(groupTeamFeatures);
    const standings = {};
    
    // Initialize standings
    for (const code of teams) {
      standings[code] = { 
        code, points: 0, goalsFor: 0, goalsAgainst: 0, 
        goalDiff: 0, wins: 0, draws: 0, losses: 0 
      };
    }

    // All pairwise matches
    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        const teamA = teams[i];
        const teamB = teams[j];
        const outcome = this.predictMatchOutcome(
          groupTeamFeatures[teamA], groupTeamFeatures[teamB], featureEngine
        );
        const goals = this.predictMatchGoals(
          groupTeamFeatures[teamA], groupTeamFeatures[teamB]
        );

        // Determine match result using probabilities
        const rand = this.seededRandom();
        let goalsA, goalsB;
        
        if (rand < outcome.win) {
          // Team A wins
          goalsA = Math.round(goals.teamAGoals + this.seededRandom() * 1.5);
          goalsB = Math.max(0, Math.round(goals.teamBGoals - 0.3 + this.seededRandom() * 0.5));
          if (goalsA <= goalsB) goalsA = goalsB + 1;
          standings[teamA].points += 3;
          standings[teamA].wins++;
          standings[teamB].losses++;
        } else if (rand < outcome.win + outcome.draw) {
          // Draw
          goalsA = Math.round(goals.teamAGoals * 0.8);
          goalsB = goalsA;
          standings[teamA].points += 1;
          standings[teamB].points += 1;
          standings[teamA].draws++;
          standings[teamB].draws++;
        } else {
          // Team B wins
          goalsB = Math.round(goals.teamBGoals + this.seededRandom() * 1.5);
          goalsA = Math.max(0, Math.round(goals.teamAGoals - 0.3 + this.seededRandom() * 0.5));
          if (goalsB <= goalsA) goalsB = goalsA + 1;
          standings[teamB].points += 3;
          standings[teamB].wins++;
          standings[teamA].losses++;
        }
        
        standings[teamA].goalsFor += goalsA;
        standings[teamA].goalsAgainst += goalsB;
        standings[teamB].goalsFor += goalsB;
        standings[teamB].goalsAgainst += goalsA;
      }
    }

    // Calculate goal difference and sort
    for (const code of teams) {
      standings[code].goalDiff = standings[code].goalsFor - standings[code].goalsAgainst;
    }

    const sorted = Object.values(standings).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      return b.goalsFor - a.goalsFor;
    });

    return sorted;
  },

  // =============== KNOCKOUT STAGE SIMULATION ===============

  /**
   * Simulate a knockout match between two teams
   * Returns the winner's code
   */
  simulateKnockoutMatch(teamACode, teamBCode, allFeatures, featureEngine) {
    const teamA = allFeatures[teamACode];
    const teamB = allFeatures[teamBCode];
    
    if (!teamA || !teamB) return teamACode; // fallback
    
    const outcome = this.predictMatchOutcome(teamA, teamB, featureEngine);
    
    // In knockout: draws go to extra time + penalties
    // Slight boost to the better team in extra time (endurance)
    const rand = this.seededRandom();
    
    if (rand < outcome.win) {
      return teamACode;
    } else if (rand < outcome.win + outcome.draw) {
      // Draw => penalties (slight favorite advantage)
      const penaltyRand = this.seededRandom();
      const penaltyAdvantage = outcome.differential > 0 ? 0.55 : 0.45;
      return penaltyRand < penaltyAdvantage ? teamACode : teamBCode;
    } else {
      return teamBCode;
    }
  },

  // =============== FULL TOURNAMENT MONTE CARLO SIMULATION ===============

  /**
   * Run N full tournament simulations
   * Returns advancement probabilities for each team at each stage
   */
  runMonteCarlo(teams, groups, featureEngine, numSimulations = 10000) {
    // Build feature vectors
    const allFeatures = featureEngine.buildAllFeatureVectors(teams, groups);
    
    // Initialize counters
    const results = {};
    for (const team of teams) {
      results[team.code] = {
        code: team.code,
        name: team.name,
        flag: team.flag,
        groupWins: 0,
        qualifications: 0,  // Advance from group
        r32Wins: 0,
        r16Wins: 0,
        qfWins: 0,
        sfWins: 0,
        finalWins: 0,        // Win tournament
        finalAppearances: 0  // Reach final
      };
    }

    for (let sim = 0; sim < numSimulations; sim++) {
      this.resetSeed(sim * 7919 + 31337); // Unique seed per simulation
      
      // 1. SIMULATE ALL GROUPS
      const groupResults = {};
      const thirdPlaceTeams = [];
      
      for (const group of groups) {
        const groupFeatures = {};
        for (const code of group.teams) {
          groupFeatures[code] = allFeatures[code];
        }
        
        const standings = this.simulateGroup(groupFeatures, featureEngine);
        groupResults[group.id] = standings;
        
        // Track group winners
        if (standings[0]) results[standings[0].code].groupWins++;
        
        // Top 2 qualify automatically
        if (standings[0]) results[standings[0].code].qualifications++;
        if (standings[1]) results[standings[1].code].qualifications++;
        
        // Third place goes to pool
        if (standings[2]) {
          thirdPlaceTeams.push(standings[2]);
        }
      }
      
      // 2. SELECT BEST 8 THIRD-PLACE TEAMS
      thirdPlaceTeams.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        return b.goalsFor - a.goalsFor;
      });
      
      const qualifyingThird = thirdPlaceTeams.slice(0, 8);
      for (const team of qualifyingThird) {
        results[team.code].qualifications++;
      }

      // 3. BUILD ROUND OF 32 BRACKET
      // Proper cross-group pairings: 1st from one group faces 2nd from another
      const r32Teams = [];
      const groupIdArr = groups.map(g => g.id);
      
      // Collect all qualified teams with their finishing position
      const firstPlace = [];
      const secondPlace = [];
      
      for (let gi = 0; gi < groupIdArr.length; gi++) {
        const g = groupResults[groupIdArr[gi]];
        if (g && g[0]) firstPlace.push(g[0].code);
        if (g && g[1]) secondPlace.push(g[1].code);
      }
      
      // Cross-pair: 1st of group i vs 2nd of group (i + 6) % 12 (opposite side of bracket)
      const r32Matchups = [];
      for (let i = 0; i < Math.min(firstPlace.length, secondPlace.length); i++) {
        const oppIdx = (i + 6) % secondPlace.length;
        r32Matchups.push([firstPlace[i], secondPlace[oppIdx]]);
      }
      
      // Add third-place team matchups (best 3rd vs worst surviving 3rd)
      for (let i = 0; i < qualifyingThird.length - 1; i += 2) {
        r32Matchups.push([qualifyingThird[i].code, qualifyingThird[i + 1].code]);
      }

      // 4. SIMULATE KNOCKOUT ROUNDS
      let currentRound = r32Matchups.filter(m => m.length === 2);
      
      // Round of 32
      let r16Teams = [];
      for (const match of currentRound) {
        const winner = this.simulateKnockoutMatch(match[0], match[1], allFeatures, featureEngine);
        results[winner].r32Wins++;
        r16Teams.push(winner);
      }
      
      // Round of 16
      let qfTeams = [];
      for (let i = 0; i < r16Teams.length; i += 2) {
        if (r16Teams[i] && r16Teams[i + 1]) {
          const winner = this.simulateKnockoutMatch(r16Teams[i], r16Teams[i + 1], allFeatures, featureEngine);
          results[winner].r16Wins++;
          qfTeams.push(winner);
        }
      }
      
      // Quarter-finals
      let sfTeams = [];
      for (let i = 0; i < qfTeams.length; i += 2) {
        if (qfTeams[i] && qfTeams[i + 1]) {
          const winner = this.simulateKnockoutMatch(qfTeams[i], qfTeams[i + 1], allFeatures, featureEngine);
          results[winner].qfWins++;
          sfTeams.push(winner);
        }
      }
      
      // Semi-finals
      let finalists = [];
      for (let i = 0; i < sfTeams.length; i += 2) {
        if (sfTeams[i] && sfTeams[i + 1]) {
          const winner = this.simulateKnockoutMatch(sfTeams[i], sfTeams[i + 1], allFeatures, featureEngine);
          results[winner].sfWins++;
          finalists.push(winner);
        }
      }
      
      // Final
      if (finalists.length >= 2) {
        results[finalists[0]].finalAppearances++;
        results[finalists[1]].finalAppearances++;
        const champion = this.simulateKnockoutMatch(finalists[0], finalists[1], allFeatures, featureEngine);
        results[champion].finalWins++;
      }
    }

    // Convert to percentages
    for (const code in results) {
      const r = results[code];
      r.groupWinPct = (r.groupWins / numSimulations * 100).toFixed(1);
      r.qualifyPct = (r.qualifications / numSimulations * 100).toFixed(1);
      r.r32Pct = (r.r32Wins / numSimulations * 100).toFixed(1);
      r.r16Pct = (r.r16Wins / numSimulations * 100).toFixed(1);
      r.qfPct = (r.qfWins / numSimulations * 100).toFixed(1);
      r.sfPct = (r.sfWins / numSimulations * 100).toFixed(1);
      r.finalPct = (r.finalAppearances / numSimulations * 100).toFixed(1);
      r.winPct = (r.finalWins / numSimulations * 100).toFixed(1);
    }

    return results;
  },

  // =============== GOLDEN BOOT PREDICTION (POISSON MODEL) ===============

  /**
   * Poisson probability of scoring exactly k goals given lambda (expected goals)
   */
  poissonPMF(k, lambda) {
    if (lambda <= 0) return k === 0 ? 1 : 0;
    let logP = -lambda + k * Math.log(lambda);
    for (let i = 2; i <= k; i++) {
      logP -= Math.log(i);
    }
    return Math.exp(logP);
  },

  /**
   * Predict Golden Boot probabilities for all players
   * Uses Poisson model with expected minutes and goal rates
   */
  predictGoldenBoot(players, teamFeatures, featureEngine, numSimulations = 10000) {
    // Build player features
    const playerFeatures = players.map(p => {
      const teamFV = teamFeatures[p.teamCode];
      return featureEngine.buildGoldenBootFeatures(p, teamFV);
    });

    // Calculate expected goals per player
    const playerExpectedGoals = playerFeatures.map((pf, i) => {
      const player = players[i];
      const teamFV = teamFeatures[player.teamCode];
      
      // Expected matches: based on team's win probability scaled to 3-8 matches
      const teamStrength = teamFV ? teamFV.compositeScore / 100 : 0.3;
      const expectedMatches = 3 + teamStrength * 5; // 3 group + up to 5 knockout
      
      // Expected minutes per match
      const minutesPerMatch = player.expectedMinutes / expectedMatches;
      const minutesFraction = minutesPerMatch / 90;
      
      // Lambda (expected goals) = matches × goals per game × minute fraction × form factor
      const formFactor = player.clubGoals / 20; // Normalize club form
      const injuryFactor = player.injuryStatus === 'fit' ? 1.0 :
                           player.injuryStatus === 'managing' ? 0.85 :
                           player.injuryStatus === 'doubtful' ? 0.65 : 0.3;
      const penaltyBoost = player.penaltyTaker ? 1.12 : 1.0;
      const ageFactor = player.age > 35 ? 0.85 : player.age > 33 ? 0.92 : 1.0;
      
      const lambda = player.goalsPerGame * expectedMatches * minutesFraction * 
                      injuryFactor * penaltyBoost * ageFactor * 
                      Math.sqrt(formFactor);
      
      return {
        name: player.name,
        team: player.team,
        teamCode: player.teamCode,
        lambda: Math.max(0.5, Math.min(10, lambda)),
        expectedMatches: expectedMatches.toFixed(1),
        odds: player.goldenBootOdds,
        impliedProb: player.impliedGBProb
      };
    });

    // Monte Carlo: simulate goal counts and find winner
    const winCounts = {};
    for (const p of playerExpectedGoals) {
      winCounts[p.name] = { wins: 0, totalGoals: 0, avgGoals: 0 };
    }

    for (let sim = 0; sim < numSimulations; sim++) {
      this.resetSeed(sim * 1031 + 77777);
      
      let maxGoals = 0;
      let winners = [];
      
      for (const p of playerExpectedGoals) {
        // Sample from Poisson distribution
        let goals = 0;
        let L = Math.exp(-p.lambda);
        let k = 0;
        let pVal = 1;
        
        do {
          k++;
          pVal *= this.seededRandom();
        } while (pVal > L);
        
        goals = k - 1;
        winCounts[p.name].totalGoals += goals;
        
        if (goals > maxGoals) {
          maxGoals = goals;
          winners = [p.name];
        } else if (goals === maxGoals) {
          winners.push(p.name);
        }
      }
      
      // In case of tie, split the win
      for (const w of winners) {
        winCounts[w].wins += 1 / winners.length;
      }
    }

    // Calculate percentages
    const goldenBootResults = playerExpectedGoals.map(p => ({
      ...p,
      mlWinProb: (winCounts[p.name].wins / numSimulations * 100).toFixed(1),
      avgGoals: (winCounts[p.name].totalGoals / numSimulations).toFixed(1),
      bookmakerProb: (p.impliedProb * 100).toFixed(1),
      edge: ((winCounts[p.name].wins / numSimulations * 100) - (p.impliedProb * 100)).toFixed(1)
    }));

    return goldenBootResults.sort((a, b) => parseFloat(b.mlWinProb) - parseFloat(a.mlWinProb));
  },

  // =============== ENSEMBLE MODEL: TOURNAMENT WINNER ===============

  /**
   * Ensemble prediction combining:
   * 1. Monte Carlo simulation results
   * 2. Bookmaker implied probabilities
   * 3. Feature-based composite scores
   * 
   * Returns blended winner probabilities
   */
  ensemblePrediction(teams, monteCarloResults, featureVectors) {
    const weights = {
      monteCarlo: 0.50,    // Simulation-based
      bookmaker: 0.30,     // Market-implied
      featureBased: 0.20   // Raw feature composite
    };

    // Normalize feature-based scores to probabilities
    const compositeScores = teams.map(t => featureVectors[t.code]?.compositeScore || 0);
    const featureProbs = FeatureEngineering.softmax(compositeScores, 2.0);

    const ensembleResults = teams.map((team, i) => {
      const mc = monteCarloResults[team.code];
      const mcProb = mc ? parseFloat(mc.winPct) / 100 : 0;
      const bookProb = team.impliedProb;
      const featProb = featureProbs[i];

      const blendedProb = 
        weights.monteCarlo * mcProb +
        weights.bookmaker * bookProb +
        weights.featureBased * featProb;

      return {
        code: team.code,
        name: team.name,
        flag: team.flag,
        mcProb: (mcProb * 100).toFixed(1),
        bookProb: (bookProb * 100).toFixed(1),
        featProb: (featProb * 100).toFixed(1),
        ensembleProb: blendedProb,
        // Value indicator: positive = ML sees more value than bookmakers
        valueEdge: ((blendedProb - bookProb) * 100).toFixed(1)
      };
    });

    // Normalize ensemble probabilities to sum to 100%
    const totalProb = ensembleResults.reduce((sum, r) => sum + r.ensembleProb, 0);
    ensembleResults.forEach(r => {
      r.ensembleProb = ((r.ensembleProb / totalProb) * 100).toFixed(1);
    });

    return ensembleResults.sort((a, b) => parseFloat(b.ensembleProb) - parseFloat(a.ensembleProb));
  },

  // =============== GROUP STAGE PREDICTIONS (DETERMINISTIC) ===============

  /**
   * Predict group standings using expected outcomes (deterministic mode)
   * For display purposes — shows the most likely outcome
   */
  predictGroupStandings(groups, teams, featureEngine) {
    const allFeatures = featureEngine.buildAllFeatureVectors(teams, groups);
    const predictions = {};

    for (const group of groups) {
      const groupFeatures = {};
      for (const code of group.teams) {
        groupFeatures[code] = allFeatures[code];
      }

      // Calculate expected points for each team
      const teamExpectedPoints = {};
      for (const code of group.teams) {
        teamExpectedPoints[code] = { 
          code, expectedPoints: 0, expectedGF: 0, expectedGA: 0,
          name: allFeatures[code]?.teamName || code,
          compositeScore: allFeatures[code]?.compositeScore || 0
        };
      }

      // All matchups
      for (let i = 0; i < group.teams.length; i++) {
        for (let j = i + 1; j < group.teams.length; j++) {
          const codeA = group.teams[i];
          const codeB = group.teams[j];
          
          const outcome = this.predictMatchOutcome(
            groupFeatures[codeA], groupFeatures[codeB], featureEngine
          );
          const goals = this.predictMatchGoals(
            groupFeatures[codeA], groupFeatures[codeB]
          );

          // Expected points = 3×P(win) + 1×P(draw)
          teamExpectedPoints[codeA].expectedPoints += 3 * outcome.win + 1 * outcome.draw;
          teamExpectedPoints[codeB].expectedPoints += 3 * outcome.loss + 1 * outcome.draw;
          
          teamExpectedPoints[codeA].expectedGF += goals.teamAGoals;
          teamExpectedPoints[codeA].expectedGA += goals.teamBGoals;
          teamExpectedPoints[codeB].expectedGF += goals.teamBGoals;
          teamExpectedPoints[codeB].expectedGA += goals.teamAGoals;
        }
      }

      const sorted = Object.values(teamExpectedPoints).sort((a, b) => {
        if (Math.abs(b.expectedPoints - a.expectedPoints) > 0.1) return b.expectedPoints - a.expectedPoints;
        const gdA = a.expectedGF - a.expectedGA;
        const gdB = b.expectedGF - b.expectedGA;
        return gdB - gdA;
      });

      sorted.forEach((t, idx) => {
        t.expectedPoints = parseFloat(t.expectedPoints.toFixed(1));
        t.expectedGF = parseFloat(t.expectedGF.toFixed(1));
        t.expectedGA = parseFloat(t.expectedGA.toFixed(1));
        t.expectedGD = parseFloat((t.expectedGF - t.expectedGA).toFixed(1));
        t.position = idx + 1;
        t.qualifies = idx < 2; // Top 2 auto-qualify
      });

      predictions[group.id] = {
        groupId: group.id,
        groupName: group.name,
        description: group.description,
        difficultyRating: group.difficultyRating,
        volatilityIndex: group.volatilityIndex,
        standings: sorted
      };
    }

    return predictions;
  },

  // =============== FEATURE IMPORTANCE ANALYSIS ===============

  /**
   * Calculate feature importance by measuring correlation with win probability
   */
  calculateFeatureImportance(teams, featureVectors) {
    const features = [
      { key: 'eloNormalized', label: 'Elo Rating', category: 'Strength' },
      { key: 'squadDepthNormalized', label: 'Squad Depth', category: 'Roster' },
      { key: 'offensiveRating', label: 'Offensive Rating', category: 'Tactical' },
      { key: 'defensiveRating', label: 'Defensive Rating', category: 'Tactical' },
      { key: 'historicalNormalized', label: 'Historical Pedigree', category: 'History' },
      { key: 'managerExpNormalized', label: 'Manager Experience', category: 'Coaching' },
      { key: 'injurySeverity', label: 'Injury Impact (neg)', category: 'Medical' },
      { key: 'starDependency', label: 'Star Dependency (neg)', category: 'Risk' },
      { key: 'homeAdvantage', label: 'Home Advantage', category: 'Geography' },
      { key: 'goalsForPerGame', label: 'Goals Scored/Game', category: 'Form' },
      { key: 'transitionRating', label: 'Transition Speed', category: 'Tactical' },
      { key: 'possessionRating', label: 'Possession Control', category: 'Tactical' }
    ];

    const importances = features.map(f => {
      // Get feature values and target values (implied probability)
      const featureValues = teams.map(t => {
        const fv = featureVectors[t.code];
        return fv ? fv.features[f.key] || 0 : 0;
      });
      const targetValues = teams.map(t => t.impliedProb);

      // Calculate Pearson correlation
      const n = featureValues.length;
      const meanX = featureValues.reduce((a, b) => a + b, 0) / n;
      const meanY = targetValues.reduce((a, b) => a + b, 0) / n;
      
      let sumXY = 0, sumX2 = 0, sumY2 = 0;
      for (let i = 0; i < n; i++) {
        const dx = featureValues[i] - meanX;
        const dy = targetValues[i] - meanY;
        sumXY += dx * dy;
        sumX2 += dx * dx;
        sumY2 += dy * dy;
      }
      
      const correlation = sumX2 > 0 && sumY2 > 0 
        ? sumXY / (Math.sqrt(sumX2) * Math.sqrt(sumY2)) 
        : 0;

      return {
        ...f,
        importance: Math.abs(correlation),
        direction: correlation >= 0 ? 'positive' : 'negative',
        correlation: correlation.toFixed(3)
      };
    });

    return importances.sort((a, b) => b.importance - a.importance);
  },

  // =============== VALUE BETTING ANALYSIS ===============

  /**
   * Find where the ML model disagrees with bookmakers
   * Positive edge = ML thinks team is undervalued
   */
  findValueBets(ensembleResults, threshold = 1.0) {
    return ensembleResults
      .filter(r => parseFloat(r.valueEdge) > threshold || parseFloat(r.valueEdge) < -threshold)
      .sort((a, b) => parseFloat(b.valueEdge) - parseFloat(a.valueEdge))
      .map(r => ({
        ...r,
        verdict: parseFloat(r.valueEdge) > 0 ? 'UNDERVALUED' : 'OVERVALUED',
        strength: Math.abs(parseFloat(r.valueEdge)) > 3 ? 'STRONG' : 
                  Math.abs(parseFloat(r.valueEdge)) > 1.5 ? 'MODERATE' : 'SLIGHT'
      }));
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PredictionEngine };
}
