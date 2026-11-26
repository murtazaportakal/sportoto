const TEAMS_DATA = [
  {
    "name": "Galatasaray",
    "code": "GAL",
    "eloRating": 1787,
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
      "goalsFor": 2.42,
      "goalsAgainst": 1.33
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.9,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 31,
      "goalsFor": 29,
      "goalsAgainst": 16,
      "goalDifference": 13,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "432"
    }
  },
  {
    "name": "Fenerbahçe",
    "code": "FEN",
    "eloRating": 1685,
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
      "goalsFor": 2.58,
      "goalsAgainst": 1
    },
    "starDependency": 0.35,
    "homeAdvantage": 0.9,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 20,
      "goalsFor": 31,
      "goalsAgainst": 12,
      "goalDifference": 19,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "436"
    }
  },
  {
    "name": "Beşiktaş",
    "code": "BJK",
    "eloRating": 1715,
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
      "goalsFor": 2.25,
      "goalsAgainst": 1.17
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 25,
      "goalsFor": 27,
      "goalsAgainst": 14,
      "goalDifference": 13,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "1895"
    }
  },
  {
    "name": "Trabzonspor",
    "code": "TRA",
    "eloRating": 1781,
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
      "goalsFor": 2.25,
      "goalsAgainst": 0.67
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 28,
      "goalsFor": 27,
      "goalsAgainst": 8,
      "goalDifference": 19,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "997"
    }
  },
  {
    "name": "Başakşehir",
    "code": "IBFK",
    "eloRating": 1610,
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
      "goalsFor": 1.92,
      "goalsAgainst": 1.58
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 20,
      "goalsFor": 23,
      "goalsAgainst": 19,
      "goalDifference": 4,
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
    "eloRating": 1661,
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
      "goalsFor": 1.58,
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
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 23,
      "goalsFor": 19,
      "goalsAgainst": 12,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "6870"
    }
  },
  {
    "name": "Alanyaspor",
    "code": "ALA",
    "eloRating": 1444,
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
      "goalsFor": 0.83,
      "goalsAgainst": 1.67
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 12,
      "goalsFor": 10,
      "goalsAgainst": 20,
      "goalDifference": -10,
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
    "eloRating": 1396,
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
      "goalsFor": 0.67,
      "goalsAgainst": 1.5
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 8,
      "goalsFor": 8,
      "goalsAgainst": 18,
      "goalDifference": -10,
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
    "eloRating": 1391,
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
      "goalsFor": 0.75,
      "goalsAgainst": 1.67
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 8,
      "goalsFor": 9,
      "goalsAgainst": 20,
      "goalDifference": -11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "20070"
    }
  },
  {
    "name": "Samsunspor",
    "code": "SAM",
    "eloRating": 1354,
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
      "goalsAgainst": 2.33
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 7,
      "goalsFor": 12,
      "goalsAgainst": 28,
      "goalDifference": -16,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "11429"
    }
  },
  {
    "name": "Rizespor",
    "code": "RIZ",
    "eloRating": 1549,
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
      "goalsFor": 1.25,
      "goalsAgainst": 1.33
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 17,
      "goalsFor": 15,
      "goalsAgainst": 16,
      "goalDifference": -1,
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
    "eloRating": 1586,
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
      "goalsFor": 1.92,
      "goalsAgainst": 1.58
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 18,
      "goalsFor": 23,
      "goalsAgainst": 19,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "789"
    }
  },
  {
    "name": "Real Madrid",
    "code": "RMA",
    "eloRating": 2056,
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
      "goalsFor": 2.54,
      "goalsAgainst": 0.85
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 33,
      "goalsFor": 33,
      "goalsAgainst": 11,
      "goalDifference": 22,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "86"
    }
  },
  {
    "name": "Barcelona",
    "code": "BAR",
    "eloRating": 2162,
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
      "goalsFor": 3.92,
      "goalsAgainst": 1.15
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 36,
      "goalsFor": 51,
      "goalsAgainst": 15,
      "goalDifference": 36,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "83"
    }
  },
  {
    "name": "Manchester City",
    "code": "MCI",
    "eloRating": 1854,
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
      "goalsFor": 2,
      "goalsAgainst": 1.27
    },
    "starDependency": 0.15,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 22,
      "goalsFor": 22,
      "goalsAgainst": 14,
      "goalDifference": 8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "382"
    }
  },
  {
    "name": "Arsenal",
    "code": "ARS",
    "eloRating": 1936,
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
      "goalsFor": 1.55,
      "goalsAgainst": 0.64
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 28,
      "goalsFor": 17,
      "goalsAgainst": 7,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "359"
    }
  },
  {
    "name": "Liverpool",
    "code": "LIV",
    "eloRating": 1842,
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
      "goalsFor": 1.64,
      "goalsAgainst": 0.91
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 21,
      "goalsFor": 18,
      "goalsAgainst": 10,
      "goalDifference": 8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "364"
    }
  },
  {
    "name": "Bayern Munich",
    "code": "BAY",
    "eloRating": 1914,
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
      "goalsFor": 3,
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
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 22,
      "goalsFor": 30,
      "goalsAgainst": 10,
      "goalDifference": 20,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "132"
    }
  },
  {
    "name": "Inter",
    "code": "INT",
    "eloRating": 1973,
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
      "goalsFor": 2.67,
      "goalsAgainst": 1.42
    },
    "starDependency": 0.2,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 29,
      "goalsFor": 32,
      "goalsAgainst": 17,
      "goalDifference": 15,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "110"
    }
  },
  {
    "name": "AC Milan",
    "code": "MIL",
    "eloRating": 1944,
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
      "goalsFor": 2.33,
      "goalsAgainst": 1.17
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 27,
      "goalsFor": 28,
      "goalsAgainst": 14,
      "goalDifference": 14,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "103"
    }
  },
  {
    "name": "Juventus",
    "code": "JUV",
    "eloRating": 1837,
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
      "goalsFor": 1.58,
      "goalsAgainst": 1
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 21,
      "goalsFor": 19,
      "goalsAgainst": 12,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "111"
    }
  },
  {
    "name": "Gençlerbirliği",
    "code": "GEN",
    "eloRating": 1478,
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
      "goalsFor": 1.08,
      "goalsAgainst": 1.75
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 14,
      "goalsFor": 13,
      "goalsAgainst": 21,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "996"
    }
  },
  {
    "name": "Amed SK",
    "code": "AME",
    "eloRating": 1681,
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
      "goalsFor": 2.33,
      "goalsAgainst": 1.42
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 23,
      "goalsFor": 28,
      "goalsAgainst": 17,
      "goalDifference": 11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "132335"
    }
  },
  {
    "name": "Erzurumspor FK",
    "code": "ERZ",
    "eloRating": 1478,
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
      "goalsFor": 0.83,
      "goalsAgainst": 1.5
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.2,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 14,
      "goalsFor": 10,
      "goalsAgainst": 18,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "19267"
    }
  },
  {
    "name": "Kocaelispor",
    "code": "KOC",
    "eloRating": 1610,
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
      "goalsFor": 1.25,
      "goalsAgainst": 0.92
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 20,
      "goalsFor": 15,
      "goalsAgainst": 11,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "995"
    }
  },
  {
    "name": "Eyüpspor",
    "code": "EYU",
    "eloRating": 1246,
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
      "goalsFor": 0.25,
      "goalsAgainst": 2.58
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 3,
      "goalsFor": 3,
      "goalsAgainst": 31,
      "goalDifference": -28,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "20729"
    }
  },
  {
    "name": "Çorum FK",
    "code": "COR",
    "eloRating": 1532,
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
      "goalsFor": 1.92,
      "goalsAgainst": 2.08
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings",
      "season": "2026-27 Turkish Super Lig",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 16,
      "goalsFor": 23,
      "goalsAgainst": 25,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "132334"
    }
  },
  {
    "name": "Augsburg",
    "code": "AUG",
    "eloRating": 1704,
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
      "goalsFor": 2.3,
      "goalsAgainst": 2.1
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 12,
      "goalsFor": 23,
      "goalsAgainst": 21,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "3841"
    }
  },
  {
    "name": "RB Leipzig",
    "code": "RBL",
    "eloRating": 1892,
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
      "goalsFor": 3.2,
      "goalsAgainst": 1.4
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 21,
      "goalsFor": 32,
      "goalsAgainst": 14,
      "goalDifference": 18,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "11420"
    }
  },
  {
    "name": "Eintracht Frankfurt",
    "code": "EIN",
    "eloRating": 1710,
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
      "goalsFor": 1.6,
      "goalsAgainst": 2
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 15,
      "goalsFor": 16,
      "goalsAgainst": 20,
      "goalDifference": -4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "125"
    }
  },
  {
    "name": "Manchester United",
    "code": "MUN",
    "eloRating": 1601,
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
      "goalsFor": 1.27,
      "goalsAgainst": 2.09
    },
    "starDependency": 0.4,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 3,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 8,
      "goalsFor": 14,
      "goalsAgainst": 23,
      "goalDifference": -9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "360"
    }
  },
  {
    "name": "Tottenham Hotspur",
    "code": "TOT",
    "eloRating": 1735,
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
      "goalsFor": 1.09,
      "goalsAgainst": 1
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 15,
      "goalsFor": 12,
      "goalsAgainst": 11,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "367"
    }
  },
  {
    "name": "Villarreal",
    "code": "VIL",
    "eloRating": 1735,
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
      "goalsFor": 1.46,
      "goalsAgainst": 1.38
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 15,
      "goalsFor": 19,
      "goalsAgainst": 18,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "102"
    }
  },
  {
    "name": "Como",
    "code": "COM",
    "eloRating": 1912,
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
      "goalsFor": 1.67,
      "goalsAgainst": 0.83
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.6,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 26,
      "goalsFor": 20,
      "goalsAgainst": 10,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "2572"
    }
  },
  {
    "name": "Roma",
    "code": "ROM",
    "eloRating": 2035,
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
      "goalsFor": 3,
      "goalsAgainst": 0.92
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 30,
      "goalsFor": 36,
      "goalsAgainst": 11,
      "goalDifference": 25,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "104"
    }
  },
  {
    "name": "Everton",
    "code": "EVE",
    "eloRating": 1732,
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
      "goalsFor": 1.09,
      "goalsAgainst": 1.27
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 16,
      "goalsFor": 12,
      "goalsAgainst": 14,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "368"
    }
  },
  {
    "name": "Chelsea",
    "code": "CHE",
    "eloRating": 1742,
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
      "goalsFor": 1.82,
      "goalsAgainst": 1.82
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 16,
      "goalsFor": 20,
      "goalsAgainst": 20,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "363"
    }
  },
  {
    "name": "Brentford",
    "code": "BRE",
    "eloRating": 1799,
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
      "goalsFor": 1.82,
      "goalsAgainst": 1
    },
    "starDependency": 0.35,
    "homeAdvantage": 0.7,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 17,
      "goalsFor": 20,
      "goalsAgainst": 11,
      "goalDifference": 9,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "337"
    }
  },
  {
    "name": "Real Betis",
    "code": "BET",
    "eloRating": 1899,
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
      "goalsFor": 1.62,
      "goalsAgainst": 1.23
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 27,
      "goalsFor": 21,
      "goalsAgainst": 16,
      "goalDifference": 5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "244"
    }
  },
  {
    "name": "Sevilla",
    "code": "SEV",
    "eloRating": 1768,
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
      "goalsFor": 1.38,
      "goalsAgainst": 1.54
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 19,
      "goalsFor": 18,
      "goalsAgainst": 20,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "243"
    }
  },
  {
    "name": "Atalanta",
    "code": "ATA",
    "eloRating": 1715,
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
      "goalsFor": 1.75,
      "goalsAgainst": 2
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 15,
      "goalsFor": 21,
      "goalsAgainst": 24,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "105"
    }
  },
  {
    "name": "Lazio",
    "code": "LAZ",
    "eloRating": 2029,
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
      "goalsFor": 2.33,
      "goalsAgainst": 0.75
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 32,
      "goalsFor": 28,
      "goalsAgainst": 9,
      "goalDifference": 19,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "112"
    }
  },
  {
    "name": "Borussia Dortmund",
    "code": "BVB",
    "eloRating": 1888,
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
      "goalsFor": 1.7,
      "goalsAgainst": 0.7
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 24,
      "goalsFor": 17,
      "goalsAgainst": 7,
      "goalDifference": 10,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "124"
    }
  },
  {
    "name": "Monaco",
    "code": "ASM",
    "eloRating": 1764,
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
      "goalsFor": 1.27,
      "goalsAgainst": 1.09
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 17,
      "goalsFor": 14,
      "goalsAgainst": 12,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "174"
    }
  },
  {
    "name": "Lille",
    "code": "LIL",
    "eloRating": 1832,
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
      "goalsFor": 1.27,
      "goalsAgainst": 0.73
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.75,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 21,
      "goalsFor": 14,
      "goalsAgainst": 8,
      "goalDifference": 6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "166"
    }
  },
  {
    "name": "Paris Saint-Germain",
    "code": "PSG",
    "eloRating": 1881,
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
      "goalsFor": 1.91,
      "goalsAgainst": 0.91
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 23,
      "goalsFor": 21,
      "goalsAgainst": 10,
      "goalDifference": 11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "6851"
    }
  },
  {
    "name": "Olympique Lyon",
    "code": "LYO",
    "eloRating": 1825,
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
      "goalsFor": 1.45,
      "goalsAgainst": 0.82
    },
    "starDependency": 0.3,
    "homeAdvantage": 0.8,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 2,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 20,
      "goalsFor": 16,
      "goalsAgainst": 9,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "167"
    }
  },
  {
    "name": "Napoli",
    "code": "NAP",
    "eloRating": 1791,
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
      "goalsFor": 1.58,
      "goalsAgainst": 1.17
    },
    "starDependency": 0.25,
    "homeAdvantage": 0.85,
    "altitudeAdaptation": 0.1,
    "groupDifficulty": 5,
    "injurySeverity": 1,
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ita.1/standings",
      "season": "2026-27 Italian Serie A",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 12,
      "points": 18,
      "goalsFor": 19,
      "goalsAgainst": 14,
      "goalDifference": 5,
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
    "eloRating": 1703,
    "recentForm": {
      "goalsFor": 1.27,
      "goalsAgainst": 1.55
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 14,
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
    "eloRating": 2002,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 0.77
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 31,
      "goalsFor": 26,
      "goalsAgainst": 10,
      "goalDifference": 16,
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
    "eloRating": 1639,
    "recentForm": {
      "goalsFor": 0.69,
      "goalsAgainst": 1.54
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 12,
      "goalsFor": 9,
      "goalsAgainst": 20,
      "goalDifference": -11,
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
    "eloRating": 1796,
    "recentForm": {
      "goalsFor": 2.1,
      "goalsAgainst": 1.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 18,
      "goalsFor": 21,
      "goalsAgainst": 15,
      "goalDifference": 6,
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
    "eloRating": 1706,
    "recentForm": {
      "goalsFor": 1.5,
      "goalsAgainst": 1.5
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 13,
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
    "eloRating": 1691,
    "recentForm": {
      "goalsFor": 1.36,
      "goalsAgainst": 1.64
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings",
      "season": "2026-27 English Premier League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 13,
      "goalsFor": 15,
      "goalsAgainst": 18,
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
    "eloRating": 1604,
    "recentForm": {
      "goalsFor": 0.5,
      "goalsAgainst": 1.1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 11,
      "goalDifference": -6,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "133"
    }
  },
  {
    "name": "Lens",
    "code": "RCL",
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
    "eloRating": 1728,
    "recentForm": {
      "goalsFor": 1.64,
      "goalsAgainst": 1.45
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/fra.1/standings",
      "season": "2026-27 French Ligue 1",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 11,
      "points": 14,
      "goalsFor": 18,
      "goalsAgainst": 16,
      "goalDifference": 2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "175"
    }
  },
  {
    "name": "Club Brugge",
    "code": "BRU",
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
    "eloRating": 1663,
    "recentForm": {
      "goalsFor": 2.2,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 9,
      "goalsFor": 11,
      "goalsAgainst": 10,
      "goalDifference": 1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "570"
    }
  },
  {
    "name": "Sporting CP",
    "code": "SCP",
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
    "eloRating": 1690,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 1.2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 10,
      "goalsFor": 10,
      "goalsAgainst": 6,
      "goalDifference": 4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "2250"
    }
  },
  {
    "name": "LASK Linz",
    "code": "LASK",
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
    "eloRating": 1622,
    "recentForm": {
      "goalsFor": 2,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 6,
      "goalsFor": 10,
      "goalsAgainst": 10,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "4411"
    }
  },
  {
    "name": "Shakhtar Donetsk",
    "code": "SHK",
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
    "eloRating": 1593,
    "recentForm": {
      "goalsFor": 0.8,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 4,
      "goalsFor": 4,
      "goalsAgainst": 5,
      "goalDifference": -1,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "493"
    }
  },
  {
    "name": "Viking FK",
    "code": "VIK",
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
    "eloRating": 1583,
    "recentForm": {
      "goalsFor": 1.8,
      "goalsAgainst": 2.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 4,
      "goalsFor": 9,
      "goalsAgainst": 12,
      "goalDifference": -3,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "510"
    }
  },
  {
    "name": "PSV Eindhoven",
    "code": "PSV",
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
    "eloRating": 1573,
    "recentForm": {
      "goalsFor": 0.8,
      "goalsAgainst": 1.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 4,
      "goalsFor": 4,
      "goalsAgainst": 9,
      "goalDifference": -5,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "148"
    }
  },
  {
    "name": "Bodo/Glimt",
    "code": "GLI",
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
    "eloRating": 1614,
    "recentForm": {
      "goalsFor": 1,
      "goalsAgainst": 1.8
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 7,
      "goalsFor": 5,
      "goalsAgainst": 9,
      "goalDifference": -4,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "2980"
    }
  },
  {
    "name": "FC Porto",
    "code": "FCP",
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
    "eloRating": 1622,
    "recentForm": {
      "goalsFor": 1.4,
      "goalsAgainst": 1.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 6,
      "goalsFor": 7,
      "goalsAgainst": 7,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "437"
    }
  },
  {
    "name": "Feyenoord Rotterdam",
    "code": "FEY",
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
    "eloRating": 1546,
    "recentForm": {
      "goalsFor": 0.8,
      "goalsAgainst": 2.4
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings",
      "season": "2026-27 UEFA Champions League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 3,
      "goalsFor": 4,
      "goalsAgainst": 12,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "142"
    }
  },
  {
    "name": "Hapoel Be'er",
    "code": "HBS",
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
    "eloRating": 1522,
    "recentForm": {
      "goalsFor": 0.4,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.europa/standings",
      "season": "2026-27 UEFA Europa League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 5,
      "points": 1,
      "goalsFor": 2,
      "goalsAgainst": 10,
      "goalDifference": -8,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "13083"
    }
  },
  {
    "name": "CSKA Sofia",
    "code": "CSK",
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
    "eloRating": 1552,
    "recentForm": {
      "goalsFor": 1.33,
      "goalsAgainst": 2
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/uefa.europa.conf/standings",
      "season": "2026-27 UEFA Conference League",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 3,
      "points": 1,
      "goalsFor": 4,
      "goalsAgainst": 6,
      "goalDifference": -2,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "10834"
    }
  },
  {
    "name": "Real Sociedad",
    "code": "RSO",
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
    "eloRating": 1814,
    "recentForm": {
      "goalsFor": 1.77,
      "goalsAgainst": 1.77
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/esp.1/standings",
      "season": "2026-27 Spanish LALIGA",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 13,
      "points": 22,
      "goalsFor": 23,
      "goalsAgainst": 23,
      "goalDifference": 0,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "89"
    }
  },
  {
    "name": "SC Freiburg",
    "code": "SCF",
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
    "eloRating": 1869,
    "recentForm": {
      "goalsFor": 2.1,
      "goalsAgainst": 1
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 22,
      "goalsFor": 21,
      "goalsAgainst": 10,
      "goalDifference": 11,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "126"
    }
  },
  {
    "name": "Bayer Leverkusen",
    "code": "B04",
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
    "eloRating": 1813,
    "recentForm": {
      "goalsFor": 2.4,
      "goalsAgainst": 1.7
    },
    "statsSource": {
      "url": "https://site.web.api.espn.com/apis/v2/sports/soccer/ger.1/standings",
      "season": "2026-27 German Bundesliga",
      "fetchedAt": "2026-11-26T20:24:53.856Z",
      "gamesPlayed": 10,
      "points": 19,
      "goalsFor": 24,
      "goalsAgainst": 17,
      "goalDifference": 7,
      "ratingMethod": "1350 + points * 12 + goalDifference * 5 + league/tier adjustment; not an official Elo rating",
      "providerTeamId": "131"
    }
  }
];

const FIXTURES_DATA = [
  {"id":1,"providerId":"0b12e488-ede8-4552-5234-08def4816f89","roundId":1545,"leagueId":70,"home":"ALA","away":"KON","homeName":"Corendon Alanyaspor","awayName":"Tümosan Konyaspor","kickoffRaw":"2026-11-27T20:00:00","kickoff":"2026-11-27T17:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888241","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261127","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-27T17:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":2,"providerId":"5dbd054c-b502-47b2-5235-08def4816f89","roundId":1545,"leagueId":70,"home":"RIZ","away":"KAS","homeName":"Çaykur Rizespor","awayName":"Kasımpaşa","kickoffRaw":"2026-11-27T20:00:00","kickoff":"2026-11-27T17:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888240","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261127","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-27T17:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":3,"providerId":"581248d1-8d23-4e74-523a-08def4816f89","roundId":1545,"leagueId":70,"home":"SAM","away":"GEN","homeName":"Samsunspor","awayName":"Gençlerbirliği","kickoffRaw":"2026-11-28T16:00:00","kickoff":"2026-11-28T13:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888236","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261128","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-28T13:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":4,"providerId":"fa0c431d-b8e5-4d2f-5232-08def4816f89","roundId":1545,"leagueId":70,"home":"GAZ","away":"AME","homeName":"Gaziantep FK","awayName":"Amed Sportif Faaliyetler","kickoffRaw":"2026-11-28T19:00:00","kickoff":"2026-11-28T16:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888368","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261128","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-28T16:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":5,"providerId":"dceb9fc5-59e2-4031-5237-08def4816f89","roundId":1545,"leagueId":70,"home":"COR","away":"KOC","homeName":"Arca Çorum FK","awayName":"Kocaelispor","kickoffRaw":"2026-11-29T13:30:00","kickoff":"2026-11-29T10:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888367","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T10:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":6,"providerId":"700933ac-7b16-40d5-5233-08def4816f89","roundId":1545,"leagueId":70,"home":"EYU","away":"IBFK","homeName":"Eyüpspor","awayName":"İstanbul Başakşehir","kickoffRaw":"2026-11-29T16:00:00","kickoff":"2026-11-29T13:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888242","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T13:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":7,"providerId":"454b2402-d319-4523-5238-08def4816f89","roundId":1545,"leagueId":70,"home":"FEN","away":"ERZ","homeName":"Fenerbahçe","awayName":"Erzurumspor FK","kickoffRaw":"2026-11-29T19:00:00","kickoff":"2026-11-29T16:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888238","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T16:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":8,"providerId":"b89416f3-06d1-42a6-5236-08def4816f89","roundId":1545,"leagueId":70,"home":"GOZ","away":"TRA","homeName":"Göztepe","awayName":"Trabzonspor","kickoffRaw":"2026-11-30T19:00:00","kickoff":"2026-11-30T16:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888239","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261130","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-30T16:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":9,"providerId":"de32b8f4-d140-41cc-5239-08def4816f89","roundId":1545,"leagueId":70,"home":"BJK","away":"GAL","homeName":"Beşiktaş","awayName":"Galatasaray","kickoffRaw":"2026-11-30T21:00:00","kickoff":"2026-11-30T18:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"tur.1","matchId":"401888237","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/tur.1/scoreboard?dates=20261130","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-30T18:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":10,"providerId":"6ebb4c21-0c3a-482f-45e9-08def9453ab4","roundId":1545,"leagueId":6,"home":"SCF","away":"RBL","homeName":"Freiburg","awayName":"RB Leipzig","kickoffRaw":"2026-11-29T17:30:00","kickoff":"2026-11-29T14:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"ger.1","matchId":"401884724","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T14:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":11,"providerId":"f776611c-795c-4bd3-45e5-08def9453ab4","roundId":1545,"leagueId":6,"home":"BVB","away":"B04","homeName":"Borussia Dortmund","awayName":"Bayer Leverkusen","kickoffRaw":"2026-11-29T21:30:00","kickoff":"2026-11-29T18:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"ger.1","matchId":"401884727","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T18:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":12,"providerId":"714f230e-b4a6-4f3c-4f4c-08def9453ab4","roundId":1545,"leagueId":26,"home":"LYO","away":"ASM","homeName":"Olympique Lyon","awayName":"Monaco","kickoffRaw":"2026-11-29T22:45:00","kickoff":"2026-11-29T19:45:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"fra.1","matchId":"401876389","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T19:45Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":13,"providerId":"9a35098a-0008-40fe-573f-08def9453ab4","roundId":1545,"leagueId":36,"home":"EVE","away":"LIV","homeName":"Everton","awayName":"Liverpool","kickoffRaw":"2026-11-29T15:00:00","kickoff":"2026-11-29T12:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"eng.1","matchId":"401879229","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T12:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":14,"providerId":"475f09df-cd76-471b-5742-08def9453ab4","roundId":1545,"leagueId":36,"home":"ARS","away":"MCI","homeName":"Arsenal","awayName":"Manchester City","kickoffRaw":"2026-11-29T19:30:00","kickoff":"2026-11-29T16:30:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"eng.1","matchId":"401878753","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T16:30Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}},
  {"id":15,"providerId":"39118b9d-4998-48bc-718d-08def489a5a2","roundId":1545,"leagueId":44,"home":"RSO","away":"SEV","homeName":"Real Sociedad","awayName":"Sevilla","kickoffRaw":"2026-11-29T23:00:00","kickoff":"2026-11-29T20:00:00.000Z","timezoneStatus":"independently-matched-utc","providerStatusRaw":null,"providerUpdatedAtRaw":null,"status":"unconfirmed","result":null,"kickoffSource":{"provider":"espn","league":"esp.1","matchId":"401882788","url":"https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard?dates=20261129","fetchedAt":"2026-11-26T20:24:54.000Z","rawKickoff":"2026-11-29T20:00Z","status":"STATUS_SCHEDULED","matchingPolicy":"unique club identities and available provider IDs, home/away, league and same calendar date"}}
];

if (typeof module !== 'undefined' && module.exports) { module.exports = { TEAMS_DATA, FIXTURES_DATA }; }
