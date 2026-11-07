const fs=require('node:fs'),path=require('node:path');
const {evaluateRecords}=require('./evaluate_records');
function evidenceStatus(directory=path.join(__dirname,'data','evaluation')) {
  const report=evaluateRecords(directory);
  const folder=path.join(directory,'forecasts');
  const forecasts=fs.existsSync(folder)?fs.readdirSync(folder).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(folder,f),'utf8'))):[];
  const readOptional=name=>{const file=path.join(directory,name);return fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):null;};
  const status=readOptional('status.json');
  const kickoffs=forecasts.map(f=>f.fixture?.kickoff).filter(value=>Number.isFinite(Date.parse(value))).sort((a,b)=>Date.parse(a)-Date.parse(b));
  return {schemaVersion:1,evaluationType:report.evaluationType,lastRecordingCheck:status?.checkedAt??null,
    capturedForecasts:report.totalForecasts,settledForecasts:report.evaluated,exclusions:report.excluded,
    capturedKickoffRange:{first:kickoffs[0]??null,last:kickoffs.at(-1)??null},
    progress:report.evidenceProgress,metrics:{accuracy:report.accuracy,logLoss:report.logLoss,brierScore:report.brierScore},
    release:report.release};
}
if(require.main===module)console.log(JSON.stringify(evidenceStatus(),null,2));
module.exports={evidenceStatus};
