import { projectMeta, ProjectSnapshotItem } from '@/data/projectMeta';

type DisplayProject = {
  name: string;
  slug: string;
  description: string;

  featured?: boolean;
  category?: 'featured' | 'other' | 'current' | 'experiment';
  status?: 'live' | 'mobile' | 'in-progress' | 'archived';

  tech?: string[];
  github?: string;
  demo?: string;
  image?: string;

  overview?: string;
  architecture?: string[];
  repos: {
    name: string;
    url: string;
  }[];
  features?: string[];
  challenges?: { title: string; problem: string; solution: string }[];
  screenshots?: { src: string; alt: string }[];
  snapshot?: ProjectSnapshotItem[];

  language?: string;
  updatedAt: string;
};

export default function transformRepos(repos: any[]): DisplayProject[] {
  const projects: DisplayProject[] = [];
  const used = new Set<string>();

  // Build metadata-driven projects first
  for (const meta of Object.values(projectMeta)) {
    const matchedRepos = (meta.repoNames ?? [])
      .map((name) => repos.find((repo) => repo.name === name))
      .filter(Boolean);

    if (matchedRepos.length === 0) continue;

    matchedRepos.forEach((repo) => used.add(repo.name));

    const newestUpdate = matchedRepos
      .map((repo) => repo.updated_at)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

    projects.push({
      name: meta.title || meta.key,
      slug: meta.slug || meta.key,
      description:
        meta.summary ||
        matchedRepos.find((repo) => repo.description)?.description ||
        'No description provided.',
      overview: meta.overview || 'No overview provided',
      architecture: meta.architecture,
      features: meta.features,
      challenges: meta.challenges,
      screenshots: meta.screenshots,
      featured: meta.featured ?? false,
      category: meta.category ?? 'other',
      status: meta.status,
      tech: meta.tech,
      github: meta.github,
      demo: meta.demo,
      image: meta.image,
      snapshot: meta.snapshot,

      repos: matchedRepos.map((repo, index) => ({
        name: meta.repoLabels?.[index] || repo.name,
        url: repo.html_url,
      })),

      language: matchedRepos[0]?.language,
      updatedAt: newestUpdate,
    });
  }

  // Add remaining repos automatically
  for (const repo of repos) {
    if (used.has(repo.name)) continue;

    projects.push({
      name: repo.name,
      slug: repo.name,
      description: repo.description || 'No description provided.',
      repos: [{ name: 'Repo', url: repo.html_url }],
      language: repo.language,
      updatedAt: repo.updated_at,
      featured: false,
      category: 'other',
      status: undefined,
      tech: [],
      github: repo.html_url,
      demo: undefined,
      image: undefined,
    });
  }

  // Remove hidden repos
  const visibleProjects = projects.filter((project) => {
    const meta = Object.values(projectMeta).find(
      (m) => m.title === project.name || m.key === project.name
    );

    return !meta?.hidden;
  });

  // Sort newest first
  return visibleProjects.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}
