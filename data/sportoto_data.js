const TEAMS_DATA = [
  // TURKISH SUPER LIG
  {
    name: "Galatasaray", code: "GAL", eloRating: 1608, impliedProb: 0.25, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.8, defensive: 0.7, possession: 0.7, transition: 0.75 }, managerExpScore: 8, recentForm: { goalsFor: 2.13, goalsAgainst: 1.38 },
    starDependency: 0.3, homeAdvantage: 0.9, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Fenerbahçe", code: "FEN", eloRating: 1622, impliedProb: 0.24, squadDepth: 9, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.85, defensive: 0.65, possession: 0.65, transition: 0.8 }, managerExpScore: 9, recentForm: { goalsFor: 2.75, goalsAgainst: 0.75 },
    starDependency: 0.35, homeAdvantage: 0.9, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Beşiktaş", code: "BJK", eloRating: 1560, impliedProb: 0.15, squadDepth: 7, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.7, defensive: 0.6, possession: 0.6, transition: 0.65 }, managerExpScore: 7, recentForm: { goalsFor: 2.00, goalsAgainst: 1.25 },
    starDependency: 0.4, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Trabzonspor", code: "TRA", eloRating: 1607, impliedProb: 0.10, squadDepth: 7, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.65, defensive: 0.65, possession: 0.55, transition: 0.6 }, managerExpScore: 7, recentForm: { goalsFor: 2.25, goalsAgainst: 0.63 },
    starDependency: 0.3, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Başakşehir", code: "IBFK", eloRating: 1482, impliedProb: 0.08, squadDepth: 7, historicalPedigree: 7,
    tacticalStyle: { offensive: 0.6, defensive: 0.7, possession: 0.65, transition: 0.5 }, managerExpScore: 6, recentForm: { goalsFor: 1.50, goalsAgainst: 1.50 },
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
    name: "Kasımpaşa", code: "KAS", eloRating: 1562, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.6, defensive: 0.45, possession: 0.45, transition: 0.65 }, managerExpScore: 5, recentForm: { goalsFor: 1.44, goalsAgainst: 1.00 },
    starDependency: 0.35, homeAdvantage: 0.5, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Alanyaspor", code: "ALA", eloRating: 1484, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.55, defensive: 0.55, possession: 0.55, transition: 0.5 }, managerExpScore: 5, recentForm: { goalsFor: 1.00, goalsAgainst: 1.22 },
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
    name: "Konyaspor", code: "KON", eloRating: 1431, impliedProb: 0.01, squadDepth: 5, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.45, defensive: 0.6, possession: 0.45, transition: 0.5 }, managerExpScore: 5, recentForm: { goalsFor: 0.67, goalsAgainst: 1.00 },
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
    name: "Gaziantep FK", code: "GAZ", eloRating: 1416, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.4, defensive: 0.55, possession: 0.4, transition: 0.45 }, managerExpScore: 4, recentForm: { goalsFor: 1.00, goalsAgainst: 1.67 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Samsunspor", code: "SAM", eloRating: 1333, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.45, defensive: 0.5, possession: 0.45, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 0.89, goalsAgainst: 2.33 },
    starDependency: 0.25, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Rizespor", code: "RIZ", eloRating: 1455, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.5, defensive: 0.45, possession: 0.4, transition: 0.55 }, managerExpScore: 4, recentForm: { goalsFor: 1.00, goalsAgainst: 1.38 },
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
    name: "Göztepe", code: "GOZ", eloRating: 1509, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.5, defensive: 0.5, possession: 0.5, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 2.11, goalsAgainst: 1.78 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  
  // TOP EUROPEAN TEAMS (Often on Sportoto)
  {
    name: "Real Madrid", code: "RMA", eloRating: 1872, impliedProb: 0.30, squadDepth: 10, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.9, defensive: 0.8, possession: 0.85, transition: 0.95 }, managerExpScore: 10, recentForm: { goalsFor: 2.56, goalsAgainst: 1.00 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Barcelona", code: "BAR", eloRating: 2024, impliedProb: 0.25, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.85, defensive: 0.75, possession: 0.9, transition: 0.8 }, managerExpScore: 8, recentForm: { goalsFor: 4.33, goalsAgainst: 1.00 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Manchester City", code: "MCI", eloRating: 1857, impliedProb: 0.35, squadDepth: 10, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.95, defensive: 0.85, possession: 0.95, transition: 0.9 }, managerExpScore: 10, recentForm: { goalsFor: 2.50, goalsAgainst: 1.13 },
    starDependency: 0.15, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Arsenal", code: "ARS", eloRating: 1842, impliedProb: 0.20, squadDepth: 8, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.85, defensive: 0.85, possession: 0.85, transition: 0.85 }, managerExpScore: 8, recentForm: { goalsFor: 1.63, goalsAgainst: 0.63 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Liverpool", code: "LIV", eloRating: 1745, impliedProb: 0.22, squadDepth: 8, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.9, defensive: 0.8, possession: 0.8, transition: 0.9 }, managerExpScore: 8, recentForm: { goalsFor: 1.38, goalsAgainst: 1.00 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Bayern Munich", code: "BAY", eloRating: 1849, impliedProb: 0.28, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.95, defensive: 0.8, possession: 0.9, transition: 0.85 }, managerExpScore: 9, recentForm: { goalsFor: 3.57, goalsAgainst: 0.86 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Inter", code: "INT", eloRating: 1980, impliedProb: 0.18, squadDepth: 8, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.8, defensive: 0.9, possession: 0.75, transition: 0.8 }, managerExpScore: 8, recentForm: { goalsFor: 2.2, goalsAgainst: 0.6 },
    starDependency: 0.2, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "AC Milan", code: "MIL", eloRating: 1765, impliedProb: 0.12, squadDepth: 8, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.8, defensive: 0.75, possession: 0.7, transition: 0.85 }, managerExpScore: 7, recentForm: { goalsFor: 2.00, goalsAgainst: 1.00 },
    starDependency: 0.3, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Juventus", code: "JUV", eloRating: 1687, impliedProb: 0.15, squadDepth: 8, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.75, defensive: 0.85, possession: 0.7, transition: 0.75 }, managerExpScore: 8, recentForm: { goalsFor: 1.29, goalsAgainst: 1.14 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Gençlerbirliği", code: "GEN", eloRating: 1391, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.45, defensive: 0.5, possession: 0.45, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 0.78, goalsAgainst: 2.00 },
    starDependency: 0.3, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Amed SK", code: "AME", eloRating: 1640, impliedProb: 0.01, squadDepth: 3, historicalPedigree: 2,
    tacticalStyle: { offensive: 0.4, defensive: 0.5, possession: 0.4, transition: 0.4 }, managerExpScore: 3, recentForm: { goalsFor: 2.22, goalsAgainst: 1.11 },
    starDependency: 0.4, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Erzurumspor FK", code: "ERZ", eloRating: 1498, impliedProb: 0.01, squadDepth: 3, historicalPedigree: 3,
    tacticalStyle: { offensive: 0.4, defensive: 0.55, possession: 0.4, transition: 0.45 }, managerExpScore: 4, recentForm: { goalsFor: 0.89, goalsAgainst: 1.33 },
    starDependency: 0.3, homeAdvantage: 0.8, altitudeAdaptation: 0.2, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Kocaelispor", code: "KOC", eloRating: 1540, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.5, defensive: 0.45, possession: 0.45, transition: 0.55 }, managerExpScore: 5, recentForm: { goalsFor: 1.22, goalsAgainst: 1.00 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Eyüpspor", code: "EYU", eloRating: 1281, impliedProb: 0.02, squadDepth: 5, historicalPedigree: 2,
    tacticalStyle: { offensive: 0.6, defensive: 0.5, possession: 0.55, transition: 0.6 }, managerExpScore: 6, recentForm: { goalsFor: 0.22, goalsAgainst: 2.56 },
    starDependency: 0.4, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Çorum FK", code: "COR", eloRating: 1521, impliedProb: 0.01, squadDepth: 4, historicalPedigree: 2,
    tacticalStyle: { offensive: 0.45, defensive: 0.45, possession: 0.45, transition: 0.5 }, managerExpScore: 4, recentForm: { goalsFor: 2.00, goalsAgainst: 1.67 },
    starDependency: 0.3, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Augsburg", code: "AUG", eloRating: 1678, impliedProb: 0.1, squadDepth: 6, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.5, defensive: 0.6, possession: 0.45, transition: 0.6 }, managerExpScore: 6, recentForm: { goalsFor: 2.43, goalsAgainst: 1.86 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "RB Leipzig", code: "RBL", eloRating: 1739, impliedProb: 0.15, squadDepth: 8, historicalPedigree: 6,
    tacticalStyle: { offensive: 0.8, defensive: 0.7, possession: 0.7, transition: 0.9 }, managerExpScore: 8, recentForm: { goalsFor: 2.86, goalsAgainst: 1.57 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Eintracht Frankfurt", code: "EIN", eloRating: 1611, impliedProb: 0.12, squadDepth: 7, historicalPedigree: 7,
    tacticalStyle: { offensive: 0.7, defensive: 0.6, possession: 0.6, transition: 0.8 }, managerExpScore: 7, recentForm: { goalsFor: 1.43, goalsAgainst: 2.43 },
    starDependency: 0.3, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Manchester United", code: "MUN", eloRating: 1619, impliedProb: 0.15, squadDepth: 9, historicalPedigree: 10,
    tacticalStyle: { offensive: 0.7, defensive: 0.65, possession: 0.65, transition: 0.75 }, managerExpScore: 7, recentForm: { goalsFor: 1.25, goalsAgainst: 1.63 },
    starDependency: 0.4, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 3
  },
  {
    name: "Tottenham Hotspur", code: "TOT", eloRating: 1648, impliedProb: 0.15, squadDepth: 8, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.85, defensive: 0.6, possession: 0.7, transition: 0.8 }, managerExpScore: 8, recentForm: { goalsFor: 1.00, goalsAgainst: 1.25 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Villarreal", code: "VIL", eloRating: 1699, impliedProb: 0.12, squadDepth: 7, historicalPedigree: 7,
    tacticalStyle: { offensive: 0.7, defensive: 0.65, possession: 0.65, transition: 0.7 }, managerExpScore: 7, recentForm: { goalsFor: 1.50, goalsAgainst: 1.40 },
    starDependency: 0.3, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Como", code: "COM", eloRating: 1789, impliedProb: 0.08, squadDepth: 6, historicalPedigree: 4,
    tacticalStyle: { offensive: 0.6, defensive: 0.5, possession: 0.55, transition: 0.6 }, managerExpScore: 6, recentForm: { goalsFor: 1.75, goalsAgainst: 0.88 },
    starDependency: 0.3, homeAdvantage: 0.6, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Roma", code: "ROM", eloRating: 1831, impliedProb: 0.12, squadDepth: 8, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.7, defensive: 0.7, possession: 0.6, transition: 0.7 }, managerExpScore: 7, recentForm: { goalsFor: 2.38, goalsAgainst: 0.75 },
    starDependency: 0.3, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Everton", code: "EVE", eloRating: 1665, impliedProb: 0.10, squadDepth: 6, historicalPedigree: 6,
    tacticalStyle: { offensive: 0.6, defensive: 0.65, possession: 0.45, transition: 0.65 }, managerExpScore: 6, recentForm: { goalsFor: 1.00, goalsAgainst: 1.13 },
    starDependency: 0.3, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Chelsea", code: "CHE", eloRating: 1716, impliedProb: 0.22, squadDepth: 9, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.85, defensive: 0.7, possession: 0.8, transition: 0.8 }, managerExpScore: 8, recentForm: { goalsFor: 2.13, goalsAgainst: 1.88 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Brentford", code: "BRE", eloRating: 1707, impliedProb: 0.10, squadDepth: 6, historicalPedigree: 5,
    tacticalStyle: { offensive: 0.7, defensive: 0.55, possession: 0.5, transition: 0.75 }, managerExpScore: 7, recentForm: { goalsFor: 1.75, goalsAgainst: 1.13 },
    starDependency: 0.35, homeAdvantage: 0.7, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Real Betis", code: "BET", eloRating: 1800, impliedProb: 0.15, squadDepth: 7, historicalPedigree: 7,
    tacticalStyle: { offensive: 0.7, defensive: 0.65, possession: 0.65, transition: 0.7 }, managerExpScore: 7, recentForm: { goalsFor: 1.60, goalsAgainst: 1.40 },
    starDependency: 0.3, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Sevilla", code: "SEV", eloRating: 1708, impliedProb: 0.12, squadDepth: 7, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.65, defensive: 0.6, possession: 0.6, transition: 0.65 }, managerExpScore: 7, recentForm: { goalsFor: 1.56, goalsAgainst: 1.78 },
    starDependency: 0.3, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Atalanta", code: "ATA", eloRating: 1665, impliedProb: 0.15, squadDepth: 8, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.85, defensive: 0.7, possession: 0.75, transition: 0.85 }, managerExpScore: 8, recentForm: { goalsFor: 1.75, goalsAgainst: 1.88 },
    starDependency: 0.25, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Lazio", code: "LAZ", eloRating: 1869, impliedProb: 0.18, squadDepth: 8, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.8, defensive: 0.75, possession: 0.7, transition: 0.75 }, managerExpScore: 7, recentForm: { goalsFor: 2.00, goalsAgainst: 0.63 },
    starDependency: 0.3, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Borussia Dortmund", code: "BVB", eloRating: 1794, impliedProb: 0.18, squadDepth: 8, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.82, defensive: 0.70, possession: 0.75, transition: 0.85 }, managerExpScore: 8, recentForm: { goalsFor: 1.71, goalsAgainst: 0.57 },
    starDependency: 0.25, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Monaco", code: "ASM", eloRating: 1750, impliedProb: 0.15, squadDepth: 7, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.78, defensive: 0.68, possession: 0.70, transition: 0.80 }, managerExpScore: 7, recentForm: { goalsFor: 1.38, goalsAgainst: 0.88 },
    starDependency: 0.3, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Lille", code: "LIL", eloRating: 1755, impliedProb: 0.12, squadDepth: 7, historicalPedigree: 7,
    tacticalStyle: { offensive: 0.72, defensive: 0.75, possession: 0.65, transition: 0.75 }, managerExpScore: 7, recentForm: { goalsFor: 1.38, goalsAgainst: 0.75 },
    starDependency: 0.3, homeAdvantage: 0.75, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  },
  {
    name: "Paris Saint-Germain", code: "PSG", eloRating: 1743, impliedProb: 0.28, squadDepth: 9, historicalPedigree: 9,
    tacticalStyle: { offensive: 0.90, defensive: 0.78, possession: 0.88, transition: 0.88 }, managerExpScore: 9, recentForm: { goalsFor: 2.00, goalsAgainst: 1.29 },
    starDependency: 0.25, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Olympique Lyon", code: "LYO", eloRating: 1758, impliedProb: 0.12, squadDepth: 7, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.74, defensive: 0.65, possession: 0.68, transition: 0.72 }, managerExpScore: 7, recentForm: { goalsFor: 1.86, goalsAgainst: 0.71 },
    starDependency: 0.3, homeAdvantage: 0.8, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 2
  },
  {
    name: "Napoli", code: "NAP", eloRating: 1697, impliedProb: 0.20, squadDepth: 8, historicalPedigree: 8,
    tacticalStyle: { offensive: 0.82, defensive: 0.80, possession: 0.75, transition: 0.80 }, managerExpScore: 8, recentForm: { goalsFor: 1.63, goalsAgainst: 1.25 },
    starDependency: 0.25, homeAdvantage: 0.85, altitudeAdaptation: 0.1, groupDifficulty: 5, injurySeverity: 1
  }
];

const FIXTURES_DATA = [
  { id: 1, home: "KON", away: "GAL" },
  { id: 2, home: "ERZ", away: "COR" },
  { id: 3, home: "KOC", away: "RIZ" },
  { id: 4, home: "FEN", away: "GOZ" },
  { id: 5, home: "AME", away: "EYU" },
  { id: 6, home: "IBFK", away: "SAM" },
  { id: 7, home: "TRA", away: "GAZ" },
  { id: 8, home: "KAS", away: "BJK" },
  { id: 9, home: "GEN", away: "ALA" },
  { id: 10, home: "BAY", away: "BVB" },
  { id: 11, home: "CHE", away: "MUN" },
  { id: 12, home: "LIV", away: "ARS" },
  { id: 13, home: "UNKNOWN", away: "UNKNOWN" },
  { id: 14, home: "MIL", away: "INT" },
  { id: 15, home: "JUV", away: "NAP" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEAMS_DATA, FIXTURES_DATA };
}
