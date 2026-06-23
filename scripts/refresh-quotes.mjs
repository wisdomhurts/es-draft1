// Refresh client stock prices + market caps on clients.html from Yahoo Finance.
// Re-runnable: pulls live quotes for every public ticker in the table, rewrites
// the Price and Market Cap cells, converts all market caps to USD, and updates
// the combined-market-cap headline stat. Private/failed lookups keep their
// existing values. Run: node scripts/refresh-quotes.mjs
import fs from 'node:fs';

const FILE = new URL('../src/clients.html', import.meta.url);
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

// Exchange -> Yahoo symbol suffix
const SUFFIX = { TSX: '.TO', TSXV: '.V', CSE: '.CN', ASX: '.AX', LSE: '.L', NYSE: '', NASDAQ: '' };

function yahooSymbol(ticker, exchange) {
  if (!ticker || ticker === '—') return null;
  if (!(exchange in SUFFIX)) return null; // Private etc.
  return ticker.trim() + SUFFIX[exchange];
}

async function getCrumb() {
  const r1 = await fetch('https://fc.yahoo.com', { headers: { 'User-Agent': UA } });
  const cookie = (r1.headers.get('set-cookie') || '').split(';')[0];
  const r2 = await fetch('https://query1.finance.yahoo.com/v1/test/getcrumb', {
    headers: { 'User-Agent': UA, Cookie: cookie },
  });
  const crumb = await r2.text();
  return { cookie, crumb };
}

const EX_CUR = { TSX: 'CAD', TSXV: 'CAD', CSE: 'CAD', ASX: 'AUD', LSE: 'GBP', NYSE: 'USD', NASDAQ: 'USD' };

// Resolve a ticker that failed the suffix guess to its real Yahoo symbol,
// but only accept a match on the SAME exchange suffix so the row stays correct.
async function resolveSymbol(ticker, suffix, auth) {
  try {
    const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(ticker)}&quotesCount=12&newsCount=0`;
    const r = await fetch(url, { headers: { 'User-Agent': UA, Cookie: auth.cookie } });
    const j = await r.json();
    const cands = (j?.quotes || []).filter((q) => q.symbol && q.symbol.endsWith(suffix));
    // prefer exact base-ticker match
    const base = ticker.trim().toUpperCase();
    const exact = cands.find((q) => q.symbol.toUpperCase() === base + suffix.toUpperCase());
    return (exact || cands[0])?.symbol || null;
  } catch {
    return null;
  }
}

// Parse an existing "$1.23B" / "$456M" / "$78K" cell into a number.
function parseCap(s) {
  const m = /\$([\d.]+)\s*([BMK])/.exec(s || '');
  if (!m) return 0;
  const n = parseFloat(m[1]);
  return n * (m[2] === 'B' ? 1e9 : m[2] === 'M' ? 1e6 : 1e3);
}

async function fetchQuotes(symbols, auth) {
  const out = {};
  for (let i = 0; i < symbols.length; i += 40) {
    const batch = symbols.slice(i, i + 40);
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(batch.join(','))}&crumb=${encodeURIComponent(auth.crumb)}`;
    const r = await fetch(url, { headers: { 'User-Agent': UA, Cookie: auth.cookie } });
    const j = await r.json();
    const res = j?.quoteResponse?.result || [];
    for (const q of res) out[q.symbol] = q;
    await new Promise((s) => setTimeout(s, 300));
  }
  return out;
}

function fmtPrice(v) {
  if (v == null || isNaN(v)) return null;
  if (v >= 0.01) return '$' + v.toFixed(2);
  return '$' + v.toFixed(3);
}
function fmtCap(v) {
  if (v == null || isNaN(v) || v <= 0) return null;
  if (v >= 1e9) return '$' + (v / 1e9).toFixed(2) + 'B';
  if (v >= 1e6) return '$' + Math.round(v / 1e6) + 'M';
  return '$' + Math.round(v / 1e3) + 'K';
}

let html = fs.readFileSync(FILE, 'utf8');

// Collect every public symbol referenced in the table.
const rowRe = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td>(.*?<\/tr>)/g;
const rows = [...html.matchAll(rowRe)];
const symset = new Set();
for (const m of rows) {
  const sym = yahooSymbol(m[3], m[4]);
  if (sym) symset.add(sym);
}
const symbols = [...symset];
console.log(`Rows: ${rows.length} | public symbols: ${symbols.length}`);

const auth = await getCrumb();
console.log('crumb:', auth.crumb ? 'ok' : 'FAILED');

// FX -> USD
const fx = await fetchQuotes(['CADUSD=X', 'AUDUSD=X', 'GBPUSD=X'], auth);
const RATE = {
  USD: 1,
  CAD: fx['CADUSD=X']?.regularMarketPrice ?? 0.73,
  AUD: fx['AUDUSD=X']?.regularMarketPrice ?? 0.66,
  GBP: fx['GBPUSD=X']?.regularMarketPrice ?? 1.27,
  GBp: (fx['GBPUSD=X']?.regularMarketPrice ?? 1.27),
};
console.log('FX->USD', RATE);

const quotes = await fetchQuotes(symbols, auth);
console.log(`First pass: ${Object.keys(quotes).length}/${symbols.length}`);

// Resolve first-pass misses via Yahoo symbol search (same-exchange matches only).
const missing = symbols.filter((s) => !quotes[s]);
const resolveMap = {};
for (const orig of missing) {
  const dot = orig.indexOf('.');
  const suffix = dot >= 0 ? orig.slice(dot) : '';
  const base = dot >= 0 ? orig.slice(0, dot) : orig;
  const resolved = await resolveSymbol(base, suffix, auth);
  if (resolved && resolved !== orig) resolveMap[orig] = resolved;
  await new Promise((s) => setTimeout(s, 120));
}
const resolvedSyms = [...new Set(Object.values(resolveMap))];
if (resolvedSyms.length) {
  const more = await fetchQuotes(resolvedSyms, auth);
  for (const [orig, res] of Object.entries(resolveMap)) if (more[res]) quotes[orig] = more[res];
}
console.log(`After resolve: ${Object.keys(quotes).length}/${symbols.length} (recovered ${Object.keys(resolveMap).length})`);

let updated = 0;
let fellBack = 0;
const failed = [];
let total = 0; // sum of displayed (native-currency) market caps, matching the column

html = html.replace(rowRe, (full, name, price, ticker, exchange, cap, rest) => {
  const sym = yahooSymbol(ticker, exchange);
  const q = sym ? quotes[sym] : null;
  if (!q) {
    // Public but unresolved: keep the row, but use its existing cap in the total.
    if (sym) {
      failed.push(sym);
      const ex = parseCap(cap);
      if (ex > 0) { total += ex; fellBack++; }
    }
    return full;
  }
  let p = q.regularMarketPrice;
  let mcap = q.marketCap; // native major currency
  let cur = q.currency || EX_CUR[exchange] || 'USD';
  if (cur === 'GBp' && p != null) p = p / 100; // pence -> pounds for display
  const newPrice = fmtPrice(p) || price;
  const newCap = fmtCap(mcap) || cap;
  if (mcap > 0) total += mcap;
  else { const ex = parseCap(cap); if (ex > 0) total += ex; }
  updated++;
  return `<tr><td>${name}</td><td>${newPrice}</td><td>${ticker}</td><td>${exchange}</td><td>${newCap}</td>${rest}`;
});

// Update the combined market-cap headline stat (native-currency sum, matching the column).
const totalB = total / 1e9;
const totalStr = '$' + Math.round(totalB) + 'B+';
html = html.replace(/(<div class="stat-number\s*">)\s*\$[\d.]+B\+\s*(<\/div>)/, `$1${totalStr}$2`);

fs.writeFileSync(FILE, html);
console.log(`Updated rows: ${updated} | unresolved: ${failed.length} (of those, ${fellBack} kept existing cap in total)`);
if (failed.length) console.log('UNRESOLVED:', failed.join(', '));
console.log(`Combined market cap (native sum): ${totalStr}  (raw ${total.toLocaleString()})`);
