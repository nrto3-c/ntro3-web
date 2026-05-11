'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
const stats = [
  { value: '32+', label: '完成案件' },
  { value: '98%', label: '客戶回購率' },
  { value: '5yr', label: '設計經驗' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

function GeometricBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -100])
  const y2 = useTransform(scrollY, [0, 600], [0, -50])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-100 opacity-60 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pink-100 opacity-50 blur-3xl"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-50 opacity-40 blur-3xl" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon points="900,40 1020,200 900,360 780,200" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
        <polygon points="960,0 1120,200 960,400 800,200" fill="none" stroke="#7c3aed" strokeWidth="1" />
        <polygon points="60,380 170,500 60,620 -50,500" fill="none" stroke="#ec4899" strokeWidth="1" />
        <line x1="550" y1="0" x2="1100" y2="450" stroke="#7c3aed" strokeWidth="0.8" />
        <line x1="0" y1="250" x2="380" y2="700" stroke="#ec4899" strokeWidth="0.8" />
      </svg>
    </div>
  )
}

function playBubble() {
  const ctx = new AudioContext()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.type = 'sine'
  osc.frequency.setValueAtTime(900, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.12)

  gain.gain.setValueAtTime(0.25, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18)

  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.2)
  osc.onended = () => ctx.close()
}

function BrowserMockup() {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white w-full">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono">
          your-own.web
        </div>
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-base leading-none">
          ✦
        </span>
      </div>
      <div className="bg-gray-50 p-6 space-y-5">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <div className="h-2.5 w-16 bg-gray-800 rounded-full" />
          <div className="flex gap-2">
            <div className="h-2.5 w-10 bg-gray-300 rounded-full" />
            <div className="h-2.5 w-10 bg-gray-300 rounded-full" />
            <div className="h-2.5 w-14 bg-purple-400 rounded-full" />
          </div>
        </div>

        {/* Hero area */}
        <div className="grid grid-cols-5 gap-4 pt-1">
          <div className="col-span-3 space-y-2.5">
            <div className="h-4 w-full bg-white rounded shadow-sm border border-gray-100" />
            <div className="h-4 w-full bg-gradient-to-r from-pink-300 to-purple-400 rounded" />
            <div className="h-2.5 w-4/5 bg-gray-200 rounded-full" />
            <div className="h-2.5 w-3/5 bg-gray-200 rounded-full" />
            <div className="flex gap-2 pt-1">
              <motion.button
                onClick={playBubble}
                whileTap={{ scale: 0.88 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="h-7 w-20 bg-purple-500 rounded-full cursor-pointer"
              />
              <div className="h-7 w-16 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-16 w-full bg-gray-200 rounded-xl" />
            <div className="h-3 w-4/5 bg-gray-200 rounded-full" />
            <div className="h-3 w-3/5 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Cards row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-2">
            <div className="h-14 w-full bg-gray-200 rounded-lg" />
            <div className="h-2 w-3/4 bg-gray-300 rounded-full" />
            <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-14 w-full bg-purple-100 rounded-lg" />
            <div className="h-2 w-3/4 bg-gray-300 rounded-full" />
            <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-14 w-full bg-pink-100 rounded-lg" />
            <div className="h-2 w-3/4 bg-gray-300 rounded-full" />
            <div className="h-2 w-1/2 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex justify-between items-center pt-1">
          <div className="h-2 w-20 bg-gray-200 rounded-full" />
          <div className="flex gap-2">
            <div className="h-2 w-8 bg-gray-200 rounded-full" />
            <div className="h-2 w-8 bg-gray-200 rounded-full" />
            <div className="h-2 w-8 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}


export function Hero() {
  const [showRight, setShowRight] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowRight(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 py-24">
      <GeometricBackground />

      <div className="max-w-6xl mx-auto w-full">
        <LayoutGroup>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left column — shifts left when right appears via layout animation */}
            <motion.div
              layout="position"
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex-1 min-w-0"
            >
              <motion.div variants={containerVariants} initial="hidden" animate="show">
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="inline-flex items-center gap-2 border border-purple-200 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    台灣接案設計師
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-6xl md:text-7xl text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 550 }}
                >
                  鑄風成塔
                  <br />
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    把想像化為真實
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-500 text-lg mb-8 leading-relaxed"
                >
                  從聆聽開始，量身打造你的品牌網站。
                  <br />
                  讓作品說話，讓客戶信任。
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4 flex-wrap mb-10">
                  <Link
                    href="#projects"
                    className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors text-base"
                  >
                    看看作品
                  </Link>
                  <Link
                    href="#contact"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors text-base"
                  >
                    聯絡我
                  </Link>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex gap-10 pt-6 border-t border-gray-100"
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right column — appears on scroll */}
            <AnimatePresence>
              {showRight && (
                <motion.div
                  key="hero-right"
                  layout
                  className="hidden lg:block flex-1 min-w-0"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  <BrowserMockup />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}
