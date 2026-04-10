import Nav from '../components/Nav'
import Link from 'next/link'

const stats = [['500+', 'Projects Completed'], ['100+', 'Websites Launched'], ['$50B+', 'Client Market Cap'], ['30+', 'Years Experience']]

const regions = [
  ['Canada', 'BC · AB · YT · NWT · ON · QC · NL'],
  ['United States', 'AK · NV · AZ · MT · ID · CO · NM'],
  ['Latin America', 'Mexico · Peru · Chile · Colombia · Brazil'],
  ['Africa', 'Mali · Ghana · Tanzania · DRC · Zambia'],
  ['Asia Pacific', 'Australia · PNG · Philippines · Mongolia'],
]

const clients = [
  'Sitka Gold', 'Northern Copper', 'Arctic Mining', 'Pacific Gold', 'Yukon Resources',
  'Highland Zone', 'Basin Metals', 'Summit Drill', 'Cascade Silver', 'Ridgeline Ex.',
  'Frontier Zinc', 'Apex Lithium', 'Cedar Creek', 'Blackrock Ex.', 'Westridge Minerals',
  'Clearwater Gold', 'Ironside Resources', 'Norwest Silver', 'Pinnacle Copper', 'Highgate Zinc',
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function ClientsPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Clients</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Trusted by explorers across five continents.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '520px' }}>From early-stage juniors to established producers, we&apos;ve helped over 100 companies present their story with precision and credibility.</div>
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

      {/* Client list */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>A selection of clients</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Companies we&apos;ve helped build credibility.</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6, marginTop: '16px' }}>+ 80 more across all stages of the capital markets cycle.</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
          {clients.map((name) => (
            <div key={name} style={{ alignItems: 'center', border: '1px solid #E8E8E8', borderRadius: '4px', display: 'flex', padding: '14px 20px', width: 'calc(25% - 2px)' }}>
              <div>
                <div style={{ backgroundColor: '#173559', borderRadius: '1px', height: '2px', marginBottom: '6px', width: '24px' }} />
                <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px', fontWeight: 600 }}>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Geographic coverage */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>
        <div style={{ flexShrink: 0, width: '380px' }}>
          <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Geographic coverage</div>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '42px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Wherever your project sits, we know the terrain.</div>
        </div>
        <div style={{ flex: 1 }}>
          {regions.map(([region, areas], i) => (
            <div key={region} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
              <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{region}</div>
              <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>{areas}</div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Your story deserves to be told well.</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Start a project</div>
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
