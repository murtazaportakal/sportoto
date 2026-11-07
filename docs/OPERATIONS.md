# Reliability operations

Verified locally on 7 November 2026. The active model remains `baseline-v1`, unvalidated. No experiment promotes a model automatically.

## Routine checks

Run `npm ci`, `npm test`, `npm run build`, and `npm run test:browser` (use `npm.cmd` in PowerShell when script execution policy blocks npm.ps1). Browser tests need installed Chrome; set `CHROME_PATH` if auto-detection does not find it. Screenshots are written under `test-results/` and CI retains them as artifacts. Tests use synthetic fixtures where current provider coverage is absent; successful tests do not imply all current matches are predictable.

`npm run sync` refreshes official fixtures, six ESPN standings sources, optional odds and diagnostic tuning. `data/health.json` reports source status, supported fixtures, stale/unverified team inputs and probability changes on matching fixtures. A change above 0.15 triggers a drift warning, not automatic model modification. `data/sync_failure.json` is written after an unsuccessful sync and removed after success. Do not expose credentials in logs. The optional odds key is read from `ODDS_API_KEY`; it is never required for a successful refresh.

International rounds additionally load ESPN Nations League standings and match official UEFA fixture identities to explicit UTC kickoffs. National teams use a separate NAT_ namespace with exact Turkish/English aliases. Standings seasons must match the fixtures; reversed/ambiguous matches and explicit-time conflicts fail closed. Missing composite inputs remain labelled generic priors, and the standings-derived rating is an unvalidated heuristic. Postponed/cancelled/abandoned fixtures and contradictory final statuses are ineligible. Recorded past rounds use the same resolver when polling results. Sportoto's timezone itself is still not assumed.

`npm run evaluate` scores recorded forecasts only after artifact replay and confirmed final observations. It reports proper scores, confusion matrices, per-class calibration bins, league/season/estimated-input subsets, and seeded matchweek-bootstrap differences against uniform probabilities. Coupon coverage uses a declared retrospective four-double rule on complete recorded rounds. Coupon cost is null without a declared unit price, and returns are never inferred. Bookmaker comparisons are explicitly unavailable until fixture-specific pre-match odds snapshots exist.

## Sync recovery

All mutable outputs are prepared under `.sync-transaction/stage`. The current active model is copied into staging but is not an output. Provider failures and validation errors leave committed files intact. Before replacing files, the sync saves originals and a journal. `live.json` is replaced last. A failure during replacement restores all journaled originals, including removing newly created records. Tests inject failures at each replacement position and exercise the complete sync with mocked sources.

`.sync-lock` prevents overlapping local syncs. If a process dies during commit, the next invocation checks that the recorded process no longer exists, restores the journal, then begins a new staged refresh. If restoration itself fails, the journal and lock are retained. Inspect logs, available disk space and write permissions before retrying. Never delete a recovery journal or overwrite immutable forecasts to make a run pass. An invalid lock or unexpected staging directory requires inspection, not automatic deletion.

Individual file replacements are atomic; a collection of filesystem files is not one atomic transaction. Readers of raw working scripts can see intermediate files during the short commit interval. The browser consumes one atomic live snapshot, and hosted publication occurs only after tests. Recovery protects process-interruption scenarios; it is not a substitute for backups or a guarantee against disk corruption/power-loss durability failures.

TLS certificate verification is enabled for all providers. If a provider certificate fails, fix the provider or configured trust chain; do not disable verification.

## Research and model releases

`npm run research` creates or reads `data/research/protocol.json`. Parameters are screened on development results, selected on validation, and a temperature calibrator is fitted on validation. It records dataset/code hashes and whole-date cutoffs. The frozen source is retained in `data/research/source.json` with content matching the protocol code hash. `npm run research:final` writes the final test result once; subsequent calls return the saved result. Changed data/code is rejected by the frozen protocol. Do not delete these files to tune against the same test. A new reviewed experiment needs a distinct artifact location and new independent test evidence.

`node walk_forward_evaluation.js` writes expanding-window development folds. Each fold selects parameters using only earlier dates and tests on the next date block. These folds are separate from the protocol's fitted development diagnostics and do not touch the final period.

The reduced model uses only earlier results, season-reset sequential ratings and an eight-match/180-day rolling goal-difference window. Both teams need at least five recent matches. All same-day results are withheld until that day's predictions are complete. Rest and fatigue remain disabled because the feed is incomplete. This model does not validate current squads, standings or odds. Historical imports omit unmapped teams. The reserved test dataset was already available to legacy diagnostics and was exercised during implementation; it is not pristine independent evidence.

Current research result: 137 test matches, candidate log loss 1.01356 versus rating baseline 0.99611 (lower is better). All paired 95% intervals include zero; draw recall is zero. No promotion is justified. Keep these results even though they are unfavorable.

`node release_gate.js <evidence.json>` rejects incompatible models, unpaired fixture sets, fewer than 500 eligible prospective forecasts, fewer than 100 per reported league, inconclusive paired intervals, Brier/calibration regressions and missing independent-test/class/league review. Passing this check does not modify configuration. A reviewer must verify the evidence hashes, paired fixtures and approval records, not trust self-declared fields in a JSON file.

For a future approved live-model change, archive the incumbent `data/active_model.json` under a unique version, retain its checksum and evidence reference in review, then change the active configuration in a reviewed commit. Run all tests, build and browser smoke checks before deployment. Roll back by restoring the archived configuration and generating a fresh validated snapshot; do not alter historical forecasts or the research protocol. Candidate-calibration artifacts belong to the reduced research model and cannot be loaded into the current live composite engine.

## Hosted release and alerts

`.github/workflows/ci.yml` validates pushes and pull requests. The scheduled workflow stages sync outputs, runs all tests and Chrome checks, commits successful data, and deploys the packaged site. Failed jobs retain diagnostics and write a job summary. Configure repository Actions failure notifications for the responsible operator; this workspace has not configured recipients or sent messages. The health report can be degraded while a sync succeeds (for example an international round with unsupported teams).

Remote activation is complete. Actions and workflow-based Pages are enabled at https://murtazaportakal.github.io/sportoto/. Reliability CI run 42405370192 and real sync/deployment run 42405370209 succeeded for commit 6891fca. The unmocked hosted site rendered 15 rows, loaded baseline-v1 and matched the latest committed live snapshot. Evidence is saved in data/remote_release.json. `node verify_deployment.js` repeats the authenticated run/snapshot checks and a public Chrome smoke check, retaining a screenshot. `node check_remote_access.js` summarizes repository access without printing credentials.

NosyAPI is retired at the user's request; no client or secret is needed for operation. Provider-side revocation has not been independently verified. Deleting a client does not revoke credentials or erase Git history. No provider login or secret should be pasted into chat or committed.
