import Link from 'next/link';
import Container from './Container';

const navLinks = [
  { href: '#featured-projects', label: 'Projects' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#currently-building', label: 'Current Work' },
  { href: '#other-projects', label: 'Other Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="h-6 w-6 transition-opacity hover:opacity-70">
          <img
            src="/favicon1.png"
            alt="Jason Cox Logo"
            width={25}
            height={25}
            style={{ objectFit: 'contain', borderRadius: 7 }}
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
