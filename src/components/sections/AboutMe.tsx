'use client'

import { motion } from 'framer-motion'

const skills: Record<string, string[]> = {
  'iOS · macOS': ['Swift', 'SwiftUI', 'AppKit', 'AVFoundation', 'AudioKit', 'AUv3'],
  'Web':         ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Node.js', 'PostgreSQL'],
  'Tooling':     ['Xcode', 'Figma', 'Git', 'Whisper / CoreML'],
}

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full">

      {/* ══ MOBILE (< 768px) ═══════════════════════════════ */}
      <div className="md:hidden bg-cream text-ink">
        {/* Section header */}
        <div className="bg-ink text-cream flex justify-between items-center px-5" style={{ height: '56px' }}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[3px] font-bold">03 / ABOUT</span>
          </div>
          <span className="font-mono text-[11px] tracking-[3px] text-cream/55">NRTO3</span>
        </div>

        {/* Title block */}
        <div className="px-5 pt-6 pb-5">
          <p className="font-mono text-[11px] text-ink/55 mb-3" style={{ letterSpacing: '5px' }}>
            ↳ ABOUT — A SHORT INTRO
          </p>
          <h2
            className="font-sans font-black text-ink uppercase"
            style={{ fontSize: '38px', lineHeight: 1.0, letterSpacing: '-0.03em' }}
          >
            One developer.<br />
            One studio.<br />
            <span className="text-flame">One pair of hands.</span>
          </h2>
        </div>

        {/* Bio */}
        <div className="px-5 pb-5 font-sans text-[14px] leading-[1.85]" style={{ color: '#1a1a1a' }}>
          <p>
            我是 <b>NRTO3</b>，是來自台灣的獨立開發者。<br />
            從 2020 年開始，嘗試一些產品網頁開發，從 <b>iOS</b>、<b>macOS</b> App 與網頁應用。
          </p>
          <br />
          <p>
            好的網頁是需要慢慢打磨出來，每一次點擊的回饋、每一個錯誤訊息的措辭，都有人在意。
          </p>
          <br />
          <p>
            目前接受 <b>iOS</b> / <b>macOS</b> / <b>Web</b> 全端委託，特別擅長{' '}
            <b>視覺動態</b>、<b>AI 整合</b>、與 <b>中小企業 SaaS</b>。
          </p>
        </div>

        {/* Hairline divider */}
        <div className="mx-5" style={{ height: '1px', backgroundColor: 'rgba(14,14,14,0.2)' }} />

        {/* Skills */}
        <div className="px-5 pt-5 pb-8">
          <p className="font-mono text-[11px] tracking-[3px] text-ink/55 mb-4">
            ↳ TECHNICAL STACK
          </p>
          <div className="flex flex-col" style={{ gap: '18px' }}>
            {Object.entries(skills).map(([category, tags]) => (
              <div key={category}>
                <div
                  className="font-sans font-bold text-[12px] text-flame mb-2"
                  style={{ letterSpacing: '0.04em' }}
                >
                  {category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-[10px] py-1 rounded-full"
                      style={{ letterSpacing: '0.07em', border: '1px solid rgba(14,14,14,0.4)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ DESKTOP (≥ 768px) ══════════════════════════════ */}
      <div
        className="hidden md:block relative w-full bg-cream text-ink"
        style={{ height: '100vh', minHeight: '800px' }}
      >
        {/* Section header */}
        <div className="bg-ink text-cream h-16 flex justify-between items-center px-14 font-mono text-[11px] tracking-[3px]">
          <div className="flex items-center gap-3.5">
            <span className="font-bold">03 / ABOUT</span>
            <span className="text-cream/55">INDEPENDENT DEVELOPER · TAIPEI</span>
          </div>
          <span className="text-cream/55">NRTO3 — INDEPENDENT</span>
        </div>

        {/* Title block */}
        <div className="absolute left-14 right-14" style={{ top: '96px' }}>
          <motion.p
            className="font-mono text-[11px] text-ink/55 mb-4"
            style={{ letterSpacing: '5px' }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            ↳ ABOUT — A SHORT INTRO
          </motion.p>
          <motion.h2
            className="font-sans font-black text-ink uppercase"
            style={{ fontSize: '72px', lineHeight: 0.98, letterSpacing: '-0.035em' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          >
            One developer.<br />
            One studio.{' '}
            <span className="text-flame">One pair of hands.</span>
          </motion.h2>
        </div>

        {/* Two-column */}
        <div
          className="absolute left-14 right-14 grid gap-16"
          style={{ top: '348px', gridTemplateColumns: '1.2fr 1fr' }}
        >
          {/* Left — bio */}
          <motion.div
            className="font-sans text-[15px] leading-[1.85]"
            style={{ color: '#1a1a1a' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <p>
              我是 <b>NRTO3</b>，是來自台灣的獨立開發者。<br />
              從 2020 年開始，嘗試一些產品網頁開發，從 <b>iOS</b>、<b>macOS</b> App 與網頁應用。
            </p>
            <br />
            <p>
              好的網頁是需要慢慢打磨出來，每一次點擊的回饋、每一個錯誤訊息的措辭，都有人在意。
            </p>
            <br />
            <p>
              目前接受 <b>iOS</b> / <b>macOS</b> / <b>Web</b> 全端委託，特別擅長{' '}
              <b>視覺動態</b>、<b>AI 整合</b>、與 <b>中小企業 SaaS</b>。
            </p>
          </motion.div>

          {/* Right — skills */}
          <div>
            <p className="font-mono text-[11px] tracking-[3px] text-ink/55 mb-3">
              ↳ TECHNICAL STACK
            </p>
            <div className="flex flex-col gap-[18px]">
              {Object.entries(skills).map(([category, tags], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
                >
                  <div
                    className="font-sans font-bold text-[12px] text-flame mb-2"
                    style={{ letterSpacing: '0.04em' }}
                  >
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-[10px] py-1 rounded-full"
                        style={{ letterSpacing: '0.07em', border: '1px solid rgba(14,14,14,0.4)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
