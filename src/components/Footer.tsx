import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container className="flex flex-col gap-3 py-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jason Cox</p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}