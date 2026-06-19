import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';
const OUT = 'src/images/sites';
mkdirSync(OUT, { recursive: true });
const slugs = ['snowline','avino','fireweed','west-red-lake','brixton','cabral','kincora','headwater','nexmetals','inflection','f3uranium','revival','nexgold','silver-viper'];
for (const s of slugs) {
  const src = `/tmp/sites/${s}.png`;
  if (!existsSync(src)) { console.log('MISSING', s); continue; }
  await sharp(src).resize({ width: 1200, withoutEnlargement: true }).avif({ quality: 60 }).toFile(`${OUT}/${s}.avif`);
  const m = await sharp(`${OUT}/${s}.avif`).metadata();
  console.log(s, `${m.width}x${m.height}`);
}
