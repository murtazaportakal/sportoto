const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright-core');
const {FeatureEngineering}=require('./ml/feature_engineering');
const {PredictionEngine}=require('./ml/prediction_engine');
const root=path.resolve('_site'),base=require('./data/live.json');
const server=http.createServer((request,response)=>{
  const relative=decodeURIComponent(new URL(request.url,'http://localhost').pathname);
  const file=path.resolve(root,'.'+(relative==='/'?'/index.html':relative));
  if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){response.writeHead(404);response.end();return;}
  const type={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json'}[path.extname(file)]||'application/octet-stream';
  response.writeHead(200,{'Content-Type':type});fs.createReadStream(file).pipe(response);
});
(async()=>{
  let browser;
  try {
    await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
    const executablePath=[process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe','/usr/bin/google-chrome','/usr/bin/chromium'].find(p=>p&&fs.existsSync(p));
    if(!executablePath)throw new Error('Set CHROME_PATH to an installed Chrome/Chromium executable');
    browser=await chromium.launch({executablePath,headless:true});
    const page=await browser.newPage({viewport:{width:1365,height:900}}),errors=[];
    page.setDefaultTimeout(10000);
    page.on('pageerror',error=>errors.push(error.message));
    let payload=structuredClone(base),fail=false;
    await page.route('**/data/live.json?*',route=>fail?route.abort():route.fulfill({json:payload}));
    await page.route('https://fonts.googleapis.com/**',route=>route.abort());
    const url=`http://127.0.0.1:${server.address().port}`;
    await page.goto(url);
    await page.waitForFunction(()=>document.querySelectorAll('#sportoto-table-body tr').length===15);
    assert.match(await page.locator('#model-status').textContent(),new RegExp(base.model.version));
    const expectedSupported=base.fixtures.filter(f=>base.teams.some(t=>t.code===f.home)&&base.teams.some(t=>t.code===f.away)).length;
    assert.match(await page.locator('#prediction-coverage').textContent(),new RegExp(`${expectedSupported}/15`));
    if(expectedSupported<15)assert.match(await page.locator('#coupon-table-body').textContent(),/Coupon unavailable/);
    fs.mkdirSync('test-results',{recursive:true});
    await page.screenshot({path:'test-results/live-round.png',fullPage:true});
    payload=structuredClone(base);payload.updatedAt=new Date().toISOString();payload.model.params.homeAdvantageBoost=.01;
    payload.fixtures=payload.fixtures.map((f,i)=>({...f,home:payload.teams[i].code,away:payload.teams[i+1].code}));
    await page.reload();
    await page.waitForFunction(()=>document.querySelectorAll('#coupon-table-body tr').length===15);
    const vectors=FeatureEngineering.buildAllFeatureVectors(payload.teams,[]),f=payload.fixtures[0];
    const p=PredictionEngine.predictMatchOutcome(vectors[f.home],vectors[f.away],FeatureEngineering,null,null,payload.model.params);
    assert.equal((await page.locator('#sportoto-table-body tr').first().locator('td').nth(3).textContent()).trim(),(p.win*100).toFixed(1)+'%');
    await page.locator('#coupon-dc-selector [data-count="2"]').click();
    assert.equal((await page.locator('#coupon-stat-columns').textContent()).trim(),'4');
    const before=await page.locator('#sportoto-table-body').textContent();
    await page.locator('#btn-run-tuning').click();
    await page.waitForFunction(()=>!document.querySelector('#btn-run-tuning').disabled);
    assert.equal(await page.locator('#sportoto-table-body').textContent(),before);
    fail=true;
    await page.evaluate(()=>document.dispatchEvent(new Event('visibilitychange')));
    await page.waitForFunction(()=>document.querySelector('#data-freshness').textContent.includes('Refresh failed'));
    assert.equal(await page.locator('#sportoto-table-body').textContent(),before);
    await page.screenshot({path:'test-results/supported-round.png',fullPage:true});
    await page.reload();
    await page.waitForFunction(()=>document.querySelectorAll('#sportoto-table-body tr').length===15);
    assert.match(await page.locator('#data-freshness').textContent(),/freshness unverified/);
    assert.deepEqual(errors,[]);
    console.log('Passed: rendered Chrome loading, 15 rows, coverage, parameter loading, coupon controls, diagnostic non-promotion and refresh/startup failure states.');
  } finally {if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
