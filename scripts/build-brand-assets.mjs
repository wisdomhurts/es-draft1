// Generates og-image.png, apple-touch-icon.png, favicon-32.png from the brand mark.
// Run: node scripts/build-brand-assets.mjs
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';

const OUT = 'src/images';
mkdirSync(OUT, { recursive: true });

const MARK = `
  <polygon points="41.31 32 22.51 13.38 13.38 22.52 32.01 41.31 41.31 32"/>
  <polygon points="41.31 92.64 40.51 93.43 37.37 96.55 22.52 111.25 13.38 102.12 28.09 87.27 31.22 84.13 32.01 83.33 41.31 92.64"/>
  <polygon points="83.33 92.63 102.13 111.26 111.26 102.12 92.64 83.32 83.33 92.63"/>
  <polygon points="111.26 22.51 92.58 41.24 83.39 32.07 83.33 32.01 102.12 13.38 111.26 22.51"/>
  <path d="M71.93,0v41.61l-30.27,30.32H0v-19.22h43.1c5.3,0,9.61-4.31,9.61-9.61V0h19.22Z"/>
  <path d="M124.63,52.71v19.22h-43.1c-5.3,0-9.61,4.31-9.61,9.61v43.1h-19.22v-41.74l30.16-30.19h41.77Z"/>
`;

const NAVY = '#1A101F';
const QUARTZ = '#F4F1EC';
const GOLD = '#B8823A';
const SLATE = '#5A5F63';

function render(svg, width) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: width }, font: { loadSystemFonts: true } })
    .render().asPng();
}

// --- OG image 1200x630 ---
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${QUARTZ}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${GOLD}"/>
  <g transform="translate(96,96) scale(0.92)" fill="${NAVY}">${MARK}</g>
  <text x="240" y="190" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="${NAVY}">Exploration Sites</text>
  <text x="98" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="${NAVY}">Institutional-grade investor</text>
  <text x="98" y="470" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="${NAVY}">relations for exploration.</text>
  <text x="98" y="552" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="${SLATE}">Maps &#183; Websites &#183; Presentations &#183; 3D &amp; Motion &#183; Design</text>
</svg>`;
writeFileSync(`${OUT}/og-image.png`, render(og, 1200));

// --- apple-touch-icon 180x180 ---
const apple = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${NAVY}"/>
  <g transform="translate(36,36) scale(0.866)" fill="${QUARTZ}">${MARK}</g>
</svg>`;
writeFileSync(`${OUT}/apple-touch-icon.png`, render(apple, 180));

// --- favicon 32x32 ---
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="5" fill="${NAVY}"/>
  <g transform="translate(5,5) scale(0.1766)" fill="${QUARTZ}">${MARK}</g>
</svg>`;
writeFileSync(`${OUT}/favicon-32.png`, render(fav, 32));

console.log('Brand assets written to', OUT);
