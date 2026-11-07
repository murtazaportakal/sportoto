const axios=require('axios');
const {getCode}=require('./team_mapping');
const supportedLeagues=['tur.1','eng.1','esp.1','ger.1','ita.1','fra.1'];
function teamLeague(team) {
  const match=team?.statsSource?.url?.match(/\/soccer\/([^/]+)\/standings/);
  return supportedLeagues.includes(match?.[1])?match[1]:null;
}
function fixtureLeague(fixture,teams) {
  if(fixture.kickoffSource?.provider==='espn'&&supportedLeagues.includes(fixture.kickoffSource.league))return fixture.kickoffSource.league;
  const home=teamLeague(teams.find(t=>t.code===fixture.home)),away=teamLeague(teams.find(t=>t.code===fixture.away));
  return home&&home===away?home:null;
}
function matchClubKickoffs(fixtures,feeds,teams,fetchedAt) {
  if(!Number.isFinite(Date.parse(fetchedAt)))throw new Error('Invalid club fixture retrieval time');
  return fixtures.map(f=>{
    if(f.home.startsWith('NAT_')||f.away.startsWith('NAT_')||f.timezoneStatus==='explicit')return f;
    const league=fixtureLeague(f,teams),date=f.kickoffRaw?.slice(0,10);
    if(!league||!/^\d{4}-\d{2}-\d{2}$/.test(date))return {...f,kickoff:null,timezoneStatus:'unsupported-secondary-league-or-date'};
    const feed=feeds.find(item=>item.league===league&&item.date===date);
    if(!feed||!Array.isArray(feed.data.events)||!feed.data.leagues?.some(l=>l.slug===league))throw new Error('Missing or mismatched club fixture feed');
    const candidates=[];
    for(const event of feed.data.events)for(const competition of event.competitions||[]) {
      const competitors=competition.competitors||[],home=competitors.filter(c=>c.homeAway==='home'),away=competitors.filter(c=>c.homeAway==='away');
      if(competitors.length!==2||home.length!==1||away.length!==1)continue;
      if(getCode(home[0].team?.displayName||'')!==f.home||getCode(away[0].team?.displayName||'')!==f.away)continue;
      if(home[0].team?.isNational===true||away[0].team?.isNational===true)continue;
      if(competition.date?.slice(0,10)!==date)continue;
      const homeTeam=teams.find(t=>t.code===f.home),awayTeam=teams.find(t=>t.code===f.away);
      if(homeTeam?.statsSource?.providerTeamId&&String(home[0].team.id)!==homeTeam.statsSource.providerTeamId)continue;
      if(awayTeam?.statsSource?.providerTeamId&&String(away[0].team.id)!==awayTeam.statsSource.providerTeamId)continue;
      candidates.push({event,competition,home:home[0],away:away[0]});
    }
    if(candidates.length!==1)return {...f,kickoff:null,timezoneStatus:candidates.length?'ambiguous-secondary-fixture':'unmatched-secondary-fixture'};
    const {event,competition,home,away}=candidates[0],raw=competition.date;
    if(!competition.id||competition.timeValid!==true||!/(?:Z|[+-]\d\d:\d\d)$/.test(raw)||!Number.isFinite(Date.parse(raw)))return {...f,kickoff:null,timezoneStatus:'invalid-secondary-timezone'};
    const kickoff=new Date(raw).toISOString();
    if(f.kickoff&&Date.parse(f.kickoff)!==Date.parse(kickoff))return {...f,kickoff:null,timezoneStatus:'conflicting-explicit-kickoffs'};
    const type=competition.status?.type||event.status?.type;
    const result={...f,kickoff,timezoneStatus:'independently-matched-utc',kickoffSource:{provider:'espn',league,matchId:String(competition.id),
      url:feed.url,fetchedAt,rawKickoff:raw,status:type?.name??null,matchingPolicy:'unique club identities and available provider IDs, home/away, league and same calendar date'}};
    const blocked=String(type?.name||'').match(/POSTPON|CANCEL|ABANDON|SUSPEND/i);
    if(blocked)return {...result,status:{POSTPON:'postponed',CANCEL:'cancelled',ABANDON:'abandoned',SUSPEND:'suspended'}[blocked[0].toUpperCase()],result:null};
    const completed=type?.completed===true&&type?.state==='post';
    if(f.status==='final'&&(!completed||Number(home.score)!==f.result.homeGoals||Number(away.score)!==f.result.awayGoals))return {...result,status:'source-status-conflict',result:null};
    if(completed&&f.status!=='final')return {...result,status:'source-final-awaiting-primary',result:null};
    if(!completed&&type?.state!=='pre')return {...result,status:'unverified-secondary-status',result:null};
    return result;
  });
}
function clubKickoffResolver() {
  const cache=new Map();
  return async(fixtures,teams)=>{
    const requests=new Map();
    for(const fixture of fixtures) {
      if(fixture.home.startsWith('NAT_')||fixture.away.startsWith('NAT_')||fixture.timezoneStatus==='explicit')continue;
      const league=fixtureLeague(fixture,teams),date=fixture.kickoffRaw?.slice(0,10);
      if(league&&/^\d{4}-\d{2}-\d{2}$/.test(date))requests.set(league+':'+date,{league,date});
    }
    if(!requests.size)return matchClubKickoffs(fixtures,[],teams,new Date().toISOString());
    const feeds=await Promise.all([...requests].map(async([key,{league,date}])=>{
      if(!cache.has(key)) {
        const url=`https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?dates=${date.replaceAll('-','')}`;
        cache.set(key,axios.get(url,{timeout:15000}).then(response=>({league,date,url,data:response.data})));
      }
      return cache.get(key);
    }));
    return matchClubKickoffs(fixtures,feeds,teams,new Date().toISOString());
  };
}
module.exports={clubKickoffResolver,matchClubKickoffs,fixtureLeague,supportedLeagues};
