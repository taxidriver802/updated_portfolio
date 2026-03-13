import Container from '@/components/Container';

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Jason Cox
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I build full-stack web applications with a focus on responsive UI,
            backend architecture, and practical problem-solving.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Currently rebuilding my portfolio to better showcase curated
            engineering work, case studies, and real-world projects.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            React • Next.js • Node.js • PostgreSQL
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/taxidriver802"
              className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-950"
            >
              GitHub
            </a>
            <a
              href="#featured-projects"
              className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              View Projects
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
