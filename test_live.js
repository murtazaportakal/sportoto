const assert = require('node:assert/strict');
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const os = require('os');
const {LiveData} = require('./live_data');
const data = JSON.parse(fs.readFileSync('data/live.json', 'utf8'));
LiveData.validate(data);
assert.equal(LiveData.freshness(data.updatedAt, Date.parse(data.updatedAt) + 91 * 60000), 'stale');
assert.equal(LiveData.freshness(data.updatedAt, Date.parse(data.updatedAt) + 60000), 'fresh');
assert.throws(() => LiveData.validate({...data, fixtures:data.fixtures.slice(1)}));
assert.throws(() => LiveData.validate({...data, teams:[...data.teams,data.teams[0]]}));
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'sportoto-live-'));
try {
  fs.copyFileSync('data/sportoto_data.js',path.join(temp,'sportoto_data.js'));
  fs.copyFileSync('data/active_model.json',path.join(temp,'active_model.json'));
  const {publishLiveData} = require('./publish_live_data');
  publishLiveData(data.round, data.updatedAt, temp);
  const before=fs.readFileSync(path.join(temp,'live.json'),'utf8');
  fs.writeFileSync(path.join(temp,'active_model.json'),'{}');
  assert.throws(()=>publishLiveData(data.round, data.updatedAt, temp));
  assert.equal(fs.readFileSync(path.join(temp,'live.json'),'utf8'),before);
} finally {
  // Only files created in the unique test directory are removed.
  for(const file of fs.readdirSync(temp)) fs.unlinkSync(path.join(temp,file));
  fs.rmdirSync(temp);
}
(async () => {
  const elements=new Map();
  const element=()=>({children:[],style:{},dataset:{},appendChild(c){this.children.push(c);},textContent:'',innerHTML:''});
  const events={}; let interval; let fetchCount=0; let payload=data; let fail=false;
  const document={hidden:false,head:element(),createElement:element,querySelector:()=>element(),querySelectorAll:()=>[],getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id);},addEventListener(name,cb){if(name==='DOMContentLoaded') cb();else events[name]=cb;}};
  const context=vm.createContext({document,console:{warn(){}},AbortSignal,setInterval(cb,ms){assert.equal(ms,300000);interval=cb;},setTimeout:cb=>cb(),fetch:async (url,options)=>{fetchCount++;assert.match(url,/data\/live.json\?t=/);assert.equal(options.cache,'no-store');if(fail)throw new Error('offline');return {ok:true,json:async()=>structuredClone(payload)};}});
  for(const match of fs.readFileSync('index.html','utf8').matchAll(/<script src="([^"]+)"/g)) {
    const source=fs.readFileSync(match[1],'utf8').replace('  App.init();','  globalThis.app = App;');
    vm.runInContext(source,context);
  }
  const app=context.app;
  await app.fetchLiveFixtures();
  app.runPredictions();
  assert.equal(app.predictions.length,15);
  assert.equal(app.updatedAt,data.updatedAt);
  payload={...data,updatedAt:new Date(Date.parse(data.updatedAt)+1000).toISOString(),teams:structuredClone(data.teams)};
  payload.teams[0].eloRating+=100;
  await app.refreshLiveData();
  assert.equal(app.activeTeams[0].eloRating,payload.teams[0].eloRating);
  const saved=JSON.stringify(app.activeTeams);
  payload={...data,fixtures:[]};await app.refreshLiveData();
  assert.equal(JSON.stringify(app.activeTeams),saved);
  fail=true;await app.refreshLiveData();
  assert.match(elements.get('data-freshness').textContent,/Refresh failed/);
  assert.equal(JSON.stringify(app.activeTeams),saved);
  fail=false;payload=data;await app.refreshLiveData();
  assert.equal(JSON.stringify(app.activeTeams),saved,'Older data cannot replace newer data');
  document.hidden=true;const calls=fetchCount;interval();assert.equal(fetchCount,calls);
  document.hidden=false;events.visibilitychange();await Promise.resolve();await Promise.resolve();
  assert.ok(fetchCount>calls);
  console.log('Passed: live schema, freshness, publication failure preserves last snapshot, startup load, updates, offline/invalid/older fallback and visibility refresh.');
})().catch(e=>{console.error(e);process.exitCode=1;});
