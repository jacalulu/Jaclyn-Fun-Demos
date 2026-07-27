# Apartment Walkthrough

A Matterport / Street-View-style interactive walkthrough of a renovated apartment,
generated from a single handheld video (Pixel, 0.5× ultrawide).

- **Click the arrows** in the photo to walk from viewpoint to viewpoint
- **Arrow keys / WASD** also navigate (↑ forward, ←/→ turn, ↓ back)
- **Minimap** (bottom-left) shows where you're standing and which way you're facing
- **Floor Plan** button opens the full measured floor plan with dimensions

## Structure

```
index.html        page shell
css/style.css     all styling
js/app.js         walkthrough engine (node graph, transitions, hotspots, minimap)
js/floorplan.js   SVG floor plan renderer (walls, doors, windows, dimension lines)
js/data.js        THE DATA: photo nodes + links + measured floor plan
frames/           photo frames extracted from the source video
```

No build step — it's plain HTML/JS/CSS. Serve the folder with any static server:

```
cd apartment-walkthrough
python3 -m http.server 8080
# open http://localhost:8080
```

## How it was made

1. Frames were extracted from the walkthrough video with ffmpeg and analyzed
   to reconstruct the camera path and room layout.
2. Key viewpoints ("nodes") were chosen roughly every step or two along the
   path, plus turns and doorways, and linked into a navigation graph.
3. The floor plan was reconstructed from the video using the ultrawide
   (0.5×, ~123° FOV) geometry and standard architectural references
   (door widths, counter heights/depths, appliance sizes) for scale, then
   cross-referenced with public records for the building (a 3-unit Victorian
   built 1906 on Andover St, Bernal Heights; top-floor flat listed ≈1,320 sq ft).
   The L-shaped footprint (kitchen/dining wing + roof deck in the rear notch),
   window orientations (verified against the 4 PM sun direction in the video),
   and knee-wall eave zones come from that combined analysis.
