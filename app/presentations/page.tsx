import Nav from '../components/Nav'
import Link from 'next/link'

export default function PresentationsPage() {
  const formats = [
    { bg:'#040404', borderColor:'#C0392B', label:'Investor Deck', title:'Raise capital with a deck that investors read twice.', desc:'Structured narrative, branded visuals, embedded maps. Built around your NI 43-101 highlights.', tags:['NI 43-101','AGM-ready','Print + Digital'], tagBg:'rgba(158,205,228,0.1)', tagColor:'#9ECDE4' },
    { bg:'#F5F3F0', borderColor:'#173559', label:'Technical Report', title:'Visual clarity inside complex technical documents.', desc:'Charts, cross-sections, drill result tables, and geological figures designed to meet regulatory publication standards.', tags:['Figures','Tables','Charts'], tagBg:'#CFE1E9', tagColor:'#173559' },
    { bg:'#F5F3F0', borderColor:'#D4873F', label:'Conference Material', title:'Own the room at PDAC, AME, and beyond.', desc:'Booth banners, factsheets, one-pagers, and presentation templates designed for maximum impact at trade shows.', tags:['PDAC-ready','Factsheets','Banners'], tagBg:'#CFE1E9', tagColor:'#173559' },
  ]
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Hero */}
      <div style={{ backgroundColor:'#173559', boxSizing:'border-box', display:'flex', flexShrink:0, height:'560px', overflow:'clip', position:'relative', width:'1440px' }}>
        <div style={{ boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'20px', justifyContent:'center', maxWidth:'580px', paddingBlock:'80px', paddingInline:'80px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>03 — Tell Stories</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'64px', lineHeight:'1.05' }}>Presentations that close the room.</div>
          <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7' }}>Investor decks, technical presentations, and conference materials that make your story impossible to ignore.</div>
        </div>
        {/* Slide deck mockup */}
        <div style={{ alignItems:'flex-end', display:'flex', flexDirection:'column', gap:'8px', position:'absolute', right:'60px', top:'50px' }}>
          <div style={{ backgroundColor:'rgba(13,34,64,0.5)', border:'1px solid rgba(158,205,228,0.05)', borderRadius:'4px', height:'320px', position:'absolute', right:'-8px', top:'16px', width:'520px' }} />
          <div style={{ backgroundColor:'rgba(13,34,64,0.7)', border:'1px solid rgba(158,205,228,0.08)', borderRadius:'4px', height:'320px', position:'absolute', right:'-4px', top:'8px', width:'520px' }} />
          <div style={{ backgroundColor:'#0D2240', border:'1px solid rgba(158,205,228,0.15)', borderRadius:'4px', boxSizing:'border-box', flexShrink:0, height:'320px', overflow:'clip', position:'relative', width:'520px' }}>
            <div style={{ backgroundColor:'#9ECDE4', height:'4px', left:0, position:'absolute', right:0, top:0 }} />
            <div style={{ display:'flex', flexDirection:'column', gap:'12px', height:'100%', padding:'32px' }}>
              <div style={{ alignItems:'flex-start', display:'flex', justifyContent:'space-between' }}>
                <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'9px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Technical Overview</div>
                <div style={{ color:'rgba(255,255,255,0.3)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'9px' }}>Yukon Gold Belt · Q2 2026</div>
              </div>
              <div style={{ backgroundColor:'rgba(255,255,255,0.65)', borderRadius:'2px', flexShrink:0, height:'14px', width:'70%' }} />
              <div style={{ backgroundColor:'rgba(255,255,255,0.25)', borderRadius:'2px', flexShrink:0, height:'8px', width:'45%' }} />
              <div style={{ display:'flex', flex:1, gap:'12px', marginTop:'8px' }}>
                <div style={{ backgroundColor:'rgba(107,124,62,0.25)', borderRadius:'3px', flex:'1.4' }} />
                <div style={{ display:'flex', flex:1, flexDirection:'column', gap:'8px' }}>
                  {[0,1].map(i => <div key={i} style={{ backgroundColor:'rgba(158,205,228,0.07)', borderRadius:'3px', flex:1, padding:'10px' }}><div style={{ backgroundColor:'rgba(255,255,255,0.2)', borderRadius:'1px', height:'5px', marginBottom:'4px', width:'55%' }} /><div style={{ backgroundColor:'rgba(255,255,255,0.1)', borderRadius:'1px', height:'4px', width:'70%' }} /></div>)}
                </div>
              </div>
              <div style={{ alignItems:'center', borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', justifyContent:'space-between', paddingTop:'4px' }}>
                <div style={{ color:'rgba(158,205,228,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'8px' }}>Exploration Sites</div>
                <div style={{ color:'rgba(255,255,255,0.2)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'8px' }}>Slide 04 / 22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Formats */}
      <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>04 — Formats</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>Every stage. Every audience.</div>
        </div>
        <div style={{ display:'flex', gap:'2px' }}>
          {formats.map(({ bg, borderColor, label, title, desc, tags, tagBg, tagColor }) => (
            <div key={label} style={{ backgroundColor:bg, borderTop:`3px solid ${borderColor}`, boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'16px', padding:'40px' }}>
              <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>{label}</div>
              <div style={{ color:bg==='#040404'?'#FFFFFF':'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'26px', lineHeight:'1.3' }}>{title}</div>
              <div style={{ color:bg==='#040404'?'rgba(255,255,255,0.5)':'#666666', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px', lineHeight:'1.7' }}>{desc}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginTop:'auto' }}>
                {tags.map(t => <span key={t} style={{ backgroundColor:tagBg, borderRadius:'12px', color:tagColor, fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', padding:'3px 10px' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#040404', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Build Your Deck</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'1.1' }}>Your next presentation<br/>should open doors.</div>
        </div>
        <div style={{ alignItems:'flex-start', display:'flex', flexDirection:'column', gap:'16px' }}>
          <Link href="/contact" style={{ textDecoration:'none' }}><div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}><span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Start a Presentation</span></div></Link>
          <div style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>Typical turnaround: 5–10 business days</div>
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
