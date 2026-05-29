import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const title = 'Vijuksama — Infrastructure & Full-Stack Engineer';
const description =
  'Self-taught Infrastructure & Full-Stack Engineer — operating on-premise Proxmox infrastructure and building factory ERP systems for discrete manufacturing.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · Vijuksama',
  },
  description,
  applicationName: 'Vijuksama Portfolio',
  authors: [{ name: 'Vijuksama', url: siteUrl }],
  creator: 'Vijuksama',
  keywords: [
    'Vijuksama',
    'Infrastructure Engineer',
    'Full-Stack Engineer',
    'DevOps',
    'Proxmox',
    'Self-hosted',
    'Factory ERP',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
  ],
  alternates: {
    canonical: '/',
  },
  icons: { icon: '/icon.svg' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Vijuksama',
    title,
    description,
    images: [{ url: '/profile.png', width: 320, height: 320, alt: 'Vijuksama' }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vijuksama',
  jobTitle: 'Infrastructure & Full-Stack Engineer',
  description,
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  sameAs: ['https://github.com/vijuksama', 'https://linkedin.com/in/vijuksama'],
  knowsAbout: ['Proxmox', 'Docker', 'Linux', 'Next.js', 'TypeScript', 'PostgreSQL', 'DevOps', 'ERP'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
