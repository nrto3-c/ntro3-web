'use client'

import { motion } from 'framer-motion'

const MAILTO = 'mailto:nrto3.c@gmail.com?subject=NRTO3%20%E2%80%94%20%E5%90%88%E4%BD%9C%E8%A9%A2%E5%95%8F'

export default function ContactMe() {
  return (
    <section id="contact" className="relative w-full">

      {/* ══ MOBILE (< 768px) ═══════════════════════════════ */}
      <div className="md:hidden bg-ink text-cream">
        {/* Section header */}
        <div
          className="flex justify-between items-center px-5 font-mono text-[11px] tracking-[3px]"
          style={{ height: '56px', borderBottom: '1px solid rgba(242,238,227,0.15)' }}
        >
          <div className="flex items-center gap-3">
            <span className="font-bold">04 / CONTACT</span>
          </div>
          <span className="text-cream/55">TAIPEI, TAIWAN</span>
        </div>

        {/* Content */}
        <div className="px-5 pt-8 pb-12">
          <p className="font-mono text-[11px] text-cream/50 mb-4" style={{ letterSpacing: '5px' }}>
            ↳ CONTACT — SAY HELLO
          </p>

          <h2
            className="font-sans font-black uppercase"
            style={{ fontSize: 'clamp(72px, 18vw, 180px)', lineHeight: 0.82, letterSpacing: '-0.04em' }}
          >
            <div>LET&apos;S</div>
            <div>TALK<span className="text-flame">.</span></div>
          </h2>

          {/* Flame divider */}
          <div className="bg-flame" style={{ height: '2px', marginTop: '32px' }} />

          {/* Email */}
          <div className="mt-6">
            <a
              href={MAILTO}
              onClick={(e) => { e.preventDefault(); window.location.href = MAILTO }}
              className="font-sans font-black text-cream active:text-flame transition-colors duration-200 break-all"
              style={{ fontSize: '22px', letterSpacing: '-0.01em' }}
            >
              nrto3.c@gmail.com
            </a>
            <p className="font-sans text-[14px] leading-[1.6] text-cream/55 mt-3">
              有專案想聊？歡迎直接寄信，通常 24 小時內回覆。
            </p>
          </div>
        </div>
      </div>

      {/* ══ DESKTOP (≥ 768px) ══════════════════════════════ */}
      <div
        className="hidden md:block relative w-full bg-ink text-cream"
        style={{ height: '100vh', minHeight: '800px' }}
      >
        {/* Section header */}
        <div
          className="flex justify-between items-center px-14 font-mono text-[11px] tracking-[3px]"
          style={{ height: '64px', borderBottom: '1px solid rgba(242,238,227,0.15)' }}
        >
          <div className="flex items-center gap-3.5">
            <span className="font-bold">04 / CONTACT</span>
            <span className="text-cream/55">GET IN TOUCH</span>
          </div>
          <span className="text-cream/55">TAIPEI, TAIWAN</span>
        </div>

        {/* Content */}
        <div className="absolute left-14 right-14" style={{ top: '120px' }}>
          <motion.p
            className="font-mono text-[11px] text-cream/50 mb-6"
            style={{ letterSpacing: '5px' }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            ↳ CONTACT — SAY HELLO
          </motion.p>

          <motion.h2
            className="font-sans font-black uppercase"
            style={{ fontSize: '180px', lineHeight: 0.82, letterSpacing: '-0.04em' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div>LET&apos;S</div>
            <div>TALK<span className="text-flame">.</span></div>
          </motion.h2>

          <motion.div
            className="bg-flame"
            style={{ height: '2px', marginTop: '40px', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          />

          <motion.div
            className="flex items-end justify-between mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7, ease: 'easeOut' }}
          >
            <a
              href={MAILTO}
              onClick={(e) => { e.preventDefault(); window.location.href = MAILTO }}
              className="font-sans font-black text-cream hover:text-flame transition-colors duration-200"
              style={{ fontSize: '36px', letterSpacing: '-0.02em' }}
            >
              nrto3.c@gmail.com
            </a>
            <span className="font-mono text-[11px] tracking-[3px] text-cream/40 pb-2">
              — INDEX / 04
            </span>
          </motion.div>

          <motion.p
            className="font-sans text-[15px] leading-[1.6] text-cream/55 mt-4"
            style={{ maxWidth: '400px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.85, ease: 'easeOut' }}
          >
            有專案想聊？歡迎直接寄信，通常 24 小時內回覆。
          </motion.p>
        </div>
      </div>

    </section>
  )
}
