import Nav from '../components/Nav'
import Link from 'next/link'

const mapTypes = [
  { label: 'Locators', price: '$1,200', desc: 'Site location relative to infrastructure, roads, and regional geology.' },
  { label: 'Area Play', price: '$1,200', desc: 'Regional-scale maps communicating district potential to institutional investors.' },
  { label: 'Property', price: '$1,200', desc: 'Detailed property extent, claim boundaries, and tenure mapping.' },
  { label: 'Geological', price: '$1,500', desc: 'Surface geology with formation boundaries, structural features, and lithology legend.' },
  { label: 'Geophysical', price: '$1,500', desc: 'Magnetic, gravity, and EM survey visualizations with interpreted structural trends.' },
  { label: 'Geochemical', price: '$1,500', desc: 'Soil, rock, and stream sediment anomaly maps using graduated symbology and heat-map overlays.' },
  { label: 'Sections', price: '$1,500', desc: 'Cross-sectional diagrams revealing subsurface geology, mineralization zones, and drill intercepts.' },
  { label: '3D & Isometric', price: '$2,000', desc: 'Isometric and perspective renders conveying topography, mineralization envelopes, and site infrastructure.' },
]

const deliverables = [
  'High-resolution PDF and PNG at print scale',
  'Source files retained for future revision cycles',
  'Naming convention: ES_Client_Property_Type_v01',
  'Branded footer bar and legend on every map',
  'Turnaround: 3–7 business days per map',
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function MapsPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Cartography & Spatial Visualization</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Maps that make your data undeniable.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '520px' }}>From locator maps to publication-ready geological sections — we turn raw GIS data into investor-grade visuals.</div>
      </div>

      <Divider />

      {/* Map types */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Map types</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Eight formats. One standard.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '16px' }}>Every map type is built to publication standard — press-ready, investor-grade, and geologically accurate.</div>
        </div>
        <div style={{ flex: 1 }}>
          {mapTypes.map(({ label, price, desc }, i) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{label}</div>
                <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.55, marginTop: '3px' }}>{desc}</div>
              </div>
              <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, flexShrink: 0, paddingLeft: '24px' }}>{price}</div>
            </div>
          ))}
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', marginTop: '12px' }}>Updates (half-hour) · $100 &nbsp;·&nbsp; Data Compilation · $1,600</div>
        </div>
      </div>

      <Divider />

      {/* Deliverable standard */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Deliverable standard</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Publication-ready. Every time.</div>
          <div style={{ borderLeft: '3px solid #CFE1E9', marginTop: '24px', paddingLeft: '20px' }}>
            <div style={{ color: '#555', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '20px', fontStyle: 'italic', lineHeight: 1.6 }}>&ldquo;Every map we produce is built as if it&apos;s going into a technical report, an investor deck, and a press release — simultaneously.&rdquo;</div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {deliverables.map((item, i) => (
            <div key={item} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ backgroundColor: '#9ECDE4', borderRadius: '50%', flexShrink: 0, height: '6px', marginTop: '7px', width: '6px' }} />
              <div style={{ color: '#555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Your data is ready. Let&apos;s make it visible.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>Turnaround: 3–7 business days per map</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Request a map quote</div>
          </Link>
        </div>
      </div>

      <Divider />
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '12px', padding: '28px 80px 36px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '28px' }}>
          {[['Maps', '/maps'], ['Websites', '/websites'], ['Presentations', '/presentations'], ['Movies', '/movies'], ['Pricing', '/pricing']].map(([l, h]) => (
            <Link key={l} href={h} style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
        <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>© 2026 Exploration Sites · All prices in CAD</div>
      </div>
    </div>
  )
}
