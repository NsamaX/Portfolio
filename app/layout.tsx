import type { Metadata } from 'next';
import { Caveat, Hanken_Grotesk, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });
const sans = Hanken_Grotesk({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', variable: '--font-mono' });
const hand = Caveat({ subsets: ['latin'], weight: '500', variable: '--font-hand' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const title = 'Vijuksama Hongthongdaeng — IT Coordinator';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: 'Vijuksama Hongthongdaeng, factory IT: support, servers and practical in-house software. Making the complex simple.',
  authors: [{ name: 'Vijuksama Hongthongdaeng' }],
  robots: { index: false, follow: true },
  icons: { icon: '/icon.svg' },
  alternates: { types: { 'text/plain': '/llms.txt' } },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description: 'Making the complex simple. An archive of work from a factory IT department of one.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Collage portrait of Vijuksama Hongthongdaeng' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
