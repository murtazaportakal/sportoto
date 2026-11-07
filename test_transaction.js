const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const {syncTransaction}=require('./sync_transaction');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'sportoto-transaction-'));
const write=(relative,value)=>{const file=path.join(root,relative);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,value);};
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');
(async()=>{
  try {
    write('data/live.json','old live');write('data/sportoto_data.js','old teams');write('index.html','old index');
    const update=async stage=>{
      fs.writeFileSync(path.join(stage,'data/live.json'),'new live');fs.writeFileSync(path.join(stage,'data/sportoto_data.js'),'new teams');
      fs.mkdirSync(path.join(stage,'data/evaluation'),{recursive:true});fs.writeFileSync(path.join(stage,'data/evaluation/new.json'),'new record');
    };
    await assert.rejects(syncTransaction(root,async stage=>{await update(stage);throw new Error('provider timeout');}),/provider timeout/);
    assert.equal(read('data/live.json'),'old live');assert.equal(read('data/sportoto_data.js'),'old teams');
    for(let failure=0;failure<4;failure++) {
      await assert.rejects(syncTransaction(root,update,{beforeReplace:(_,index)=>{if(index===failure)throw new Error('disk failure');}}),/disk failure/);
      assert.equal(read('data/live.json'),'old live');assert.equal(read('data/sportoto_data.js'),'old teams');
      assert.equal(fs.existsSync(path.join(root,'data/evaluation/new.json')),false);
    }
    await syncTransaction(root,async stage=>{
      await assert.rejects(syncTransaction(root,update),/Another sync/);await update(stage);
    });
    assert.equal(read('data/live.json'),'new live');assert.equal(read('data/evaluation/new.json'),'new record');
    // Simulate an interrupted commit owned by a terminated process.
    const {spawnSync}=require('node:child_process');
    const dead=spawnSync(process.execPath,['-e','process.stdout.write(String(process.pid))'],{encoding:'utf8'}).stdout;
    write('.sync-lock',dead);write('.sync-transaction/backup/data/live.json','recovered live');
    write('.sync-transaction/journal.json',JSON.stringify([{file:'data/live.json',existed:true}]));
    await assert.rejects(syncTransaction(root,async()=>{throw new Error('next provider failure');}),/next provider failure/);
    assert.equal(read('data/live.json'),'recovered live');
    console.log('Passed: staged provider failure, commit fault rollback, new-record rollback, concurrency lock and interrupted-commit recovery.');
  } finally {fs.rmSync(root,{recursive:true,force:true});}
})().catch(error=>{console.error(error);process.exitCode=1;});
