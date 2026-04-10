import Nav from '../components/Nav'
import Link from 'next/link'
import Image from 'next/image'

const team = [
  {
    name: 'Dorian Leslie',
    role: 'CEO',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/697141329c16748e7f33f614_DSC06303%20copy.webp',
    bio: 'With over 30 years of experience in the mineral exploration industry, Dorian understands that exploration data can be both technically precise and visually compelling. Today, he leads Exploration Sites, overseeing a multidisciplinary team of GIS specialists, geologists, and designers dedicated to transforming complex exploration data into clear, investor-ready visuals.',
  },
  {
    name: 'Anastasia Schoeps',
    role: 'Operations Director',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/697141458fdd19bd4f2f0b23_DSC03241%20copy.webp',
    bio: 'She combines a background in geology and GIS with a strong focus on technical accuracy and investor communication. Overseeing project delivery from concept to completion, Stasia ensures exploration data is transformed into clear, credible, and visually compelling materials. Her hands-on field experience allows her to bridge the gap between technical teams and market-facing content — helping clients communicate their results with clarity, precision, and impact.',
  },
  {
    name: 'Kai Erfle',
    role: 'Creative Director',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/69700c2de836cd7495576613_6970016c524035eadf601c57_kai.webp',
    bio: 'A skilled graphic and web designer, Kai is a graduate of the British Columbia Institute of Technology, where he cultivated his expertise in user interface and user experience design. With a keen eye for detail and a passion for creating intuitive, visually engaging digital experiences, he has been the creative force behind many of our successful and impactful websites.',
  },
  {
    name: 'Jake Galbraith',
    role: 'Project Manager',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/6972b4c4ef5f156ef8109ff8_Image%20from%20iOS%20(2)%20copy.webp',
    bio: 'As Map Lead and a Graphic Designer, he combines a strong design foundation with a deep understanding of spatial data. A graduate of the University for the Creative Arts with a bachelor\'s degree in Design, he brings a fresh, innovative approach to every project — transforming complex technical information into visually compelling maps and graphics that strike the perfect balance between precision and impact.',
  },
  {
    name: 'Gregor Smith',
    role: 'Map Technician',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/69700c7a9e3f8d36d0a7c86d_696ffdcb71f2e4f6ef682bf9_gregor.webp',
    bio: 'A geographer with a strong foundation in spatial analysis, data visualization, and cartography. Skilled in ArcGIS and QGIS, he supports the creation of precise, data-driven maps and visual materials for exploration projects. With experience in land surveying and geospatial interpretation, he brings analytical accuracy and a practical understanding of how data translates into the field.',
  },
  {
    name: 'Mark Aimon Pangan',
    role: 'Map Technician',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/697299c49192736d3eac869b_IMG_20250927_225646_195%20copy.webp',
    bio: 'GIS specialist who connects field data with design to bring technical information to life. Skilled in mapping, modeling, and data visualization, he helps transform complex exploration results into clear, impactful visuals. With experience across GIS and 3D modeling, he combines accuracy and creativity to support confident communication and stronger project storytelling.',
  },
  {
    name: 'Adrian Sarabia',
    role: 'Designer / Developer',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/697146aed4f6764af94e7fe0_IMG_1096%20copy.webp',
    bio: 'A graphic and web designer with a passion for creating clean, functional, and visually engaging designs. Skilled in both design and development, he bridges creativity with technical precision to deliver solutions that meet client goals and enhance user experience. Dedicated, detail-oriented, and always learning, he approaches every project with a focus on quality and innovation.',
  },
  {
    name: 'Marvin Del Rosario',
    role: 'Developer',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/69700c58c12d9f59632e03f9_696ffdbf1897784bae960a6d_marvin.webp',
    bio: 'A seasoned web developer with over eight years of experience leading teams and building interactive websites and applications. Combining technical expertise with creative direction, he develops high-performing sites across WordPress and custom frameworks. Known for his leadership and precision, he ensures every project is visually refined, technically sound, and delivered with excellence.',
  },
  {
    name: 'Paul Joshua Villora',
    role: 'Map Technician',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/69715d64dc0c0538338ef31d_IMG_0083%20copy.webp',
    bio: 'A geologist and GIS specialist who transforms exploration data into meaningful visuals, believing that high-quality outputs begin with high-quality data.',
  },
  {
    name: 'Piyush Lamba',
    role: 'Developer',
    photo: 'https://cdn.prod.website-files.com/69289f23036f2c7a8ac67581/6973e7f0ff5e6deae8e49e31_Resized_20250923_170240%20copy.webp',
    bio: 'A software developer with a background in computer science and embedded systems. Skilled in Python, C++, and AI automation, he brings a strong technical foundation to projects that bridge hardware and software. Known for his analytical mindset and problem-solving approach, he focuses on creating reliable, efficient solutions that enhance performance and streamline workflows.',
  },
]

const Divider = () => <div style={{ height: '1px', backgroundColor: '#CFE1E9', margin: '0 80px' }} />

export default function TeamPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1440px' }}>
      <Nav />

      {/* Title */}
      <div style={{ padding: '64px 80px 32px' }}>
        <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Team</div>
        <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '64px', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.03em', maxWidth: '820px' }}>Specialists who turn complex data into clear, compelling visuals.</div>
        <div style={{ color: '#888', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.65, marginTop: '20px', maxWidth: '540px' }}>A multidisciplinary team of GIS specialists, geologists, and designers dedicated to building investor confidence in mining.</div>
      </div>

      <Divider />

      {/* Team grid */}
      <div style={{ padding: '56px 80px' }}>
        <div style={{ display: 'grid', gap: '2px', gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {team.map(({ name, role, photo }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ aspectRatio: '3/4', backgroundColor: '#F5F3F0', overflow: 'hidden', position: 'relative', width: '100%' }}>
                <img
                  src={photo}
                  alt={name}
                  style={{ height: '100%', objectFit: 'cover', objectPosition: 'top', width: '100%' }}
                />
              </div>
              <div style={{ paddingBottom: '8px' }}>
                <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}>{name}</div>
                <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', marginTop: '3px', textTransform: 'uppercase' }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Team bios */}
      <div style={{ padding: '0 80px' }}>
        {team.map(({ name, role, photo, bio }, i) => (
          <div key={name}>
            <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', padding: '48px 0' }}>
              {/* Photo */}
              <div style={{ flexShrink: 0, width: '220px' }}>
                <div style={{ aspectRatio: '3/4', backgroundColor: '#F5F3F0', overflow: 'hidden', width: '100%' }}>
                  <img
                    src={photo}
                    alt={name}
                    style={{ height: '100%', objectFit: 'cover', objectPosition: 'top', width: '100%' }}
                  />
                </div>
                <div style={{ marginTop: '14px' }}>
                  <div style={{ color: '#1a1a1a', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600 }}>{name}</div>
                  <div style={{ color: '#9ECDE4', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', marginTop: '4px', textTransform: 'uppercase' }}>{role}</div>
                </div>
              </div>
              {/* Bio */}
              <div style={{ flex: 1, paddingTop: '4px' }}>
                <div style={{ color: '#555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', lineHeight: 1.8 }}>{bio}</div>
              </div>
            </div>
            {i < team.length - 1 && <div style={{ height: '1px', backgroundColor: '#E8E8E8' }} />}
          </div>
        ))}
      </div>

      <Divider />

      {/* CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px 80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div style={{ color: '#173559', fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.0 }}>Let&apos;s make your project impossible to ignore.</div>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#173559', border: '2px solid #173559', borderRadius: '6px', color: '#fff', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 600, marginTop: '12px', padding: '16px 48px' }}>Start a conversation</div>
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
