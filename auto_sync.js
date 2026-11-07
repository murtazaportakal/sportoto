const axios = require('axios');
const https = require('https');
const fs = require('fs');
const path = require('path');

const { getCode } = require('./team_mapping');
const { normalizeFixture } = require('./provider_fixture');

async function syncInto(directory) {
  const dataFile = path.join(directory, 'data', 'sportoto_data.js');
  const matchesFile = path.join(directory, 'matches.txt');
  const indexHtmlFile = path.join(directory, 'index.html');
  const tuneResultFile = path.join(directory, 'data', 'tuning_report.json');
  const previousFile = path.join(directory, 'data', 'live.json');
  const previous = fs.existsSync(previousFile) ? JSON.parse(fs.readFileSync(previousFile, 'utf8')) : null;
  const resolveKickoffs = require('./verified_kickoffs').kickoffResolver();
  console.log("==================================================");
  console.log("🤖 100% AUTOMATIC SPOR TOTO FIXTURES & STATS SYNC");
  console.log("==================================================");

  try {
    // 1. Fetch latest published game round directly from official Spor Toto REST API
    console.log("1. Fetching latest bulletin from official Spor Toto API...");
    const httpsAgent = new https.Agent();

    // Try current season
    const now = new Date();
    const seasonStart = now.getUTCFullYear() - (now.getUTCMonth() < 6 ? 1 : 0);
    const years = [0, 1, 2].map(offset => `${seasonStart-offset}/${seasonStart-offset+1}`);
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

    if (matchesList.length !== 15) {
      throw new Error("Expected exactly 15 matches for the active round.");
    }

    console.log(`✅ Found ${matchesList.length} matches.`);

    const matchLines = [];
    let fixtures = [];
    let idCounter = 1;

    for (const item of matchesList) {
      const homeRaw = item.match.homeTeam.name;
      const awayRaw = item.match.awayTeam.name;
      matchLines.push(`${homeRaw} - ${awayRaw}`);

      fixtures.push(normalizeFixture(item, latestRound.id, idCounter++));
    }
    fixtures = await resolveKickoffs(fixtures);

    // 3. Save matches.txt automatically
    fs.writeFileSync(matchesFile, matchLines.join('\n') + '\n', 'utf8');
    console.log(`✅ Saved ${matchLines.length} matches to matches.txt`);

    // 4. Update FIXTURES_DATA in data/sportoto_data.js
    let dataContent = fs.readFileSync(dataFile, 'utf8');
    const newFixturesStr = `const FIXTURES_DATA = [\n` + 
      fixtures.map(f => `  ${JSON.stringify(f)}`).join(',\n') +
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
    const sources = await require('./auto_stats_update.js').updateStats(path.join(directory, 'data'));
    sources.push({source:'sportoto',status:'ok',fetchedAt:new Date().toISOString()});
    if(fixtures.some(f=>f.kickoffSource?.provider==='uefa'))sources.push({source:'uefa:nations-kickoffs',status:'ok',fetchedAt:new Date().toISOString(),matched:fixtures.filter(f=>f.timezoneStatus==='independently-matched-utc').length});

    // 7. Pull live odds and update impliedProb in sportoto_data.js
    console.log("4. Fetching live odds from open API...");
    sources.push(await updateLiveOdds(dataFile));

    // 8. Auto-backtest & tune model hyperparameters
    console.log("5. Running model backtest and hyperparameter tuning...");
    await runAutoTune(dataFile, tuneResultFile);
    const published = require('./publish_live_data').publishLiveData({id: latestRound.id, name: latestRound.name, closesAt: latestRound.roundCloseDate}, new Date().toISOString(), path.join(directory, 'data'));
    const records = require('./evaluation_records');
    const evaluationDirectory = path.join(directory, 'data', 'evaluation');
    console.log('Evaluation records:', records.recordEvaluation(published, evaluationDirectory));
    await records.refreshRecordedResults(async roundId => {
      const response = await axios.get('https://webapi.sportoto.gov.tr/api/GameMatch/GetGameMatches/?gameRoundId=' + encodeURIComponent(roundId), {httpsAgent, timeout:8000});
      return response.data.object;
    }, latestRound.id, evaluationDirectory, new Date().toISOString(), resolveKickoffs);
    fs.writeFileSync(path.join(evaluationDirectory,'report.json'), JSON.stringify(require('./evaluate_records').evaluateRecords(evaluationDirectory),null,2)+'\n');
    fs.writeFileSync(path.join(directory,'data','health.json'),JSON.stringify(require('./health_report').healthReport(published,previous,sources),null,2)+'\n');

  } catch (err) {
    console.error("❌ Auto Sync failed:", err.message);
    throw err;
  }
}

// ── Live Odds Update ─────────────────────────────────────────────────────────
// Uses The Odds API (free tier) or falls back silently if unavailable.
// Set ODDS_API_KEY env variable to enable. Without it, this step is skipped.
async function updateLiveOdds(dataFile) {
  const apiKey = process.env.ODDS_API_KEY;
  if (!apiKey) {
    console.log("  ℹ️  ODDS_API_KEY not set — skipping live odds update.");
    return {source:'odds',status:'disabled',reason:'ODDS_API_KEY absent'};
  }

  try {
    const httpsAgent = new https.Agent();
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
      const teamRegex = new RegExp(`("?code"?:\\s*"${homeCode}"[\\s\\S]*?"?impliedProb"?:\\s*)([\\d.]+)`, 'g');
      dataContent = dataContent.replace(teamRegex, (match, p1) => `${p1}${impliedHome}`);
      updatedCount++;
    }

    if (updatedCount > 0) {
      fs.writeFileSync(dataFile, dataContent);
      console.log(`  ✅ Updated impliedProb for ${updatedCount} teams from live odds.`);
    } else {
      console.log('  ℹ️  No matching teams found in live odds response.');
    }
    return {source:'odds',status:'ok',updatedTeams:updatedCount,fetchedAt:new Date().toISOString()};
  } catch (err) {
    console.log('Optional live odds fetch failed; existing odds retained.');
    return {source:'odds',status:'failed',reason:'request-or-payload-failure'};
  }
}

// ── Auto Backtest & Tune ──────────────────────────────────────────────────────
async function runAutoTune(dataFile, tuneResultFile) {
  try {
    delete require.cache[require.resolve(dataFile)];
    const { TEAMS_DATA } = require(dataFile);
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

    // Persist research diagnostics separately; do not promote candidates.
    const output = {
      validationStatus: "unvalidated-diagnostic-only",
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

  } catch (err) {
    console.log(`  ⚠️  Auto-tune failed (non-fatal): ${err.message}`);
  }
}

async function autoSync() {
  try {
    const result=await require('./sync_transaction').syncTransaction(__dirname, syncInto);
    const failure=path.join(__dirname,'data','sync_failure.json');
    if(fs.existsSync(failure))fs.unlinkSync(failure);
    return result;
  } catch(error) {
    fs.writeFileSync(path.join(__dirname,'data','sync_failure.json'),JSON.stringify({failedAt:new Date().toISOString(),status:'failed',message:'Sync failed; inspect runner logs. Last committed snapshot retained unless recovery journal is present.'},null,2)+'\n');
    throw error;
  }
}
if (require.main === module) autoSync().catch(() => {process.exitCode = 1;});

module.exports = { autoSync, syncInto, getCode };
