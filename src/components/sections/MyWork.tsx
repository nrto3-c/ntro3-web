'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'

function Tag({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className="font-mono text-[10px] tracking-[0.1em] px-2 py-[3px]"
      style={{
        border: `1px solid ${light ? 'rgba(242,238,227,0.5)' : 'rgba(14,14,14,0.35)'}`,
        borderRadius: '999px',
        color: light ? 'rgba(242,238,227,0.7)' : 'rgba(14,14,14,0.7)',
      }}
    >
      {children}
    </span>
  )
}

export default function MyWork() {
  const [active, setActive] = useState(0)
  const [showScroll, setShowScroll] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const check = () => setShowScroll(el.scrollHeight > el.clientHeight && el.scrollTop < el.scrollHeight - el.clientHeight - 4)
    check()
    el.addEventListener('scroll', check)
    window.addEventListener('resize', check)
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check) }
  }, [])

  const project = projects[active]

  return (
    <section id="work" className="relative w-full">

      {/* ══ MOBILE (< 768px) ═══════════════════════════════ */}
      <div className="md:hidden">
        {/* Section header */}
        <div
          className="bg-ink text-cream flex justify-between items-center px-5"
          style={{ height: '56px' }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[3px] font-bold">02 / WORK</span>
          </div>
          <span className="font-mono text-[11px] tracking-[3px] text-cream/55">04 / ∞</span>
        </div>

        {/* Section title */}
        <div className="bg-cream text-ink px-5 pt-4 pb-3">
          <h2
            className="font-sans font-black uppercase leading-none"
            style={{ fontSize: '48px', lineHeight: 0.92, letterSpacing: '-0.038em' }}
          >
            <span className="text-flame">SELECTED</span>{' '}
            <span className="text-ink">WORK</span>
          </h2>
        </div>

        {/* Card stack */}
        <div>
          {projects.map((p, i) => {
            const isDark = i % 2 === 0
            const bg = isDark ? INK : FLAME
            const textMain = isDark ? CREAM : INK
            const textMuted = isDark ? 'rgba(242,238,227,0.6)' : 'rgba(14,14,14,0.6)'
            return (
              <a
                key={p.num}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                style={{ textDecoration: 'none' }}
              >
                {/* Cover area: 140px */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 140, backgroundColor: bg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.coverSvg}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Top meta */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 pt-3">
                    <span
                      className="font-mono text-[10px] tracking-[2px]"
                      style={{ color: textMuted }}
                    >
                      {p.num} / {p.kind}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-[2px]"
                      style={{ color: textMuted }}
                    >
                      {p.year}
                    </span>
                  </div>
                  {/* Bottom: name + arrow */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-3">
                    <div
                      className="font-sans font-black uppercase"
                      style={{ fontSize: '28px', lineHeight: 1, letterSpacing: '-0.033em', color: textMain }}
                    >
                      {p.name}
                    </div>
                    <span
                      className="font-sans font-black text-[20px]"
                      style={{ color: textMain }}
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Description area */}
                <div
                  className="px-4 py-3.5"
                  style={{ backgroundColor: bg }}
                >
                  <p
                    className="font-sans text-[13px] leading-[1.55] mb-3"
                    style={{ color: isDark ? 'rgba(242,238,227,0.75)' : 'rgba(14,14,14,0.75)' }}
                  >
                    {p.desc.split(' — ')[0]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <Tag key={t} light={isDark}>{t}</Tag>)}
                  </div>
                </div>
              </a>
            )
          })}

          {/* More indicator */}
          <div
            className="bg-ink text-cream/40 px-5 py-4 font-mono text-[11px] tracking-[3px]"
            style={{ borderTop: '1px dashed rgba(242,238,227,0.2)' }}
          >
            + MORE WORK COMING / STAY TUNED
          </div>
        </div>
      </div>

      {/* ══ DESKTOP (≥ 768px) ══════════════════════════════ */}
      <div
        className="hidden md:flex md:flex-col bg-cream"
        style={{ height: '100vh', minHeight: '800px' }}
      >
        {/* Section header */}
        <motion.div
          className="bg-ink text-cream flex-shrink-0 flex justify-between items-center px-14"
          style={{ height: '64px' }}
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[3px] font-bold">02 / WORK</span>
            <span className="font-mono text-[11px] tracking-[3px] text-cream/55">HOVER A ROW TO PREVIEW</span>
          </div>
          <span className="font-mono text-[11px] tracking-[3px] text-cream/55">04 / ∞ — GROWING</span>
        </motion.div>

        {/* Section title */}
        <motion.div
          className="bg-cream text-ink flex-shrink-0 flex items-end justify-between px-14 pb-2"
          style={{ paddingTop: '16px', paddingBottom: '8px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          <h2
            className="font-sans font-black uppercase leading-none"
            style={{ fontSize: '80px', lineHeight: 0.92, letterSpacing: '-0.038em' }}
          >
            <span className="text-flame">SELECTED</span>{' '}
            <span className="text-ink">WORK</span>
          </h2>
          <span className="font-mono text-[11px] tracking-[3px] text-ink/60 pb-2">
            ↳ PREVIEW · INDEX
          </span>
        </motion.div>

        {/* Two-column */}
        <motion.div
          className="flex flex-1 overflow-hidden px-14 pb-0 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
        >
          {/* Preview pane */}
          <div
            className="relative bg-ink text-cream overflow-hidden flex-shrink-0"
            style={{ width: '600px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0.55, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.coverSvg}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-[22px]">
                  <span
                    className="font-mono text-[10px] tracking-[2px] text-ink px-2 py-1"
                    style={{ background: FLAME }}
                  >
                    ★ PREVIEW
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] tracking-[2px] text-cream/60">
                      {project.num} / {project.kind}
                    </span>
                    <span className="font-mono text-[11px] tracking-[2px] text-cream/60">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                  <div
                    className="font-sans font-black uppercase text-cream"
                    style={{ fontSize: '88px', lineHeight: 0.9, letterSpacing: '-0.034em' }}
                  >
                    {project.name}
                  </div>
                  <p
                    className="font-sans text-[14px] leading-[1.6] text-cream/85"
                    style={{ marginTop: '16px', maxWidth: '480px' }}
                  >
                    {project.desc.split(' — ')[0]}
                  </p>
                  <div className="flex items-end justify-between" style={{ marginTop: '18px' }}>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((t) => <Tag key={t} light>{t}</Tag>)}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] tracking-[2px] text-cream hover:text-flame transition-colors"
                    >
                      VIEW PROJECT →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scrollable list */}
          <div className="relative flex-1 flex flex-col overflow-hidden">
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto"
              style={{ scrollbarWidth: 'thin', scrollbarColor: `${INK} ${CREAM}` }}
            >
              <div
                className="font-mono text-[11px] tracking-[3px] text-ink/60 px-[22px] py-3"
                style={{ borderBottom: '1px solid rgba(14,14,14,0.4)' }}
              >
                SELECTED WORK
              </div>
              {projects.map((p, i) => (
                <ProjectRow
                  key={p.num}
                  project={p}
                  isActive={active === i}
                  onHover={() => setActive(i)}
                />
              ))}
              <div
                className="px-[22px] py-[18px] font-mono text-[11px] tracking-[3px] text-ink/40"
                style={{ borderTop: '1px solid rgba(14,14,14,0.4)', borderBottom: '1px solid rgba(14,14,14,0.4)', borderStyle: 'dashed' }}
              >
                + MORE WORK COMING / STAY TUNED
              </div>
            </div>
            <AnimatePresence>
              {showScroll && (
                <motion.div
                  className="absolute right-[18px] bottom-[18px] font-mono text-[14px] text-ink/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5, y: [0, 4, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ y: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.3 } }}
                >
                  ↓
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

const FLAME = '#FF5A1F'
const INK = '#0E0E0E'
const CREAM = '#F2EEE3'

function ProjectRow({
  project,
  isActive,
  onHover,
}: {
  project: typeof projects[0]
  isActive: boolean
  onHover: () => void
}) {
  return (
    <motion.div
      className="cursor-pointer select-none"
      style={{
        borderTop: '1px solid rgba(14,14,14,0.4)',
        paddingTop: '18px',
        paddingBottom: '18px',
        paddingRight: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
      animate={{
        backgroundColor: isActive ? FLAME : CREAM,
        paddingLeft: isActive ? '30px' : '22px',
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      tabIndex={0}
      role="button"
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={() => window.open(project.href, '_blank', 'noopener,noreferrer')}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open(project.href, '_blank', 'noopener,noreferrer') }}
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-[10px] tracking-[2px] text-ink/60">
          {project.num} / {project.kind}
        </span>
        <span className="font-mono text-[10px] tracking-[2px] text-ink/60">
          {project.year}
        </span>
      </div>
      <div className="flex items-end justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div
            className="font-sans font-black uppercase text-ink"
            style={{ fontSize: '30px', lineHeight: 1, letterSpacing: '-0.033em' }}
          >
            {project.name}
          </div>
          <div className="font-sans text-[11px] leading-[1.45] text-ink/70 mt-1 truncate">
            {project.desc.split(' — ')[0]}
          </div>
        </div>
        <motion.span
          className="font-sans text-[22px] font-black text-ink flex-shrink-0"
          animate={{ x: isActive ? 4 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  )
}
