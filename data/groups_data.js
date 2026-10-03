/**
 * 2026 FIFA World Cup — Group Stage Data
 * 12 groups with venue assignments, geographical factors, and match schedules
 *
 * LAST UPDATED: June 10, 2026 (Eve of Tournament Kickoff)
 * DATA SOURCES:
 *   - FIFA.com (official venues, schedules, capacities)
 *   - DraftKings / FanDuel (group winner odds)
 *   - Opta Supercomputer (group qualification probabilities)
 *   - Seattle FIFA World Cup LOC (venue details)
 *   - The Guardian (stadium architectural notes)
 */

const GROUPS_DATA = [
  {
    id: "A", name: "Group A",
    teams: ["MEX", "CZE", "KOR", "RSA"],
    venues: [
      { city: "Mexico City", stadium: "Estadio Azteca", altitudeFt: 7349, climate: "high-altitude-temperate", country: "Mexico", capacityK: 83 },
      { city: "Guadalajara", stadium: "Estadio Akron", altitudeFt: 5138, climate: "high-altitude-warm", country: "Mexico", capacityK: 50 },
      { city: "Monterrey", stadium: "Estadio BBVA", altitudeFt: 1765, climate: "hot-arid", country: "Mexico", capacityK: 54 }
    ],
    difficultyRating: 4.2,
    volatilityIndex: 0.35,
    favoriteCode: "MEX",
    groupWinnerOdds: { MEX: -140, CZE: 300, KOR: 360, RSA: 1200 },
    description: "Mexico's home fortress. Altitude at Azteca (7,349 ft) gives massive physiological edge. Mexico guaranteed home R32/R16 if they win the group."
  },
  {
    id: "B", name: "Group B",
    teams: ["SUI", "CAN", "BIH", "QAT"],
    venues: [
      { city: "Vancouver", stadium: "BC Place", altitudeFt: 20, climate: "mild-pacific", country: "Canada", capacityK: 54 },
      { city: "Kansas City", stadium: "Arrowhead Stadium", altitudeFt: 820, climate: "humid-continental", country: "USA", capacityK: 73 }
    ],
    difficultyRating: 3.8,
    volatilityIndex: 0.55,
    favoriteCode: "SUI",
    groupWinnerOdds: { SUI: -130, CAN: 200, BIH: 450, QAT: 3500 },
    description: "Switzerland's defensive solidity vs. Canada's Davies-dependent attack. Davies + Bombito injuries make this highly volatile. Bosnia emerging as value play."
  },
  {
    id: "C", name: "Group C",
    teams: ["BRA", "MAR", "SCO", "HAI"],
    venues: [
      { city: "East Rutherford", stadium: "MetLife Stadium", altitudeFt: 30, climate: "humid-subtropical", country: "USA", capacityK: 83 },
      { city: "Philadelphia", stadium: "Lincoln Financial Field", altitudeFt: 40, climate: "humid-subtropical", country: "USA", capacityK: 69 }
    ],
    difficultyRating: 4.8,
    volatilityIndex: 0.30,
    favoriteCode: "BRA",
    groupWinnerOdds: { BRA: -350, MAR: 350, SCO: 950, HAI: 15000 },
    description: "Brazil dominant despite devastating injuries (Militao, Rodrygo, Wesley out; Neymar doubtful). Morocco (2022 semifinalists) strong second. Scotland weakened by Gilmour loss."
  },
  {
    id: "D", name: "Group D",
    teams: ["USA", "TUR", "PAR", "AUS"],
    venues: [
      { city: "Houston", stadium: "NRG Stadium", altitudeFt: 50, climate: "hot-humid", country: "USA", capacityK: 72 },
      { city: "Dallas", stadium: "AT&T Stadium", altitudeFt: 600, climate: "hot-arid", country: "USA", capacityK: 94 },
      { city: "Atlanta", stadium: "Mercedes-Benz Stadium", altitudeFt: 1050, climate: "humid-subtropical", country: "USA", capacityK: 75 }
    ],
    difficultyRating: 5.5,
    volatilityIndex: 0.65,
    favoriteCode: "USA",
    groupWinnerOdds: { USA: 130, TUR: 180, PAR: 400, AUS: 800 },
    description: "The most competitive and volatile group. USA host advantage vs. Türkiye's technical brilliance with Arda Guler & Calhanoglu. Neither is heavily favored."
  },
  {
    id: "E", name: "Group E",
    teams: ["GER", "ECU", "CIV", "CUW"],
    venues: [
      { city: "Seattle", stadium: "Lumen Field", altitudeFt: 20, climate: "mild-oceanic", country: "USA", capacityK: 69 },
      { city: "San Francisco", stadium: "Levi's Stadium", altitudeFt: 40, climate: "mild-mediterranean", country: "USA", capacityK: 71 }
    ],
    difficultyRating: 3.5,
    volatilityIndex: 0.25,
    favoriteCode: "GER",
    groupWinnerOdds: { GER: -230, ECU: 340, CIV: 600, CUW: 17500 },
    description: "Germany is an absolute lock to advance (Musiala + Wirtz partnership). Ecuador and Ivory Coast will fiercely contest the second automatic spot. Gnabry loss is manageable."
  },
  {
    id: "F", name: "Group F",
    teams: ["NED", "JPN", "SWE", "TUN"],
    venues: [
      { city: "Foxborough", stadium: "Gillette Stadium", altitudeFt: 260, climate: "humid-continental", country: "USA", capacityK: 65 },
      { city: "Toronto", stadium: "BMO Field", altitudeFt: 250, climate: "humid-continental", country: "Canada", capacityK: 45 }
    ],
    difficultyRating: 5.0,
    volatilityIndex: 0.55,
    favoriteCode: "NED",
    groupWinnerOdds: { NED: -130, JPN: 280, SWE: 460, TUN: 1200 },
    description: "Dutch favored but weakened by Xavi Simons ACL + Jurrien Timber groin losses. Japan's high-pressing system is a proven giant-killer. Sweden's Isak-Gyokeres-Kulusevski trident is lethal."
  },
  {
    id: "G", name: "Group G",
    teams: ["BEL", "EGY", "IRN", "NZL"],
    venues: [
      { city: "Seattle", stadium: "Lumen Field", altitudeFt: 20, climate: "mild-oceanic", country: "USA", capacityK: 69 },
      { city: "Miami", stadium: "Hard Rock Stadium", altitudeFt: 10, climate: "tropical", country: "USA", capacityK: 65 }
    ],
    difficultyRating: 3.5,
    volatilityIndex: 0.30,
    favoriteCode: "BEL",
    groupWinnerOdds: { BEL: -220, EGY: 400, IRN: 800, NZL: 2000 },
    description: "Belgium's aging golden generation (De Bruyne, Lukaku) still possesses overwhelming quality. Egypt's Salah + Marmoush tandem is the wildcard for second place."
  },
  {
    id: "H", name: "Group H",
    teams: ["ESP", "URU", "KSA", "CPV"],
    venues: [
      { city: "Atlanta", stadium: "Mercedes-Benz Stadium", altitudeFt: 1050, climate: "humid-subtropical", country: "USA", capacityK: 75 },
      { city: "Houston", stadium: "NRG Stadium", altitudeFt: 50, climate: "hot-humid", country: "USA", capacityK: 72 }
    ],
    difficultyRating: 2.5,
    volatilityIndex: 0.15,
    favoriteCode: "ESP",
    groupWinnerOdds: { ESP: -450, URU: 420, KSA: 4000, CPV: 6500 },
    description: "Spain's 75.3% Opta probability to win group (16% tournament win prob). Easiest draw for any favorite. Uruguay comfortably second. Yamal/Nico Williams expected fit for opener."
  },
  {
    id: "I", name: "Group I — Group of Death",
    teams: ["FRA", "NOR", "SEN", "IRQ"],
    venues: [
      { city: "Inglewood", stadium: "SoFi Stadium", altitudeFt: 120, climate: "mild-mediterranean", country: "USA", capacityK: 70 },
      { city: "Dallas", stadium: "AT&T Stadium", altitudeFt: 600, climate: "hot-arid", country: "USA", capacityK: 94 }
    ],
    difficultyRating: 7.5,
    volatilityIndex: 0.70,
    favoriteCode: "FRA",
    groupWinnerOdds: { FRA: -220, NOR: 290, SEN: 750, IRQ: 7000 },
    description: "The true Group of Death. France favored (Saliba confirmed fit) but Norway's 4.62 goals/game in qualifying (Haaland 16 goals) and Senegal's AFCON-champion physicality make this the most volatile group."
  },
  {
    id: "J", name: "Group J",
    teams: ["ARG", "AUT", "ALG", "JOR"],
    venues: [
      { city: "Miami", stadium: "Hard Rock Stadium", altitudeFt: 10, climate: "tropical", country: "USA", capacityK: 65 },
      { city: "Philadelphia", stadium: "Lincoln Financial Field", altitudeFt: 40, climate: "humid-subtropical", country: "USA", capacityK: 69 }
    ],
    difficultyRating: 3.0,
    volatilityIndex: 0.28,
    favoriteCode: "ARG",
    groupWinnerOdds: { ARG: -265, AUT: 370, ALG: 750, JOR: 5500 },
    description: "Argentina faces minimal resistance despite losing Foyth/Panichelli. Messi confirmed fit (scored vs Iceland June 9). Austria weakened by Baumgartner's tournament-ending thigh injury."
  },
  {
    id: "K", name: "Group K",
    teams: ["POR", "COL", "COD", "UZB"],
    venues: [
      { city: "San Francisco", stadium: "Levi's Stadium", altitudeFt: 40, climate: "mild-mediterranean", country: "USA", capacityK: 71 },
      { city: "Kansas City", stadium: "Arrowhead Stadium", altitudeFt: 820, climate: "humid-continental", country: "USA", capacityK: 73 }
    ],
    difficultyRating: 4.0,
    volatilityIndex: 0.35,
    favoriteCode: "POR",
    groupWinnerOdds: { POR: -220, COL: 200, COD: 2000, UZB: 3000 },
    description: "Portugal's €1.01B squad (Transfermarkt) features the tournament's most technically complete midfield. Colombia's undefeated qualifying run makes them a potent runner-up threat."
  },
  {
    id: "L", name: "Group L",
    teams: ["ENG", "CRO", "GHA", "PAN"],
    venues: [
      { city: "East Rutherford", stadium: "MetLife Stadium", altitudeFt: 30, climate: "humid-subtropical", country: "USA", capacityK: 83 },
      { city: "Foxborough", stadium: "Gillette Stadium", altitudeFt: 260, climate: "humid-continental", country: "USA", capacityK: 65 }
    ],
    difficultyRating: 3.0,
    volatilityIndex: 0.20,
    favoriteCode: "ENG",
    groupWinnerOdds: { ENG: -350, CRO: 350, GHA: 1000, PAN: 3000 },
    description: "England has 67.76% Opta probability to win the group under Tuchel. Croatia (Modric fit after cheekbone fracture, Gvardiol recovered from tibial fracture) will comfortably secure second."
  }
];

// Tournament structure constants
const TOURNAMENT_STRUCTURE = {
  totalTeams: 48,
  totalGroups: 12,
  teamsPerGroup: 4,
  qualifyFromGroup: 2, // top 2 auto-qualify
  bestThirdPlaceQualify: 8, // best 8 third-place teams
  totalKnockoutTeams: 32,
  matchesToWin: 8, // matches needed to win tournament (group stage 3 + R32 + R16 + QF + SF + F)
  totalMatches: 104,
  tournamentDays: 39,
  startDate: "2026-06-11",
  endDate: "2026-07-19",
  finalVenue: "MetLife Stadium, New Jersey",
  hostNations: ["USA", "Mexico", "Canada"],
  // Transfermarkt squad value rankings (Top 10, millions EUR)
  squadValueRankings: [
    { code: "FRA", value: 1520 },
    { code: "ENG", value: 1360 },
    { code: "ESP", value: 1220 },
    { code: "POR", value: 1010 },
    { code: "GER", value: 947 },
    { code: "BRA", value: 895 },
    { code: "NED", value: 820 },
    { code: "ARG", value: 765 },
    { code: "BEL", value: 580 },
    { code: "NOR", value: 490 }
  ],
  // Opta Supercomputer Win Probabilities (Top 8)
  optaWinProbabilities: [
    { code: "ESP", prob: 0.160, label: "Spain" },
    { code: "FRA", prob: 0.129, label: "France" },
    { code: "ENG", prob: 0.108, label: "England" },
    { code: "ARG", prob: 0.090, label: "Argentina" },
    { code: "BRA", prob: 0.082, label: "Brazil" },
    { code: "POR", prob: 0.075, label: "Portugal" },
    { code: "GER", prob: 0.070, label: "Germany" },
    { code: "NED", prob: 0.048, label: "Netherlands" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GROUPS_DATA, TOURNAMENT_STRUCTURE };
}
