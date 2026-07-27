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
    'Reconstructed from the walkthrough video, verified two ways: an independent Gemini 2.5 Pro ' +
    'video-analysis pass over the full walkthrough, and SF open data — the city’s LiDAR building ' +
    'footprint for APN 5664/025 measures 58.7 × 26.0 ft at the roofline (walls ≈ 55.5 × 23.5 ft, ' +
    '≈1,316 sq ft, matching the listed 1,320) on a 25.1 × 73 ft lot. The footprint is not a simple ' +
    'rectangle: the kitchen/dining wing runs ~8.5 ft deeper than the living room wall, the roof deck ' +
    'fills the L-notch at the rear corner, and the attic roofline pulls usable space in behind knee ' +
    'walls (hatched “low eave” zones). Left = Andover Street. The hall runs from the landing straight ' +
    'into the full-width front bedroom; the bath (with its laundry nook) opens off the landing beside ' +
    'the stair rail. Sun-lit street windows face WSW; the long vista windows face south over the low ' +
    'neighboring cottage toward San Bruno Mountain; peek-a-boo water views are from the rear ' +
    'living/dining windows. Dimensions are estimates from the ultrawide footage calibrated against ' +
    'standard-size elements (30″ doors, 27″ laundry pair, 30″ range, stair treads); expect ±6–12″.',

  plan: {
    bounds: { x0: -3.4, y0: -3.2, w: 63, h: 30.5 },
    wallThickness: 0.45,

    rooms: [
      { id: 'frontbed', name: 'Bedroom 1', poly: [[0.5,0.5],[11,0.5],[11,23],[0.5,23]], labelPos: [5.7,11], area: '≈ 210 sq ft' },
      { id: 'bed2',     name: 'Bedroom 2', poly: [[11,0.5],[22,0.5],[22,10],[11,10]], labelPos: [16.5,5.6], area: '≈ 100 sq ft' },
      { id: 'bed3',     name: 'Bedroom 3', poly: [[11,13],[22,13],[22,23],[11,23]], labelPos: [16.5,17.4], area: '≈ 105 sq ft' },
      { id: 'hall',     name: 'Hall', poly: [[11,10],[22,10],[22,7.5],[25,7.5],[25,14.5],[22,14.5],[22,13],[11,13]], labelPos: [16.5,11.55], fill: '#ece8de' },
      { id: 'living',   name: 'Living Room', poly: [[22,0.5],[47,0.5],[47,11.5],[39.5,11.5],[39.5,11],[25,11],[25,7.5],[22,7.5]], labelPos: [32.5,3.9], area: '≈ 200 sq ft' },
      { id: 'stairs',   name: '', poly: [[25,11],[39.5,11],[39.5,14.5],[25,14.5]], fill: '#e5e1d6' },
      { id: 'bath',     name: 'Bath', poly: [[22,14.5],[29,14.5],[29,23],[22,23]], labelPos: [25.5,18.8], area: '≈ 55 sq ft' },
      { id: 'laundry',  name: '', poly: [[29,14.5],[32.5,14.5],[32.5,18.5],[29,18.5]] },
      { id: 'kitchen',  name: 'Kitchen', poly: [[39.5,11.5],[48,11.5],[48,23],[39.5,23]], labelPos: [44.7,17.6], area: '≈ 100 sq ft' },
      { id: 'dining',   name: 'Dining', poly: [[48,11.5],[55.5,11.5],[55.5,23],[48,23]], labelPos: [51.6,16.6], area: '≈ 85 sq ft' },
      { id: 'pantry',   name: '', poly: [[39.5,15.5],[42,15.5],[42,18.5],[39.5,18.5]] },
      { id: 'deck',     name: 'Deck', poly: [[47,0.5],[55,0.5],[55,11],[47,11]], labelPos: [51,5.4], area: '≈ 80 sq ft', fill: '#e9e5da' },
    ],

    walls: [
      // exterior — L-shaped envelope (deck is open-air in the NE notch)
      [[0,0],[47,0]],
      [[47,0],[47,11.5]],
      [[47,11.5],[55.5,11.5]],
      [[55.5,11.5],[55.5,23.5]],
      [[55.5,23.5],[0,23.5]],
      [[0,23.5],[0,0]],
      // bedroom 1 east wall — the hall walks straight into it (door punched)
      [[11,0],[11,23.5]],
      // hall north = bedroom 2 south (door punched)
      [[11,10],[22,10]],
      // hall south = bedroom 3 north (door punched)
      [[11,13],[22,13]],
      // bedroom 2 / living
      [[22,0],[22,10]],
      // bedroom 3 east wall (pocket edge + bath)
      [[22,13],[22,23.5]],
      // bath + laundry north wall on the landing pocket (bath door beside the stair rail)
      [[22,14.5],[39.5,14.5]],
      // bath / laundry divider (doorless opening punched below)
      [[29,14.5],[29,23.5]],
      // laundry east + south
      [[32.5,14.5],[32.5,18.5]],
      [[29,18.5],[32.5,18.5]],
      // wing west wall
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

    openings: [
      [[29,15.3],[29,17.5]],   // doorless opening between bath and laundry nook
    ],

    doors: [
      { hinge: [11,10.4],   angle: 90, swing: 90,  width: 2.4 },  // bedroom 1 — hall ends straight into it
      { hinge: [19.4,10],   angle: 0,  swing: -90, width: 2.2 },  // bedroom 2 (hall, north side)
      { hinge: [19,13],     angle: 0,  swing: 90,  width: 2.2 },  // bedroom 3 (hall, south side)
      { hinge: [22.6,14.5], angle: 0,  swing: 90,  width: 2.1 },  // bath (off the landing pocket, beside the stair rail)
      { hinge: [42,16.1],   angle: 90, swing: -90, width: 2.0 },  // pantry
      { hinge: [47,5],      angle: 90, swing: 90,  width: 2.4 },  // deck door
    ],

    windows: [
      [[0,8],[0,10.3]],                 // bedroom 1 — street pair (WSW sun)
      [[0,11.2],[0,13.5]],              // bedroom 1 — street pair
      [[13,0],[15.5,0]],                // bedroom 2 — low north slider (close neighbor)
      [[15,23.5],[17.5,23.5]],          // bedroom 3 — south, gap view over the low cottage
      [[23,23.5],[25.5,23.5]],          // bath — south vista over the low cottage (toilet window)
      [[29.5,0],[32,0]],                // living — north
      [[47,1.5],[47,4]],                // living — rear, beside deck door
      [[47,8],[47,10.5]],               // living — rear
      [[48.5,11.5],[52.5,11.5]],        // dining — onto the deck
      [[55.5,14],[55.5,17]],            // dining — rear east (water peek)
    ],

    fixtures: [
      // kitchen peninsula with sink + dishwasher under the pass-through
      { type: 'rect', x: 40.5, y: 11.7, w: 6, h: 1.9 },
      { type: 'rect', x: 42.5, y: 12, w: 1.3, h: 1.3 },
      // appliance run along the kitchen's south wall
      { type: 'rect', x: 40.1, y: 21.5, w: 2.6, h: 1.4, label: 'Ref' },
      { type: 'rect', x: 42.9, y: 21.5, w: 2.5, h: 1.4, label: 'Rng' },
      // laundry pair in the nook off the bath
      { type: 'rect', x: 29.6, y: 15.2, w: 2.4, h: 2.6, label: 'W/D', ly: 15.6 },
      // bath: sink on the west wall, toilet under the south window, shower along the east wall
      { type: 'circle', cx: 23.4, cy: 17.8, r: 0.7 },
      { type: 'rect', x: 23, y: 21.4, w: 1.4, h: 1.5 },
      { type: 'rect', x: 27.6, y: 18.4, w: 1.3, h: 4.5, label: '' },
      { type: 'circle', cx: 28.2, cy: 19.4, r: 0.01, label: 'Shwr' },
      // bedroom 1: louvered closets on the north + west walls, alcove skylight
      { type: 'rect', x: 3, y: 0.7, w: 4.5, h: 1.4, label: 'CL' },
      { type: 'rect', x: 0.7, y: 15, w: 1.4, h: 4, label: 'CL' },
      { type: 'rect', x: 3.2, y: 18, w: 2.4, h: 1.8 },
      // bedroom 2: deep shelved closet under the north slope + skylight
      { type: 'rect', x: 17.5, y: 0.8, w: 4, h: 1.5, label: 'CL' },
      { type: 'rect', x: 16, y: 3, w: 2.4, h: 1.8 },
      // bedroom 3 closet
      { type: 'rect', x: 19.3, y: 21.1, w: 2.2, h: 1.4, label: 'CL' },
      // stair skylight
      { type: 'rect', x: 29.5, y: 11.3, w: 3.5, h: 3 },
      { type: 'circle', cx: 32.2, cy: 11.8, r: 0.01, label: 'skylight' },
      // stair treads + label
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
      { type: 'circle', cx: 28.2, cy: 13.8, r: 0.01, label: 'DN → street entry' },
      // stair guard rails (north edge + west return beside the bath door)
      { type: 'rect', x: 25, y: 10.85, w: 13, h: 0.15 },
      { type: 'rect', x: 24.85, y: 11, w: 0.15, h: 3.5 },
      // deck rail
      { type: 'poly', pts: [[47,0.5],[55,0.5]] },
      { type: 'poly', pts: [[55,0.5],[55,11]] },
      { type: 'poly', pts: [[55,11],[55.5,11.5]] },
      // low-eave knee-wall zone south-east of the bath/laundry
      { type: 'rect', x: 33,   y: 15.2, w: 6.2, h: 7.6, label: 'low eave' },
      { type: 'rect', x: 29.2, y: 19,   w: 3.2, h: 3.8, label: '' },
    ],

    dims: [
      { from: [0,23.5],   to: [55.5,23.5], offset: 2.4,  label: "55′6″ overall" },
      { from: [0,0],      to: [0,23.5],    offset: 2.4,  label: "23′6″ overall" },
      { from: [47,0.5],   to: [55,0.5],    offset: -1.5, label: "8′0″" },
      { from: [55,0.5],   to: [55,11],     offset: -1.5, label: "10′6″" },
      { from: [0.5,6],    to: [11,6],      offset: 0.15, label: "10′6″" },
      { from: [1.3,0.5],  to: [1.3,23],    offset: 0.15, label: "22′6″" },
      { from: [11,8.8],   to: [22,8.8],    offset: 0.15, label: "11′0″" },
      { from: [12,0.5],   to: [12,10],     offset: 0.15, label: "9′6″" },
      { from: [11,18.6],  to: [22,18.6],   offset: 0.15, label: "11′0″" },
      { from: [12,13],    to: [12,23],     offset: 0.15, label: "10′0″" },
      { from: [22,17.6],  to: [29,17.6],   offset: 0.15, label: "7′0″" },
      { from: [22.5,6.4], to: [47,6.4],    offset: 0.15, label: "24′6″" },
      { from: [46.3,0.5], to: [46.3,11.5], offset: 0.15, label: "11′0″" },
      { from: [41,14.9],  to: [55.5,14.9], offset: 0.15, label: "16′0″ wing" },
      { from: [54.8,11.5],to: [54.8,23],   offset: 0.15, label: "11′6″" },
    ],
  },

  nodes: [
    { id: 'entry', image: 'frames/entry.jpg', room: 'Entry', pos: [26.5,12.7], yaw: 0,
      links: [ { to: 'stairs', x: 17, y: 66, kind: 'walk', label: 'Up the stairs' } ] },

    { id: 'stairs', image: 'frames/stairs.jpg', room: 'Stairs', pos: [30,12.7], yaw: 0,
      links: [ { to: 'stairs-top', x: 48, y: 40, kind: 'walk', label: 'Keep climbing' },
               { to: 'entry', x: 50, y: 88, kind: 'back', label: 'Entry' } ] },

    { id: 'stairs-top', image: 'frames/stairs-top.jpg', room: 'Stairs', pos: [36,12.7], yaw: 0,
      links: [ { to: 'landing', x: 52, y: 44, kind: 'walk', label: 'Step up' },
               { to: 'stairs', x: 50, y: 82, kind: 'back', label: 'Back down' } ] },

    { id: 'landing', image: 'frames/landing.jpg', room: 'Landing', pos: [39,9.5], yaw: 320,
      links: [ { to: 'living', x: 80, y: 60, kind: 'walk', label: 'Living Room' },
               { to: 'landing-south', x: 8, y: 62, kind: 'turn', side: 'left', label: 'Hall & bedrooms' },
               { to: 'stairs-top', x: 45, y: 86, kind: 'back', label: 'Downstairs' } ] },

    { id: 'living', image: 'frames/living.jpg', room: 'Living Room', pos: [35,6], yaw: 0,
      links: [ { to: 'deck', x: 47, y: 47, kind: 'door', label: 'Deck' },
               { to: 'dining', x: 84, y: 53, kind: 'turn', label: 'Kitchen' },
               { to: 'living-return', x: 55, y: 72, kind: 'walk', label: 'Toward the deck' },
               { to: 'landing-south', x: 50, y: 88, kind: 'back', label: 'Landing' } ] },

    { id: 'living-return', image: 'frames/living-return.jpg', room: 'Living Room', pos: [40.5,6.5], yaw: 0,
      links: [ { to: 'deck', x: 38, y: 46, kind: 'door', label: 'Deck' },
               { to: 'landing-south', x: 10, y: 58, kind: 'walk', label: 'Landing' },
               { to: 'dining', x: 90, y: 55, kind: 'turn', label: 'Kitchen' },
               { to: 'living', x: 50, y: 88, kind: 'back', label: 'Back' } ] },

    { id: 'deck', image: 'frames/deck.jpg', room: 'Deck', pos: [48,5], yaw: 100,
      links: [ { to: 'deck-view', x: 38, y: 70, kind: 'walk', label: 'To the rail' },
               { to: 'living-return', x: 50, y: 90, kind: 'back', label: 'Back inside' } ] },

    { id: 'deck-view', image: 'frames/deck-view.jpg', room: 'Deck', pos: [50.5,8.5], yaw: 120,
      links: [ { to: 'deck', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'dining', image: 'frames/dining.jpg', room: 'Kitchen & Dining', pos: [52,15], yaw: 240,
      links: [ { to: 'living-return', x: 38, y: 40, kind: 'walk', label: 'Living Room' },
               { to: 'kitchen', x: 20, y: 60, kind: 'walk', label: 'Kitchen' },
               { to: 'kitchen-view', x: 82, y: 40, kind: 'turn', label: 'Window' } ] },

    { id: 'kitchen', image: 'frames/kitchen.jpg', room: 'Kitchen & Dining', pos: [45,15.5], yaw: 200,
      links: [ { to: 'pantry', x: 5, y: 45, kind: 'door', label: 'Pantry' },
               { to: 'living-return', x: 82, y: 42, kind: 'turn', label: 'Living Room' },
               { to: 'dining', x: 50, y: 88, kind: 'back', label: 'Dining' } ] },

    { id: 'kitchen-view', image: 'frames/kitchen-view.jpg', room: 'Kitchen & Dining', pos: [54,14.5], yaw: 40,
      links: [ { to: 'dining', x: 50, y: 90, kind: 'back', label: 'Back' } ] },

    { id: 'pantry', image: 'frames/pantry.jpg', room: 'Pantry', pos: [40.8,17], yaw: 200,
      links: [ { to: 'kitchen', x: 50, y: 90, kind: 'back', label: 'Kitchen' } ] },

    { id: 'landing-south', image: 'frames/landing-south.jpg', room: 'Landing', pos: [39.5,9.8], yaw: 190,
      links: [ { to: 'hall', x: 55, y: 47, kind: 'walk', label: 'Down the hall' },
               { to: 'living', x: 90, y: 60, kind: 'turn', side: 'right', label: 'Living Room' },
               { to: 'stairs-top', x: 32, y: 66, kind: 'back', label: 'Downstairs' } ] },

    { id: 'hall', image: 'frames/hall.jpg', room: 'Hallway', pos: [31,9], yaw: 185,
      links: [ { to: 'bath', x: 38, y: 48, kind: 'door', label: 'Bathroom' },
               { to: 'hall-south', x: 74, y: 49, kind: 'walk', label: 'Down the hall' },
               { to: 'landing-south', x: 50, y: 88, kind: 'back', label: 'Landing' } ] },

    { id: 'hall-south', image: 'frames/hall-south.jpg', room: 'Hallway', pos: [16,11.5], yaw: 185,
      links: [ { to: 'frontbed', x: 50, y: 51, kind: 'walk', label: 'Front Bedroom' },
               { to: 'bed3', x: 30, y: 56, kind: 'door', label: 'Bedroom 3' },
               { to: 'bed2', x: 88, y: 47, kind: 'door', label: 'Bedroom 2' },
               { to: 'hall', x: 50, y: 88, kind: 'back', label: 'Back up the hall' } ] },

    { id: 'bath', image: 'frames/bath.jpg', room: 'Bathroom', pos: [25.5,16.5], yaw: 110,
      links: [ { to: 'bath-window', x: 75, y: 40, kind: 'walk', label: 'By the window' },
               { to: 'laundry', x: 8, y: 60, kind: 'turn', side: 'left', label: 'Laundry' },
               { to: 'landing-south', x: 50, y: 88, kind: 'back', label: 'Landing' } ] },

    { id: 'bath-window', image: 'frames/bath-window.jpg', room: 'Bathroom', pos: [24,21.5], yaw: 90,
      links: [ { to: 'bath', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'laundry', image: 'frames/laundry.jpg', room: 'Laundry', pos: [30.5,16.5], yaw: 30,
      links: [ { to: 'bath', x: 50, y: 90, kind: 'back', label: 'Bathroom' } ] },

    { id: 'bed3', image: 'frames/bed3.jpg', room: 'Bedroom 3', pos: [16.5,18], yaw: 100,
      links: [ { to: 'bed3-view', x: 30, y: 42, kind: 'walk', label: 'Window view' },
               { to: 'hall-south', x: 50, y: 88, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed3-view', image: 'frames/bed3-view.jpg', room: 'Bedroom 3', pos: [15.8,21.5], yaw: 90,
      links: [ { to: 'bed3', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2', image: 'frames/bed2.jpg', room: 'Bedroom 2', pos: [16,5.5], yaw: 290,
      links: [ { to: 'bed2-window', x: 36, y: 52, kind: 'walk', label: 'Window' },
               { to: 'bed2-storage', x: 90, y: 55, kind: 'door', label: 'Closet & storage' },
               { to: 'hall-south', x: 50, y: 88, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed2-storage', image: 'frames/bed2-storage.jpg', room: 'Bedroom 2', pos: [19,2.5], yaw: 280,
      links: [ { to: 'bed2', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2-window', image: 'frames/bed2-window.jpg', room: 'Bedroom 2', pos: [14.5,2], yaw: 270,
      links: [ { to: 'bed2', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },

    { id: 'frontbed', image: 'frames/frontbed.jpg', room: 'Front Bedroom', pos: [7.5,11.5], yaw: 185,
      links: [ { to: 'frontbed-view', x: 52, y: 40, kind: 'walk', label: 'Street view' },
               { to: 'hall-south', x: 50, y: 88, kind: 'back', label: 'Hallway' } ] },

    { id: 'frontbed-view', image: 'frames/frontbed-view.jpg', room: 'Front Bedroom', pos: [2.5,10.5], yaw: 185,
      links: [ { to: 'frontbed', x: 50, y: 90, kind: 'back', label: 'Step back' } ] },
  ],
};
