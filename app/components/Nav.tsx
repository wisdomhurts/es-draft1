'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenu } from '@base-ui/react/navigation-menu'
import { useState } from 'react'

type MegaKey = 'maps' | 'websites' | 'presentations' | 'design' | 'crm' | 'socials'

const leftItems: { key: MegaKey; label: string; desc: string }[] = [
  { key: 'maps',          label: 'Maps',          desc: 'Spatial & geological visualization' },
  { key: 'websites',      label: 'Websites',      desc: 'Investor-grade digital presence' },
  { key: 'presentations', label: 'Presentations', desc: 'Decks, reports & conference materials' },
  { key: 'design',        label: 'Design',        desc: 'Logo, identity & visual systems' },
  { key: 'crm',           label: 'CRM',           desc: 'Investor relations platform' },
  { key: 'socials',       label: 'Socials',       desc: 'Social media content & strategy' },
]

const mapsItems = [
  { label: 'Locators',    desc: 'Site location relative to infrastructure & regional geology' },
  { label: 'Area Play',   desc: 'Regional district potential for institutional investors' },
  { label: 'Property',    desc: 'Detailed property extent, claims & tenure maps' },
  { label: 'Geological',  desc: 'Surface geology with formation boundaries & lithology' },
  { label: 'Geophysical', desc: 'Magnetic, gravity & EM survey visualizations' },
  { label: 'Geochemical', desc: 'Soil, rock & sediment anomaly heat maps' },
  { label: 'Sections',    desc: 'Cross-sections showing mineralization & drill intercepts' },
  { label: '3D',          desc: 'Isometric topography & mineralization envelope renders' },
]

const websiteSections = [
  { heading: 'Webflow', desc: 'Custom-designed, visually-editable sites. Fast, modern, and built for investor relations teams who want to own their updates.' },
  { heading: 'WordPress', desc: 'Flexible CMS-driven builds with full content control. Ideal for news-heavy IR portals and companies with active disclosure cycles.' },
]

const websiteProcess = [
  ['Discovery',  'Goals, brand assets, content review'],
  ['Design',     'Full-page layouts for feedback'],
  ['Build',      'Development with two revision rounds'],
  ['Launch',     'Go live with training & ongoing support'],
]

const presentationItems = [
  { label: 'Investor Decks',        desc: 'NI 43-101-aligned narrative decks built for financings and AGMs', href: '/presentations' },
  { label: 'Technical Reports',     desc: 'Figures, charts and tables designed to meet regulatory publication standards', href: '/presentations' },
  { label: 'Conference Materials',  desc: 'Booth banners, factsheets and one-pagers for PDAC, AME and beyond', href: '/presentations' },
]

const designItems = [
  { label: 'Logo & Brand Creation', desc: 'Visual identity systems built for resource companies', href: '/pricing' },
  { label: 'Visual Identity',       desc: 'Color, typography and brand guideline documents', href: '/pricing' },
  { label: 'Event Materials',       desc: 'Booth graphics, signage and trade show collateral', href: '/pricing' },
  { label: 'Individual Graphics',   desc: 'One-off illustrations, icons and infographics', href: '/pricing' },
]

const crmItems = [
  { label: 'Investor Relations Platform', desc: 'Centralized contact management for your shareholder base', href: '/pricing' },
  { label: 'Campaign Tools',              desc: 'Email outreach, newsletters and investor updates', href: '/pricing' },
  { label: 'Analytics',                   desc: 'Track engagement, opens and investor activity over time', href: '/pricing' },
]

const socialItems = [
  { label: 'Content Creation',        desc: 'Platform-native posts, graphics and video clips', href: '/pricing' },
  { label: 'Social Media Management', desc: 'Scheduling, publishing and community management', href: '/pricing' },
  { label: 'Platform Strategy',       desc: 'Channel mix, audience targeting and growth plans', href: '/pricing' },
]

const rightItems: Record<string, { label: string; desc: string; href: string }[]> = {
  presentations: presentationItems,
  design:        designItems,
  crm:           crmItems,
  socials:       socialItems,
}

function MegaMenuContent() {
  const [active, setActive] = useState<MegaKey>('maps')

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      {/* Left sidebar */}
      <div style={{ backgroundColor: '#F5F3F0', display: 'flex', flexDirection: 'column', gap: '3px', padding: '10px', width: '196px' }}>
        {leftItems.map(({ key, label, desc }) => (
          <div
            key={key}
            onMouseEnter={() => setActive(key)}
            style={{
              backgroundColor: active === key ? '#FFFFFF' : 'transparent',
              borderRadius: '8px',
              boxShadow: active === key ? '0 1px 4px rgba(0,0,0,0.07)' : 'none',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              padding: '11px 14px',
              transition: 'background 0.1s',
            }}
          >
            <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 700, lineHeight: '1.3' }}>{label}</div>
            <div style={{ color: '#999999', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px', lineHeight: '1.4' }}>{desc}</div>
          </div>
        ))}
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, padding: '24px 28px' }}>

        {/* Maps */}
        {active === 'maps' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{ display: 'grid', gap: '2px', gridTemplateColumns: '1fr 1fr' }}>
              {mapsItems.map(({ label, desc }) => (
                <Link key={label} href="/maps" className="nav-mega-link" style={{ borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '2px', padding: '10px 12px', textDecoration: 'none' }}>
                  <span style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', fontWeight: 600 }}>{label}</span>
                  <span style={{ color: '#999999', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '11px', lineHeight: '1.45' }}>{desc}</span>
                </Link>
              ))}
            </div>
            <Link href="/maps" style={{ borderTop: '1px solid #EEEEEE', color: '#9ECDE4', display: 'block', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px', fontWeight: 600, marginTop: '10px', paddingTop: '12px', textDecoration: 'none' }}>
              View all map types →
            </Link>
          </div>
        )}

        {/* Websites */}
        {active === 'websites' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {websiteSections.map(({ heading, desc }) => (
              <Link key={heading} href="/websites" className="nav-mega-link" style={{ borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px 12px', textDecoration: 'none' }}>
                <span style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '15px', fontWeight: 700 }}>{heading}</span>
                <span style={{ color: '#555555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', lineHeight: '1.6' }}>{desc}</span>
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #EEEEEE', paddingTop: '16px' }}>
              <div style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', fontWeight: 700, marginBottom: '10px' }}>Our Process</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {websiteProcess.map(([step, desc], i) => (
                  <div key={step} style={{ alignItems: 'baseline', display: 'flex', gap: '10px' }}>
                    <div style={{ color: '#CFE1E9', flexShrink: 0, fontFamily: '"Cormorant Garamond",system-ui,sans-serif', fontSize: '15px', fontWeight: 500, width: '22px' }}>0{i + 1}</div>
                    <div style={{ fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '12px' }}>
                      <span style={{ color: '#173559', fontWeight: 600 }}>{step}</span>
                      <span style={{ color: '#999999' }}> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Generic list panels */}
        {['presentations', 'design', 'crm', 'socials'].includes(active) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {rightItems[active].map(({ label, desc, href }) => (
              <Link key={label} href={href} className="nav-mega-link" style={{ borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '3px', padding: '11px 14px', textDecoration: 'none' }}>
                <span style={{ color: '#173559', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '14px', fontWeight: 700 }}>{label}</span>
                <span style={{ color: '#555555', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '13px', lineHeight: '1.55' }}>{desc}</span>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default function Nav() {
  const path = usePathname()
  const isDark = path === '/movies'
  const bg = isDark ? '#040404' : '#FFFFFF'
  const borderTop = isDark ? '#9ECDE4' : '#173559'
  const borderBottom = isDark ? 'rgba(255,255,255,0.08)' : '#E8E8E8'
  const logoColor = isDark ? '#FFFFFF' : '#173559'
  const textColor = isDark ? 'rgba(255,255,255,0.7)' : '#444444'

  const servicePages = ['/maps', '/websites', '/presentations', '/movies', '/pricing']
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
    <div style={{ alignItems: 'center', backgroundColor: bg, borderBottom: `1px solid ${borderBottom}`, borderTop: `4px solid ${borderTop}`, boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '68px', justifyContent: 'space-between', paddingInline: '80px', position: 'relative', width: '100%', maxWidth: '1440px', zIndex: 50 }}>

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

      {/* Navigation */}
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ alignItems: 'center', display: 'flex', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>

          {/* Services mega menu */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger style={triggerStyle(servicesActive)}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ flexShrink: 0 }}>
                <path d="M1 1L5 5L9 1" stroke="#9ECDE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <MegaMenuContent />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Static links */}
          {([['Clients', '/clients'], ['Pricing', '/pricing'], ['Team', '/team'], ['Contact', '/contact']] as const).map(([label, href]) => (
            <NavigationMenu.Item key={label}>
              <NavigationMenu.Link render={<Link href={href} />} style={linkStyle(path === href)}>
                {label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>

        <NavigationMenu.Portal>
          <NavigationMenu.Positioner sideOffset={8} style={{ zIndex: 100 }}>
            <NavigationMenu.Popup style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: '10px', boxShadow: '0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
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

    </div>
  )
}
