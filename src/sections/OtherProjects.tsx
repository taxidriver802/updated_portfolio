import Section from '@/components/Section';
import { getProjects } from '@/lib/getProjects';

export default async function OtherProjects() {
  const projects = await getProjects();
  const otherProjects = projects
    .filter((project) => !project.featured)
    .slice(0, 6);

  return (
    <Section
      id="other-projects"
      title="Other Projects"
      subtitle="Recently updated repositories, experiments, and learning projects."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {otherProjects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col rounded-2xl border p-5"
          >
            <h3 className="text-lg font-semibold">{project.name}</h3>

            <p className="mt-2 min-h-[48px] text-sm text-muted-foreground">
              {project.description || 'No description provided.'}
            </p>

            <div className="mt-auto pt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {project.language || 'Unknown'}
              </span>

              <div className="flex gap-3">
                {project.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:underline"
                  >
                    {repo.name}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
