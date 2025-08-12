#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DEV_DIR = path.join('test', 'dev-test');
const CORPUS_DIR = path.join('test', 'corpus');

function toTitle(name) {
  return name.replace(/_/g, ' ');
}

function makeSection(title, body) {
  const header = '='.repeat(title.length);
  return [
    header,
    title,
    header,
    '',
    body.trimEnd(),
    '',
    '---',
    '',
    // leave expected empty; run `tree-sitter test --update` to populate
    '',
  ].join('\n');
}

function main() {
  if (!fs.existsSync(DEV_DIR)) {
    console.error(`Missing ${DEV_DIR}`);
    process.exit(1);
  }
  if (!fs.existsSync(CORPUS_DIR)) fs.mkdirSync(CORPUS_DIR, { recursive: true });

  const entries = fs.readdirSync(DEV_DIR).filter(f => f.endsWith('.gse'));
  if (!entries.length) {
    console.log('No .gse files found in', DEV_DIR);
    return;
  }

  for (const file of entries) {
    const name = path.basename(file, '.gse');
    const src = path.join(DEV_DIR, file);
    const dst = path.join(CORPUS_DIR, `dev_${name}.txt`);
    const content = fs.readFileSync(src, 'utf8');
    const section = makeSection(name, content);
    fs.writeFileSync(dst, section, 'utf8');
    console.log('Wrote', dst);
  }

  console.log('\nNext: run `npx tree-sitter generate` then `npx tree-sitter test --update` to populate expected trees.');
}

main();

