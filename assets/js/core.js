/* 共通ロジック（data.jsは読むだけで変更しない） */
(function () {
  const W = window.WORLDS || [];
  const C = (window.CATEGORIES || []).filter(c => c.ready !== false);
  const VIEWS = ['grid', 'list'];
  const SORTS = ['fav', 'new', 'visits', 'name', 'cap', 'capmin'];

  /* 目的から探す: いずれかのタグが付いたワールドを全売り場から集める（「まだ行ってない」は除く） */
  const PURPOSES = [
    { id: 'solo', name: '一人でのんびり', tags: ['一人でゆっくり', '静かな空間'] },
    { id: 'sleep', name: 'V睡したい', tags: ['睡眠・V睡'] },
    { id: 'friends', name: 'フレンドと遊ぶ', tags: ['フレンドと', 'パーティー', '対戦', '協力', '集会・交流'] },
    { id: 'beginner', name: '初めての人を案内', tags: ['初心者向き'] },
    { id: 'photo', name: '写真を撮る', tags: ['写真・撮影', 'フォトスタジオ'] },
    { id: 'music', name: '音楽・ライブ', tags: ['音楽・ライブ', 'パーティクルライブ', 'VRMV'] },
    { id: 'story', name: '物語・体験に浸る', tags: ['ストーリー', '体験型', 'アトラクション', '映画祭・受賞作'] },
    { id: 'quest', name: 'Questで行ける', tags: ['Quest対応'] }
  ];
  const PURPOSE_EXCLUDE = 'todo';

  const defaultCat = (C.find(c => c.id === 'recommend') || C[0] || {}).id;
  const S = { cat: defaultCat, purpose: '', tags: new Set(), q: '', sort: 'fav', view: 'grid' };
  const subs = [];

  try { const v = localStorage.getItem('ws-design-view'); if (VIEWS.includes(v)) S.view = v; } catch (e) {}

  function readHash() {
    const h = new URLSearchParams(location.hash.slice(1));
    if (h.get('p') && PURPOSES.some(p => p.id === h.get('p'))) { S.purpose = h.get('p'); S.cat = ''; }
    else if (h.get('c') && C.some(c => c.id === h.get('c'))) { S.cat = h.get('c'); S.purpose = ''; }
    if (VIEWS.includes(h.get('v'))) S.view = h.get('v');
    if (h.get('t')) h.get('t').split(',').filter(Boolean).forEach(t => S.tags.add(t));
    if (h.get('q')) S.q = h.get('q');
    if (SORTS.includes(h.get('s'))) S.sort = h.get('s');
  }
  readHash();

  function syncHash() {
    const p = new URLSearchParams();
    if (S.purpose) p.set('p', S.purpose); else p.set('c', S.cat);
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
  const purposeOf = id => PURPOSES.find(p => p.id === id) || null;
  const order = new Map(W.map((w, i) => [w.id, i]));
  const inCat = id => W.filter(w => w.category === id);
  const has = (w, t) => (w.tags || []).includes(t);

  /* 今の売り場、または選んだ目的に当てはまるワールド */
  function scope() {
    const p = purposeOf(S.purpose);
    if (p) return W.filter(w => w.category !== PURPOSE_EXCLUDE && p.tags.some(t => has(w, t)));
    return inCat(S.cat);
  }

  const noCache = {};
  function exhibitNo(w) {
    if (!noCache[w.category]) {
      const m = new Map(); inCat(w.category).forEach((x, i) => m.set(x.id, i + 1)); noCache[w.category] = m;
    }
    return noCache[w.category].get(w.id) || 0;
  }

  function matches(w) {
    for (const t of S.tags) if (!has(w, t)) return false;
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
  const list = () => sortList(scope().filter(matches));

  function tagCounts() {
    const c = {};
    scope().forEach(w => (w.tags || []).forEach(t => (c[t] = (c[t] || 0) + 1)));
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

  /* 説明文の1文目をカード用の短い紹介にする（data.jsのnoteはそのまま） */
  function splitNote(w) {
    const n = String((w && w.note) || '').trim();
    const re = /[。！？!?]/g;
    let m;
    while ((m = re.exec(n))) {
      const i = m.index + 1, next = n[i] || '';
      if (i < 15) continue;                                   // 「すしづめ！」など名前の中の記号で切らない
      if (/[」』）)]/.test(next)) continue;                   // 括弧の中の文末
      if (/[!?]/.test(m[0]) && next && !/\s/.test(next)) continue; // 英字名の「Glass!」など
      return { hook: n.slice(0, i), rest: n.slice(i).trim() };
    }
    return { hook: n, rest: '' };
  }

  /* お気に入り数が上位2割なら「人気」 */
  const favSorted = W.map(w => w.favorites || 0).sort((a, b) => a - b);
  const popularLine = favSorted.length ? favSorted[Math.floor(favSorted.length * 0.8)] : Infinity;
  const isPopular = w => (w.favorites || 0) >= popularLine;

  function seeded(seed) { let a = seed | 0; return function () { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  /* 今日のワールド: 日付で決まる1件（「まだ行ってない」は紹介しない） */
  function daily(offset) {
    const pool = W.filter(w => w.category !== PURPOSE_EXCLUDE);
    if (!pool.length) return null;
    const d = new Date();
    const r = seeded(d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate() + (offset || 0));
    return pool[Math.floor(r() * pool.length)];
  }
  const todayLabel = () => { const d = new Date(); return d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0'); };
  const newest = n => W.slice(-n).reverse();
  const random = arr => arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;

  function emit() { syncHash(); subs.forEach(f => f(S)); }
  function set(p) {
    if (p.cat && (p.cat !== S.cat || S.purpose)) { S.cat = p.cat; S.purpose = ''; S.tags.clear(); S.q = ''; }
    if ('purpose' in p && p.purpose !== S.purpose) {
      if (purposeOf(p.purpose)) { S.purpose = p.purpose; S.cat = ''; }
      else { S.purpose = ''; S.cat = defaultCat; }
      S.tags.clear(); S.q = '';
    }
    if (p.tags) S.tags = new Set(p.tags);
    if ('q' in p) S.q = p.q;
    if (p.sort) S.sort = p.sort;
    if (p.view && VIEWS.includes(p.view)) { S.view = p.view; try { localStorage.setItem('ws-design-view', p.view); } catch (e) {} }
    emit();
  }
  function toggleTag(t) { S.tags.has(t) ? S.tags.delete(t) : S.tags.add(t); emit(); }
  function clearFilters() { S.tags.clear(); S.q = ''; emit(); }
  const on = fn => { subs.push(fn); fn(S); };

  /* ---------- 詳細モーダル ---------- */
  /* hooks: テンプレート側のモーダル(Bootstrapなど)で開閉したい場合に {show, hide} を渡す */
  const M = {
    overlay: null, box: null, render: null, hooks: null, opened: false, list: [], idx: -1,
    mount(overlay, box, render, hooks) {
      this.overlay = overlay; this.box = box; this.render = render; this.hooks = hooks || null;
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
          set(w && !scope().includes(w) ? { cat: w.category, tags: [t] } : { tags: [t] });
          const cat = document.getElementById('catalog'); if (cat) cat.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    open(w, lst) {
      if (!w || !this.render) return;
      this.list = lst && lst.length ? lst : [w];
      this.idx = Math.max(0, this.list.indexOf(w));
      this.box.innerHTML = this.render(w, { hasNav: this.list.length > 1, pos: this.idx + 1, total: this.list.length, rel: related(w, 4) });
      if (this.hooks) { if (!this.opened) this.hooks.show(); }
      else { this.overlay.classList.add('show'); document.documentElement.style.overflow = 'hidden'; }
      this.opened = true;
      this.overlay.scrollTop = 0;
    },
    step(d) { if (this.list.length < 2) return; this.idx = (this.idx + d + this.list.length) % this.list.length; this.open(this.list[this.idx], this.list); },
    close() {
      if (!this.overlay || !this.opened) return;
      this.opened = false;
      if (this.hooks) this.hooks.hide();
      else { this.overlay.classList.remove('show'); document.documentElement.style.overflow = ''; }
    },
    markClosed() { this.opened = false; },
    isOpen() { return this.opened; }
  };
  window.addEventListener('hashchange', () => {
    const h = new URLSearchParams(location.hash.slice(1));
    const p = h.get('p'), c = h.get('c');
    if (p && p !== S.purpose && purposeOf(p)) set({ purpose: p });
    else if (c && (c !== S.cat || S.purpose) && C.some(x => x.id === c)) set({ cat: c });
  });

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

  window.WS = { W, C, S, PURPOSES, esc, num, img, url, catName, purposeOf, inCat, scope, list, tagCounts, related, splitNote, isPopular, daily, todayLabel, newest, random, exhibitNo, set, toggleTag, clearFilters, on, modal: M };
})();
