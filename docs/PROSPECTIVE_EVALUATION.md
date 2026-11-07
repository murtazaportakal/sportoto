# Prospective evaluation and review

Implemented 7 November 2026. The active baseline remains unvalidated. This completes the software needed to collect paired evidence; future results and a favorable independent review are still required.

Release verification: commit 32c2526 passed Reliability checks run 42407946471 and real sync/deployment run 42407946592. The remote sync found all 15 paired records already present, with no pause or capture exclusions. Original and paired forecast/input/code artifacts were unchanged. The generated report's evidence hash matched when recomputed on Windows after the Linux runner, and the hosted snapshot matched repository data and rendered 15 rows in Chrome. Verification evidence is retained in data/remote_release.json.

## Frozen comparison

data/prospective_experiment.json declares the incumbent, compatible live-composite challenger, simple standings-rating baseline and uniform reference. The challenger is a diagnostic-grid hypothesis, not a validated replacement. Daily tuning never edits it. The simple baseline uses the same snapshot's standings-derived rating, a declared rating scale/home adjustment and constant draw probability. It is also an unvalidated heuristic.

The experiment registration and prediction source are immutable under data/evaluation/paired/{experimentId}. Every first eligible record contains all four models, one input snapshot, one capture time, the kickoff, code/input/protocol hashes and provider identity. Capture is strictly before kickoff and at or after registration. Model probabilities are replayed from the archived source before scoring.

The initial experiment recorded 15 pairs for the upcoming fixtures. The original 15 incumbent-only forecasts are untouched. Paired records were captured later, still before kickoff, and contain newly computed incumbent predictions; they do not backdate candidate predictions or represent 30 distinct matches.

Changing parameters under the same experiment ID is rejected. Changed prediction source or an active-incumbent mismatch pauses new captures and appears in data/health.json. A separately reviewed experiment ID is needed to resume collection after such changes. Old experiments continue to settle using their archived source. Registrations, captures, observations and reports are part of the staged sync transaction and roll back together on failure.

## Collection and settlement

Every scheduled sync updates current observations and revisits previously recorded rounds for the original stream and all registered paired experiments. Shared round requests and kickoff feeds are deduplicated. Final-result corrections append observations; postponements, withdrawals, identity/kickoff changes and invalid timestamps use the same settlement safeguards across all models. If any prediction fails artifact/replay validation, the entire paired sample is excluded.

`npm run evaluate:paired` reports candidate/incumbent/simple/uniform scores, per-class confusion/recall and calibration bins, grouped paired log-loss intervals, league comparisons and season/estimated-input subsets. All models use exactly the same scored fixture set. Reports are stored under the experiment and accepted by `node release_gate.js <report.json>`.

`npm run evidence` shows the original stream and pairedExperiments separately. Read pairedExperiments for promotion-sample progress. The minimum is 500 eligible paired settled matches overall and 100 per reported league. These are operational thresholds, not guarantees. No model is promoted automatically. The candidate must improve log loss with convincing paired intervals and acceptable Brier/calibration and class/league behavior.

## Evidence-bound review

Independent test review and league/class review default to pending. A reviewer can supply review.json in the experiment directory with dataHash, protocolHash, approvedBy, reviewedAt, independentTestReview and leagueAndClassReview. Review time must follow the evidence's result observations. dataHash binds the scored forecast/result artifacts, protocol and evaluationCodeHash, using normalized line endings for a stable cross-platform code fingerprint. Result corrections and evaluation-code changes invalidate earlier approval. A reviewer must verify the actual sample, artifacts and approving person's identity separately. These fields retain an audit record; they do not authenticate a person. Never fabricate approvals or delete an unfavorable experiment.

After an approved comparison, archive the incumbent configuration, retain its checksum/evidence reference, apply the candidate in a reviewed change, rerun tests/browser checks and deploy. Restore the archived configuration with a fresh snapshot if rollback is needed. No approval is implied by passing a sample threshold or by a diagnostic fit score.

## Club kickoff coverage

Club rounds use explicit UTC ESPN scoreboards for tur.1, eng.1, esp.1, ger.1, ita.1 and fra.1. Matching requires both identities, available ESPN team IDs, home/away ordering, league and calendar date, with exactly one time-valid event. Both teams' standings provenance must identify the same supported league, or the original verified fixture must retain that league. Primary timestamps already carrying an explicit timezone can stand on their own.

Unsupported/missing identities, missing or ambiguous matches, provisional kickoff times and status/score conflicts remain ineligible. No timezone offset is inferred from naive Sportoto timestamps. Past forecasts retain their verified league provenance for result collection even if current standings coverage changes. National fixtures continue to use uniquely matched UEFA UTC times. All six club feeds were probed with real responses; tests cover matching, exclusions, status checks and request reuse. Actual end-to-end club capture awaits a matching club round; unmapped teams remain gated.
