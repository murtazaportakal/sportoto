const axios = require('axios');
const https = require('https');
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data', 'sportoto_data.js');
const matchesFile = path.join(__dirname, 'matches.txt');
const indexHtmlFile = path.join(__dirname, 'index.html');

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
  'lyon': 'LYO', 'olympique lyon': 'LYO',
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

async function autoSync() {
  console.log("==================================================");
  console.log("🤖 100% AUTOMATIC SPOR TOTO FIXTURES & STATS SYNC");
  console.log("==================================================");

  try {
    // 1. Fetch latest published game round directly from official Spor Toto REST API
    console.log("1. Fetching latest bulletin from official Spor Toto API...");
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });

    // Try current season
    const years = ['2026/2027', '2025/2026', '2024/2025'];
    let latestRound = null;

    for (const yr of years) {
      try {
        const res = await axios.get(`https://webapi.sportoto.gov.tr/api/GameRound?year=${encodeURIComponent(yr)}&isPublished=true`, { httpsAgent, timeout: 8000 });
        if (res.data && res.data.object && res.data.object.length > 0) {
          const sorted = res.data.object.sort((a, b) => new Date(b.roundCloseDate) - new Date(a.roundCloseDate));
          latestRound = sorted[0];
          break;
        }
      } catch (e) {}
    }

    if (!latestRound) {
      throw new Error("Could not retrieve active Spor Toto round from webapi.sportoto.gov.tr");
    }

    console.log(`✅ Active Round: ${latestRound.name} (Round Close: ${latestRound.roundCloseDate}, ID: ${latestRound.id})`);

    // 2. Fetch the 15 matches for this round
    console.log("2. Fetching the official 15 matches for this round...");
    const matchesRes = await axios.get(`https://webapi.sportoto.gov.tr/api/GameMatch/GetGameMatches/?gameRoundId=${latestRound.id}`, { httpsAgent, timeout: 8000 });
    const matchesList = matchesRes.data.object || [];

    if (matchesList.length === 0) {
      throw new Error("No matches returned for the active round.");
    }

    console.log(`✅ Found ${matchesList.length} matches.`);

    const matchLines = [];
    const fixtures = [];
    let idCounter = 1;

    for (const item of matchesList) {
      const homeRaw = item.match.homeTeam.name;
      const awayRaw = item.match.awayTeam.name;
      matchLines.push(`${homeRaw} - ${awayRaw}`);

      const homeCode = getCode(homeRaw) || "UNKNOWN";
      const awayCode = getCode(awayRaw) || "UNKNOWN";
      fixtures.push({ id: idCounter++, home: homeCode, away: awayCode });
    }

    // 3. Save matches.txt automatically
    fs.writeFileSync(matchesFile, matchLines.join('\n') + '\n', 'utf8');
    console.log(`✅ Saved ${matchLines.length} matches to matches.txt`);

    // 4. Update FIXTURES_DATA in data/sportoto_data.js
    let dataContent = fs.readFileSync(dataFile, 'utf8');
    const newFixturesStr = `const FIXTURES_DATA = [\n` + 
      fixtures.map(f => `  { id: ${f.id}, home: "${f.home}", away: "${f.away}" }`).join(',\n') +
      `\n];`;

    dataContent = dataContent.replace(/const FIXTURES_DATA = \[[\s\S]*?\];/, newFixturesStr);
    fs.writeFileSync(dataFile, dataContent, 'utf8');
    console.log(`✅ Updated FIXTURES_DATA in data/sportoto_data.js`);

    // 5. Update index.html round badge
    if (fs.existsSync(indexHtmlFile)) {
      let indexContent = fs.readFileSync(indexHtmlFile, 'utf8');
      const closeDate = new Date(latestRound.roundCloseDate);
      const closeFormatted = `${closeDate.getDate()}.${closeDate.getMonth() + 1}.${closeDate.getFullYear()}`;
      indexContent = indexContent.replace(/<div class="section-tag">.*?<\/div>/, `<div class="section-tag">${latestRound.name.toUpperCase()} • ${closeFormatted}</div>`);
      fs.writeFileSync(indexHtmlFile, indexContent, 'utf8');
      console.log(`✅ Updated index.html round header tag to: ${latestRound.name}`);
    }

    // 6. Automatically run auto_stats_update.js to refresh live ESPN ratings
    console.log("3. Triggering live stats update from ESPN across all 6 leagues...");
    require('./auto_stats_update.js');

  } catch (err) {
    console.error("❌ Auto Sync failed:", err.message);
  }
}

if (require.main === module) {
  autoSync();
}

module.exports = { autoSync };
