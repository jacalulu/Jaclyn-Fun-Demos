---
name: video-floorplan
description: >-
  Reconstruct an accurate floor plan and Matterport-style walkthrough from a
  handheld video of a home or apartment. Use this whenever the user provides a
  walkthrough video (or asks to map/lay out a space from footage), before
  extracting frames or drawing any plan. Encodes the hard-won procedure and
  failure modes from the 257-261 Andover project: ground-truth-first
  envelopes, chirality discipline, two-cue orientation, per-room measurement,
  and QA overlays.
---

# Video → Floor Plan Reconstruction Playbook

Follow the phases in order. The expensive mistakes all come from skipping
Phase 0-2 and drawing geometry too early.

## Phase 0 — Intake (before touching frames)
1. **Ask the owner for a 30-second topology description** ("what's at the end
   of the hall?", "which room is biggest?") and for any documents: listing
   floor plan, lender appraisal sketch, disclosure package. One owner sentence
   outranks hours of frame analysis; a professional plan ends the guessing.
2. Extract video metadata: Pixel/iPhone filenames encode UTC capture time →
   compute sun azimuth/elevation for the shoot. Note lens (0.5× ultrawide ≈
   123° FOV) — ultrawide compresses large rooms the most.

## Phase 1 — Ground truth the envelope FIRST
1. Identify the address; pull parcel polygon + LiDAR/building footprint from
   municipal GIS (SF: data.sfgov.org — EAS `ramy-di5m`, parcels `acdm-wktn`,
   footprints `ynuv-fyni`), plus listing square footage.
2. Fix the exterior envelope from survey data before drawing ANY interior
   wall. Interior rooms must sum to it; never stretch the envelope to fit
   rooms. Remember: roofline footprints include cornice/eave overhangs
   (subtract ~1-3 ft); decks can sit on lower-floor roofs beyond the top
   floor's end wall — an exterior deck does NOT imply an interior notch.

## Phase 2 — Fingerprints and inventory (still no geometry)
1. Contact-sheet the whole video (0.5-2 fps, timestamped) and build a **room
   fingerprint table**: floor tone/material, closet door types, fixtures,
   skylights. This keeps revisits identifiable.
2. **Doorway inventory**: per room, every doorway/opening with count + wall
   side relative to entry. The final plan must consume exactly this inventory.
3. **Adjacency from travel time**: consecutive spaces < 1.5 s apart in the
   video are adjacent (camera walks ~2.5 ft/s). Build the room graph from
   this before any coordinates exist.

## Phase 3 — Orientation (two independent cues, always)
- Candidate cues: direct-sun patches vs computed sun azimuth; **vista
  content** (city skylines, named ridgelines, water) matched to the map;
  terrain slope; neighbor roof heights from GIS.
- Never lock a side from ONE cue. Skylights leak low sun onto both roof
  slopes; a single sunbeam misled an entire revision.
- **Chirality discipline**: left/right conclusions from sampled stills flip
  silently when the camera turns between samples. Track heading continuously
  through every turn (3+ fps through transitions). Stair axis comes from the
  climb's own frames — which walls the run parallels — not from assumption.
- Ignore decorative compass roses on marketing plans; verify against parcel
  orientation.

## Phase 4 — Dimensions (measure, don't allocate)
- Scale each room independently against standard objects: doors 30″×80″,
  W/D pair 27″ each, range 30″, counters 25″ deep, stair treads ~10″,
  toilets ~28″ deep. Count stair risers for floor-to-floor height.
- Do NOT distribute leftover envelope length evenly across rooms — measure
  each; the discrepancy room is usually the big one the ultrawide shrank.
- Camera dwell time ≠ room size.

## Phase 5 — Independent cross-check
- Run a second, video-native model over the FULL video (e.g. Gemini via
  OpenRouter, ~8 fps 432px transcode keeps it under upload limits) with a
  structured prompt: timeline, per-room doorways with wall sides, hall
  topology, closets, windows + what's visible outside, size ranking.
- Treat disagreements as pointers back to pixels, not as authority — its
  room-relative descriptions tend to beat your global-frame reasoning, but
  its global left/right needs the same verification yours does.

## Phase 6 — Output QA (before showing anyone)
- Floor plan: render and eyeball against the fingerprint table and doorway
  inventory; no stale fixtures from earlier layout revisions.
- Walkthrough hotspots: anchor in IMAGE coordinates (cover-crop math +
  viewport clamping), never viewport %. Generate an annotated overlay
  contact sheet of every node's hotspots and hand-check each; test at two
  window aspect ratios.
- Label estimates as estimates (±6-12″) and cite ground-truth sources in the
  plan's footnote.

## Reference
Full post-mortem with the original failure narrative:
`apartment-walkthrough/MAPPING-LESSONS.md` in this repo.
