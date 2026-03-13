import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjects } from '@/lib/getProjects';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects
    .filter((project) => project.featured && project.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* ------------------------------------------------ */}
      {/* HERO / INTRO */}
      {/* ------------------------------------------------ */}

      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Project Case Study
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {project.name}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {project.overview || project.description}
        </p>

        {/* Tech stack */}
        {!!project.tech?.length && (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-5 py-2 text-sm font-medium transition hover:bg-muted"
            >
              View GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-5 py-2 text-sm font-medium transition hover:bg-muted"
            >
              Live Demo
            </a>
          )}
        </div>
      </header>

      {/* ------------------------------------------------ */}
      {/* PROJECT SNAPSHOT */}
      {/* ------------------------------------------------ */}

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Project Snapshot</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {(
            project.snapshot ?? [
              { label: 'Project Type', value: 'Full-Stack Application' },
              {
                label: 'Focus Areas',
                value: 'API Design • Data Modeling • UI Systems',
              },
              { label: 'Role', value: 'Design & Development' },
            ]
          ).map((item, index) => (
            <div
              key={`${project.slug}-snapshot-${index}`}
              className="rounded-2xl border p-6"
            >
              <h3 className="text-sm font-medium text-muted-foreground">
                {item.label}
              </h3>
              <p className="mt-2 text-lg font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* ARCHITECTURE */}
      {/* ------------------------------------------------ */}

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Architecture</h2>

        {project.architecture?.length ? (
          <div className="space-y-4">
            {project.architecture.map((item, index) => (
              <div
                key={`${project.slug}-architecture-${index}`}
                className="rounded-xl border p-5 text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Architecture documentation coming soon.
          </p>
        )}
      </section>

      {/* ------------------------------------------------ */}
      {/* FEATURES */}
      {/* ------------------------------------------------ */}

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Key Features</h2>

        {project.features?.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={`${project.slug}-feature-${index}`}
                className="rounded-xl border p-6"
              >
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Feature documentation coming soon.
          </p>
        )}
      </section>

      {/* ------------------------------------------------ */}
      {/* CHALLENGES */}
      {/* ------------------------------------------------ */}

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Challenges & Solutions</h2>

        {project.challenges?.length ? (
          <div className="space-y-8">
            {project.challenges.map((item) => (
              <article key={item.title} className="rounded-2xl border p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Challenge
                    </p>
                    <p className="mt-1 text-muted-foreground">{item.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Solution
                    </p>
                    <p className="mt-1 text-muted-foreground">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Challenge writeups coming soon.
          </p>
        )}
      </section>

      {/* ------------------------------------------------ */}
      {/* SCREENSHOTS */}
      {/* ------------------------------------------------ */}

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Screenshots</h2>

        {project.screenshots?.length ? (
          <div className="grid gap-8 md:grid-cols-2">
            {project.screenshots.map((shot, index) => (
              <div
                key={`${project.slug}-shot-${index}`}
                className="overflow-hidden rounded-2xl border"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1200}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Screenshots coming soon.</p>
        )}
      </section>
    </main>
  );
}
