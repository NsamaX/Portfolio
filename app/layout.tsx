import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const title = 'Portfolio — Vijuksama';
const description =
  'Self-taught Infrastructure, AI & Full-Stack Engineer — on-premise Proxmox infrastructure, factory ERP systems, and AI agents doing real work.';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Personal portfolio — no SEO. Only what link previews need when sharing the URL.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: '/icon.svg' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Vijuksama',
    title,
    description,
    images: [{ url: '/profile.jpg', width: 320, height: 320, alt: 'Vijuksama' }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-dark',d?'true':'false');}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
