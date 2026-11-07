/** Weekly match guide. Presentation and preferences are separate from model parameters. */
document.addEventListener('DOMContentLoaded', () => {
  const messages = {
    en: {
      skip:'Skip to matches',brandNote:'The weekly match guide',matches:'Matches',myTicket:'My ticket',about:'About',refresh:'Refresh',refreshing:'Refreshing…',
      eyebrow:"A clearer view of this week's football",heroTitle:'Your matches. Your game plan.',heroDescription:"Compare all 15 matches, understand the model's picks, and build a ticket with the coverage you choose.",viewMatches:'Explore the matches',readyMatches:'Matches ready',nextKickoff:'Next kickoff',roundTeams:'Teams this round',
      readGuide:'New to 1 / X / 2? Start here',homeMeaning:'The home team wins.',drawMeaning:'The match ends in a draw.',awayMeaning:'The away team wins.',probabilityMeaning:'Percentages are model estimates. The highlighted outcome has the highest probability; it is not a guaranteed result.',
      thisWeek:"This week's matches",searchLabel:'Search for a team',searchPlaceholder:'Find a team…',clear:'Clear',tableHint:'Highlighted percentage = highest-probability outcome',tableCaption:'Match probabilities and highest-probability picks',homeTeam:'Home team',awayTeam:'Away team',modelPick:'Model pick',
      estimatesNote:'Some team inputs use baseline estimates. Estimated inputs are marked on each match. The model is still being evaluated.',stepTwo:'Make it your ticket',ticketIntro:'Choose how many matches include two possible outcomes.',coverage:'Two-outcome matches',coverageHelp:'Each extra two-outcome match doubles the number of combinations.',selectionStyle:'How to choose the two outcomes',drawStrategy:'Include the draw',topStrategy:'Top two probabilities',drawStrategyHelp:'Pair the favored team with a draw: 1–X or X–2.',topStrategyHelp:'Cover the two outcomes with the highest estimated probabilities.',
      combinations:'Combinations',estimatedCost:'Estimated cost',singleSelections:'Single selections',doubleSelections:'Two-outcome selections',columnPrice:'Your price per combination (TL)',priceHelp:'This estimate uses the price you enter. Check the current price with the operator.',priceError:'Enter a price from 0.01 to 1,000,000 TL, with up to two decimal places.',
      copyTicket:'Copy ticket',downloadTicket:'Download .txt',manualCopy:'Select and copy this text:',previewTicket:'See all ticket selections',ticketCaption:'Generated ticket selections',pick:'Pick',ticketNote:'Your choices stay on this device. This app prepares a ticket; it does not submit it.',
      underTheHood:'A little context',aboutTitle:'Understand the estimates',aboutDescription:'The model compares team statistics to estimate each outcome. Some inputs are estimated, and future-match accuracy is still being measured.',technicalDetails:'Model details and research diagnostics',diagnosticIntro:"Historical diagnostics fit today's inputs to old results. They do not validate future predictions or change the active model.",runDiagnostic:'Run historical diagnostic',baselineLabel:'Baseline diagnostic',candidateLabel:'Candidate diagnostic',footerNote:'A match guide built on estimates. Results are never guaranteed.',readGuideShort:'How to read the picks',viewTicket:'View my ticket',
      checking:'Checking the latest matches…',fallback:'Update unavailable. Showing saved matches; freshness unverified.',refreshFailed:'Refresh failed. Showing the last saved update. ',stale:'This update may be out of date. ',lastSynced:'Last synced: {time}. Checks automatically.',modelStatus:'Model: {version}. Evaluation in progress.',savedModel:'saved preview (version unverified)',ready:'{ready}/{total} matches have predictions.',partial:'{ready}/{total} matches have predictions. A complete ticket needs all {total}.',shown:'{shown} of {total} matches',homeWin:'Home win',draw:'Draw',awayWin:'Away win',estimated:'Estimated inputs',missing:'Team data unavailable',noMatches:'No matches found. Try another team or clear your search.',timeUnconfirmed:'Kickoff to be confirmed',noUpcoming:'No upcoming kickoffs',couponUnavailable:'Coupon unavailable: all 15 matches need team data.',single:'One outcome',double:'Two outcomes',copied:'Ticket copied. You can paste it into your notes.',copyFallback:'Your browser could not copy automatically. Copy the selected text below.',downloaded:'Your ticket has been downloaded.',ticketEstimate:'Estimate only. Results are not guaranteed.',modelLine:'Model: {version}',updatedLine:'Data updated: {time}',costLine:'Estimated cost: {cost} ({price} per combination)',runningDiagnostic:'Running diagnostic fit…',diagnosticDone:'Diagnostic complete; active model unchanged',diagnosticFailed:'Diagnostic failed: {error}',diagnosticCoverage:'{evaluated} evaluated; {skipped} skipped. Current inputs on old results; not predictive validation.',fitChange:'{change} pp fitted accuracy change'
    },
    tr: {
      skip:'Maçlara geç',brandNote:'Haftalık maç rehberi',matches:'Maçlar',myTicket:'Kuponum',about:'Hakkında',refresh:'Yenile',refreshing:'Yenileniyor…',
      eyebrow:'Haftanın futboluna daha net bir bakış',heroTitle:'Maçlarını incele. Kuponunu oluştur.',heroDescription:'15 maçın olasılıklarını karşılaştır, modelin seçimlerini incele ve istediğin kapsamda bir kupon hazırla.',viewMatches:'Maçları incele',readyMatches:'Hazır maçlar',nextKickoff:'Sıradaki maç',roundTeams:'Bu haftaki takımlar',
      readGuide:'1 / X / 2 ne demek?',homeMeaning:'Ev sahibi takım kazanır.',drawMeaning:'Maç berabere biter.',awayMeaning:'Deplasman takımı kazanır.',probabilityMeaning:'Yüzdeler modelin olasılık tahminleridir. Vurgulanan sonuç en yüksek olasılığa sahiptir; kesin sonuç anlamına gelmez.',
      thisWeek:'Bu haftanın maçları',searchLabel:'Takım ara',searchPlaceholder:'Takım ara…',clear:'Temizle',tableHint:'Vurgulanan yüzde = en yüksek olasılıklı sonuç',tableCaption:'Maç olasılıkları ve modelin en yüksek olasılıklı seçimleri',homeTeam:'Ev sahibi',awayTeam:'Deplasman',modelPick:'Model seçimi',
      estimatesNote:'Bazı takım verilerinde başlangıç tahminleri kullanılır. Bu veriler maçlarda işaretlenir. Modelin başarısı hâlâ değerlendiriliyor.',stepTwo:'Kuponunu hazırla',ticketIntro:'Kaç maçta iki olası sonucu kapsamak istediğini seç.',coverage:'Çifte şanslı maç sayısı',coverageHelp:'Her ek çifte şanslı maç, kolon sayısını iki katına çıkarır.',selectionStyle:'İki sonuç nasıl seçilsin?',drawStrategy:'Beraberliği dahil et',topStrategy:'En yüksek iki olasılık',drawStrategyHelp:'Favori takım ile beraberliği birlikte seçer: 1–X veya X–2.',topStrategyHelp:'En yüksek olasılığa sahip iki sonucu kapsar.',
      combinations:'Kolon sayısı',estimatedCost:'Tahmini tutar',singleSelections:'Tek sonuçlu maç',doubleSelections:'Çifte şanslı maç',columnPrice:'Kolon başına fiyatın (TL)',priceHelp:'Tahmin, girdiğin fiyata göre hesaplanır. Güncel fiyatı operatörden kontrol et.',priceError:'0,01 ile 1.000.000 TL arasında, en fazla iki ondalıklı bir fiyat gir.',
      copyTicket:'Kuponu kopyala',downloadTicket:'.txt indir',manualCopy:'Bu metni seçip kopyala:',previewTicket:'Tüm kupon seçimlerini gör',ticketCaption:'Oluşturulan kupon seçimleri',pick:'Seçim',ticketNote:'Tercihlerin bu cihazda saklanır. Uygulama kupon hazırlar; kupon oynamaz.',
      underTheHood:'Kısa bir açıklama',aboutTitle:'Tahminler nasıl oluşuyor?',aboutDescription:'Model, sonuçların olasılığını hesaplamak için takım istatistiklerini karşılaştırır. Bazı veriler tahminidir; gelecek maçlardaki başarı ölçümü devam ediyor.',technicalDetails:'Model ayrıntıları ve araştırma sonuçları',diagnosticIntro:'Geçmiş veri analizi, bugünkü verileri eski sonuçlarla karşılaştırır. Gelecek başarıyı doğrulamaz ve aktif modeli değiştirmez.',runDiagnostic:'Geçmiş veri analizini çalıştır',baselineLabel:'Başlangıç modeli analizi',candidateLabel:'Aday model analizi',footerNote:'Olasılık tahminlerine dayalı bir maç rehberi. Hiçbir sonuç garanti değildir.',readGuideShort:'Seçimler nasıl okunur?',viewTicket:'Kuponumu gör',
      checking:'Güncel maçlar kontrol ediliyor…',fallback:'Güncelleme alınamadı. Kayıtlı maçlar gösteriliyor; veriler eski olabilir.',refreshFailed:'Yenileme başarısız. Son kayıtlı güncelleme gösteriliyor. ',stale:'Bu güncelleme eski olabilir. ',lastSynced:'Son güncelleme: {time}. Otomatik kontrol edilir.',modelStatus:'Model: {version}. Başarı ölçümü devam ediyor.',savedModel:'kayıtlı önizleme (sürüm doğrulanmadı)',ready:'{ready}/{total} maç için tahmin hazır.',partial:'{ready}/{total} maç için tahmin hazır. Tam kupon için {total} maçın tümü gerekir.',shown:'{total} maçtan {shown} tanesi',homeWin:'Ev sahibi',draw:'Beraberlik',awayWin:'Deplasman',estimated:'Tahmini veriler',missing:'Takım verisi eksik',noMatches:'Maç bulunamadı. Başka bir takım ara veya aramayı temizle.',timeUnconfirmed:'Başlama saati kesinleşmedi',noUpcoming:'Yaklaşan maç yok',couponUnavailable:'Kupon hazır değil: 15 maçın tamamı için takım verisi gerekiyor.',single:'Tek sonuç',double:'Çifte şans',copied:'Kupon kopyalandı. Notlarına yapıştırabilirsin.',copyFallback:'Tarayıcı otomatik kopyalayamadı. Aşağıdaki seçili metni kopyala.',downloaded:'Kuponun indirildi.',ticketEstimate:'Yalnızca tahmindir. Sonuçlar garanti değildir.',modelLine:'Model: {version}',updatedLine:'Veri güncellemesi: {time}',costLine:'Tahmini tutar: {cost} (kolon başına {price})',runningDiagnostic:'Geçmiş veri analizi çalışıyor…',diagnosticDone:'Analiz tamamlandı; aktif model değişmedi',diagnosticFailed:'Analiz başarısız: {error}',diagnosticCoverage:'{evaluated} maç değerlendirildi; {skipped} maç atlandı. Güncel veriler eski sonuçlarla karşılaştırılır; gelecekteki başarı doğrulanmaz.',fitChange:'Geçmişe uyum başarısı değişimi: {change} puan'
    }
  };
  const App = {
    featureVectors:{},predictions:[],language:'en',searchTerm:'',currentParams:{...PredictionEngine.params},couponConfig:{doubleChanceCount:4,strategy:'draw_protection',unitPrice:5},
    t(key,values={}) {let text=messages[this.language][key]??messages.en[key]??key;for(const [name,value] of Object.entries(values))text=text.replaceAll('{'+name+'}',String(value));return text;},
    locale(){return this.language==='tr'?'tr-TR':'en-GB';},
    escape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));},
    normalize(value){return String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');},
    date(value,options={}) {return Number.isFinite(Date.parse(value))?new Intl.DateTimeFormat(this.locale(),{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit',...options}).format(new Date(value)):this.t('timeUnconfirmed');},
    money(value){return new Intl.NumberFormat(this.locale(),{style:'currency',currency:'TRY',currencyDisplay:'narrowSymbol',maximumFractionDigits:2}).format(value);},
    async init() {
      this.loadPreferences();this.loadSavedModel();this.setupInterface();this.applyTranslations();
      this.activeTeams=TEAMS_DATA;this.activeFixtures=FIXTURES_DATA;
      this.runPredictions();this.renderFreshness();
      await this.fetchLiveFixtures();
    },
    loadSavedModel() {
      try {
        const model=JSON.parse(document.getElementById('initial-model')?.textContent||'null'),p=model?.params;
        if(typeof model?.version==='string'&&p&&[p.sigmoidScale,p.drawBase,p.homeAdvantageBoost].every(Number.isFinite)&&p.sigmoidScale>0&&p.drawBase>0&&p.drawBase<1&&p.homeAdvantageBoost>=0&&p.homeAdvantageBoost<=.2){this.currentParams={...p};this.modelVersion=model.version;}
      } catch { /* A missing preview model stays explicitly unverified. */ }
    },
    loadPreferences() {
      try {
        const saved=JSON.parse(localStorage.getItem('sportoto-preferences')||'{}');
        if(['en','tr'].includes(saved.language))this.language=saved.language;
        if([0,2,4,6].includes(saved.doubleChanceCount))this.couponConfig.doubleChanceCount=saved.doubleChanceCount;
        if(['draw_protection','max_coverage'].includes(saved.strategy))this.couponConfig.strategy=saved.strategy;
        if(Number.isFinite(saved.unitPrice)&&saved.unitPrice>0&&saved.unitPrice<=1000000)this.couponConfig.unitPrice=saved.unitPrice;
      } catch { /* Preferences are optional when storage is blocked. */ }
    },
    savePreferences(){try{localStorage.setItem('sportoto-preferences',JSON.stringify({language:this.language,...this.couponConfig}));}catch{}},
    applyTranslations() {
      if(document.documentElement)document.documentElement.lang=this.language;
      document.title=this.language==='tr'?'Sportoto · Haftalık maç rehberi':'Sportoto · Your weekly match guide';
      for(const el of document.querySelectorAll?.('[data-i18n]')||[])el.textContent=this.t(el.dataset.i18n);
      for(const el of document.querySelectorAll?.('[data-i18n-placeholder]')||[])el.placeholder=this.t(el.dataset.i18nPlaceholder);
      for(const button of document.querySelectorAll?.('[data-language]')||[])button.setAttribute('aria-pressed',String(button.dataset.language===this.language));
      const price=document.getElementById('column-price');if(price&&!this.priceError)price.value=String(this.couponConfig.unitPrice).replace('.',this.language==='tr'?',':'.');
      if(this.diagnosticReport)this.renderDiagnostic(this.diagnosticReport);
    },
    setupInterface() {
      for(const button of document.querySelectorAll?.('[data-language]')||[])button.onclick=()=>{
        this.language=button.dataset.language;this.savePreferences();this.applyTranslations();this.runPredictions();this.renderFreshness();
      };
      const search=document.getElementById('match-search');if(search)search.oninput=()=>{this.searchTerm=search.value;this.renderTicket();};
      const clear=document.getElementById('clear-search');if(clear)clear.onclick=()=>{this.searchTerm='';search.value='';this.renderTicket();search.focus();};
      const refresh=document.getElementById('refresh-data');if(refresh)refresh.onclick=()=>this.refreshLiveData();
      const price=document.getElementById('column-price');
      if(price){price.value=this.couponConfig.unitPrice;price.oninput=()=>{
        const raw=price.value.trim(),value=Number(raw.replace(',','.'));
        this.priceError=!/^(?:\d+(?:[.,]\d{0,2})?|[.,]\d{1,2})$/.test(raw)||!Number.isFinite(value)||value<=0||value>1000000;
        price.setAttribute('aria-invalid',String(this.priceError));
        if(!this.priceError){this.couponConfig.unitPrice=value;this.savePreferences();}
        this.renderSystemCoupon();
      };}
      const copy=document.getElementById('copy-ticket');if(copy)copy.onclick=()=>this.copyTicket();
      const download=document.getElementById('download-ticket');if(download)download.onclick=()=>this.downloadTicket();
    },
    async fetchLiveFixtures() {
      this.activeTeams=TEAMS_DATA;this.activeFixtures=FIXTURES_DATA;
      await this.refreshLiveData();
      this.refreshTimer=setInterval(()=>{if(!document.hidden)this.refreshLiveData();},5*60*1000);
      document.addEventListener('visibilitychange',()=>{if(!document.hidden)this.refreshLiveData();});
    },
    async refreshLiveData(render=true) {
      if(this.refreshing)return;
      this.refreshing=true;this.updateRefreshButton();this.renderFreshness();
      try {
        const response=await fetch('data/live.json?t='+Date.now(),{cache:'no-store',signal:AbortSignal.timeout(10000)});
        if(!response.ok)throw new Error('Data update unavailable');
        const data=LiveData.validate(await response.json());
        if(this.updatedAt&&Date.parse(data.updatedAt)<Date.parse(this.updatedAt))throw new Error('Older update ignored');
        this.activeTeams=data.teams;this.activeFixtures=data.fixtures;this.currentParams={...data.model.params};this.modelVersion=data.model.version;this.round=data.round;this.updatedAt=data.updatedAt;this.refreshError=false;
        const badge=document.querySelector?.('#predictions .section-tag');if(badge)badge.textContent=data.round.name;
        if(render)this.runPredictions();
      } catch(error){this.refreshError=true;console.warn('Keeping last available dataset:',error.message);}
      finally{this.refreshing=false;this.updateRefreshButton();this.renderFreshness();}
    },
    updateRefreshButton() {
      const button=document.getElementById('refresh-data');if(button)button.disabled=!!this.refreshing;
      const label=document.querySelector?.('#refresh-data [data-i18n]');if(label)label.textContent=this.t(this.refreshing?'refreshing':'refresh');
    },
    renderFreshness() {
      const status=document.getElementById('data-freshness');if(!status)return;
      const stale=this.updatedAt&&LiveData.freshness(this.updatedAt)==='stale';
      status.textContent=this.updatedAt?(this.refreshError?this.t('refreshFailed'):'')+(stale?this.t('stale'):'')+this.t('lastSynced',{time:this.date(this.updatedAt)}):this.t(this.refreshing?'checking':'fallback');
      const dot=document.getElementById('freshness-dot');if(dot)dot.className='status-dot '+(this.refreshing&&!this.updatedAt?'':!this.updatedAt||this.refreshError?'failed':stale?'stale':'fresh');
    },
    runPredictions() {
      const teams=this.activeTeams||TEAMS_DATA,fixtures=this.activeFixtures||FIXTURES_DATA;
      this.featureVectors=FeatureEngineering.buildAllFeatureVectors(teams,[]);
      this.predictions=fixtures.map(fixture=>{
        const home=teams.find(t=>t.code===fixture.home),away=teams.find(t=>t.code===fixture.away);
        const names={homeTeam:this.language==='tr'?fixture.homeName:(home?.name||fixture.homeName),awayTeam:this.language==='tr'?fixture.awayName:(away?.name||fixture.awayName),homeLocal:fixture.homeName,awayLocal:fixture.awayName};
        if(!home||!away)return {id:fixture.id,unavailable:true,...names,kickoff:fixture.kickoff};
        const outcome=PredictionPipeline.predict({fixture,vectors:this.featureVectors,params:this.currentParams,asOf:this.updatedAt||new Date().toISOString()},FeatureEngineering,PredictionEngine).probabilities;
        return {probabilities:outcome,pick:PredictionEngine.pickOutcome(outcome),usesEstimatedInputs:!!(home.dataQuality?.estimatedFields?.length||away.dataQuality?.estimatedFields?.length),id:fixture.id,...names,kickoff:fixture.kickoff,
          homeWin:(outcome.win*100).toFixed(1),draw:(outcome.draw*100).toFixed(1),awayWin:(outcome.loss*100).toFixed(1),h2h:null,homeStreak:null,awayStreak:null,differential:outcome.differential.toFixed(3)};
      });
      const model=document.getElementById('model-status');if(model)model.textContent=this.t('modelStatus',{version:this.modelVersion||this.t('savedModel')});
      const ready=this.predictions.filter(p=>!p.unavailable).length;
      const heroReady=document.getElementById('hero-ready');if(heroReady)heroReady.textContent=ready+' / '+fixtures.length;
      const heroTeams=document.getElementById('hero-teams');if(heroTeams)heroTeams.textContent=new Set(fixtures.flatMap(f=>[f.home,f.away]).filter(code=>code!=='UNKNOWN')).size;
      const next=fixtures.map(f=>f.kickoff).filter(value=>Number.isFinite(Date.parse(value))&&Date.parse(value)>Date.now()).sort((a,b)=>Date.parse(a)-Date.parse(b))[0];
      const nextEl=document.getElementById('hero-next');if(nextEl)nextEl.textContent=next?this.date(next):this.t('noUpcoming');
      this.renderTicket();this.renderSystemCoupon();this.setupCouponControls();this.setupTuningControls();
    },
    renderTicket() {
      const ready=this.predictions.filter(p=>!p.unavailable).length;
      const coverage=document.getElementById('prediction-coverage');if(coverage)coverage.textContent=this.t(ready===this.predictions.length?'ready':'partial',{ready,total:this.predictions.length});
      const term=this.normalize(this.searchTerm.trim()),visible=this.predictions.filter(p=>this.normalize([p.homeTeam,p.awayTeam,p.homeLocal,p.awayLocal].join(' ')).includes(term));
      const count=document.getElementById('match-count');if(count)count.textContent=this.t('shown',{shown:visible.length,total:this.predictions.length});
      const clear=document.getElementById('clear-search');if(clear)clear.hidden=!term;
      const tbody=document.getElementById('sportoto-table-body');if(!tbody)return;tbody.innerHTML='';
      if(!visible.length){const tr=document.createElement('tr');tr.innerHTML='<td colspan="7" class="empty-message">'+this.escape(this.t('noMatches'))+'</td>';tbody.appendChild(tr);return;}
      for(const pred of visible) {
        const tr=document.createElement('tr');tr.className='match-row';
        const probabilities=[['1','homeWin','homeWin'],['X','draw','draw'],['2','awayWin','awayWin']].map(([pick,field,label])=>'<td data-label="'+this.escape(pick+' · '+this.t(label))+'" class="'+(pred.pick===pick?'highlight-cell':'')+'"><span class="probability-value">'+(pred.unavailable?'—':pred[field]+'%')+'</span>'+(pred.unavailable?'':'<span class="probability-track" aria-hidden="true"><span style="width:'+pred[field]+'%"></span></span>')+'</td>').join('');
        const pick=pred.unavailable?'<span class="missing-data">'+this.escape(this.t('missing'))+'</span>':'<span class="pick-badge">'+pred.pick+'</span><span class="pick-label">'+this.escape(this.t({'1':'homeWin','X':'draw','2':'awayWin'}[pred.pick]))+'</span>'+(pred.usesEstimatedInputs?'<span class="estimated-label">'+this.escape(this.t('estimated'))+'</span>':'');
        tr.innerHTML='<td class="match-number">'+this.escape(String(pred.id).padStart(2,'0'))+'</td><td data-label="'+this.escape(this.t('homeTeam'))+'"><span class="team-name">'+this.escape(pred.homeTeam)+'</span><span class="kickoff">'+this.escape(this.date(pred.kickoff))+'</span></td><td data-label="'+this.escape(this.t('awayTeam'))+'"><span class="team-name">'+this.escape(pred.awayTeam)+'</span></td>'+probabilities+'<td>'+pick+'</td>';
        tbody.appendChild(tr);
      }
    },
    renderSystemCoupon() {
      this.currentCoupon=null;
      const unavailable=this.predictions.length!==15||this.predictions.some(p=>p.unavailable);
      const tbody=document.getElementById('coupon-table-body'),availability=document.getElementById('ticket-availability'),error=document.getElementById('price-error');
      if(error)error.textContent=this.priceError?this.t('priceError'):'';
      if(availability)availability.textContent=unavailable?this.t('couponUnavailable'):'';
      if(unavailable) {
        if(tbody)tbody.innerHTML='<tr><td colspan="8">'+this.escape(this.t('couponUnavailable'))+'</td></tr>';
        for(const name of ['columns','cost','bankos','doubles']){const el=document.getElementById('coupon-stat-'+name);if(el)el.textContent='—';}
      } else if(typeof SystemCouponGenerator!=='undefined') {
        const coupon=SystemCouponGenerator.generateCoupon(this.predictions,this.couponConfig.doubleChanceCount,this.couponConfig.strategy);
        if(coupon) {
          this.currentCoupon=coupon;
          for(const [name,value] of Object.entries({columns:coupon.totalColumns,cost:this.priceError?'—':this.money(coupon.totalColumns*this.couponConfig.unitPrice),bankos:15-coupon.doubleChanceCount,doubles:coupon.doubleChanceCount})){const el=document.getElementById('coupon-stat-'+name);if(el)el.textContent=value;}
          if(tbody){tbody.innerHTML='';for(const match of coupon.ticketMatches){const tr=document.createElement('tr');tr.innerHTML='<td>'+this.escape(match.id)+'</td><td>'+this.escape(match.homeTeam)+'</td><td>'+this.escape(match.awayTeam)+'</td><td>'+match.homeWin+'%</td><td>'+match.draw+'%</td><td>'+match.awayWin+'%</td><td><span class="pick-badge">'+match.pick+'</span></td><td><span class="'+(match.isDouble?'tag-double':'tag-banko')+'">'+this.escape(this.t(match.isDouble?'double':'single'))+'</span></td>';tbody.appendChild(tr);}}
        }
      }
      const allowed=!!this.currentCoupon&&!this.priceError;
      for(const id of ['copy-ticket','download-ticket']){const button=document.getElementById(id);if(button)button.disabled=!allowed;}
      const mobile=document.getElementById('mobile-ticket-summary');if(mobile)mobile.textContent=this.currentCoupon?this.currentCoupon.totalColumns+(this.language==='tr'?' kolon':' combinations'):'—';
      const help=document.getElementById('strategy-description');if(help)help.textContent=this.t(this.couponConfig.strategy==='draw_protection'?'drawStrategyHelp':'topStrategyHelp');
      const exportArea=document.getElementById('ticket-export');if(exportArea)exportArea.hidden=true;
      const feedback=document.getElementById('ticket-feedback');if(feedback)feedback.textContent='';
    },
    setupCouponControls() {
      for(const button of document.querySelectorAll?.('#coupon-dc-selector .btn-chip')||[]) {
        const selected=Number(button.dataset.count)===this.couponConfig.doubleChanceCount;button.classList?.toggle('active',selected);button.setAttribute?.('aria-pressed',String(selected));
        button.onclick=()=>{this.couponConfig.doubleChanceCount=Number(button.dataset.count);this.savePreferences();this.renderSystemCoupon();this.setupCouponControls();};
      }
      for(const button of document.querySelectorAll?.('#coupon-strategy-selector .btn-chip')||[]) {
        const selected=button.dataset.strategy===this.couponConfig.strategy;button.classList?.toggle('active',selected);button.setAttribute?.('aria-pressed',String(selected));
        button.onclick=()=>{this.couponConfig.strategy=button.dataset.strategy;this.savePreferences();this.renderSystemCoupon();this.setupCouponControls();};
      }
    },
    ticketText() {
      if(!this.currentCoupon||this.priceError)return '';
      return [this.round?.name||this.t('thisWeek'),this.t('modelLine',{version:this.modelVersion||this.t('savedModel')}),this.t('updatedLine',{time:this.updatedAt?this.date(this.updatedAt):this.t('savedModel')}),'',
        ...this.currentCoupon.ticketMatches.map(m=>m.id+'. '+m.homeTeam+' — '+m.awayTeam+': '+m.pick),'',
        this.t('combinations')+': '+this.currentCoupon.totalColumns,this.t('costLine',{cost:this.money(this.currentCoupon.totalColumns*this.couponConfig.unitPrice),price:this.money(this.couponConfig.unitPrice)}),this.t('ticketEstimate')].join('\n');
    },
    async copyTicket() {
      const text=this.ticketText();if(!text)return;
      const feedback=document.getElementById('ticket-feedback');
      try{await navigator.clipboard.writeText(text);if(feedback)feedback.textContent=this.t('copied');}
      catch{const area=document.getElementById('ticket-export'),field=document.getElementById('ticket-text');if(area)area.hidden=false;if(field){field.value=text;field.focus();field.select();}if(feedback)feedback.textContent=this.t('copyFallback');}
    },
    downloadTicket() {
      const text=this.ticketText();if(!text)return;
      const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),link=document.createElement('a');
      link.href=url;link.download='sportoto-'+String(this.round?.id||'weekly').replace(/[^a-z0-9-]/gi,'')+'-ticket.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
      const feedback=document.getElementById('ticket-feedback');if(feedback)feedback.textContent=this.t('downloaded');
    },
    renderDiagnostic(report) {
      const show=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value;};
      show('baseline-acc',report.baseline.overallAccuracy+'%');show('baseline-brier',report.baseline.brierScore);show('optimized-acc',report.optimized.overallAccuracy+'%');show('optimized-brier',report.optimized.brierScore);
      show('baseline-params',JSON.stringify(report.baseline.params));show('optimized-params',JSON.stringify(report.bestParams));show('tuning-improvement-badge',this.t('fitChange',{change:report.improvementPct}));
      show('diagnostic-coverage',this.t('diagnosticCoverage',{evaluated:report.optimized.evaluatedCount,skipped:report.optimized.skippedCount}));
    },
    setupTuningControls() {
      const button=document.getElementById('btn-run-tuning');if(!button||button.dataset?.bound)return;if(button.dataset)button.dataset.bound='true';
      button.onclick=()=>{
        const label=document.getElementById('btn-tuning-text');button.disabled=true;if(label)label.textContent=this.t('runningDiagnostic');
        setTimeout(()=>{try{if(typeof HISTORICAL_DATA==='undefined')throw new Error('Historical data unavailable');const report=ModelTuner.tune(HISTORICAL_DATA.matches,this.activeTeams||TEAMS_DATA,FeatureEngineering,PredictionEngine);this.diagnosticReport=report;this.renderDiagnostic(report);if(label)label.textContent=this.t('diagnosticDone');}
        catch(error){if(label)label.textContent=this.t('diagnosticFailed',{error:error.message});}finally{button.disabled=false;}},50);
      };
    }
  };
  App.init();
});
