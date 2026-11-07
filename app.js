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
      loadingText.textContent = "Loading synced fixtures...";
      await this.fetchLiveFixtures();

      progressBar.style.width = '60%';
      loadingText.textContent = "Loading synced team stats...";
      // Team statistics are refreshed by the scheduled sync.

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
      this.activeTeams = TEAMS_DATA;
      this.activeFixtures = FIXTURES_DATA;
      await this.refreshLiveData(false);
      this.refreshTimer = setInterval(() => {
        if (!document.hidden) this.refreshLiveData();
      }, 5 * 60 * 1000);
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) this.refreshLiveData();
      });
    },

    async refreshLiveData(render = true) {
      if (this.refreshing) return;
      this.refreshing = true;
      try {
        const response = await fetch('data/live.json?t=' + Date.now(), {cache: 'no-store', signal: AbortSignal.timeout(10000)});
        if (!response.ok) throw new Error('Data update unavailable');
        const data = LiveData.validate(await response.json());
        if (this.updatedAt && Date.parse(data.updatedAt) < Date.parse(this.updatedAt)) throw new Error('Older update ignored');
        // Commit one validated fixture/statistics/model snapshot together.
        this.activeTeams = data.teams;
        this.activeFixtures = data.fixtures;
        this.currentParams = {...data.model.params};
        this.modelVersion = data.model.version;
        this.updatedAt = data.updatedAt;
        this.refreshError = false;
        const badge = document.querySelector('#predictions .section-tag');
        if (badge) badge.textContent = data.round.name;
        if (render) this.runPredictions();
      } catch (error) {
        this.refreshError = true;
        console.warn('Keeping last available dataset:', error.message);
      } finally {
        this.refreshing = false;
        this.renderFreshness();
      }
    },

    renderFreshness() {
      const status = document.getElementById('data-freshness');
      if (!status) return;
      if (!this.updatedAt) {
        status.textContent = 'Update unavailable. Showing bundled data; freshness unverified.';
        return;
      }
      const stale = LiveData.freshness(this.updatedAt) === 'stale';
      status.textContent = (this.refreshError ? 'Refresh failed; showing last successful update. ' : '') +
        (stale ? 'Data may be stale. ' : '') + 'Last synced: ' + new Date(this.updatedAt).toLocaleString() +
        '. Automatically checks every 5 minutes. Source statistics may be older.';
    },

    currentParams: { ...PredictionEngine.params },

    couponConfig: {
      doubleChanceCount: 4,
      strategy: 'draw_protection'
    },

    runPredictions() {
      const teams = this.activeTeams || TEAMS_DATA;
      const modelStatus = document.getElementById('model-status');
      if(modelStatus)modelStatus.textContent = 'Model: ' + (this.modelVersion || 'bundled baseline (version unverified)') + '. Predictive validation pending.';
      const heroTeamsEl = document.getElementById('hero-teams');
      if (heroTeamsEl) heroTeamsEl.textContent = teams.length;

      // 1. Build Feature Vectors
      this.featureVectors = FeatureEngineering.buildAllFeatureVectors(teams, []);

      // Historical context is disabled until time-aware evaluation validates it.
      const h2hMap = null;
      const splitStats = null;

      // 3. Calculate match probabilities using current tuned parameters
      const fixturesToUse = this.activeFixtures || FIXTURES_DATA;
      
      this.predictions = fixturesToUse.map(fixture => {
        const homeTeam = teams.find(t => t.code === fixture.home);
        const awayTeam = teams.find(t => t.code === fixture.away);
        
        if (!homeTeam || !awayTeam) return { id: fixture.id, unavailable: true, homeTeam: fixture.homeName || fixture.home, awayTeam: fixture.awayName || fixture.away };
        
        const homeFeatures = this.featureVectors[homeTeam.code];
        const awayFeatures = this.featureVectors[awayTeam.code];

        const outcome = PredictionPipeline.predict({fixture, vectors:this.featureVectors, params:this.currentParams, asOf:this.updatedAt || new Date().toISOString()}, FeatureEngineering, PredictionEngine).probabilities;
        const { win: homeProb, draw: drawProb, loss: awayProb, differential } = outcome;

        // H2H summary for display
        const h2hSummary = (h2hMap && typeof H2HEngine !== 'undefined')
          ? H2HEngine.getH2HSummary(h2hMap, homeTeam.code, awayTeam.code, homeTeam.name, awayTeam.name)
          : null;

        // Streak info for display
        const homeStreak = (splitStats && splitStats[homeTeam.code]) ? {
          winStreak: splitStats[homeTeam.code].currentWinStreak,
          lossStreak: splitStats[homeTeam.code].currentLossStreak,
          streakScore: splitStats[homeTeam.code].streakScore,
          restDays: splitStats[homeTeam.code].restDays
        } : null;
        const awayStreak = (splitStats && splitStats[awayTeam.code]) ? {
          winStreak: splitStats[awayTeam.code].currentWinStreak,
          lossStreak: splitStats[awayTeam.code].currentLossStreak,
          streakScore: splitStats[awayTeam.code].streakScore,
          restDays: splitStats[awayTeam.code].restDays
        } : null;

        return {
          probabilities: outcome,
          pick: PredictionEngine.pickOutcome(outcome),
          usesEstimatedInputs: !!(homeTeam.dataQuality?.estimatedFields?.length || awayTeam.dataQuality?.estimatedFields?.length),
          id: fixture.id,
          homeTeam: homeTeam.name,
          awayTeam: awayTeam.name,
          homeWin: (homeProb * 100).toFixed(1),
          draw: (drawProb * 100).toFixed(1),
          awayWin: (awayProb * 100).toFixed(1),
          h2h: h2hSummary,
          homeStreak,
          awayStreak,
          differential: differential.toFixed(3)
        };
      }).filter(p => p !== null);

      this.renderTicket();
      this.renderSystemCoupon();
      this.setupCouponControls();
      this.setupTuningControls();
    },

    renderTicket() {
      const coverage=document.getElementById('prediction-coverage');
      if(coverage)coverage.textContent = `${this.predictions.filter(p=>!p.unavailable).length}/${this.predictions.length} matches have supported team inputs. Missing inputs disable full coupons.`;
      const tbody = document.getElementById('sportoto-table-body');
      if (!tbody) return;
      tbody.innerHTML = '';
      
      this.predictions.forEach((pred) => {
        const tr = document.createElement('tr');
        
        if (pred.unavailable) {
          for (const value of [pred.id, pred.homeTeam, pred.awayTeam, '?', '?', '?', 'Team data unavailable']) {
            const td = document.createElement('td'); td.textContent = value; tr.appendChild(td);
          }
          tbody.appendChild(tr); return;
        }
        const recommended = pred.pick;

        // Build streak badges
        const streakBadge = (s, label) => {
          if (!s) return '';
          if (s.winStreak >= 3) return `<span title="${label} on ${s.winStreak}-game win streak" style="font-size:0.7rem;margin-left:3px;color:#10B981;">🔥${s.winStreak}</span>`;
          if (s.lossStreak >= 3) return `<span title="${label} on ${s.lossStreak}-game losing streak" style="font-size:0.7rem;margin-left:3px;color:#EF4444;">❄️${s.lossStreak}</span>`;
          return '';
        };

        // H2H mini badge
        const h2hBadge = pred.h2h && pred.h2h.played > 0
          ? `<span title="H2H: ${pred.h2h.homeWins}W-${pred.h2h.draws}D-${pred.h2h.awayWins}L (last ${pred.h2h.played})" style="font-size:0.65rem;color:var(--text-muted);margin-left:4px;cursor:help;">[H2H ${pred.h2h.homeWins}-${pred.h2h.draws}-${pred.h2h.awayWins}]</span>`
          : '';
        
        tr.innerHTML = `
          <td>${pred.id}</td>
          <td style="font-weight: 600;">${pred.homeTeam}${streakBadge(pred.homeStreak, pred.homeTeam)}</td>
          <td style="font-weight: 600;">${pred.awayTeam}${streakBadge(pred.awayStreak, pred.awayTeam)}</td>
          <td class="${recommended === '1' ? 'highlight-cell' : ''}">${pred.homeWin}%</td>
          <td class="${recommended === 'X' ? 'highlight-cell highlight-draw' : ''}">${pred.draw}%</td>
          <td class="${recommended === '2' ? 'highlight-cell' : ''}">${pred.awayWin}%</td>
          <td>
            <span class="pick-badge ${recommended === 'X' ? 'badge-draw' : ''}">${recommended}</span>${h2hBadge}${pred.usesEstimatedInputs ? '<small style="display:block">Includes baseline estimates</small>' : ''}
          </td>
        `;
        tbody.appendChild(tr);
      });
    },

    renderSystemCoupon() {
      if (this.predictions.length !== 15 || this.predictions.some(p => p.unavailable)) {
        const tbody = document.getElementById('coupon-table-body');
        if (tbody) tbody.innerHTML = '<tr><td colspan="8">Coupon unavailable: all 15 matches need team data.</td></tr>';
        for (const name of ['columns', 'cost', 'bankos', 'doubles']) {
          const element = document.getElementById('coupon-stat-' + name);
          if (element) element.textContent = '?';
        }
        return;
      }
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
      const button = document.getElementById('btn-run-tuning');
      if (!button || button.dataset.bound) return;
      button.dataset.bound = 'true';
      button.onclick = () => {
        const label = document.getElementById('btn-tuning-text');
        button.disabled = true;
        if (label) label.textContent = 'Running diagnostic fit...';
        setTimeout(() => {
          try {
            if (typeof HISTORICAL_DATA === 'undefined') throw new Error('Historical data unavailable');
            const report = ModelTuner.tune(HISTORICAL_DATA.matches, this.activeTeams || TEAMS_DATA, FeatureEngineering, PredictionEngine);
            const show = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
            show('baseline-acc', report.baseline.overallAccuracy + '%');
            show('baseline-brier', report.baseline.brierScore);
            show('optimized-acc', report.optimized.overallAccuracy + '%');
            show('optimized-brier', report.optimized.brierScore);
            show('tuning-improvement-badge', report.improvementPct + ' pp fitted accuracy change');
            show('baseline-params', JSON.stringify(report.baseline.params));
            show('optimized-params', JSON.stringify(report.bestParams));
            show('diagnostic-coverage', report.optimized.evaluatedCount + ' evaluated; ' + report.optimized.skippedCount + ' skipped. Current inputs on old results; not predictive validation.');
            if (label) label.textContent = 'Diagnostic complete; active model unchanged';
          } catch (error) {
            if (label) label.textContent = 'Diagnostic failed: ' + error.message;
          } finally {
            button.disabled = false;
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
