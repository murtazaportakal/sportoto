const assert=require('node:assert/strict');
const {releaseGate}=require('./release_gate');
const {healthReport}=require('./health_report');
const {LiveData}=require('./live_data');
const data=require('./data/live.json');
const {evaluateCoupon}=require('./ml/coupon_evaluation');
const ticket=Array.from({length:15},(_,i)=>({id:String(i),pick:i<4?'1-X':'1'})),outcomes=Object.fromEntries(ticket.map(m=>[m.id,'1']));
assert.deepEqual(evaluateCoupon(ticket,outcomes,5),{columns:16,covered:true,cost:80,declaredUnitPrice:5,returns:null});
assert.equal(evaluateCoupon(ticket,{...outcomes,'0':'2'}).covered,false);
assert.equal(evaluateCoupon(ticket,outcomes).cost,null);
assert.throws(()=>evaluateCoupon(ticket,{}),/Missing coupon/);
const evidence={evaluationType:'prospective-paired-live-models',modelFamily:'live-composite-v1',dataHash:'test-only-hash',candidateVersion:'test-candidate',incumbentVersion:'test-incumbent',rollbackVersion:'test-incumbent',identicalFixtureSet:true,
  candidate:{count:500,logLoss:.9,brierScore:.5,calibrationError:.02},incumbent:{count:500,logLoss:1,brierScore:.6,calibrationError:.03},baseline:{count:500,logLoss:1.1,brierScore:.7,calibrationError:.04},
  pairedIntervals:{incumbent:{upper:-.01,groups:20},baseline:{upper:-.02,groups:20}},byLeague:{test:{count:500}},leagueAndClassReview:'approved',independentTestReview:'approved'};
assert.equal(releaseGate(evidence).eligible,true);
for(const change of [{candidate:{...evidence.candidate,count:499}},{evaluationType:'chronological-results-only-research'},{pairedIntervals:{}},{byLeague:{test:{count:99}}},{candidate:{...evidence.candidate,brierScore:.7}},{leagueAndClassReview:'pending'},{identicalFixtureSet:false},{}]) {
  if(!Object.keys(change).length){assert.equal(releaseGate({}).eligible,false);continue;}
  assert.equal(releaseGate({...evidence,...change}).eligible,false);
}
const health=healthReport(data,null,[],data.updatedAt);
assert.equal(health.totalFixtures,15);assert.equal(health.supportedFixtures+health.missing.length,15);
assert.ok(healthReport(data,null,[],new Date(Date.parse(data.updatedAt)+49*3600000).toISOString()).warnings.includes('stale-snapshot'));
assert.ok(healthReport(data,null,[{status:'failed'}]).warnings.includes('optional-source-failure'));
const duplicate=structuredClone(data);duplicate.fixtures[1].providerId=duplicate.fixtures[0].providerId;
assert.throws(()=>LiveData.validate(duplicate),/Duplicate provider/);
const invalid=structuredClone(data);invalid.fixtures[0].status='final';invalid.fixtures[0].result={homeGoals:1,awayGoals:0,outcome:'2'};
assert.throws(()=>LiveData.validate(invalid),/Invalid final/);
console.log('Passed: fail-closed release thresholds, paired evidence, regression review, coverage/freshness health and provider identity/result contracts.');
