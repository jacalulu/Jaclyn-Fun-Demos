/*
 * Floor plan SVG renderer.
 * All geometry is in FEET, y-axis pointing down (SVG convention).
 *
 * plan schema:
 * {
 *   bounds: {w, h},                         // overall extent in feet
 *   wallThickness: 0.4,
 *   rooms:    [{id, name, poly:[[x,y],..], labelPos:[x,y], area}],
 *   walls:    [[[x1,y1],[x2,y2]], ...],
 *   doors:    [{hinge:[x,y], angle:deg, swing:deg, width:ft}],   // arc + leaf
 *   openings: [[[x1,y1],[x2,y2]], ...],     // cased opening (no door)
 *   windows:  [[[x1,y1],[x2,y2]], ...],
 *   fixtures: [{type:'rect',x,y,w,h,label?} | {type:'circle',cx,cy,r,label?} | {type:'poly',pts,label?}],
 *   dims:     [{from:[x,y], to:[x,y], offset:ft, label}],
 * }
 */
(function () {
  const NS = 'http://www.w3.org/2000/svg';

  function fmt(n) { return Math.round(n * 100) / 100; }

  function renderFloorPlan(plan, opts) {
    opts = Object.assign({ scale: 22, showDims: true, mini: false, pad: null }, opts || {});
    const s = opts.scale;
    const pad = opts.pad != null ? opts.pad : (opts.showDims ? 3.2 : 1.0); // feet of padding
    const W = (plan.bounds.w + pad * 2) * s;
    const H = (plan.bounds.h + pad * 2) * s;
    const X = (v) => fmt((v + pad) * s);
    const Y = (v) => fmt((v + pad) * s);
    const wallW = (plan.wallThickness || 0.4) * s;
    const parts = [];

    parts.push(`<svg xmlns="${NS}" viewBox="0 0 ${fmt(W)} ${fmt(H)}" width="${fmt(W)}" height="${fmt(H)}" font-family="-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">`);
    parts.push(`<defs>
      <marker id="fp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="#7c8698"/>
      </marker>
    </defs>`);
    parts.push(`<rect x="0" y="0" width="${fmt(W)}" height="${fmt(H)}" fill="${opts.mini ? 'none' : '#fbfaf7'}"/>`);

    // room fills + labels
    (plan.rooms || []).forEach((r) => {
      const pts = r.poly.map((p) => `${X(p[0])},${Y(p[1])}`).join(' ');
      parts.push(`<polygon points="${pts}" fill="${r.fill || '#f1ede4'}" stroke="none"/>`);
    });

    // fixtures (light outline detail)
    if (!opts.mini) {
      (plan.fixtures || []).forEach((f) => {
        const st = `fill="none" stroke="#b8beca" stroke-width="1.2"`;
        if (f.type === 'rect') {
          const rot = f.rot ? ` transform="rotate(${f.rot} ${X(f.x + f.w / 2)} ${Y(f.y + f.h / 2)})"` : '';
          parts.push(`<rect x="${X(f.x)}" y="${Y(f.y)}" width="${fmt(f.w * s)}" height="${fmt(f.h * s)}" ${st} rx="2"${rot}/>`);
        } else if (f.type === 'circle') {
          parts.push(`<circle cx="${X(f.cx)}" cy="${Y(f.cy)}" r="${fmt(f.r * s)}" ${st}/>`);
        } else if (f.type === 'poly') {
          parts.push(`<polygon points="${f.pts.map((p) => `${X(p[0])},${Y(p[1])}`).join(' ')}" ${st}/>`);
        }
        if (f.label) {
          const lx = f.type === 'circle' ? f.cx : (f.lx != null ? f.lx : f.x + f.w / 2);
          const ly = f.type === 'circle' ? f.cy : (f.ly != null ? f.ly : f.y + f.h / 2);
          parts.push(`<text x="${X(lx)}" y="${Y(ly)}" font-size="${0.42 * s}" fill="#9aa2b1" text-anchor="middle" dominant-baseline="middle">${f.label}</text>`);
        }
      });
    }

    // walls
    (plan.walls || []).forEach((w) => {
      parts.push(`<line x1="${X(w[0][0])}" y1="${Y(w[0][1])}" x2="${X(w[1][0])}" y2="${Y(w[1][1])}" stroke="#2b3345" stroke-width="${fmt(wallW)}" stroke-linecap="square"/>`);
    });

    // cased openings: paint floor color over the wall gap
    (plan.openings || []).forEach((o) => {
      parts.push(`<line x1="${X(o[0][0])}" y1="${Y(o[0][1])}" x2="${X(o[1][0])}" y2="${Y(o[1][1])}" stroke="#f1ede4" stroke-width="${fmt(wallW + 2)}" stroke-linecap="butt"/>`);
    });

    // windows: gap + triple line
    (plan.windows || []).forEach((w) => {
      const [a, b] = w;
      parts.push(`<line x1="${X(a[0])}" y1="${Y(a[1])}" x2="${X(b[0])}" y2="${Y(b[1])}" stroke="#fbfaf7" stroke-width="${fmt(wallW + 1)}" stroke-linecap="butt"/>`);
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const len = Math.hypot(dx, dy) || 1;
      const nx = (-dy / len) * 0.12, ny = (dx / len) * 0.12;
      [-1, 0, 1].forEach((k) => {
        parts.push(`<line x1="${X(a[0] + nx * k)}" y1="${Y(a[1] + ny * k)}" x2="${X(b[0] + nx * k)}" y2="${Y(b[1] + ny * k)}" stroke="#2b3345" stroke-width="1.1"/>`);
      });
    });

    // doors: gap + leaf + swing arc
    (plan.doors || []).forEach((d) => {
      const a0 = (d.angle * Math.PI) / 180;
      const a1 = ((d.angle + d.swing) * Math.PI) / 180;
      const hx = d.hinge[0], hy = d.hinge[1], w = d.width;
      const gx = hx + Math.cos(a0) * w, gy = hy + Math.sin(a0) * w;   // gap along wall
      const lx = hx + Math.cos(a1) * w, ly = hy + Math.sin(a1) * w;   // open leaf tip
      parts.push(`<line x1="${X(hx)}" y1="${Y(hy)}" x2="${X(gx)}" y2="${Y(gy)}" stroke="#fbfaf7" stroke-width="${fmt(wallW + 1)}" stroke-linecap="butt"/>`);
      if (!opts.mini) {
        const sweep = d.swing > 0 ? 1 : 0;
        parts.push(`<path d="M ${X(gx)} ${Y(gy)} A ${fmt(w * s)} ${fmt(w * s)} 0 0 ${sweep} ${X(lx)} ${Y(ly)}" fill="none" stroke="#9aa2b1" stroke-width="1" stroke-dasharray="3 3"/>`);
        parts.push(`<line x1="${X(hx)}" y1="${Y(hy)}" x2="${X(lx)}" y2="${Y(ly)}" stroke="#2b3345" stroke-width="2"/>`);
      }
    });

    // room labels
    if (!opts.mini) {
      (plan.rooms || []).forEach((r) => {
        if (!r.labelPos) return;
        parts.push(`<text x="${X(r.labelPos[0])}" y="${Y(r.labelPos[1])}" font-size="${0.62 * s}" font-weight="600" fill="#333c50" text-anchor="middle">${r.name}</text>`);
        if (r.area) {
          parts.push(`<text x="${X(r.labelPos[0])}" y="${Y(r.labelPos[1]) + 0.72 * s}" font-size="${0.44 * s}" fill="#7c8698" text-anchor="middle">${r.area}</text>`);
        }
      });
    }

    // dimension lines
    if (opts.showDims && !opts.mini) {
      (plan.dims || []).forEach((d) => {
        const ax = d.from[0], ay = d.from[1], bx = d.to[0], by = d.to[1];
        const dx = bx - ax, dy = by - ay;
        const len = Math.hypot(dx, dy) || 1;
        const nx = (-dy / len) * d.offset, ny = (dx / len) * d.offset;
        const x1 = ax + nx, y1 = ay + ny, x2 = bx + nx, y2 = by + ny;
        // extension lines
        parts.push(`<line x1="${X(ax)}" y1="${Y(ay)}" x2="${X(x1)}" y2="${Y(y1)}" stroke="#c4cad4" stroke-width="0.8"/>`);
        parts.push(`<line x1="${X(bx)}" y1="${Y(by)}" x2="${X(x2)}" y2="${Y(y2)}" stroke="#c4cad4" stroke-width="0.8"/>`);
        // dimension line with arrows
        parts.push(`<line x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}" stroke="#7c8698" stroke-width="1" marker-start="url(#fp-arrow)" marker-end="url(#fp-arrow)"/>`);
        // label
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        let rot = (Math.atan2(dy, dx) * 180) / Math.PI;
        if (rot > 90 || rot < -90) rot += 180;
        parts.push(`<text x="${X(mx)}" y="${Y(my)}" font-size="${0.46 * s}" font-weight="600" fill="#4a5468" text-anchor="middle" transform="rotate(${fmt(rot)} ${X(mx)} ${Y(my)})" dy="-4">${d.label}</text>`);
      });
    }

    parts.push('</svg>');
    return { svg: parts.join('\n'), toPx: (p) => [(p[0] + pad) * s, (p[1] + pad) * s], width: W, height: H };
  }

  window.renderFloorPlan = renderFloorPlan;
})();
