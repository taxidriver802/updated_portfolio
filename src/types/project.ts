export type Project = {
  name: string;
  slug: string;
  description: string;

  featured?: boolean;
  category?: 'featured' | 'other' | 'current' | 'experiment';
  status?: 'live' | 'mobile' | 'in-progress' | 'archived';

  tech?: string[];

  overview?: string;
  architecture?: string[];
  features?: string[];
  challenges?: { title: string; problem: string; solution: string }[];
  screenshots?: { src: string; alt: string }[];

  repos: {
    name: string;
    url: string;
  }[];

  language?: string;
  updatedAt: string;

  github?: string;
  demo?: string;
  image?: string;
};
