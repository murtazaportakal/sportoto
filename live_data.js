/** Shared contract for an atomically published browser dataset. */
const LiveData = {
  validate(data) {
    if (data?.schemaVersion !== 1 || !Number.isFinite(Date.parse(data.updatedAt)) || !Array.isArray(data.teams) || !Array.isArray(data.fixtures) || data.fixtures.length !== 15) throw new Error('Invalid live dataset');
    if (new Set(data.fixtures.map(f => f.id)).size !== 15 || new Set(data.teams.map(t => t.code)).size !== data.teams.length) throw new Error('Duplicate identities');
    const providerIds=data.fixtures.filter(f=>f.providerId).map(f=>f.providerId);
    if(new Set(providerIds).size!==providerIds.length)throw new Error('Duplicate provider identities');
    for (const f of data.fixtures) if (!f.home || !f.away || !f.homeName || !f.awayName) throw new Error('Incomplete fixture');
    for(const f of data.fixtures) {
      if(f.home===f.away&&f.home!=='UNKNOWN')throw new Error('Identical fixture teams');
      if(f.kickoff && (!/(?:Z|[+-]\d\d:\d\d)$/.test(f.kickoff)||!Number.isFinite(Date.parse(f.kickoff))))throw new Error('Invalid kickoff timezone');
      if(f.status==='final') {
        const r=f.result;
        if(!r||![r.homeGoals,r.awayGoals].every(v=>Number.isInteger(v)&&v>=0)||r.outcome!==(r.homeGoals>r.awayGoals?'1':r.homeGoals<r.awayGoals?'2':'X'))throw new Error('Invalid final result');
      } else if(f.result)throw new Error('Unconfirmed result');
    }
    for (const t of data.teams) {
      for (const k of ['eloRating','impliedProb','squadDepth','historicalPedigree','managerExpScore','starDependency','homeAdvantage','altitudeAdaptation','groupDifficulty','injurySeverity']) if (!Number.isFinite(t[k])) throw new Error('Invalid team input: ' + k);
      if (!['offensive','defensive','possession','transition'].every(k => Number.isFinite(t.tacticalStyle?.[k])) || !['goalsFor','goalsAgainst'].every(k => Number.isFinite(t.recentForm?.[k]))) throw new Error('Incomplete team statistics');
    }
    const p = data.model?.params;
    if (!data.model?.version || !p || !Number.isFinite(p.sigmoidScale) || p.sigmoidScale <= 0 || !Number.isFinite(p.drawBase) || p.drawBase <= 0 || p.drawBase >= 1 || !Number.isFinite(p.homeAdvantageBoost) || p.homeAdvantageBoost < 0 || p.homeAdvantageBoost > .2) throw new Error('Invalid model configuration');
    if (typeof data.round?.name !== 'string') throw new Error('Missing round metadata');
    return data;
  },
  freshness(updatedAt, now = Date.now()) {
    const age = now - Date.parse(updatedAt);
    return !Number.isFinite(age) || age < -300000 || age > 90 * 60000 ? 'stale' : 'fresh';
  }
};
if (typeof module !== 'undefined' && module.exports) module.exports = { LiveData };
