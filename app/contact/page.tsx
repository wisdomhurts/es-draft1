import Nav from '../components/Nav'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Header */}
      <div style={{ backgroundColor:'#173559', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'16px', paddingBottom:'64px', paddingLeft:'80px', paddingRight:'80px', paddingTop:'80px', width:'1440px' }}>
        <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>07 — Contact</div>
        <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'64px', lineHeight:'1.05' }}>Start a project.</div>
        <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7', maxWidth:'480px' }}>Tell us about your property and what you need. We&apos;ll follow up within one business day.</div>
      </div>
      {/* Form + Sidebar */}
      <div style={{ alignItems:'flex-start', backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', gap:'64px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        {/* Form */}
        <div style={{ backgroundColor:'#FFFFFF', borderRadius:'4px', boxSizing:'border-box', display:'flex', flex:'1.4', flexDirection:'column', gap:'24px', padding:'48px' }}>
          <div style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', fontWeight:700 }}>Inquiry Form</div>
          {/* Name row */}
          <div style={{ display:'flex', gap:'16px' }}>
            {['First Name','Last Name'].map(placeholder => (
              <div key={placeholder} style={{ display:'flex', flex:1, flexDirection:'column', gap:'6px' }}>
                <label style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, letterSpacing:'0.5px' }}>{placeholder.toUpperCase()}</label>
                <div style={{ backgroundColor:'#F5F3F0', border:'1px solid #E0DDD9', borderRadius:'3px', boxSizing:'border-box', height:'44px', padding:'12px 14px', width:'100%' }}>
                  <div style={{ color:'#BBBBBB', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>{placeholder}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Company + Email */}
          {[['Company / Issuer Name','Your company name'],['Email Address','you@company.com']].map(([label, placeholder]) => (
            <div key={label} style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
              <label style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, letterSpacing:'0.5px' }}>{label.toUpperCase()}</label>
              <div style={{ backgroundColor:'#F5F3F0', border:'1px solid #E0DDD9', borderRadius:'3px', boxSizing:'border-box', height:'44px', padding:'12px 14px' }}>
                <div style={{ color:'#BBBBBB', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>{placeholder}</div>
              </div>
            </div>
          ))}
          {/* Service dropdown */}
          <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
            <label style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, letterSpacing:'0.5px' }}>SERVICE NEEDED</label>
            <div style={{ alignItems:'center', backgroundColor:'#F5F3F0', border:'1px solid #E0DDD9', borderRadius:'3px', boxSizing:'border-box', display:'flex', height:'44px', justifyContent:'space-between', padding:'12px 14px' }}>
              <div style={{ color:'#BBBBBB', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>Select a service…</div>
              <div style={{ borderLeft:'5px solid transparent', borderRight:'5px solid transparent', borderTop:'5px solid #AAAAAA', flexShrink:0, height:0, width:0 }} />
            </div>
          </div>
          {/* Project description */}
          <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
            <label style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, letterSpacing:'0.5px' }}>PROJECT DESCRIPTION</label>
            <div style={{ backgroundColor:'#F5F3F0', border:'1px solid #E0DDD9', borderRadius:'3px', boxSizing:'border-box', height:'140px', padding:'14px', verticalAlign:'top' }}>
              <div style={{ color:'#BBBBBB', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.6' }}>Describe your property, what stage you&apos;re at, and what you need us to produce…</div>
            </div>
          </div>
          {/* Submit */}
          <div style={{ backgroundColor:'#173559', borderRadius:'2px', cursor:'pointer', padding:'14px 36px', width:'fit-content' }}>
            <span style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Submit Inquiry</span>
          </div>
          <div style={{ color:'#AAAAAA', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', lineHeight:'1.6' }}>We respond within one business day. For urgent requests, call <span style={{ color:'#173559', fontWeight:600 }}>604 688 9997</span>.</div>
        </div>
        {/* Sidebar */}
        <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'40px', paddingTop:'8px' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Direct Contact</div>
            {[['Phone','604 688 9997'],['Email','info@explorationsites.com'],['Office','1090 West Georgia St, Vancouver, BC']].map(([label, value]) => (
              <div key={label} style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
                <div style={{ color:'#888888', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>{label}</div>
                <div style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>{value}</div>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor:'#E8E8E8', height:'1px' }} />
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Typical Timelines</div>
            {[['Maps','3–7 business days'],['Websites','3–4 weeks'],['Presentations','5–10 business days'],['Films','2–3 weeks']].map(([service, timeline]) => (
              <div key={service} style={{ alignItems:'center', borderBottom:'1px solid #E8E8E8', display:'flex', justifyContent:'space-between', paddingBlock:'12px' }}>
                <div style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', fontWeight:600 }}>{service}</div>
                <div style={{ color:'#888888', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>{timeline}</div>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor:'#173559', borderRadius:'4px', display:'flex', flexDirection:'column', gap:'12px', padding:'28px' }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Rush Available</div>
            <div style={{ color:'rgba(255,255,255,0.8)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.6' }}>Need something before an AGM, financing deadline, or conference? We offer rush production on most services. Mention it in your inquiry.</div>
          </div>
        </div>
      </div>
      {/* Expanded Footer */}
      <div style={{ backgroundColor:'#0D2240', boxSizing:'border-box', display:'flex', flexDirection:'column', paddingBlock:'64px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', gap:'80px', paddingBottom:'48px' }}>
          <div style={{ display:'flex', flex:'1.5', flexDirection:'column', gap:'20px' }}>
            <div style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', fontWeight:700 }}>Exploration Sites</div>
            <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', lineHeight:'1.8', maxWidth:'320px' }}>Powerful visual storytelling for exploration-stage mining companies. Maps, websites, presentations, and films.</div>
            <div style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>Vancouver, BC · Since 1994</div>
          </div>
          <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'16px' }}>
            <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Services</div>
            {[['Maps','/maps'],['Websites','/websites'],['Presentations','/presentations'],['Movies','/movies']].map(([l,h]) => <Link key={l} href={h} style={{ textDecoration:'none' }}><span style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>{l}</span></Link>)}
          </div>
          <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'16px' }}>
            <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>More</div>
            {[['Clients','/clients'],['Team','/team'],['Contact','/contact']].map(([l,h]) => <Link key={l} href={h} style={{ textDecoration:'none' }}><span style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>{l}</span></Link>)}
          </div>
          <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'16px' }}>
            <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Contact</div>
            <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>604 688 9997</div>
            <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>info@explorationsites.com</div>
          </div>
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', display:'flex', justifyContent:'space-between', paddingTop:'24px' }}>
          <div style={{ color:'rgba(255,255,255,0.25)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>© 2026 Exploration Sites. All rights reserved.</div>
          <div style={{ color:'rgba(255,255,255,0.2)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>Vancouver, Canada</div>
        </div>
      </div>
    </div>
  )
}
