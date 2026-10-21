const axios = require('axios');
const fs = require('fs');
const path = require('path');

const teamMap = {
  'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
  'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
  'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
  'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON',
  'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'fatih karagumruk': 'FKG',
  'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ',
  'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
  'amed': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ',
  'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum': 'COR', 'bodrum': 'BOD'
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

async function fetchHistoricalData() {
  console.log("Fetching historical Turkish Super Lig matches from openfootball...");
  
  const urls = [
    'https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/tr.1.json',
    'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/tr.1.json'
  ];

  const allMatches = [];

  for (const url of urls) {
    try {
      const res = await axios.get(url, { timeout: 10000 });
      const matches = res.data.matches || [];
      console.log(`Fetched ${matches.length} matches from ${res.data.name}`);

      for (const m of matches) {
        if (!m.score || !m.score.ft) continue;
        
        const homeCode = getCode(m.team1);
        const awayCode = getCode(m.team2);
        
        if (!homeCode || !awayCode) continue;

        const [homeGoals, awayGoals] = m.score.ft;
        let actualOutcome = 'X';
        if (homeGoals > awayGoals) actualOutcome = '1';
        else if (awayGoals > homeGoals) actualOutcome = '2';

        allMatches.push({
          date: m.date,
          round: m.round,
          homeTeam: m.team1,
          awayTeam: m.team2,
          homeCode,
          awayCode,
          homeGoals,
          awayGoals,
          actualOutcome
        });
      }
    } catch (e) {
      console.warn("Could not fetch url:", url, e.message);
    }
  }

  console.log(`Processed ${allMatches.length} valid historical matches with full-time scores.`);

  // Calculate long-term baseline statistics
  const homeWins = allMatches.filter(m => m.actualOutcome === '1').length;
  const draws = allMatches.filter(m => m.actualOutcome === 'X').length;
  const awayWins = allMatches.filter(m => m.actualOutcome === '2').length;
  const total = allMatches.length;

  const stats = {
    totalMatches: total,
    homeWins,
    draws,
    awayWins,
    homeWinPct: (homeWins / total * 100).toFixed(1),
    drawPct: (draws / total * 100).toFixed(1),
    awayWinPct: (awayWins / total * 100).toFixed(1),
    avgHomeGoals: (allMatches.reduce((s, m) => s + m.homeGoals, 0) / total).toFixed(2),
    avgAwayGoals: (allMatches.reduce((s, m) => s + m.awayGoals, 0) / total).toFixed(2),
    matches: allMatches
  };

  console.log(`Historical Long-Term Stats: 1: ${stats.homeWinPct}% | X: ${stats.drawPct}% | 2: ${stats.awayWinPct}%`);

  const outputPath = path.join(__dirname, 'data', 'historical_matches.json');
  fs.writeFileSync(outputPath, JSON.stringify(stats, null, 2), 'utf8');
  console.log(`Saved historical matches dataset to ${outputPath}`);

  // Also create a browser-compatible JS version so the client can load it without fetch/cors issues:
  const jsOutputPath = path.join(__dirname, 'data', 'historical_data.js');
  const jsContent = `const HISTORICAL_DATA = ${JSON.stringify(stats, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { HISTORICAL_DATA };\n}\n`;
  fs.writeFileSync(jsOutputPath, jsContent, 'utf8');
  console.log(`Saved browser-ready data to ${jsOutputPath}`);
}

fetchHistoricalData();
