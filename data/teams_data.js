/**
 * 2026 FIFA World Cup — Complete Team Dataset
 * All 48 teams with multi-dimensional feature vectors derived from
 * comprehensive betting research, tactical analysis, and market data.
 *
 * LAST UPDATED: June 10, 2026 (Eve of Tournament Kickoff)
 * DATA SOURCES:
 *   - Transfermarkt.com (squad market values, player valuations)
 *   - DraftKings, FanDuel, BetMGM (outright & group winner odds)
 *   - Opta Supercomputer (10,000 simulation win probabilities)
 *   - FIFA/Coca-Cola World Ranking Elo system (June 2026)
 *   - CBC, Goal.com, Sky Sports, SI.com (injury reports)
 *   - Polymarket / Kalshi (prediction market implied probabilities)
 *
 * Feature Descriptions:
 * - name: Official team name
 * - code: FIFA 3-letter code
 * - group: Group assignment (A-L)
 * - confederation: AFC/CAF/CONCACAF/CONMEBOL/OFC/UEFA
 * - flag: Emoji flag
 * - outrightOdds: American odds for outright winner (avg across books)
 * - impliedProb: Implied probability of winning (decimal, 0-1)
 * - groupWinnerOdds: American odds to win their group
 * - groupQualProb: Probability of qualifying from group (top 2 + best 3rd)
 * - optaWinProb: Opta supercomputer win probability
 * - eloRating: FIFA Elo rating (June 2026 calculation)
 * - squadMarketValue: Transfermarkt total squad value in millions EUR
 * - squadDepth: Rotational depth score (1-10), higher = deeper bench
 * - injurySeverity: Impact of injuries on squad (0-10), higher = worse
 * - historicalPedigree: Past World Cup performance score (1-10)
 * - tacticalStyle: { possession: 0-1, defensive: 0-1, offensive: 0-1, transition: 0-1 }
 * - managerExpScore: Manager's tournament knockout experience (1-10)
 * - starDependency: Reliance on single star player (0-1, higher = more dependent)
 * - homeAdvantage: Host nation advantage (0-1)
 * - altitudeAdaptation: Comfort at altitude (0-1)
 * - keyPlayers: Array of key player names
 * - injuredPlayers: Array of { name, status: 'out'|'doubtful'|'managing'|'fit', impact: 1-10 }
 * - recentForm: Goals scored/conceded in qualifying (per game)
 * - groupDifficulty: Aggregate quality of group opponents (1-10)
 */

const TEAMS_DATA = [
  // ==================== GROUP A ====================
  {
    name: "Mexico", code: "MEX", group: "A", confederation: "CONCACAF", flag: "🇲🇽",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: -140, groupQualProb: 0.88,
    optaWinProb: 0.018, eloRating: 1692, squadMarketValue: 285,
    squadDepth: 6.5, injurySeverity: 1.5,
    historicalPedigree: 5.5, managerExpScore: 5,
    tacticalStyle: { possession: 0.55, defensive: 0.60, offensive: 0.55, transition: 0.65 },
    starDependency: 0.3, homeAdvantage: 0.85, altitudeAdaptation: 0.95,
    keyPlayers: ["Edson Alvarez", "Hirving Lozano", "Santiago Gimenez"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.8, goalsAgainst: 0.9 }, groupDifficulty: 3.5
  },
  {
    name: "Czechia", code: "CZE", group: "A", confederation: "UEFA", flag: "🇨🇿",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 300, groupQualProb: 0.55,
    optaWinProb: 0.003, eloRating: 1622, squadMarketValue: 198,
    squadDepth: 5, injurySeverity: 1,
    historicalPedigree: 4, managerExpScore: 4,
    tacticalStyle: { possession: 0.48, defensive: 0.65, offensive: 0.45, transition: 0.55 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.2,
    keyPlayers: ["Patrik Schick", "Tomas Soucek", "Vladimir Coufal"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.5, goalsAgainst: 1.0 }, groupDifficulty: 4.5
  },
  {
    name: "South Korea", code: "KOR", group: "A", confederation: "AFC", flag: "🇰🇷",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 360, groupQualProb: 0.50,
    optaWinProb: 0.003, eloRating: 1612, squadMarketValue: 210,
    squadDepth: 5, injurySeverity: 1.5,
    historicalPedigree: 5, managerExpScore: 4,
    tacticalStyle: { possession: 0.50, defensive: 0.55, offensive: 0.50, transition: 0.60 },
    starDependency: 0.45, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Son Heung-min", "Kim Min-jae", "Lee Kang-in"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.6, goalsAgainst: 0.8 }, groupDifficulty: 4.5
  },
  {
    name: "South Africa", code: "RSA", group: "A", confederation: "CAF", flag: "🇿🇦",
    outrightOdds: 50000, impliedProb: 0.002, groupWinnerOdds: 1200, groupQualProb: 0.20,
    optaWinProb: 0.001, eloRating: 1485, squadMarketValue: 52,
    squadDepth: 3.5, injurySeverity: 1,
    historicalPedigree: 2.5, managerExpScore: 3,
    tacticalStyle: { possession: 0.42, defensive: 0.55, offensive: 0.40, transition: 0.55 },
    starDependency: 0.3, homeAdvantage: 0, altitudeAdaptation: 0.70,
    keyPlayers: ["Percy Tau", "Ronwen Williams", "Themba Zwane"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.1, goalsAgainst: 1.2 }, groupDifficulty: 5.5
  },

  // ==================== GROUP B ====================
  {
    name: "Switzerland", code: "SUI", group: "B", confederation: "UEFA", flag: "🇨🇭",
    outrightOdds: 8000, impliedProb: 0.012, groupWinnerOdds: -130, groupQualProb: 0.82,
    optaWinProb: 0.010, eloRating: 1705, squadMarketValue: 312,
    squadDepth: 6.5, injurySeverity: 1,
    historicalPedigree: 5.5, managerExpScore: 6,
    tacticalStyle: { possession: 0.52, defensive: 0.75, offensive: 0.45, transition: 0.50 },
    starDependency: 0.25, homeAdvantage: 0, altitudeAdaptation: 0.60,
    keyPlayers: ["Granit Xhaka", "Manuel Akanji", "Breel Embolo"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.3, goalsAgainst: 0.33 }, groupDifficulty: 3.5
  },
  {
    name: "Canada", code: "CAN", group: "B", confederation: "CONCACAF", flag: "🇨🇦",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 200, groupQualProb: 0.55,
    optaWinProb: 0.004, eloRating: 1592, squadMarketValue: 248,
    squadDepth: 4.5, injurySeverity: 8,
    historicalPedigree: 2, managerExpScore: 4,
    tacticalStyle: { possession: 0.48, defensive: 0.50, offensive: 0.55, transition: 0.65 },
    starDependency: 0.70, homeAdvantage: 0.40, altitudeAdaptation: 0.20,
    keyPlayers: ["Alphonso Davies", "Jonathan David", "Cyle Larin"],
    injuredPlayers: [
      { name: "Alphonso Davies", status: "doubtful", impact: 9 },
      { name: "Moise Bombito", status: "doubtful", impact: 6 }
    ],
    recentForm: { goalsFor: 1.5, goalsAgainst: 1.1 }, groupDifficulty: 4.0
  },
  {
    name: "Bosnia and Herzegovina", code: "BIH", group: "B", confederation: "UEFA", flag: "🇧🇦",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 450, groupQualProb: 0.38,
    optaWinProb: 0.002, eloRating: 1562, squadMarketValue: 138,
    squadDepth: 4, injurySeverity: 1,
    historicalPedigree: 2.5, managerExpScore: 3,
    tacticalStyle: { possession: 0.45, defensive: 0.60, offensive: 0.45, transition: 0.55 },
    starDependency: 0.40, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Edin Dzeko", "Miralem Pjanic", "Ermedin Demirovic"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.3, goalsAgainst: 1.0 }, groupDifficulty: 5.0
  },
  {
    name: "Qatar", code: "QAT", group: "B", confederation: "AFC", flag: "🇶🇦",
    outrightOdds: 100000, impliedProb: 0.001, groupWinnerOdds: 3500, groupQualProb: 0.10,
    optaWinProb: 0.001, eloRating: 1442, squadMarketValue: 38,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 1.5, managerExpScore: 3,
    tacticalStyle: { possession: 0.50, defensive: 0.55, offensive: 0.35, transition: 0.45 },
    starDependency: 0.3, homeAdvantage: 0, altitudeAdaptation: 0.10,
    keyPlayers: ["Akram Afif", "Almoez Ali", "Hassan Al-Haydos"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.9, goalsAgainst: 1.3 }, groupDifficulty: 6.0
  },

  // ==================== GROUP C ====================
  {
    name: "Brazil", code: "BRA", group: "C", confederation: "CONMEBOL", flag: "🇧🇷",
    outrightOdds: 850, impliedProb: 0.105, groupWinnerOdds: -350, groupQualProb: 0.95,
    optaWinProb: 0.082, eloRating: 1842, squadMarketValue: 895,
    squadDepth: 7, injurySeverity: 9,
    historicalPedigree: 10, managerExpScore: 9,
    tacticalStyle: { possession: 0.58, defensive: 0.55, offensive: 0.80, transition: 0.80 },
    starDependency: 0.50, homeAdvantage: 0, altitudeAdaptation: 0.35,
    keyPlayers: ["Vinicius Junior", "Raphinha", "Neymar"],
    injuredPlayers: [
      { name: "Eder Militao", status: "out", impact: 8 },
      { name: "Rodrygo", status: "out", impact: 8 },
      { name: "Wesley", status: "out", impact: 4 },
      { name: "Neymar", status: "doubtful", impact: 9 }
    ],
    recentForm: { goalsFor: 2.0, goalsAgainst: 0.9 }, groupDifficulty: 3.5
  },
  {
    name: "Morocco", code: "MAR", group: "C", confederation: "CAF", flag: "🇲🇦",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: 350, groupQualProb: 0.72,
    optaWinProb: 0.015, eloRating: 1702, squadMarketValue: 340,
    squadDepth: 6, injurySeverity: 1.5,
    historicalPedigree: 5, managerExpScore: 6,
    tacticalStyle: { possession: 0.48, defensive: 0.72, offensive: 0.55, transition: 0.70 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.30,
    keyPlayers: ["Achraf Hakimi", "Youssef En-Nesyri", "Hakim Ziyech"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.6, goalsAgainst: 0.5 }, groupDifficulty: 5.0
  },
  {
    name: "Scotland", code: "SCO", group: "C", confederation: "UEFA", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 950, groupQualProb: 0.28,
    optaWinProb: 0.002, eloRating: 1568, squadMarketValue: 175,
    squadDepth: 3.5, injurySeverity: 4,
    historicalPedigree: 3, managerExpScore: 3,
    tacticalStyle: { possession: 0.45, defensive: 0.60, offensive: 0.42, transition: 0.55 },
    starDependency: 0.40, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["John McGinn", "Andy Robertson", "Scott McTominay"],
    injuredPlayers: [
      { name: "Billy Gilmour", status: "out", impact: 6 }
    ],
    recentForm: { goalsFor: 1.2, goalsAgainst: 1.0 }, groupDifficulty: 6.5
  },
  {
    name: "Haiti", code: "HAI", group: "C", confederation: "CONCACAF", flag: "🇭🇹",
    outrightOdds: 200000, impliedProb: 0.0005, groupWinnerOdds: 15000, groupQualProb: 0.05,
    optaWinProb: 0.0002, eloRating: 1352, squadMarketValue: 18,
    squadDepth: 2, injurySeverity: 0.5,
    historicalPedigree: 1, managerExpScore: 2,
    tacticalStyle: { possession: 0.38, defensive: 0.45, offensive: 0.35, transition: 0.50 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Frantzdy Pierrot", "Derrick Etienne"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.8, goalsAgainst: 1.5 }, groupDifficulty: 8.5
  },

  // ==================== GROUP D ====================
  {
    name: "United States", code: "USA", group: "D", confederation: "CONCACAF", flag: "🇺🇸",
    outrightOdds: 4000, impliedProb: 0.024, groupWinnerOdds: 130, groupQualProb: 0.82,
    optaWinProb: 0.025, eloRating: 1725, squadMarketValue: 425,
    squadDepth: 6.5, injurySeverity: 4,
    historicalPedigree: 4, managerExpScore: 5,
    tacticalStyle: { possession: 0.52, defensive: 0.55, offensive: 0.60, transition: 0.70 },
    starDependency: 0.35, homeAdvantage: 0.80, altitudeAdaptation: 0.40,
    keyPlayers: ["Christian Pulisic", "Weston McKennie", "Gio Reyna"],
    injuredPlayers: [
      { name: "Cameron Carter-Vickers", status: "out", impact: 5 },
      { name: "Johnny Cardoso", status: "out", impact: 4 }
    ],
    recentForm: { goalsFor: 1.7, goalsAgainst: 0.9 }, groupDifficulty: 5.0
  },
  {
    name: "Türkiye", code: "TUR", group: "D", confederation: "UEFA", flag: "🇹🇷",
    outrightOdds: 8000, impliedProb: 0.012, groupWinnerOdds: 180, groupQualProb: 0.72,
    optaWinProb: 0.010, eloRating: 1685, squadMarketValue: 395,
    squadDepth: 6, injurySeverity: 1,
    historicalPedigree: 4.5, managerExpScore: 5,
    tacticalStyle: { possession: 0.52, defensive: 0.58, offensive: 0.60, transition: 0.65 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Hakan Calhanoglu", "Arda Guler", "Kenan Yildiz"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.8, goalsAgainst: 0.8 }, groupDifficulty: 5.0
  },
  {
    name: "Paraguay", code: "PAR", group: "D", confederation: "CONMEBOL", flag: "🇵🇾",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 400, groupQualProb: 0.35,
    optaWinProb: 0.002, eloRating: 1548, squadMarketValue: 105,
    squadDepth: 4, injurySeverity: 1,
    historicalPedigree: 4, managerExpScore: 4,
    tacticalStyle: { possession: 0.42, defensive: 0.65, offensive: 0.40, transition: 0.55 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.55,
    keyPlayers: ["Miguel Almiron", "Julio Enciso", "Gustavo Gomez"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.1, goalsAgainst: 1.0 }, groupDifficulty: 6.0
  },
  {
    name: "Australia", code: "AUS", group: "D", confederation: "AFC", flag: "🇦🇺",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 800, groupQualProb: 0.25,
    optaWinProb: 0.002, eloRating: 1528, squadMarketValue: 92,
    squadDepth: 4, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 3,
    tacticalStyle: { possession: 0.45, defensive: 0.55, offensive: 0.45, transition: 0.60 },
    starDependency: 0.3, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Mathew Leckie", "Jackson Irvine", "Cameron Devlin"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.3, goalsAgainst: 1.1 }, groupDifficulty: 6.5
  },

  // ==================== GROUP E ====================
  {
    name: "Germany", code: "GER", group: "E", confederation: "UEFA", flag: "🇩🇪",
    outrightOdds: 1200, impliedProb: 0.077, groupWinnerOdds: -230, groupQualProb: 0.95,
    optaWinProb: 0.070, eloRating: 1815, squadMarketValue: 947,
    squadDepth: 8, injurySeverity: 3,
    historicalPedigree: 9.5, managerExpScore: 7,
    tacticalStyle: { possession: 0.58, defensive: 0.62, offensive: 0.72, transition: 0.65 },
    starDependency: 0.25, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Jamal Musiala", "Florian Wirtz", "Kai Havertz"],
    injuredPlayers: [
      { name: "Serge Gnabry", status: "out", impact: 5 },
      { name: "Lennart Karl", status: "out", impact: 3 }
    ],
    recentForm: { goalsFor: 2.2, goalsAgainst: 0.8 }, groupDifficulty: 3.0
  },
  {
    name: "Ecuador", code: "ECU", group: "E", confederation: "CONMEBOL", flag: "🇪🇨",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 340, groupQualProb: 0.55,
    optaWinProb: 0.004, eloRating: 1622, squadMarketValue: 178,
    squadDepth: 5, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 4,
    tacticalStyle: { possession: 0.45, defensive: 0.58, offensive: 0.50, transition: 0.65 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.85,
    keyPlayers: ["Moises Caicedo", "Enner Valencia", "Piero Hincapie"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.5, goalsAgainst: 0.9 }, groupDifficulty: 5.5
  },
  {
    name: "Ivory Coast", code: "CIV", group: "E", confederation: "CAF", flag: "🇨🇮",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 600, groupQualProb: 0.45,
    optaWinProb: 0.003, eloRating: 1582, squadMarketValue: 225,
    squadDepth: 5, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 4,
    tacticalStyle: { possession: 0.46, defensive: 0.55, offensive: 0.55, transition: 0.65 },
    starDependency: 0.3, homeAdvantage: 0, altitudeAdaptation: 0.30,
    keyPlayers: ["Sebastien Haller", "Nicolas Pepe", "Franck Kessie"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.4, goalsAgainst: 0.8 }, groupDifficulty: 6.0
  },
  {
    name: "Curaçao", code: "CUW", group: "E", confederation: "CONCACAF", flag: "🇨🇼",
    outrightOdds: 200000, impliedProb: 0.0005, groupWinnerOdds: 17500, groupQualProb: 0.03,
    optaWinProb: 0.0001, eloRating: 1318, squadMarketValue: 12,
    squadDepth: 2, injurySeverity: 0.5,
    historicalPedigree: 1, managerExpScore: 2,
    tacticalStyle: { possession: 0.38, defensive: 0.45, offensive: 0.35, transition: 0.50 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.10,
    keyPlayers: ["Baciro Balde", "Juninho Bacuna"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.7, goalsAgainst: 1.4 }, groupDifficulty: 9.0
  },

  // ==================== GROUP F ====================
  {
    name: "Netherlands", code: "NED", group: "F", confederation: "UEFA", flag: "🇳🇱",
    outrightOdds: 1800, impliedProb: 0.053, groupWinnerOdds: -130, groupQualProb: 0.88,
    optaWinProb: 0.048, eloRating: 1782, squadMarketValue: 820,
    squadDepth: 6.5, injurySeverity: 7,
    historicalPedigree: 8, managerExpScore: 6,
    tacticalStyle: { possession: 0.58, defensive: 0.60, offensive: 0.65, transition: 0.60 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Virgil van Dijk", "Cody Gakpo", "Memphis Depay"],
    injuredPlayers: [
      { name: "Xavi Simons", status: "out", impact: 8 },
      { name: "Jurrien Timber", status: "out", impact: 7 }
    ],
    recentForm: { goalsFor: 1.8, goalsAgainst: 0.7 }, groupDifficulty: 4.5
  },
  {
    name: "Japan", code: "JPN", group: "F", confederation: "AFC", flag: "🇯🇵",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: 280, groupQualProb: 0.70,
    optaWinProb: 0.015, eloRating: 1682, squadMarketValue: 310,
    squadDepth: 6, injurySeverity: 1,
    historicalPedigree: 4, managerExpScore: 5,
    tacticalStyle: { possession: 0.52, defensive: 0.55, offensive: 0.62, transition: 0.75 },
    starDependency: 0.25, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Takefusa Kubo", "Ritsu Doan", "Wataru Endo"],
    injuredPlayers: [],
    recentForm: { goalsFor: 2.0, goalsAgainst: 0.6 }, groupDifficulty: 4.5
  },
  {
    name: "Sweden", code: "SWE", group: "F", confederation: "UEFA", flag: "🇸🇪",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 460, groupQualProb: 0.40,
    optaWinProb: 0.003, eloRating: 1598, squadMarketValue: 265,
    squadDepth: 5, injurySeverity: 1,
    historicalPedigree: 5, managerExpScore: 4,
    tacticalStyle: { possession: 0.47, defensive: 0.62, offensive: 0.48, transition: 0.55 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Alexander Isak", "Dejan Kulusevski", "Viktor Gyokeres"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.4, goalsAgainst: 0.9 }, groupDifficulty: 5.5
  },
  {
    name: "Tunisia", code: "TUN", group: "F", confederation: "CAF", flag: "🇹🇳",
    outrightOdds: 50000, impliedProb: 0.002, groupWinnerOdds: 1200, groupQualProb: 0.18,
    optaWinProb: 0.001, eloRating: 1498, squadMarketValue: 68,
    squadDepth: 3.5, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 3,
    tacticalStyle: { possession: 0.44, defensive: 0.65, offensive: 0.38, transition: 0.50 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Youssef Msakni", "Aissa Laidouni", "Wahbi Khazri"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.0, goalsAgainst: 0.8 }, groupDifficulty: 6.5
  },

  // ==================== GROUP G ====================
  {
    name: "Belgium", code: "BEL", group: "G", confederation: "UEFA", flag: "🇧🇪",
    outrightOdds: 3000, impliedProb: 0.032, groupWinnerOdds: -220, groupQualProb: 0.90,
    optaWinProb: 0.030, eloRating: 1752, squadMarketValue: 580,
    squadDepth: 6.5, injurySeverity: 2,
    historicalPedigree: 6, managerExpScore: 5,
    tacticalStyle: { possession: 0.55, defensive: 0.58, offensive: 0.65, transition: 0.68 },
    starDependency: 0.40, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Kevin De Bruyne", "Romelu Lukaku", "Jeremy Doku"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.9, goalsAgainst: 0.8 }, groupDifficulty: 3.0
  },
  {
    name: "Egypt", code: "EGY", group: "G", confederation: "CAF", flag: "🇪🇬",
    outrightOdds: 15000, impliedProb: 0.007, groupWinnerOdds: 400, groupQualProb: 0.50,
    optaWinProb: 0.003, eloRating: 1582, squadMarketValue: 168,
    squadDepth: 4.5, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 4,
    tacticalStyle: { possession: 0.45, defensive: 0.60, offensive: 0.50, transition: 0.60 },
    starDependency: 0.60, homeAdvantage: 0, altitudeAdaptation: 0.25,
    keyPlayers: ["Mohamed Salah", "Omar Marmoush", "Mohamed Elneny"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.4, goalsAgainst: 0.7 }, groupDifficulty: 5.5
  },
  {
    name: "Iran", code: "IRN", group: "G", confederation: "AFC", flag: "🇮🇷",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 800, groupQualProb: 0.30,
    optaWinProb: 0.002, eloRating: 1558, squadMarketValue: 72,
    squadDepth: 4, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 4,
    tacticalStyle: { possession: 0.42, defensive: 0.70, offensive: 0.38, transition: 0.55 },
    starDependency: 0.40, homeAdvantage: 0, altitudeAdaptation: 0.30,
    keyPlayers: ["Mehdi Taremi", "Sardar Azmoun", "Alireza Jahanbakhsh"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.2, goalsAgainst: 0.7 }, groupDifficulty: 6.0
  },
  {
    name: "New Zealand", code: "NZL", group: "G", confederation: "OFC", flag: "🇳🇿",
    outrightOdds: 100000, impliedProb: 0.001, groupWinnerOdds: 2000, groupQualProb: 0.10,
    optaWinProb: 0.001, eloRating: 1398, squadMarketValue: 28,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 1.5, managerExpScore: 2,
    tacticalStyle: { possession: 0.40, defensive: 0.55, offensive: 0.35, transition: 0.50 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.10,
    keyPlayers: ["Chris Wood", "Sarpreet Singh", "Liberato Cacace"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.9, goalsAgainst: 1.2 }, groupDifficulty: 7.5
  },

  // ==================== GROUP H ====================
  {
    name: "Spain", code: "ESP", group: "H", confederation: "UEFA", flag: "🇪🇸",
    outrightOdds: 450, impliedProb: 0.182, groupWinnerOdds: -450, groupQualProb: 0.98,
    optaWinProb: 0.160, eloRating: 1874, squadMarketValue: 1220,
    squadDepth: 9.5, injurySeverity: 4,
    historicalPedigree: 9, managerExpScore: 7,
    tacticalStyle: { possession: 0.72, defensive: 0.68, offensive: 0.82, transition: 0.75 },
    starDependency: 0.20, homeAdvantage: 0, altitudeAdaptation: 0.25,
    keyPlayers: ["Lamine Yamal", "Nico Williams", "Rodri", "Pedri"],
    injuredPlayers: [
      { name: "Lamine Yamal", status: "managing", impact: 9 },
      { name: "Nico Williams", status: "managing", impact: 7 },
      { name: "Victor Munoz", status: "managing", impact: 4 }
    ],
    recentForm: { goalsFor: 2.4, goalsAgainst: 0.5 }, groupDifficulty: 2.0
  },
  {
    name: "Uruguay", code: "URU", group: "H", confederation: "CONMEBOL", flag: "🇺🇾",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: 420, groupQualProb: 0.78,
    optaWinProb: 0.015, eloRating: 1698, squadMarketValue: 365,
    squadDepth: 6, injurySeverity: 1,
    historicalPedigree: 7, managerExpScore: 6,
    tacticalStyle: { possession: 0.48, defensive: 0.68, offensive: 0.55, transition: 0.62 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.55,
    keyPlayers: ["Federico Valverde", "Darwin Nunez", "Ronald Araujo"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.6, goalsAgainst: 0.7 }, groupDifficulty: 4.0
  },
  {
    name: "Saudi Arabia", code: "KSA", group: "H", confederation: "AFC", flag: "🇸🇦",
    outrightOdds: 50000, impliedProb: 0.002, groupWinnerOdds: 4000, groupQualProb: 0.10,
    optaWinProb: 0.001, eloRating: 1458, squadMarketValue: 35,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 3, managerExpScore: 3,
    tacticalStyle: { possession: 0.46, defensive: 0.55, offensive: 0.42, transition: 0.55 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Salem Al-Dawsari", "Firas Al-Buraikan"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.1, goalsAgainst: 1.0 }, groupDifficulty: 7.5
  },
  {
    name: "Cape Verde", code: "CPV", group: "H", confederation: "CAF", flag: "🇨🇻",
    outrightOdds: 100000, impliedProb: 0.001, groupWinnerOdds: 6500, groupQualProb: 0.06,
    optaWinProb: 0.0005, eloRating: 1388, squadMarketValue: 22,
    squadDepth: 2.5, injurySeverity: 0.5,
    historicalPedigree: 1, managerExpScore: 2,
    tacticalStyle: { possession: 0.40, defensive: 0.52, offensive: 0.38, transition: 0.50 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Garry Rodrigues", "Ryan Mendes"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.8, goalsAgainst: 1.1 }, groupDifficulty: 8.5
  },

  // ==================== GROUP I ====================
  {
    name: "France", code: "FRA", group: "I", confederation: "UEFA", flag: "🇫🇷",
    outrightOdds: 500, impliedProb: 0.167, groupWinnerOdds: -220, groupQualProb: 0.96,
    optaWinProb: 0.129, eloRating: 1871, squadMarketValue: 1520,
    squadDepth: 9.5, injurySeverity: 2,
    historicalPedigree: 9.5, managerExpScore: 9,
    tacticalStyle: { possession: 0.58, defensive: 0.70, offensive: 0.85, transition: 0.82 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Kylian Mbappe", "Ousmane Dembele", "Michael Olise", "Antoine Griezmann"],
    injuredPlayers: [
      { name: "Hugo Ekitike", status: "out", impact: 4 },
      { name: "William Saliba", status: "fit", impact: 0 }
    ],
    recentForm: { goalsFor: 2.3, goalsAgainst: 0.6 }, groupDifficulty: 5.5
  },
  {
    name: "Norway", code: "NOR", group: "I", confederation: "UEFA", flag: "🇳🇴",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: 290, groupQualProb: 0.65,
    optaWinProb: 0.012, eloRating: 1662, squadMarketValue: 490,
    squadDepth: 5, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 4,
    tacticalStyle: { possession: 0.48, defensive: 0.48, offensive: 0.82, transition: 0.72 },
    starDependency: 0.65, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Erling Haaland", "Martin Odegaard", "Alexander Sorloth"],
    injuredPlayers: [],
    recentForm: { goalsFor: 4.62, goalsAgainst: 0.9 }, groupDifficulty: 6.5
  },
  {
    name: "Senegal", code: "SEN", group: "I", confederation: "CAF", flag: "🇸🇳",
    outrightOdds: 8000, impliedProb: 0.012, groupWinnerOdds: 750, groupQualProb: 0.40,
    optaWinProb: 0.008, eloRating: 1632, squadMarketValue: 275,
    squadDepth: 5.5, injurySeverity: 1,
    historicalPedigree: 4, managerExpScore: 5,
    tacticalStyle: { possession: 0.44, defensive: 0.62, offensive: 0.55, transition: 0.72 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.25,
    keyPlayers: ["Sadio Mane", "Kalidou Koulibaly", "Nicolas Jackson", "Iliman Ndiaye"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.5, goalsAgainst: 0.6 }, groupDifficulty: 7.5
  },
  {
    name: "Iraq", code: "IRQ", group: "I", confederation: "AFC", flag: "🇮🇶",
    outrightOdds: 100000, impliedProb: 0.001, groupWinnerOdds: 7000, groupQualProb: 0.06,
    optaWinProb: 0.0005, eloRating: 1418, squadMarketValue: 18,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 2, managerExpScore: 2,
    tacticalStyle: { possession: 0.42, defensive: 0.55, offensive: 0.38, transition: 0.50 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Mohanad Ali", "Ali Adnan"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.9, goalsAgainst: 1.1 }, groupDifficulty: 9.0
  },

  // ==================== GROUP J ====================
  {
    name: "Argentina", code: "ARG", group: "J", confederation: "CONMEBOL", flag: "🇦🇷",
    outrightOdds: 950, impliedProb: 0.095, groupWinnerOdds: -265, groupQualProb: 0.95,
    optaWinProb: 0.090, eloRating: 1876, squadMarketValue: 765,
    squadDepth: 8, injurySeverity: 5,
    historicalPedigree: 9.5, managerExpScore: 8,
    tacticalStyle: { possession: 0.55, defensive: 0.65, offensive: 0.78, transition: 0.75 },
    starDependency: 0.45, homeAdvantage: 0, altitudeAdaptation: 0.40,
    keyPlayers: ["Lionel Messi", "Julian Alvarez", "Enzo Fernandez"],
    injuredPlayers: [
      { name: "Juan Foyth", status: "out", impact: 5 },
      { name: "Joaquin Panichelli", status: "out", impact: 4 },
      { name: "Emiliano Martinez", status: "managing", impact: 7 },
      { name: "Cristian Romero", status: "managing", impact: 7 }
    ],
    recentForm: { goalsFor: 2.0, goalsAgainst: 0.7 }, groupDifficulty: 2.5
  },
  {
    name: "Austria", code: "AUT", group: "J", confederation: "UEFA", flag: "🇦🇹",
    outrightOdds: 10000, impliedProb: 0.010, groupWinnerOdds: 370, groupQualProb: 0.52,
    optaWinProb: 0.005, eloRating: 1648, squadMarketValue: 305,
    squadDepth: 5, injurySeverity: 5,
    historicalPedigree: 3.5, managerExpScore: 5,
    tacticalStyle: { possession: 0.50, defensive: 0.60, offensive: 0.55, transition: 0.68 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.45,
    keyPlayers: ["David Alaba", "Marcel Sabitzer", "Konrad Laimer"],
    injuredPlayers: [
      { name: "Christoph Baumgartner", status: "out", impact: 7 }
    ],
    recentForm: { goalsFor: 1.6, goalsAgainst: 0.8 }, groupDifficulty: 5.0
  },
  {
    name: "Algeria", code: "ALG", group: "J", confederation: "CAF", flag: "🇩🇿",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 750, groupQualProb: 0.30,
    optaWinProb: 0.002, eloRating: 1558, squadMarketValue: 132,
    squadDepth: 4.5, injurySeverity: 1,
    historicalPedigree: 3, managerExpScore: 3,
    tacticalStyle: { possession: 0.46, defensive: 0.58, offensive: 0.48, transition: 0.60 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.25,
    keyPlayers: ["Riyad Mahrez", "Said Benrahma", "Ismail Bennacer"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.3, goalsAgainst: 0.8 }, groupDifficulty: 5.5
  },
  {
    name: "Jordan", code: "JOR", group: "J", confederation: "AFC", flag: "🇯🇴",
    outrightOdds: 100000, impliedProb: 0.001, groupWinnerOdds: 5500, groupQualProb: 0.07,
    optaWinProb: 0.0005, eloRating: 1422, squadMarketValue: 15,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 1.5, managerExpScore: 2,
    tacticalStyle: { possession: 0.42, defensive: 0.58, offensive: 0.35, transition: 0.48 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Musa Al-Taamari", "Yazan Al-Naimat"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.9, goalsAgainst: 1.0 }, groupDifficulty: 7.5
  },

  // ==================== GROUP K ====================
  {
    name: "Portugal", code: "POR", group: "K", confederation: "UEFA", flag: "🇵🇹",
    outrightOdds: 800, impliedProb: 0.111, groupWinnerOdds: -220, groupQualProb: 0.94,
    optaWinProb: 0.075, eloRating: 1852, squadMarketValue: 1010,
    squadDepth: 9, injurySeverity: 1,
    historicalPedigree: 7, managerExpScore: 7,
    tacticalStyle: { possession: 0.62, defensive: 0.65, offensive: 0.75, transition: 0.70 },
    starDependency: 0.25, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Bruno Fernandes", "Bernardo Silva", "Rafael Leao", "Cristiano Ronaldo"],
    injuredPlayers: [],
    recentForm: { goalsFor: 2.2, goalsAgainst: 0.6 }, groupDifficulty: 3.5
  },
  {
    name: "Colombia", code: "COL", group: "K", confederation: "CONMEBOL", flag: "🇨🇴",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: 200, groupQualProb: 0.72,
    optaWinProb: 0.012, eloRating: 1682, squadMarketValue: 315,
    squadDepth: 6, injurySeverity: 1,
    historicalPedigree: 5, managerExpScore: 5,
    tacticalStyle: { possession: 0.52, defensive: 0.58, offensive: 0.60, transition: 0.68 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.60,
    keyPlayers: ["Luis Diaz", "James Rodriguez", "Jefferson Lerma"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.7, goalsAgainst: 0.7 }, groupDifficulty: 4.0
  },
  {
    name: "DR Congo", code: "COD", group: "K", confederation: "CAF", flag: "🇨🇩",
    outrightOdds: 50000, impliedProb: 0.002, groupWinnerOdds: 2000, groupQualProb: 0.15,
    optaWinProb: 0.001, eloRating: 1478, squadMarketValue: 65,
    squadDepth: 3.5, injurySeverity: 0.5,
    historicalPedigree: 2, managerExpScore: 3,
    tacticalStyle: { possession: 0.42, defensive: 0.55, offensive: 0.45, transition: 0.60 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.25,
    keyPlayers: ["Chancel Mbemba", "Cedric Bakambu", "Yoane Wissa"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.1, goalsAgainst: 1.0 }, groupDifficulty: 7.0
  },
  {
    name: "Uzbekistan", code: "UZB", group: "K", confederation: "AFC", flag: "🇺🇿",
    outrightOdds: 75000, impliedProb: 0.0013, groupWinnerOdds: 3000, groupQualProb: 0.08,
    optaWinProb: 0.0005, eloRating: 1438, squadMarketValue: 32,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 2, managerExpScore: 2,
    tacticalStyle: { possession: 0.44, defensive: 0.55, offensive: 0.40, transition: 0.52 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Eldor Shomurodov", "Jaloliddin Masharipov"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.0, goalsAgainst: 0.9 }, groupDifficulty: 7.5
  },

  // ==================== GROUP L ====================
  {
    name: "England", code: "ENG", group: "L", confederation: "UEFA", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    outrightOdds: 675, impliedProb: 0.129, groupWinnerOdds: -350, groupQualProb: 0.96,
    optaWinProb: 0.108, eloRating: 1868, squadMarketValue: 1360,
    squadDepth: 9, injurySeverity: 3,
    historicalPedigree: 8, managerExpScore: 8,
    tacticalStyle: { possession: 0.58, defensive: 0.65, offensive: 0.78, transition: 0.72 },
    starDependency: 0.25, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Harry Kane", "Jude Bellingham", "Bukayo Saka", "Declan Rice"],
    injuredPlayers: [
      { name: "Ben White", status: "out", impact: 5 }
    ],
    recentForm: { goalsFor: 2.1, goalsAgainst: 0.6 }, groupDifficulty: 2.5
  },
  {
    name: "Croatia", code: "CRO", group: "L", confederation: "UEFA", flag: "🇭🇷",
    outrightOdds: 5000, impliedProb: 0.020, groupWinnerOdds: 350, groupQualProb: 0.70,
    optaWinProb: 0.015, eloRating: 1692, squadMarketValue: 345,
    squadDepth: 6, injurySeverity: 3,
    historicalPedigree: 7, managerExpScore: 7,
    tacticalStyle: { possession: 0.58, defensive: 0.60, offensive: 0.60, transition: 0.58 },
    starDependency: 0.40, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Luka Modric", "Josko Gvardiol", "Mateo Kovacic"],
    injuredPlayers: [
      { name: "Luka Modric", status: "fit", impact: 0 },
      { name: "Josko Gvardiol", status: "fit", impact: 0 }
    ],
    recentForm: { goalsFor: 1.5, goalsAgainst: 0.7 }, groupDifficulty: 4.5
  },
  {
    name: "Ghana", code: "GHA", group: "L", confederation: "CAF", flag: "🇬🇭",
    outrightOdds: 25000, impliedProb: 0.004, groupWinnerOdds: 1000, groupQualProb: 0.25,
    optaWinProb: 0.002, eloRating: 1528, squadMarketValue: 145,
    squadDepth: 4, injurySeverity: 1,
    historicalPedigree: 4, managerExpScore: 3,
    tacticalStyle: { possession: 0.44, defensive: 0.52, offensive: 0.50, transition: 0.65 },
    starDependency: 0.35, homeAdvantage: 0, altitudeAdaptation: 0.20,
    keyPlayers: ["Mohammed Kudus", "Thomas Partey", "Jordan Ayew"],
    injuredPlayers: [],
    recentForm: { goalsFor: 1.2, goalsAgainst: 1.0 }, groupDifficulty: 6.5
  },
  {
    name: "Panama", code: "PAN", group: "L", confederation: "CONCACAF", flag: "🇵🇦",
    outrightOdds: 75000, impliedProb: 0.0013, groupWinnerOdds: 3000, groupQualProb: 0.10,
    optaWinProb: 0.001, eloRating: 1428, squadMarketValue: 22,
    squadDepth: 3, injurySeverity: 0.5,
    historicalPedigree: 2, managerExpScore: 2,
    tacticalStyle: { possession: 0.40, defensive: 0.58, offensive: 0.38, transition: 0.52 },
    starDependency: 0.30, homeAdvantage: 0, altitudeAdaptation: 0.15,
    keyPlayers: ["Eric Davis", "Jose Fajardo"],
    injuredPlayers: [],
    recentForm: { goalsFor: 0.9, goalsAgainst: 1.1 }, groupDifficulty: 7.5
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEAMS_DATA };
}
