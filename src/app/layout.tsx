import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://jasoncox.dev'),
  title: 'Jason Cox | Full-Stack Developer',
  description:
    'Full-stack developer building modern web applications with React, Node.js, and PostgreSQL.',

  icons: {
    icon: '/favicon1.png',
  },
  openGraph: {
    title: 'Jason Cox | Full-Stack Developer',
    description:
      'Full-stack developer building modern web applications with React, Node.js, and modern backend systems.',
    url: 'https://jasoncox.dev',
    siteName: 'Jason Cox Portfolio',
    images: [
      {
        url: new URL('/og', new URL('https://jasoncox.dev')).toString(),
        width: 1200,
        height: 630,
        alt: 'Jason Cox Open Graph Image',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
      <Analytics />
    </>
  );
}
