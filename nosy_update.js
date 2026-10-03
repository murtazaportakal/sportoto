const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * AUTOMATIC SPORTOTO UPDATER via NosyAPI
 * 
 * To use this script, you need a FREE API key from NosyAPI (nosyapi.com)
 * 1. Go to https://www.nosyapi.com/ and create an account
 * 2. Get your API key
 * 3. Paste your API key below:
 */
const API_KEY = "YOUR_NOSY_API_KEY_HERE"; 

const dataFile = path.join(__dirname, 'data', 'sportoto_data.js');

// Extended map to support European teams commonly found in Sportoto
const teamMap = {
  // Turkish
  'galatasaray': 'GAL', 'fenerbahçe': 'FEN', 'fenerbahce': 'FEN', 'beşiktaş': 'BJK', 'besiktas': 'BJK',
  'trabzonspor': 'TRA', 'başakşehir': 'IBFK', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
  'antalyaspor': 'ANT', 'kasımpaşa': 'KAS', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
  'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON', 'ankaragücü': 'ANK', 'ankaragucu': 'ANK',
  'hatayspor': 'HAT', 'fatih karagümrük': 'FKG', 'karagümrük': 'FKG', 'gaziantep': 'GAZ',
  'samsunspor': 'SAM', 'rizespor': 'RIZ', 'pendikspor': 'PEN', 'istanbulspor': 'IST', 'göztepe': 'GOZ',
  
  // European
  'real madrid': 'RMA', 'barcelona': 'BAR', 'manchester city': 'MCI', 'man city': 'MCI', 
  'arsenal': 'ARS', 'liverpool': 'LIV', 'bayern münih': 'BAY', 'bayern': 'BAY', 
  'inter': 'INT', 'milan': 'MIL', 'ac milan': 'MIL', 'juventus': 'JUV'
};

function getCode(name) {
  const clean = name.trim().toLowerCase();
  for (const [key, code] of Object.entries(teamMap)) {
    if (clean.includes(key)) return code;
  }
  return null; 
}

async function fetchFixtures() {
  if (API_KEY === "YOUR_NOSY_API_KEY_HERE") {
    console.error("ERROR: Please insert your NosyAPI key into nosy_update.js first!");
    process.exit(1);
  }

  console.log("Fetching live exact Sportoto 15-match list from NosyAPI...");

  try {
    const response = await axios.get(`https://www.nosyapi.com/apiv2/service/bettable-matches/sporToto?apiKey=${API_KEY}`);
    
    // The exact response structure depends on NosyAPI, assuming they return an array in data
    const matches = response.data.data || response.data;
    
    if (!matches || matches.length === 0) {
      console.log("No fixtures found from API.");
      return;
    }

    const fixtures = [];
    let idCounter = 1;

    for (const match of matches) {
       // Assumes the API returns home and away team names in these fields
       const homeRaw = match.homeTeam || match.home || match.Team1 || "";
       const awayRaw = match.awayTeam || match.away || match.Team2 || "";
       
       if (!homeRaw || !awayRaw) continue;
       
       const homeCode = getCode(homeRaw) || "UNKNOWN";
       const awayCode = getCode(awayRaw) || "UNKNOWN";
       
       fixtures.push({ id: idCounter++, home: homeCode, away: awayCode });
    }

    // Ensure we cap at 15 if the API returns more for some reason
    const finalFixtures = fixtures.slice(0, 15);

    if (finalFixtures.length === 0) {
       console.log("Could not parse teams from the API response.");
       return;
    }

    // Read current sportoto_data.js
    let dataContent = fs.readFileSync(dataFile, 'utf8');

    // Replace FIXTURES_DATA array
    const newFixturesStr = `const FIXTURES_DATA = [\n` + 
      finalFixtures.map(f => `  { id: ${f.id}, home: "${f.home}", away: "${f.away}" }`).join(',\n') +
      `\n];`;

    dataContent = dataContent.replace(/const FIXTURES_DATA = \[[\s\S]*?\];/, newFixturesStr);

    fs.writeFileSync(dataFile, dataContent);
    console.log(`Successfully updated sportoto_data.js automatically with exactly ${finalFixtures.length} Sportoto matches!`);

  } catch (err) {
    console.error("Failed to fetch data. Ensure your API key is correct and active.");
    console.error(err.message);
  }
}

fetchFixtures();
