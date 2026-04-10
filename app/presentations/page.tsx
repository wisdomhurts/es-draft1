import Nav from '../components/Nav'
import Link from 'next/link'

const formats = [
  { name: 'Investor Deck', price: '$5,000', desc: 'Structured narrative, branded visuals, embedded maps. Built around your NI 43-101 highlights and designed to close the room.' },
  { name: 'Development (complex builds)', price: '$8,000', desc: 'Multi-section technical presentations with custom diagrams, animated slides, and full data visualization.' },
  { name: 'Fact Sheet', price: '$1,200', desc: 'One-page corporate summary — property highlights, key metrics, and contact information in a print-ready layout.' },
]

const conferenceItems = [
  { name: 'PDAC-Ready Package', desc: 'Booth banners, factsheets, one-pagers, and presentation templates for maximum trade show impact.' },
  { name: 'Technical Report Figures', desc: 'Charts, cross-sections, drill result tables, and geological figures designed for regulatory publication standards.' },
  { name: 'AGM Materials', desc: 'Annual general meeting decks, shareholder reports, and management presentations.' },
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function PresentationsPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Tell Stories</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Presentations that close the room.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '520px' }}>Investor decks, technical presentations, and conference materials that make your story impossible to ignore.</div>
      </div>

      <Divider />

      {/* Core formats */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Tell a compelling story</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Every stage. Every audience.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '16px' }}>Typical turnaround: 5–10 business days</div>
        </div>
        <div style={{ flex: 1 }}>
          {formats.map(({ name, price, desc }, i) => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{name}</div>
                <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.55, marginTop: '4px', maxWidth: '480px' }}>{desc}</div>
              </div>
              <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, flexShrink: 0, paddingLeft: '24px' }}>{price}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Conference & Technical */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Conference & Technical</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Own the room at PDAC, AME, and beyond.</div>
        </div>
        <div style={{ flex: 1 }}>
          {conferenceItems.map(({ name, desc }, i) => (
            <div key={name} style={{ padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{name}</div>
              <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.55, marginTop: '4px' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Your next presentation should open doors.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>Typical turnaround: 5–10 business days</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Start a presentation</div>
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
