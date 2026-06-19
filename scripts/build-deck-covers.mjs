// One-off: optimize deck cover thumbnails (from qlmanage PNGs) into web AVIF.
import sharp from 'sharp';
import { mkdirSync, readFileSync } from 'node:fs';

const OUT = 'src/images/presentations';
mkdirSync(OUT, { recursive: true });

const rows = readFileSync('/tmp/decks8.txt', 'utf8').trim().split('\n');
for (const r of rows) {
  const [name, file, slug] = r.split('|');
  const src = `/tmp/covers/${file}.png`;
  await sharp(src).resize({ width: 1100, withoutEnlargement: true }).avif({ quality: 60 }).toFile(`${OUT}/${slug}.avif`);
  const m = await sharp(`${OUT}/${slug}.avif`).metadata();
  console.log(`${slug}: ${m.width}x${m.height}`);
}
console.log('done');
