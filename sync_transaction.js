const fs = require('node:fs');
const path = require('node:path');

const outputs = ['data/sportoto_data.js', 'data/tuning_report.json', 'matches.txt', 'index.html', 'data/evaluation', 'data/health.json', 'data/live.json'];
function within(root, relative) {
  const target = path.resolve(root, relative);
  if (!target.startsWith(path.resolve(root) + path.sep)) throw new Error('Unsafe transaction path');
  return target;
}
function files(root, entries) {
  return entries.flatMap(entry => {
    const file = within(root, entry);
    if (!fs.existsSync(file)) return [];
    if (fs.lstatSync(file).isSymbolicLink()) throw new Error('Symlink in sync outputs');
    return fs.statSync(file).isDirectory()
      ? files(root, fs.readdirSync(file).map(name => path.join(entry, name))) : [entry];
  });
}
function copy(source, target) {
  fs.mkdirSync(path.dirname(target), {recursive:true});
  fs.copyFileSync(source, target);
}
function replace(source, target) {
  const temp = target + '.sync-tmp';
  copy(source, temp);
  fs.renameSync(temp, target);
}
function restore(root, transaction, manifest) {
  for (const entry of [...manifest].reverse()) {
    const target = within(root, entry.file);
    if (entry.existed) replace(within(path.join(transaction, 'backup'), entry.file), target);
    else if (fs.existsSync(target)) fs.unlinkSync(target);
    if (fs.existsSync(target + '.sync-tmp')) fs.unlinkSync(target + '.sync-tmp');
  }
}
async function syncTransaction(root, task, {beforeReplace = () => {}} = {}) {
  root = path.resolve(root);
  const transaction = within(root, '.sync-transaction');
  const lock = within(root, '.sync-lock');
  if (fs.existsSync(lock)) {
    const pid = Number(fs.readFileSync(lock, 'utf8'));
    if (!Number.isInteger(pid) || pid <= 0) throw new Error('Invalid sync lock; inspect before recovery');
    let running = true;
    try {process.kill(pid, 0);} catch (error) {if (error.code === 'ESRCH') running = false; else throw error;}
    if (running) throw new Error('Another sync is running');
    const journal = path.join(transaction, 'journal.json');
    if (fs.existsSync(journal)) restore(root, transaction, JSON.parse(fs.readFileSync(journal, 'utf8')));
    if (fs.existsSync(transaction)) fs.rmSync(transaction, {recursive:true});
    fs.unlinkSync(lock);
  }
  fs.writeFileSync(lock, String(process.pid), {flag:'wx'});
  let manifest,owned=false;
  try {
    // No provider operation writes into the published workspace.
    if (fs.existsSync(transaction)) throw new Error('Unowned transaction directory; inspect before recovery');
    owned=true;
    const stage = path.join(transaction, 'stage');
    for (const file of files(root, [...outputs, 'data/active_model.json', 'data/prospective_experiment.json'])) copy(within(root,file),within(stage,file));
    const result = await task(stage);
    const staged = files(stage, outputs).sort((a,b) => Number(a.replaceAll('\\','/') === 'data/live.json') - Number(b.replaceAll('\\','/') === 'data/live.json') || a.localeCompare(b));
    manifest = staged.map(file => ({file,existed:fs.existsSync(within(root,file))}));
    for (const entry of manifest) if (entry.existed) copy(within(root,entry.file),within(path.join(transaction,'backup'),entry.file));
    fs.writeFileSync(path.join(transaction,'journal.json'),JSON.stringify(manifest));
    for (const [index,entry] of manifest.entries()) {
      beforeReplace(entry.file,index);
      replace(within(stage,entry.file),within(root,entry.file));
    }
    fs.unlinkSync(path.join(transaction,'journal.json'));
    return result;
  } catch (error) {
    if (manifest && fs.existsSync(path.join(transaction,'journal.json'))) {
      try {restore(root,transaction,manifest);} catch (rollbackError) {
        throw new AggregateError([error,rollbackError],'Sync and rollback failed; retain journal for recovery');
      }
      fs.unlinkSync(path.join(transaction,'journal.json'));
    }
    throw error;
  } finally {
    // A failed rollback retains both lock and journal for the next process.
    if (!fs.existsSync(path.join(transaction,'journal.json'))) {
      if (owned && fs.existsSync(transaction)) fs.rmSync(transaction,{recursive:true});
      fs.unlinkSync(lock);
    }
  }
}
module.exports = {syncTransaction};
