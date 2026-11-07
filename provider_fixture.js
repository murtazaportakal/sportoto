const {getCode} = require('./team_mapping');
function normalizeFixture(item, roundId, position) {
  const m = item.match;
  if (!m?.id || !m.homeTeam?.name || !m.awayTeam?.name) throw new Error('Missing provider fixture identity');
  const raw = m.date;
  const explicitZone = typeof raw === 'string' && /(?:Z|[+-]\d\d:\d\d)$/.test(raw);
  const kickoff = explicitZone && Number.isFinite(Date.parse(raw)) ? new Date(raw).toISOString() : null;
  const home = m.score?.homeRegular, away = m.score?.awayRegular;
  const validScore = Number.isInteger(home) && home >= 0 && Number.isInteger(away) && away >= 0;
  const winner = validScore ? (home > away ? 1 : home < away ? 2 : 0) : null;
  const complete = validScore && [0,1,2].includes(m.fullTimeWin) && m.fullTimeWin === winner;
  return {id:position, providerId:String(m.id), roundId, leagueId:m.tournamentId ?? null,
    home:getCode(m.homeTeam.name)||'UNKNOWN', away:getCode(m.awayTeam.name)||'UNKNOWN',
    homeName:m.homeTeam.name, awayName:m.awayTeam.name,
    kickoffRaw:raw ?? null, kickoff, timezoneStatus:kickoff?'explicit':'unverified',
    providerStatusRaw:m.status ?? null, providerUpdatedAtRaw:m.updatedAt ?? null,
    status:complete?'final':'unconfirmed',
    result:complete?{homeGoals:home,awayGoals:away,outcome:winner===0?'X':String(winner)}:null};
}
module.exports = {normalizeFixture};
