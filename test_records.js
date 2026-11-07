const assert=require('assert/strict'),fs=require('fs'),path=require('path'),os=require('os');
const {normalizeFixture}=require('./provider_fixture');
const {recordEvaluation,refreshRecordedResults,digest}=require('./evaluation_records');
const base=JSON.parse(fs.readFileSync('data/live.json','utf8'));
const now='2030-01-01T10:00:00Z';
const raw={match:{id:'stable-provider-id',date:'2030-01-01T15:00:00',tournamentId:70,homeTeam:{name:'Galatasaray'},awayTeam:{name:'Fenerbahce'},fullTimeWin:null,score:null}};
assert.equal(normalizeFixture(raw,1,1).kickoff,null);
const fixed=structuredClone(raw);fixed.match.date='2030-01-01T15:00:00+03:00';
assert.equal(normalizeFixture(fixed,1,1).kickoff,'2030-01-01T12:00:00.000Z');
const final=structuredClone(fixed);final.match.fullTimeWin=0;final.match.score={homeRegular:2,awayRegular:2};
assert.equal(normalizeFixture(final,1,1).result.outcome,'X');
final.match.fullTimeWin=1;assert.equal(normalizeFixture(final,1,1).result,null);
final.match.score={homeRegular:3,awayRegular:2};assert.equal(normalizeFixture(final,1,1).result.outcome,'1');
const sample=structuredClone(base);sample.updatedAt=now;sample.round.id=1;
sample.teams.forEach(t=>t.statsSource={...t.statsSource,fetchedAt:now});
sample.fixtures=sample.fixtures.map((f,i)=>({...f,home:sample.teams[2].code,away:sample.teams[3].code,providerId:'test-'+i,roundId:1,kickoff:'2030-01-01T12:00:00Z',kickoffRaw:'2030-01-01T12:00:00Z',status:'unconfirmed',result:null}));
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'sportoto-records-'));
(async()=>{
 try {
  assert.equal(recordEvaluation(sample,dir,now).captured,15);
  const forecastFiles=fs.readdirSync(path.join(dir,'forecasts'));
  const before=forecastFiles.map(f=>fs.readFileSync(path.join(dir,'forecasts',f),'utf8'));
  assert.equal(recordEvaluation(sample,dir,now).existing,15);
  sample.teams[0].eloRating+=500;
  recordEvaluation(sample,dir,now);
  assert.deepEqual(forecastFiles.map(f=>fs.readFileSync(path.join(dir,'forecasts',f),'utf8')),before);
  const forecast=JSON.parse(before[0]);const input=JSON.parse(fs.readFileSync(path.join(dir,'inputs',forecast.inputHash+'.json'),'utf8'));assert.equal(digest(input),forecast.inputHash);
  assert.equal(recordEvaluation(sample,dir,'2030-01-01T12:00:00Z').ineligible['not-before-kickoff'],15);
  const ambiguous=structuredClone(sample);ambiguous.fixtures.forEach(f=>f.kickoff=null);
  assert.ok(ambiguous.fixtures.every(f=>require('./evaluation_records').eligibility(f,ambiguous.teams,now,ambiguous.updatedAt)==='unverified-kickoff-timezone'));
  const stale=structuredClone(sample);stale.teams.forEach(t=>t.statsSource.fetchedAt='2029-12-01T00:00:00Z');
  assert.equal(recordEvaluation(stale,dir,now).ineligible['unverified-or-stale-team-input'],15);
  const result=structuredClone(final);result.match.id='test-0';
  let checks=0;
  const fetchRound=async round=>{assert.equal(round,1);checks++;return [result];};
  assert.equal((await refreshRecordedResults(fetchRound,2,dir,'2030-01-02T00:00:00Z')).added,1);
  assert.equal((await refreshRecordedResults(fetchRound,2,dir,'2030-01-02T01:00:00Z')).added,0);
  result.match.score={homeRegular:2,awayRegular:3};result.match.fullTimeWin=2;
  assert.equal((await refreshRecordedResults(fetchRound,2,dir,'2030-01-02T02:00:00Z')).added,1);
  assert.equal(fs.readdirSync(path.join(dir,'results')).length,2);
  assert.equal(checks,3);
  assert.deepEqual(forecastFiles.map(f=>fs.readFileSync(path.join(dir,'forecasts',f),'utf8')),before);
  // Settlement metrics and schedule/result changes never rewrite forecasts.
  const {recordSchedule,recordResult}=require('./evaluation_records');
  const {evaluateRecords}=require('./evaluate_records');
  const settledAt='2030-01-03T00:00:00Z';
  // An unknown kickoff observed before the forecast must not invalidate a later verified capture.
  const identity=digest({provider:'sportoto',id:'test-3'});
  const oldSchedule={provider:'sportoto',providerId:'test-3',roundId:1,home:sample.fixtures[3].home,away:sample.fixtures[3].away,kickoff:null,status:'unconfirmed',observedAt:'2030-01-01T09:00:00Z',revision:0};
  fs.writeFileSync(path.join(dir,'schedules',identity+'-00000000.json'),JSON.stringify(oldSchedule));
  for(const f of sample.fixtures) {
    const completed={...f,status:'final',result:{homeGoals:1,awayGoals:0,outcome:'1'}};
    recordSchedule(completed,dir,settledAt);recordResult(completed,dir,settledAt);
  }
  // The test-0 response above used different team names, so conservative identity review excludes it.
  const initial=evaluateRecords(dir);
  assert.equal(initial.evaluated,14);
  assert.ok(Number.isFinite(initial.logLoss));
  const f=sample.fixtures[1],homeWin={...f,status:'final',result:{homeGoals:1,awayGoals:0,outcome:'1'}};
  const beforeCorrection=initial.logLoss;
  recordResult({...homeWin,result:{homeGoals:0,awayGoals:1,outcome:'2'}},dir,'2030-01-03T01:00:00Z');
  recordResult(homeWin,dir,'2030-01-03T02:00:00Z');
  assert.equal(evaluateRecords(dir).logLoss,beforeCorrection,'A-B-A result revisions must restore latest outcome');
  recordSchedule({...homeWin,kickoff:'2030-01-02T12:00:00Z'},dir,'2030-01-03T03:00:00Z');
  assert.equal(evaluateRecords(dir).evaluated,13);
  recordSchedule({...sample.fixtures[2],status:'unconfirmed'},dir,'2030-01-03T03:00:00Z');
  assert.equal(evaluateRecords(dir).evaluated,12);
  const tamperFile=forecastFiles.find(file=>JSON.parse(fs.readFileSync(path.join(dir,'forecasts',file),'utf8')).providerId==='test-3');
  const tamperPath=path.join(dir,'forecasts',tamperFile),originalForecast=fs.readFileSync(tamperPath,'utf8');
  const tampered=JSON.parse(originalForecast);
  tampered.probabilities={win:.99,draw:.005,loss:.005};tampered.pick='1';
  fs.writeFileSync(tamperPath,JSON.stringify(tampered));
  assert.equal(evaluateRecords(dir).excluded['invalid-or-missing-artifact'],1,'Plausible altered probabilities must fail source replay');
  fs.writeFileSync(tamperPath,originalForecast);
  // Invalid observation times must fail closed, including existing malformed records.
  assert.throws(()=>recordSchedule(homeWin,dir,'invalid'),/Invalid observation time/);
  assert.throws(()=>recordResult(homeWin,dir,'invalid'),/Invalid observation time/);
  const mutateLatest=(kind,id,change)=>{
    const folder=path.join(dir,kind);
    const records=fs.readdirSync(folder).map(file=>({file,value:JSON.parse(fs.readFileSync(path.join(folder,file),'utf8'))}))
      .filter(entry=>entry.value.providerId===id).sort((a,b)=>b.value.revision-a.value.revision);
    const entry=records[0],original=JSON.stringify(entry.value);
    Object.assign(entry.value,change);
    fs.writeFileSync(path.join(folder,entry.file),JSON.stringify(entry.value));
    try {
      const report=evaluateRecords(dir);
      assert.equal(report.evaluated,11);
      return report;
    } finally {fs.writeFileSync(path.join(folder,entry.file),original);}
  };
  for(const observedAt of ['invalid',null,'2030-01-01T12:00:00Z']) {
    assert.equal(mutateLatest('results','test-3',{observedAt}).excluded['result-cutoff-mismatch'],1);
    assert.equal(mutateLatest('schedules','test-3',{observedAt}).excluded['invalid-final-confirmation-time'],1);
  }
  assert.equal(evaluateRecords(dir).evaluated,12);
  assert.deepEqual(forecastFiles.map(f=>fs.readFileSync(path.join(dir,'forecasts',f),'utf8')),before);
  console.log('Passed: explicit timezone normalization, cutoff/staleness gates, immutable forecasts, input hashes, retries, past-round collection and append-only corrections.');
 } finally {
  // Delete only enumerated files within this uniquely created test directory.
  for(const e of fs.readdirSync(dir,{withFileTypes:true})) {
   const p=path.join(dir,e.name);
   if(e.isDirectory()){for(const f of fs.readdirSync(p))fs.unlinkSync(path.join(p,f));fs.rmdirSync(p);}else fs.unlinkSync(p);
  }
  fs.rmdirSync(dir);
 }
})().catch(e=>{console.error(e);process.exitCode=1;});

