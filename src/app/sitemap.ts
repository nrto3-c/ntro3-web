import type { MetadataRoute } from 'next'
import { getAllProjects } from '@/data/projects'

const BASE_URL = 'https://yourname.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...projects.map((p) => ({
      url: `${BASE_URL}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
