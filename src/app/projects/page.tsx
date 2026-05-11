import type { Metadata } from 'next'
import { getAllProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'

export const metadata: Metadata = {
  title: 'All Projects — Your Name',
  description: 'Browse all web projects by Your Name.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">All Projects</h1>
        <p className="text-gray-600 text-lg">Every project I&apos;ve shipped</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
