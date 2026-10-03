const axios = require('axios');

async function checkCors() {
  try {
    const res = await axios.options('https://www.nosyapi.com/apiv2/service/bettable-matches/sporToto?apiKey=JVpXsaqNmtR2s2QamdkI7AMSKQ9IdvKBZ7XarlDqJuzWhCpJBAN4zLFNtnNB');
    console.log("OPTIONS HEADERS:", res.headers);
  } catch (err) {
    if (err.response) {
      console.log("OPTIONS HEADERS (Error):", err.response.headers);
    } else {
      console.error(err.message);
    }
  }
}
checkCors();
