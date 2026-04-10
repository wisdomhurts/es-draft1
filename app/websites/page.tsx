import Nav from '../components/Nav'
import Link from 'next/link'

export default function WebsitesPage() {
  const services = [
    { bg:'#F5F3F0', titleColor:'#173559', descColor:'#555555', label:'Design', title:'Custom visual design tailored to your brand.', desc:'Wireframes through high-fidelity mockups built around your investor audience.', tags:['UX / UI','Wireframes','Mockups'], tagBg:'#CFE1E9', tagColor:'#173559' },
    { bg:'#173559', titleColor:'#FFFFFF', descColor:'rgba(255,255,255,0.6)', label:'Development', title:'Clean, fast, mobile-first builds.', desc:'Optimised for investor relations, news updates, and property pages that actually rank.', tags:['CMS','Mobile-first','SEO'], tagBg:'rgba(158,205,228,0.12)', tagColor:'#9ECDE4' },
    { bg:'#F5F3F0', titleColor:'#173559', descColor:'#555555', label:'Graphics', title:'Custom icons, infographics, and map embeds.', desc:'Every visual element is brand-consistent and investor-ready.', tags:['Icons','Infographics','Map embeds'], tagBg:'#CFE1E9', tagColor:'#173559' },
    { bg:'#040404', titleColor:'#FFFFFF', descColor:'rgba(255,255,255,0.5)', label:'Re-designs', title:'Existing site not performing?', desc:'We audit, redesign, and rebuild — preserving your content while elevating everything else.', tags:['Audit','Rebuild','Migrate'], tagBg:'rgba(158,205,228,0.1)', tagColor:'#9ECDE4' },
  ]
  const steps = [
    ['01','Discovery Call','Goals, brand assets, content review, timeline.'],
    ['02','Design Mockup','Full-page layouts for review and feedback.'],
    ['03','Build & Review','Development with two rounds of revisions.'],
    ['04','Launch & Handoff','Go live with training and ongoing support.'],
  ]
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Hero */}
      <div style={{ backgroundColor:'#173559', boxSizing:'border-box', display:'flex', flexShrink:0, height:'560px', overflow:'clip', position:'relative', width:'1440px' }}>
        <div style={{ boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'20px', justifyContent:'center', maxWidth:'600px', paddingBlock:'80px', paddingInline:'80px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>02 — Digital Presence</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'64px', lineHeight:'1.05' }}>Websites built for the mining industry.</div>
          <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7' }}>Investor-grade web presence that converts visitors into shareholders.</div>
          <div style={{ display:'flex', gap:'16px', marginTop:'8px' }}>
            <Link href="/clients" style={{ textDecoration:'none' }}><div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'12px 28px' }}><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>See Our Work</span></div></Link>
            <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ border:'1px solid rgba(255,255,255,0.2)', borderRadius:'2px', padding:'12px 28px' }}><span style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>Get a Quote</span></div></Link>
          </div>
        </div>
        {/* Browser mockup */}
        <div style={{ backgroundColor:'#0D2240', border:'1px solid rgba(158,205,228,0.15)', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', boxSizing:'border-box', height:'480px', overflow:'clip', position:'absolute', right:'80px', top:'40px', width:'580px' }}>
          <div style={{ alignItems:'center', backgroundColor:'#0A1B2E', borderBottom:'1px solid rgba(158,205,228,0.1)', display:'flex', gap:'8px', padding:'12px 16px' }}>
            {['#C0392B80','#D4873F80','#6B7C3E80'].map(c => <div key={c} style={{ backgroundColor:c, borderRadius:'50%', flexShrink:0, height:'10px', width:'10px' }} />)}
            <div style={{ backgroundColor:'rgba(255,255,255,0.05)', borderRadius:'3px', flex:1, marginLeft:'8px', padding:'4px 12px' }}>
              <div style={{ color:'rgba(255,255,255,0.3)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px' }}>explorationsites.com/client-name</div>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'12px', padding:'24px' }}>
            <div style={{ backgroundColor:'#173559', borderRadius:'1px', flexShrink:0, height:'4px' }} />
            <div style={{ background:'linear-gradient(135deg,rgba(23,53,89,0.8),rgba(13,34,64,0.9))', borderRadius:'3px', display:'flex', flexDirection:'column', flexShrink:0, height:'140px', justifyContent:'flex-end', padding:'16px' }}>
              <div style={{ backgroundColor:'rgba(255,255,255,0.6)', borderRadius:'2px', flexShrink:0, height:'10px', marginBottom:'8px', width:'60%' }} />
              <div style={{ backgroundColor:'rgba(255,255,255,0.3)', borderRadius:'2px', flexShrink:0, height:'7px', width:'40%' }} />
            </div>
            <div style={{ display:'flex', gap:'8px' }}>
              {[0,1,2].map(i => <div key={i} style={{ backgroundColor:'rgba(245,243,240,0.05)', borderRadius:'3px', flex:1, height:'60px' }} />)}
            </div>
          </div>
        </div>
      </div>
      {/* Services grid */}
      <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>03 — What&apos;s Included</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>From first draft to live site.</div>
        </div>
        <div style={{ display:'flex', gap:'24px' }}>
          {services.map(({ bg, titleColor, descColor, label, title, desc, tags, tagBg, tagColor }) => (
            <div key={label} style={{ backgroundColor:bg, borderRadius:'4px', boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'20px', padding:'40px' }}>
              <div style={{ color:titleColor, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'18px', fontWeight:700 }}>{label}</div>
              <div style={{ color:titleColor, fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'24px', lineHeight:'1.3' }}>{title}</div>
              <div style={{ color:descColor, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7' }}>{desc}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginTop:'auto' }}>
                {tags.map(t => <span key={t} style={{ backgroundColor:tagBg, borderRadius:'12px', color:tagColor, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', padding:'3px 10px' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Process */}
      <div style={{ alignItems:'flex-start', backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', gap:'80px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'32px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>04 — Process</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'40px', lineHeight:'48px' }}>Four weeks, start to launch.</div>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {steps.map(([num, title, desc], i) => (
              <div key={num} style={{ borderBottom:i<steps.length-1?'1px solid #CFE1E9':undefined, display:'flex', gap:'24px', paddingBlock:'24px' }}>
                <div style={{ color:'#CFE1E9', flexShrink:0, fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'32px', lineHeight:'40px', width:'48px' }}>{num}</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
                  <div style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:700 }}>{title}</div>
                  <div style={{ color:'#888888', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', lineHeight:'1.6' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'32px', paddingTop:'48px' }}>
          <div style={{ borderLeft:'3px solid #173559', paddingLeft:'24px' }}>
            <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'24px', fontStyle:'italic', lineHeight:'1.6' }}>&ldquo;A mining website isn&apos;t a brochure. It&apos;s a live investor relations tool — and we build it like one.&rdquo;</div>
          </div>
          <div style={{ backgroundColor:'#173559', borderRadius:'4px', display:'flex', flexDirection:'column', gap:'16px', padding:'32px' }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Typical Project</div>
            {[['Timeline','3–4 weeks'],['Pages','6–10 pages'],['Revisions','2 rounds'],['Support','30-day post-launch']].map(([k,v]) => (
              <div key={k} style={{ borderBottom:'1px solid rgba(255,255,255,0.1)', display:'flex', justifyContent:'space-between', paddingBlock:'12px' }}>
                <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>{k}</div>
                <div style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', fontWeight:600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#040404', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Start Your Website</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'1.1' }}>Your website should work<br/>as hard as your team.</div>
        </div>
        <div style={{ alignItems:'flex-start', display:'flex', flexDirection:'column', gap:'16px' }}>
          <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Request a Quote</span></div></Link>
          <div style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>info@explorationsites.com</div>
        </div>
      </div>
      {/* Footer */}
      <div style={{ alignItems:'center', backgroundColor:'#0F2540', borderTop:'1px solid rgba(255,255,255,0.08)', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'24px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', fontWeight:600 }}>Exploration Sites</div>
        <div style={{ display:'flex', gap:'32px' }}>
          {[['Maps','/maps'],['Websites','/websites'],['Presentations','/presentations'],['Movies','/movies']].map(([l,h]) => <Link key={l} href={h} style={{ textDecoration:'none' }}><span style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>{l}</span></Link>)}
        </div>
        <div style={{ color:'rgba(255,255,255,0.25)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>© 2026 Exploration Sites</div>
      </div>
    </div>
  )
}
