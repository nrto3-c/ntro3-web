'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IdeaIcon, DesignIcon, BuildIcon, ShipIcon } from '@/components/icons/StageIcons'

const FLAME = '#FF5A1F'
const INK = '#0E0E0E'
const CREAM = '#F2EEE3'
const MAILTO = 'mailto:nrto3.c@gmail.com?subject=NRTO3%20%E2%80%94%20%E5%90%88%E4%BD%9C%E8%A9%A2%E5%95%8F'

const mobileNavItems = [
  { label: 'WORK',    num: '01', id: 'work' },
  { label: 'ABOUT',   num: '02', id: 'about' },
  { label: 'CONTACT', num: '03', id: 'contact' },
]

const stages = [
  { id: 'T01', label: 'IDEA',   Icon: IdeaIcon,   darkBg: true,  spin: true,  step: true  },
  { id: 'T02', label: 'DESIGN', Icon: DesignIcon,  darkBg: false, spin: false, step: false },
  { id: 'T03', label: 'BUILD',  Icon: BuildIcon,   darkBg: true,  spin: false, step: false },
  { id: 'T04', label: 'SHIP',   Icon: ShipIcon,    darkBg: false, spin: true,  step: false },
]

const stepEase = (t: number) => Math.floor(t * 8) / 8

function FlameDot() {
  return (
    <motion.span
      className="text-flame"
      animate={{ opacity: [0.35, 1, 0.35] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      .
    </motion.span>
  )
}

export default function Hero({ onSectionChange }: { onSectionChange?: (i: number) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleMobileNav = (id: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <section id="hero" className="relative w-full">

      {/* ══ MOBILE (< 768px) ═══════════════════════════════ */}
      <div className="md:hidden">

        {/* TOP: ink */}
        <div className="bg-ink text-cream px-5 pt-8 pb-8">
          {/* Hamburger nav */}
          <div className="flex justify-between items-center mb-7">
            <span className="font-sans font-bold text-[13px] tracking-[0.04em] uppercase">
              NRTO3<FlameDot />DEV
            </span>
            <button
              className="flex flex-col gap-[5px] p-1"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <div className="w-[22px] h-[2px] bg-cream" />
              <div className="w-[22px] h-[2px] bg-cream" />
              <div className="w-[22px] h-[2px] bg-flame" />
            </button>
          </div>

          {/* Subline — two lines on mobile */}
          <p className="font-mono text-[11px] text-cream/50 mb-3" style={{ letterSpacing: '5px' }}>
            ↳ INDEPENDENT DEVELOPER · BASED IN TAIPEI<br />台灣
          </p>

          {/* Title */}
          <h1
            className="font-sans font-black uppercase text-cream"
            style={{ fontSize: 'clamp(92px, 22vw, 220px)', lineHeight: 0.82, letterSpacing: '-0.04em' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              BUILD
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            >
              SHIP<span className="text-flame">.</span>
            </motion.div>
          </h1>

          {/* Description — in normal flow below title */}
          <motion.p
            className="font-sans text-[15px] leading-[1.5] text-cream/70 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
          >
            iOS · macOS · Web 應用開發。<br />
            從 0 到 1，從原型到上架。
          </motion.p>
        </div>

        {/* Flame divider */}
        <motion.div
          className="bg-flame"
          style={{ height: '2px', transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
        />

        {/* BOTTOM: cream, vertical timeline */}
        <div className="bg-cream text-ink px-5 pt-6 pb-8">
          {/* Meta strip */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[3px] bg-ink text-cream px-[10px] py-[4px]">
              [TIMELINE]
            </span>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Vertical rail */}
            <div
              className="absolute"
              style={{ left: '27px', top: '28px', bottom: '28px', width: '2px', backgroundColor: FLAME }}
            />

            {/* Stage rows */}
            <div className="flex flex-col" style={{ gap: '20px' }}>
              {stages.map((stage, i) => {
                const bgColor = stage.darkBg ? INK : FLAME
                const iconColor = stage.darkBg ? FLAME : INK
                const Icon = stage.Icon
                return (
                  <motion.div
                    key={stage.id}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                  >
                    {/* Icon box (56×56), overlaps rail */}
                    <div
                      className="relative flex items-center justify-center flex-shrink-0"
                      style={{ width: 56, height: 56, backgroundColor: bgColor, zIndex: 1 }}
                    >
                      <div
                        className="absolute top-0 left-0"
                        style={{ width: 0, height: 0, borderTop: `6px solid ${CREAM}`, borderRight: '6px solid transparent' }}
                      />
                      <motion.div
                        animate={stage.spin ? { rotate: 360 } : {}}
                        transition={
                          stage.spin
                            ? { duration: stage.step ? 4 : 8, repeat: Infinity, ease: stage.step ? stepEase : 'linear' }
                            : {}
                        }
                      >
                        <Icon color={iconColor} size={32} />
                      </motion.div>
                    </div>

                    {/* Ticket + label */}
                    <div>
                      <span
                        className="font-mono text-[10px] tracking-[2px] bg-cream inline-block mb-1 px-2 py-[2px]"
                        style={{ border: '1px solid rgba(14,14,14,0.6)' }}
                      >
                        {stage.id}
                      </span>
                      <div
                        className="font-sans font-black uppercase text-ink"
                        style={{ fontSize: '28px', lineHeight: 1, letterSpacing: '-0.033em' }}
                      >
                        {stage.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══ DESKTOP (≥ 768px) ══════════════════════════════ */}
      <div className="hidden md:flex md:flex-col" style={{ height: '100vh', minHeight: '800px' }}>

        {/* TOP: ink */}
        <div
          className="relative bg-ink text-cream px-14 overflow-hidden"
          style={{ flex: '460 0 0' }}
        >
          {/* Navbar */}
          <motion.nav
            className="absolute flex justify-between items-center"
            style={{ top: '32px', left: '56px', right: '56px' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <span className="font-sans font-bold text-[13px] tracking-[0.04em] uppercase">
              NRTO3<FlameDot />DEV
            </span>
            <div className="flex gap-7">
              {[
                { label: 'WORK',    section: 1 },
                { label: 'ABOUT',   section: 2 },
                { label: 'CONTACT', section: 3 },
              ].map((item) => (
                <a
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); onSectionChange?.(item.section) }}
                  className="relative font-sans text-[12px] tracking-[0.17em] text-cream/70 hover:text-cream transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-px after:bg-cream after:transition-all after:duration-200 hover:after:left-0 hover:after:right-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Subline */}
          <motion.p
            className="absolute font-mono text-[11px] text-cream/50 uppercase"
            style={{ top: '130px', letterSpacing: '5px' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          >
            ↳ INDEPENDENT DEVELOPER · BASED IN TAIPEI · 台灣
          </motion.p>

          {/* Main title */}
          <div className="absolute" style={{ top: '144px', left: '56px' }}>
            <h1
              className="font-sans font-black uppercase text-cream leading-none"
              style={{ fontSize: 'clamp(140px, 17.2vw, 220px)', lineHeight: 0.82, letterSpacing: '-0.04em' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                BUILD
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
              >
                SHIP<span className="text-flame">.</span>
              </motion.div>
            </h1>
          </div>

          {/* Description block */}
          <motion.div
            className="absolute z-10"
            style={{ top: '348px', right: '56px', maxWidth: '340px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
          >
            <p className="font-sans text-[16px] leading-[1.5] text-cream/70">
              iOS · macOS · Web 應用開發。<br />
              從 0 到 1，從原型到上架。
            </p>
          </motion.div>

          {/* Bottom-right index */}
          <motion.div
            className="absolute font-mono text-[11px] text-cream/50"
            style={{ bottom: '24px', right: '56px', letterSpacing: '3px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.0, ease: 'easeOut' }}
          >
            — INDEX / 01
          </motion.div>
        </div>

        {/* Flame divider */}
        <motion.div
          className="bg-flame flex-shrink-0"
          style={{ height: '2px', transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
        />

        {/* BOTTOM: cream */}
        <div
          className="relative bg-cream text-ink px-14 pt-6 overflow-hidden"
          style={{ flex: '340 0 0' }}
        >
          {/* Meta strip */}
          <motion.div
            className="flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[3px] bg-ink text-cream px-[10px] py-[4px]">
                [TIMELINE]
              </span>
              <span className="font-mono text-[11px] tracking-[3px] text-ink/60">
                04 STAGES · IDEA → SHIP
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[3px] text-ink/60">
              ↓ SCROLL FOR WORK
            </span>
          </motion.div>

          {/* Timeline body */}
          <div className="absolute" style={{ top: '88px', left: '96px', right: '96px' }}>
            {/* Vertical labels */}
            <span
              className="absolute font-mono text-[10px] text-ink/60"
              style={{ left: '-48px', top: '40px', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '2px' }}
            >
              BEGIN
            </span>
            <span
              className="absolute font-mono text-[10px] text-ink/60"
              style={{ right: '-48px', top: '40px', writingMode: 'vertical-rl', letterSpacing: '2px' }}
            >
              FINISH
            </span>

            {/* Track */}
            <div className="relative" style={{ top: '40px', height: '4px' }}>
              <motion.div
                className="absolute inset-x-0 bg-ink/20"
                style={{ height: '1px', top: '1.5px', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute bg-flame left-0"
                style={{ height: '2.5px', top: 0 }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 1.3, ease: 'easeInOut' }}
              />
            </div>

            {/* Percentage labels */}
            <div className="relative" style={{ top: '54px' }}>
              {['0%', '25%', '50%', '75%', '100%'].map((pct, i) => (
                <span
                  key={pct}
                  className="absolute font-mono text-[9px] text-ink/55"
                  style={{ left: `${i * 25}%`, transform: 'translateX(-50%)', letterSpacing: '1.5px' }}
                >
                  {pct}
                </span>
              ))}
            </div>

            {/* Stage nodes */}
            <div className="grid grid-cols-4" style={{ marginTop: '72px' }}>
              {stages.map((stage, i) => {
                const bgColor = stage.darkBg ? INK : FLAME
                const iconColor = stage.darkBg ? FLAME : INK
                const Icon = stage.Icon
                return (
                  <motion.div
                    key={stage.id}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 + i * 0.1, ease: 'easeOut' }}
                  >
                    <div className="border border-ink px-2 py-[2px] bg-cream font-mono text-[10px] tracking-[2px] mb-[10px]">
                      {stage.id}
                    </div>
                    <div className="w-px bg-ink/50" style={{ height: '10px' }} />
                    <motion.div
                      className="relative flex items-center justify-center"
                      style={{ width: '96px', height: '96px', backgroundColor: bgColor }}
                      whileHover={{ y: -2, boxShadow: '0 0 0 4px rgba(255,90,31,0.3)' }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      <div
                        className="absolute top-0 left-0"
                        style={{ width: 0, height: 0, borderTop: `8px solid ${CREAM}`, borderRight: '8px solid transparent' }}
                      />
                      <motion.div
                        animate={stage.spin ? { rotate: 360 } : {}}
                        transition={
                          stage.spin
                            ? { duration: stage.step ? 4 : 8, repeat: Infinity, ease: stage.step ? stepEase : 'linear' }
                            : {}
                        }
                      >
                        <Icon color={iconColor} size={64} />
                      </motion.div>
                    </motion.div>
                    <div
                      className="font-sans font-black uppercase text-ink"
                      style={{ marginTop: '22px', fontSize: '36px', lineHeight: 1, letterSpacing: '-0.033em' }}
                    >
                      {stage.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE NAV OVERLAY ══════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-ink text-cream flex flex-col px-5 pt-8 pb-10"
            style={{ zIndex: 100 }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-14">
              <span className="font-sans font-bold text-[13px] tracking-[0.04em] uppercase">
                NRTO3<FlameDot />DEV
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center w-9 h-9 text-cream/70 hover:text-cream transition-colors"
                style={{ fontSize: '20px', fontWeight: 300 }}
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 flex-1">
              {mobileNavItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  className="flex items-baseline gap-4 text-left w-full group py-3"
                  style={{ borderBottom: '1px solid rgba(242,238,227,0.1)' }}
                  onClick={() => handleMobileNav(item.id)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.28, ease: 'easeOut' }}
                >
                  <span className="font-mono text-[11px] text-flame" style={{ letterSpacing: '2px' }}>
                    {item.num}
                  </span>
                  <span
                    className="font-sans font-black uppercase text-cream group-hover:text-flame transition-colors duration-200"
                    style={{ fontSize: '44px', lineHeight: 1, letterSpacing: '-0.03em' }}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            {/* Bottom: email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              <p className="font-mono text-[10px] text-cream/40 mb-2" style={{ letterSpacing: '3px' }}>
                GET IN TOUCH
              </p>
              <a
                href={MAILTO}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.location.href = MAILTO }}
                className="font-sans font-bold text-[14px] text-flame hover:underline"
              >
                nrto3.c@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
