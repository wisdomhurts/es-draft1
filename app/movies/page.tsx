import Nav from '../components/Nav'
import Link from 'next/link'

export default function MoviesPage() {
  const services = [
    { label:'3D Flyovers', desc:'Aerial camera paths over your property, rendered in photorealistic 3D with topographic data and site features.', spec:'MP4 · 4K · 60fps' },
    { label:'Geological Animations', desc:'Animated cross-sections, deposit model reveals, and mineralization growth sequences that explain complex geology visually.', spec:'MP4 · Loopable · Slide-ready', featured:true },
    { label:'Site Videos', desc:'Cinematic site tours featuring field footage, drone captures, and core photography edited into a professional company video.', spec:'MP4 · Web-optimised · Social cuts' },
  ]
  const specs = [['4K','Resolution'],['2–3 wks','Typical Timeline'],['MP4 + MOV','Deliverable Formats'],['Social Cuts','Included']]
  return (
    <div style={{ backgroundColor:'#040404', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Hero */}
      <div style={{ backgroundColor:'#040404', boxSizing:'border-box', display:'flex', flexDirection:'column', flexShrink:0, height:'600px', justifyContent:'center', overflow:'clip', paddingBlock:'80px', paddingInline:'80px', position:'relative', width:'1440px' }}>
        {/* Grid */}
        <div style={{ bottom:0, left:0, opacity:0.04, position:'absolute', right:0, top:0 }}>
          {[15,35,55,75].map(p => <div key={`h${p}`} style={{ backgroundColor:'#FFFFFF', height:'1px', left:0, position:'absolute', right:0, top:`${p}%` }} />)}
          {[25,50,75].map(p => <div key={`v${p}`} style={{ backgroundColor:'#FFFFFF', bottom:0, left:`${p}%`, position:'absolute', top:0, width:'1px' }} />)}
        </div>
        {/* Video mockup */}
        <div style={{ backgroundColor:'#0D2240', border:'1px solid rgba(158,205,228,0.1)', borderRadius:'4px', boxSizing:'border-box', height:'480px', overflow:'clip', position:'absolute', right:'80px', top:'60px', width:'540px' }}>
          {/* Play button */}
          <div style={{ alignItems:'center', border:'2px solid rgba(158,205,228,0.6)', borderRadius:'50%', display:'flex', height:'72px', justifyContent:'center', left:'50%', position:'absolute', top:'50%', translate:'-50% -50%', width:'72px' }}>
            <div style={{ borderBottom:'14px solid transparent', borderLeft:'22px solid rgba(158,205,228,0.8)', borderTop:'14px solid transparent', flexShrink:0, height:0, marginLeft:'4px', width:0 }} />
          </div>
          {/* Progress bar */}
          <div style={{ background:'linear-gradient(to top,rgba(4,4,4,0.9),transparent)', bottom:0, left:0, padding:'16px 20px', position:'absolute', right:0 }}>
            <div style={{ alignItems:'center', display:'flex', gap:'12px' }}>
              <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'10px' }}>0:00</div>
              <div style={{ backgroundColor:'rgba(255,255,255,0.15)', borderRadius:'1px', flex:1, height:'2px', position:'relative' }}>
                <div style={{ backgroundColor:'#9ECDE4', borderRadius:'1px', height:'100%', width:'30%' }} />
              </div>
              <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'10px' }}>3:42</div>
            </div>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'20px', maxWidth:'580px', position:'relative' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>04 — Motion & 3D</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'68px', lineHeight:'1.0' }}>Fly over your property. Move your investors.</div>
          <div style={{ color:'rgba(255,255,255,0.55)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7' }}>3D flyovers, animated geological models, and cinematic site videos that convey scale, context, and confidence.</div>
          <div style={{ display:'flex', gap:'16px', marginTop:'8px' }}>
            <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ alignItems:'center', backgroundColor:'#9ECDE4', borderRadius:'2px', display:'flex', gap:'10px', padding:'12px 28px' }}><div style={{ borderBottom:'6px solid transparent', borderLeft:'10px solid #040404', borderTop:'6px solid transparent', flexShrink:0, height:0, width:0 }} /><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>See Sample Reel</span></div></Link>
            <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ border:'1px solid rgba(255,255,255,0.2)', borderRadius:'2px', padding:'12px 28px' }}><span style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px' }}>Get a Quote</span></div></Link>
          </div>
        </div>
      </div>
      {/* Services */}
      <div style={{ backgroundColor:'#040404', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>05 — What We Produce</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>Motion that proves your thesis.</div>
        </div>
        <div style={{ display:'flex', gap:'2px' }}>
          {services.map(({ label, desc, spec, featured }) => (
            <div key={label} style={{ backgroundColor:featured?'rgba(23,53,89,0.4)':'rgba(255,255,255,0.03)', border:`1px solid ${featured?'rgba(158,205,228,0.12)':'rgba(255,255,255,0.06)'}`, boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'16px', padding:'40px' }}>
              <div style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', fontWeight:700 }}>{label}</div>
              <div style={{ color:'rgba(255,255,255,0.45)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', lineHeight:'1.7' }}>{desc}</div>
              <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', marginTop:'auto' }}>{spec}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Specs strip */}
      <div style={{ backgroundColor:'#173559', boxSizing:'border-box', display:'flex', paddingBlock:'48px', paddingInline:'80px', width:'1440px' }}>
        {specs.map(([val, label], i) => (
          <div key={label} style={{ borderRight:i<specs.length-1?'1px solid rgba(255,255,255,0.1)':undefined, display:'flex', flex:1, flexDirection:'column', gap:'8px', paddingInline:i>0&&i<specs.length-1?'40px':undefined, paddingLeft:i===specs.length-1?'40px':undefined, paddingRight:i===0?'40px':undefined }}>
            <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'40px', lineHeight:'48px' }}>{val}</div>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#040404', borderTop:'1px solid rgba(255,255,255,0.06)', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Commission a Film</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'1.1' }}>Show the world<br/>what you&apos;ve found.</div>
        </div>
        <div style={{ alignItems:'flex-start', display:'flex', flexDirection:'column', gap:'16px' }}>
          <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Start a Film Project</span></div></Link>
          <div style={{ color:'rgba(255,255,255,0.3)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>604 688 9997</div>
        </div>
      </div>
      {/* Footer */}
      <div style={{ alignItems:'center', backgroundColor:'#0A0A0A', borderTop:'1px solid rgba(255,255,255,0.06)', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'24px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', fontWeight:600 }}>Exploration Sites</div>
        <div style={{ display:'flex', gap:'32px' }}>
          {[['Maps','/maps'],['Websites','/websites'],['Presentations','/presentations'],['Movies','/movies']].map(([l,h]) => <Link key={l} href={h} style={{ textDecoration:'none' }}><span style={{ color:'rgba(255,255,255,0.25)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>{l}</span></Link>)}
        </div>
        <div style={{ color:'rgba(255,255,255,0.2)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>© 2026 Exploration Sites</div>
      </div>
    </div>
  )
}
