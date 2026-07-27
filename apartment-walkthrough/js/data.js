/*
 * Tour data — reconstructed from the walkthrough video, cross-checked with an
 * independent Gemini 2.5 Pro video-analysis pass, and calibrated against SF
 * public records for 257-261 Andover St (3-unit Victorian, 1906; this is the
 * top-floor flat, listed ~1,320 sq ft; city LiDAR footprint 58.7x26 ft).
 *
 * Coordinates in feet: x = 0 at the Andover St (west) facade growing east
 * toward the rear; y = 0 at the north side wall growing south.
 * yaw: 0=east/rear, 90=south, 180=west/street, 270=north.
 */
window.TOUR = {
  title: 'Renovated Top-Floor Victorian Flat',
  start: 'entry',
  planNote:
    'Traced from the professional floor plan published with the building’s listing, reconciled with ' +
    'the walkthrough video, an independent Gemini 2.5 Pro video pass, and SF open data (LiDAR ' +
    'footprint for APN 5664/025: walls ≈ 55 × 23.5 ft ≈ 1,316 sq ft, matching the listed ~1,320, on ' +
    'a 25.1 × 73 ft lot). Left = Andover Street (WSW, sun-lit); rear deck and its stair sit beyond ' +
    'the east wall over the lower unit. Quirks per the listing plan: a void strip under the roof ' +
    'slope along the NW corner, a south-side light well that gives Bedroom 3 its window, an angled ' +
    'walk-in closet between kitchen and stair, and a north–south stair rising to a landing at the ' +
    'north wall beside the living room. The listing plan is unscaled and “approximate” by its own ' +
    'disclaimer; dimensions here come from measuring it against the surveyed envelope (±6″), and its ' +
    'decorative compass rose is ignored in favor of sun/skyline/parcel orientation (street = WSW).',

  plan: {
    bounds: { x0: -3.4, y0: -3.2, w: 71.5, h: 30.5 },
    wallThickness: 0.45,

    rooms: [
      { id: 'nwvoid',   name: '', poly: [[0.5,0.5],[18.9,0.5],[18.9,4.1],[0.5,4.1]], fill: '#f4f1e9' },
      { id: 'swell',    name: '', poly: [[18.9,20],[29.1,20],[29.1,23],[18.9,23]], fill: '#f4f1e9' },
      { id: 'frontbed', name: 'Primary Bedroom', poly: [[0.5,4.1],[18.9,4.1],[18.9,23],[0.5,23]], labelPos: [9.7,15.2], area: '≈ 280 sq ft incl. closets' },
      { id: 'bed2',     name: 'Bedroom 2', poly: [[18.9,0.5],[29.6,0.5],[29.6,10],[18.9,10]], labelPos: [24.2,5.4], area: '≈ 100 sq ft' },
      { id: 'bed3',     name: 'Bedroom 3', poly: [[18.9,13.5],[29.1,13.5],[29.1,20],[18.9,20]], labelPos: [24,16.6], area: '≈ 65 sq ft' },
      { id: 'hall',     name: 'Hall', poly: [[18.9,10],[29.6,10],[29.6,11.5],[33.4,11.5],[33.4,0.5],[36.9,0.5],[36.9,14.5],[29.1,14.5],[29.1,13.5],[18.9,13.5]], labelPos: [24.2,11.75], fill: '#ece8de' },
      { id: 'stairs',   name: '', poly: [[29.6,0.5],[33.4,0.5],[33.4,11.5],[29.6,11.5]], fill: '#e5e1d6' },
      { id: 'bath',     name: 'Bath', poly: [[29.1,14.5],[36.9,14.5],[36.9,23],[29.1,23]], labelPos: [33.2,19.2], area: '≈ 60 sq ft' },
      { id: 'wic',      name: '', poly: [[36.9,11.8],[42,11.8],[42,16],[36.9,16]], fill: '#f1ede4' },
      { id: 'living',   name: 'Living Room', poly: [[36.9,0.5],[54.9,0.5],[54.9,13.3],[45,13.3],[42,16],[42,11.8],[36.9,11.8]], labelPos: [46.5,6], area: '≈ 230 sq ft' },
      { id: 'kitchen',  name: 'Kitchen & Dining', poly: [[45,13.3],[54.9,13.3],[54.9,23],[36.9,23],[36.9,16],[42,16]], labelPos: [47.5,19], area: '≈ 130 sq ft' },
      { id: 'deck',     name: 'Deck', poly: [[54.9,1.5],[61.9,1.5],[61.9,11],[54.9,11]], labelPos: [58.4,6], area: '≈ 70 sq ft', fill: '#e9e5da' },
    ],

    walls: [
      // exterior envelope (rectangular; voids are under-roof cutouts)
      [[0,0],[54.9,0]],
      [[54.9,0],[54.9,23.5]],
      [[54.9,23.5],[0,23.5]],
      [[0,23.5],[0,0]],
      // NW void strip (roof-slope cutout over the closet band)
      [[0,4.1],[18.9,4.1]],
      [[18.9,0],[18.9,4.1]],
      // south light well
      [[18.9,20],[29.1,20]],
      [[18.9,20],[18.9,23.5]],
      [[29.1,20],[29.1,23.5]],
      // primary east wall — hall walks straight into it (door punched)
      [[18.9,4.1],[18.9,20]],
      // walk-in closet band inside the primary
      [[0,8.6],[13,8.6]],
      [[5.7,4.1],[5.7,8.6]],
      [[13,4.1],[13,8.6]],
      // bedroom 2 south wall on the hall (door punched)
      [[18.9,10],[29.6,10]],
      // stair shaft (N-S run, top open at the north end)
      [[29.6,0],[29.6,11.5]],
      [[33.4,2.2],[33.4,11.5]],
      // bedroom 3 north wall on the hall (door punched)
      [[18.9,13.5],[29.1,13.5]],
      // bath: north wall on the hall pocket, west wall to bed3
      [[29.1,13.5],[29.1,20]],
      [[29.1,14.5],[36.9,14.5]],
      // bath east / W.I.C. + kitchen west
      [[36.9,11.8],[36.9,23.5]],
      // living west wall
      [[36.9,0],[36.9,11.8]],
      // angled W.I.C. + kitchen chamfer
      [[36.9,11.8],[42,11.8]],
      [[42,11.8],[42,16]],
      [[42,16],[45,13.3]],
      [[36.9,16],[42,16]],
      // kitchen / living pass-through stubs (peninsula spans the opening)
      [[45,13.3],[45.6,13.3]],
      [[52.4,13.3],[54.9,13.3]],
    ],

    openings: [
      [[38,16],[40.5,16]],     // W.I.C./pantry opening from the kitchen side
    ],

    doors: [
      { hinge: [18.9,10.4], angle: 90, swing: 90,  width: 2.5 },  // primary — hall dead-ends into it
      { hinge: [21.4,10],   angle: 0,  swing: -90, width: 2.2 },  // bedroom 2
      { hinge: [20,13.5],   angle: 0,  swing: 90,  width: 2.2 },  // bedroom 3
      { hinge: [29.9,14.5], angle: 0,  swing: 90,  width: 2.1 },  // bath
      { hinge: [54.9,7.3],  angle: 90, swing: 90,  width: 2.3 },  // deck door
    ],

    windows: [
      [[0,10.9],[0,13.4]],              // primary — street (WSW sun)
      [[0,14.2],[0,17]],                // primary — street
      [[23.5,0],[26,0]],                // bedroom 2 — north
      [[31.9,0],[33.2,0]],              // small window at the stair top
      [[44,0],[46.5,0]],                // living — north
      [[54.9,3],[54.9,5.4]],            // living — rear, beside deck door
      [[54.9,17.6],[54.9,21.9]],        // kitchen/dining — rear east (water peek)
      [[31,23.5],[33.5,23.5]],          // bath — south vista
      [[22,20],[24.5,20]],              // bedroom 3 — onto the light well
    ],

    fixtures: [
      // kitchen peninsula with sink + dishwasher under the pass-through
      { type: 'rect', x: 45.6, y: 13.5, w: 6.4, h: 1.9 },
      { type: 'rect', x: 47.5, y: 13.8, w: 1.3, h: 1.3 },
      // range + fridge wrapping the chamfered corner
      { type: 'rect', x: 42.6, y: 15.2, w: 2.4, h: 2.4, label: 'Rng' },
      { type: 'rect', x: 37.4, y: 20.7, w: 2.6, h: 2.2, label: 'Ref' },
      // laundry pair inside the bath's NW corner (Gemini + video)
      { type: 'rect', x: 29.4, y: 15, w: 2.2, h: 2.5, label: 'W/D', ly: 15.4 },
      // bath: tub-shower along the east wall, pedestal sink, toilet
      { type: 'rect', x: 35.4, y: 16.4, w: 1.4, h: 5, label: '' },
      { type: 'circle', cx: 36.1, cy: 17.4, r: 0.01, label: 'Tub' },
      { type: 'circle', cx: 32.6, cy: 16.2, r: 0.7 },
      { type: 'rect', x: 31.2, y: 21.4, w: 1.4, h: 1.5 },
      // primary walk-in closet band
      { type: 'circle', cx: 3, cy: 6.3, r: 0.01, label: 'W.I.C.' },
      { type: 'circle', cx: 9.3, cy: 6.3, r: 0.01, label: 'W.I.C.' },
      { type: 'rect', x: 6.2, y: 5, w: 6.2, h: 0.7, label: '' },
      // primary skylight (south alcove)
      { type: 'rect', x: 9, y: 18.6, w: 2.4, h: 1.8 },
      // W.I.C. by the kitchen (shelved pantry/closet in the video)
      { type: 'circle', cx: 39.4, cy: 13.6, r: 0.01, label: 'W.I.C.' },
      // bedroom 2 skylight + deep closet under the slope
      { type: 'rect', x: 23.4, y: 2, w: 2.4, h: 1.8 },
      { type: 'rect', x: 26.7, y: 0.7, w: 2.6, h: 1.4, label: 'CL' },
      // stair skylight over the run
      { type: 'rect', x: 30, y: 3.2, w: 3, h: 2.6 },
      { type: 'circle', cx: 34.9, cy: 4.5, r: 0.01, label: 'skylight' },
      // stair treads (N-S run, descending south) + label
      { type: 'poly', pts: [[29.6,2.6],[33.4,2.6]] },
      { type: 'poly', pts: [[29.6,3.7],[33.4,3.7]] },
      { type: 'poly', pts: [[29.6,4.8],[33.4,4.8]] },
      { type: 'poly', pts: [[29.6,5.9],[33.4,5.9]] },
      { type: 'poly', pts: [[29.6,7],[33.4,7]] },
      { type: 'poly', pts: [[29.6,8.1],[33.4,8.1]] },
      { type: 'poly', pts: [[29.6,9.2],[33.4,9.2]] },
      { type: 'poly', pts: [[29.6,10.3],[33.4,10.3]] },
      { type: 'circle', cx: 31.5, cy: 12.6, r: 0.01, label: 'DN → entry' },
      // deck rail + rear stair down
      { type: 'poly', pts: [[54.9,1.5],[61.9,1.5]] },
      { type: 'poly', pts: [[61.9,1.5],[61.9,11]] },
      { type: 'poly', pts: [[54.9,11],[61.9,11]] },
      { type: 'poly', pts: [[61.9,4],[64.4,4]] },
      { type: 'poly', pts: [[61.9,5.2],[64.4,5.2]] },
      { type: 'poly', pts: [[61.9,6.4],[64.4,6.4]] },
      { type: 'poly', pts: [[61.9,7.6],[64.4,7.6]] },
      { type: 'circle', cx: 63.1, cy: 9, r: 0.01, label: 'DN' },
      // void labels
      { type: 'circle', cx: 9.7, cy: 2.3, r: 0.01, label: 'void · roof slope' },
      { type: 'circle', cx: 24, cy: 21.5, r: 0.01, label: 'light well' },
    ],

    dims: [
      { from: [0,23.5],   to: [54.9,23.5], offset: 2.4,  label: "55′0″ overall" },
      { from: [0,0],      to: [0,23.5],    offset: 2.4,  label: "23′6″ overall" },
      { from: [54.9,1.5], to: [61.9,1.5],  offset: -1.5, label: "7′0″" },
      { from: [61.9,1.5], to: [61.9,11],   offset: -1.7, label: "9′6″" },
      { from: [0.5,9.6],  to: [18.9,9.6],  offset: 0.15, label: "18′6″" },
      { from: [1.3,8.6],  to: [1.3,23],    offset: 0.15, label: "14′6″" },
      { from: [18.9,1.4], to: [29.6,1.4],  offset: 0.15, label: "10′6″" },
      { from: [19.7,0.5], to: [19.7,10],   offset: 0.15, label: "9′6″" },
      { from: [18.9,14.4],to: [29.1,14.4], offset: 0.15, label: "10′0″" },
      { from: [19.7,13.5],to: [19.7,20],   offset: 0.15, label: "6′6″" },
      { from: [29.1,22.6],to: [36.9,22.6], offset: 0.15, label: "7′6″" },
      { from: [30,14.5],  to: [30,23],     offset: 0.15, label: "8′6″" },
      { from: [37.4,1.2], to: [54.9,1.2],  offset: 0.15, label: "18′0″" },
      { from: [54.2,0.5], to: [54.2,13.3], offset: 0.15, label: "12′9″" },
      { from: [45.6,22.6],to: [54.9,22.6], offset: 0.15, label: "9′6″" },
    ],
  },

  nodes: [
    { id: 'entry', image: 'frames/entry.jpg', room: 'Entry', pos: [31.5,14], yaw: 270,
      links: [ { to: 'stairs', x: 17, y: 66, kind: 'walk', label: 'Up the stairs' } ] },

    { id: 'stairs', image: 'frames/stairs.jpg', room: 'Stairs', pos: [31.5,9], yaw: 270,
      links: [ { to: 'stairs-top', x: 48, y: 40, kind: 'walk', label: 'Keep climbing' },
               { to: 'entry', x: 50, y: 88, kind: 'back', label: 'Entry' } ] },

    { id: 'stairs-top', image: 'frames/stairs-top.jpg', room: 'Stairs', pos: [31.5,3.5], yaw: 270,
      links: [ { to: 'landing', x: 52, y: 44, kind: 'walk', label: 'Step up' },
               { to: 'stairs', x: 50, y: 82, kind: 'back', label: 'Back down' } ] },

    { id: 'landing', image: 'frames/landing.jpg', room: 'Landing', pos: [34.8,2.5], yaw: 10,
      links: [ { to: 'living', x: 80, y: 60, kind: 'walk', label: 'Living Room' },
               { to: 'landing-south', x: 8, y: 62, kind: 'turn', side: 'left', label: 'Hall & bedrooms' },
               { to: 'stairs-top', x: 45, y: 86, kind: 'back', label: 'Downstairs' } ] },

    { id: 'living', image: 'frames/living.jpg', room: 'Living Room', pos: [44,7], yaw: 0,
      links: [ { to: 'deck', x: 47, y: 47, kind: 'door', label: 'Deck' },
               { to: 'dining', x: 84, y: 53, kind: 'turn', label: 'Kitchen' },
               { to: 'living-return', x: 55, y: 72, kind: 'walk', label: 'Toward the deck' },
               { to: 'landing-south', x: 50, y: 88, kind: 'back', label: 'Landing' } ] },

    { id: 'living-return', image: 'frames/living-return.jpg', room: 'Living Room', pos: [49,7.5], yaw: 0,
      links: [ { to: 'deck', x: 38, y: 46, kind: 'door', label: 'Deck' },
               { to: 'landing-south', x: 10, y: 58, kind: 'walk', label: 'Landing' },
               { to: 'dining', x: 90, y: 55, kind: 'turn', label: 'Kitchen' },
               { to: 'living', x: 50, y: 88, kind: 'back', label: 'Back' } ] },

    { id: 'deck', image: 'frames/deck.jpg', room: 'Deck', pos: [57.5,6], yaw: 100,
      links: [ { to: 'deck-view', x: 38, y: 70, kind: 'walk', label: 'To the rail' },
               { to: 'living-return', x: 50, y: 90, kind: 'back', label: 'Back inside' } ] },

    { id: 'deck-view', image: 'frames/deck-view.jpg', room: 'Deck', pos: [59.8,8.5], yaw: 120,
      links: [ { to: 'deck', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'dining', image: 'frames/dining.jpg', room: 'Kitchen & Dining', pos: [51.5,17], yaw: 240,
      links: [ { to: 'living-return', x: 38, y: 40, kind: 'walk', label: 'Living Room' },
               { to: 'kitchen', x: 20, y: 60, kind: 'walk', label: 'Kitchen' },
               { to: 'kitchen-view', x: 82, y: 40, kind: 'turn', label: 'Window' } ] },

    { id: 'kitchen', image: 'frames/kitchen.jpg', room: 'Kitchen & Dining', pos: [46,19.5], yaw: 210,
      links: [ { to: 'pantry', x: 5, y: 45, kind: 'door', label: 'Pantry' },
               { to: 'living-return', x: 82, y: 42, kind: 'turn', label: 'Living Room' },
               { to: 'dining', x: 50, y: 88, kind: 'back', label: 'Dining' } ] },

    { id: 'kitchen-view', image: 'frames/kitchen-view.jpg', room: 'Kitchen & Dining', pos: [54,19.5], yaw: 40,
      links: [ { to: 'dining', x: 50, y: 90, kind: 'back', label: 'Back' } ] },

    { id: 'pantry', image: 'frames/pantry.jpg', room: 'Pantry', pos: [39.5,14], yaw: 80,
      links: [ { to: 'kitchen', x: 50, y: 90, kind: 'back', label: 'Kitchen' } ] },

    { id: 'landing-south', image: 'frames/landing-south.jpg', room: 'Landing', pos: [31.5,1.4], yaw: 90,
      links: [ { to: 'hall', x: 55, y: 47, kind: 'walk', label: 'Down the hall' },
               { to: 'living', x: 90, y: 60, kind: 'turn', side: 'right', label: 'Living Room' },
               { to: 'stairs-top', x: 32, y: 66, kind: 'back', label: 'Downstairs' } ] },

    { id: 'hall', image: 'frames/hall.jpg', room: 'Hallway', pos: [32,12.3], yaw: 115,
      links: [ { to: 'bath', x: 38, y: 48, kind: 'door', label: 'Bathroom' },
               { to: 'hall-south', x: 74, y: 49, kind: 'walk', label: 'Down the hall' },
               { to: 'landing-south', x: 50, y: 88, kind: 'back', label: 'Landing' } ] },

    { id: 'hall-south', image: 'frames/hall-south.jpg', room: 'Hallway', pos: [24,11.75], yaw: 185,
      links: [ { to: 'frontbed', x: 50, y: 51, kind: 'walk', label: 'Front Bedroom' },
               { to: 'bed3', x: 30, y: 56, kind: 'door', label: 'Bedroom 3' },
               { to: 'bed2', x: 88, y: 47, kind: 'door', label: 'Bedroom 2' },
               { to: 'hall', x: 50, y: 88, kind: 'back', label: 'Back up the hall' } ] },

    { id: 'bath', image: 'frames/bath.jpg', room: 'Bathroom', pos: [33,17.5], yaw: 120,
      links: [ { to: 'bath-window', x: 75, y: 40, kind: 'walk', label: 'By the window' },
               { to: 'laundry', x: 8, y: 60, kind: 'turn', side: 'left', label: 'Laundry' },
               { to: 'landing-south', x: 50, y: 88, kind: 'back', label: 'Landing' } ] },

    { id: 'bath-window', image: 'frames/bath-window.jpg', room: 'Bathroom', pos: [32.2,21.3], yaw: 100,
      links: [ { to: 'bath', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'laundry', image: 'frames/laundry.jpg', room: 'Laundry', pos: [30.4,16], yaw: 340,
      links: [ { to: 'bath', x: 50, y: 90, kind: 'back', label: 'Bathroom' } ] },

    { id: 'bed3', image: 'frames/bed3.jpg', room: 'Bedroom 3', pos: [23.8,16], yaw: 100,
      links: [ { to: 'bed3-view', x: 30, y: 42, kind: 'walk', label: 'Window view' },
               { to: 'hall-south', x: 50, y: 88, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed3-view', image: 'frames/bed3-view.jpg', room: 'Bedroom 3', pos: [23.2,18.7], yaw: 95,
      links: [ { to: 'bed3', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2', image: 'frames/bed2.jpg', room: 'Bedroom 2', pos: [23.5,5.5], yaw: 290,
      links: [ { to: 'bed2-window', x: 36, y: 52, kind: 'walk', label: 'Window' },
               { to: 'bed2-storage', x: 90, y: 55, kind: 'door', label: 'Closet & storage' },
               { to: 'hall-south', x: 50, y: 88, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed2-storage', image: 'frames/bed2-storage.jpg', room: 'Bedroom 2', pos: [26.8,2.2], yaw: 320,
      links: [ { to: 'bed2', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2-window', image: 'frames/bed2-window.jpg', room: 'Bedroom 2', pos: [22,1.6], yaw: 270,
      links: [ { to: 'bed2', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'frontbed', image: 'frames/frontbed.jpg', room: 'Front Bedroom', pos: [9.5,12.5], yaw: 185,
      links: [ { to: 'frontbed-view', x: 52, y: 40, kind: 'walk', label: 'Street view' },
               { to: 'hall-south', x: 50, y: 88, kind: 'back', label: 'Hallway' } ] },

    { id: 'frontbed-view', image: 'frames/frontbed-view.jpg', room: 'Front Bedroom', pos: [2.5,13.5], yaw: 185,
      links: [ { to: 'frontbed', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },
  ],
};
