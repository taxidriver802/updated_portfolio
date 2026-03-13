import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jason Cox | Full-Stack Developer',
  description:
    'Portfolio of Jason Cox, a full-stack developer building modern web applications with React, Node.js, and related technologies.',
  icons: {
    icon: '/favicon1.png',
  },
  openGraph: {
    title: 'Jason Cox Portfolio',
    images: ['/favicon1.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
