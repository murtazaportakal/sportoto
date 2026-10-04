const axios = require('axios');

async function testESPN() {
  try {
    console.log("Fetching ESPN API...");
    const { data } = await axios.get('https://site.web.api.espn.com/apis/v2/sports/soccer/tur.1/standings');
    const standings = data.children[0].standings.entries;
    
    const teams = standings.map(s => {
      const team = s.team.displayName;
      const stats = s.stats;
      const getStat = (name) => stats.find(st => st.name === name)?.value || 0;
      
      return {
        team,
        points: getStat('points'),
        gamesPlayed: getStat('gamesPlayed'),
        wins: getStat('wins'),
        ties: getStat('ties'),
        losses: getStat('losses'),
        goalsFor: getStat('pointsFor'), // GF is pointsFor in some ESPN soccer APIs
        goalsAgainst: getStat('pointsAgainst'), // GA
        goalDifference: getStat('pointDifferential')
      };
    });
    
    console.log("Extracted teams:", teams.slice(0, 3));
  } catch (err) {
    console.error("Scraping failed:", err.message);
  }
}

testESPN();
