import Nav from '../components/Nav'
import Link from 'next/link'

const values = [
  ['Collaborate', 'We embed with your team — geologists, IR, and executives — to understand the story before we touch a single map or slide.'],
  ['Visualize', 'Raw data becomes investor-grade visuals. Every output is built to NI 43-101 and TSX publication standards.'],
  ['Deliver', 'We hit deadlines because we know AGMs, financings, and press releases don\'t wait.'],
]

const studioInfo = [
  ['Location', 'Vancouver, BC'],
  ['Founded', '1994'],
  ['Focus', 'Exploration & Mining'],
  ['Languages', 'English · French · Spanish'],
  ['Inquiries', 'info@explorationsites.com'],
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function TeamPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Team</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Specialists who speak both geology and design.</div>
      </div>

      <Divider />

      {/* Founder */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Founder & Principal</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Dorian Greyson</div>
          <div style={{ display: 'flex', gap: '32px', marginTop: '28px' }}>
            {[['30+', 'Years'], ['500+', 'Projects'], ['5', 'Continents']].map(([val, label]) => (
              <div key={label}>
                <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '32px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1 }}>{val}</div>
                <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', marginTop: '4px', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ borderLeft: '3px solid #CFE1E9', marginBottom: '28px', paddingLeft: '20px' }}>
            <div style={{ color: '#555', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '22px', fontStyle: 'italic', lineHeight: 1.6 }}>&ldquo;I started Exploration Sites because I kept seeing technically excellent projects fail to raise capital — not for lack of geology, but for lack of story. We fix that.&rdquo;</div>
          </div>
          <div style={{ color: '#555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            With over 30 years in exploration-stage communications, Dorian has worked alongside geologists, investment bankers, and IR teams across five continents — producing the maps, decks, websites, and films that have helped companies move from drill results to funded programs.
          </div>
          <div style={{ color: '#555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.8 }}>
            Before founding Exploration Sites, Dorian led the communications practice at a Vancouver-based resource advisory firm, producing materials for over 200 TSX-V and NYSE-listed issuers.
          </div>
        </div>
      </div>

      <Divider />

      {/* Values */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>How we work</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Three principles. Every project.</div>
        </div>
        <div style={{ flex: 1 }}>
          {values.map(([title, desc], i) => (
            <div key={title} style={{ display: 'flex', gap: '24px', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ color: '#CFE1E9', flexShrink: 0, fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '28px', fontWeight: 300, lineHeight: 1, paddingTop: '2px', width: '36px' }}>0{i + 1}</div>
              <div>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{title}</div>
                <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '4px' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Studio */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>The studio</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Vancouver-based. Industry-focused. Globally deployed.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '16px' }}>Small enough to give every project personal attention, experienced enough to handle any stage of the capital markets cycle.</div>
        </div>
        <div style={{ flex: 1 }}>
          {studioInfo.map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '16px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>{k}</div>
              <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Let&apos;s make your project impossible to ignore.</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Start a conversation</div>
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
        <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>© 2026 Exploration Sites · Vancouver, BC</div>
      </div>
    </div>
  )
}
