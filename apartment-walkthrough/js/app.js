/*
 * Street-View-style walkthrough engine.
 * Consumes window.TOUR (see data.js) — a graph of photo nodes with
 * screen-space hotspot links, plus a floor plan for minimap/overlay.
 */
(function () {
  const TOUR = window.TOUR;
  const $ = (id) => document.getElementById(id);

  const frames = [$('frame-a'), $('frame-b')];
  let front = 0;                 // index into frames[] currently visible
  let current = null;            // current node
  let history = [];
  let transitioning = false;

  const nodesById = {};
  (TOUR.nodes || []).forEach((n) => (nodesById[n.id] = n));

  // ---------- boot ----------
  function boot() {
    $('tour-title').textContent = TOUR.title || 'Walkthrough';
    if (!TOUR.nodes || !TOUR.nodes.length) {
      $('empty-state').classList.remove('hidden');
      return;
    }
    buildRoomNav();
    const start = nodesById[TOUR.start] || TOUR.nodes[0];
    setNode(start, { instant: true });
    setTimeout(() => $('hint').classList.add('faded'), 6000);
  }

  // ---------- navigation ----------
  function setNode(node, opts) {
    opts = opts || {};
    current = node;
    $('room-name').textContent = node.room || '';
    highlightRoomChip(node.room);
    renderMinimap();
    preloadNeighbors(node);

    if (opts.instant) {
      const img = frames[front];
      img.src = node.image;
      img.classList.add('visible');
      renderHotspots(node);
      return;
    }
  }

  function goTo(id, hotspotPct) {
    if (transitioning) return;
    const next = nodesById[id];
    if (!next) return;
    transitioning = true;
    clearHotspots();

    const out = frames[front];
    const inn = frames[1 - front];

    // warp toward the clicked hotspot: the outgoing view accelerates and
    // defocuses into that point while the next view lands softly
    const ox = hotspotPct ? hotspotPct[0] : 50;
    const oy = hotspotPct ? hotspotPct[1] : 50;
    out.style.transformOrigin = `${ox}% ${oy}%`;
    inn.style.transformOrigin = '50% 50%';

    const begin = () => {
      void inn.offsetWidth;
      inn.classList.add('visible', 'warp-in');
      out.classList.add('warp-out');

      setTimeout(() => {
        out.classList.remove('warp-out', 'visible');
        inn.classList.remove('warp-in');
        out.style.transformOrigin = '50% 50%';
        front = 1 - front;
        transitioning = false;
        history.push(current.id);
        setNode(next, {});
        renderHotspots(next);
      }, 650);
    };

    if (inn.src !== absolute(next.image)) {
      inn.src = next.image;
      if (inn.complete) begin();
      else {
        inn.onload = () => { inn.onload = null; begin(); };
        inn.onerror = () => { inn.onerror = null; begin(); };
      }
    } else {
      begin();
    }
  }

  function goBack() {
    const prevId = history.pop();
    if (prevId) {
      const link = (current.links || []).find((l) => l.to === prevId);
      goTo(prevId, link ? [link.x, link.y] : [50, 90]);
      history.pop(); // goTo pushed current again; drop it
    }
  }

  function absolute(src) {
    const a = document.createElement('a');
    a.href = src;
    return a.href;
  }

  function preloadNeighbors(node) {
    (node.links || []).forEach((l) => {
      const n = nodesById[l.to];
      if (n) { const img = new Image(); img.src = n.image; }
    });
  }

  // ---------- hotspots ----------
  const ICONS = {
    walk: '<svg viewBox="0 0 24 24"><path d="M5 14 L12 7 L19 14"/></svg>',
    turn: '<svg viewBox="0 0 24 24"><path d="M4 12 H20 M13 5 L20 12 L13 19"/></svg>',
    turnl: '<svg viewBox="0 0 24 24"><path d="M20 12 H4 M11 5 L4 12 L11 19"/></svg>',
    door: '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="17" rx="1"/><circle cx="15" cy="12.5" r="0.8" fill="#fff"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M5 10 L12 17 L19 10"/></svg>',
  };

  function renderHotspots(node) {
    clearHotspots();
    const holder = $('hotspots');
    (node.links || []).forEach((l) => {
      const b = document.createElement('button');
      const kind = l.kind || 'walk';
      b.className = `hotspot ${kind}`;
      b.style.left = l.x + '%';
      b.style.top = l.y + '%';
      const icon = kind === 'turn' && l.side === 'left' ? ICONS.turnl : (ICONS[kind] || ICONS.walk);
      b.innerHTML = `<span class="disc">${icon}</span><span class="tag">${l.label || defaultLabel(l)}</span>`;
      b.addEventListener('click', () => goTo(l.to, [l.x, l.y]));
      holder.appendChild(b);
    });
  }

  function defaultLabel(l) {
    const n = nodesById[l.to];
    if (l.kind === 'back') return 'Go back';
    if (n && n.room && current && n.room !== current.room) return n.room;
    return 'Walk';
  }

  function clearHotspots() { $('hotspots').innerHTML = ''; }

  // ---------- room nav ----------
  function buildRoomNav() {
    const nav = $('room-nav');
    const seen = new Set();
    (TOUR.nodes || []).forEach((n) => {
      if (!n.room || seen.has(n.room)) return;
      seen.add(n.room);
      const btn = document.createElement('button');
      btn.textContent = n.room;
      btn.dataset.room = n.room;
      btn.addEventListener('click', () => {
        nav.classList.add('hidden');
        $('btn-rooms').textContent = 'Rooms ▾';
        const target = TOUR.nodes.find((x) => x.room === n.room);
        if (target && target !== current) goTo(target.id, [50, 55]);
      });
      nav.appendChild(btn);
    });
    $('btn-rooms').addEventListener('click', () => {
      const hidden = nav.classList.toggle('hidden');
      $('btn-rooms').textContent = hidden ? 'Rooms ▾' : 'Rooms ▴';
    });
  }

  function highlightRoomChip(room) {
    document.querySelectorAll('#room-nav button').forEach((b) => {
      b.classList.toggle('active', b.dataset.room === room);
    });
  }

  // ---------- minimap ----------
  const MINI_SCALE = 3.4;
  function renderMinimap() {
    if (!TOUR.plan) return;
    const holder = $('minimap-body');
    const r = renderFloorPlan(TOUR.plan, { scale: MINI_SCALE, mini: true, showDims: false, pad: 0.8 });
    const extra = [];
    // node dots
    (TOUR.nodes || []).forEach((n) => {
      if (!n.pos) return;
      const [px, py] = r.toPx(n.pos);
      extra.push(`<circle cx="${px}" cy="${py}" r="2.2" fill="${n === current ? 'none' : '#c9ced8'}" data-node="${n.id}" style="cursor:pointer"/>`);
    });
    // current position + view cone
    if (current && current.pos) {
      const [px, py] = r.toPx(current.pos);
      const yaw = ((current.yaw || 0) * Math.PI) / 180;
      const spread = 0.5;
      const c1x = px + Math.cos(yaw - spread) * 14, c1y = py + Math.sin(yaw - spread) * 14;
      const c2x = px + Math.cos(yaw + spread) * 14, c2y = py + Math.sin(yaw + spread) * 14;
      extra.push(`<path d="M ${px} ${py} L ${c1x} ${c1y} A 14 14 0 0 1 ${c2x} ${c2y} Z" fill="rgba(20,184,166,0.30)"/>`);
      extra.push(`<circle cx="${px}" cy="${py}" r="4.4" fill="#14b8a6" stroke="#fff" stroke-width="1.6"/>`);
    }
    holder.innerHTML = r.svg.replace('</svg>', extra.join('') + '</svg>');
    holder.querySelectorAll('circle[data-node]').forEach((c) => {
      c.addEventListener('click', (e) => {
        e.stopPropagation();
        const n = nodesById[c.dataset.node];
        if (n && n !== current) goTo(n.id, [50, 55]);
      });
    });
  }

  // ---------- floor plan overlay ----------
  function renderPlanOverlay() {
    if (!TOUR.plan) return;
    const holder = $('plan-svg-holder');
    const showDims = $('chk-dims').checked;
    const r = renderFloorPlan(TOUR.plan, { scale: 24, showDims });
    let svg = r.svg;
    if (current && current.pos) {
      const [px, py] = r.toPx(current.pos);
      svg = svg.replace('</svg>', `<circle cx="${px}" cy="${py}" r="7" fill="#14b8a6" stroke="#fff" stroke-width="2.4"><animate attributeName="r" values="7;9;7" dur="1.6s" repeatCount="indefinite"/></circle></svg>`);
    }
    holder.innerHTML = svg;
    $('plan-note').textContent = TOUR.planNote || '';
  }

  function openPlan() { renderPlanOverlay(); $('plan-overlay').classList.remove('hidden'); }
  function closePlan() { $('plan-overlay').classList.add('hidden'); }

  // ---------- input ----------
  $('btn-plan').addEventListener('click', openPlan);
  $('btn-close-plan').addEventListener('click', closePlan);
  $('chk-dims').addEventListener('change', renderPlanOverlay);
  $('minimap-body').addEventListener('click', openPlan);
  $('btn-mini').addEventListener('click', (e) => {
    e.stopPropagation();
    const collapsed = $('minimap').classList.toggle('collapsed');
    $('btn-mini').textContent = collapsed ? '□' : '–';
    $('btn-mini').title = collapsed ? 'Expand map' : 'Collapse map';
  });

  // drag the minimap anywhere on screen
  (function () {
    const mini = $('minimap');
    const head = $('minimap-head');
    let sx = 0, sy = 0, ox = 0, oy = 0, dragging = false;
    head.addEventListener('pointerdown', (e) => {
      if (e.target === $('btn-mini')) return;
      dragging = true;
      const r = mini.getBoundingClientRect();
      mini.style.left = r.left + 'px';
      mini.style.top = r.top + 'px';
      mini.style.bottom = 'auto';
      sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top;
      head.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    head.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const r = mini.getBoundingClientRect();
      const nx = Math.min(Math.max(0, ox + e.clientX - sx), window.innerWidth - r.width);
      const ny = Math.min(Math.max(0, oy + e.clientY - sy), window.innerHeight - r.height);
      mini.style.left = nx + 'px';
      mini.style.top = ny + 'px';
    });
    head.addEventListener('pointerup', () => { dragging = false; });
  })();
  $('plan-overlay').addEventListener('click', (e) => { if (e.target === $('plan-overlay')) closePlan(); });
  $('btn-fs').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') return closePlan();
    if (e.key === 'p' || e.key === 'P') {
      return $('plan-overlay').classList.contains('hidden') ? openPlan() : closePlan();
    }
    if (e.key === 'f' || e.key === 'F') return $('btn-fs').click();
    if (!current || transitioning) return;
    const links = current.links || [];
    const pick = (pred) => links.find(pred);
    let l = null;
    if (e.key === 'ArrowUp' || e.key === 'w') l = pick((x) => (x.kind || 'walk') === 'walk') || pick(() => true);
    if (e.key === 'ArrowRight' || e.key === 'd') l = pick((x) => x.kind === 'turn' && x.side !== 'left');
    if (e.key === 'ArrowLeft' || e.key === 'a') l = pick((x) => x.kind === 'turn' && x.side === 'left');
    if (e.key === 'ArrowDown' || e.key === 's') {
      l = pick((x) => x.kind === 'back');
      if (!l) return goBack();
    }
    if (l) goTo(l.to, [l.x, l.y]);
  });

  boot();
})();
