const fs = require('fs');
const path = require('path');
const { LiveData } = require('./live_data');
function publishLiveData(round, updatedAt = new Date().toISOString(), directory = path.join(__dirname, 'data')) {
  const source = path.join(directory, 'sportoto_data.js');
  delete require.cache[require.resolve(source)];
  const {TEAMS_DATA, FIXTURES_DATA} = require(source);
  const model = JSON.parse(fs.readFileSync(path.join(directory, 'active_model.json'), 'utf8'));
  const data = LiveData.validate({schemaVersion:1, updatedAt, round, teams:TEAMS_DATA, fixtures:FIXTURES_DATA, model});
  const target = path.join(directory, 'live.json');
  const temporary = target + '.tmp';
  fs.writeFileSync(temporary, JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(temporary, target);
  return data;
}
module.exports = { publishLiveData };
