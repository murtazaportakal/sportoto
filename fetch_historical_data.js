const axios = require('axios');
const fs = require('fs');
const path = require('path');

const { getCode } = require('./team_mapping');

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
      throw new Error(`Historical refresh failed for ${url}: ${e.message}`);
    }
  }

  console.log(`Processed ${allMatches.length} valid historical matches with full-time scores.`);

  if (!allMatches.length) throw new Error('Historical refresh returned no valid matches; existing data preserved.');

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

if (require.main === module) fetchHistoricalData().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { fetchHistoricalData };
