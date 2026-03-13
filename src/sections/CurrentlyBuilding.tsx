import Link from 'next/link';
import Section from '@/components/Section';
import { getProjects } from '@/lib/getProjects';

export default async function CurrentlyBuilding() {
  const projects = await getProjects();

  const inProgressProjects = projects.filter(
    (project) => project.status === 'in-progress'
  );

  if (!inProgressProjects.length) return null;

  const project = inProgressProjects[0];

  return (
    <Section
      id="currently-building"
      title="Currently Building"
      subtitle="What I’m actively working on and improving right now."
    >
      <div className="relative overflow-hidden rounded-3xl border bg-background p-8 md:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                In Progress
              </span>

              {project.featured && (
                <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Featured Build
                </span>
              )}
            </div>

            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {project.name}
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {project.overview || project.description}
            </p>

            {!!project.tech?.length && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {!!project.features?.length && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Active Focus
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <li
                      key={`${project.slug}-current-feature-${index}`}
                      className="rounded-2xl border p-4 text-sm text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-col gap-3 lg:min-w-[180px]">
            {project.slug && (
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-xl border px-4 py-3 text-center text-sm font-medium transition hover:bg-muted"
              >
                View Case Study
              </Link>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-3 text-center text-sm font-medium transition hover:bg-muted"
              >
                View GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-3 text-center text-sm font-medium transition hover:bg-muted"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
