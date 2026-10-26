const axios = require('axios');
const https = require('https');
const fs = require('fs');
const path = require('path');

const dataFile    = path.join(__dirname, 'data', 'sportoto_data.js');
const matchesFile = path.join(__dirname, 'matches.txt');
const indexHtmlFile = path.join(__dirname, 'index.html');
const tuneResultFile = path.join(__dirname, 'data', 'tuned_params.json');

// ── Levenshtein distance for fuzzy team name matching ─────────────────────────
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

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

  // 1. Exact / substring match (original logic)
  for (const [key, code] of Object.entries(teamMap)) {
    if (clean.includes(normalizeName(key))) return code;
  }

  // 2. Fuzzy fallback: accept closest match within edit-distance threshold
  const keys = Object.keys(teamMap);
  let bestKey = null, bestDist = Infinity;
  for (const key of keys) {
    const dist = levenshtein(clean, normalizeName(key));
    // Allow at most 40% of the longer string's length as edit distance
    const threshold = Math.ceil(Math.max(clean.length, key.length) * 0.40);
    if (dist < bestDist && dist <= threshold) {
      bestDist = dist;
      bestKey = key;
    }
  }

  if (bestKey) {
    console.log(`  ⚠️  Fuzzy match: "${name}" → "${bestKey}" (${teamMap[bestKey]}, dist=${bestDist})`);
    return teamMap[bestKey];
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

    // 7. Pull live odds and update impliedProb in sportoto_data.js
    console.log("4. Fetching live odds from open API...");
    await updateLiveOdds();

    // 8. Auto-backtest & tune model hyperparameters
    console.log("5. Running model backtest and hyperparameter tuning...");
    await runAutoTune();

  } catch (err) {
    console.error("❌ Auto Sync failed:", err.message);
  }
}

// ── Live Odds Update ─────────────────────────────────────────────────────────
// Uses The Odds API (free tier) or falls back silently if unavailable.
// Set ODDS_API_KEY env variable to enable. Without it, this step is skipped.
async function updateLiveOdds() {
  const apiKey = process.env.ODDS_API_KEY;
  if (!apiKey) {
    console.log("  ℹ️  ODDS_API_KEY not set — skipping live odds update.");
    return;
  }

  try {
    const httpsAgent = new (require('https').Agent)({ rejectUnauthorized: false });
    // Turkish Süper Lig odds
    const url = `https://api.the-odds-api.com/v4/sports/soccer_turkey_super_league/odds/?apiKey=${apiKey}&regions=eu&markets=h2h&oddsFormat=decimal`;
    const res = await axios.get(url, { httpsAgent, timeout: 8000 });
    const events = res.data || [];

    let dataContent = fs.readFileSync(dataFile, 'utf8');
    let updatedCount = 0;

    for (const ev of events) {
      const homeCode = getCode(ev.home_team);
      const awayCode = getCode(ev.away_team);
      if (!homeCode || !awayCode) continue;

      // Average odds across bookmakers
      let homeOddsSum = 0, awayOddsSum = 0, drawOddsSum = 0, count = 0;
      for (const bm of ev.bookmakers || []) {
        const h2h = (bm.markets || []).find(m => m.key === 'h2h');
        if (!h2h) continue;
        const home = h2h.outcomes.find(o => o.name === ev.home_team);
        const away = h2h.outcomes.find(o => o.name === ev.away_team);
        const draw = h2h.outcomes.find(o => o.name === 'Draw');
        if (home && away && draw) {
          homeOddsSum += home.price; awayOddsSum += away.price; drawOddsSum += draw.price;
          count++;
        }
      }

      if (count === 0) continue;

      // Convert decimal odds to implied probability (normalized to remove overround)
      const pHome = 1 / (homeOddsSum / count);
      const pDraw = 1 / (drawOddsSum  / count);
      const pAway = 1 / (awayOddsSum  / count);
      const total = pHome + pDraw + pAway;
      const impliedHome = (pHome / total).toFixed(4);

      // Patch home team implied prob in sportoto_data.js
      const teamRegex = new RegExp(`(code:\\s*"${homeCode}"[\\s\\S]*?impliedProb:\\s*)([\\d.]+)`, 'g');
      dataContent = dataContent.replace(teamRegex, (match, p1) => `${p1}${impliedHome}`);
      updatedCount++;
    }

    if (updatedCount > 0) {
      fs.writeFileSync(dataFile, dataContent);
      console.log(`  ✅ Updated impliedProb for ${updatedCount} teams from live odds.`);
    } else {
      console.log('  ℹ️  No matching teams found in live odds response.');
    }
  } catch (err) {
    console.log(`  ⚠️  Live odds fetch failed (non-fatal): ${err.message}`);
  }
}

// ── Auto Backtest & Tune ──────────────────────────────────────────────────────
async function runAutoTune() {
  try {
    const { TEAMS_DATA } = require('./data/sportoto_data.js');
    const { FeatureEngineering } = require('./ml/feature_engineering.js');
    const { PredictionEngine }   = require('./ml/prediction_engine.js');
    const { ModelTuner }         = require('./ml/model_tuner.js');

    const historicalData = require('./data/historical_matches.json');
    const matches = historicalData.matches || [];

    if (matches.length < 20) {
      console.log('  ℹ️  Not enough historical matches for tuning (need ≥20).');
      return;
    }

    console.log(`  Running grid-search on ${matches.length} historical matches...`);
    const tuneResult = ModelTuner.tune(matches, TEAMS_DATA, FeatureEngineering, PredictionEngine);

    // Persist best params to data/tuned_params.json
    const output = {
      timestamp: new Date().toISOString(),
      evaluatedMatches: tuneResult.baseline?.evaluatedCount || 0,
      gridIterations: tuneResult.iterations,
      baseline: {
        accuracy: tuneResult.baseline?.overallAccuracy,
        brierScore: tuneResult.baseline?.brierScore,
        logLoss: tuneResult.baseline?.logLoss
      },
      optimized: {
        accuracy: tuneResult.optimized?.overallAccuracy,
        brierScore: tuneResult.optimized?.brierScore,
        logLoss: tuneResult.optimized?.logLoss
      },
      bestParams: tuneResult.bestParams,
      improvementPct: tuneResult.improvementPct
    };

    fs.writeFileSync(tuneResultFile, JSON.stringify(output, null, 2));
    console.log(`  ✅ Tuning complete. Accuracy: ${tuneResult.baseline?.overallAccuracy}% → ${tuneResult.optimized?.overallAccuracy}% (+${tuneResult.improvementPct}pp)`);
    console.log(`  📐 Best params: ${JSON.stringify(tuneResult.bestParams)}`);

    // Write best params into prediction_engine.js as a comment block (for transparency)
    const engineFile = path.join(__dirname, 'ml', 'prediction_engine.js');
    let engineContent = fs.readFileSync(engineFile, 'utf8');
    const paramsBlock = `  // AUTO-TUNED PARAMS (last updated: ${new Date().toISOString().slice(0,10)})
  // sigmoidScale: ${tuneResult.bestParams.sigmoidScale}, drawBase: ${tuneResult.bestParams.drawBase}
  // drawGapThreshold: ${tuneResult.bestParams.drawGapThreshold}, homeAdvantageBoost: ${tuneResult.bestParams.homeAdvantageBoost}`;
    engineContent = engineContent.replace(
      /\/\/ AUTO-TUNED PARAMS[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*/,
      paramsBlock
    );
    if (!engineContent.includes('AUTO-TUNED PARAMS')) {
      engineContent = engineContent.replace(
        '  // =============== RANDOM SEED FOR REPRODUCIBILITY ===============',
        paramsBlock + '\n\n  // =============== RANDOM SEED FOR REPRODUCIBILITY ==============='
      );
    }
    fs.writeFileSync(engineFile, engineContent);

  } catch (err) {
    console.log(`  ⚠️  Auto-tune failed (non-fatal): ${err.message}`);
  }
}

if (require.main === module) {
  autoSync();
}

module.exports = { autoSync };
