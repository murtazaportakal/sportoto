const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { getCode } = require('./team_mapping');
const dataFile = path.join(__dirname, 'data', 'sportoto_data.js');
const leagues = ['tur.1', 'eng.1', 'esp.1', 'ger.1', 'ita.1', 'fra.1'];
const estimatedFields = ['impliedProb', 'squadDepth', 'historicalPedigree', 'tacticalStyle', 'managerExpScore', 'starDependency', 'homeAdvantage', 'altitudeAdaptation', 'groupDifficulty', 'injurySeverity'];

// Existing dataset medians are model priors, never claimed as measured team facts.
function median(values) {
  const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!sorted.length) throw new Error('Cannot estimate an input without a baseline');
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
function baseline(teams) {
  const result = {};
  for (const field of estimatedFields) {
    result[field] = field === 'tacticalStyle'
      ? Object.fromEntries(['offensive', 'defensive', 'possession', 'transition'].map(k => [k, median(teams.map(t => t.tacticalStyle[k]))]))
      : median(teams.map(t => t[field]));
  }
  return result;
}
function applyStandings(teams, payload, league, fetchedAt) {
  const entries = payload.children?.flatMap(c => (c.standings?.entries || []).map(entry=>({...entry,group:c.name}))) || [];
  if (!entries.length) throw new Error(`No standings returned for ${league}`);
  const defaults = baseline(teams.filter(t => !t.dataQuality?.estimatedFields?.length));
  let count = 0;
  for (const entry of entries) {
    const code = getCode(entry.team.displayName);
    if (!code) continue;
    if(league==='uefa.nations'&&(!entry.team.isNational||!code.startsWith('NAT_')))continue;
    if(league!=='uefa.nations'&&code.startsWith('NAT_'))continue;
    const stat = name => entry.stats.find(s => s.name === name)?.value;
    const [games, points, gf, ga, gd] = ['gamesPlayed', 'points', 'pointsFor', 'pointsAgainst', 'pointDifferential'].map(stat);
    if (![games, points, gf, ga, gd].every(Number.isFinite) || games <= 0) continue;
    let team = teams.find(t => t.code === code);
    if (!team) {
      team = {name: entry.team.displayName, code, ...structuredClone(defaults), dataQuality: {estimatedFields, estimationMethod: 'Median of existing team inputs; not measured team statistics'}};
      teams.push(team);
    }
    team.eloRating = 1350 + points * 12 + gd * 5 + (league === 'tur.1' ? 0 : 200);
    team.recentForm = {goalsFor: Number((gf / games).toFixed(2)), goalsAgainst: Number((ga / games).toFixed(2))};
    team.statsSource = {url: `https://site.web.api.espn.com/apis/v2/sports/soccer/${league}/standings`, season: payload.season?.displayName || null, fetchedAt, gamesPlayed: games, points, goalsFor: gf, goalsAgainst: ga, goalDifference: gd, ratingMethod: '1350 + points * 12 + goalDifference * 5 + league adjustment; not an official Elo rating'};
    if(league==='uefa.nations') {
      team.teamType='national';
      team.statsSource.group=entry.group;
      team.statsSource.providerTeamId=String(entry.team.id);
      team.dataQuality={...team.dataQuality,estimatedFields:[...new Set([...(team.dataQuality?.estimatedFields||[]),'eloRating'])],estimationMethod:'Generic existing-dataset medians for unavailable inputs; rating is an unvalidated standings heuristic. Nations League tier strengths are not calibrated.'};
    }
    count++;
  }
  return count;
}
async function updateStats(directory = path.join(__dirname, 'data')) {
  const dataFile = path.join(directory, 'sportoto_data.js');
  delete require.cache[require.resolve(dataFile)];
  const {TEAMS_DATA, FIXTURES_DATA} = require(dataFile);
  const requestedLeagues=[...leagues];
  if(FIXTURES_DATA.some(f=>f.home.startsWith('NAT_')||f.away.startsWith('NAT_')))requestedLeagues.push('uefa.nations');
  // Fetch everything before writing, so a failed league cannot leave a partial refresh.
  const responses = await Promise.all(requestedLeagues.map(league => axios.get(`https://site.web.api.espn.com/apis/v2/sports/soccer/${league}/standings`, {timeout: 15000}).then(r => ({league, data: r.data}))));
  const nationalResponse=responses.find(r=>r.league==='uefa.nations');
  if(nationalResponse) {
    const dates=FIXTURES_DATA.filter(f=>f.home.startsWith('NAT_')).map(f=>f.kickoffRaw?.slice(0,10)).filter(Boolean);
    const expected=new Set(dates.map(date=>{const year=Number(date.slice(0,4))-(Number(date.slice(5,7))<7?1:0);return year-year%2;}));
    if(expected.size!==1||!expected.has(nationalResponse.data.season?.year))throw new Error('National standings season does not match fixtures');
  }
  const fetchedAt = new Date().toISOString();
  for (const {league, data} of responses) console.log(`${league}: updated ${applyStandings(TEAMS_DATA, data, league, fetchedAt)} teams`);
  fs.writeFileSync(dataFile, `const TEAMS_DATA = ${JSON.stringify(TEAMS_DATA, null, 2)};\n\nconst FIXTURES_DATA = ${JSON.stringify(FIXTURES_DATA, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) { module.exports = { TEAMS_DATA, FIXTURES_DATA }; }\n`);
  return responses.map(({league})=>({source:'espn:'+league,status:'ok',fetchedAt}));
}
if (require.main === module) updateStats().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { updateStats, applyStandings };
