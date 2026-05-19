'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import MyWork from '@/components/sections/MyWork'

type TransitionType = 'A' | 'B' | 'C'

const labels: Record<TransitionType, string> = {
  A: 'Hero 帷幕上升',
  B: 'Work 從底登台',
  C: '雙向對移',
}

const ease = [0.22, 1, 0.36, 1] as const

export default function DemoPage() {
  const [type, setType] = useState<TransitionType>('A')
  const [isWork, setIsWork] = useState(false)
  const locked = useRef(false)

  const go = (toWork: boolean) => {
    if (locked.current) return
    locked.current = true
    setIsWork(toWork)
    setTimeout(() => { locked.current = false }, 900)
  }

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 30 && !isWork) go(true)
      else if (e.deltaY < -30 && isWork) go(false)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [isWork])

  // reset to hero when switching type
  const switchType = (t: TransitionType) => {
    setType(t)
    setIsWork(false)
  }

  // per-type animation values
  const heroY  = type === 'B' ? '0%' : (isWork ? '-100%' : '0%')
  const workY  = type === 'A' ? '0%' : (isWork ? '0%'    : '100%')
  const heroZ  = type === 'B' ? 1 : 2
  const workZ  = type === 'B' ? 2 : 1

  return (
    <div className="fixed inset-0 overflow-hidden bg-ink">

      {/* Floating controls */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        {(['A', 'B', 'C'] as TransitionType[]).map((t) => (
          <button
            key={t}
            onClick={() => switchType(t)}
            className="font-mono text-[11px] tracking-[3px] px-4 py-2 transition-colors"
            style={{
              background: type === t ? '#FF5A1F' : 'rgba(242,238,227,0.12)',
              color: type === t ? '#0E0E0E' : '#F2EEE3',
              border: '1px solid rgba(242,238,227,0.25)',
            }}
          >
            {t}
          </button>
        ))}
        <span
          className="font-mono text-[10px] tracking-[2px] text-cream/50 ml-2"
        >
          {labels[type]}
        </span>
      </div>

      {/* Scroll hint */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-mono text-[10px] tracking-[3px] text-cream/30 transition-opacity duration-300"
        style={{ opacity: isWork ? 0 : 1 }}
      >
        ↓ SCROLL TO TRANSITION
      </div>

      {/* Work layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: workY }}
        transition={{ duration: 0.75, ease }}
        style={{ zIndex: workZ }}
      >
        <MyWork />
      </motion.div>

      {/* Hero layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: heroY }}
        transition={{ duration: 0.75, ease }}
        style={{ zIndex: heroZ }}
      >
        <Hero />
      </motion.div>

    </div>
  )
}
