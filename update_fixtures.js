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

// Comprehensive team name normalization to match TEAMS_DATA codes
const teamMap = {
  // Turkish Super Lig & 1. Lig
  'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
  'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
  'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
  'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON',
  'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'karagumruk': 'FKG',
  'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ',
  'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
  'amed': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ',
  'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum': 'COR',

  // European Teams
  'everton': 'EVE', 'chelsea': 'CHE', 'brentford': 'BRE',
  'liverpool': 'LIV', 'manchester city': 'MCI', 'man city': 'MCI',
  'arsenal': 'ARS', 'manchester united': 'MUN', 'tottenham': 'TOT',
  'real betis': 'BET', 'betis': 'BET', 'barcelona': 'BAR',
  'real madrid': 'RMA', 'sevilla': 'SEV', 'villarreal': 'VIL',
  'milan': 'MIL', 'atalanta': 'ATA', 'juventus': 'JUV',
  'lazio': 'LAZ', 'inter': 'INT', 'roma': 'ROM', 'como': 'COM',
  'bayern': 'BAY', 'leipzig': 'RBL', 'frankfurt': 'EIN', 'augsburg': 'AUG',
  'dortmund': 'BVB', 'borussia dortmund': 'BVB',
  'monaco': 'ASM', 'as monaco': 'ASM',
  'lille': 'LIL',
  'paris': 'PSG', 'psg': 'PSG',
  'lyon': 'LYO',
  'napoli': 'NAP'
};

function normalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCode(name) {
  const clean = normalizeName(name);
  for (const [key, code] of Object.entries(teamMap)) {
    if (clean.includes(key)) return code;
  }
  return null;
}

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  
  const parts = trimmed.split(/\s+[-–—]\s+/);
  if (parts.length < 2) continue;
  
  const homeRaw = parts[0];
  const awayRaw = parts[1];
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
