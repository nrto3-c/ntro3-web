import Link from 'next/link'
import { getFeaturedProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-4">Featured Work</h2>
        <p className="text-gray-600 text-lg">A selection of projects I'm proud of</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors text-lg"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  )
}
