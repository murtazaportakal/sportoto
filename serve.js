const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const {embedBrowserModel}=require('./browser_model');
function createPreviewServer(root=__dirname) {
  root=path.resolve(root);
  return http.createServer((request,response)=>{
    if(!['GET','HEAD'].includes(request.method)){response.writeHead(405,{Allow:'GET, HEAD'});response.end();return;}
    let relative;
    try{relative=decodeURIComponent(new URL(request.url,'http://localhost').pathname).replace(/^\/+/, '')||'index.html';}
    catch{response.writeHead(400);response.end();return;}
    try {
      const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
      const allowed=new Set(['index.html','index.css','data/live.json','data/active_model.json',...Array.from(html.matchAll(/<script src="([^"]+)"/g),match=>match[1])]);
      const file=path.resolve(root,relative);
      if(!allowed.has(relative)||!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){response.writeHead(404);response.end();return;}
      const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
      const body=relative==='index.html'?embedBrowserModel(html,JSON.parse(fs.readFileSync(path.join(root,'data','live.json'),'utf8')).model):fs.readFileSync(file);
      response.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
      response.end(request.method==='HEAD'?undefined:body);
    } catch {response.writeHead(503);response.end('Preview files are temporarily unavailable. Try refreshing.');}
  });
}
if(require.main===module) {
  const port=Number(process.env.PORT||3000);
  if(!Number.isInteger(port)||port<1||port>65535)throw new Error('PORT must be between 1 and 65535');
  const server=createPreviewServer();
  server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Port '+port+' is in use. Stop the other server or choose another PORT.':error.message);process.exitCode=1;});
  server.listen(port,'127.0.0.1',()=>console.log('Sportoto is ready at http://localhost:'+port+'\nPress Ctrl+C to stop.'));
}
module.exports={createPreviewServer};
