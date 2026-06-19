// One-off: optimize the selected-work maps into web AVIF (card + lightbox sizes).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'src/images/work';
mkdirSync(OUT, { recursive: true });

const maps = [
  { src: '/Users/dorian/Downloads/NGEX_RegionalLocator_2026 copy.jpg', name: 'vicuna-district' },
  { src: '/Users/dorian/Downloads/Kincora_ProjectsMineralBelts_NSW.jpg', name: 'kincora-nsw' },
  { src: '/Users/dorian/Downloads/GMIN_Greenstone_Cropped no text.jpg', name: 'greenstone-belts' },
];

for (const m of maps) {
  await sharp(m.src).resize({ width: 1400, withoutEnlargement: true }).avif({ quality: 58 }).toFile(`${OUT}/${m.name}.avif`);
  await sharp(m.src).resize({ width: 2400, withoutEnlargement: true }).avif({ quality: 62 }).toFile(`${OUT}/${m.name}-full.avif`);
  const t = await sharp(`${OUT}/${m.name}.avif`).metadata();
  console.log(`${m.name}: ${t.width}x${t.height}`);
}
console.log('done');
