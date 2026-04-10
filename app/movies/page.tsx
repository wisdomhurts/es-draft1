import Nav from '../components/Nav'
import Link from 'next/link'

const services = [
  { name: '3D Flyovers', price: 'Quote', desc: 'Aerial camera paths over your property, rendered in photorealistic 3D with topographic data and site features. Delivered as MP4 · 4K · 60fps.' },
  { name: 'Geological Animations', price: 'Quote', desc: 'Animated cross-sections, deposit model reveals, and mineralization growth sequences that explain complex geology visually. Loopable and slide-ready.' },
  { name: 'Site Videos', price: 'Quote', desc: 'Cinematic site tours featuring field footage, drone captures, and core photography edited into a professional company video. Web-optimised with social cuts included.' },
]

const specs = [['4K', 'Resolution'], ['2–3 wks', 'Typical Timeline'], ['MP4 + MOV', 'Deliverable Formats'], ['Social Cuts', 'Included']]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function MoviesPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Motion & 3D</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Fly over your property. Move your investors.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '520px' }}>3D flyovers, animated geological models, and cinematic site videos that convey scale, context, and confidence.</div>
      </div>

      <Divider />

      {/* Services */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>What we produce</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Motion that proves your thesis.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '16px' }}>All films are priced on scope. Contact us for a quote.</div>
        </div>
        <div style={{ flex: 1 }}>
          {services.map(({ name, price, desc }, i) => (
            <div key={name} style={{ padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{name}</div>
                <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, flexShrink: 0, paddingLeft: '24px' }}>{price}</div>
              </div>
              <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Specs */}
      <div style={{ display: 'flex', padding: '48px 80px' }}>
        {specs.map(([val, label], i) => (
          <div key={label} style={{ flex: 1, borderRight: i < specs.length - 1 ? '1px solid #E8E8E8' : undefined, paddingLeft: i > 0 ? '48px' : undefined, paddingRight: i < specs.length - 1 ? '48px' : undefined }}>
            <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '40px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1 }}>{val}</div>
            <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', marginTop: '8px', textTransform: 'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Show the world what you&apos;ve found.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>604 688 9997 · info@explorationsites.com</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Start a film project</div>
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
        <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>© 2026 Exploration Sites</div>
      </div>
    </div>
  )
}
