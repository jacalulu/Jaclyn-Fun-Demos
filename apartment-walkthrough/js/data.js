/*
 * Tour data — generated from the source walkthrough video and cross-referenced
 * with public records for 257-261 Andover St, San Francisco (3-unit Victorian,
 * built 1906; this is the top-floor flat, listed at ~1,320 sq ft).
 *
 * Coordinate system (feet): x = 0 at the Andover St (west) facade growing
 * toward the rear (east); y = 0 at the north side wall growing south.
 * The building is L-shaped: the kitchen/dining wing extends ~8.5 ft deeper
 * than the living room's rear wall, and the roof deck fills the notch at the
 * rear north-east corner. yaw: 0=east/rear, 90=south, 180=west/street, 270=north.
 */
window.TOUR = {
  title: 'Renovated Top-Floor Victorian Flat',
  start: 'entry',
  planNote:
    'Reconstructed from the walkthrough video, cross-referenced with public records for the ' +
    'building (3-unit Victorian, built 1906; top-floor flat listed ≈1,320 sq ft — a figure that ' +
    'likely includes the stair envelope and under-eave storage). The footprint is not a simple ' +
    'rectangle: the kitchen/dining wing runs ~8.5 ft deeper than the living room wall, the roof ' +
    'deck fills the L-notch at the rear corner, and the attic roofline pulls usable space in ' +
    'behind knee walls (hatched “low eave” zones). Envelope verified against SF open data: the ' +
    'city’s LiDAR building footprint for this parcel (APN 5664/025) measures 58.7 × 26.0 ft at ' +
    'the roofline including cornice/eave overhangs — wall-to-wall ≈ 55.5 × 23.5 ft (≈1,316 sq ft, ' +
    'matching the listed 1,320), on a 25.1 × 73 ft lot. Left = Andover Street; the hall runs from ' +
    'the landing straight into the big front bedroom; the sun-lit front windows face the street ' +
    '(WSW), the bath’s south window looks over the neighbor’s low roof, the big vista windows face ' +
    'north over the downhill neighbor, and the peek-a-boo water views are from the rear ' +
    'living/dining windows. ' +
    'Dimensions are estimates from the ultrawide footage calibrated against standard-size ' +
    'elements (30″ doors, 27″ laundry pair, 30″ range, stair treads); expect ±6–12″ on any span.',

  plan: {
    bounds: { x0: -3.4, y0: -3.2, w: 63, h: 30.5 },
    wallThickness: 0.45,

    rooms: [
      { id: 'frontbed', name: 'Bedroom 1', poly: [[0.5,0.5],[11,0.5],[11,16.5],[0.5,16.5]], labelPos: [5.7,8.4], area: '≈ 165 sq ft' },
      { id: 'bed3',     name: 'Bedroom 3', poly: [[12,0.5],[22,0.5],[22,13.5],[12,13.5]], labelPos: [17,7.4], area: '≈ 125 sq ft' },
      { id: 'living',   name: 'Living Room', poly: [[22,0.5],[47,0.5],[47,11.5],[39.5,11.5],[39.5,11],[25,11],[25,7],[22,7]], labelPos: [32.5,3.9], area: '≈ 200 sq ft' },
      { id: 'hall',     name: 'Hall', poly: [[11,13.5],[22,13.5],[22,7],[25,7],[25,16.5],[11,16.5]], labelPos: [17.5,15.15], fill: '#ece8de' },
      { id: 'stairs',   name: '', poly: [[25,11],[39.5,11],[39.5,14.5],[25,14.5]], fill: '#e5e1d6' },
      { id: 'bath',     name: 'Bath', poly: [[14,16.5],[21,16.5],[21,23],[14,23]], labelPos: [17.3,19.6], area: '≈ 45 sq ft' },
      { id: 'laundry',  name: '', poly: [[11,16.5],[14,16.5],[14,20],[11,20]] },
      { id: 'bed2',     name: 'Bedroom 2', poly: [[25,14.5],[39.5,14.5],[39.5,23],[25,23]], labelPos: [32,18], area: '≈ 120 sq ft' },
      { id: 'kitchen',  name: 'Kitchen', poly: [[39.5,11.5],[48,11.5],[48,23],[39.5,23]], labelPos: [44.7,17.6], area: '≈ 100 sq ft' },
      { id: 'dining',   name: 'Dining', poly: [[48,11.5],[55.5,11.5],[55.5,23],[48,23]], labelPos: [51.6,16.6], area: '≈ 85 sq ft' },
      { id: 'pantry',   name: '', poly: [[39.5,15.5],[42,15.5],[42,18.5],[39.5,18.5]] },
      { id: 'deck',     name: 'Deck', poly: [[47,0.5],[55,0.5],[55,11],[47,11]], labelPos: [51,5.4], area: '≈ 80 sq ft', fill: '#e9e5da' },
    ],

    walls: [
      // exterior — L-shaped envelope (deck is open-air in the NE notch)
      [[0,0],[47,0]],                       // north wall, main block
      [[47,0],[47,11.5]],                 // living rear wall (deck door + windows)
      [[47,11.5],[55.5,11.5]],                // wing north wall (faces the deck)
      [[55.5,11.5],[55.5,23.5]],                    // wing rear (east) wall
      [[55.5,23.5],[0,23.5]],                       // south wall
      [[0,23.5],[0,0]],                         // west facade on Andover St
      // bedroom 1 / bedroom 3
      [[11.5,0],[11.5,13.5]],
      // hall north wall (bedroom 3 door punched by door def)
      [[11.5,13.5],[22,13.5]],
      // hall end wall — walks straight into Bedroom 1
      [[11,13.5],[11,16.5]],
      // bedroom 3 / living
      [[22,0],[22,13.5]],
      // bath + laundry north wall on the hall / Bedroom 1 south wall
      [[0,16.5],[22,16.5]],
      // laundry / bath dividers
      [[11,16.5],[11,23.5]],
      [[14,16.5],[14,23.5]],
      [[21,16.5],[21,23.5]],
      [[11,20],[14,20]],
      // pocket / south eave
      [[21,16.5],[25,16.5]],
      // bedroom 2 west wall (door to the pocket punched by door def)
      [[25,14.5],[25,23.5]],
      // stairwell south = bedroom 2 north
      [[25,14.5],[39.5,14.5]],
      // wing west wall (stair side + bedroom 2 east)
      [[39.5,11.5],[39.5,14.5]],
      [[39.5,14.5],[39.5,23.5]],
      // pass-through wall stubs (peninsula counter spans the opening)
      [[39.5,11.5],[40.5,11.5]],
      [[46.5,11.5],[47,11.5]],
      // pantry
      [[39.5,15.5],[42,15.5]],
      [[39.5,18.5],[42,18.5]],
      [[42,15.5],[42,18.5]],
    ],

    doors: [
      { hinge: [11,13.8],   angle: 90, swing: 90,  width: 2.4 },  // bedroom 1 — hall dead-ends straight into it
      { hinge: [18,13.5],   angle: 0,  swing: -90, width: 2.2 },  // bedroom 3 (mid-hall, north side)
      { hinge: [14.6,16.5], angle: 0,  swing: 90,  width: 2.1 },  // bath (mid-hall, south side)
      { hinge: [11.4,16.5], angle: 0,  swing: 90,  width: 2.0 },  // laundry
      { hinge: [25,15.1],   angle: 90, swing: -90, width: 2.1 },  // bedroom 2 (off the pocket)
      { hinge: [42,16.1], angle: 90, swing: -90, width: 2.0 },  // pantry
      { hinge: [47,5],    angle: 90, swing: 90,  width: 2.4 },  // deck door
    ],

    windows: [
      [[0,4.5],[0,9]],                  // bedroom 1 — street (WSW sun)
      [[15.2,23.5],[17.7,23.5]],        // bath — south, over the neighbor's low roof (4pm sunbeam)
      [[15,0],[18,0]],                  // bedroom 3 — north vista
      [[29.5,0],[32,0]],                // living — north
      [[47,1.5],[47,4]],            // living — rear, beside deck door
      [[47,8],[47,10.5]],           // living — rear
      [[48.5,11.5],[52.5,11.5]],        // dining — onto the deck
      [[55.5,14],[55.5,17]],                // dining — rear east (water peek)
      [[31,23.5],[34,23.5]],                // bedroom 2 — south slider (close neighbor)
    ],

    fixtures: [
      // kitchen peninsula with sink + dishwasher under the pass-through
      { type: 'rect', x: 40.5, y: 11.7, w: 6, h: 1.9 },
      { type: 'rect', x: 42.5, y: 12, w: 1.3, h: 1.3 },
      // appliance run along the kitchen's south wall
      { type: 'rect', x: 40.1, y: 21.5, w: 2.6, h: 1.4, label: 'Ref' },
      { type: 'rect', x: 42.9, y: 21.5, w: 2.5, h: 1.4, label: 'Rng' },
      // laundry pair
      { type: 'rect', x: 11.3, y: 17, w: 2.3, h: 2.4, label: 'W/D', ly: 21 },
      // bath: shower along the south wall, pedestal sink, toilet by the street window
      { type: 'rect', x: 19.5, y: 17.2, w: 1.4, h: 5.2, label: '' },
      { type: 'circle', cx: 19.9, cy: 18.2, r: 0.01, label: 'Shwr' },
      { type: 'circle', cx: 15.2, cy: 18, r: 0.7 },
      { type: 'rect', x: 15.1, y: 21.6, w: 1.4, h: 1.5 },
      // closets
      { type: 'rect', x: 1.5, y: 0.7, w: 6.5, h: 1.6, label: 'CL' },   // bedroom 1 louvered
      { type: 'rect', x: 20.2, y: 1, w: 1.6, h: 5, label: 'CL' },      // bedroom 3
      { type: 'rect', x: 25.3, y: 21.7, w: 8, h: 1.1, label: 'eave storage' }, // bedroom 2 knee-wall shelves
      // skylights (thin outlines)
      { type: 'rect', x: 29.5, y: 11.3, w: 3.5, h: 3 },
      { type: 'circle', cx: 32.2, cy: 11.8, r: 0.01, label: 'skylight' },
      { type: 'rect', x: 28.5, y: 19, w: 2.6, h: 2 },
      { type: 'rect', x: 4, y: 2.8, w: 2.6, h: 2 },
      // stair treads + labels
      { type: 'poly', pts: [[26.2,11],[26.2,14.5]] },
      { type: 'poly', pts: [[27.4,11],[27.4,14.5]] },
      { type: 'poly', pts: [[28.6,11],[28.6,14.5]] },
      { type: 'poly', pts: [[29.8,11],[29.8,14.5]] },
      { type: 'poly', pts: [[31,11],[31,14.5]] },
      { type: 'poly', pts: [[32.2,11],[32.2,14.5]] },
      { type: 'poly', pts: [[33.4,11],[33.4,14.5]] },
      { type: 'poly', pts: [[34.6,11],[34.6,14.5]] },
      { type: 'poly', pts: [[35.8,11],[35.8,14.5]] },
      { type: 'poly', pts: [[37,11],[37,14.5]] },
      { type: 'circle', cx: 31.5, cy: 13, r: 0.01, label: '' },
      { type: 'circle', cx: 28.2, cy: 13.8, r: 0.01, label: 'DN → street entry' },
      // stair guard rails (north edge + west return at the pocket)
      { type: 'rect', x: 25, y: 10.85, w: 13, h: 0.15 },
      { type: 'rect', x: 24.85, y: 11, w: 0.15, h: 3.5 },
      // deck rail
      { type: 'poly', pts: [[47,0.5],[55,0.5]] },
      { type: 'poly', pts: [[55,0.5],[55,11]] },
      { type: 'poly', pts: [[55,11],[55.5,11.5]] },
      // low-eave knee-wall zones (limited headroom)
      { type: 'rect', x: 0.8, y: 17, w: 9.8, h: 6.1, label: 'low eave' },
      { type: 'rect', x: 21.3, y: 16.8, w: 3.4, h: 6.2, label: 'low eave' },
    ],

    dims: [
      { from: [0,23.5],   to: [55.5,23.5], offset: 2.4,  label: "55′6″ overall" },
      { from: [0,0],      to: [0,23.5],    offset: 2.4,  label: "23′6″ overall" },
      { from: [47,0.5],   to: [55,0.5],    offset: -1.5, label: "8′0″" },
      { from: [55,0.5],   to: [55,11],     offset: -1.5, label: "10′6″" },
      { from: [0.5,12.8], to: [11,12.8],   offset: 0.15, label: "10′6″" },
      { from: [1.3,0.5],  to: [1.3,16.5],  offset: 0.15, label: "16′0″" },
      { from: [12,1.4],   to: [22,1.4],    offset: 0.15, label: "10′0″" },
      { from: [12.8,0.5], to: [12.8,13.5], offset: 0.15, label: "13′0″" },
      { from: [22.5,6.4], to: [47,6.4],    offset: 0.15, label: "24′6″" },
      { from: [46.3,0.5], to: [46.3,11.5], offset: 0.15, label: "11′0″" },
      { from: [25.5,15.1],to: [39.5,15.1], offset: 0.15, label: "14′6″" },
      { from: [26,14.5],  to: [26,23],     offset: 0.15, label: "8′6″" },
      { from: [14,19.9],  to: [21,19.9],   offset: 0.15, label: "7′0″" },
      { from: [14.6,16.5],to: [14.6,23],   offset: 0.15, label: "6′6″" },
      { from: [41,14.9],  to: [55.5,14.9], offset: 0.15, label: "16′0″ wing" },
      { from: [54.8,11.5],to: [54.8,23],   offset: 0.15, label: "11′6″" },
    ],
  },

  nodes: [
    { id: 'entry', image: 'frames/entry.jpg', room: 'Entry', pos: [26.5,12.7], yaw: 0,
      links: [ { to: 'stairs', x: 34, y: 58, kind: 'walk', label: 'Up the stairs' } ] },

    { id: 'stairs', image: 'frames/stairs.jpg', room: 'Stairs', pos: [30,12.7], yaw: 0,
      links: [ { to: 'stairs-top', x: 50, y: 42, kind: 'walk', label: 'Keep climbing' },
               { to: 'entry', x: 50, y: 93, kind: 'back', label: 'Entry' } ] },

    { id: 'stairs-top', image: 'frames/stairs-top.jpg', room: 'Stairs', pos: [36,12.7], yaw: 0,
      links: [ { to: 'landing', x: 52, y: 45, kind: 'walk', label: 'Step up' },
               { to: 'stairs', x: 50, y: 93, kind: 'back', label: 'Back down' } ] },

    { id: 'landing', image: 'frames/landing.jpg', room: 'Landing', pos: [39,9.5], yaw: 320,
      links: [ { to: 'living', x: 70, y: 58, kind: 'walk', label: 'Living Room' },
               { to: 'landing-south', x: 12, y: 78, kind: 'turn', side: 'left', label: 'Hall & bedrooms' },
               { to: 'stairs-top', x: 45, y: 92, kind: 'back', label: 'Downstairs' } ] },

    { id: 'living', image: 'frames/living.jpg', room: 'Living Room', pos: [35,6], yaw: 0,
      links: [ { to: 'deck', x: 47, y: 44, kind: 'door', label: 'Deck' },
               { to: 'dining', x: 84, y: 58, kind: 'turn', label: 'Kitchen' },
               { to: 'living-return', x: 55, y: 78, kind: 'walk', label: 'Toward the deck' },
               { to: 'landing-south', x: 50, y: 93, kind: 'back', label: 'Landing' } ] },

    { id: 'living-return', image: 'frames/living-return.jpg', room: 'Living Room', pos: [42,6.5], yaw: 0,
      links: [ { to: 'deck', x: 48, y: 42, kind: 'door', label: 'Deck' },
               { to: 'dining', x: 86, y: 66, kind: 'turn', label: 'Kitchen' },
               { to: 'living', x: 50, y: 93, kind: 'back', label: 'Back' } ] },

    { id: 'deck', image: 'frames/deck.jpg', room: 'Deck', pos: [49.5,5], yaw: 100,
      links: [ { to: 'deck-view', x: 55, y: 45, kind: 'walk', label: 'To the rail' },
               { to: 'living-return', x: 50, y: 93, kind: 'back', label: 'Back inside' } ] },

    { id: 'deck-view', image: 'frames/deck-view.jpg', room: 'Deck', pos: [52,8.5], yaw: 120,
      links: [ { to: 'deck', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'dining', image: 'frames/dining.jpg', room: 'Kitchen & Dining', pos: [52,15], yaw: 240,
      links: [ { to: 'living-return', x: 62, y: 50, kind: 'walk', label: 'Living Room' },
               { to: 'kitchen', x: 30, y: 60, kind: 'walk', label: 'Kitchen' },
               { to: 'kitchen-view', x: 85, y: 40, kind: 'turn', label: 'Window' } ] },

    { id: 'kitchen', image: 'frames/kitchen.jpg', room: 'Kitchen & Dining', pos: [45,15.5], yaw: 200,
      links: [ { to: 'pantry', x: 8, y: 45, kind: 'door', label: 'Pantry' },
               { to: 'living-return', x: 80, y: 45, kind: 'turn', label: 'Living Room' },
               { to: 'dining', x: 50, y: 91, kind: 'back', label: 'Dining' } ] },

    { id: 'kitchen-view', image: 'frames/kitchen-view.jpg', room: 'Kitchen & Dining', pos: [54,14.5], yaw: 40,
      links: [ { to: 'dining', x: 50, y: 92, kind: 'back', label: 'Back' } ] },

    { id: 'pantry', image: 'frames/pantry.jpg', room: 'Pantry', pos: [40.8,17], yaw: 200,
      links: [ { to: 'kitchen', x: 50, y: 92, kind: 'back', label: 'Kitchen' } ] },

    { id: 'landing-south', image: 'frames/landing-south.jpg', room: 'Landing', pos: [39.5,9.8], yaw: 190,
      links: [ { to: 'hall', x: 52, y: 56, kind: 'walk', label: 'Down the hall' },
               { to: 'living', x: 92, y: 70, kind: 'turn', side: 'right', label: 'Living Room' },
               { to: 'stairs-top', x: 38, y: 80, kind: 'back', label: 'Downstairs' } ] },

    { id: 'hall', image: 'frames/hall.jpg', room: 'Hallway', pos: [31,9], yaw: 185,
      links: [ { to: 'bath', x: 38, y: 46, kind: 'door', label: 'Bathroom' },
               { to: 'frontbed', x: 74, y: 50, kind: 'door', label: 'Front Bedroom' },
               { to: 'hall-south', x: 55, y: 68, kind: 'walk', label: 'Down the hall' },
               { to: 'bed2', x: 10, y: 76, kind: 'turn', side: 'left', label: 'Bedroom 2' },
               { to: 'landing-south', x: 50, y: 94, kind: 'back', label: 'Landing' } ] },

    { id: 'hall-south', image: 'frames/hall-south.jpg', room: 'Hallway', pos: [17.5,15], yaw: 185,
      links: [ { to: 'frontbed', x: 50, y: 54, kind: 'walk', label: 'Front Bedroom' },
               { to: 'bath', x: 26, y: 62, kind: 'door', label: 'Bathroom' },
               { to: 'bed3', x: 80, y: 46, kind: 'door', label: 'Bedroom 3' },
               { to: 'laundry', x: 40, y: 66, kind: 'door', label: 'Laundry' },
               { to: 'hall', x: 50, y: 93, kind: 'back', label: 'Back up the hall' } ] },

    { id: 'bath', image: 'frames/bath.jpg', room: 'Bathroom', pos: [17,18.5], yaw: 100,
      links: [ { to: 'bath-window', x: 62, y: 42, kind: 'walk', label: 'By the window' },
               { to: 'hall-south', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'bath-window', image: 'frames/bath-window.jpg', room: 'Bathroom', pos: [16,21], yaw: 120,
      links: [ { to: 'bath', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'laundry', image: 'frames/laundry.jpg', room: 'Laundry', pos: [12.5,18], yaw: 100,
      links: [ { to: 'hall-south', x: 50, y: 92, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed3', image: 'frames/bed3.jpg', room: 'Bedroom 3', pos: [17,9], yaw: 280,
      links: [ { to: 'bed3-view', x: 35, y: 42, kind: 'walk', label: 'Window view' },
               { to: 'hall-south', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed3-view', image: 'frames/bed3-view.jpg', room: 'Bedroom 3', pos: [16.5,2.5], yaw: 280,
      links: [ { to: 'bed3', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2', image: 'frames/bed2.jpg', room: 'Bedroom 2', pos: [31,18], yaw: 100,
      links: [ { to: 'bed2-window', x: 38, y: 55, kind: 'walk', label: 'Window' },
               { to: 'bed2-storage', x: 88, y: 60, kind: 'door', label: 'Eave storage' },
               { to: 'hall', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed2-storage', image: 'frames/bed2-storage.jpg', room: 'Bedroom 2', pos: [34,21], yaw: 140,
      links: [ { to: 'bed2', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2-window', image: 'frames/bed2-window.jpg', room: 'Bedroom 2', pos: [32.5,21.5], yaw: 95,
      links: [ { to: 'bed2', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'frontbed', image: 'frames/frontbed.jpg', room: 'Front Bedroom', pos: [8,12], yaw: 185,
      links: [ { to: 'frontbed-view', x: 52, y: 45, kind: 'walk', label: 'Street view' },
               { to: 'hall-south', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'frontbed-view', image: 'frames/frontbed-view.jpg', room: 'Front Bedroom', pos: [2.5,7.5], yaw: 185,
      links: [ { to: 'frontbed', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },
  ],
};
