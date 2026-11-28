#!/usr/bin/env node
// tools/notes.html で直して「書き出す」した説明文(note-edits-YYYY-MM-DD.json)を data.js に反映する。
//   node tools/apply-note-edits.js <書き出したファイル>          … 何が変わるかを見るだけ(data.js は変えない)
//   node tools/apply-note-edits.js <書き出したファイル> --write  … data.js を書き換える
// data.js の note の行だけを書き換える(ほかの項目・並び・コメントはそのまま)。
// 書き出した後に data.js 側の説明文が変わっていたワールドは、上書きせずに知らせる。
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA = path.resolve(__dirname, '..', 'data.js');
const file = process.argv[2];
const write = process.argv.includes('--write');
if (!file) {
  console.error('使い方: node tools/apply-note-edits.js <note-edits-YYYY-MM-DD.json> [--write]');
  process.exit(2);
}

function load(text) {
  const sandbox = { window: {}, document: { write() {} } };
  vm.runInNewContext(text, sandbox, { filename: DATA });
  return sandbox.window.WORLDS || [];
}

const edits = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8')).edits || {};
let text = fs.readFileSync(DATA, 'utf8');
const worlds = load(text);
const byId = new Map(worlds.map(w => [w.id, w]));

const done = [], skipped = [];
for (const [id, e] of Object.entries(edits)) {
  const w = byId.get(id);
  if (!w) { skipped.push(`${id}: data.js にありません`); continue; }
  const note = String(e.note == null ? '' : e.note).trim();
  if (note === (w.note || '')) continue;
  if (typeof e.before === 'string' && e.before !== (w.note || '')) {
    skipped.push(`${w.name}: 書き出した後に data.js の説明文が変わっています(上書きしません)`);
    continue;
  }
  // そのワールドの "id" の行から、次の "note": "…" を置き換える
  const at = text.indexOf(`"id": ${JSON.stringify(id)}`);
  if (at < 0) { skipped.push(`${w.name}: data.js の中で見つかりません`); continue; }
  const re = /"note":\s*("(?:[^"\\]|\\.)*")/g;
  re.lastIndex = at;
  const m = re.exec(text);
  if (!m || JSON.parse(m[1]) !== (w.note || '')) { skipped.push(`${w.name}: note の行が見つかりません`); continue; }
  const start = m.index + m[0].length - m[1].length;
  text = text.slice(0, start) + JSON.stringify(note) + text.slice(start + m[1].length);
  done.push({ w, note });
}

// 書き換えた data.js を読み直して確かめる(件数・書き換えた説明文)
const after = load(text);
if (after.length !== worlds.length) throw new Error(`件数が変わりました: ${worlds.length} -> ${after.length}`);
const afterById = new Map(after.map(w => [w.id, w]));
for (const { w, note } of done) {
  if (afterById.get(w.id).note !== note) throw new Error('書き換えの確認に失敗: ' + w.name);
}

for (const { w, note } of done) console.log(`- ${w.name}\n  前: ${w.note}\n  後: ${note}`);
for (const s of skipped) console.log('! ' + s);
console.log(`${done.length} 件${write ? 'を data.js に反映しました' : 'が変わります(--write で書き換え)'}${skipped.length ? `、${skipped.length} 件は飛ばしました` : ''}`);
if (write && done.length) fs.writeFileSync(DATA, text);
