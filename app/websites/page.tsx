import Nav from '../components/Nav'
import Link from 'next/link'

const platforms = [
  { name: 'Webflow', price: '$18,000', desc: 'Custom-designed, visually-editable sites. Fast, modern, and built for IR teams who want to own their updates without touching code.' },
  { name: 'WordPress', price: '$12,000', desc: 'Flexible CMS-driven builds with full content control. Ideal for news-heavy IR portals and companies with active disclosure cycles.' },
]

const included = [
  { name: 'UX / UI Design', desc: 'Wireframes through high-fidelity mockups built around your investor audience.' },
  { name: 'Development', desc: 'Clean, fast, mobile-first builds optimised for investor relations and property pages that rank.' },
  { name: 'Custom Graphics', desc: 'Icons, infographics, and map embeds — all brand-consistent and investor-ready.' },
  { name: 'SEO Foundation', desc: 'Technical SEO, metadata, and site architecture that performs in search.' },
  { name: 'Two Revision Rounds', desc: 'Structured feedback cycles keep projects moving without scope creep.' },
  { name: '30-Day Post-Launch Support', desc: 'We stay on after go-live to handle any issues and train your team.' },
]

const process = [
  ['01', 'Discovery Call', 'Goals, brand assets, content review, and timeline alignment.'],
  ['02', 'Design Mockup', 'Full-page layouts delivered for review and feedback.'],
  ['03', 'Build & Review', 'Development with two structured revision rounds.'],
  ['04', 'Launch & Handoff', 'Go live with training and 30-day post-launch support.'],
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function WebsitesPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Digital Presence</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Websites built for the mining industry.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '500px' }}>Investor-grade web presence that converts visitors into shareholders.</div>
      </div>

      <Divider />

      {/* Platforms */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Your digital presence</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Two platforms. One standard.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '16px' }}>We build on Webflow and WordPress — chosen based on your team&apos;s needs, not ours.</div>
        </div>
        <div style={{ flex: 1 }}>
          {platforms.map(({ name, price, desc }, i) => (
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

      {/* What's included */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>What&apos;s included</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>From first draft to live site.</div>
        </div>
        <div style={{ flex: 1 }}>
          {included.map(({ name, desc }, i) => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{name}</div>
                <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.55, marginTop: '3px' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Process */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Process</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Four weeks, start to launch.</div>
          <div style={{ borderLeft: '3px solid #CFE1E9', marginTop: '24px', paddingLeft: '20px' }}>
            <div style={{ color: '#555', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '19px', fontStyle: 'italic', lineHeight: 1.6 }}>&ldquo;A mining website isn&apos;t a brochure. It&apos;s a live investor relations tool — and we build it like one.&rdquo;</div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {process.map(([num, title, desc], i) => (
            <div key={num} style={{ display: 'flex', gap: '24px', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ color: '#CFE1E9', flexShrink: 0, fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '28px', fontWeight: 300, lineHeight: 1, paddingTop: '2px', width: '36px' }}>{num}</div>
              <div>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{title}</div>
                <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.55, marginTop: '4px' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Your website should work as hard as your team.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>info@explorationsites.com</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Request a quote</div>
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
