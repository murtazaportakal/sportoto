/**
 * Weekly Sportoto ML Predictions App
 * Handles UI logic and runs the prediction engine on the Sportoto fixtures.
 */

document.addEventListener('DOMContentLoaded', () => {
  const App = {
    featureVectors: {},
    predictions: [],

    async init() {
      this.setupAnimations();
      
      const loadingText = document.getElementById('loading-text');
      const progressBar = document.getElementById('loading-progress-bar');
      
      progressBar.style.width = '30%';
      loadingText.textContent = "Fetching Live Fixtures...";
      await this.fetchLiveFixtures();

      progressBar.style.width = '60%';
      loadingText.textContent = "Fetching Live Team Stats...";
      await this.fetchLiveStats();

      progressBar.style.width = '90%';
      loadingText.textContent = "Calculating ML Predictions...";
      
      setTimeout(() => {
        progressBar.style.width = '100%';
        document.getElementById('loading-overlay').style.opacity = '0';
        setTimeout(() => {
          document.getElementById('loading-overlay').style.display = 'none';
          this.runPredictions();
        }, 500);
      }, 500);
    },

    setupAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      // Observe all elements with .animate-in
      setTimeout(() => {
        document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
      }, 100);
    },

    async fetchLiveFixtures() {
      const apiKey = "JVpXsaqNmtR2s2QamdkI7AMSKQ9IdvKBZ7XarlDqJuzWhCpJBAN4zLFNtnNB";
      const apiUrl = `https://www.nosyapi.com/apiv2/service/bettable-matches/sporToto?apiKey=${apiKey}`;
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;
      
      try {
        const response = await fetch(proxyUrl);
        if (response.ok) {
          const data = await response.json();
          const matches = data.data || data;
          if (matches && matches.length > 0) {
            this.mapApiDataToFixtures(matches);
            return;
          }
        }
      } catch (err) {
        console.warn("Could not fetch live fixtures from NosyAPI. Falling back to local dataset.", err);
      }
      // If failed, use local FIXTURES_DATA
      this.activeFixtures = FIXTURES_DATA;
    },

    mapApiDataToFixtures(matches) {
      const teamMap = {
        'galatasaray': 'GAL', 'fenerbahçe': 'FEN', 'fenerbahce': 'FEN', 'beşiktaş': 'BJK', 'besiktas': 'BJK',
        'trabzonspor': 'TRA', 'başakşehir': 'IBFK', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
        'antalyaspor': 'ANT', 'kasımpaşa': 'KAS', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
        'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON', 'ankaragücü': 'ANK', 'ankaragucu': 'ANK',
        'hatayspor': 'HAT', 'fatih karagümrük': 'FKG', 'karagümrük': 'FKG', 'gaziantep': 'GAZ',
        'samsunspor': 'SAM', 'rizespor': 'RIZ', 'pendikspor': 'PEN', 'istanbulspor': 'IST', 'göztepe': 'GOZ',
        'real madrid': 'RMA', 'barcelona': 'BAR', 'manchester city': 'MCI', 'man city': 'MCI', 
        'arsenal': 'ARS', 'liverpool': 'LIV', 'bayern münih': 'BAY', 'bayern': 'BAY', 
        'inter': 'INT', 'milan': 'MIL', 'ac milan': 'MIL', 'juventus': 'JUV'
      };

      function getCode(name) {
        const clean = name.trim().toLowerCase();
        for (const [key, code] of Object.entries(teamMap)) {
          if (clean.includes(key)) return code;
        }
        return "UNKNOWN"; 
      }

      const parsedFixtures = [];
      let idCounter = 1;
      
      for (const match of matches) {
         const homeRaw = match.homeTeam || match.home || match.Team1 || "";
         const awayRaw = match.awayTeam || match.away || match.Team2 || "";
         if (!homeRaw || !awayRaw) continue;
         parsedFixtures.push({ id: idCounter++, home: getCode(homeRaw), away: getCode(awayRaw) });
      }
      
      this.activeFixtures = parsedFixtures.slice(0, 15);
      if (this.activeFixtures.length === 0) this.activeFixtures = FIXTURES_DATA;
    },


    async fetchLiveStats() {
      console.log("Fetching live team stats from ESPN API...");
      const leagues = ['tur.1', 'eng.1', 'esp.1', 'ger.1', 'ita.1'];
      
      const espnTeamMap = {
        'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
        'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
        'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
        'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON', 
        'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'fatih karagumruk': 'FKG', 
        'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ', 
        'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
        'amed sfk': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ',
        'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum fk': 'COR',
        'real madrid': 'RMA', 'barcelona': 'BAR', 'villarreal': 'VIL',
        'manchester city': 'MCI', 'arsenal': 'ARS', 'liverpool': 'LIV', 'manchester united': 'MUN', 'tottenham': 'TOT',
        'bayern munich': 'BAY', 'rb leipzig': 'RBL', 'eintracht frankfurt': 'EIN', 'augsburg': 'AUG',
        'inter milan': 'INT', 'ac milan': 'MIL', 'juventus': 'JUV', 'roma': 'ROM', 'como': 'COM'
      };

      function getCode(name) {
        const clean = name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        for (const [key, code] of Object.entries(espnTeamMap)) {
          if (clean.includes(key)) return code;
        }
        return null; 
      }

      try {
        for (const league of leagues) {
          const response = await fetch(`https://site.web.api.espn.com/apis/v2/sports/soccer/${league}/standings`);
          if (!response.ok) continue;
          const data = await response.json();
          const standings = data.children[0].standings.entries;
          
          for (const s of standings) {
            const teamName = s.team.displayName;
            const code = getCode(teamName);
            if (!code) continue;

            const stats = s.stats;
            const getStat = (name) => stats.find(st => st.name === name)?.value || 0;
            
            const points = getStat('points');
            const gamesPlayed = getStat('gamesPlayed') || 1;
            const goalsFor = getStat('pointsFor');
            const goalsAgainst = getStat('pointsAgainst');
            const gd = getStat('pointDifferential');
            
            const leagueBoost = league === 'tur.1' ? 0 : 200; 
            const newElo = 1350 + (points * 12) + (gd * 5) + leagueBoost; 
            const gfPerGame = (goalsFor / gamesPlayed).toFixed(2);
            const gaPerGame = (goalsAgainst / gamesPlayed).toFixed(2);

            // Dynamically update TEAMS_DATA in memory before predictions
            const teamIndex = TEAMS_DATA.findIndex(t => t.code === code);
            if (teamIndex !== -1) {
              TEAMS_DATA[teamIndex].eloRating = newElo;
              TEAMS_DATA[teamIndex].recentForm.goalsFor = parseFloat(gfPerGame);
              TEAMS_DATA[teamIndex].recentForm.goalsAgainst = parseFloat(gaPerGame);
            }
          }
        }
        console.log("Dynamically updated TEAMS_DATA from ESPN API");
      } catch (err) {
        console.warn("Could not fetch live stats.", err);
      }
    },

    runPredictions() {
      // 1. Build Feature Vectors
      // Pass empty groups since it's a domestic league
      this.featureVectors = FeatureEngineering.buildAllFeatureVectors(TEAMS_DATA, []);
      
      // 2. Calculate match probabilities for each fixture
      const fixturesToUse = this.activeFixtures || FIXTURES_DATA;
      
      this.predictions = fixturesToUse.map(fixture => {
        const homeTeam = TEAMS_DATA.find(t => t.code === fixture.home);
        const awayTeam = TEAMS_DATA.find(t => t.code === fixture.away);
        
        if (!homeTeam || !awayTeam) return null;
        
        const homeFeatures = this.featureVectors[homeTeam.code];
        const awayFeatures = this.featureVectors[awayTeam.code];
        
        // Use PredictionEngine
        const outcome = PredictionEngine.predictMatchOutcome(homeFeatures, awayFeatures, FeatureEngineering);
        
        // Add home advantage boost dynamically for this specific match context
        // This is a simple adjustment to emphasize home advantage in Sportoto
        let homeProb = outcome.win + (homeTeam.homeAdvantage * 0.05);
        let drawProb = outcome.draw;
        let awayProb = outcome.loss - (homeTeam.homeAdvantage * 0.05);
        
        // Normalize back to 1.0
        const total = homeProb + drawProb + awayProb;
        homeProb /= total;
        drawProb /= total;
        awayProb /= total;

        return {
          id: fixture.id,
          homeTeam: homeTeam.name,
          awayTeam: awayTeam.name,
          homeWin: (homeProb * 100).toFixed(1),
          draw: (drawProb * 100).toFixed(1),
          awayWin: (awayProb * 100).toFixed(1)
        };
      }).filter(p => p !== null);

      this.renderTicket();
    },

    renderTicket() {
      const tbody = document.getElementById('sportoto-table-body');
      tbody.innerHTML = '';
      
      this.predictions.forEach((pred, index) => {
        const tr = document.createElement('tr');
        
        // Determine recommended pick
        let recommended = '1';
        let maxProb = parseFloat(pred.homeWin);
        
        if (parseFloat(pred.draw) > maxProb) {
          recommended = 'X';
          maxProb = parseFloat(pred.draw);
        }
        if (parseFloat(pred.awayWin) > maxProb) {
          recommended = '2';
          maxProb = parseFloat(pred.awayWin);
        }
        
        // Sometimes if probs are very close, it might be a double chance (e.g. 1X)
        // We'll just provide the single best pick for simplicity but with a styled badge
        
        tr.innerHTML = `
          <td>${pred.id}</td>
          <td style="font-weight: 600;">${pred.homeTeam}</td>
          <td style="font-weight: 600;">${pred.awayTeam}</td>
          <td class="${recommended === '1' ? 'highlight-cell' : ''}">${pred.homeWin}%</td>
          <td class="${recommended === 'X' ? 'highlight-cell' : ''}">${pred.draw}%</td>
          <td class="${recommended === '2' ? 'highlight-cell' : ''}">${pred.awayWin}%</td>
          <td>
            <span class="pick-badge">${recommended}</span>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }
  };

  // Setup simple styling for highlighted cells and badges
  const style = document.createElement('style');
  style.textContent = `
    .highlight-cell {
      background: rgba(33, 150, 243, 0.15);
      color: #64B5F6;
      font-weight: bold;
    }
    .pick-badge {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: linear-gradient(135deg, #1e88e5, #1565c0);
      color: white;
      border-radius: 4px;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

  App.init();
});
