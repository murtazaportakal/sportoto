/** Results-only research model; never reads live squads, standings, odds or the wall clock. */
const ChronologicalModel = {
  version:'results-only-v1',
  normalize(matches) {
    const seen=new Set(),excluded={};const rows=[];
    const skip=reason=>{excluded[reason]=(excluded[reason]||0)+1;};
    for(const m of matches) {
      if(!/^\d{4}-\d{2}-\d{2}$/.test(m.date)||!Number.isFinite(Date.parse(m.date))||new Date(m.date).toISOString().slice(0,10)!==m.date){skip('invalid-date');continue;}
      if(!m.homeCode||!m.awayCode||m.homeCode===m.awayCode||![m.homeGoals,m.awayGoals].every(v=>Number.isInteger(v)&&v>=0)){skip('invalid-result');continue;}
      const actualOutcome=m.homeGoals>m.awayGoals?'1':m.homeGoals<m.awayGoals?'2':'X';
      if(m.actualOutcome!==actualOutcome){skip('outcome-mismatch');continue;}
      const year=Number(m.date.slice(0,4))-(Number(m.date.slice(5,7))<7?1:0);
      const league=m.league||'tur.1',season=m.season||`${year}-${year+1}`;
      const id=[league,m.date,m.homeCode,m.awayCode].join(':');
      if(seen.has(id))throw new Error('Duplicate historical fixture: '+id);
      seen.add(id);rows.push({...m,league,season,id,group:`${league}:${season}:${m.round||m.date}`});
    }
    rows.sort((a,b)=>a.date.localeCompare(b.date)||a.id.localeCompare(b.id));
    return {rows,excluded};
  },
  replay(matches, params={k:24,homeAdvantage:60,goalWeight:30,drawBase:.26}) {
    const {rows,excluded}=this.normalize(matches),states=new Map(),predictions=[];
    const stateFor=m=>{const key=m.league+':'+m.season;if(!states.has(key))states.set(key,{teams:new Map(),counts:[1,1,1]});return states.get(key);};
    const teamFor=(state,code)=>{if(!state.teams.has(code))state.teams.set(code,{rating:1500,history:[]});return state.teams.get(code);};
    const threeWay=(difference,draw)=>{const expected=1/(1+10**(-difference/400));return [expected*(1-draw),draw,(1-expected)*(1-draw)];};
    for(let i=0;i<rows.length;) {
      let end=i+1;while(end<rows.length&&rows[end].date===rows[i].date)end++;
      // All predictions for a date precede every result update for that date.
      for(const m of rows.slice(i,end)) {
        const state=stateFor(m),home=teamFor(state,m.homeCode),away=teamFor(state,m.awayCode),cutoff=Date.parse(m.date);
        const recent=team=>team.history.filter(r=>cutoff-Date.parse(r.date)<=180*86400000).slice(-8);
        const h=recent(home),a=recent(away);
        if(h.length<5||a.length<5){excluded['insufficient-recent-history']=(excluded['insufficient-recent-history']||0)+1;continue;}
        const mean=list=>list.reduce((sum,r)=>sum+r.goalDifference,0)/list.length;
        const difference=home.rating-away.rating+params.homeAdvantage;
        predictions.push({...m,asOf:m.date+'T00:00:00.000Z',latestInputDate:[h.at(-1).date,a.at(-1).date].sort().at(-1),estimatedInputs:false,
          probabilities:threeWay(difference+params.goalWeight*(mean(h)-mean(a)),params.drawBase),
          rating:threeWay(difference,.26),frequency:state.counts.map(v=>v/state.counts.reduce((x,y)=>x+y,0)),uniform:[1/3,1/3,1/3]});
      }
      const deltas=new Map();
      for(const m of rows.slice(i,end)) {
        const state=stateFor(m),home=teamFor(state,m.homeCode),away=teamFor(state,m.awayCode);
        const expected=1/(1+10**(-(home.rating-away.rating+params.homeAdvantage)/400));
        const delta=params.k*((m.actualOutcome==='1'?1:m.actualOutcome==='X'?.5:0)-expected);
        deltas.set(home,(deltas.get(home)||0)+delta);deltas.set(away,(deltas.get(away)||0)-delta);
        home.history.push({date:m.date,goalDifference:m.homeGoals-m.awayGoals});away.history.push({date:m.date,goalDifference:m.awayGoals-m.homeGoals});
        state.counts[['1','X','2'].indexOf(m.actualOutcome)]++;
      }
      for(const [team,delta] of deltas)team.rating+=delta;
      i=end;
    }
    return {rows:predictions,excluded,total:matches.length};
  }
};
if(typeof module!=='undefined'&&module.exports)module.exports={ChronologicalModel};
