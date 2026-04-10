import Nav from '../components/Nav'
import Link from 'next/link'

const values = [
  { label:'Collaborate', desc:'We embed with your team — geologists, IR, and executives — to understand the story before we touch a single map or slide.' },
  { label:'Visualize', desc:'Raw data becomes investor-grade visuals. Every output is built to NI 43-101 and TSX publication standards.' },
  { label:'Deliver', desc:'We hit deadlines because we know AGMs, financings, and press releases don\'t wait. Fast turnarounds without cutting corners.' },
]

export default function TeamPage() {
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Header */}
      <div style={{ backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'24px', paddingBottom:'80px', paddingLeft:'80px', paddingRight:'80px', paddingTop:'100px', width:'1440px' }}>
        <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>06 — Our Team</div>
        <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'68px', lineHeight:'1.0', maxWidth:'800px' }}>Specialists who speak both geology and design.</div>
      </div>
      {/* Founder */}
      <div style={{ alignItems:'flex-start', backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', gap:'80px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        {/* Photo placeholder */}
        <div style={{ backgroundColor:'#0D2240', borderRadius:'4px', flexShrink:0, height:'480px', overflow:'clip', position:'relative', width:'400px' }}>
          <div style={{ bottom:0, left:0, opacity:0.08, position:'absolute', right:0, top:0 }}>
            {[25,50,75].map(p => <div key={`h${p}`} style={{ backgroundColor:'#9ECDE4', height:'1px', left:0, position:'absolute', right:0, top:`${p}%` }} />)}
            {[33,66].map(p => <div key={`v${p}`} style={{ backgroundColor:'#9ECDE4', bottom:0, left:`${p}%`, position:'absolute', top:0, width:'1px' }} />)}
          </div>
          <div style={{ background:'linear-gradient(to top,rgba(4,4,4,0.7),transparent)', bottom:0, left:0, position:'absolute', right:0, top:'50%' }} />
          <div style={{ bottom:'28px', left:'28px', position:'absolute', right:'28px' }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Founder & Principal</div>
            <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'28px', marginTop:'4px' }}>Dorian Greyson</div>
          </div>
        </div>
        <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'32px', paddingTop:'8px' }}>
          <div style={{ borderLeft:'3px solid #9ECDE4', paddingLeft:'24px' }}>
            <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'26px', fontStyle:'italic', lineHeight:'1.6' }}>&ldquo;I started Exploration Sites because I kept seeing technically excellent projects fail to raise capital — not for lack of geology, but for lack of story. We fix that.&rdquo;</div>
          </div>
          <div style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'15px', lineHeight:'1.8' }}>
            With over 30 years in exploration-stage communications, Dorian has worked alongside geologists, investment bankers, and IR teams across five continents — producing the maps, decks, websites, and films that have helped companies move from drill results to funded programs.
          </div>
          <div style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'15px', lineHeight:'1.8' }}>
            Before founding Exploration Sites, Dorian led the communications practice at a Vancouver-based resource advisory firm, where his team produced materials for over 200 TSX-V and NYSE-listed issuers. He holds a background in geography and has worked on projects in Canada, the Americas, Africa, and the Asia Pacific.
          </div>
          {/* Stats */}
          <div style={{ display:'flex', gap:'0px', marginTop:'8px' }}>
            {[['30+','Years in Exploration'],['500+','Projects Delivered'],['5','Continents Covered']].map(([val, label], i, arr) => (
              <div key={label} style={{ borderRight:i<arr.length-1?'1px solid #E8E8E8':undefined, display:'flex', flex:1, flexDirection:'column', gap:'6px', paddingLeft:i>0?'32px':undefined, paddingRight:i<arr.length-1?'32px':undefined }}>
                <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'44px', lineHeight:'1.1' }}>{val}</div>
                <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Values */}
      <div style={{ backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>How We Work</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>Three principles. Every project.</div>
        </div>
        <div style={{ display:'flex', gap:'2px' }}>
          {values.map(({ label, desc }, i) => (
            <div key={label} style={{ backgroundColor:'#FFFFFF', borderTop:'3px solid #173559', boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'16px', padding:'40px' }}>
              <div style={{ alignItems:'center', backgroundColor:'#173559', borderRadius:'50%', color:'#9ECDE4', display:'flex', flexShrink:0, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:700, height:'32px', justifyContent:'center', width:'32px' }}>0{i+1}</div>
              <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'28px', lineHeight:'1.2' }}>{label}</div>
              <div style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Studio */}
      <div style={{ alignItems:'center', backgroundColor:'#173559', boxSizing:'border-box', display:'flex', gap:'80px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'20px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>The Studio</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'40px', lineHeight:'1.2' }}>Vancouver-based. Industry-focused. Globally deployed.</div>
          <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'15px', lineHeight:'1.8' }}>Exploration Sites operates as a boutique studio — small enough to give every project personal attention, experienced enough to handle any stage of the capital markets cycle.</div>
          <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'15px', lineHeight:'1.8' }}>We work with a trusted network of geoscientists, cartographers, 3D artists, and web developers — assembled around each project based on what it actually needs.</div>
        </div>
        <div style={{ backgroundColor:'rgba(255,255,255,0.05)', border:'1px solid rgba(158,205,228,0.15)', borderRadius:'4px', display:'flex', flex:'0 0 auto', flexDirection:'column', gap:'0px', overflow:'hidden', width:'360px' }}>
          {[['Location','Vancouver, BC'],['Founded','1994'],['Focus','Exploration & Mining'],['Languages','English · French · Spanish'],['Inquiries','info@explorationsites.com']].map(([k,v], i, arr) => (
            <div key={k} style={{ borderBottom:i<arr.length-1?'1px solid rgba(255,255,255,0.08)':undefined, display:'flex', justifyContent:'space-between', paddingBlock:'16px', paddingInline:'24px' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px' }}>{k}</div>
              <div style={{ color:'#FFFFFF', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, textAlign:'right' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#040404', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Work With Us</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'1.1' }}>Let&apos;s make your<br/>project impossible to ignore.</div>
        </div>
        <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Start a Conversation</span></div></Link>
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
