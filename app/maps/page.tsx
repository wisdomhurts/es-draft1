import Nav from '../components/Nav'
import Link from 'next/link'

const mapTypes = [
  { color:'#173559', label:'Locators', desc:'Property context maps showing site location relative to infrastructure, roads, and regional geology.' },
  { color:'#9ECDE4', label:'Sections', desc:'Cross-sectional diagrams revealing subsurface geology, mineralization zones, and drill intercepts.' },
  { color:'#6B7C3E', label:'Geological', desc:'Detailed surface geology maps with formation boundaries, structural features, and lithology legend.' },
  { color:'#7A5C8A', label:'Geophysical', desc:'Magnetic, gravity, and EM survey visualizations overlaid with interpreted structural trends.' },
  { color:'#9ECDE4', label:'Area Play', bg:'#173559', desc:'Regional-scale maps communicating district potential and exploration opportunity to institutional investors.' },
  { color:'#D4873F', label:'Conceptual', bg:'#173559', desc:'Interpretive deposit models and exploration target diagrams that bridge geology and investor narrative.' },
  { color:'#9ECDE4', label:'3D Maps', bg:'#040404', desc:'Isometric and perspective renders that convey topography, mineralization envelopes, and site infrastructure.' },
  { color:'#C0392B', label:'Geochemical', bg:'#040404', desc:'Soil, rock, and stream sediment anomaly maps using graduated symbology and heat-map overlays.' },
]

export default function MapsPage() {
  return (
    <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', WebkitFontSmoothing:'antialiased' }}>
      <Nav />
      {/* Hero */}
      <div style={{ backgroundColor:'#0D2240', boxSizing:'border-box', display:'flex', flexDirection:'column', flexShrink:0, height:'560px', justifyContent:'flex-end', overflow:'clip', paddingBlock:'80px', paddingInline:'80px', position:'relative', width:'1440px' }}>
        {/* Grid lines */}
        <div style={{ bottom:0, left:0, opacity:0.08, position:'absolute', right:0, top:0 }}>
          {[20,40,60,80].map(p => <div key={`h${p}`} style={{ backgroundColor:'#9ECDE4', height:'1px', left:0, position:'absolute', right:0, top:`${p}%` }} />)}
          {[20,40,60,80].map(p => <div key={`v${p}`} style={{ backgroundColor:'#9ECDE4', bottom:0, left:`${p}%`, position:'absolute', top:0, width:'1px' }} />)}
        </div>
        {/* Legend */}
        <div style={{ backgroundColor:'rgba(255,255,255,0.07)', border:'1px solid rgba(158,205,228,0.2)', borderRadius:'4px', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'10px', padding:'20px 24px', position:'absolute', right:'80px', top:'48px' }}>
          <div style={{ color:'rgba(158,205,228,0.7)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'10px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase' }}>Legend</div>
          {[['#C0392B','Target Zone'],['#9ECDE4','Drill Traces'],['#6B7C3E','Geology Bound.'],['#D4873F','Anomaly']].map(([c,l]) => (
            <div key={l} style={{ alignItems:'center', display:'flex', gap:'10px' }}>
              <div style={{ backgroundColor:c, borderRadius:'1px', flexShrink:0, height:'6px', width:'20px' }} />
              <div style={{ color:'rgba(255,255,255,0.5)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px' }}>{l}</div>
            </div>
          ))}
        </div>
        {/* Gradient */}
        <div style={{ background:'linear-gradient(to top,rgba(4,4,4,0.75),transparent)', bottom:0, left:0, position:'absolute', right:0, top:0 }} />
        <div style={{ display:'flex', flexDirection:'column', gap:'16px', position:'relative' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>01 — Cartography & Spatial Visualization</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'72px', lineHeight:'1.05' }}>Maps that make<br/>your data undeniable.</div>
          <div style={{ color:'rgba(255,255,255,0.6)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'16px', lineHeight:'1.7', maxWidth:'540px' }}>From locator maps to publication-ready geological sections — we turn raw GIS data into investor-grade visuals.</div>
        </div>
      </div>
      {/* Map Types */}
      <div style={{ backgroundColor:'#FFFFFF', boxSizing:'border-box', display:'flex', flexDirection:'column', gap:'48px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ alignItems:'flex-end', display:'flex', justifyContent:'space-between' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>02 — Map Types</div>
            <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'42px', lineHeight:'52px' }}>Eight formats. One standard.</div>
          </div>
          <div style={{ color:'#888888', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7', maxWidth:'360px', textAlign:'right' }}>Every map type is built to publication standard — press-ready, investor-grade, and geologically accurate.</div>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'2px' }}>
          {mapTypes.map(({ color, label, desc, bg }) => (
            <div key={label} style={{ backgroundColor:bg||'#F5F3F0', borderLeft:`3px solid ${color}`, boxSizing:'border-box', display:'flex', flex:'1 1 320px', flexDirection:'column', gap:'16px', minWidth:'320px', paddingBlock:'32px', paddingInline:'32px' }}>
              <div style={{ color:bg?'#9ECDE4':'#173559', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'12px', fontWeight:600, letterSpacing:'1px', textTransform:'uppercase' }}>{label}</div>
              <div style={{ color:bg?'rgba(255,255,255,0.5)':'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Deliverable standard */}
      <div style={{ alignItems:'center', backgroundColor:'#F5F3F0', boxSizing:'border-box', display:'flex', gap:'64px', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ backgroundColor:'#0D2240', borderRadius:'4px', boxSizing:'border-box', flex:'1.2', height:'420px', position:'relative', overflow:'clip' }}>
          <div style={{ alignItems:'center', backgroundColor:'#173559', bottom:0, boxSizing:'border-box', display:'flex', justifyContent:'space-between', left:0, padding:'10px 20px', position:'absolute', right:0 }}>
            <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'9px', fontWeight:600, letterSpacing:'1px' }}>Exploration Sites</div>
            <div style={{ color:'rgba(255,255,255,0.4)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'9px' }}>ES_Client_Property_GeologicalMap_v02.pdf</div>
          </div>
        </div>
        <div style={{ boxSizing:'border-box', display:'flex', flex:1, flexDirection:'column', gap:'28px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>03 — Deliverable Standard</div>
          <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'40px', lineHeight:'1.2' }}>Publication-ready.<br/>Every time.</div>
          <div style={{ borderLeft:'3px solid #173559', paddingLeft:'20px' }}>
            <div style={{ color:'#173559', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'20px', fontStyle:'italic', lineHeight:'1.6' }}>&ldquo;Every map we produce is built as if it&apos;s going into a technical report, an investor deck, and a press release — simultaneously.&rdquo;</div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
            {['Delivered as high-resolution PDF and PNG at print scale','Source files retained for future revision cycles','Naming conventions: ES_Client_Property_Type_v01','Branded footer bar and legend on every map'].map(item => (
              <div key={item} style={{ alignItems:'flex-start', display:'flex', gap:'14px' }}>
                <div style={{ backgroundColor:'#9ECDE4', borderRadius:'50%', flexShrink:0, height:'6px', marginTop:'6px', width:'6px' }} />
                <div style={{ color:'#555555', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', lineHeight:'1.7' }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA */}
      <div style={{ alignItems:'center', backgroundColor:'#040404', boxSizing:'border-box', display:'flex', justifyContent:'space-between', paddingBlock:'80px', paddingInline:'80px', width:'1440px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div style={{ color:'#9ECDE4', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'11px', fontWeight:600, letterSpacing:'2px', textTransform:'uppercase' }}>Start a Map Project</div>
          <div style={{ color:'#FFFFFF', fontFamily:'"Cormorant Garamond",system-ui,sans-serif', fontSize:'48px', lineHeight:'1.1' }}>Your data is ready.<br/>Let&apos;s make it visible.</div>
        </div>
        <div style={{ alignItems:'flex-start', display:'flex', flexDirection:'column', gap:'16px' }}>
          <Link href="/contact" style={{ textDecoration:'none' }}>
            <div style={{ backgroundColor:'#9ECDE4', borderRadius:'2px', padding:'14px 36px' }}>
              <span style={{ color:'#040404', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'14px', fontWeight:600 }}>Request a Map Quote</span>
            </div>
          </Link>
          <div style={{ color:'rgba(255,255,255,0.35)', fontFamily:'"DM Sans",system-ui,sans-serif', fontSize:'13px' }}>Turnaround: 3–7 business days per map</div>
        </div>
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
