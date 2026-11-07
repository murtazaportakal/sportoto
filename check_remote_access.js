const {spawnSync}=require('node:child_process');
const axios=require('axios');
async function githubClient() {
  let token=process.env.GITHUB_TOKEN||process.env.GH_TOKEN;
  if(!token) {
    const credentials=spawnSync('git',['credential','fill'],{input:'protocol=https\nhost=github.com\n\n',encoding:'utf8',timeout:15000,env:{...process.env,GIT_TERMINAL_PROMPT:'0',GCM_INTERACTIVE:'never'}});
    if(credentials.status===0)token=credentials.stdout.split(/\r?\n/).find(line=>line.startsWith('password='))?.slice(9);
  }
  const client=axios.create({baseURL:'https://api.github.com',timeout:15000,headers:{Accept:'application/vnd.github+json',...(token?{Authorization:'Bearer '+token}:{})}});
  return {client,authenticated:Boolean(token)};
}
async function check() {
  const {client,authenticated}=await githubClient(),repository='murtazaportakal/sportoto';
  const repo=await client.get('/repos/'+repository);
  const details={repository,authenticated,permissions:repo.data.permissions||null,defaultBranch:repo.data.default_branch,pagesEnabled:repo.data.has_pages};
  for(const [key,url] of [['pages','/pages'],['runs','/actions/runs?per_page=3']]) {
    try {
      const response=await client.get('/repos/'+repository+url);
      details[key]=key==='pages'?{status:response.data.status,url:response.data.html_url,buildType:response.data.build_type,source:response.data.source}:response.data.workflow_runs.map(r=>({id:r.id,name:r.name,status:r.status,conclusion:r.conclusion,url:r.html_url,sha:r.head_sha}));
    } catch(error){details[key]={status:error.response?.status||error.code};}
  }
  return details;
}
if(require.main===module)check().then(value=>console.log(JSON.stringify(value,null,2))).catch(error=>{console.error('GitHub access check failed:',error.response?.status||error.code);process.exitCode=1;});
module.exports={githubClient,check};
