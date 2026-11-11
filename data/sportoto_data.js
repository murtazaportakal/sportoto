const TEAMS_DATA = [
  {
    "name": "Galatasaray",
    "code": "GAL",
    "eloRating": 1746,
    "impliedProb": 0.25,
    "squadDepth": 9,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.8,
      "defensive": 0.7,
      "possession": 0.7,
      "transition": 0.75
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 2.45,
      "goalsAgainst": 1.36
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.9,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 28,
      "goalsFor": 27,
      "goalsAgainst": 15,
      "goalDifference": 12,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "432"
    }
  },
  {
    "name": "Fenerbahçe",
    "code": "FEN",
    "eloRating": 1673,
    "impliedProb": 0.24,
    "squadDepth": 9,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.85,
      "defensive": 0.65,
      "possession": 0.65,
      "transition": 0.8
    },
    "managerExpScore": 9,
    "recentForm": {
      "goalsFor": 2.64,
      "goalsAgainst": 0.91
    },
    "starDependency": 0.35,
    "homeAdvantage": 0.9,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 19,
      "goalsFor": 29,
      "goalsAgainst": 10,
      "goalDifference": 19,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "436"
    }
  },
  {
    "name": "Beşiktaş",
    "code": "BJK",
    "eloRating": 1669,
    "impliedProb": 0.15,
    "squadDepth": 7,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.6,
      "possession": 0.6,
      "transition": 0.65
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 2.09,
      "goalsAgainst": 1.09
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 22,
      "goalsFor": 23,
      "goalsAgainst": 12,
      "goalDifference": 11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "1895"
    }
  },
  {
    "name": "Trabzonspor",
    "code": "TRA",
    "eloRating": 1740,
    "impliedProb": 0.1,
    "squadDepth": 7,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.65,
      "defensive": 0.65,
      "possession": 0.55,
      "transition": 0.6
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 2.36,
      "goalsAgainst": 0.73
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 25,
      "goalsFor": 26,
      "goalsAgainst": 8,
      "goalDifference": 18,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "997"
    }
  },
  {
    "name": "Başakşehir",
    "code": "IBFK",
    "eloRating": 1564,
    "impliedProb": 0.08,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.6,
      "defensive": 0.7,
      "possession": 0.65,
      "transition": 0.5
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 1.73,
      "goalsAgainst": 1.55
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 17,
      "goalsFor": 19,
      "goalsAgainst": 17,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "7914"
    }
  },
  {
    "name": "Adana Demirspor",
    "code": "ADS",
    "eloRating": 1520,
    "impliedProb": 0.05,
    "squadDepth": 6,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.65,
      "defensive": 0.5,
      "possession": 0.5,
      "transition": 0.7
    },
    "managerExpScore": 5,
    "recentForm": {
      "goalsFor": 1.6,
      "goalsAgainst": 1.5
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 4
  },
  {
    "name": "Antalyaspor",
    "code": "ANT",
    "eloRating": 1500,
    "impliedProb": 0.03,
    "squadDepth": 6,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.55,
      "defensive": 0.6,
      "possession": 0.5,
      "transition": 0.55
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 1.2,
      "goalsAgainst": 1.2
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2
  },
  {
    "name": "Kasımpaşa",
    "code": "KAS",
    "eloRating": 1620,
    "impliedProb": 0.02,
    "squadDepth": 5,
    "historicalPedigree": 4,
    "tacticalStyle": {
      "offensive": 0.6,
      "defensive": 0.45,
      "possession": 0.45,
      "transition": 0.65
    },
    "managerExpScore": 5,
    "recentForm": {
      "goalsFor": 1.55,
      "goalsAgainst": 1
    },
    "starDependency": 0.35,
    "homeAdvantage": 0.5,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 20,
      "goalsFor": 17,
      "goalsAgainst": 11,
      "goalDifference": 6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "6870"
    }
  },
  {
    "name": "Alanyaspor",
    "code": "ALA",
    "eloRating": 1449,
    "impliedProb": 0.02,
    "squadDepth": 5,
    "historicalPedigree": 4,
    "tacticalStyle": {
      "offensive": 0.55,
      "defensive": 0.55,
      "possession": 0.55,
      "transition": 0.5
    },
    "managerExpScore": 5,
    "recentForm": {
      "goalsFor": 0.82,
      "goalsAgainst": 1.64
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 12,
      "goalsFor": 9,
      "goalsAgainst": 18,
      "goalDifference": -9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "9078"
    }
  },
  {
    "name": "Kayserispor",
    "code": "KAY",
    "eloRating": 1460,
    "impliedProb": 0.02,
    "squadDepth": 5,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.55,
      "possession": 0.45,
      "transition": 0.55
    },
    "managerExpScore": 5,
    "recentForm": {
      "goalsFor": 1.1,
      "goalsAgainst": 1.2
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3
  },
  {
    "name": "Sivasspor",
    "code": "SIV",
    "eloRating": 1450,
    "impliedProb": 0.02,
    "squadDepth": 5,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.45,
      "defensive": 0.65,
      "possession": 0.4,
      "transition": 0.5
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.1
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1
  },
  {
    "name": "Konyaspor",
    "code": "KON",
    "eloRating": 1406,
    "impliedProb": 0.01,
    "squadDepth": 5,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.45,
      "defensive": 0.6,
      "possession": 0.45,
      "transition": 0.5
    },
    "managerExpScore": 5,
    "recentForm": {
      "goalsFor": 0.55,
      "goalsAgainst": 1.27
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 8,
      "goalsFor": 6,
      "goalsAgainst": 14,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "7648"
    }
  },
  {
    "name": "Ankaragücü",
    "code": "ANK",
    "eloRating": 1430,
    "impliedProb": 0.01,
    "squadDepth": 5,
    "historicalPedigree": 6,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.5,
      "possession": 0.4,
      "transition": 0.6
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1.2,
      "goalsAgainst": 1.4
    },
    "starDependency": 0.35,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2
  },
  {
    "name": "Hatayspor",
    "code": "HAT",
    "eloRating": 1420,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 3,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.45,
      "possession": 0.45,
      "transition": 0.55
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1.1,
      "goalsAgainst": 1.5
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3
  },
  {
    "name": "Fatih Karagümrük",
    "code": "FKG",
    "eloRating": 1410,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 3,
    "tacticalStyle": {
      "offensive": 0.55,
      "defensive": 0.4,
      "possession": 0.5,
      "transition": 0.5
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1.3,
      "goalsAgainst": 1.6
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.4,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1
  },
  {
    "name": "Gaziantep FK",
    "code": "GAZ",
    "eloRating": 1396,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 4,
    "tacticalStyle": {
      "offensive": 0.4,
      "defensive": 0.55,
      "possession": 0.4,
      "transition": 0.45
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 0.82,
      "goalsAgainst": 1.73
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 8,
      "goalsFor": 9,
      "goalsAgainst": 19,
      "goalDifference": -10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "20070"
    }
  },
  {
    "name": "Samsunspor",
    "code": "SAM",
    "eloRating": 1359,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.45,
      "defensive": 0.5,
      "possession": 0.45,
      "transition": 0.5
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 2.36
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 7,
      "goalsFor": 11,
      "goalsAgainst": 26,
      "goalDifference": -15,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "11429"
    }
  },
  {
    "name": "Rizespor",
    "code": "RIZ",
    "eloRating": 1503,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 4,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.45,
      "possession": 0.4,
      "transition": 0.55
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1.18,
      "goalsAgainst": 1.45
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 13,
      "goalsAgainst": 16,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "7656"
    }
  },
  {
    "name": "Pendikspor",
    "code": "PEN",
    "eloRating": 1350,
    "impliedProb": 0.005,
    "squadDepth": 3,
    "historicalPedigree": 1,
    "tacticalStyle": {
      "offensive": 0.4,
      "defensive": 0.4,
      "possession": 0.4,
      "transition": 0.4
    },
    "managerExpScore": 3,
    "recentForm": {
      "goalsFor": 0.8,
      "goalsAgainst": 1.8
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.5,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1
  },
  {
    "name": "İstanbulspor",
    "code": "IST",
    "eloRating": 1330,
    "impliedProb": 0.005,
    "squadDepth": 3,
    "historicalPedigree": 3,
    "tacticalStyle": {
      "offensive": 0.35,
      "defensive": 0.4,
      "possession": 0.35,
      "transition": 0.4
    },
    "managerExpScore": 3,
    "recentForm": {
      "goalsFor": 0.7,
      "goalsAgainst": 2
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.4,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2
  },
  {
    "name": "Göztepe",
    "code": "GOZ",
    "eloRating": 1545,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.5,
      "possession": 0.5,
      "transition": 0.5
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 1.73
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 15,
      "goalsFor": 22,
      "goalsAgainst": 19,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "789"
    }
  },
  {
    "name": "Real Madrid",
    "code": "RMA",
    "eloRating": 2015,
    "impliedProb": 0.3,
    "squadDepth": 10,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.9,
      "defensive": 0.8,
      "possession": 0.85,
      "transition": 0.95
    },
    "managerExpScore": 10,
    "recentForm": {
      "goalsFor": 2.58,
      "goalsAgainst": 0.83
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 30,
      "goalsFor": 31,
      "goalsAgainst": 10,
      "goalDifference": 21,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "86"
    }
  },
  {
    "name": "Barcelona",
    "code": "BAR",
    "eloRating": 2121,
    "impliedProb": 0.25,
    "squadDepth": 9,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.85,
      "defensive": 0.75,
      "possession": 0.9,
      "transition": 0.8
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 4,
      "goalsAgainst": 1.08
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 33,
      "goalsFor": 48,
      "goalsAgainst": 13,
      "goalDifference": 35,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "83"
    }
  },
  {
    "name": "Manchester City",
    "code": "MCI",
    "eloRating": 1842,
    "impliedProb": 0.35,
    "squadDepth": 10,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.95,
      "defensive": 0.85,
      "possession": 0.95,
      "transition": 0.9
    },
    "managerExpScore": 10,
    "recentForm": {
      "goalsFor": 2.1,
      "goalsAgainst": 1.3
    },
    "starDependency": 0.15,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 21,
      "goalsFor": 21,
      "goalsAgainst": 13,
      "goalDifference": 8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "382"
    }
  },
  {
    "name": "Arsenal",
    "code": "ARS",
    "eloRating": 1924,
    "impliedProb": 0.2,
    "squadDepth": 8,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.85,
      "defensive": 0.85,
      "possession": 0.85,
      "transition": 0.85
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 0.5
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 27,
      "goalsFor": 15,
      "goalsAgainst": 5,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "359"
    }
  },
  {
    "name": "Liverpool",
    "code": "LIV",
    "eloRating": 1786,
    "impliedProb": 0.22,
    "squadDepth": 8,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.9,
      "defensive": 0.8,
      "possession": 0.8,
      "transition": 0.9
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 1
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 18,
      "goalsFor": 14,
      "goalsAgainst": 10,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "364"
    }
  },
  {
    "name": "Bayern Munich",
    "code": "BAY",
    "eloRating": 1902,
    "impliedProb": 0.28,
    "squadDepth": 9,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.95,
      "defensive": 0.8,
      "possession": 0.9,
      "transition": 0.85
    },
    "managerExpScore": 9,
    "recentForm": {
      "goalsFor": 3.22,
      "goalsAgainst": 1
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 21,
      "goalsFor": 29,
      "goalsAgainst": 9,
      "goalDifference": 20,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "132"
    }
  },
  {
    "name": "Inter",
    "code": "INT",
    "eloRating": 1980,
    "impliedProb": 0.18,
    "squadDepth": 8,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.8,
      "defensive": 0.9,
      "possession": 0.75,
      "transition": 0.8
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 2.2,
      "goalsAgainst": 0.6
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1
  },
  {
    "name": "AC Milan",
    "code": "MIL",
    "eloRating": 1888,
    "impliedProb": 0.12,
    "squadDepth": 8,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.8,
      "defensive": 0.75,
      "possession": 0.7,
      "transition": 0.85
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 2.09,
      "goalsAgainst": 1.18
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 24,
      "goalsFor": 23,
      "goalsAgainst": 13,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "103"
    }
  },
  {
    "name": "Juventus",
    "code": "JUV",
    "eloRating": 1781,
    "impliedProb": 0.15,
    "squadDepth": 8,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.75,
      "defensive": 0.85,
      "possession": 0.7,
      "transition": 0.75
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.36,
      "goalsAgainst": 1.09
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 18,
      "goalsFor": 15,
      "goalsAgainst": 12,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "111"
    }
  },
  {
    "name": "Gençlerbirliği",
    "code": "GEN",
    "eloRating": 1437,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.45,
      "defensive": 0.5,
      "possession": 0.45,
      "transition": 0.5
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1.09,
      "goalsAgainst": 1.91
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 11,
      "goalsFor": 12,
      "goalsAgainst": 21,
      "goalDifference": -9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "996"
    }
  },
  {
    "name": "Amed SK",
    "code": "AME",
    "eloRating": 1691,
    "impliedProb": 0.01,
    "squadDepth": 3,
    "historicalPedigree": 2,
    "tacticalStyle": {
      "offensive": 0.4,
      "defensive": 0.5,
      "possession": 0.4,
      "transition": 0.4
    },
    "managerExpScore": 3,
    "recentForm": {
      "goalsFor": 2.55,
      "goalsAgainst": 1.36
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 23,
      "goalsFor": 28,
      "goalsAgainst": 15,
      "goalDifference": 13,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "132335"
    }
  },
  {
    "name": "Erzurumspor FK",
    "code": "ERZ",
    "eloRating": 1483,
    "impliedProb": 0.01,
    "squadDepth": 3,
    "historicalPedigree": 3,
    "tacticalStyle": {
      "offensive": 0.4,
      "defensive": 0.55,
      "possession": 0.4,
      "transition": 0.45
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 0.91,
      "goalsAgainst": 1.55
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.2,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 10,
      "goalsAgainst": 17,
      "goalDifference": -7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "19267"
    }
  },
  {
    "name": "Kocaelispor",
    "code": "KOC",
    "eloRating": 1598,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.45,
      "possession": 0.45,
      "transition": 0.55
    },
    "managerExpScore": 5,
    "recentForm": {
      "goalsFor": 1.18,
      "goalsAgainst": 0.82
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 19,
      "goalsFor": 13,
      "goalsAgainst": 9,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "995"
    }
  },
  {
    "name": "Eyüpspor",
    "code": "EYU",
    "eloRating": 1251,
    "impliedProb": 0.02,
    "squadDepth": 5,
    "historicalPedigree": 2,
    "tacticalStyle": {
      "offensive": 0.6,
      "defensive": 0.5,
      "possession": 0.55,
      "transition": 0.6
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 0.27,
      "goalsAgainst": 2.73
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 3,
      "goalsFor": 3,
      "goalsAgainst": 30,
      "goalDifference": -27,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "20729"
    }
  },
  {
    "name": "Çorum FK",
    "code": "COR",
    "eloRating": 1542,
    "impliedProb": 0.01,
    "squadDepth": 4,
    "historicalPedigree": 2,
    "tacticalStyle": {
      "offensive": 0.45,
      "defensive": 0.45,
      "possession": 0.45,
      "transition": 0.5
    },
    "managerExpScore": 4,
    "recentForm": {
      "goalsFor": 1.91,
      "goalsAgainst": 1.91
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 16,
      "goalsFor": 21,
      "goalsAgainst": 21,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "132334"
    }
  },
  {
    "name": "Augsburg",
    "code": "AUG",
    "eloRating": 1658,
    "impliedProb": 0.1,
    "squadDepth": 6,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.5,
      "defensive": 0.6,
      "possession": 0.45,
      "transition": 0.6
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 2.22,
      "goalsAgainst": 2.22
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 9,
      "goalsFor": 20,
      "goalsAgainst": 20,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "3841"
    }
  },
  {
    "name": "RB Leipzig",
    "code": "RBL",
    "eloRating": 1836,
    "impliedProb": 0.15,
    "squadDepth": 8,
    "historicalPedigree": 6,
    "tacticalStyle": {
      "offensive": 0.8,
      "defensive": 0.7,
      "possession": 0.7,
      "transition": 0.9
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 3,
      "goalsAgainst": 1.44
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 18,
      "goalsFor": 27,
      "goalsAgainst": 13,
      "goalDifference": 14,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "11420"
    }
  },
  {
    "name": "Eintracht Frankfurt",
    "code": "EIN",
    "eloRating": 1669,
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.6,
      "possession": 0.6,
      "transition": 0.8
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.67,
      "goalsAgainst": 2.22
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 12,
      "goalsFor": 15,
      "goalsAgainst": 20,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "125"
    }
  },
  {
    "name": "Manchester United",
    "code": "MUN",
    "eloRating": 1621,
    "impliedProb": 0.15,
    "squadDepth": 9,
    "historicalPedigree": 10,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.65,
      "transition": 0.75
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 1.9
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 8,
      "goalsFor": 14,
      "goalsAgainst": 19,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "360"
    }
  },
  {
    "name": "Tottenham Hotspur",
    "code": "TOT",
    "eloRating": 1689,
    "impliedProb": 0.15,
    "squadDepth": 8,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.85,
      "defensive": 0.6,
      "possession": 0.7,
      "transition": 0.8
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.1
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 12,
      "goalsFor": 10,
      "goalsAgainst": 11,
      "goalDifference": -1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "367"
    }
  },
  {
    "name": "Villarreal",
    "code": "VIL",
    "eloRating": 1740,
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.65,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.42,
      "goalsAgainst": 1.25
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 15,
      "goalsFor": 17,
      "goalsAgainst": 15,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "102"
    }
  },
  {
    "name": "Como",
    "code": "COM",
    "eloRating": 1866,
    "impliedProb": 0.08,
    "squadDepth": 6,
    "historicalPedigree": 4,
    "tacticalStyle": {
      "offensive": 0.6,
      "defensive": 0.5,
      "possession": 0.55,
      "transition": 0.6
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 1.64,
      "goalsAgainst": 0.91
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 23,
      "goalsFor": 18,
      "goalsAgainst": 10,
      "goalDifference": 8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "2572"
    }
  },
  {
    "name": "Roma",
    "code": "ROM",
    "eloRating": 1979,
    "impliedProb": 0.12,
    "squadDepth": 8,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.7,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 2.82,
      "goalsAgainst": 0.91
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 27,
      "goalsFor": 31,
      "goalsAgainst": 10,
      "goalDifference": 21,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "104"
    }
  },
  {
    "name": "Everton",
    "code": "EVE",
    "eloRating": 1752,
    "impliedProb": 0.1,
    "squadDepth": 6,
    "historicalPedigree": 6,
    "tacticalStyle": {
      "offensive": 0.6,
      "defensive": 0.65,
      "possession": 0.45,
      "transition": 0.65
    },
    "managerExpScore": 6,
    "recentForm": {
      "goalsFor": 1.2,
      "goalsAgainst": 1
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 16,
      "goalsFor": 12,
      "goalsAgainst": 10,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "368"
    }
  },
  {
    "name": "Chelsea",
    "code": "CHE",
    "eloRating": 1757,
    "impliedProb": 0.22,
    "squadDepth": 9,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.85,
      "defensive": 0.7,
      "possession": 0.8,
      "transition": 0.8
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.9,
      "goalsAgainst": 1.6
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 16,
      "goalsFor": 19,
      "goalsAgainst": 16,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "363"
    }
  },
  {
    "name": "Brentford",
    "code": "BRE",
    "eloRating": 1743,
    "impliedProb": 0.1,
    "squadDepth": 6,
    "historicalPedigree": 5,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.55,
      "possession": 0.5,
      "transition": 0.75
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.6,
      "goalsAgainst": 1.1
    },
    "starDependency": 0.35,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 14,
      "goalsFor": 16,
      "goalsAgainst": 11,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "337"
    }
  },
  {
    "name": "Real Betis",
    "code": "BET",
    "eloRating": 1887,
    "impliedProb": 0.15,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.65,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.67,
      "goalsAgainst": 1.25
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 26,
      "goalsFor": 20,
      "goalsAgainst": 15,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "244"
    }
  },
  {
    "name": "Sevilla",
    "code": "SEV",
    "eloRating": 1756,
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.65,
      "defensive": 0.6,
      "possession": 0.6,
      "transition": 0.65
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.42,
      "goalsAgainst": 1.58
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 18,
      "goalsFor": 17,
      "goalsAgainst": 19,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "243"
    }
  },
  {
    "name": "Atalanta",
    "code": "ATA",
    "eloRating": 1703,
    "impliedProb": 0.15,
    "squadDepth": 8,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.85,
      "defensive": 0.7,
      "possession": 0.75,
      "transition": 0.85
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.55,
      "goalsAgainst": 1.82
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 17,
      "goalsAgainst": 20,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "105"
    }
  },
  {
    "name": "Lazio",
    "code": "LAZ",
    "eloRating": 1978,
    "impliedProb": 0.18,
    "squadDepth": 8,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.8,
      "defensive": 0.75,
      "possession": 0.7,
      "transition": 0.75
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 2.27,
      "goalsAgainst": 0.82
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 29,
      "goalsFor": 25,
      "goalsAgainst": 9,
      "goalDifference": 16,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "112"
    }
  },
  {
    "name": "Borussia Dortmund",
    "code": "BVB",
    "eloRating": 1847,
    "impliedProb": 0.18,
    "squadDepth": 8,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.82,
      "defensive": 0.7,
      "possession": 0.75,
      "transition": 0.85
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.78,
      "goalsAgainst": 0.78
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 21,
      "goalsFor": 16,
      "goalsAgainst": 7,
      "goalDifference": 9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "124"
    }
  },
  {
    "name": "Monaco",
    "code": "ASM",
    "eloRating": 1752,
    "impliedProb": 0.15,
    "squadDepth": 7,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.78,
      "defensive": 0.68,
      "possession": 0.7,
      "transition": 0.8
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.3,
      "goalsAgainst": 1.1
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 16,
      "goalsFor": 13,
      "goalsAgainst": 11,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "174"
    }
  },
  {
    "name": "Lille",
    "code": "LIL",
    "eloRating": 1837,
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.72,
      "defensive": 0.75,
      "possession": 0.65,
      "transition": 0.75
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 0.7
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 21,
      "goalsFor": 14,
      "goalsAgainst": 7,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "166"
    }
  },
  {
    "name": "Paris Saint-Germain",
    "code": "PSG",
    "eloRating": 1825,
    "impliedProb": 0.28,
    "squadDepth": 9,
    "historicalPedigree": 9,
    "tacticalStyle": {
      "offensive": 0.9,
      "defensive": 0.78,
      "possession": 0.88,
      "transition": 0.88
    },
    "managerExpScore": 9,
    "recentForm": {
      "goalsFor": 1.7,
      "goalsAgainst": 1
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 20,
      "goalsFor": 17,
      "goalsAgainst": 10,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "6851"
    }
  },
  {
    "name": "Olympique Lyon",
    "code": "LYO",
    "eloRating": 1784,
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.74,
      "defensive": 0.65,
      "possession": 0.68,
      "transition": 0.72
    },
    "managerExpScore": 7,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 0.9
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 17,
      "goalsFor": 15,
      "goalsAgainst": 9,
      "goalDifference": 6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "167"
    }
  },
  {
    "name": "Napoli",
    "code": "NAP",
    "eloRating": 1750,
    "impliedProb": 0.2,
    "squadDepth": 8,
    "historicalPedigree": 8,
    "tacticalStyle": {
      "offensive": 0.82,
      "defensive": 0.8,
      "possession": 0.75,
      "transition": 0.8
    },
    "managerExpScore": 8,
    "recentForm": {
      "goalsFor": 1.64,
      "goalsAgainst": 1.27
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 11,
      "points": 15,
      "goalsFor": 18,
      "goalsAgainst": 14,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "114"
    }
  },
  {
    "name": "Aston Villa",
    "code": "AVL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity"
      ],
      "estimationMethod": "Median of existing team inputs; not measured team statistics"
    },
    "eloRating": 1691,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 1.7
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 10,
      "points": 13,
      "goalsFor": 14,
      "goalsAgainst": 17,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "362"
    }
  },
  {
    "name": "Atlético Madrid",
    "code": "ATM",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity"
      ],
      "estimationMethod": "Median of existing team inputs; not measured team statistics"
    },
    "eloRating": 1951,
    "recentForm": {
      "goalsFor": 1.92,
      "goalsAgainst": 0.83
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 28,
      "goalsFor": 23,
      "goalsAgainst": 10,
      "goalDifference": 13,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "1068"
    }
  },
  {
    "name": "Valencia",
    "code": "VAL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity"
      ],
      "estimationMethod": "Median of existing team inputs; not measured team statistics"
    },
    "eloRating": 1598,
    "recentForm": {
      "goalsFor": 0.67,
      "goalsAgainst": 1.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 12,
      "points": 9,
      "goalsFor": 8,
      "goalsAgainst": 20,
      "goalDifference": -12,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "94"
    }
  },
  {
    "name": "Werder Bremen",
    "code": "SVW",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity"
      ],
      "estimationMethod": "Median of existing team inputs; not measured team statistics"
    },
    "eloRating": 1740,
    "recentForm": {
      "goalsFor": 1.89,
      "goalsAgainst": 1.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 15,
      "goalsFor": 17,
      "goalsAgainst": 15,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "137"
    }
  },
  {
    "name": "VfB Stuttgart",
    "code": "VFB",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity"
      ],
      "estimationMethod": "Median of existing team inputs; not measured team statistics"
    },
    "eloRating": 1694,
    "recentForm": {
      "goalsFor": 1.67,
      "goalsAgainst": 1.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 9,
      "points": 12,
      "goalsFor": 15,
      "goalsAgainst": 15,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "134"
    }
  },
  {
    "name": "Italy",
    "code": "NAT_ITA",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1649,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 7,
      "goalsFor": 8,
      "goalsAgainst": 5,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "162",
      "group": "Group A1"
    },
    "teamType": "national"
  },
  {
    "name": "Belgium",
    "code": "NAT_BEL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1627,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 6,
      "goalsFor": 6,
      "goalsAgainst": 5,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "459",
      "group": "Group A1"
    },
    "teamType": "national"
  },
  {
    "name": "Türkiye",
    "code": "NAT_TUR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1505,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 2.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 0,
      "goalsFor": 2,
      "goalsAgainst": 11,
      "goalDifference": -9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "465",
      "group": "Group A1"
    },
    "teamType": "national"
  },
  {
    "name": "France",
    "code": "NAT_FRA",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1695,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 10,
      "goalsFor": 7,
      "goalsAgainst": 2,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "478",
      "group": "Group A1"
    },
    "teamType": "national"
  },
  {
    "name": "Netherlands",
    "code": "NAT_NED",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1656,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 7,
      "goalsAgainst": 5,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "449",
      "group": "Group A2"
    },
    "teamType": "national"
  },
  {
    "name": "Greece",
    "code": "NAT_GRE",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1656,
    "recentForm": {
      "goalsFor": 1.25,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 5,
      "goalsAgainst": 3,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "455",
      "group": "Group A2"
    },
    "teamType": "national"
  },
  {
    "name": "Germany",
    "code": "NAT_GER",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1615,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 5,
      "goalsFor": 3,
      "goalsAgainst": 2,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "481",
      "group": "Group A2"
    },
    "teamType": "national"
  },
  {
    "name": "Serbia",
    "code": "NAT_SRB",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1525,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 0,
      "goalsFor": 3,
      "goalsAgainst": 8,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "6757",
      "group": "Group A2"
    },
    "teamType": "national"
  },
  {
    "name": "Spain",
    "code": "NAT_ESP",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1729,
    "recentForm": {
      "goalsFor": 3,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 12,
      "goalsFor": 12,
      "goalsAgainst": 5,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "164",
      "group": "Group A3"
    },
    "teamType": "national"
  },
  {
    "name": "England",
    "code": "NAT_ENG",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1713,
    "recentForm": {
      "goalsFor": 3.5,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 9,
      "goalsFor": 14,
      "goalsAgainst": 3,
      "goalDifference": 11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "448",
      "group": "Group A3"
    },
    "teamType": "national"
  },
  {
    "name": "Czechia",
    "code": "NAT_CZE",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1510,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 2.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 0,
      "goalsFor": 2,
      "goalsAgainst": 10,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "450",
      "group": "Group A3"
    },
    "teamType": "national"
  },
  {
    "name": "Croatia",
    "code": "NAT_CRO",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1536,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 3.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 3,
      "goalsFor": 4,
      "goalsAgainst": 14,
      "goalDifference": -10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "477",
      "group": "Group A3"
    },
    "teamType": "national"
  },
  {
    "name": "Norway",
    "code": "NAT_NOR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1576,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 3,
      "goalsFor": 6,
      "goalsAgainst": 8,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "464",
      "group": "Group A4"
    },
    "teamType": "national"
  },
  {
    "name": "Denmark",
    "code": "NAT_DEN",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1622,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 1.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 6,
      "goalsFor": 7,
      "goalsAgainst": 7,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "479",
      "group": "Group A4"
    },
    "teamType": "national"
  },
  {
    "name": "Portugal",
    "code": "NAT_POR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1719,
    "recentForm": {
      "goalsFor": 2.25,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 12,
      "goalsFor": 9,
      "goalsAgainst": 4,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "482",
      "group": "Group A4"
    },
    "teamType": "national"
  },
  {
    "name": "Wales",
    "code": "NAT_WAL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1571,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 3,
      "goalsFor": 2,
      "goalsAgainst": 5,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "578",
      "group": "Group A4"
    },
    "teamType": "national"
  },
  {
    "name": "North Macedonia",
    "code": "NAT_MKD",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1500,
    "recentForm": {
      "goalsFor": 0,
      "goalsAgainst": 2.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 0,
      "goalsFor": 0,
      "goalsAgainst": 10,
      "goalDifference": -10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "463",
      "group": "Group B1"
    },
    "teamType": "national"
  },
  {
    "name": "Slovenia",
    "code": "NAT_SVN",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1644,
    "recentForm": {
      "goalsFor": 1.25,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 3,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "472",
      "group": "Group B1"
    },
    "teamType": "national"
  },
  {
    "name": "Switzerland",
    "code": "NAT_SUI",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1744,
    "recentForm": {
      "goalsFor": 2.75,
      "goalsAgainst": 0.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 12,
      "goalsFor": 11,
      "goalsAgainst": 1,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "475",
      "group": "Group B1"
    },
    "teamType": "national"
  },
  {
    "name": "Scotland",
    "code": "NAT_SCO",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1588,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 3,
      "goalsAgainst": 5,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "580",
      "group": "Group B1"
    },
    "teamType": "national"
  },
  {
    "name": "Ukraine",
    "code": "NAT_UKR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1583,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 2,
      "goalsAgainst": 5,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "457",
      "group": "Group B2"
    },
    "teamType": "national"
  },
  {
    "name": "Hungary",
    "code": "NAT_HUN",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1639,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 7,
      "goalsFor": 3,
      "goalsAgainst": 2,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "480",
      "group": "Group B2"
    },
    "teamType": "national"
  },
  {
    "name": "Georgia",
    "code": "NAT_GEO",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1564,
    "recentForm": {
      "goalsFor": 0,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 2,
      "goalsFor": 0,
      "goalsAgainst": 2,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "584",
      "group": "Group B2"
    },
    "teamType": "national"
  },
  {
    "name": "Northern Ireland",
    "code": "NAT_NIR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1666,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 0
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 4,
      "goalsAgainst": 0,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "586",
      "group": "Group B2"
    },
    "teamType": "national"
  },
  {
    "name": "Israel",
    "code": "NAT_ISR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1549,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 2,
      "goalsFor": 2,
      "goalsAgainst": 7,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "461",
      "group": "Group B3"
    },
    "teamType": "national"
  },
  {
    "name": "Austria",
    "code": "NAT_AUT",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1666,
    "recentForm": {
      "goalsFor": 2.25,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 9,
      "goalsAgainst": 5,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "474",
      "group": "Group B3"
    },
    "teamType": "national"
  },
  {
    "name": "Republic of Ireland",
    "code": "NAT_IRL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1620,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 5,
      "goalsFor": 6,
      "goalsAgainst": 4,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "476",
      "group": "Group B3"
    },
    "teamType": "national"
  },
  {
    "name": "Kosovo",
    "code": "NAT_KOS",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1605,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 5,
      "goalsFor": 3,
      "goalsAgainst": 4,
      "goalDifference": -1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "18272",
      "group": "Group B3"
    },
    "teamType": "national"
  },
  {
    "name": "Bosnia-Herzegovina",
    "code": "NAT_BIH",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1661,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 6,
      "goalsAgainst": 3,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "452",
      "group": "Group B4"
    },
    "teamType": "national"
  },
  {
    "name": "Sweden",
    "code": "NAT_SWE",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1690,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 10,
      "goalsFor": 7,
      "goalsAgainst": 3,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "466",
      "group": "Group B4"
    },
    "teamType": "national"
  },
  {
    "name": "Poland",
    "code": "NAT_POL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1613,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 7,
      "goalsAgainst": 4,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "471",
      "group": "Group B4"
    },
    "teamType": "national"
  },
  {
    "name": "Romania",
    "code": "NAT_ROU",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1500,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 3.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 0,
      "goalsFor": 3,
      "goalsAgainst": 13,
      "goalDifference": -10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "473",
      "group": "Group B4"
    },
    "teamType": "national"
  },
  {
    "name": "Finland",
    "code": "NAT_FIN",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1669,
    "recentForm": {
      "goalsFor": 2.25,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 7,
      "goalsFor": 9,
      "goalsAgainst": 2,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "458",
      "group": "Group C1"
    },
    "teamType": "national"
  },
  {
    "name": "Belarus",
    "code": "NAT_BLR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1649,
    "recentForm": {
      "goalsFor": 1.25,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 2,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "583",
      "group": "Group C1"
    },
    "teamType": "national"
  },
  {
    "name": "Albania",
    "code": "NAT_ALB",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1683,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 9,
      "goalsFor": 8,
      "goalsAgainst": 3,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "585",
      "group": "Group C1"
    },
    "teamType": "national"
  },
  {
    "name": "San Marino",
    "code": "NAT_SMR",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1475,
    "recentForm": {
      "goalsFor": 0.25,
      "goalsAgainst": 4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 0,
      "goalsFor": 1,
      "goalsAgainst": 16,
      "goalDifference": -15,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "588",
      "group": "Group C1"
    },
    "teamType": "national"
  },
  {
    "name": "Cyprus",
    "code": "NAT_CYP",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1644,
    "recentForm": {
      "goalsFor": 1.25,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 3,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "445",
      "group": "Group C2"
    },
    "teamType": "national"
  },
  {
    "name": "Latvia",
    "code": "NAT_LVA",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1542,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 1,
      "goalsFor": 2,
      "goalsAgainst": 6,
      "goalDifference": -4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "456",
      "group": "Group C2"
    },
    "teamType": "national"
  },
  {
    "name": "Armenia",
    "code": "NAT_ARM",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1593,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 4,
      "goalsAgainst": 5,
      "goalDifference": -1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "579",
      "group": "Group C2"
    },
    "teamType": "national"
  },
  {
    "name": "Montenegro",
    "code": "NAT_MNE",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1685,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 10,
      "goalsFor": 7,
      "goalsAgainst": 4,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "6775",
      "group": "Group C2"
    },
    "teamType": "national"
  },
  {
    "name": "Faroe Islands",
    "code": "NAT_FRO",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1598,
    "recentForm": {
      "goalsFor": 1.25,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 5,
      "goalsAgainst": 5,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "447",
      "group": "Group C3"
    },
    "teamType": "national"
  },
  {
    "name": "Slovakia",
    "code": "NAT_SVK",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1705,
    "recentForm": {
      "goalsFor": 2.25,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 10,
      "goalsFor": 9,
      "goalsAgainst": 2,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "468",
      "group": "Group C3"
    },
    "teamType": "national"
  },
  {
    "name": "Moldova",
    "code": "NAT_MDA",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1573,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 3,
      "goalsAgainst": 8,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "483",
      "group": "Group C3"
    },
    "teamType": "national"
  },
  {
    "name": "Kazakhstan",
    "code": "NAT_KAZ",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1564,
    "recentForm": {
      "goalsFor": 1.25,
      "goalsAgainst": 1.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 2,
      "goalsFor": 5,
      "goalsAgainst": 7,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "2619",
      "group": "Group C3"
    },
    "teamType": "national"
  },
  {
    "name": "Estonia",
    "code": "NAT_EST",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1627,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 0.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 6,
      "goalsFor": 2,
      "goalsAgainst": 1,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "444",
      "group": "Group C4"
    },
    "teamType": "national"
  },
  {
    "name": "Bulgaria",
    "code": "NAT_BUL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1588,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 3,
      "goalsAgainst": 5,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "462",
      "group": "Group C4"
    },
    "teamType": "national"
  },
  {
    "name": "Iceland",
    "code": "NAT_ISL",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1676,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 0.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 7,
      "goalsAgainst": 1,
      "goalDifference": 6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "470",
      "group": "Group C4"
    },
    "teamType": "national"
  },
  {
    "name": "Luxembourg",
    "code": "NAT_LUX",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1561,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 4,
      "points": 3,
      "goalsFor": 2,
      "goalsAgainst": 7,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "582",
      "group": "Group C4"
    },
    "teamType": "national"
  },
  {
    "name": "Malta",
    "code": "NAT_MLT",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1644,
    "recentForm": {
      "goalsFor": 1.33,
      "goalsAgainst": 0.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 3,
      "points": 7,
      "goalsFor": 4,
      "goalsAgainst": 2,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "453",
      "group": "Group D1"
    },
    "teamType": "national"
  },
  {
    "name": "Andorra",
    "code": "NAT_AND",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1552,
    "recentForm": {
      "goalsFor": 0.33,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 3,
      "points": 1,
      "goalsFor": 1,
      "goalsAgainst": 3,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "587",
      "group": "Group D1"
    },
    "teamType": "national"
  },
  {
    "name": "Gibraltar",
    "code": "NAT_GIB",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1574,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 2,
      "points": 2,
      "goalsFor": 1,
      "goalsAgainst": 1,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "16721",
      "group": "Group D1"
    },
    "teamType": "national"
  },
  {
    "name": "Lithuania",
    "code": "NAT_LTU",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1603,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 0.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 3,
      "points": 4,
      "goalsFor": 3,
      "goalsAgainst": 2,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "460",
      "group": "Group D2"
    },
    "teamType": "national"
  },
  {
    "name": "Azerbaijan",
    "code": "NAT_AZE",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1615,
    "recentForm": {
      "goalsFor": 0.67,
      "goalsAgainst": 0.33
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 3,
      "points": 5,
      "goalsFor": 2,
      "goalsAgainst": 1,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "581",
      "group": "Group D2"
    },
    "teamType": "national"
  },
  {
    "name": "Liechtenstein",
    "code": "NAT_LIE",
    "impliedProb": 0.12,
    "squadDepth": 7,
    "historicalPedigree": 7,
    "tacticalStyle": {
      "offensive": 0.7,
      "defensive": 0.65,
      "possession": 0.6,
      "transition": 0.7
    },
    "managerExpScore": 7,
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "dataQuality": {
      "estimatedFields": [
        "impliedProb",
        "squadDepth",
        "historicalPedigree",
        "tacticalStyle",
        "managerExpScore",
        "starDependency",
        "homeAdvantage",
        "altitudeAdaptation",
        "groupDifficulty",
        "injurySeverity",
        "eloRating"
      ],
      "estimationMethod": "Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated."
    },
    "eloRating": 1552,
    "recentForm": {
      "goalsFor": 0,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-11T18:38:03.873Z",
      "gamesPlayed": 2,
      "points": 1,
      "goalsFor": 0,
      "goalsAgainst": 2,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "589",
      "group": "Group D2"
    },
    "teamType": "national"
  }
];

const FIXTURES_DATA = [
  {"id":1,"providerId":"340098a9-978f-4d14-1645-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_FRA","away":"NAT_TUR","homeName":"Fransa","awayName":"Türkiye","kickoffRaw":"2026-11-15T22:45:00","kickoff":"2026-11-15T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047898","url":"https://match.uefa.com/v5/matches/2047898","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-15T19:45:00Z","status":"UPCOMING"}},
  {"id":2,"providerId":"4d3ecee8-01e5-41c2-162f-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_BUL","away":"NAT_ISL","homeName":"Bulgaristan","awayName":"İzlanda","kickoffRaw":"2026-11-13T22:45:00","kickoff":"2026-11-13T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047882","url":"https://match.uefa.com/v5/matches/2047882","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-13T19:45:00Z","status":"UPCOMING"}},
  {"id":3,"providerId":"cf705df5-5c48-45f8-1634-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_LIE","away":"NAT_AZE","homeName":"Lihtenştayn","awayName":"Azerbaycan","kickoffRaw":"2026-11-13T22:45:00","kickoff":"2026-11-13T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047885","url":"https://match.uefa.com/v5/matches/2047885","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-13T19:45:00Z","status":"UPCOMING"}},
  {"id":4,"providerId":"7bea3e14-b1b0-4755-1630-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_LUX","away":"NAT_EST","homeName":"Lüksemburg","awayName":"Estonya","kickoffRaw":"2026-11-13T22:45:00","kickoff":"2026-11-13T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047881","url":"https://match.uefa.com/v5/matches/2047881","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-13T19:45:00Z","status":"UPCOMING"}},
  {"id":5,"providerId":"c33c3751-98b8-46ad-162e-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_SVK","away":"NAT_FRO","homeName":"Slovakya","awayName":"Faroe Adaları","kickoffRaw":"2026-11-13T22:45:00","kickoff":"2026-11-13T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047880","url":"https://match.uefa.com/v5/matches/2047880","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-13T19:45:00Z","status":"UPCOMING"}},
  {"id":6,"providerId":"084ca742-0095-45d8-1639-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_GEO","away":"NAT_HUN","homeName":"Gürcistan","awayName":"Macaristan","kickoffRaw":"2026-11-14T20:00:00","kickoff":"2026-11-14T17:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047895","url":"https://match.uefa.com/v5/matches/2047895","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-14T17:00:00Z","status":"UPCOMING"}},
  {"id":7,"providerId":"d06ffcaf-1712-49a7-1638-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_NOR","away":"NAT_WAL","homeName":"Norveç","awayName":"Galler","kickoffRaw":"2026-11-14T20:00:00","kickoff":"2026-11-14T17:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047893","url":"https://match.uefa.com/v5/matches/2047893","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-14T17:00:00Z","status":"UPCOMING"}},
  {"id":8,"providerId":"176dc7d0-8feb-435f-163a-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_POR","away":"NAT_DEN","homeName":"Portekiz","awayName":"Danimarka","kickoffRaw":"2026-11-14T22:45:00","kickoff":"2026-11-14T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047892","url":"https://match.uefa.com/v5/matches/2047892","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-14T19:45:00Z","status":"UPCOMING"}},
  {"id":9,"providerId":"cfacc145-37f9-43c7-1643-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_BEL","away":"NAT_ITA","homeName":"Belçika","awayName":"İtalya","kickoffRaw":"2026-11-15T22:45:00","kickoff":"2026-11-15T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047900","url":"https://match.uefa.com/v5/matches/2047900","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-15T19:45:00Z","status":"UPCOMING"}},
  {"id":10,"providerId":"648c6def-36d4-44d0-1644-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_CRO","away":"NAT_CZE","homeName":"Hırvatistan","awayName":"Çekya","kickoffRaw":"2026-11-15T22:45:00","kickoff":"2026-11-15T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047902","url":"https://match.uefa.com/v5/matches/2047902","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-15T19:45:00Z","status":"UPCOMING"}},
  {"id":11,"providerId":"5401e803-6451-4fe0-1646-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_ESP","away":"NAT_ENG","homeName":"İspanya","awayName":"İngiltere","kickoffRaw":"2026-11-15T22:45:00","kickoff":"2026-11-15T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047904","url":"https://match.uefa.com/v5/matches/2047904","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-15T19:45:00Z","status":"UPCOMING"}},
  {"id":12,"providerId":"c3658ae1-53ab-4a94-164c-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_GER","away":"NAT_NED","homeName":"Almanya","awayName":"Hollanda","kickoffRaw":"2026-11-16T22:45:00","kickoff":"2026-11-16T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047909","url":"https://match.uefa.com/v5/matches/2047909","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-16T19:45:00Z","status":"UPCOMING"}},
  {"id":13,"providerId":"d9713b86-ad27-4183-1650-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_MKD","away":"NAT_SVN","homeName":"Kuzey Makedonya Cumhuriyeti","awayName":"Slovenya","kickoffRaw":"2026-11-16T22:45:00","kickoff":"2026-11-16T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047915","url":"https://match.uefa.com/v5/matches/2047915","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-16T19:45:00Z","status":"UPCOMING"}},
  {"id":14,"providerId":"68a07749-e313-4a4d-164d-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_GRE","away":"NAT_SRB","homeName":"Yunanistan","awayName":"Sırbistan","kickoffRaw":"2026-11-16T22:45:00","kickoff":"2026-11-16T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047912","url":"https://match.uefa.com/v5/matches/2047912","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-16T19:45:00Z","status":"UPCOMING"}},
  {"id":15,"providerId":"92f6495b-e5a2-4fb8-164f-08df15776e55","roundId":1542,"leagueId":258,"home":"NAT_SUI","away":"NAT_SCO","homeName":"İsviçre","awayName":"İskoçya","kickoffRaw":"2026-11-16T22:45:00","kickoff":"2026-11-16T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"uefa","matchId":"2047914","url":"https://match.uefa.com/v5/matches/2047914","fetchedAt":"2026-11-11T18:38:05.357Z","matchingPolicy":"unique national identities, home/away, competition, season and calendar date","rawKickoff":"2026-11-16T19:45:00Z","status":"UPCOMING"}}
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { TEAMS_DATA, FIXTURES_DATA }; }
