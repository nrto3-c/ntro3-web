'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import MyWork from '@/components/sections/MyWork'
import AboutMe from '@/components/sections/AboutMe'
import ContactMe from '@/components/sections/ContactMe'

const ease = [0.22, 1, 0.36, 1] as const
const TOTAL = 4

export default function HomePage() {
  const [index, setIndex] = useState(0)
  const locked = useRef(false)

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (locked.current) return
      const delta = e.deltaY > 30 ? 1 : e.deltaY < -30 ? -1 : 0
      if (delta === 0) return
      const next = Math.max(0, Math.min(TOTAL - 1, index + delta))
      if (next === index) return
      locked.current = true
      setIndex(next)
      setTimeout(() => { locked.current = false }, 900)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [index])

  const desktopSections = [
    { el: <Hero key="hero" onSectionChange={setIndex} />, zIndex: 4 },
    { el: <MyWork key="work" />,    zIndex: 3 },
    { el: <AboutMe key="about" />,  zIndex: 2 },
    { el: <ContactMe key="contact" />, zIndex: 1 },
  ]

  return (
    <>
      {/* Mobile: natural scroll */}
      <div className="md:hidden">
        <Hero />
        <MyWork />
        <AboutMe />
        <ContactMe />
      </div>

      {/* Desktop: curtain system */}
      <div className="hidden md:block fixed inset-0 overflow-hidden">
        {desktopSections.map(({ el, zIndex }, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ y: index > i ? '-100%' : '0%' }}
            transition={{ duration: 0.75, ease }}
            style={{ zIndex }}
          >
            {el}
          </motion.div>
        ))}
      </div>
    </>
  )
}
