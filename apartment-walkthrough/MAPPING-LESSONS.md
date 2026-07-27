# Video → Floor Plan: Mapping Post-Mortem & Lessons

A frank accounting of what went wrong (and right) reconstructing the 257-261
Andover top-floor flat from a single handheld walkthrough video, so the next
video-to-floor-plan attempt starts smarter. The plan went through **four major
revisions**; each error below actually happened.

## Failure modes observed

### 1. Chirality (left/right) flips are the #1 killer
Three of the four rebuilds trace back to left/right errors. Reasoning about
"the door on the left" from *sampled stills* silently flips when the camera
turns between samples. A wrong left/right at one junction mirrors everything
downstream of it.

**Fix for next time:** track camera heading *continuously* — decode dense
frames through every turn and log cumulative rotation, never inferring
orientation across a gap. Treat any left/right conclusion reached from a
single still as unverified until a second, independent cue agrees.

### 2. One physical cue is not a compass
The 4 PM sunbeam (from the filename timestamp) was genuinely powerful — it
correctly pinned the street facade as WSW-facing. But over-weighting a single
sunbeam in the bathroom, without confirming *which window* produced it, drove
an entire wrong layout revision. Skylights complicate sun logic: they admit
low-angle sun on both roof slopes.

**Fix:** require two agreeing cues before locking any orientation:
sun direction + skyline content + terrain slope + neighbor heights.

### 3. Vista *content* is the strongest orientation cue in a city
What finally settled the side assignment wasn't geometry — it was noticing the
long view contained **no downtown towers** (so not north) but a big green
ridge (San Bruno Mountain = south) and water only from the rear windows
(bay = east). In a known city, catalog what each window actually shows and
match against the map before trusting any inferred geometry.

### 4. Fit the surveyed envelope FIRST, interior second
Parcel polygons and LiDAR building footprints (data.sfgov.org) were fetched
mid-project; the interior had already been drawn twice at the wrong scale
(~890 sq ft vs the true ~1,320). Public GIS + the listing square footage
should be step one; every interior wall then has a hard boundary to live in.

### 5. Travel-time = distance (the 1-second rule)
The laundry was initially placed ~15 ft from the bathroom even though the
video walks between them in under a second. Camera carry speed (~2.5 ft/s)
bounds the distance between consecutively-visited spaces. Enforce it: any
two spaces visited < 1.5 s apart are adjacent, full stop.

### 6. Inventory doorways before assembling the graph
Early plans invented doors the video never showed and dropped ones it did.
The robust order: per room, enumerate every visible doorway/opening (count +
wall side relative to entry) → then assemble a plan that consumes exactly
that inventory, no more, no less.

### 7. Room fingerprints prevent revisit confusion
Floor tone (dark walnut vs warm oak vs gray LVP), closet door types
(flat / louvered / bifold), light fixtures, and skylights uniquely identified
rooms across repeat visits. Build the fingerprint table first; it's how
"which room am I in now?" stays answerable at minute 3 of a tour.

### 8. A second observer helps — as a flag, not an oracle
An independent Gemini 2.5 Pro pass over the full video caught real errors
(bath+laundry as one suite off the landing; bedrooms directly opposite across
the hall; full-width front bedroom) — its *room-relative* wall descriptions
were more reliable than my global-frame reasoning. But its global left/right
also needed verification. Use disagreement as a pointer back to pixels.

### 9. Anchor UI to the image, not the viewport
Walkthrough hotspot arrows were first positioned as % of the *window*; with
`object-fit: cover`, the visible crop changes with window shape, so arrows
drifted onto blank walls at other aspect ratios. Anchor annotations in image
coordinates, convert with the cover-crop math, clamp to the viewport — and QA
at ≥2 aspect ratios.

### 10. Owner knowledge is gold — solicit it early
"The hall ends by walking into the biggest bedroom" (one sentence from the
owner) resolved what hours of frame analysis had gotten wrong. Ask the human
for a 30-second description of the topology *before* the first draft, not
after the third.

## What worked and should be kept

- **Filename timestamp as a sun compass** (PXL files encode UTC) — with rule 2.
- **Standard-size references for scale**: 30″ doors, 27″ laundry pairs, 30″
  ranges, ~10″ stair treads, counter depths.
- **Public records triangulation**: parcel dims + LiDAR footprint + listing
  sq ft agreed within ~1% (55.5×23.5 ≈ 1,316 vs listed 1,320).
- **Sharpness-scored frame extraction** (Laplacian over candidates) for
  crisp tour nodes.
- **Annotated-overlay QA sheets** before shipping — caught a dozen misplaced
  hotspots in one look.

## Ground truth status

No professional floor plan was published with the 2026 listing (Compass page
data: `shouldShowFloorplans: false`). Best available ground truth: the city
LiDAR envelope (used), the owner's corrections (used), and — if located — the
lender appraisal sketch from the purchase, which would settle remaining
interior-dimension uncertainty (hall width, exact bedroom split, bath depth).
