const fs=require('node:fs');
const axios=require('axios');
const {chromium}=require('playwright-core');
const {githubClient}=require('./check_remote_access');
const {digest}=require('./evaluation_records');
function verifySyncChecks(jobs) {
  const required=['Validate updated data','Package and smoke-test browser assets','Publish refreshed site'];
  const job=jobs.find(j=>j.name==='sync'&&j.status==='completed'&&j.conclusion==='success');
  if(!job)throw new Error('Successful sync job required');
  const checks=Object.fromEntries(required.map(name=>[name,job.steps.some(step=>step.name===name&&step.status==='completed'&&step.conclusion==='success')]));
  if(Object.values(checks).some(passed=>!passed))throw new Error('Sync validation, browser checks and deployment must all succeed');
  return checks;
}
async function verifyDeployment() {
  const {client}=await githubClient(),repository='murtazaportakal/sportoto';
  const pages=(await client.get('/repos/'+repository+'/pages')).data;
  const url=pages.html_url;
  const runs=(await client.get('/repos/'+repository+'/actions/runs?per_page=20')).data.workflow_runs;
  const find=name=>runs.find(r=>r.name===name&&r.status==='completed'&&r.conclusion==='success');
  const ci=find('Reliability checks'),sync=find('Spor Toto Auto-Sync');
  if(!ci||!sync)throw new Error('Successful CI and sync runs required');
  // Scheduled runs include their own tests. Their commit can differ from the last push CI.
  const jobs=(await client.get('/repos/'+repository+'/actions/runs/'+sync.id+'/jobs')).data.jobs;
  const syncChecks=verifySyncChecks(jobs);
  const hosted=(await axios.get(new URL('data/live.json?t='+Date.now(),url).href,{timeout:20000})).data;
  const saved=(await client.get('/repos/'+repository+'/contents/data/live.json')).data;
  const committed=JSON.parse(Buffer.from(saved.content,'base64').toString('utf8'));
  if(digest(hosted)!==digest(committed))throw new Error('Hosted snapshot differs from latest repository data');
  const {LiveData}=require('./live_data');LiveData.validate(hosted);
  if(LiveData.freshness(hosted.updatedAt)!=='fresh')throw new Error('Hosted snapshot is stale');
  const statusFile=(await client.get('/repos/'+repository+'/contents/data/evaluation/status.json')).data;
  const recording=JSON.parse(Buffer.from(statusFile.content,'base64').toString('utf8'));
  const executablePath=[process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe','/usr/bin/google-chrome','/usr/bin/chromium'].find(p=>p&&fs.existsSync(p));
  if(!executablePath)throw new Error('Installed Chrome required');
  const browser=await chromium.launch({executablePath,headless:true});
  let rows,coverage,modelStatus,freshness;
  try {
    const page=await browser.newPage({viewport:{width:1365,height:900}}),errors=[];
    const loaded=page.waitForResponse(response=>new URL(response.url()).pathname.endsWith('/data/live.json')&&response.ok(),{timeout:20000});
    page.on('pageerror',error=>errors.push(error.message));
    const [browserResponse]=await Promise.all([loaded,page.goto(url,{waitUntil:'domcontentloaded',timeout:30000})]);
    await page.waitForFunction(()=>document.querySelectorAll('#sportoto-table-body tr').length===15,{},{timeout:20000});
    if(digest(await browserResponse.json())!==digest(hosted))throw new Error('Browser did not load the verified snapshot');
    rows=await page.locator('#sportoto-table-body tr').count();
    coverage=await page.locator('#prediction-coverage').textContent();modelStatus=await page.locator('#model-status').textContent();freshness=await page.locator('#data-freshness').textContent();
    if(errors.length)throw new Error('Hosted browser errors: '+errors.join('; '));
    if(!modelStatus.includes(hosted.model.version)||!freshness.includes('Last synced:'))throw new Error('Hosted snapshot/model failed to load');
    fs.mkdirSync('test-results',{recursive:true});await page.screenshot({path:'test-results/hosted-site.png',fullPage:true});
  } finally {await browser.close();}
  const evidence={verifiedAt:new Date().toISOString(),url,pagesBuildType:pages.build_type,sourceCommit:sync.head_sha,
    ci:{id:ci.id,url:ci.html_url,conclusion:ci.conclusion,sourceCommit:ci.head_sha},sync:{id:sync.id,url:sync.html_url,conclusion:sync.conclusion,sourceCommit:sync.head_sha,checks:syncChecks},
    snapshotHash:digest(hosted),snapshotMatchesRepository:true,updatedAt:hosted.updatedAt,modelVersion:hosted.model.version,rows,coverage,modelStatus,freshness,
    recording:{captured:recording.captured,existing:recording.existing,ineligible:recording.ineligible},predictiveValidation:'pending-settled-prospective-evidence'};
  fs.writeFileSync('data/remote_release.json',JSON.stringify(evidence,null,2)+'\n');return evidence;
}
if(require.main===module)verifyDeployment().then(result=>console.log(JSON.stringify(result,null,2))).catch(error=>{console.error('Deployment verification failed:',error.response?.status||error.message);process.exitCode=1;});
module.exports={verifyDeployment,verifySyncChecks};
