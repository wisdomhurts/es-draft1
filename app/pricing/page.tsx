import Nav from '../components/Nav'
import Link from 'next/link'

const mapServices = [
  ['Map Design', '$1,200/map'],
  ['Isometric Model', '$2,000'],
  ['Leapfrog Geo Map', '$1,500'],
  ['Data Compilation', '$1,600'],
  ['Updates (half-hour)', '$100'],
]

const storyServices = [
  ['Presentation Design', '$5,000'],
  ['Development', '$8,000'],
  ['Fact Sheet', '$1,200'],
]

const webServices = [
  ['WordPress Site', '$12,000'],
  ['Webflow Site', '$18,000'],
]

const marketingServices = [
  ['CRM Platform', '$200/mo'],
  ['Social Media', '$4,000/mo'],
]

const brandServices = [
  ['Logo / Brand Creation', '$2,400'],
  ['Event Booths', '$1,200'],
  ['Individual Graphics', '$200/hr'],
]

const launchItems = [
  ['8 Maps', '$9,600'],
  ['Investor Deck', '$5,000'],
  ['WordPress Site', '$12,000'],
  ['Fact Sheet', '$1,200'],
  ['Logo & Brand Creation', '$2,400'],
]

const retainers = [
  {
    name: 'Essentials',
    price: '$3,800',
    rate: '$190/hr',
    savings: 'Save 5%',
    hours: '20 hrs/mo',
    rollover: 'Rollover up to 8 hrs',
    features: ['Dedicated coordinator', 'Priority 48-hr turnaround'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$8,750',
    rate: '$175/hr',
    savings: 'Save 13%',
    hours: '50 hrs/mo',
    rollover: 'Rollover up to 20 hrs',
    features: ['Dedicated account manager', 'Hosting included', 'Priority 48-hr turnaround'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$15,000',
    rate: '$150/hr',
    savings: 'Save 25%',
    hours: '100 hrs/mo',
    rollover: 'Rollover up to 40 hrs',
    features: ['Dedicated account manager', 'Hosting ($200/mo value included)', 'CRM access', 'Priority 24-hr turnaround'],
    featured: false,
  },
]

function ServiceBlock({ title, label, services }: { title: string; label: string; services: string[][] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
      <div style={{ alignItems: 'flex-end', borderBottom: '1px solid #CFE1E9', display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', marginBottom: '0px' }}>
        <div>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '28px', lineHeight: '1.1' }}>{title}</div>
        </div>
      </div>
      {services.map(([name, price]) => (
        <div key={name} style={{ alignItems: 'center', borderBottom: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-between', paddingBlock: '14px' }}>
          <div style={{ color: '#333333', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>{name}</div>
          <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>{price}</div>
        </div>
      ))}
    </div>
  )
}

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', WebkitFontSmoothing: 'antialiased' }}>
      <Nav />
      {/* Header */}
      <div style={{ backgroundColor: '#173559', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '64px', paddingLeft: '80px', paddingRight: '80px', paddingTop: '80px', width: '1440px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Pricing — Q2 2026</div>
        <div style={{ color: '#FFFFFF', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', lineHeight: '1.05' }}>Transparent pricing.<br/>No surprises.</div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '16px', lineHeight: '1.7', maxWidth: '520px' }}>À la carte services, a complete launch package, and ongoing retainer options for companies at every stage.</div>
        <div style={{ color: 'rgba(255,255,255,0.35)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px', marginTop: '8px' }}>All prices in CAD. GST not included. Rush fees may apply.</div>
      </div>

      {/* À La Carte */}
      <div style={{ backgroundColor: '#FFFFFF', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '48px', paddingBlock: '80px', paddingInline: '80px', width: '1440px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>À La Carte</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', lineHeight: '1.1' }}>Pick exactly what you need.</div>
        </div>
        <div style={{ display: 'flex', gap: '48px' }}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '40px' }}>
            <ServiceBlock label="Visualize your data" title="Maps & Spatial" services={mapServices} />
            <ServiceBlock label="Tell a compelling story" title="Presentations" services={storyServices} />
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '40px' }}>
            <ServiceBlock label="Your digital presence" title="Websites" services={webServices} />
            <ServiceBlock label="Reach & engage" title="Marketing" services={marketingServices} />
            <ServiceBlock label="Shape your identity" title="Branding" services={brandServices} />
          </div>
        </div>
      </div>

      {/* Launch Package */}
      <div style={{ backgroundColor: '#F5F3F0', boxSizing: 'border-box', paddingBlock: '80px', paddingInline: '80px', width: '1440px' }}>
        <div style={{ alignItems: 'flex-start', display: 'flex', gap: '80px' }}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '20px' }}>
            <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Everything you need to launch</div>
            <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', lineHeight: '1.1' }}>The complete investor relations package.</div>
            <div style={{ color: '#555555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: '1.7' }}>One package, one price. Everything a junior explorer needs to go from drill results to investor-ready — maps, deck, website, fact sheet, and brand — bundled for maximum impact.</div>
            <Link href="/contact" style={{ textDecoration: 'none', width: 'fit-content' }}>
              <div style={{ backgroundColor: '#173559', borderRadius: '2px', marginTop: '8px', padding: '14px 36px' }}>
                <span style={{ color: '#FFFFFF', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>Get This Package</span>
              </div>
            </Link>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '4px', borderTop: '4px solid #173559', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '40px 40px 0px' }}>
              {launchItems.map(([item, price], i) => (
                <div key={item} style={{ alignItems: 'center', borderBottom: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-between', paddingBlock: '14px' }}>
                  <div style={{ color: '#333333', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>{item}</div>
                  <div style={{ color: '#888888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>{price}</div>
                </div>
              ))}
            </div>
            <div style={{ alignItems: 'center', backgroundColor: '#173559', display: 'flex', justifyContent: 'space-between', marginTop: '0px', padding: '28px 40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Package Total</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px' }}>Save 20% vs. $30,200 à la carte</div>
              </div>
              <div style={{ color: '#FFFFFF', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '44px', lineHeight: '1.0' }}>$24,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Retainers */}
      <div style={{ backgroundColor: '#FFFFFF', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '48px', paddingBlock: '80px', paddingInline: '80px', width: '1440px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Ongoing Support</div>
          <div style={{ alignItems: 'flex-end', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', lineHeight: '1.1' }}>Monthly retainers.</div>
            <div style={{ color: '#888888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', maxWidth: '360px', textAlign: 'right' }}>Hourly rate drops the more hours you commit. Unused hours roll over, so nothing is wasted.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {retainers.map(({ name, price, rate, savings, hours, rollover, features, featured }) => (
            <div key={name} style={{ backgroundColor: featured ? '#173559' : '#F5F3F0', borderTop: `4px solid ${featured ? '#9ECDE4' : '#173559'}`, boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '24px', padding: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ alignItems: 'center', display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                  <div style={{ color: featured ? '#9ECDE4' : '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>{name}</div>
                  {featured && <div style={{ backgroundColor: 'rgba(158,205,228,0.15)', borderRadius: '12px', color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', padding: '3px 10px', textTransform: 'uppercase' }}>Most Popular</div>}
                </div>
                <div style={{ color: featured ? '#FFFFFF' : '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', lineHeight: '1.0' }}>{price}<span style={{ fontSize: '18px', opacity: 0.6 }}>/mo</span></div>
                <div style={{ color: featured ? '#9ECDE4' : '#888888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>{rate} · {savings}</div>
              </div>
              <div style={{ backgroundColor: featured ? 'rgba(255,255,255,0.08)' : '#E8E8E8', height: '1px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ color: featured ? 'rgba(255,255,255,0.7)' : '#555555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', fontWeight: 600 }}>{hours}</div>
                <div style={{ color: featured ? 'rgba(255,255,255,0.5)' : '#888888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px' }}>{rollover}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                {features.map(f => (
                  <div key={f} style={{ alignItems: 'flex-start', display: 'flex', gap: '10px' }}>
                    <div style={{ backgroundColor: featured ? '#9ECDE4' : '#173559', borderRadius: '50%', flexShrink: 0, height: '5px', marginTop: '7px', width: '5px' }} />
                    <div style={{ color: featured ? 'rgba(255,255,255,0.7)' : '#555555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', lineHeight: '1.6' }}>{f}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: featured ? '#9ECDE4' : '#173559', borderRadius: '2px', padding: '12px 24px', textAlign: 'center' }}>
                  <span style={{ color: featured ? '#040404' : '#FFFFFF', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', fontWeight: 600 }}>Get Started</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ alignItems: 'center', backgroundColor: '#040404', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingBlock: '80px', paddingInline: '80px', width: '1440px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Book a Discovery Call</div>
          <div style={{ color: '#FFFFFF', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', lineHeight: '1.1' }}>Not sure what<br/>you need yet?</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: '1.7', maxWidth: '420px' }}>We&apos;ll help you scope the right engagement — no commitment required.</div>
        </div>
        <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#9ECDE4', borderRadius: '2px', padding: '14px 36px' }}>
              <span style={{ color: '#040404', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>Book a Discovery Call</span>
            </div>
          </Link>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px' }}>Projects initiated once contract signed and deposit made.</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ alignItems: 'center', backgroundColor: '#0F2540', borderTop: '1px solid rgba(255,255,255,0.08)', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingBlock: '24px', paddingInline: '80px', width: '1440px' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', fontWeight: 600 }}>Exploration Sites</div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[['Maps', '/maps'], ['Websites', '/websites'], ['Presentations', '/presentations'], ['Movies', '/movies']].map(([l, h]) => (
            <Link key={l} href={h} style={{ textDecoration: 'none' }}>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>{l}</span>
            </Link>
          ))}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.25)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>© 2026 Exploration Sites</div>
      </div>
    </div>
  )
}
