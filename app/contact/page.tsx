import Nav from '../components/Nav'
import Link from 'next/link'

const timelines = [
  ['Maps', '3–7 business days'],
  ['Websites', '3–4 weeks'],
  ['Presentations', '5–10 business days'],
  ['Films', '2–3 weeks'],
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

const FieldLabel = ({ children }: { children: string }) => (
  <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', marginBottom: '8px', textTransform: 'uppercase' }}>{children}</div>
)

const Field = ({ placeholder, tall }: { placeholder: string; tall?: boolean }) => (
  <div style={{ backgroundColor: '#F5F3F0', border: '1px solid #E8E8E8', borderRadius: '4px', color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', height: tall ? '120px' : '44px', padding: '12px 14px' }}>{placeholder}</div>
)

export default function ContactPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '640px' }}>Start a project.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '460px' }}>Tell us about your property and what you need. We&apos;ll follow up within one business day.</div>
      </div>

      <Divider />

      {/* Form + Sidebar */}
      <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 80px' }}>

        {/* Form */}
        <div style={{ flex: '1.4' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <FieldLabel>First Name</FieldLabel>
                <Field placeholder="First name" />
              </div>
              <div style={{ flex: 1 }}>
                <FieldLabel>Last Name</FieldLabel>
                <Field placeholder="Last name" />
              </div>
            </div>
            <div>
              <FieldLabel>Company / Issuer Name</FieldLabel>
              <Field placeholder="Your company name" />
            </div>
            <div>
              <FieldLabel>Email Address</FieldLabel>
              <Field placeholder="you@company.com" />
            </div>
            <div>
              <FieldLabel>Service Needed</FieldLabel>
              <div style={{ alignItems: 'center', backgroundColor: '#F5F3F0', border: '1px solid #E8E8E8', borderRadius: '4px', display: 'flex', height: '44px', justifyContent: 'space-between', padding: '12px 14px' }}>
                <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>Select a service…</div>
                <div style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid #bbb', height: 0, width: 0 }} />
              </div>
            </div>
            <div>
              <FieldLabel>Project Description</FieldLabel>
              <Field placeholder="Describe your property, stage, and what you need us to produce…" tall />
            </div>
            <div>
              <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', cursor: 'pointer', display: 'inline-block', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, padding: '14px 36px' }}>Submit Inquiry</div>
            </div>
            <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', lineHeight: 1.6 }}>We respond within one business day. For urgent requests, call <span style={{ color: '#173559', fontWeight: 600 }}>604 688 9997</span>.</div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '40px', paddingTop: '4px' }}>
          <div>
            <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Direct contact</div>
            {[['Phone', '604 688 9997'], ['Email', 'info@explorationsites.com'], ['Office', '1090 West Georgia St, Vancouver, BC']].map(([label, value], i) => (
              <div key={label} style={{ padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
                <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px', marginBottom: '3px' }}>{label}</div>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>{value}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Typical timelines</div>
            {timelines.map(([service, timeline], i) => (
              <div key={service} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid #E8E8E8' }}>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>{service}</div>
                <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px' }}>{timeline}</div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#F5F3F0', border: '1px solid #E8E8E8', borderLeft: '3px solid #173559', borderRadius: '4px', padding: '20px 24px' }}>
            <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>Rush Available</div>
            <div style={{ color: '#555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.6 }}>Need something before an AGM, financing deadline, or conference? Rush production is available on most services — mention it in your inquiry.</div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Expanded footer */}
      <div style={{ display: 'flex', gap: '80px', padding: '48px 80px 32px' }}>
        <div style={{ flex: '1.5' }}>
          <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Exploration Sites</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.7, maxWidth: '300px' }}>Powerful visual storytelling for exploration-stage mining companies.</div>
          <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', marginTop: '8px' }}>Vancouver, BC · Since 1994</div>
        </div>
        {[['Services', [['Maps', '/maps'], ['Websites', '/websites'], ['Presentations', '/presentations'], ['Movies', '/movies']]], ['More', [['Clients', '/clients'], ['Pricing', '/pricing'], ['Team', '/team'], ['Contact', '/contact']]]].map(([heading, links]) => (
          <div key={heading as string} style={{ flex: 1 }}>
            <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', marginBottom: '16px', textTransform: 'uppercase' }}>{heading as string}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {(links as string[][]).map(([l, h]) => (
                <Link key={l} href={h} style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          </div>
        ))}
        <div style={{ flex: 1 }}>
          <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', marginBottom: '16px', textTransform: 'uppercase' }}>Contact</div>
          <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', lineHeight: 1.8 }}>604 688 9997<br />info@explorationsites.com</div>
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', padding: '20px 80px 32px' }}>
        <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>© 2026 Exploration Sites. All rights reserved.</div>
        <div style={{ color: '#bbb', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>Projects initiated once contract signed and deposit made. GST not included. All prices in CAD.</div>
      </div>
    </div>
  )
}
