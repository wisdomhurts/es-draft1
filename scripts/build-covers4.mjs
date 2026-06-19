import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const OUT = 'src/images/presentations';
for (const r of readFileSync('/tmp/decks4.txt', 'utf8').trim().split('\n')) {
  const [n, file, slug] = r.split('|');
  await sharp(`/tmp/covers/${file}.png`).resize({ width: 1100, withoutEnlargement: true }).avif({ quality: 60 }).toFile(`${OUT}/${slug}.avif`);
  const m = await sharp(`${OUT}/${slug}.avif`).metadata();
  console.log(slug, `${m.width}x${m.height}`);
}
