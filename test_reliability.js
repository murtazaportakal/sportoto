const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { PredictionEngine: engine } = require('./ml/prediction_engine');
const { SystemCouponGenerator: coupons } = require('./ml/system_coupon_generator');
assert.equal(engine.pickOutcome({win: .38, draw: .25, loss: .37}), '1');
assert.equal(engine.pickOutcome({win: .25, draw: .5, loss: .25}), 'X');
assert.equal(engine.pickOutcome({win: .3, draw: .3, loss: .4}), '2');
assert.equal(engine.pickOutcome({win: .4, draw: .2, loss: .4}), '1');
assert.throws(() => engine.pickOutcome({win: NaN, draw: .2, loss: .4}), /Invalid/);
assert.throws(() => engine.pickOutcome({win: .5, draw: .5, loss: .5}), /Invalid/);
const ticket = Array.from({length:15}, (_,id) => ({id, homeWin:'38', draw:'25', awayWin:'37'}));
assert.ok(coupons.generateCoupon(ticket, 0).ticketMatches.every(m => m.pick === '1'));
assert.throws(() => coupons.generateCoupon(ticket, 16), /Invalid/);
assert.equal(coupons.generateCoupon(ticket.map(p => ({...p, homeWin:'50'}))), null);
// Display rounding must never overturn the full-precision winner.
const rounded = ticket.map(p => ({...p, homeWin:'37.5', draw:'25.0', awayWin:'37.5', probabilities:{win:.3749, draw:.25, loss:.3751}}));
assert.ok(coupons.generateCoupon(rounded, 0).ticketMatches.every(m => m.pick === '2'));

const elements = new Map();
function element() { return {dataset:{}, style:{}, children:[], textContent:'', innerHTML:'', appendChild(c) {this.children.push(c);}}; }
const document = {head:element(), createElement:element, querySelectorAll:()=>[], addEventListener:(_,cb)=>cb(), getElementById(id) {if(!elements.has(id))elements.set(id,element()); return elements.get(id);}};
const context = vm.createContext({document, console, setTimeout:cb=>cb()});
for (const file of ['data/sportoto_data.js','data/historical_data.js','ml/feature_engineering.js','ml/h2h_engine.js','ml/split_stats_engine.js','ml/prediction_engine.js','ml/model_tuner.js','ml/system_coupon_generator.js']) vm.runInContext(fs.readFileSync(file,'utf8'),context);
vm.runInContext(fs.readFileSync('app.js','utf8').replace('  App.init();','  globalThis.app = App;'),context);
vm.runInContext(fs.readFileSync('ml/prediction_pipeline.js','utf8'),context);
context.active = require('./data/active_model.json').params;
vm.runInContext('app.currentParams = {...active}; app.runPredictions();',context);
const before = JSON.stringify(context.app.predictions);
const paramsBefore = JSON.stringify(context.app.currentParams);
const {TEAMS_DATA,FIXTURES_DATA} = require('./data/sportoto_data');
const {FeatureEngineering} = require('./ml/feature_engineering');
const vectors = FeatureEngineering.buildAllFeatureVectors(TEAMS_DATA,[]);
for (const [i,f] of FIXTURES_DATA.entries()) {
  if (!vectors[f.home] || !vectors[f.away]) {
    assert.equal(context.app.predictions[i].unavailable, true);
    assert.equal(context.app.predictions[i].probabilities, undefined);
    continue;
  }
  const expected = engine.predictMatchOutcome(vectors[f.home],vectors[f.away],FeatureEngineering,null,null,context.active);
  assert.equal(JSON.stringify(context.app.predictions[i].probabilities), JSON.stringify(expected));
  assert.equal(context.app.predictions[i].pick, engine.pickOutcome(expected));
}
// Keep numeric browser/Node parity coverage when every live fixture is unsupported.
context.controlledFixtures = FIXTURES_DATA.map((f,i) => ({...f,home:TEAMS_DATA[i % TEAMS_DATA.length].code,away:TEAMS_DATA[(i+1) % TEAMS_DATA.length].code}));
vm.runInContext('app.activeFixtures = controlledFixtures; app.runPredictions();',context);
for (const [i,f] of context.controlledFixtures.entries()) {
  const expected = engine.predictMatchOutcome(vectors[f.home],vectors[f.away],FeatureEngineering,null,null,context.active);
  assert.equal(JSON.stringify(context.app.predictions[i].probabilities),JSON.stringify(expected));
  assert.equal(context.app.predictions[i].pick,engine.pickOutcome(expected));
}
vm.runInContext('app.activeFixtures = FIXTURES_DATA; app.runPredictions();',context);
elements.get('btn-run-tuning').onclick();
assert.equal(JSON.stringify(context.app.currentParams),paramsBefore);
assert.equal(JSON.stringify(context.app.predictions),before);
assert.match(elements.get('optimized-acc').textContent, /%/);
console.log('Passed: probability validation, argmax/draw/tie/rounding rules, coupon constraints, real browser-module parity and diagnostic non-promotion.');

// Failed diagnostics must restore controls and preserve active predictions.
vm.runInContext('HISTORICAL_DATA.matches = [];', context);
elements.get('btn-run-tuning').onclick();
assert.equal(elements.get('btn-run-tuning').disabled, false);
assert.match(elements.get('btn-tuning-text').textContent, /Diagnostic failed/);
assert.equal(JSON.stringify(context.app.predictions),before);
assert.equal(JSON.stringify(context.app.currentParams),paramsBefore);
