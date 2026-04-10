'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenu } from '@base-ui/react/navigation-menu'

const mapItems = [
  { label: 'Locators', desc: 'Site location relative to infrastructure & geology', href: '/maps' },
  { label: 'Geological', desc: 'Surface geology with formation boundaries & lithology', href: '/maps' },
  { label: 'Sections', desc: 'Cross-sections with mineralization & drill intercepts', href: '/maps' },
  { label: 'Geophysical', desc: 'Magnetic, gravity & EM survey visualizations', href: '/maps' },
  { label: 'Area Play', desc: 'Regional-scale district potential maps', href: '/maps' },
  { label: 'Geochemical', desc: 'Soil, rock & sediment anomaly heat maps', href: '/maps' },
  { label: '3D Maps', desc: 'Isometric renders of topography & mineralization', href: '/maps' },
  { label: 'Conceptual', desc: 'Interpretive deposit models for investor narrative', href: '/maps' },
]

const serviceItems = [
  { label: 'Websites', desc: 'Investor-grade web presence', href: '/websites' },
  { label: 'Presentations', desc: 'Decks, reports & conference materials', href: '/presentations' },
  { label: 'Movies', desc: '3D flyovers, geological animations & site films', href: '/movies' },
  { label: 'Branding', desc: 'Logo, identity & visual systems', href: '/pricing' },
  { label: 'CRM', desc: 'Investor relations platform', href: '/pricing' },
  { label: 'Socials', desc: 'Social media content & management', href: '/pricing' },
]

export default function Nav() {
  const path = usePathname()
  const isDark = path === '/movies'
  const bg = isDark ? '#040404' : '#FFFFFF'
  const borderTop = isDark ? '#9ECDE4' : '#173559'
  const borderBottom = isDark ? 'rgba(255,255,255,0.08)' : '#E8E8E8'
  const logoColor = isDark ? '#FFFFFF' : '#173559'
  const textColor = isDark ? 'rgba(255,255,255,0.7)' : '#444444'

  const servicePages = ['/websites', '/presentations', '/movies', '/pricing']
  const mapsActive = path === '/maps'
  const servicesActive = servicePages.includes(path)

  const triggerStyle = (active: boolean): React.CSSProperties => ({
    alignItems: 'center',
    background: active ? (isDark ? 'rgba(255,255,255,0.06)' : '#F5F3F0') : 'transparent',
    border: 'none',
    borderRadius: '6px',
    color: active ? (isDark ? '#FFFFFF' : '#173559') : textColor,
    cursor: 'pointer',
    display: 'flex',
    fontFamily: '"DM Sans", system-ui, sans-serif',
    fontSize: '14px',
    fontWeight: active ? 600 : 400,
    gap: '5px',
    lineHeight: '18px',
    padding: '8px 14px',
  })

  const linkStyle = (active: boolean): React.CSSProperties => ({
    alignItems: 'center',
    background: active ? (isDark ? 'rgba(255,255,255,0.06)' : '#F5F3F0') : 'transparent',
    borderRadius: '6px',
    color: active ? (isDark ? '#FFFFFF' : '#173559') : textColor,
    display: 'flex',
    fontFamily: '"DM Sans", system-ui, sans-serif',
    fontSize: '14px',
    fontWeight: active ? 600 : 400,
    lineHeight: '18px',
    padding: '8px 14px',
    textDecoration: 'none',
  })

  return (
    <div style={{ alignItems: 'center', backgroundColor: bg, borderBottom: `1px solid ${borderBottom}`, borderTop: `4px solid ${borderTop}`, boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '68px', justifyContent: 'space-between', paddingInline: '80px', width: '1440px', position: 'relative', zIndex: 50 }}>
      {/* Logo */}
      <Link href="/" style={{ alignItems: 'center', display: 'flex', gap: '12px', textDecoration: 'none' }}>
        <svg width="44" height="44" viewBox="0 0 124.63 124.63" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <polygon fill={logoColor} points="41.31 32 22.51 13.38 13.38 22.52 32.01 41.31 41.31 32"/>
              <polygon fill={logoColor} points="41.31 92.64 40.51 93.43 37.37 96.55 22.52 111.25 13.38 102.12 28.09 87.27 31.22 84.13 32.01 83.33 41.31 92.64"/>
              <polygon fill={logoColor} points="83.33 92.63 102.13 111.26 111.26 102.12 92.64 83.32 83.33 92.63"/>
              <polygon fill={logoColor} points="111.26 22.51 92.58 41.24 83.39 32.07 83.33 32.01 102.12 13.38 111.26 22.51"/>
            </g>
            <path fill={logoColor} d="M71.93,0v41.61l-30.27,30.32H0v-19.22h43.1c5.3,0,9.61-4.31,9.61-9.61V0h19.22Z"/>
            <path fill={logoColor} d="M124.63,52.71v19.22h-43.1c-5.3,0-9.61,4.31-9.61,9.61v43.1h-19.22v-41.74l30.16-30.19h41.77Z"/>
          </g>
        </svg>
        <div style={{ color: logoColor, fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, letterSpacing: '-0.3px' }}>Exploration Sites</div>
      </Link>

      {/* Nav */}
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ alignItems: 'center', display: 'flex', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>

          {/* Maps */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger style={triggerStyle(mapsActive)}>
              Maps
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ flexShrink: 0 }}>
                <path d="M1 1L5 5L9 1" stroke={mapsActive ? (isDark ? '#9ECDE4' : '#173559') : '#9ECDE4'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div style={{ display: 'grid', gap: '2px', gridTemplateColumns: '1fr 1fr', padding: '8px', width: '480px' }}>
                {mapItems.map(({ label, desc, href }) => (
                  <NavigationMenu.Link key={label} render={<Link href={href} />} closeOnClick style={{ borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '2px', padding: '12px 14px', textDecoration: 'none' }}
                    className="nav-dropdown-item">
                    <span style={{ color: '#173559', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 600 }}>{label}</span>
                    <span style={{ color: '#888888', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '12px', lineHeight: '1.5' }}>{desc}</span>
                  </NavigationMenu.Link>
                ))}
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Services */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger style={triggerStyle(servicesActive)}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ flexShrink: 0 }}>
                <path d="M1 1L5 5L9 1" stroke={servicesActive ? (isDark ? '#9ECDE4' : '#173559') : '#9ECDE4'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '8px', width: '300px' }}>
                {serviceItems.map(({ label, desc, href }) => (
                  <NavigationMenu.Link key={label} render={<Link href={href} />} closeOnClick style={{ borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '2px', padding: '12px 14px', textDecoration: 'none' }}
                    className="nav-dropdown-item">
                    <span style={{ color: '#173559', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 600 }}>{label}</span>
                    <span style={{ color: '#888888', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '12px', lineHeight: '1.5' }}>{desc}</span>
                  </NavigationMenu.Link>
                ))}
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Static links */}
          {[['Clients', '/clients'], ['Pricing', '/pricing'], ['Team', '/team'], ['Contact', '/contact']].map(([label, href]) => (
            <NavigationMenu.Item key={label}>
              <NavigationMenu.Link render={<Link href={href} />} style={linkStyle(path === href)}>
                {label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>

        <NavigationMenu.Portal>
          <NavigationMenu.Positioner sideOffset={8} style={{ zIndex: 100 }}>
            <NavigationMenu.Popup style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
              <NavigationMenu.Viewport />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu.Root>

      {/* Inquire CTA */}
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <div style={{ backgroundColor: '#173559', border: '1.5px solid #9ECDE4', borderRadius: '6px', boxShadow: 'rgba(158,205,228,0.15) 0px 0px 0px 3px, rgba(158,205,228,0.25) 0px 0px 12px', minWidth: '108px', paddingBlock: '10px', paddingInline: '24px', textAlign: 'center' }}>
          <div style={{ color: '#FFFFFF', fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 600 }}>Inquire</div>
        </div>
      </Link>

      <style>{`
        .nav-dropdown-item:hover { background-color: #F5F3F0 !important; }
      `}</style>
    </div>
  )
}
