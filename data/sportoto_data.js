const TEAMS_DATA = [
  // TURKISH SUPER LIG
  {
    name: "Galatasaray", code: "GAL", eloRating: 1750, impliedProb: 0.25, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.8, defensive: 0.7, possession: 0.7, transition: 0.75 }, managerExpScore: 8, recentForm: { goalsFor: 2.5, goalsAgainst: 0.8 },
    starDependency: 0.3, homeAdvantage: 0.9, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Fenerbahçe", code: "FEN", eloRating: 1740, impliedProb: 0.24, squadDepth: 9, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.85, defensive: 0.65, possession: 0.65, transition: 0.8 }, managerExpScore: 9, recentForm: { goalsFor: 2.6, goalsAgainst: 1.0 },
    starDependency: 0.35, homeAdvantage: 0.9, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Beşiktaş", code: "BJK", eloRating: 1650, impliedProb: 0.15, squadDepth: 7, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.7, defensive: 0.6, possession: 0.6, transition: 0.65 }, managerExpScore: 7, recentForm: { goalsFor: 1.8, goalsAgainst: 1.2 },
    starDependency: 0.4, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Trabzonspor", code: "TRA", eloRating: 1600, impliedProb: 0.10, squadDepth: 7, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.65, defensive: 0.65, possession: 0.55, transition: 0.6 }, managerExpScore: 7, recentForm: { goalsFor: 1.5, goalsAgainst: 1.1 },
    starDependency: 0.3, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Başakşehir", code: "IBFK", eloRating: 1580, impliedProb: 0.08, squadDepth: 7, historicalPedigree: 7,
    tacticalStyle: { offensive: 0.6, defensive: 0.7, possession: 0.65, transition: 0.5 }, managerExpScore: 6, recentForm: { goalsFor: 1.4, goalsAgainst: 1.0 },
    starDependency: 0.25, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Adana Demirspor", code: "ADS", eloRating: 1520, impliedProb: 0.05, squadDepth: 6, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.65, defensive: 0.5, possession: 0.5, transition: 0.7 }, managerExpScore: 5, recentForm: { goalsFor: 1.6, goalsAgainst: 1.5 },
    starDependency: 0.4, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 4
  },
  {
    name: "Antalyaspor", code: "ANT", eloRating: 1500, impliedProb: 0.03, squadDepth: 6, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.55, defensive: 0.6, possession: 0.5, transition: 0.55 }, managerExpScore: 6, recentForm: { goalsFor: 1.2, goalsAgainst: 1.2 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Kasımpaşa", code: "KAS", eloRating: 1480, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.6, defensive: 0.45, possession: 0.45, transition: 0.65 }, managerExpScore: 5, recentForm: { goalsFor: 1.5, goalsAgainst: 1.6 },
    starDependency: 0.35, homeAdvantage: 0.5, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Alanyaspor", code: "ALA", eloRating: 1470, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.55, defensive: 0.55, possession: 0.55, transition: 0.5 }, managerExpScore: 5, recentForm: { goalsFor: 1.3, goalsAgainst: 1.3 },
    starDependency: 0.25, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Kayserispor", code: "KAY", eloRating: 1460, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.5, defensive: 0.55, possession: 0.45, transition: 0.55 }, managerExpScore: 5, recentForm: { goalsFor: 1.1, goalsAgainst: 1.2 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Sivasspor", code: "SIV", eloRating: 1450, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.45, defensive: 0.65, possession: 0.4, transition: 0.5 }, managerExpScore: 6, recentForm: { goalsFor: 1.0, goalsAgainst: 1.1 },
    starDependency: 0.25, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Konyaspor", code: "KON", eloRating: 1440, impliedProb: 0.01, squadDepth: 5, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.45, defensive: 0.6, possession: 0.45, transition: 0.5 }, managerExpScore: 5, recentForm: { goalsFor: 1.0, goalsAgainst: 1.3 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Ankaragücü", code: "ANK", eloRating: 1430, impliedProb: 0.01, squadDepth: 5, historicalPedigree: 6,
    tacticalStyle: { offensive: 0.5, defensive: 0.5, possession: 0.4, transition: 0.6 }, managerExpScore: 4, recentForm: { goalsFor: 1.2, goalsAgainst: 1.4 },
    starDependency: 0.35, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Hatayspor", code: "HAT", eloRating: 1420, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 3,
    tacticalStyle: { offensive: 0.5, defensive: 0.45, possession: 0.45, transition: 0.55 }, managerExpScore: 4, recentForm: { goalsFor: 1.1, goalsAgainst: 1.5 },
    starDependency: 0.4, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Fatih Karagümrük", code: "FKG", eloRating: 1410, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 3,
    tacticalStyle: { offensive: 0.55, defensive: 0.4, possession: 0.5, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 1.3, goalsAgainst: 1.6 },
    starDependency: 0.3, homeAdvantage: 0.4, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Gaziantep FK", code: "GAZ", eloRating: 1400, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.4, defensive: 0.55, possession: 0.4, transition: 0.45 }, managerExpScore: 4, recentForm: { goalsFor: 0.9, goalsAgainst: 1.4 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Samsunspor", code: "SAM", eloRating: 1400, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.45, defensive: 0.5, possession: 0.45, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 1.0, goalsAgainst: 1.2 },
    starDependency: 0.25, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Rizespor", code: "RIZ", eloRating: 1390, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.5, defensive: 0.45, possession: 0.4, transition: 0.55 }, managerExpScore: 4, recentForm: { goalsFor: 1.2, goalsAgainst: 1.5 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Pendikspor", code: "PEN", eloRating: 1350, impliedProb: 0.005, squadDepth: 3, historicalPedigree: 1,
    tacticalStyle: { offensive: 0.4, defensive: 0.4, possession: 0.4, transition: 0.4 }, managerExpScore: 3, recentForm: { goalsFor: 0.8, goalsAgainst: 1.8 },
    starDependency: 0.4, homeAdvantage: 0.5, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "İstanbulspor", code: "IST", eloRating: 1330, impliedProb: 0.005, squadDepth: 3, historicalPedigree: 3,
    tacticalStyle: { offensive: 0.35, defensive: 0.4, possession: 0.35, transition: 0.4 }, managerExpScore: 3, recentForm: { goalsFor: 0.7, goalsAgainst: 2.0 },
    starDependency: 0.3, homeAdvantage: 0.4, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Göztepe", code: "GOZ", eloRating: 1450, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.5, defensive: 0.5, possession: 0.5, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 1.2, goalsAgainst: 1.2 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  
  // TOP EUROPEAN TEAMS (Often on Sportoto)
  {
    name: "Real Madrid", code: "RMA", eloRating: 2050, impliedProb: 0.30, squadDepth: 10, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.9, defensive: 0.8, possession: 0.85, transition: 0.95 }, managerExpScore: 10, recentForm: { goalsFor: 2.8, goalsAgainst: 0.7 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Barcelona", code: "BAR", eloRating: 2020, impliedProb: 0.25, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.85, defensive: 0.75, possession: 0.9, transition: 0.8 }, managerExpScore: 8, recentForm: { goalsFor: 2.6, goalsAgainst: 0.9 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Manchester City", code: "MCI", eloRating: 2100, impliedProb: 0.35, squadDepth: 10, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.95, defensive: 0.85, possession: 0.95, transition: 0.9 }, managerExpScore: 10, recentForm: { goalsFor: 3.0, goalsAgainst: 0.6 },
    starDependency: 0.15, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Arsenal", code: "ARS", eloRating: 2000, impliedProb: 0.20, squadDepth: 8, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.85, defensive: 0.85, possession: 0.85, transition: 0.85 }, managerExpScore: 8, recentForm: { goalsFor: 2.5, goalsAgainst: 0.7 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Liverpool", code: "LIV", eloRating: 2010, impliedProb: 0.22, squadDepth: 8, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.9, defensive: 0.8, possession: 0.8, transition: 0.9 }, managerExpScore: 8, recentForm: { goalsFor: 2.7, goalsAgainst: 1.0 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Bayern Munich", code: "BAY", eloRating: 2040, impliedProb: 0.28, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.95, defensive: 0.8, possession: 0.9, transition: 0.85 }, managerExpScore: 9, recentForm: { goalsFor: 2.9, goalsAgainst: 0.8 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Inter", code: "INT", eloRating: 1980, impliedProb: 0.18, squadDepth: 8, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.8, defensive: 0.9, possession: 0.75, transition: 0.8 }, managerExpScore: 8, recentForm: { goalsFor: 2.2, goalsAgainst: 0.6 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "AC Milan", code: "MIL", eloRating: 1920, impliedProb: 0.12, squadDepth: 8, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.8, defensive: 0.75, possession: 0.7, transition: 0.85 }, managerExpScore: 7, recentForm: { goalsFor: 2.0, goalsAgainst: 1.1 },
    starDependency: 0.3, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Juventus", code: "JUV", eloRating: 1950, impliedProb: 0.15, squadDepth: 8, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.75, defensive: 0.85, possession: 0.7, transition: 0.75 }, managerExpScore: 8, recentForm: { goalsFor: 1.8, goalsAgainst: 0.7 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  }
];

const FIXTURES_DATA = [
  { id: 1, home: "GAL", away: "FEN" },
  { id: 2, home: "BJK", away: "TRA" },
  { id: 3, home: "IBFK", away: "ADS" },
  { id: 4, home: "ANT", away: "KAS" },
  { id: 5, home: "ALA", away: "KAY" },
  { id: 6, home: "SIV", away: "KON" },
  { id: 7, home: "ANK", away: "HAT" },
  { id: 8, home: "FKG", away: "GAZ" },
  { id: 9, home: "SAM", away: "RIZ" },
  { id: 10, home: "PEN", away: "IST" },
  { id: 11, home: "RMA", away: "BAR" },
  { id: 12, home: "MCI", away: "ARS" },
  { id: 13, home: "BAY", away: "LIV" },
  { id: 14, home: "INT", away: "JUV" },
  { id: 15, home: "MIL", away: "RMA" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEAMS_DATA, FIXTURES_DATA };
}
