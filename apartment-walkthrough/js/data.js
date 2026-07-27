/*
 * Tour data — generated from the source walkthrough video
 * (Pixel 0.5x ultrawide, 264 s, analyzed frame-by-frame).
 *
 * Coordinate system (feet): x = 0 at the west wall growing east,
 * y = 0 at the rear (deck side) wall growing toward the street.
 * The deck extends to negative y. yaw: 0=east, 90=street/front,
 * 180=west, 270=rear/deck.
 */
window.TOUR = {
  title: 'Renovated Top-Floor Apartment',
  start: 'entry',
  planNote:
    'All dimensions are estimates reconstructed from a handheld video walkthrough ' +
    '(Pixel 0.5× ultrawide, ≈123° FOV), calibrated against standard-size elements ' +
    '(30″ doors, 27″ washer/dryer, 30″ range, stair treads). Expect roughly ±6–12″ on any span. ' +
    'Top of plan = rear of the house (deck & backyard); bottom = street side. ' +
    'Gross interior ≈ 890 sq ft, plus ≈ 70 sq ft deck.',

  plan: {
    bounds: { x0: -1, y0: -8.6, w: 24.5, h: 49.3 },
    wallThickness: 0.45,

    rooms: [
      { id: 'living',   name: 'Living Room', poly: [[0.5,0.5],[15.5,0.5],[15.5,11],[0.5,11]], labelPos: [7.5,5.2], area: '≈ 150 sq ft' },
      { id: 'dining',   name: 'Dining',      poly: [[15.5,0.5],[22,0.5],[22,8],[15.5,8]],     labelPos: [19,4.2] },
      { id: 'kitchen',  name: 'Kitchen',     poly: [[15.5,8],[22,8],[22,17.5],[15.5,17.5]],   labelPos: [19,11.6], area: '≈ 110 sq ft' },
      { id: 'pantry',   name: 'Pantry',      poly: [[19,14.5],[22,14.5],[22,17.5],[19,17.5]], labelPos: [20.5,16.3] },
      { id: 'stairs',   name: '',            poly: [[9.5,11],[13,11],[13,20],[9.5,20]], fill: '#e5e1d6' },
      { id: 'landing',  name: 'Landing',     poly: [[13,11],[15.5,11],[15.5,20],[13,20]], labelPos: [14.25,15.6], fill: '#ece8de' },
      { id: 'hall',     name: 'Hall',        poly: [[8,20],[15.5,20],[15.5,30.5],[12.5,30.5],[12.5,23],[8,23]], labelPos: [14,27.6], fill: '#ece8de' },
      { id: 'laundry',  name: '',            poly: [[15.5,17.5],[18.5,17.5],[18.5,20.5],[15.5,20.5]] },
      { id: 'bath',     name: 'Bath',        poly: [[15.5,20.5],[22,20.5],[22,26],[15.5,26]], labelPos: [18.6,22.6], area: '≈ 36 sq ft' },
      { id: 'bed2',     name: 'Bedroom 2',   poly: [[0.5,11],[9.5,11],[9.5,20],[8,20],[8,23],[0.5,23]], labelPos: [4.8,17.2], area: '≈ 100 sq ft' },
      { id: 'bed3',     name: 'Bedroom 3',   poly: [[0.5,23],[12.5,23],[12.5,30.5],[0.5,30.5]], labelPos: [6.2,26.2], area: '≈ 90 sq ft' },
      { id: 'frontbed', name: 'Bedroom 1',   poly: [[3,30.5],[15.5,30.5],[15.5,39],[3,39]], labelPos: [9.2,34.2], area: '≈ 105 sq ft' },
      { id: 'deck',     name: 'Deck',        poly: [[5.5,-7.5],[14.5,-7.5],[14.5,0],[5.5,0]], labelPos: [10,-3.6], area: '≈ 70 sq ft', fill: '#e9e5da' },
    ],

    walls: [
      // exterior envelope
      [[0,0],[22.5,0]], [[22.5,0],[22.5,39.5]], [[22.5,39.5],[0,39.5]], [[0,39.5],[0,0]],
      // living / kitchen partition (pass-through peninsula between)
      [[15.5,0.5],[15.5,2]],
      // living / bedroom 2
      [[0.5,11],[9.5,11]],
      // bedroom 2 east + vestibule
      [[9.5,11],[9.5,20]], [[8,20],[9.5,20]], [[8,20],[8,23]],
      // bedroom 2 / bedroom 3
      [[0.5,23],[12.5,23]],
      // hall / bedroom 3
      [[12.5,23],[12.5,30.5]],
      // bedroom 3 & hall / front bedroom
      [[0.5,30.5],[15.5,30.5]],
      // front bedroom / SE eave
      [[15.5,30.5],[15.5,39.5]],
      // kitchen west (off the landing walk)
      [[15.5,11],[15.5,17.5]],
      // laundry
      [[15.5,17.5],[22,17.5]], [[15.5,17.5],[15.5,20.5]],
      // bath
      [[15.5,20.5],[22,20.5]], [[15.5,20.5],[15.5,26]], [[15.5,26],[22,26]],
      // pantry
      [[19,14.5],[19,17.5]], [[19,14.5],[22,14.5]],
    ],

    doors: [
      { hinge: [7.6,0],      angle: 0,   swing: 90,  width: 2.4 },  // deck door
      { hinge: [15.5,14],    angle: 270, swing: 90,  width: 2   },  // landing -> kitchen
      { hinge: [15.5,18.2],  angle: 90,  swing: -90, width: 2   },  // laundry
      { hinge: [15.5,23.3],  angle: 270, swing: 90,  width: 2.3 },  // bath
      { hinge: [8,22.5],     angle: 270, swing: -90, width: 2   },  // bedroom 2
      { hinge: [12.5,24],    angle: 90,  swing: 90,  width: 2.5 },  // bedroom 3
      { hinge: [13,30.5],    angle: 0,   swing: 90,  width: 2.4 },  // front bedroom
      { hinge: [19.4,14.5],  angle: 0,   swing: 90,  width: 2   },  // pantry
    ],

    windows: [
      [[3.5,0],[5.5,0]], [[11,0],[13,0]],       // living, rear
      [[16.5,0],[18.5,0]],                       // dining, rear
      [[22.5,4],[22.5,6.5]],                     // dining, east
      [[22.5,21.5],[22.5,24]],                   // bath, east
      [[8,39.5],[11,39.5]],                      // front bedroom, street
      [[0,15],[0,17.5]],                         // bedroom 2, west (slider)
      [[0,25],[0,27.5]],                         // bedroom 3, west
    ],

    fixtures: [
      // kitchen peninsula with sink + dishwasher (pass-through above)
      { type: 'rect', x: 15.5, y: 2, w: 1.8, h: 7.5 },
      { type: 'rect', x: 15.75, y: 3.4, w: 1.2, h: 1.4 },
      // appliance run on the kitchen's south wall
      { type: 'rect', x: 15.7, y: 16, w: 2.6, h: 1.4, label: 'Ref' },
      { type: 'rect', x: 18.4, y: 16, w: 2.5, h: 1.4, label: 'Rng' },
      // laundry pair
      { type: 'rect', x: 16, y: 18, w: 2.3, h: 2.2, label: 'W/D' },
      // bath: shower, pedestal sink, toilet
      { type: 'rect', x: 16.3, y: 24.5, w: 5, h: 1.5, label: 'Shower', ly: 25.25 },
      { type: 'circle', cx: 16.6, cy: 21.9, r: 0.7 },
      { type: 'rect', x: 20.7, y: 21.3, w: 1.2, h: 1.5 },
      // closets
      { type: 'rect', x: 3.2, y: 31, w: 1.8, h: 5, label: 'CL' },     // bedroom 1 (louvered)
      { type: 'rect', x: 9.6, y: 23.2, w: 2.7, h: 1.5, label: 'CL' }, // bedroom 3
      { type: 'rect', x: 2.5, y: 11.2, w: 4, h: 1.3, label: 'CL' },   // bedroom 2
      // bedroom 2 under-eave shelved storage
      { type: 'rect', x: 0.6, y: 13, w: 1.4, h: 6, label: '' },
      // skylights (drawn as thin outlines)
      { type: 'rect', x: 10, y: 13, w: 2.6, h: 3 },
      { type: 'circle', cx: 11.3, cy: 14.5, r: 0.01, label: 'skylight' },
      { type: 'rect', x: 2.4, y: 13.6, w: 2.2, h: 1.9 },
      // stair treads + label
      { type: 'poly', pts: [[9.7,12.4],[12.8,12.4]] },
      { type: 'poly', pts: [[9.7,13.6],[12.8,13.6]] },
      { type: 'poly', pts: [[9.7,14.8],[12.8,14.8]] },
      { type: 'poly', pts: [[9.7,16],[12.8,16]] },
      { type: 'poly', pts: [[9.7,17.2],[12.8,17.2]] },
      { type: 'poly', pts: [[9.7,18.4],[12.8,18.4]] },
      { type: 'poly', pts: [[9.7,19.6],[12.8,19.6]] },
      { type: 'circle', cx: 11.25, cy: 18, r: 0.01, label: 'DN ↓ entry' },
      // stair opening guard rail
      { type: 'rect', x: 12.9, y: 11, w: 0.15, h: 9 },
      // deck rail
      { type: 'poly', pts: [[5.5,0],[5.5,-7.5],[14.5,-7.5],[14.5,0]] },
      // low eave zones
      { type: 'rect', x: 15.7, y: 26.3, w: 6.1, h: 12.9, label: 'low eave' },
      { type: 'rect', x: 0.6, y: 31, w: 2.2, h: 8.2, label: '' },
    ],

    dims: [
      { from: [0,39.5],   to: [22.5,39.5], offset: 2.3,  label: "22′6″ overall" },
      { from: [22.5,0],   to: [22.5,39.5], offset: -2.3, label: "39′6″ overall" },
      { from: [5.5,-7.5], to: [14.5,-7.5], offset: -1.5, label: "9′0″" },
      { from: [14.5,-7.5],to: [14.5,0],    offset: -1.5, label: "7′6″" },
      { from: [0.5,9.3],  to: [15.5,9.3],  offset: 0.15, label: "15′0″" },
      { from: [1.7,0.5],  to: [1.7,11],    offset: 0.15, label: "10′6″" },
      { from: [15.5,12.9],to: [22,12.9],   offset: 0.15, label: "6′6″" },
      { from: [21.2,0.5], to: [21.2,14.5], offset: 0.15, label: "14′0″" },
      { from: [0.5,13.1], to: [9.5,13.1],  offset: 0.15, label: "9′0″" },
      { from: [7,11],     to: [7,23],      offset: 0.15, label: "12′0″" },
      { from: [0.5,29.6], to: [12.5,29.6], offset: 0.15, label: "12′0″" },
      { from: [1.5,23],   to: [1.5,30.5],  offset: 0.15, label: "7′6″" },
      { from: [3,38.2],   to: [15.5,38.2], offset: 0.15, label: "12′6″" },
      { from: [4.3,30.5], to: [4.3,39],    offset: 0.15, label: "8′6″" },
      { from: [15.5,25.2],to: [22,25.2],   offset: 0.15, label: "6′6″" },
      { from: [21.7,20.5],to: [21.7,26],   offset: 0.15, label: "5′6″" },
    ],
  },

  nodes: [
    { id: 'entry', image: 'frames/entry.jpg', room: 'Entry', pos: [11.2,18.8], yaw: 270,
      links: [ { to: 'stairs', x: 34, y: 58, kind: 'walk', label: 'Up the stairs' } ] },

    { id: 'stairs', image: 'frames/stairs.jpg', room: 'Stairs', pos: [11.2,16.5], yaw: 270,
      links: [ { to: 'stairs-top', x: 50, y: 42, kind: 'walk', label: 'Keep climbing' },
               { to: 'entry', x: 50, y: 93, kind: 'back', label: 'Entry' } ] },

    { id: 'stairs-top', image: 'frames/stairs-top.jpg', room: 'Stairs', pos: [11.2,12], yaw: 270,
      links: [ { to: 'landing', x: 52, y: 45, kind: 'walk', label: 'Step up' },
               { to: 'stairs', x: 50, y: 93, kind: 'back', label: 'Back down' } ] },

    { id: 'landing', image: 'frames/landing.jpg', room: 'Landing', pos: [14.2,11.5], yaw: 270,
      links: [ { to: 'living', x: 70, y: 58, kind: 'walk', label: 'Living Room' },
               { to: 'landing-south', x: 12, y: 78, kind: 'turn', side: 'left', label: 'Hallway' },
               { to: 'stairs-top', x: 45, y: 92, kind: 'back', label: 'Downstairs' } ] },

    { id: 'living', image: 'frames/living.jpg', room: 'Living Room', pos: [11,9], yaw: 270,
      links: [ { to: 'deck', x: 47, y: 44, kind: 'door', label: 'Deck' },
               { to: 'dining', x: 84, y: 58, kind: 'turn', label: 'Kitchen' },
               { to: 'living-return', x: 55, y: 78, kind: 'walk', label: 'Cross the room' },
               { to: 'landing-south', x: 50, y: 93, kind: 'back', label: 'Landing' } ] },

    { id: 'living-return', image: 'frames/living-return.jpg', room: 'Living Room', pos: [13.5,4], yaw: 225,
      links: [ { to: 'deck', x: 38, y: 45, kind: 'door', label: 'Deck' },
               { to: 'landing-south', x: 12, y: 62, kind: 'walk', label: 'Landing' },
               { to: 'dining', x: 88, y: 70, kind: 'turn', label: 'Kitchen' },
               { to: 'living', x: 50, y: 93, kind: 'back', label: 'Back' } ] },

    { id: 'deck', image: 'frames/deck.jpg', room: 'Deck', pos: [10,-2.5], yaw: 270,
      links: [ { to: 'deck-view', x: 55, y: 45, kind: 'walk', label: 'To the rail' },
               { to: 'living', x: 50, y: 93, kind: 'back', label: 'Back inside' } ] },

    { id: 'deck-view', image: 'frames/deck-view.jpg', room: 'Deck', pos: [10,-5.5], yaw: 250,
      links: [ { to: 'deck', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'dining', image: 'frames/dining.jpg', room: 'Kitchen & Dining', pos: [18.5,9.5], yaw: 220,
      links: [ { to: 'living-return', x: 26, y: 55, kind: 'walk', label: 'Living Room' },
               { to: 'kitchen', x: 62, y: 62, kind: 'walk', label: 'Kitchen' },
               { to: 'kitchen-view', x: 82, y: 38, kind: 'turn', label: 'Window' } ] },

    { id: 'kitchen', image: 'frames/kitchen.jpg', room: 'Kitchen & Dining', pos: [17,13.5], yaw: 100,
      links: [ { to: 'pantry', x: 9, y: 47, kind: 'door', label: 'Pantry' },
               { to: 'dining', x: 50, y: 90, kind: 'back', label: 'Dining' } ] },

    { id: 'kitchen-view', image: 'frames/kitchen-view.jpg', room: 'Kitchen & Dining', pos: [17.5,2], yaw: 270,
      links: [ { to: 'dining', x: 50, y: 92, kind: 'back', label: 'Back' } ] },

    { id: 'pantry', image: 'frames/pantry.jpg', room: 'Pantry', pos: [20.3,15.8], yaw: 90,
      links: [ { to: 'kitchen', x: 50, y: 92, kind: 'back', label: 'Kitchen' } ] },

    { id: 'landing-south', image: 'frames/landing-south.jpg', room: 'Landing', pos: [14.2,13], yaw: 90,
      links: [ { to: 'hall', x: 52, y: 56, kind: 'walk', label: 'Hallway' },
               { to: 'living', x: 8, y: 70, kind: 'turn', side: 'left', label: 'Living Room' },
               { to: 'stairs-top', x: 38, y: 80, kind: 'back', label: 'Downstairs' } ] },

    { id: 'hall', image: 'frames/hall.jpg', room: 'Hallway', pos: [14,19.5], yaw: 90,
      links: [ { to: 'bath', x: 38, y: 48, kind: 'door', label: 'Bathroom' },
               { to: 'bed3', x: 76, y: 52, kind: 'door', label: 'Bedroom 3' },
               { to: 'laundry', x: 17, y: 62, kind: 'door', label: 'Laundry' },
               { to: 'bed2', x: 92, y: 76, kind: 'turn', side: 'right', label: 'Bedroom 2' },
               { to: 'hall-south', x: 56, y: 72, kind: 'walk', label: 'Front Bedroom' },
               { to: 'landing-south', x: 50, y: 94, kind: 'back', label: 'Landing' } ] },

    { id: 'hall-south', image: 'frames/hall-south.jpg', room: 'Hallway', pos: [14,27.5], yaw: 90,
      links: [ { to: 'frontbed', x: 50, y: 55, kind: 'walk', label: 'Front Bedroom' },
               { to: 'hall', x: 50, y: 93, kind: 'back', label: 'Back up the hall' } ] },

    { id: 'bath', image: 'frames/bath.jpg', room: 'Bathroom', pos: [17,23], yaw: 30,
      links: [ { to: 'bath-window', x: 62, y: 42, kind: 'walk', label: 'By the window' },
               { to: 'hall', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'bath-window', image: 'frames/bath-window.jpg', room: 'Bathroom', pos: [20.5,22.8], yaw: 30,
      links: [ { to: 'bath', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'laundry', image: 'frames/laundry.jpg', room: 'Laundry', pos: [17,19.2], yaw: 0,
      links: [ { to: 'hall', x: 50, y: 92, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed3', image: 'frames/bed3.jpg', room: 'Bedroom 3', pos: [6,26.8], yaw: 190,
      links: [ { to: 'bed3-view', x: 35, y: 42, kind: 'walk', label: 'Window view' },
               { to: 'hall', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed3-view', image: 'frames/bed3-view.jpg', room: 'Bedroom 3', pos: [2.8,26.8], yaw: 195,
      links: [ { to: 'bed3', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2', image: 'frames/bed2.jpg', room: 'Bedroom 2', pos: [5.5,16.5], yaw: 235,
      links: [ { to: 'bed2-window', x: 38, y: 55, kind: 'walk', label: 'Window' },
               { to: 'bed2-storage', x: 88, y: 60, kind: 'door', label: 'Eave storage' },
               { to: 'hall', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'bed2-storage', image: 'frames/bed2-storage.jpg', room: 'Bedroom 2', pos: [2.5,13.8], yaw: 215,
      links: [ { to: 'bed2', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'bed2-window', image: 'frames/bed2-window.jpg', room: 'Bedroom 2', pos: [1.8,16.8], yaw: 195,
      links: [ { to: 'bed2', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },

    { id: 'frontbed', image: 'frames/frontbed.jpg', room: 'Front Bedroom', pos: [9.5,33.5], yaw: 90,
      links: [ { to: 'frontbed-view', x: 52, y: 45, kind: 'walk', label: 'Street view' },
               { to: 'hall-south', x: 50, y: 93, kind: 'back', label: 'Hallway' } ] },

    { id: 'frontbed-view', image: 'frames/frontbed-view.jpg', room: 'Front Bedroom', pos: [9.5,37.8], yaw: 90,
      links: [ { to: 'frontbed', x: 50, y: 92, kind: 'back', label: 'Step back' } ] },
  ],
};
