# Weekly Sportoto predictor

Scope: a 15-match Sportoto ticket, 1/X/2 probabilities, system coupons, and historical model tuning. World Cup simulation and player awards are outside the current app. Original research is retained under docs/archive as reference only.

## Commands

- `npm ci` — install the locked dependencies (Node 24).
- `npm test` — validate live fixture coverage, controlled 15-match predictions, mappings, model parity, data imports and incomplete-coupon guards without network access.
- `npm run sync` — refresh the official round, standings, optional odds and a diagnostic tuning report.
- `npm run history` — explicitly refresh both historical datasets together; this is separate from the daily sync.
- `npm run tune` — print a tuning report without saving it. The sync saves research candidates to data/tuning_report.json; it does not change data/active_model.json.
- `npm run schedule` — optional Windows Task Scheduler registration; requires administrator access. GitHub scheduling works independently.
- `npm run test:browser` — run rendered Chrome smoke checks after `npm run build`; set CHROME_PATH if needed.
- `npm run research` / `npm run research:final` — freeze a results-only chronological experiment and record its final evaluation once.
- `node walk_forward_evaluation.js` — evaluate expanding-window development folds without touching the final test.
- `node release_gate.js <evidence.json>` — check prospective release requirements; never changes the active model.

Serve the project directory over HTTP. Opening index.html directly can prevent the tuning JSON from loading.

## Data flow and endpoints

| Source | Consumer | Purpose / outputs |
| --- | --- | --- |
| `webapi.sportoto.gov.tr/api/GameRound` | auto_sync.js | Find the latest published round |
| `webapi.sportoto.gov.tr/api/GameMatch/GetGameMatches/` | auto_sync.js | Write 15 fixtures, matches.txt and the round heading |
| `site.web.api.espn.com/apis/v2/sports/soccer/{league}/standings` | auto_stats_update.js | Refresh team statistics for six leagues in data/sportoto_data.js |
| `site.web.api.espn.com/apis/v2/sports/soccer/uefa.nations/standings` | auto_stats_update.js | Current Nations League national-team statistics with labelled generic priors |
| `match.uefa.com/v5/matches?competitionId=2014&seasonYear={year}` | verified_kickoffs.js | Independently match national fixtures and preserve explicit UTC kickoff evidence |
| `api.the-odds-api.com/v4/sports/soccer/soccer_turkey_super_league/odds/` | auto_sync.js | Optional implied-probability refresh, enabled only by ODDS_API_KEY |
| `raw.githubusercontent.com/openfootball/football.json/master/{season}/tr.1.json` | fetch_historical_data.js | Explicit historical import for 2024-25 and 2020-21; writes historical_matches.json and historical_data.js |
| `fonts.googleapis.com` / `fonts.gstatic.com` | index.css | Display fonts only; no prediction data |

The dashboard fetches data/live.json on opening, every five minutes while visible, and when returning to the tab. This single validated snapshot contains fixtures, statistics and the active model. Bundled scripts provide an explicitly freshness-unverified fallback if the initial request fails. Subsequent failures retain the last successfully loaded snapshot. It does not contact fixture, standings or odds providers directly. team_mapping.js provides shared aliases for all imports. Unknown teams remain visible and block incomplete coupons.

The GitHub workflow is configured at minutes 7 and 37 of each hour (UTC), installs from package-lock.json, syncs, tests, commits updates and explicitly deploys the browser assets. Scheduled runs can be delayed; the UI flags snapshots older than 90 minutes. The optional local Windows task runs at 02:00 local time. Do not register both schedules unless both copies need refreshing.

## Data quality

ESPN supplies standings statistics. The rating derived from points and goal difference is a heuristic, not official Elo. Inputs unavailable for newly imported teams use existing-dataset medians, recorded in dataQuality.estimatedFields and labelled in the dashboard. Per-team provenance includes source URL, season and retrieval time. Historical tuning scores are fitted results, not held-out estimates of future performance.

## Current status

- The saved round has 15/15 supported fixtures, with national-team standings and independently matched UEFA UTC kickoffs. The first 15 pre-match forecasts are saved. Unavailable composite inputs use explicitly labelled generic priors; national strength across Nations League tiers remains uncalibrated.
- The full live sync and regression suite passed locally on 7 November 2026.
- Endpoint cleanup preserves prediction outputs. Obsolete NosyAPI/CollectAPI clients, diagnostic scripts, alternate fixture writers and unused World Cup assets were removed.
- Published at https://murtazaportakal.github.io/sportoto/. Remote CI, real sync, browser checks and Pages deployment passed on 7 November 2026. Hosted data was verified against the repository snapshot; evidence is saved in data/remote_release.json.
- Live odds are optional and were skipped during verification because ODDS_API_KEY was absent.
- NosyAPI is retired at the user's request and is not used by the application. Provider-side revocation was not independently verified.

## Reliability work

See [the implementation status](docs/RELIABILITY_PLAN.md) and [operations runbook](docs/OPERATIONS.md). Implementation includes shared predictions, immutable snapshots and replay, staged sync/rollback, chronological research, calibrated probabilities, baseline comparisons, confidence intervals, release gates and browser checks. National-team coverage, verified UTC matching and remote deployment are operational. Live historical modifiers remain disabled. Sufficient settled prospective evidence remains open; passing tests is not proof of future prediction accuracy.

## Automatic data delivery

Hosted setup is complete: Actions and workflow-based Pages are enabled. The workflow publishes after successful sync and tests; token-created commits alone do not rebuild Pages. [Reliability CI](https://github.com/murtazaportakal/sportoto/actions/runs/42405370192) and [sync/deployment](https://github.com/murtazaportakal/sportoto/actions/runs/42405370209) passed. The published site was checked in Chrome and its live snapshot matched committed data. See data/remote_release.json for evidence.

`npm run build` recreates _site with only browser assets. The refresh contract is in live_data.js. Sync stages all working outputs, records rollback originals, replaces live.json last and recovers interrupted commits. Existing data remains available after source failure. Its timestamp means last successful refresh, not that every team has current source coverage. See the runbook for filesystem transaction limits and recovery.

matches.txt is generated output, not a required manual input. The local Windows scheduler remains an optional once-daily alternative; it is not the hosted 30-minute schedule. Automation refreshes fixtures/statistics and polls final results for recorded forecasts; it is not a real-time score feed.

## Evaluation records

Sync now preserves provider match IDs, league/round IDs, raw kickoff timestamps and normalized final results. evaluation_records.js saves the first eligible forecast per match without overwriting it. Input snapshots and engine source code are content-addressed; forecasts reference both hashes and contain active parameters and full-precision probabilities. Result observations are separate and corrections append new records. Recorded rounds continue to be polled when they leave the active round; unsettled records do not expire, and settled records are checked for corrections for 30 days. Records are committed by the scheduled workflow but are excluded from the public site package.

Eligibility requires an explicitly timezone-qualified kickoff, capture strictly before kickoff, no known final result, a fresh snapshot, and source timestamps within 48 hours for both teams. Sportoto's raw timestamps have no verified timezone contract. For current national fixtures, verified_kickoffs.js matches the unique UEFA fixture by both team identities, home/away, competition, season and calendar date, and saves UEFA's explicit UTC timestamp and retrieval evidence. Ambiguous, conflicting or unmatched fixtures stay ineligible. The current sync captured 15 forecasts; none is settled yet. Postponement/status conflicts block capture. Unsupported future fixtures remain visible and block incomplete coupons.

## Settlement and postponement safeguards

`npm run evaluate` reports eligible recorded-forecast accuracy, multiclass Brier score, log loss and a uniform-probability reference. Sync saves the report to data/evaluation/report.json. Empty samples produce null metrics and insufficient-evidence status. This report is observational evidence, not a chronological training/validation split or a model promotion decision.

Schedule observations and result revisions are append-only and ordered. Repeated identical observations are deduplicated; A-to-B-to-A corrections remain distinct revisions. Any observed kickoff or team-identity change excludes the original forecast for review, even if later reverted. Unconfirmed/withdrawn finals are not scored and continue to be polled. Recent finals are rechecked for 30 days after their last result observation. Saved input/code hashes, exact prediction replay, timestamps and result consistency are checked before scoring. Chronological results-only replay and grouped intervals are implemented separately from the live model.

Timezone investigation on 7 November 2026: Sportoto's listing/bundle did not establish a timezone contract. The current national fixtures now use independently matched official UEFA timestamps with explicit UTC; no default Sportoto offset was inferred. See kickoffSource on each fixture for the retained evidence.

Regression tests handle unsupported teams explicitly, preserve complete-ticket/browser parity checks, and test national identities, sourced standings, UTC matching, ambiguous/reversed fixtures, conflicts and postponements. All nine Node test files and rendered Chrome smoke checks pass locally. Passing tests is not evidence of future accuracy. Settlement rejects invalid or non-post-kickoff result/final-confirmation times and verifies saved forecast replay.
