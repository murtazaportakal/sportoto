const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { FeatureEngineering } = require('./ml/feature_engineering');
const { PredictionEngine } = require('./ml/prediction_engine');
const { ModelTuner } = require('./ml/model_tuner');
const { TEAMS_DATA, FIXTURES_DATA } = require('./data/sportoto_data');
const { getCode } = require('./auto_sync');
assert.equal(FIXTURES_DATA.length, 15);
assert.equal(new Set(FIXTURES_DATA.map(f => f.id)).size, 15);
assert.equal(getCode('Aston Villa'), 'AVL');
assert.equal(getCode('Inter Milan'), 'INT');
assert.equal(getCode('Erzurumspor FK'), 'ERZ');
assert.equal(getCode('Vfb Stuttgart'), 'VFB');
assert.equal(getCode('Unlisted Team'), null);
assert.deepEqual(PredictionEngine.params, require('./data/active_model.json').params);
const vectors = FeatureEngineering.buildAllFeatureVectors(TEAMS_DATA, []);
const supported = FIXTURES_DATA.filter(f => vectors[f.home] && vectors[f.away]);
for (const fixture of FIXTURES_DATA) {
  assert.ok(fixture.homeName && fixture.awayName);
  if (!supported.includes(fixture)) continue;
  const p = PredictionEngine.predictMatchOutcome(vectors[fixture.home], vectors[fixture.away], FeatureEngineering);
  assert.ok([p.win, p.draw, p.loss].every(v => Number.isFinite(v) && v >= 0 && v <= 1));
  assert.ok(Math.abs(p.win + p.draw + p.loss - 1) < 1e-12);
}
const fixture = {home: TEAMS_DATA[0].code, away: TEAMS_DATA[1].code};
const p = PredictionEngine.predictMatchOutcome(vectors[fixture.home], vectors[fixture.away], FeatureEngineering);
const report = ModelTuner.evaluate([{homeCode: fixture.home, awayCode: fixture.away, actualOutcome: '1'}], TEAMS_DATA, FeatureEngineering, PredictionEngine, PredictionEngine.params);
assert.equal(report.logLoss, Number((-Math.log(p.win)).toFixed(4)));
const elements = new Map();
const element = () => ({children: [], style: {}, appendChild(child) { this.children.push(child); }, textContent: '', innerHTML: ''});
const document = {
  addEventListener(event, callback) { callback(); }, createElement: element, head: element(),
  getElementById(id) { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); }
};
const context = vm.createContext({document, console, TEAMS_DATA, FIXTURES_DATA, FeatureEngineering, PredictionEngine, PredictionPipeline:require('./ml/prediction_pipeline').PredictionPipeline});
vm.runInContext(fs.readFileSync('ml/system_coupon_generator.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('app.js', 'utf8').replace('  App.init();', '  globalThis.testApp = App;'), context);
const app = context.testApp;
app.setupCouponControls = () => {};
app.setupTuningControls = () => {};
app.runPredictions();
assert.equal(app.predictions.length, 15);
assert.equal(elements.get('sportoto-table-body').children.length, 15);
assert.equal(app.predictions.filter(p => p.unavailable).length, 15 - supported.length);
for (const [i, f] of FIXTURES_DATA.entries()) {
  if (supported.includes(f)) continue;
  assert.equal(app.predictions[i].unavailable, true);
  assert.equal(app.predictions[i].homeTeam, f.homeName);
  assert.equal(app.predictions[i].awayTeam, f.awayName);
  assert.equal(app.predictions[i].probabilities, undefined);
}
assert.equal(Boolean(vm.runInContext('SystemCouponGenerator.generateCoupon(testApp.predictions)', context)), supported.length === 15);
// Exercise a complete ticket even during international or unsupported rounds.
const estimatedTeam = TEAMS_DATA.find(t => t.dataQuality?.estimatedFields?.length);
assert.ok(estimatedTeam);
const controlledFixtures = FIXTURES_DATA.map((f, i) => ({...f,
  home: estimatedTeam.code, away: TEAMS_DATA.filter(t => t.code !== estimatedTeam.code)[i % (TEAMS_DATA.length - 1)].code}));
app.activeFixtures = controlledFixtures;
elements.get('sportoto-table-body').children = [];
app.runPredictions();
assert.equal(app.predictions.filter(p => p.unavailable).length, 0);
assert.ok(vm.runInContext('SystemCouponGenerator.generateCoupon(testApp.predictions)', context));
assert.ok(app.predictions.some(p => p.usesEstimatedInputs));
// Unknown future teams remain visible and must block coupon generation.
app.activeFixtures = controlledFixtures.map((f, i) => i ? f : {...f, home: 'UNLISTED'});
elements.get('sportoto-table-body').children = [];
app.runPredictions();
assert.equal(app.predictions.length, 15);
assert.equal(app.predictions[0].unavailable, true);
assert.equal(elements.get('sportoto-table-body').children.length, 15);
assert.match(elements.get('coupon-table-body').innerHTML, /Coupon unavailable/);
assert.equal(vm.runInContext('SystemCouponGenerator.generateCoupon(testApp.predictions)', context), null);
context.fullTicket = Array.from({length: 15}, (_, i) => ({id: i + 1, homeWin: '50', draw: '25', awayWin: '25'}));
assert.ok(vm.runInContext('SystemCouponGenerator.generateCoupon(fullTicket)', context));
assert.equal(vm.runInContext('SystemCouponGenerator.generateCoupon(fullTicket.slice(1))', context), null);
console.log(`Passed: live coverage ${supported.length}/15; controlled full-ticket predictions, mapping, tuning parity and missing-team coupon guards.`);

// Regression: newly mapped teams acquire sourced stats and labelled priors.
const { applyStandings } = require('./auto_stats_update');
const sample = structuredClone(TEAMS_DATA.filter(t => t.code !== 'AVL'));
const sampleEntry = {team: {displayName: 'Aston Villa'}, stats: Object.entries({gamesPlayed: 10, points: 15, pointsFor: 20, pointsAgainst: 10, pointDifferential: 10}).map(([name, value]) => ({name, value}))};
const payload = {season: {displayName: 'test season'}, children: [{standings: {entries: [sampleEntry]}}]};
assert.equal(applyStandings(sample, payload, 'eng.1', 'test timestamp'), 1);
const added = sample.find(t => t.code === 'AVL');
assert.equal(added.recentForm.goalsFor, 2);
assert.equal(added.statsSource.gamesPlayed, 10);
assert.ok(added.dataQuality.estimatedFields.includes('squadDepth'));
applyStandings(sample, payload, 'eng.1', 'next timestamp');
assert.equal(sample.filter(t => t.code === 'AVL').length, 1);
assert.throws(() => applyStandings(sample, {}, 'eng.1', 'test timestamp'), /No standings/);
console.log('Passed: new-team import, provenance, baseline labels, repeat refresh and empty-response guard.');
