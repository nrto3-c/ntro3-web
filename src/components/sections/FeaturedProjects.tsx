'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { getFeaturedProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export function FeaturedProjects() {
  const projects = getFeaturedProjects()
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-4">精選作品</h2>
        <p className="text-gray-500 text-lg">幾個我引以為傲的專案</p>
      </ScrollReveal>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={gridInView ? 'show' : 'hidden'}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <ScrollReveal delay={0.2} className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors text-lg"
        >
          查看全部作品 →
        </Link>
      </ScrollReveal>
    </section>
  )
}
