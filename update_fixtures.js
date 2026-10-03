const fs = require('fs');
const path = require('path');

/**
 * Weekly Sportoto Fixture Updater
 * 
 * Instructions:
 * 1. Open matches.txt
 * 2. Paste the 15 matches for the week (e.g. "Galatasaray - Fenerbahçe")
 * 3. Run: node update_fixtures.js
 */

const matchesFile = path.join(__dirname, 'matches.txt');
const dataFile = path.join(__dirname, 'data', 'sportoto_data.js');

if (!fs.existsSync(matchesFile)) {
  console.log("matches.txt not found. Please create it and paste the 15 matches.");
  process.exit(1);
}

const lines = fs.readFileSync(matchesFile, 'utf8').split('\n');
const fixtures = [];
let idCounter = 1;

// Team name normalization to match TEAMS_DATA codes
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
  return null; // For unknown European teams, etc.
}

for (const line of lines) {
  if (!line.includes('-')) continue;
  
  const [homeRaw, awayRaw] = line.split('-');
  const homeCode = getCode(homeRaw) || "UNKNOWN";
  const awayCode = getCode(awayRaw) || "UNKNOWN";
  
  fixtures.push({ id: idCounter++, home: homeCode, away: awayCode });
}

if (fixtures.length === 0) {
  console.log("Could not parse any matches. Ensure format is 'Team A - Team B'");
  process.exit(1);
}

// Read current sportoto_data.js
let dataContent = fs.readFileSync(dataFile, 'utf8');

// Replace FIXTURES_DATA array
const newFixturesStr = `const FIXTURES_DATA = [\n` + 
  fixtures.map(f => `  { id: ${f.id}, home: "${f.home}", away: "${f.away}" }`).join(',\n') +
  `\n];`;

dataContent = dataContent.replace(/const FIXTURES_DATA = \[[\s\S]*?\];/, newFixturesStr);

fs.writeFileSync(dataFile, dataContent);
console.log(`Successfully updated sportoto_data.js with ${fixtures.length} new matches!`);
