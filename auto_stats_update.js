const axios = require('axios');
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data', 'sportoto_data.js');

// Map ESPN team names to our internal codes
const teamMap = {
  // Turkish
  'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
  'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
  'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
  'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON', 
  'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'fatih karagumruk': 'FKG', 
  'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ', 
  'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
  'amed sfk': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ',
  'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum fk': 'COR',
  
  // European
  'real madrid': 'RMA', 'barcelona': 'BAR', 'villarreal': 'VIL',
  'manchester city': 'MCI', 'arsenal': 'ARS', 'liverpool': 'LIV', 'manchester united': 'MUN', 'tottenham': 'TOT',
  'bayern munich': 'BAY', 'rb leipzig': 'RBL', 'eintracht frankfurt': 'EIN', 'augsburg': 'AUG',
  'inter milan': 'INT', 'ac milan': 'MIL', 'juventus': 'JUV', 'roma': 'ROM', 'como': 'COM'
};

function getCode(name) {
  const clean = name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const [key, code] of Object.entries(teamMap)) {
    if (clean.includes(key)) return code;
  }
  return null; 
}

async function updateStats() {
  console.log("Fetching live team stats from ESPN API for multiple leagues...");

  const leagues = ['tur.1', 'eng.1', 'esp.1', 'ger.1', 'ita.1'];
  
  try {
    let dataContent = fs.readFileSync(dataFile, 'utf8');

    for (const league of leagues) {
      const { data } = await axios.get(`https://site.web.api.espn.com/apis/v2/sports/soccer/${league}/standings`);
      const standings = data.children[0].standings.entries;
      
      for (const s of standings) {
        const teamName = s.team.displayName;
        const code = getCode(teamName);
        
        if (!code) continue; // Skip teams not mapped or not needed for Sportoto

        const stats = s.stats;
        const getStat = (name) => stats.find(st => st.name === name)?.value || 0;
        
        const points = getStat('points');
        const gamesPlayed = getStat('gamesPlayed') || 1;
        const goalsFor = getStat('pointsFor');
        const goalsAgainst = getStat('pointsAgainst');
        const gd = getStat('pointDifferential');
        
        // Calculate dynamic ratings based on live data
        // We add a slight boost for Top 5 European leagues to represent their higher difficulty coefficient
        const leagueBoost = league === 'tur.1' ? 0 : 200; 
        const newElo = 1350 + (points * 12) + (gd * 5) + leagueBoost; 
        const gfPerGame = (goalsFor / gamesPlayed).toFixed(2);
        const gaPerGame = (goalsAgainst / gamesPlayed).toFixed(2);

        const teamRegex = new RegExp(`(code:\\s*"${code}"[\\s\\S]*?eloRating:\\s*)\\d+(,[\\s\\S]*?recentForm:\\s*\\{)[^}]+(\\})`, "g");
        
        dataContent = dataContent.replace(teamRegex, (match, p1, p2, p3) => {
          return `${p1}${newElo}${p2} goalsFor: ${gfPerGame}, goalsAgainst: ${gaPerGame} ${p3}`;
        });

        console.log(`Updated ${teamName} (${code}) -> Elo: ${newElo}, GF/G: ${gfPerGame}, GA/G: ${gaPerGame}`);
      }
    }

    fs.writeFileSync(dataFile, dataContent);
    console.log("Successfully updated TEAMS_DATA in sportoto_data.js with live stats for all leagues!");

  } catch (err) {
    console.error("Failed to fetch or update stats:", err.message);
  }
}

updateStats();
