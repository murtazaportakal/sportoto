# Reliability implementation plan

Prepared 7 November 2026. Scope remains weekly Sportoto probabilities, coupons and evaluation. Reliability means reproducible inputs, honest measurements and controlled releases; it does not promise profitable picks.

## Verified starting point

- 15 fixtures resolve to teams; pipeline and import tests pass.
- Historical results cover old Turkish seasons, not timestamped pre-match feature snapshots. Current team inputs cannot support an unbiased retrospective score.
- Browser-only H2H/form adjustments differ from the tuner. Rest uses wall-clock time and old results can be labelled current form.
- The close-win-probability rule recommends draws that are not the highest probability.
- Nightly tuning and the browser tuning button automatically apply same-sample fitted parameters.
- Current tests use a DOM stub, not a rendered browser or remote GitHub runner.

## Phase 1 — consistent and honest baseline (implement first)

1. Put highest-probability selection in one tested engine method; use full precision for the ticket and coupon singles. Double-chance strategies remain separate decisions.
2. Freeze current parameters as an explicitly unvalidated baseline. Save research tuning reports separately; never promote them automatically.
3. Remove static benchmark claims. Label current-data/old-result scoring as a diagnostic, with evaluated/skipped counts. Optimize research candidates using log loss, not a bonus for predicting any draw.
4. Temporarily disable H2H/form modifiers in live scoring until their availability and time cutoffs are validated. Keep their modules for phase 3.
5. Check probability validity, browser/Node parity, draw examples, coupon behavior and non-promotion of research results.

Exit: all 15 fixtures still render; singles are argmax probabilities; diagnostics cannot change live parameters; UI does not claim held-out validation. This is a behavior correction, not evidence of higher accuracy.

## Phase 2 — immutable pre-match records and data contracts

1. Preserve provider fixture ID, round ID, league, kickoff timestamp with timezone, match status and provider update time. Do not infer kickoff from the round closing date.
2. Validate team identity, duplicate IDs, score/status consistency, source timestamps and required fields. Unknown or stale inputs must have explicit status.
3. Save versioned, immutable snapshots containing inputs, source retrieval times, feature schema, code/model version, parameters, full-precision probabilities, missing/estimated fields and prediction time. Hash content; retries must not overwrite the original forecast.
4. Collect final results in separate records keyed by stable fixture ID. Handle postponed, abandoned and corrected results explicitly.
5. Only count predictions recorded before kickoff. Label current saved fixtures as retrospective if their kickoff has already passed; never backdate records.
6. Stage and validate a complete sync before publishing it. Preserve the last good snapshot on provider failure. Record per-source success and freshness.

Verification: duplicate/retry tests; timeout and malformed payload tests; timezone boundaries; postponement/correction tests; failure halfway through sync leaves published data intact; snapshot hash and replay match. Exit: a new round can be captured and settled without overwriting predictions.

## Phase 3 — chronological evaluation and shared context

1. Build one prediction pipeline used in browser, snapshot capture and evaluation. Pass an explicit as-of timestamp and dependencies; never use hidden browser globals or the current clock in historical evaluation.
2. Restrict every input to information available before the prediction cutoff. For date-only historical records, exclude the whole target date to avoid same-day leakage.
3. Use rolling recent results with declared windows and league/season coverage. Missing current history disables momentum/rest signals rather than treating old seasons as recent form. Rest needs a sufficiently complete fixture feed, not only league results.
4. For retrospective experiments, derive only features reconstructible from historical results (for example rolling goals and sequential ratings). Do not reuse present-day squads, standings or odds. This reduced model must be identified separately from the live composite model.
5. Split by time into development, validation and untouched final test periods. Tune only on earlier data; select on validation; evaluate the final test once. Use walk-forward folds with no same-day boundary overlap.

Verification: injecting future results cannot change past forecasts; shuffled input ordering gives identical results; fixture cutoff is strict; browser and Node replay identical probabilities with modifiers enabled; coverage/skipped records are reported. Exit: a reproducible leakage-controlled evaluation report, with its model and limitations identified.

## Phase 4 — evidence, baselines and calibrated probabilities

1. Evaluate uniform probabilities, historical league home/draw/away frequencies, a simple sequential rating model and the candidate on exactly the same eligible fixtures.
2. Track log loss (primary), multiclass Brier score, argmax accuracy, class recall/confusion matrix and calibration bins with sample counts. Report league/season and estimated-input subsets.
3. Include confidence intervals using resampling grouped by matchweek; record the seed and method. Do not treat a small aggregate gain as proof of improvement.
4. Fit any probability calibrator only on development/validation data. Persist and replay it as part of the model version.
5. Compare bookmaker probabilities only where timestamped pre-match odds exist; normalize margin. Evaluate coupon coverage and cost separately from match accuracy. No return claims without actual odds, settlement rules and an appropriate sample.

Release criterion: candidate improves held-out log loss against the declared simple baseline and incumbent, has acceptable Brier/calibration behavior, and no unexplained major league/class regressions. Require at least 500 eligible settled forecasts overall and 100 per reported league for an initial decision; these are operational starting thresholds, not statistical guarantees. If evidence is inconclusive, keep the incumbent and collect more observations.

## Phase 5 — release and operations

1. Separate versioned active model configuration from candidate reports. Promotion is an explicit reviewed change with linked evidence and rollback version.
2. CI on pushes/PRs checks imports, contracts, determinism, leakage, calibration calculations and UI behavior. Scheduled sync validates before publishing; run the repaired workflow remotely.
3. Add browser smoke checks for loading/failure states, all 15 rows, parameter loading and coupon controls. Show data freshness, model version and estimated-input status.
4. Monitor missing fixtures, source failures, stale snapshots, probability drift and settled performance by league. Alert on failed syncs; never silently present stale data as live.
5. Document recovery, key rotation and model rollback. Revoke the previously exposed provider credential externally.

Exit: successful remote CI and sync, tested rollback, visible freshness, and a retained audit trail. Predictive validation still depends on phase 4 evidence.

## Implementation status

The local implementation for phases 1–5 is in place as described below. Current national-team coverage and UTC matching are implemented, with the first 15 forecasts captured. The end-to-end plan is **not complete**: settled prospective evidence, remote release verification and provider-side key revocation remain open. Future unsupported competitions remain gated. Existing historical fit metrics must not be described as predictive validation. See [operations and recovery](OPERATIONS.md).

| Phase | Implemented and locally verified | Remaining exit requirements |
| --- | --- | --- |
| 1 | Shared live pipeline, argmax picks, frozen unvalidated model, diagnostic non-promotion, browser/Node parity, sourced national-team standings and labelled generic priors | Predictive validation remains pending |
| 2 | Immutable forecasts, exact replay, schedule/result revisions, timestamp checks, staged sync/recovery, verified UEFA UTC matching and first 15 captures | A real capture-to-settlement cycle; other competitions need their own verified kickoff source |
| 3 | Results-only chronological model, whole-date cutoffs, rolling history coverage, season resets, development/validation/test split, expanding-window folds, frozen protocol | New independent prospective test evidence; complete fixture history before enabling rest/fatigue or live historical modifiers |
| 4 | Uniform/frequency/rating research baselines, scores, class confusion/recall, calibration bins, league/season/estimated subsets, seeded paired matchweek intervals, validation-fitted temperature, separate coupon coverage/cost calculation | At least 500 paired prospective matches and 100 per reported league; timestamped bookmaker snapshots if comparing odds; favorable reviewed evidence |
| 5 | Push/PR CI, scheduled sync checks, rendered Chrome tests, visible coverage/model/freshness, health/drift reports, failure artifacts, release gate and recovery runbook | Remote CI/Pages verification, operator notification configuration, approved promotion/rollback review and exposed-key revocation |

### Final local verification (7 November 2026)

The real staged sync succeeded with TLS verification enabled and refreshed six club leagues plus current Nations League standings. Current round 1542 has 15/15 supported fixtures with matched UEFA UTC kickoffs; 15 eligible forecasts were captured. None is settled yet. The complete offline suite, full mocked sync, fault-injection/recovery tests and rendered Chrome smoke checks pass. Chrome screenshots are retained under test-results locally. The dependency audit found zero vulnerabilities after updating follow-redirects.

The frozen results-only experiment evaluated 137 reserved matches. Candidate log loss is 1.01356 versus 0.99611 for the rating baseline, and all paired 95% confidence intervals cross zero. Candidate draw recall is zero. This unfavorable result is retained; no model was promoted. The reserved data was previously available to diagnostics and exercised during implementation, so it is not independent prospective evidence.

The progress notes below describe earlier milestones; the table above supersedes their earlier planned/unfinished status for work now implemented.

### Phase 1 verification evidence

`npm test` passes both suites. The reliability suite loads the actual browser engine, feature, H2H, split, tuner and coupon scripts into an isolated JavaScript context and checks all 15 outputs against Node. It checks draw/close-win/tie and rounding behavior, invalid probability rejection, coupon constraints, and that running diagnostics leaves predictions and active parameters unchanged. The existing suite checks fixture coverage, missing-team handling and import provenance. These checks are not a rendered-browser smoke test or predictive validation.

Active settings are frozen in data/active_model.json with validationStatus unvalidated. Candidates are stored separately in data/tuning_report.json. Historical modifiers are disabled in the live caller pending phase 3.

### Automatic freshness requirement and implementation

No per-opening manual updates: the browser loads one cache-safe live snapshot on startup, polls every five minutes while visible and refreshes on tab return. It preserves the last valid data and displays stale/failed status. The workflow refreshes every 30 minutes and explicitly deploys Pages after tests. Scheduled execution is not a real-time guarantee. The first live snapshot was produced successfully from existing providers; automated tests cover schema validation, atomic publication failure, refresh success/failure, stale state and rollback rejection. Hosting must be enabled once and remote execution still needs verification. This mutable display snapshot is not an immutable pre-match evaluation record.

### Phase 2 recording progress

Implemented stable provider IDs, strict explicit-timezone cutoff eligibility, write-once first eligible forecasts, content-addressed inputs and engine source, separate result observations and correction history. Current-round results are collected each sync; previously recorded rounds are revisited for outstanding results and 30-day corrections. Regression tests cover timezone rejection, exact kickoff boundary, stale inputs, retry deduplication, preserved forecasts and past-round corrections. Live verification succeeded but produced zero eligible forecasts because all 15 provider kickoff timestamps lacked timezone offsets. Provider-timezone verification, postponed-match eligibility policy, final evaluation aggregation and transactional rollback of all working data are still open. Do not mark phase 2 complete.

### Settlement progress

Added append-only schedule revisions and correction sequencing (including A-B-A), conservative exclusion on kickoff/identity changes, withdrawn-final handling and an observed-forecast metrics command. The sync persists report.json. Tests verify eligible score aggregation, correction restoration, postponed/changed fixtures, withdrawal and forecast immutability. All four suites and site packaging pass. Current report contains zero eligible forecasts and null measured metrics; timezone verification is unresolved. These safeguards do not complete chronological backtesting, provider-status coverage, historical replay or predictive validation.
