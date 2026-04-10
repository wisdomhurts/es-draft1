import Nav from '../components/Nav'
import Link from 'next/link'

const clients = [
  { name:'Sitka Gold', color:'#173559' },
  { name:'Northern Copper', color:'#173559' },
  { name:'Arctic Mining', color:'#173559' },
  { name:'Pacific Gold', color:'#173559' },
  { name:'Yukon Resources', color:'#173559' },
  { name:'Highland Zone', color:'#6B7C3E' },
  { name:'Basin Metals', color:'#7A5C8A' },
  { name:'Summit Drill', color:'#C0392B' },
  { name:'Cascade Silver', color:'#D4873F' },
  { name:'Ridgeline Ex.', color:'#173559' },
  { name:'Frontier Zinc', color:'#173559' },
  { name:'Apex Lithium', color:'#173559' },
  { name:'+ 90 More', color:'#9ECDE4', featured:true },
  { name:'Cedar Creek', color:'#173559' },
  { name:'Blackrock Ex.', color:'#173559' },
]

const regions = [
  ['Canada', 'BC · AB · YT · NWT · ON · QC · NL'],
  ['United States', 'AK · NV · AZ · MT · ID · CO · NM'],
  ['Latin America', 'Mexico · Peru · Chile · Colombia · Brazil'],
  ['Africa', 'Mali · Ghana · Tanzania · DRC · Zambia'],
  ['Asia Pacific', 'Australia · PNG · Philippines · Mongolia'],
]

export default function ClientsPage() {
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Header */}
      <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'24px', paddingBottom:'80px', paddingLeft:'80px', paddingRight:'80px', paddingTop:'100px', width:'1440px' }}>
        <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>05 — Our Clients</div>
        <div style={{ alignItems:'flex-end', display:'flex', gap:'80px', justifyContent:'space-between' }}>
          <div style={{ color:'#173559', flex:1, fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'68px', lineHeight:'1.0' }}>Trusted by explorers across five continents.</div>
          <div style={{ color:'#888888', flexShrink:0, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.8', maxWidth:'400px' }}>From early-stage juniors to established producers, we&apos;ve helped over 100 companies present their story with precision and credibility.</div>
        </div>
      </div>
      {/* Stats */}
      <div style={{ backgroundColor:'#173559', boxSizing:'border-box', display:'flex', paddingBlock:'48px', paddingInline:'80px', width:'1440px' }}>
        {[['500+','Projects Completed'],['100+','Websites Launched'],['$50B','Client Market Cap'],['30+','Years Experience']].map(([v,l], i, arr) => (
          <div key={l} style={{ borderRight:i<arr.length-1?'1px solid rgba(255,255,255,0.12)':undefined, display:'flex', flex:1, flexDirection:'column', gap:'8px', paddingLeft:i>0?'48px':undefined, paddingRight:i<arr.length-1?'48px':undefined }}>
            <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'52px', lineHeight:'64px' }}>{v}</div>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>{l}</div>
          </div>
        ))}
      </div>
      {/* Logo grid */}
      <div style={{ backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>A Selection of Clients</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'36px', lineHeight:'44px' }}>Companies we&apos;ve helped build credibility.</div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
          {[clients.slice(0,5), clients.slice(5,10), clients.slice(10,15)].map((row, ri) => (
            <div key={ri} style={{ display:'flex', gap:'2px' }}>
              {row.map(({ name, color, featured }) => (
                <div key={name} style={{ alignItems:'center', backgroundColor:featured?'#173559':'#FFFFFF', border:`1px solid ${featured?'#173559':'#E8E8E8'}`, boxSizing:'border-box', display:'flex', flex:1, justifyContent:'center', paddingBlock:'32px', paddingInline:'32px' }}>
                  <div style={{ alignItems:'center', display:'flex', flexDirection:'column', gap:'6px' }}>
                    <div style={{ backgroundColor:color, borderRadius:'1px', flexShrink:0, height:'3px', width:'32px' }} />
                    <div style={{ color:featured?'#9ECDE4':'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, letterSpacing:'0.5px' }}>{name}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Geographic coverage */}
      <div style={{ alignItems:'flex-start', backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', gap:'80px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'28px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Geographic Coverage</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'40px', lineHeight:'1.2' }}>Wherever your project sits, we know the terrain.</div>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {regions.map(([region, areas], i) => (
              <div key={region} style={{ alignItems:'center', borderBottom:i<regions.length-1?'1px solid #E8E8E8':undefined, display:'flex', justifyContent:'space-between', paddingBlock:'16px' }}>
                <div style={{ color:'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>{region}</div>
                <div style={{ color:'#888888', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>{areas}</div>
              </div>
            ))}
          </div>
        </div>
        {/* World map mockup */}
        <div style={{ backgroundColor:'#0D2240', borderRadius:'4px', flex:'1.2', height:'400px', overflow:'clip', position:'relative' }}>
          <div style={{ bottom:0, left:0, opacity:0.1, position:'absolute', right:0, top:0 }}>
            {[25,50,75].map(p => <div key={`h${p}`} style={{ backgroundColor:'#9ECDE4', height:'1px', left:0, position:'absolute', right:0, top:`${p}%` }} />)}
            {[20,40,60,80].map(p => <div key={`v${p}`} style={{ backgroundColor:'#9ECDE4', bottom:0, left:`${p}%`, position:'absolute', top:0, width:'1px' }} />)}
          </div>
          {[['10%','18%','#9ECDE4'],['12%','28%','#9ECDE4'],['17%','50%','#D4873F'],['19%','58%','#D4873F'],['50%','42%','#C0392B'],['53%','55%','#C0392B'],['82%','62%','#6B7C3E']].map(([l,t,c],i) => (
            <div key={i} style={{ backgroundColor:c, border:'1.5px solid rgba(255,255,255,0.8)', borderRadius:'50%', height:'7px', left:l, position:'absolute', top:t, width:'7px' }} />
          ))}
          <div style={{ backgroundColor:'rgba(255,255,255,0.06)', border:'1px solid rgba(158,205,228,0.15)', borderRadius:'3px', bottom:'20px', display:'flex', flexDirection:'column', gap:'6px', padding:'12px 16px', position:'absolute', right:'20px' }}>
            {[['#9ECDE4','Americas'],['#C0392B','Africa'],['#6B7C3E','Asia Pacific']].map(([c,l]) => (
              <div key={l} style={{ alignItems:'center', display:'flex', gap:'8px' }}>
                <div style={{ backgroundColor:c, borderRadius:'50%', flexShrink:0, height:'8px', width:'8px' }} />
                <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'9px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#173559', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Join Our Clients</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'1.1' }}>Your story deserves<br/>to be told well.</div>
        </div>
        <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Start a Project</span></div></Link>
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
