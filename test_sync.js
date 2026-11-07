const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const axios=require('axios');
const {syncInto}=require('./auto_sync');
const {syncTransaction}=require('./sync_transaction');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'sportoto-sync-'));
const originalGet=axios.get,originalLog=console.log,originalError=console.error,originalKey=process.env.ODDS_API_KEY;
(async()=>{
  try {
    for(const file of ['data/sportoto_data.js','data/active_model.json','data/live.json','index.html','matches.txt']) {
      const target=path.join(root,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(file,target);
    }
    delete process.env.ODDS_API_KEY;
    let fail=false;
    axios.get=async url=>{
      if(url.includes('/GameRound?'))return {data:{object:[{id:99,name:'Test round',roundCloseDate:'2030-01-01T10:00:00Z'}]}};
      if(url.includes('/GetGameMatches/'))return {data:{object:Array.from({length:15},(_,i)=>({match:{id:'fixture-'+i,date:'2030-01-01T12:00:00Z',tournamentId:1,homeTeam:{name:'Galatasaray'},awayTeam:{name:'Fenerbahce'}}}))}};
      if(url.includes('/standings')) {
        if(fail)throw new Error('simulated source timeout');
        return {data:{season:{displayName:'test'},children:[{standings:{entries:['Galatasaray','Fenerbahce'].map(displayName=>({team:{displayName},stats:Object.entries({gamesPlayed:10,points:20,pointsFor:18,pointsAgainst:10,pointDifferential:8}).map(([name,value])=>({name,value}))}))}}]}};
      }
      throw new Error('Unexpected URL');
    };
    console.log=()=>{};console.error=()=>{};
    await syncTransaction(root,syncInto);
    const live=JSON.parse(fs.readFileSync(path.join(root,'data/live.json'),'utf8'));
    assert.equal(live.round.id,99);assert.equal(live.fixtures[0].providerId,'fixture-0');
    assert.equal(JSON.parse(fs.readFileSync(path.join(root,'data/health.json'),'utf8')).supportedFixtures,15);
    assert.equal(JSON.parse(fs.readFileSync(path.join(root,'data/evaluation/status.json'),'utf8')).captured,15);
    const files=['data/live.json','data/sportoto_data.js','matches.txt','index.html','data/evaluation/status.json'];
    const before=files.map(f=>fs.readFileSync(path.join(root,f),'utf8'));
    fail=true;await assert.rejects(syncTransaction(root,syncInto),/simulated source timeout/);
    assert.deepEqual(files.map(f=>fs.readFileSync(path.join(root,f),'utf8')),before);
  } finally {
    axios.get=originalGet;console.log=originalLog;console.error=originalError;
    if(originalKey===undefined)delete process.env.ODDS_API_KEY;else process.env.ODDS_API_KEY=originalKey;
    fs.rmSync(root,{recursive:true,force:true});
  }
  console.log('Passed: full mocked sync, staged imports/publication/records/health and provider-timeout preservation.');
})().catch(error=>{console.error(error);process.exitCode=1;});
