const fs = require('fs');
const path = require('path');
const { LiveData } = require('./live_data');
const dataset=LiveData.validate(JSON.parse(fs.readFileSync('data/live.json', 'utf8')));
const output=path.resolve(__dirname,'_site');
if(output!==path.join(path.resolve(__dirname),'_site'))throw new Error('Unsafe build output');
if(fs.existsSync(output))fs.rmSync(output,{recursive:true});
const files = ['index.html', 'index.css', 'data/live.json', 'data/active_model.json'];
for (const match of fs.readFileSync('index.html', 'utf8').matchAll(/<script src="([^"]+)"/g)) files.push(match[1]);
for (const file of new Set(files)) {
  const target = path.resolve(output, file);
  if(!target.startsWith(output+path.sep))throw new Error('Unsafe browser asset path');
  fs.mkdirSync(path.dirname(target), {recursive:true});
  if(file==='index.html')fs.writeFileSync(target,require('./browser_model').embedBrowserModel(fs.readFileSync(file,'utf8'),dataset.model));
  else fs.copyFileSync(file, target);
}
console.log('Packaged browser assets in _site');
