const axios = require('axios');

async function testFetch() {
  const apiKey = "JVpXsaqNmtR2s2QamdkI7AMSKQ9IdvKBZ7XarlDqJuzWhCpJBAN4zLFNtnNB";
  try {
    // Try header
    const res = await axios.get('https://www.nosyapi.com/apiv2/service/bettable-matches/sporToto', {
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'apikey': apiKey
      },
      params: {
        apiKey: apiKey
      }
    });
    console.log("Success!", JSON.stringify(res.data).substring(0, 200));
  } catch (err) {
    console.error("Failed:", err.response ? err.response.status + ' ' + err.response.statusText : err.message);
  }
}
testFetch();
