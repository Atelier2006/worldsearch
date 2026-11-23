/* デザイン案共通ロジック（data.jsは読むだけで変更しない） */
(function () {
  const W = window.WORLDS || [];
  const C = (window.CATEGORIES || []).filter(c => c.ready !== false);
  const VIEWS = ['grid', 'list'];
  const SORTS = ['fav', 'new', 'visits', 'name', 'cap', 'capmin'];
  const S = { cat: (C[0] || {}).id, tags: new Set(), q: '', sort: 'fav', view: 'grid' };
  const subs = [];

  try { const v = localStorage.getItem('ws-design-view'); if (VIEWS.includes(v)) S.view = v; } catch (e) {}

  (function readHash() {
    const h = new URLSearchParams(location.hash.slice(1));
    if (h.get('c') && C.some(c => c.id === h.get('c'))) S.cat = h.get('c');
    if (VIEWS.includes(h.get('v'))) S.view = h.get('v');
    if (h.get('t')) h.get('t').split(',').filter(Boolean).forEach(t => S.tags.add(t));
    if (h.get('q')) S.q = h.get('q');
    if (SORTS.includes(h.get('s'))) S.sort = h.get('s');
  })();

  function syncHash() {
    const p = new URLSearchParams();
    p.set('c', S.cat);
    if (S.view !== 'grid') p.set('v', S.view);
    if (S.tags.size) p.set('t', [...S.tags].join(','));
    if (S.q) p.set('q', S.q);
    if (S.sort !== 'fav') p.set('s', S.sort);
    history.replaceState(null, '', '#' + p.toString());
  }

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = n => (n || 0).toLocaleString('ja-JP');
  const img = (w, size) => String((w && w.thumb) || '').replace(/\/256$/, '/' + (size || 512));
  const url = id => 'https://vrchat.com/home/world/' + id;
  const catName = id => (C.find(c => c.id === id) || {}).name || '';
  const order = new Map(W.map((w, i) => [w.id, i]));
  const inCat = id => W.filter(w => w.category === id);

  const noCache = {};
  function exhibitNo(w) {
    if (!noCache[w.category]) {
      const m = new Map(); inCat(w.category).forEach((x, i) => m.set(x.id, i + 1)); noCache[w.category] = m;
    }
    return noCache[w.category].get(w.id) || 0;
  }

  function matches(w) {
    for (const t of S.tags) if (!(w.tags || []).includes(t)) return false;
    if (S.q) {
      const q = S.q.toLowerCase();
      const hay = [w.name, w.note, w.official, w.subtype, (w.tags || []).join(' '), '定員' + w.capacity, w.capacity, w.recommendedCapacity].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }
  function sortList(arr) {
    const a = [...arr];
    const by = {
      fav: (x, y) => (y.favorites || 0) - (x.favorites || 0),
      new: (x, y) => order.get(y.id) - order.get(x.id),
      visits: (x, y) => (y.visits || 0) - (x.visits || 0),
      name: (x, y) => (x.name || '').localeCompare(y.name || '', 'ja'),
      cap: (x, y) => (y.capacity || 0) - (x.capacity || 0),
      capmin: (x, y) => (x.capacity || 0) - (y.capacity || 0)
    }[S.sort];
    return by ? a.sort(by) : a;
  }
  const list = () => sortList(inCat(S.cat).filter(matches));

  function tagCounts() {
    const c = {};
    inCat(S.cat).forEach(w => (w.tags || []).forEach(t => (c[t] = (c[t] || 0) + 1)));
    return Object.entries(c).sort((a, b) => b[1] - a[1]);
  }

  function related(w, n) {
    const mine = new Set(w.tags || []);
    return W.filter(x => x.id !== w.id).map(x => {
      let s = 0;
      (x.tags || []).forEach(t => { if (mine.has(t)) s++; });
      if (x.subtype && x.subtype === w.subtype) s += 0.5;
      if (x.category === w.category) s += 0.25;
      return { x, s };
    }).filter(o => o.s > 0)
      .sort((a, b) => b.s - a.s || (b.x.favorites || 0) - (a.x.favorites || 0))
      .slice(0, n || 4).map(o => o.x);
  }

  function seeded(seed) { let a = seed | 0; return function () { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function daily(offset) {
    if (!W.length) return null;
    const d = new Date();
    const r = seeded(d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate() + (offset || 0));
    return W[Math.floor(r() * W.length)];
  }
  const todayLabel = () => { const d = new Date(); return d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0'); };
  const newest = n => W.slice(-n).reverse();
  const random = arr => arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;

  function emit() { syncHash(); subs.forEach(f => f(S)); }
  function set(p) {
    if (p.cat && p.cat !== S.cat) { S.cat = p.cat; S.tags.clear(); S.q = ''; }
    if (p.tags) S.tags = new Set(p.tags);
    if ('q' in p) S.q = p.q;
    if (p.sort) S.sort = p.sort;
    if (p.view && VIEWS.includes(p.view)) { S.view = p.view; try { localStorage.setItem('ws-design-view', p.view); } catch (e) {} }
    emit();
  }
  function toggleTag(t) { S.tags.has(t) ? S.tags.delete(t) : S.tags.add(t); emit(); }
  const on = fn => { subs.push(fn); fn(S); };

  /* ---------- 詳細モーダル ---------- */
  const M = {
    overlay: null, box: null, render: null, list: [], idx: -1,
    mount(overlay, box, render) {
      this.overlay = overlay; this.box = box; this.render = render;
      overlay.addEventListener('click', e => { if (e.target === overlay) M.close(); });
      box.addEventListener('click', e => {
        const el = e.target.closest('[data-ws-close],[data-ws-prev],[data-ws-next],[data-ws-rel],[data-ws-tag]');
        if (!el) return;
        if (el.hasAttribute('data-ws-close')) M.close();
        else if (el.hasAttribute('data-ws-prev')) M.step(-1);
        else if (el.hasAttribute('data-ws-next')) M.step(1);
        else if (el.hasAttribute('data-ws-rel')) { const r = W.find(x => x.id === el.getAttribute('data-ws-rel')); if (r) M.open(r, [r]); }
        else if (el.hasAttribute('data-ws-tag')) {
          const t = el.getAttribute('data-ws-tag'), w = M.list[M.idx];
          M.close();
          set(w && w.category !== S.cat ? { cat: w.category, tags: [t] } : { tags: [t] });
          const cat = document.getElementById('catalog'); if (cat) cat.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    open(w, lst) {
      if (!w || !this.render) return;
      this.list = lst && lst.length ? lst : [w];
      this.idx = Math.max(0, this.list.indexOf(w));
      this.box.innerHTML = this.render(w, { hasNav: this.list.length > 1, pos: this.idx + 1, total: this.list.length, rel: related(w, 4) });
      this.overlay.classList.add('show');
      this.overlay.scrollTop = 0;
      document.documentElement.style.overflow = 'hidden';
    },
    step(d) { if (this.list.length < 2) return; this.idx = (this.idx + d + this.list.length) % this.list.length; this.open(this.list[this.idx], this.list); },
    close() { if (!this.overlay) return; this.overlay.classList.remove('show'); document.documentElement.style.overflow = ''; },
    isOpen() { return !!(this.overlay && this.overlay.classList.contains('show')); }
  };

  document.addEventListener('keydown', e => {
    if (M.isOpen()) {
      if (e.key === 'Escape') M.close();
      else if (e.key === 'ArrowLeft') M.step(-1);
      else if (e.key === 'ArrowRight') M.step(1);
      return;
    }
    const typing = /INPUT|SELECT|TEXTAREA/.test((document.activeElement || {}).tagName || '');
    if (e.key === '/' && !typing) { const q = document.querySelector('[data-ws-search]'); if (q) { e.preventDefault(); q.focus(); } }
  });

  window.WS = { W, C, S, esc, num, img, url, catName, inCat, list, tagCounts, related, daily, todayLabel, newest, random, exhibitNo, set, toggleTag, on, modal: M };
})();
