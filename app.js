/**
 * Weekly Sportoto ML Predictions App
 * Handles UI logic and runs the prediction engine on the Sportoto fixtures.
 */

document.addEventListener('DOMContentLoaded', () => {
  const App = {
    featureVectors: {},
    predictions: [],

    init() {
      this.simulateLoading();
    },

    simulateLoading() {
      const progressBar = document.getElementById('loading-progress-bar');
      const loadingText = document.getElementById('loading-text');
      let progress = 0;
      
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        
        if (progress > 30 && progress < 60) loadingText.textContent = "Building feature vectors...";
        if (progress >= 60 && progress < 90) loadingText.textContent = "Calculating match probabilities...";
        if (progress >= 90) loadingText.textContent = "Finalizing predictions...";
        
        if (progress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.getElementById('loading-overlay').style.opacity = '0';
            setTimeout(() => {
              document.getElementById('loading-overlay').style.display = 'none';
              this.runPredictions();
            }, 500);
          }, 400);
        }
      }, 200);
    },

    runPredictions() {
      // 1. Build Feature Vectors
      // Pass empty groups since it's a domestic league
      this.featureVectors = FeatureEngineering.buildAllFeatureVectors(TEAMS_DATA, []);
      
      // 2. Calculate match probabilities for each fixture
      this.predictions = FIXTURES_DATA.map(fixture => {
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
