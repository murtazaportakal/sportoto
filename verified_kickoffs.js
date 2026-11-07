const axios=require('axios');
const {nationalCode}=require('./national_teams');
function seasonYear(date) {
  const year=Number(date.slice(0,4))-(Number(date.slice(5,7))<7?1:0);
  return year-year%2+1;
}
function matchKickoffs(fixtures,matches,fetchedAt) {
  if(!Array.isArray(matches)||!matches.length)throw new Error('Missing UEFA fixture feed');
  if(!Number.isFinite(Date.parse(fetchedAt)))throw new Error('Invalid UEFA retrieval time');
  return fixtures.map(f=>{
    if(!f.home.startsWith('NAT_')||!f.away.startsWith('NAT_'))return f;
    const candidates=matches.filter(m=>String(m.competition?.id)==='2014'&&m.homeTeam?.typeIsNational===true&&m.awayTeam?.typeIsNational===true&&
      'NAT_'+m.homeTeam.teamCode===f.home&&'NAT_'+m.awayTeam.teamCode===f.away&&
      nationalCode(m.homeTeam.internationalName)===f.home&&nationalCode(m.awayTeam.internationalName)===f.away&&
      m.kickOffTime?.dateTime?.slice(0,10)===f.kickoffRaw?.slice(0,10)&&String(m.seasonYear)===String(seasonYear(f.kickoffRaw)));
    if(candidates.length!==1)return {...f,kickoff:null,timezoneStatus:candidates.length?'ambiguous-secondary-fixture':'unmatched-secondary-fixture'};
    const m=candidates[0],raw=m.kickOffTime.dateTime;
    if(!/(?:Z|[+-]\d\d:\d\d)$/.test(raw)||!Number.isFinite(Date.parse(raw)))return {...f,kickoff:null,timezoneStatus:'invalid-secondary-timezone'};
    const kickoff=new Date(raw).toISOString();
    if(f.kickoff&&Date.parse(f.kickoff)!==Date.parse(kickoff))return {...f,kickoff:null,timezoneStatus:'conflicting-explicit-kickoffs'};
    const result={...f,kickoff,timezoneStatus:'independently-matched-utc',kickoffSource:{provider:'uefa',matchId:String(m.id),url:'https://match.uefa.com/v5/matches/'+m.id,fetchedAt,matchingPolicy:'unique national identities, home/away, competition, season and calendar date',rawKickoff:raw,status:m.status}};
    if(['POSTPONED','CANCELLED','CANCELED','ABANDONED','SUSPENDED'].includes(m.status))return {...result,status:m.status.toLowerCase(),result:null};
    if(f.status==='final'&&m.status!=='FINISHED')return {...result,status:'source-status-conflict',result:null};
    if(m.status==='FINISHED'&&f.status!=='final')return {...result,status:'source-final-awaiting-primary',result:null};
    if(!['UPCOMING','FINISHED'].includes(m.status))return {...result,status:'unverified-secondary-status',result:null};
    return result;
  });
}
function kickoffResolver() {
  const cache=new Map();
  const resolveClubs=require('./club_kickoffs').clubKickoffResolver();
  return async(fixtures,teams=[])=>{
    const seasons=[...new Set(fixtures.filter(f=>f.home.startsWith('NAT_')&&f.away.startsWith('NAT_')&&f.kickoffRaw).map(f=>seasonYear(f.kickoffRaw)))];
    if(!seasons.length)return resolveClubs(fixtures,teams);
    const records=[];
    for(const season of seasons) {
      if(!cache.has(season)) {
        const url=`https://match.uefa.com/v5/matches?competitionId=2014&seasonYear=${season}&offset=0&limit=500`;
        const response=await axios.get(url,{timeout:15000});
        if(!Array.isArray(response.data)||response.data.length>=500)throw new Error('Invalid or potentially truncated UEFA fixture feed');
        cache.set(season,response.data);
      }
      records.push(...cache.get(season));
    }
    return resolveClubs(matchKickoffs(fixtures,records,new Date().toISOString()),teams);
  };
}
module.exports={matchKickoffs,kickoffResolver,seasonYear};
