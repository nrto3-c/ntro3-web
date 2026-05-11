import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects, getProjectBySlug } from '@/data/projects'
import { TagBadge } from '@/components/ui/TagBadge'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} — Your Name`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 text-sm font-medium"
      >
        ← Back to Projects
      </Link>

      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gray-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Visit Site →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="text-gray-700 text-lg leading-relaxed mb-12">
        <p>{project.longDescription}</p>
      </div>

      {project.images.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Screenshots</h2>
          <div className="grid grid-cols-1 gap-6">
            {project.images.map((src, i) => (
              <div
                key={i}
                className="relative h-64 md:h-96 rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
