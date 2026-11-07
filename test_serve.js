const assert=require('node:assert/strict');
const {createPreviewServer}=require('./serve');
const {embedBrowserModel}=require('./browser_model');
const server=createPreviewServer();
(async()=>{
  try {
    await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
    const url='http://127.0.0.1:'+server.address().port;
    const page=await fetch(url);assert.equal(page.status,200);assert.match(page.headers.get('content-type'),/text\/html/);
    const html=await page.text(),match=html.match(/<script type="application\/json" id="initial-model">([\s\S]*?)<\/script>/);
    assert.deepEqual(JSON.parse(match[1]),require('./data/live.json').model);
    const script=await fetch(url+'/app.js');assert.equal(script.status,200);assert.equal(script.headers.get('cache-control'),'no-store');
    for(const file of ['.git/config','data/evaluation/status.json','README.md'])assert.equal((await fetch(url+'/'+file)).status,404);
    assert.equal((await fetch(url+'/%zz')).status,400);
    assert.equal((await fetch(url,{method:'POST'})).status,405);
    assert.equal(await (await fetch(url,{method:'HEAD'})).text(),'');
    const escaped=embedBrowserModel('<script type="application/json" id="initial-model">{}</script>',{version:'</script><script>unexpected</script>'});
    assert.equal((escaped.match(/<\/script>/g)||[]).length,1);
    assert.throws(()=>embedBrowserModel('<html></html>',{}),/Missing saved-model marker/);
    console.log('Passed: one-command preview, published-model bootstrap, allowed browser assets, private-file exclusion, invalid URL/method handling and safe JSON embedding.');
  } finally {await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
