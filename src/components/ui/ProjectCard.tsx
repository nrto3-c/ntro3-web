'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { TagBadge } from './TagBadge'

type Props = { project: Project }

export function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-48 bg-gray-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
