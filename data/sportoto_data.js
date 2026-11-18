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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 28,
      "goalsFor": 27,
      "goalsAgainst": 15,
      "goalDifference": 12,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 19,
      "goalsFor": 29,
      "goalsAgainst": 10,
      "goalDifference": 19,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 22,
      "goalsFor": 23,
      "goalsAgainst": 12,
      "goalDifference": 11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 25,
      "goalsFor": 26,
      "goalsAgainst": 8,
      "goalDifference": 18,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 17,
      "goalsFor": 19,
      "goalsAgainst": 17,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 20,
      "goalsFor": 17,
      "goalsAgainst": 11,
      "goalDifference": 6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 12,
      "goalsFor": 9,
      "goalsAgainst": 18,
      "goalDifference": -9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 8,
      "goalsFor": 6,
      "goalsAgainst": 14,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 8,
      "goalsFor": 9,
      "goalsAgainst": 19,
      "goalDifference": -10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 7,
      "goalsFor": 11,
      "goalsAgainst": 26,
      "goalDifference": -15,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 13,
      "goalsAgainst": 16,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 15,
      "goalsFor": 22,
      "goalsAgainst": 19,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 30,
      "goalsFor": 31,
      "goalsAgainst": 10,
      "goalDifference": 21,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 33,
      "goalsFor": 48,
      "goalsAgainst": 13,
      "goalDifference": 35,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 21,
      "goalsFor": 21,
      "goalsAgainst": 13,
      "goalDifference": 8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 27,
      "goalsFor": 15,
      "goalsAgainst": 5,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 18,
      "goalsFor": 14,
      "goalsAgainst": 10,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 21,
      "goalsFor": 29,
      "goalsAgainst": 9,
      "goalDifference": 20,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 24,
      "goalsFor": 23,
      "goalsAgainst": 13,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 18,
      "goalsFor": 15,
      "goalsAgainst": 12,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 11,
      "goalsFor": 12,
      "goalsAgainst": 21,
      "goalDifference": -9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 23,
      "goalsFor": 28,
      "goalsAgainst": 15,
      "goalDifference": 13,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 10,
      "goalsAgainst": 17,
      "goalDifference": -7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 19,
      "goalsFor": 13,
      "goalsAgainst": 9,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 3,
      "goalsFor": 3,
      "goalsAgainst": 30,
      "goalDifference": -27,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 16,
      "goalsFor": 21,
      "goalsAgainst": 21,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 9,
      "goalsFor": 20,
      "goalsAgainst": 20,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 18,
      "goalsFor": 27,
      "goalsAgainst": 13,
      "goalDifference": 14,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 12,
      "goalsFor": 15,
      "goalsAgainst": 20,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 8,
      "goalsFor": 14,
      "goalsAgainst": 19,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 12,
      "goalsFor": 10,
      "goalsAgainst": 11,
      "goalDifference": -1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 15,
      "goalsFor": 17,
      "goalsAgainst": 15,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 23,
      "goalsFor": 18,
      "goalsAgainst": 10,
      "goalDifference": 8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 27,
      "goalsFor": 31,
      "goalsAgainst": 10,
      "goalDifference": 21,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 16,
      "goalsFor": 12,
      "goalsAgainst": 10,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 16,
      "goalsFor": 19,
      "goalsAgainst": 16,
      "goalDifference": 3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 14,
      "goalsFor": 16,
      "goalsAgainst": 11,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 26,
      "goalsFor": 20,
      "goalsAgainst": 15,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 18,
      "goalsFor": 17,
      "goalsAgainst": 19,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 17,
      "goalsAgainst": 20,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 29,
      "goalsFor": 25,
      "goalsAgainst": 9,
      "goalDifference": 16,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 21,
      "goalsFor": 16,
      "goalsAgainst": 7,
      "goalDifference": 9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 16,
      "goalsFor": 13,
      "goalsAgainst": 11,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 21,
      "goalsFor": 14,
      "goalsAgainst": 7,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 20,
      "goalsFor": 17,
      "goalsAgainst": 10,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 17,
      "goalsFor": 15,
      "goalsAgainst": 9,
      "goalDifference": 6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 11,
      "points": 15,
      "goalsFor": 18,
      "goalsAgainst": 14,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 13,
      "goalsFor": 14,
      "goalsAgainst": 17,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 28,
      "goalsFor": 23,
      "goalsAgainst": 10,
      "goalDifference": 13,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 12,
      "points": 9,
      "goalsFor": 8,
      "goalsAgainst": 20,
      "goalDifference": -12,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 15,
      "goalsFor": 17,
      "goalsAgainst": 15,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 12,
      "goalsFor": 15,
      "goalsAgainst": 15,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
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
    "eloRating": 1995,
    "recentForm": {
      "goalsFor": 2.2,
      "goalsAgainst": 1.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 10,
      "goalsFor": 11,
      "goalsAgainst": 6,
      "goalDifference": 5,
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
    "eloRating": 1968,
    "recentForm": {
      "goalsFor": 1.6,
      "goalsAgainst": 1.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 9,
      "goalsFor": 8,
      "goalsAgainst": 6,
      "goalDifference": 2,
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
    "eloRating": 1800,
    "recentForm": {
      "goalsFor": 0.6,
      "goalsAgainst": 2.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 0,
      "goalsFor": 3,
      "goalsAgainst": 13,
      "goalDifference": -10,
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
    "eloRating": 1985,
    "recentForm": {
      "goalsFor": 1.6,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 10,
      "goalsFor": 8,
      "goalsAgainst": 5,
      "goalDifference": 3,
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
    "eloRating": 2027,
    "recentForm": {
      "goalsFor": 2.8,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 11,
      "goalsFor": 14,
      "goalsAgainst": 5,
      "goalDifference": 9,
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
    "eloRating": 1921,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 8,
      "goalsFor": 5,
      "goalsAgainst": 10,
      "goalDifference": -5,
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
    "eloRating": 1961,
    "recentForm": {
      "goalsFor": 1.2,
      "goalsAgainst": 0.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 8,
      "goalsFor": 6,
      "goalsAgainst": 3,
      "goalDifference": 3,
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
    "eloRating": 1815,
    "recentForm": {
      "goalsFor": 0.8,
      "goalsAgainst": 2.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 0,
      "goalsFor": 4,
      "goalsAgainst": 11,
      "goalDifference": -7,
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
    "eloRating": 2075,
    "recentForm": {
      "goalsFor": 2.8,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 15,
      "goalsFor": 14,
      "goalsAgainst": 5,
      "goalDifference": 9,
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
    "eloRating": 2054,
    "recentForm": {
      "goalsFor": 3.2,
      "goalsAgainst": 0.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 12,
      "goalsFor": 16,
      "goalsAgainst": 4,
      "goalDifference": 12,
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
    "eloRating": 1800,
    "recentForm": {
      "goalsFor": 0.4,
      "goalsAgainst": 2.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 0,
      "goalsFor": 2,
      "goalsAgainst": 12,
      "goalDifference": -10,
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
    "eloRating": 1831,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 3.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 3,
      "goalsFor": 5,
      "goalsAgainst": 16,
      "goalDifference": -11,
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
    "eloRating": 1876,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1922,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 1.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 2019,
    "recentForm": {
      "goalsFor": 2.25,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1871,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1645,
    "recentForm": {
      "goalsFor": 0.2,
      "goalsAgainst": 2.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 0,
      "goalsFor": 1,
      "goalsAgainst": 12,
      "goalDifference": -11,
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
    "eloRating": 1806,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 0.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 8,
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
    "eloRating": 1906,
    "recentForm": {
      "goalsFor": 2.2,
      "goalsAgainst": 0.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 13,
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
    "eloRating": 1779,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 6,
      "goalDifference": -1,
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
    "eloRating": 1733,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1789,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1714,
    "recentForm": {
      "goalsFor": 0,
      "goalsAgainst": 0.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1816,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 0
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1699,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1816,
    "recentForm": {
      "goalsFor": 2.25,
      "goalsAgainst": 1.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1770,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1755,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1811,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1840,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1763,
    "recentForm": {
      "goalsFor": 1.75,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1650,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 3.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1659,
    "recentForm": {
      "goalsFor": 1.8,
      "goalsAgainst": 0.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 7,
      "goalsFor": 9,
      "goalsAgainst": 4,
      "goalDifference": 5,
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
    "eloRating": 1695,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 0.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 10,
      "goalsFor": 7,
      "goalsAgainst": 2,
      "goalDifference": 5,
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
    "eloRating": 1729,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 0.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 12,
      "goalsFor": 10,
      "goalsAgainst": 3,
      "goalDifference": 7,
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
    "eloRating": 1465,
    "recentForm": {
      "goalsFor": 0.2,
      "goalsAgainst": 3.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 0,
      "goalsFor": 1,
      "goalsAgainst": 18,
      "goalDifference": -17,
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
    "eloRating": 1656,
    "recentForm": {
      "goalsFor": 1.2,
      "goalsAgainst": 0.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 8,
      "goalsFor": 6,
      "goalsAgainst": 4,
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
    "eloRating": 1537,
    "recentForm": {
      "goalsFor": 0.6,
      "goalsAgainst": 1.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 1,
      "goalsFor": 3,
      "goalsAgainst": 8,
      "goalDifference": -5,
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
    "eloRating": 1605,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 5,
      "goalsFor": 5,
      "goalsAgainst": 6,
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
    "eloRating": 1726,
    "recentForm": {
      "goalsFor": 1.8,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 13,
      "goalsFor": 9,
      "goalsAgainst": 5,
      "goalDifference": 4,
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
    "eloRating": 1610,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 1.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 5,
      "goalsFor": 7,
      "goalsAgainst": 7,
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
    "eloRating": 1717,
    "recentForm": {
      "goalsFor": 2.2,
      "goalsAgainst": 0.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 11,
      "goalsFor": 11,
      "goalsAgainst": 4,
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
    "eloRating": 1614,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 9,
      "goalDifference": -4,
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
    "eloRating": 1559,
    "recentForm": {
      "goalsFor": 1.2,
      "goalsAgainst": 1.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 2,
      "goalsFor": 6,
      "goalsAgainst": 9,
      "goalDifference": -3,
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
    "eloRating": 1668,
    "recentForm": {
      "goalsFor": 0.6,
      "goalsAgainst": 0.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 9,
      "goalsFor": 3,
      "goalsAgainst": 1,
      "goalDifference": 2,
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
    "eloRating": 1563,
    "recentForm": {
      "goalsFor": 0.6,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 4,
      "goalsFor": 3,
      "goalsAgainst": 10,
      "goalDifference": -7,
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
    "eloRating": 1737,
    "recentForm": {
      "goalsFor": 2.4,
      "goalsAgainst": 0.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 11,
      "goalsFor": 12,
      "goalsAgainst": 1,
      "goalDifference": 11,
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
    "eloRating": 1556,
    "recentForm": {
      "goalsFor": 0.4,
      "goalsAgainst": 1.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 5,
      "points": 3,
      "goalsFor": 2,
      "goalsAgainst": 8,
      "goalDifference": -6,
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
    "eloRating": 1494,
    "recentForm": {
      "goalsFor": 1.33,
      "goalsAgainst": 0.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1448,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 0.75
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 4,
      "points": 4,
      "goalsFor": 3,
      "goalsAgainst": 3,
      "goalDifference": 0,
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
    "eloRating": 1414,
    "recentForm": {
      "goalsFor": 0.33,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 3,
      "points": 2,
      "goalsFor": 1,
      "goalsAgainst": 3,
      "goalDifference": -2,
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
    "eloRating": 1453,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 0.67
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
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
    "eloRating": 1506,
    "recentForm": {
      "goalsFor": 0.75,
      "goalsAgainst": 0.25
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 4,
      "points": 8,
      "goalsFor": 3,
      "goalsAgainst": 1,
      "goalDifference": 2,
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
    "eloRating": 1397,
    "recentForm": {
      "goalsFor": 0,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings",
      "season": "2026-27 UEFA Nations League",
      "fetchedAt": "2026-11-14T14:05:13.964Z",
      "gamesPlayed": 3,
      "points": 1,
      "goalsFor": 0,
      "goalsAgainst": 3,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating",
      "providerTeamId": "589",
      "group": "Group D2"
    },
    "teamType": "national"
  },
  {
    "name": "Newcastle United",
    "code": "NEW",
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
    "eloRating": 1679,
    "recentForm": {
      "goalsFor": 1.3,
      "goalsAgainst": 1.6
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 10,
      "points": 12,
      "goalsFor": 13,
      "goalsAgainst": 16,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "361"
    }
  },
  {
    "name": "Schalke 04",
    "code": "S04",
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
    "eloRating": 1592,
    "recentForm": {
      "goalsFor": 0.56,
      "goalsAgainst": 1.22
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-18T19:33:35.577Z",
      "gamesPlayed": 9,
      "points": 6,
      "goalsFor": 5,
      "goalsAgainst": 11,
      "goalDifference": -6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "133"
    }
  }
];

const FIXTURES_DATA = [
  {"id":1,"providerId":"34c9b6f8-e887-4e19-522d-08def4816f89","roundId":1543,"leagueId":70,"home":"GEN","away":"GAZ","homeName":"Gençlerbirliği","awayName":"Gaziantep FK","kickoffRaw":"2026-11-21T13:30:00","kickoff":"2026-11-21T10:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888247","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T10:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":2,"providerId":"67bd90f1-2308-43d9-522c-08def4816f89","roundId":1543,"leagueId":70,"home":"AME","away":"RIZ","homeName":"Amed Sportif Faaliyetler","awayName":"Çaykur Rizespor","kickoffRaw":"2026-11-21T16:00:00","kickoff":"2026-11-21T13:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888369","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T13:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":3,"providerId":"208c7d8d-3c90-4ccc-522f-08def4816f89","roundId":1543,"leagueId":70,"home":"GAL","away":"SAM","homeName":"Galatasaray","awayName":"Samsunspor","kickoffRaw":"2026-11-21T16:00:00","kickoff":"2026-11-21T13:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888245","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T13:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":4,"providerId":"4c806e9b-83d2-438b-5230-08def4816f89","roundId":1543,"leagueId":70,"home":"KOC","away":"FEN","homeName":"Kocaelispor","awayName":"Fenerbahçe","kickoffRaw":"2026-11-21T19:00:00","kickoff":"2026-11-21T16:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888244","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T16:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":5,"providerId":"92e4a1a6-bfe4-4574-5231-08def4816f89","roundId":1543,"leagueId":70,"home":"ERZ","away":"GOZ","homeName":"Erzurumspor FK","awayName":"Göztepe","kickoffRaw":"2026-11-22T13:30:00","kickoff":"2026-11-22T10:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888243","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261122","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-22T10:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":6,"providerId":"016746cc-5b53-4b73-522a-08def4816f89","roundId":1543,"leagueId":70,"home":"KAS","away":"ALA","homeName":"Kasımpaşa","awayName":"Corendon Alanyaspor","kickoffRaw":"2026-11-22T16:00:00","kickoff":"2026-11-22T13:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888248","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261122","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-22T13:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":7,"providerId":"855273ab-28aa-4544-522e-08def4816f89","roundId":1543,"leagueId":70,"home":"KON","away":"BJK","homeName":"Tümosan Konyaspor","awayName":"Beşiktaş","kickoffRaw":"2026-11-22T16:00:00","kickoff":"2026-11-22T13:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888246","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261122","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-22T13:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":8,"providerId":"15cf8bd8-99d9-4243-5229-08def4816f89","roundId":1543,"leagueId":70,"home":"TRA","away":"EYU","homeName":"Trabzonspor","awayName":"Eyüpspor","kickoffRaw":"2026-11-22T19:00:00","kickoff":"2026-11-22T16:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888249","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261122","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-22T16:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":9,"providerId":"612667c1-ccdf-4690-522b-08def4816f89","roundId":1543,"leagueId":70,"home":"IBFK","away":"COR","homeName":"İstanbul Başakşehir","awayName":"Arca Çorum FK","kickoffRaw":"2026-11-23T20:00:00","kickoff":"2026-11-23T17:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888370","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261123","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-23T17:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":10,"providerId":"99619678-ff56-4711-45dd-08def9453ab4","roundId":1543,"leagueId":6,"home":"S04","away":"VFB","homeName":"Schalke 04","awayName":"Vfb Stuttgart","kickoffRaw":"2026-11-21T20:30:00","kickoff":"2026-11-21T17:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"ger.1","matchId":"401884729","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T17:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":11,"providerId":"444f31d2-92b2-479c-4f47-08def9453ab4","roundId":1543,"leagueId":26,"home":"LIL","away":"LYO","homeName":"Lille","awayName":"Olympique Lyon","kickoffRaw":"2026-11-21T22:45:00","kickoff":"2026-11-21T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"fra.1","matchId":"401876402","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T19:45Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":12,"providerId":"07bb9008-aab7-404b-5734-08def9453ab4","roundId":1543,"leagueId":36,"home":"NEW","away":"ARS","homeName":"Newcastle United","awayName":"Arsenal","kickoffRaw":"2026-11-21T20:30:00","kickoff":"2026-11-21T17:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"eng.1","matchId":"401879232","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T17:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":13,"providerId":"bc1e0bcb-0392-43f1-5730-08def9453ab4","roundId":1543,"leagueId":36,"home":"LIV","away":"MUN","homeName":"Liverpool","awayName":"Manchester United","kickoffRaw":"2026-11-22T19:30:00","kickoff":"2026-11-22T16:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"eng.1","matchId":"401878755","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?dates=20261122","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-22T16:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":14,"providerId":"52ca14f4-7ee7-48cc-7184-08def489a5a2","roundId":1543,"leagueId":44,"home":"SEV","away":"BET","homeName":"Sevilla","awayName":"Real Betis","kickoffRaw":"2026-11-21T20:30:00","kickoff":"2026-11-21T17:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"esp.1","matchId":"401882797","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard?dates=20261121","fetchedAt":"2026-11-18T19:33:35.925Z","rawKickoff":"2026-11-21T17:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":15,"providerId":"d5776052-325c-432a-3615-08defaa0346c","roundId":1543,"leagueId":56,"home":"ATA","away":"INT","homeName":"Atalanta","awayName":"Inter","kickoffRaw":"2026-11-22T22:45:00","kickoff":null,"timezoneStatus":"unsupported-secondary-league-or-date","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null}
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { TEAMS_DATA, FIXTURES_DATA }; }
