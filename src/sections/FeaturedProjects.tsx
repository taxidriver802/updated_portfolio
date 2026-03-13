import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/getProjects';

export default async function FeaturedProjects() {
  const projects = await getProjects();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section
      id="featured-projects"
      title="Featured Projects"
      subtitle="A curated selection of projects that best represent my full-stack development skills."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
