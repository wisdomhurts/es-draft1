import Nav from './components/Nav'
import Link from 'next/link'

export default function HomePage() {
  const steps = [
    ['01','Discovery','Understanding your project context, audience, and objectives before a single pixel is placed.'],
    ['02','Refinement','Structured feedback cycles ensuring accuracy and consistency at every stage.'],
    ['03','Crafting','Translating technical data into accessible, compelling visuals that tell a clear story.'],
    ['04','Delivery','Production-ready assets formatted for immediate deployment across all channels.'],
  ]
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Hero */}
      <div style={{ alignItems:'center', backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'24px', justifyContent:'center', paddingBottom:'100px', paddingLeft:'80px', paddingRight:'80px', paddingTop:'120px', width:'1440px' }}>
        <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textAlign:'center', textTransform:'uppercase' }}>48.4284º N, 123.3656º W</div>
        <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'80px', letterSpacing:'-1px', lineHeight:'1.1', textAlign:'center' }}>Powerful Visual<br/>Storytelling</div>
        <div style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7', maxWidth:'560px', textAlign:'center' }}>Transforming complex geological data into compelling visual narratives that drive understanding, trust, and investment.</div>
        <div style={{ display:'flex', gap:'16px', marginTop:'8px' }}>
          <Link href="/contact" style={{ textDecoration:'none' }}>
            <div style={{ alignItems:'center', backgroundColor:'#173559', border:'1.5px solid #9ECDE4', borderRadius:'4px', boxShadow:'0 0 0 3px rgba(158,205,228,0.2),0 0 16px rgba(158,205,228,0.3)', display:'inline-flex', justifyContent:'center', padding:'14px 32px' }}>
              <span style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600, letterSpacing:'0.2px' }}>Start a Project</span>
            </div>
          </Link>
          <Link href="/clients" style={{ textDecoration:'none' }}>
            <div style={{ border:'1px solid #CFE1E9', borderRadius:'2px', padding:'14px 32px' }}>
              <span style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>View Our Work</span>
            </div>
          </Link>
        </div>
        <div style={{ color:'#BBBBBB', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', marginTop:'16px' }}>+30 Years Shaping Greatness</div>
      </div>
      {/* Metrics */}
      <div style={{ alignItems:'center', backgroundColor:'#173559', boxSizing:'border-box', display:'flex', justifyContent:'center', paddingBlock:'48px', paddingInline:'80px', width:'1440px' }}>
        {[['500+','Projects'],['100+','Websites'],['$50B','Client Market Cap']].map(([val, label], i, arr) => (
          <div key={label} style={{ alignItems:'center', borderRight: i<arr.length-1?'1px solid rgba(255,255,255,0.15)':undefined, display:'flex', flex:1, flexDirection:'column', gap:'6px' }}>
            <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px' }}>{val}</div>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>
      {/* Mission */}
      <div style={{ alignItems:'flex-start', backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', gap:'80px', paddingBlock:'100px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexBasis:'200px', flexDirection:'column', flexGrow:0, flexShrink:0, gap:'12px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Mission</div>
          <div style={{ backgroundColor:'#173559', height:'2px', width:'32px' }} />
        </div>
        <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'24px' }}>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'1.2' }}>At Exploration Sites, our mission is to transform complex geological data into compelling visual narratives that drive understanding, trust, and investment.</div>
          <div style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'15px', lineHeight:'1.8' }}>Three decades serving the mining industry — helping firms present their projects with precision and clarity through maps, 3D models, websites, presentations, and videos.</div>
        </div>
      </div>
      {/* Services */}
      <div style={{ backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBottom:'100px', paddingLeft:'80px', paddingRight:'80px', paddingTop:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Services</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>What We Do</div>
        </div>
        <div style={{ display:'flex', gap:'24px' }}>
          {[
            { href:'/maps', bg:'#FFFFFF', color:'#173559', textColor:'#040404', label:'Maps', title:"Your discoveries deserve to be seen in the best light.", desc:"We turn your GIS data into stunning visuals that highlight your project's potential.", tags:['Locators','Sections','Geological','3D Maps','Geochemical'], tagBg:'#F0F6F9', tagColor:'#173559' },
            { href:'/websites', bg:'#173559', color:'#9ECDE4', textColor:'rgba(158,205,228,0.8)', label:'Websites', title:"Professional sites tailored to the mining industry.", desc:"Enhancing your online presence and attracting investors through purposeful, clean design.", tags:['Design','Development','Re-designs','Graphics'], tagBg:'rgba(158,205,228,0.12)', tagColor:'#9ECDE4' },
            { href:'/presentations', bg:'#FFFFFF', color:'#173559', textColor:'#040404', label:'Presentations', title:"Impress investors with visuals that inspire.", desc:"Our presentations make your story stand out, ensuring you leave a lasting impact.", tags:['Investor-focused','Branded','Customizable'], tagBg:'#F0F6F9', tagColor:'#173559' },
          ].map(({ href, bg, color, textColor, label, title, desc, tags, tagBg, tagColor }) => (
            <Link key={label} href={href} style={{ flex:1, textDecoration:'none' }}>
              <div style={{ backgroundColor:bg, border:`1px solid ${bg==='#FFFFFF'?'#E8E8E8':'#173559'}`, borderRadius:'2px', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'20px', height:'100%', padding:'40px' }}>
                <div style={{ color, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>{label}</div>
                <div style={{ color:bg==='#173559'?'#FFFFFF':'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'28px', lineHeight:'1.2' }}>{title}</div>
                <div style={{ color:textColor, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7' }}>{desc}</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginTop:'4px' }}>
                  {tags.map(t => <span key={t} style={{ backgroundColor:tagBg, borderRadius:'2px', color:tagColor, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', padding:'4px 10px' }}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Approach */}
      <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'56px', paddingBlock:'100px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Our Approach</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>How We Work</div>
        </div>
        <div style={{ display:'flex' }}>
          {steps.map(([num, title, desc], i) => (
            <div key={num} style={{ borderRight:i<3?'1px solid #E8E8E8':undefined, boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'16px', paddingLeft:i>0?'40px':0, paddingRight:i<3?'40px':0 }}>
              <div style={{ color:'#CFE1E9', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'58px' }}>{num}</div>
              <div style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'15px', fontWeight:600 }}>{title}</div>
              <div style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#173559', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'32px', paddingBlock:'100px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Get In Touch</div>
        <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'56px', lineHeight:'1.1', textAlign:'center' }}>Ready to tell your story?</div>
        <div style={{ color:'rgba(255,255,255,0.55)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7', maxWidth:'480px', textAlign:'center' }}>Let&apos;s start a conversation about your project and how we can bring it to life.</div>
        <div style={{ display:'flex', gap:'16px', marginTop:'8px' }}>
          <Link href="/contact" style={{ textDecoration:'none' }}>
            <div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}>
              <span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Start a Project</span>
            </div>
          </Link>
          <div style={{ border:'1px solid rgba(255,255,255,0.25)', borderRadius:'2px', padding:'14px 36px' }}>
            <span style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>604 688 9997</span>
          </div>
        </div>
        <div style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', marginTop:'8px' }}>info@explorationsites.com</div>
      </div>
      {/* Footer */}
      <div style={{ alignItems:'center', backgroundColor:'#0F2540', borderTop:'1px solid rgba(255,255,255,0.08)', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'24px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', fontWeight:600 }}>Exploration Sites</div>
        <div style={{ display:'flex', gap:'32px' }}>
          {[['Maps','/maps'],['Websites','/websites'],['Presentations','/presentations'],['Movies','/movies']].map(([l,h]) => (
            <Link key={l} href={h} style={{ textDecoration:'none' }}><span style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>{l}</span></Link>
          ))}
        </div>
        <div style={{ color:'rgba(255,255,255,0.25)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>© 2026 Exploration Sites</div>
      </div>
    </div>
  )
}
