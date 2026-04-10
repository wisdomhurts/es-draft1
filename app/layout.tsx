import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exploration Sites — Powerful Visual Storytelling',
  description: 'Maps, websites, presentations, and films for exploration-stage mining companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          * { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }
          body {
            font-family: 'DM Sans', system-ui, sans-serif;
            color: #1a1a1a;
            background: #fff;
            -webkit-font-smoothing: antialiased;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
          }
          .nav-mega-link:hover { background-color: #F5F3F0 !important; }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
