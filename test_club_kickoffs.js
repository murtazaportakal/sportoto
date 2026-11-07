const assert=require('node:assert/strict');
const {matchClubKickoffs,fixtureLeague,clubKickoffResolver}=require('./club_kickoffs');
const axios=require('axios');
const teams=[{code:'ARS',statsSource:{url:'https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings',providerTeamId:'1'}},{code:'CHE',statsSource:{url:'https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings',providerTeamId:'2'}}];
const fixture={providerId:'club-test',home:'ARS',away:'CHE',kickoffRaw:'2030-01-01T22:45:00',kickoff:null,timezoneStatus:'unverified',status:'unconfirmed',result:null};
const competition={id:'espn-test',date:'2030-01-01T19:45:00Z',timeValid:true,status:{type:{name:'STATUS_SCHEDULED',state:'pre',completed:false}},competitors:[{homeAway:'home',team:{id:'1',displayName:'Arsenal'}},{homeAway:'away',team:{id:'2',displayName:'Chelsea'}}]};
const feed={league:'eng.1',date:'2030-01-01',url:'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?dates=20300101',data:{leagues:[{slug:'eng.1'}],events:[{id:'event',competitions:[competition]}]}};
const at='2029-12-31T10:00:00Z';
const match=c=>matchClubKickoffs([fixture],[{...feed,data:{...feed.data,events:[{competitions:[c]}]}}],teams,at)[0];
assert.equal(match(competition).kickoff,'2030-01-01T19:45:00.000Z');assert.equal(match(competition).kickoffSource.league,'eng.1');
assert.equal(match({...competition,timeValid:false}).kickoff,null);
assert.equal(match({...competition,date:'2030-01-01T19:45:00'}).kickoff,null);
assert.equal(match({...competition,competitors:competition.competitors.map(c=>({...c,homeAway:c.homeAway==='home'?'away':'home'}))}).kickoff,null);
assert.equal(match({...competition,competitors:competition.competitors.map(c=>({...c,team:{...c.team,id:'wrong'}}))}).kickoff,null);
assert.equal(matchClubKickoffs([fixture],[{...feed,data:{...feed.data,events:[{competitions:[competition,competition]}]}}],teams,at)[0].kickoff,null);
assert.throws(()=>matchClubKickoffs([fixture],[{...feed,data:{...feed.data,leagues:[{slug:'ita.1'}]}}],teams,at),/mismatched/);
assert.equal(match({...competition,status:{type:{name:'STATUS_POSTPONED',state:'pre',completed:false}}}).status,'postponed');
const final={...competition,status:{type:{name:'STATUS_FULL_TIME',state:'post',completed:true}},competitors:competition.competitors.map((c,i)=>({...c,score:i?'1':'2'}))};
assert.equal(match(final).status,'source-final-awaiting-primary');
const done={...fixture,status:'final',result:{homeGoals:2,awayGoals:1,outcome:'1'}};
assert.equal(matchClubKickoffs([done],[{...feed,data:{...feed.data,events:[{competitions:[final]}]}}],teams,at)[0].status,'final');
assert.equal(matchClubKickoffs([{...done,result:{homeGoals:3,awayGoals:1,outcome:'1'}}],[{...feed,data:{...feed.data,events:[{competitions:[final]}]}}],teams,at)[0].status,'source-status-conflict');
assert.equal(fixtureLeague({...fixture,kickoffSource:{provider:'espn',league:'eng.1'}},[]),'eng.1');
const original=axios.get;let calls=0;
(async()=>{
  try {
    axios.get=async()=>{calls++;return {data:feed.data};};
    const resolve=clubKickoffResolver();await resolve([fixture],teams);await resolve([fixture],teams);assert.equal(calls,1);
    const explicit={...fixture,kickoff:'2030-01-01T19:45:00Z',timezoneStatus:'explicit'};await resolve([explicit],[]);assert.equal(calls,1);
    console.log('Passed: club league/provider identity matching, UTC/time-validity gates, ambiguity/reversal/conflict exclusion, final/postponement safeguards, retained league provenance and request deduplication.');
  } finally {axios.get=original;}
})().catch(error=>{console.error(error);process.exitCode=1;});
