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
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const response = await fetch(proxyUrl, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (response.ok) {
          const data = await response.json();
          const matches = data.data || data;
          if (matches && matches.length > 0) {
            this.mapApiDataToFixtures(matches);
            return;
          }
        }
      } catch (err) {
        console.warn("Live API unavailable. Falling back to local updated dataset.", err.message);
      }
      // Fall back to local fixtures
      this.activeFixtures = FIXTURES_DATA;
    },

    mapApiDataToFixtures(matches) {
      const teamMap = {
        // Turkish Super Lig & 1. Lig
        'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
        'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
        'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
        'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON',
        'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'karagumruk': 'FKG',
        'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ',
        'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
        'amed': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ',
        'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum': 'COR',

        // European
        'everton': 'EVE', 'chelsea': 'CHE', 'brentford': 'BRE',
        'liverpool': 'LIV', 'manchester city': 'MCI', 'man city': 'MCI',
        'arsenal': 'ARS', 'manchester united': 'MUN', 'tottenham': 'TOT',
        'real betis': 'BET', 'betis': 'BET', 'barcelona': 'BAR',
        'real madrid': 'RMA', 'sevilla': 'SEV', 'villarreal': 'VIL',
        'milan': 'MIL', 'atalanta': 'ATA', 'juventus': 'JUV',
        'lazio': 'LAZ', 'inter': 'INT', 'roma': 'ROM', 'como': 'COM',
        'bayern': 'BAY', 'leipzig': 'RBL', 'frankfurt': 'EIN', 'augsburg': 'AUG',
        'dortmund': 'BVB', 'borussia dortmund': 'BVB',
        'monaco': 'ASM', 'as monaco': 'ASM',
        'lille': 'LIL',
        'paris': 'PSG', 'psg': 'PSG',
        'lyon': 'LYO', 'olympique lyon': 'LYO',
        'napoli': 'NAP'
      };

      function normalizeName(name) {
        return name
          .trim()
          .toLowerCase()
          .replace(/ı/g, 'i')
          .replace(/İ/g, 'i')
          .replace(/ğ/g, 'g')
          .replace(/ü/g, 'u')
          .replace(/ş/g, 's')
          .replace(/ö/g, 'o')
          .replace(/ç/g, 'c')
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
      }

      function getCode(name) {
        const clean = normalizeName(name);
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
      const leagues = ['tur.1', 'eng.1', 'esp.1', 'ger.1', 'ita.1', 'fra.1'];
      
      const espnTeamMap = {
        // Turkish
        'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
        'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
        'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
        'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON', 
        'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'fatih karagumruk': 'FKG', 
        'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ', 
        'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
        'amed sfk': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ',
        'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum fk': 'COR',
        
        // European
        'real madrid': 'RMA', 'barcelona': 'BAR', 'villarreal': 'VIL',
        'manchester city': 'MCI', 'arsenal': 'ARS', 'liverpool': 'LIV', 'manchester united': 'MUN', 'tottenham': 'TOT',
        'bayern munich': 'BAY', 'rb leipzig': 'RBL', 'eintracht frankfurt': 'EIN', 'augsburg': 'AUG',
        'inter milan': 'INT', 'ac milan': 'MIL', 'juventus': 'JUV', 'roma': 'ROM', 'como': 'COM',
        'everton': 'EVE', 'chelsea': 'CHE', 'brentford': 'BRE',
        'real betis': 'BET', 'sevilla': 'SEV', 'atalanta': 'ATA', 'lazio': 'LAZ',
        'borussia dortmund': 'BVB', 'dortmund': 'BVB',
        'monaco': 'ASM', 'as monaco': 'ASM',
        'lille': 'LIL',
        'paris saint-germain': 'PSG', 'paris sg': 'PSG', 'psg': 'PSG',
        'lyon': 'LYO', 'olympique lyon': 'LYO',
        'napoli': 'NAP'
      };

      function normalizeName(name) {
        return name
          .trim()
          .toLowerCase()
          .replace(/ı/g, 'i')
          .replace(/İ/g, 'i')
          .replace(/ğ/g, 'g')
          .replace(/ü/g, 'u')
          .replace(/ş/g, 's')
          .replace(/ö/g, 'o')
          .replace(/ç/g, 'c')
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
      }

      function getCode(name) {
        const clean = normalizeName(name);
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

    currentParams: {
      sigmoidScale: 3.5,
      drawBase: 0.30,
      drawGapThreshold: 4.0,
      homeAdvantageBoost: 0.07
    },

    couponConfig: {
      doubleChanceCount: 4,
      strategy: 'draw_protection'
    },

    runPredictions() {
      const heroTeamsEl = document.getElementById('hero-teams');
      if (heroTeamsEl) heroTeamsEl.textContent = TEAMS_DATA.length;

      // 1. Build Feature Vectors
      this.featureVectors = FeatureEngineering.buildAllFeatureVectors(TEAMS_DATA, []);
      
      // 2. Calculate match probabilities using current tuned parameters
      const fixturesToUse = this.activeFixtures || FIXTURES_DATA;
      
      this.predictions = fixturesToUse.map(fixture => {
        const homeTeam = TEAMS_DATA.find(t => t.code === fixture.home);
        const awayTeam = TEAMS_DATA.find(t => t.code === fixture.away);
        
        if (!homeTeam || !awayTeam) return null;
        
        const homeFeatures = this.featureVectors[homeTeam.code];
        const awayFeatures = this.featureVectors[awayTeam.code];
        
        const differential = FeatureEngineering.calculateMatchDifferential(homeFeatures, awayFeatures);
        const rawWinProb = PredictionEngine.sigmoid(differential * this.currentParams.sigmoidScale);
        const strengthGap = Math.abs(differential);
        const drawBase = this.currentParams.drawBase * Math.exp(-strengthGap * 3.5);

        let winRaw = rawWinProb * (1 - drawBase);
        let lossRaw = (1 - rawWinProb) * (1 - drawBase);

        // Apply Home Advantage Boost dynamically
        const homeBoost = (homeTeam.homeAdvantage || 0.8) * this.currentParams.homeAdvantageBoost;
        winRaw += homeBoost;
        lossRaw = Math.max(0.05, lossRaw - homeBoost);

        const total = winRaw + drawBase + lossRaw;
        const homeProb = winRaw / total;
        const drawProb = drawBase / total;
        const awayProb = lossRaw / total;

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
      this.renderSystemCoupon();
      this.setupCouponControls();
      this.setupTuningControls();
    },

    renderTicket() {
      const tbody = document.getElementById('sportoto-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';
      
      this.predictions.forEach((pred) => {
        const tr = document.createElement('tr');
        
        const hWin = parseFloat(pred.homeWin);
        const aWin = parseFloat(pred.awayWin);
        const winGap = Math.abs(hWin - aWin);

        // Determine recommended pick using tuned Competitive Equilibrium
        let recommended = '1';
        if (winGap <= this.currentParams.drawGapThreshold) {
          recommended = 'X';
        } else if (aWin > hWin) {
          recommended = '2';
        } else {
          recommended = '1';
        }
        
        tr.innerHTML = `
          <td>${pred.id}</td>
          <td style="font-weight: 600;">${pred.homeTeam}</td>
          <td style="font-weight: 600;">${pred.awayTeam}</td>
          <td class="${recommended === '1' ? 'highlight-cell' : ''}">${pred.homeWin}%</td>
          <td class="${recommended === 'X' ? 'highlight-cell highlight-draw' : ''}">${pred.draw}%</td>
          <td class="${recommended === '2' ? 'highlight-cell' : ''}">${pred.awayWin}%</td>
          <td>
            <span class="pick-badge ${recommended === 'X' ? 'badge-draw' : ''}">${recommended}</span>
          </td>
        `;
        tbody.appendChild(tr);
      });
    },

    renderSystemCoupon() {
      if (typeof SystemCouponGenerator === 'undefined') return;

      const coupon = SystemCouponGenerator.generateCoupon(
        this.predictions,
        this.couponConfig.doubleChanceCount,
        this.couponConfig.strategy
      );

      if (!coupon) return;

      // Update stat cards
      const colEl = document.getElementById('coupon-stat-columns');
      const costEl = document.getElementById('coupon-stat-cost');
      const bankoEl = document.getElementById('coupon-stat-bankos');
      const doubleEl = document.getElementById('coupon-stat-doubles');

      if (colEl) colEl.textContent = coupon.totalColumns;
      if (costEl) costEl.textContent = `${coupon.totalCostTL} ₺`;
      if (bankoEl) bankoEl.textContent = 15 - coupon.doubleChanceCount;
      if (doubleEl) doubleEl.textContent = coupon.doubleChanceCount;

      // Render table
      const tbody = document.getElementById('coupon-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';

      coupon.ticketMatches.forEach(m => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${m.id}</td>
          <td style="font-weight: 600;">${m.homeTeam}</td>
          <td style="font-weight: 600;">${m.awayTeam}</td>
          <td>${m.homeWin}%</td>
          <td>${m.draw}%</td>
          <td>${m.awayWin}%</td>
          <td>
            <span class="pick-badge ${m.isDouble ? 'badge-double' : (m.pick === 'X' ? 'badge-draw' : 'badge-banko')}">${m.pick}</span>
          </td>
          <td>
            <span class="${m.isDouble ? 'tag-double' : 'tag-banko'}">${m.isDouble ? 'Çifte Şans' : 'Banko Tek'}</span>
          </td>
        `;
        tbody.appendChild(tr);
      });
    },

    setupCouponControls() {
      // Double Chance Count Selector
      const dcButtons = document.querySelectorAll('#coupon-dc-selector .btn-chip');
      dcButtons.forEach(btn => {
        btn.onclick = () => {
          dcButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.couponConfig.doubleChanceCount = parseInt(btn.dataset.count);
          this.renderSystemCoupon();
        };
      });

      // Strategy Selector
      const stratButtons = document.querySelectorAll('#coupon-strategy-selector .btn-chip');
      stratButtons.forEach(btn => {
        btn.onclick = () => {
          stratButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.couponConfig.strategy = btn.dataset.strategy;
          this.renderSystemCoupon();
        };
      });
    },

    setupTuningControls() {
      const btnTune = document.getElementById('btn-run-tuning');
      if (!btnTune || btnTune.dataset.bound) return;
      btnTune.dataset.bound = "true";

      btnTune.onclick = () => {
        const btnText = document.getElementById('btn-tuning-text');
        if (btnText) btnText.textContent = "Optimizing Across 680 Matches...";
        btnTune.disabled = true;

        setTimeout(() => {
          if (typeof ModelTuner !== 'undefined' && typeof HISTORICAL_DATA !== 'undefined') {
            const report = ModelTuner.tune(
              HISTORICAL_DATA.matches,
              TEAMS_DATA,
              FeatureEngineering,
              PredictionEngine
            );

            // Update UI
            const optAccEl = document.getElementById('optimized-acc');
            const optBrierEl = document.getElementById('optimized-brier');
            const optBadgeEl = document.getElementById('tuning-improvement-badge');
            const optParamsEl = document.getElementById('optimized-params');

            if (optAccEl) optAccEl.textContent = `${report.optimized.overallAccuracy}%`;
            if (optBrierEl) optBrierEl.textContent = report.optimized.brierScore;
            if (optBadgeEl) optBadgeEl.textContent = `+${report.improvementPct}% Accuracy`;
            if (optParamsEl) {
              optParamsEl.innerHTML = `
                Sigmoid: ${report.bestParams.sigmoidScale} • Draw Base: ${report.bestParams.drawBase}<br>
                Gap Threshold: ${report.bestParams.drawGapThreshold}% • Home Boost: ${report.bestParams.homeAdvantageBoost * 100}%
              `;
            }

            // Apply tuned parameters to live model
            this.currentParams = report.bestParams;
            this.runPredictions();

            if (btnText) btnText.textContent = "✅ Model Tuned & Applied!";
            setTimeout(() => {
              if (btnText) btnText.textContent = "Re-Calibrate & Tune Model";
              btnTune.disabled = false;
            }, 3000);
          }
        }, 400);
      };
    }
  };

  // Setup styling for highlighted cells, badges, and chips
  const style = document.createElement('style');
  style.textContent = `
    .highlight-cell {
      background: rgba(33, 150, 243, 0.15);
      color: #64B5F6;
      font-weight: bold;
    }
    .highlight-cell.highlight-draw {
      background: rgba(245, 158, 11, 0.18);
      color: #FBBF24;
      font-weight: bold;
    }
    .pick-badge {
      display: inline-block;
      min-width: 28px;
      height: 28px;
      line-height: 28px;
      padding: 0 6px;
      text-align: center;
      background: linear-gradient(135deg, #1e88e5, #1565c0);
      color: white;
      border-radius: 4px;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .pick-badge.badge-draw {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);
    }
    .pick-badge.badge-double {
      background: linear-gradient(135deg, #8b5cf6, #ec4899);
      box-shadow: 0 2px 6px rgba(139, 92, 246, 0.3);
    }
    .pick-badge.badge-banko {
      background: rgba(255, 255, 255, 0.08);
      color: #93c5fd;
      border: 1px solid rgba(255, 255, 255, 0.12);
    }
    .tag-banko {
      color: #10b981;
      font-size: 0.75rem;
      font-weight: 600;
      background: rgba(16, 185, 129, 0.12);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      border: 1px solid rgba(16, 185, 129, 0.25);
    }
    .tag-double {
      color: #a78bfa;
      font-size: 0.75rem;
      font-weight: 600;
      background: rgba(167, 139, 250, 0.12);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      border: 1px solid rgba(167, 139, 250, 0.25);
    }
    .btn-chip {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
      color: var(--text-secondary);
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-chip:hover {
      background: rgba(255, 255, 255, 0.09);
      color: var(--text-primary);
      border-color: rgba(255, 255, 255, 0.15);
    }
    .btn-chip.active {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #ffffff;
      border-color: transparent;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.35);
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);

  App.init();
});
