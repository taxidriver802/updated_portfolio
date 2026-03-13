import Link from 'next/link';

import { Project } from '@/types/project';

type Props = {
  project: Project;
};

const statusStyles = {
  live: 'bg-green-500/10 text-green-600',
  mobile: 'bg-blue-500/10 text-blue-600',
  'in-progress': 'bg-gray-500/10 text-foreground',
  archived: 'bg-muted text-muted-foreground',
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full focus:outline-none"
    >
      <article className="flex h-full flex-col rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
        <h3 className="text-xl font-semibold">{project.name}</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech?.map((item) => (
            <span
              key={item}
              className="rounded-full border px-2 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between gap-3">
          <div className="text-sm font-medium opacity-80 transition group-hover:opacity-100 group-hover:translate-x-1">
            View case study →
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.status && (
              <span
                className={`rounded-md px-2 py-1 text-xs font-medium ${statusStyles[project.status]}`}
              >
                {project.status === 'live' && project.demo
                  ? 'Live'
                  : project.status === 'mobile'
                    ? 'Mobile'
                    : project.status === 'archived'
                      ? 'Archived'
                      : 'In Progress'}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
