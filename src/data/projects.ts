export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  coverImage: string
  images: string[]
  url?: string
  github?: string
  featured: boolean
  order: number
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Describe the challenge, your approach, and the outcome. Replace this with your actual project story.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/images/projects/project-one-cover.jpg',
    images: ['/images/projects/project-one-1.jpg'],
    url: 'https://example.com',
    featured: true,
    order: 1,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    coverImage: '/images/projects/project-two-cover.jpg',
    images: ['/images/projects/project-two-1.jpg'],
    url: 'https://example.com',
    github: 'https://github.com/yourusername/project-two',
    featured: true,
    order: 2,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['Vue', 'Node.js', 'MongoDB'],
    coverImage: '/images/projects/project-three-cover.jpg',
    images: ['/images/projects/project-three-1.jpg'],
    featured: true,
    order: 3,
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    coverImage: '/images/projects/project-four-cover.jpg',
    images: ['/images/projects/project-four-1.jpg'],
    url: 'https://example.com',
    featured: true,
    order: 4,
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['Next.js', 'Prisma', 'Vercel'],
    coverImage: '/images/projects/project-five-cover.jpg',
    images: ['/images/projects/project-five-1.jpg'],
    featured: true,
    order: 5,
  },
  {
    slug: 'project-six',
    title: 'Project Six',
    description: 'Brief description of what this project does and the problem it solves.',
    longDescription: 'A detailed explanation of this project. Replace this with your actual project story.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    coverImage: '/images/projects/project-six-cover.jpg',
    images: ['/images/projects/project-six-1.jpg'],
    featured: true,
    order: 6,
  },
  {
    slug: 'extra-project-one',
    title: 'Extra Project One',
    description: 'Brief description of an additional project.',
    longDescription: 'More details about this extra project. Replace with your real project.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    coverImage: '/images/projects/extra-one-cover.jpg',
    images: ['/images/projects/extra-one-1.jpg'],
    featured: false,
    order: 7,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6)
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
