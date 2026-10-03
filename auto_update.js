const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * AUTOMATIC SPORTOTO UPDATER via CollectAPI
 * 
 * To use this script, you need a FREE API key from CollectAPI (collectapi.com)
 * 1. Go to https://collectapi.com/ and create a free account
 * 2. Subscribe to the "Sport API" (free tier)
 * 3. Paste your API key below:
 */
const API_KEY = "YOUR_COLLECT_API_KEY_HERE"; 

const dataFile = path.join(__dirname, 'data', 'sportoto_data.js');

const teamMap = {
  'galatasaray': 'GAL', 'fenerbahçe': 'FEN', 'fenerbahce': 'FEN', 'beşiktaş': 'BJK', 'besiktas': 'BJK',
  'trabzonspor': 'TRA', 'başakşehir': 'IBFK', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
  'antalyaspor': 'ANT', 'kasımpaşa': 'KAS', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
  'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON', 'ankaragücü': 'ANK', 'ankaragucu': 'ANK',
  'hatayspor': 'HAT', 'fatih karagümrük': 'FKG', 'karagümrük': 'FKG', 'gaziantep': 'GAZ',
  'samsunspor': 'SAM', 'rizespor': 'RIZ', 'pendikspor': 'PEN', 'istanbulspor': 'IST'
};

function getCode(name) {
  const clean = name.trim().toLowerCase();
  for (const [key, code] of Object.entries(teamMap)) {
    if (clean.includes(key)) return code;
  }
  return null; 
}

async function fetchFixtures() {
  if (API_KEY === "YOUR_COLLECT_API_KEY_HERE") {
    console.error("ERROR: Please insert your CollectAPI key into auto_update.js first!");
    process.exit(1);
  }

  console.log("Fetching live fixtures from CollectAPI...");

  try {
    // Note: CollectAPI has multiple endpoints. The exact endpoint depends on their current spec.
    // Usually it's something like /sport/results or /sport/league
    // For demonstration, we'll try to fetch the Super Lig fixtures.
    const response = await axios.get('https://api.collectapi.com/sport/league?data.league=super-lig', {
      headers: {
        'content-type': 'application/json',
        'authorization': `apikey ${API_KEY}`
      }
    });

    const matches = response.data.result;
    
    if (!matches || matches.length === 0) {
      console.log("No fixtures found from API.");
      return;
    }

    const fixtures = [];
    let idCounter = 1;

    for (const match of matches.slice(0, 15)) {
       const homeCode = getCode(match.home) || "UNKNOWN";
       const awayCode = getCode(match.away) || "UNKNOWN";
       fixtures.push({ id: idCounter++, home: homeCode, away: awayCode });
    }

    // Read current sportoto_data.js
    let dataContent = fs.readFileSync(dataFile, 'utf8');

    // Replace FIXTURES_DATA array
    const newFixturesStr = `const FIXTURES_DATA = [\n` + 
      fixtures.map(f => `  { id: ${f.id}, home: "${f.home}", away: "${f.away}" }`).join(',\n') +
      `\n];`;

    dataContent = dataContent.replace(/const FIXTURES_DATA = \[[\s\S]*?\];/, newFixturesStr);

    fs.writeFileSync(dataFile, dataContent);
    console.log(`Successfully updated sportoto_data.js automatically with ${fixtures.length} matches!`);

  } catch (err) {
    console.error("Failed to fetch data. Ensure your API key is correct and active.");
    console.error(err.message);
  }
}

fetchFixtures();
