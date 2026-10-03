const axios = require('axios');

async function testFetch() {
  try {
    const res = await axios.get('https://www.nosyapi.com/apiv2/service/bettable-matches/sporToto?apiKey=JVpXsaqNmtR2s2QamdkI7AMSKQ9IdvKBZ7XarlDqJuzWhCpJBAN4zLFNtnNB');
    console.log(JSON.stringify(res.data).substring(0, 500));
  } catch (err) {
    console.error(err.message);
  }
}
testFetch();
