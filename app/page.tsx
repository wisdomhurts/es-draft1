import Nav from './components/Nav'
import Link from 'next/link'

const services = [
  { name: 'Maps & Spatial', desc: 'Locators, geological, geophysical, geochemical, sections, 3D and area play maps built to publication standard.', href: '/maps' },
  { name: 'Websites', desc: 'Investor-grade web presence — WordPress and Webflow builds optimised for IR, news and property pages.', href: '/websites' },
  { name: 'Presentations', desc: 'Investor decks, technical reports and conference materials designed around your NI 43-101 highlights.', href: '/presentations' },
  { name: 'Films & Motion', desc: '3D property flyovers, animated geological models and cinematic site videos that convey scale and context.', href: '/movies' },
  { name: 'Design & Branding', desc: 'Logo and visual identity systems built for resource companies from early-stage to production.', href: '/pricing' },
  { name: 'CRM & Socials', desc: 'Investor relations platform, social media content and shareholder outreach programs.', href: '/pricing' },
]

const stats = [['500+', 'Projects Completed'], ['100+', 'Websites Launched'], ['$50B+', 'Client Market Cap'], ['30+', 'Years Experience']]

const approach = [
  ['Understand', 'We study your geology, your investor audience, and the story your data wants to tell.'],
  ['Visualize', 'We turn raw GIS data, drill results and models into publication-ready visuals.'],
  ['Deliver', 'We hit your deadlines — AGMs, financings and press releases move fast, and so do we.'],
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function HomePage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title block */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Exploration Sites</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '860px' }}>Powerful visual storytelling for exploration-stage mining companies.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '520px' }}>From early-stage juniors to established producers — maps, websites, presentations, films, and branding that move investors.</div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, padding: '14px 36px' }}>Start a project</div>
          </Link>
          <Link href="/pricing" style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #CFE1E9', borderRadius: '6px', color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', padding: '14px 36px' }}>See pricing</div>
          </Link>
        </div>
      </div>

      <Divider />

      {/* Services */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>What we do</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Every service a mining company needs to tell its story.</div>
        </div>
        <div style={{ flex: 1 }}>
          {services.map(({ name, desc, href }, i) => (
            <Link key={name} href={href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
                <div>
                  <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{name}</div>
                  <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.55, marginTop: '4px' }}>{desc}</div>
                </div>
                <div style={{ color: '#CFE1E9', flexShrink: 0, fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '18px', paddingLeft: '24px' }}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Divider />

      {/* Stats */}
      <div style={{ display: 'flex', padding: '48px 80px' }}>
        {stats.map(([val, label], i) => (
          <div key={label} style={{ flex: 1, borderRight: i < stats.length - 1 ? '1px solid #E8E8E8' : undefined, paddingLeft: i > 0 ? '48px' : undefined, paddingRight: i < stats.length - 1 ? '48px' : undefined }}>
            <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1 }}>{val}</div>
            <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', marginTop: '8px', textTransform: 'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Approach */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>How we work</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Three principles. Every project.</div>
        </div>
        <div style={{ flex: 1 }}>
          {approach.map(([title, desc], i) => (
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

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Trusted by over 100 explorers across five continents.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>From early-stage juniors to established producers.</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Book a discovery call</div>
          </Link>
        </div>
      </div>

      <Divider />

      {/* Footer */}
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '12px', padding: '28px 80px 36px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '28px' }}>
          {[['Maps', '/maps'], ['Websites', '/websites'], ['Presentations', '/presentations'], ['Movies', '/movies'], ['Pricing', '/pricing'], ['Clients', '/clients'], ['Team', '/team']].map(([l, h]) => (
            <Link key={l} href={h} style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
        <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>© 2026 Exploration Sites · Vancouver, BC</div>
      </div>
    </div>
  )
}
