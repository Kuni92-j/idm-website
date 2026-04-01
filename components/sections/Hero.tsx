'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, FileText, ChevronDown } from 'lucide-react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-[#E8F0FB] animate-pulse" />
    </div>
  ),
})

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView ? end : 0}
      {suffix}
    </motion.span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '1,000', suffix: '社以上', label: '支援実績' },
    { value: '5', suffix: '年', label: '実績年数' },
    { value: '95', suffix: '%以上', label: '補助金採択率' },
  ]

  return (
    <section className="relative min-h-screen bg-[#F0F4FA] flex items-center overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm font-bold text-[#2D7DD2] mb-4 tracking-widest uppercase"
            >
              社会保険料の適正化 / 補助金 / 生成AI研修
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl sm:text-6xl font-black text-[#1A2E5C] leading-tight mb-6"
              style={{ fontWeight: 900 }}
            >
              <span className="block">制度を知る企業が、</span>
              <span className="block">コストで勝つ。</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-base text-[#6B7A99] leading-relaxed mb-8 max-w-lg"
            >
              社会保険料の適正化から補助金・助成金の活用まで。複雑な制度を整理し、御社に合った選択肢を提案する伴走型パートナー。
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="https://line.me/R/ti/p/@905mbxmt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-4 rounded-full font-bold text-base shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={20} />
                LINEで無料相談
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-[#1A2E5C] text-[#1A2E5C] px-6 py-4 rounded-full font-bold text-base hover:bg-[#1A2E5C] hover:text-white transition-colors"
                >
                  <FileText size={20} />
                  フォームで問い合わせ
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#1A2E5C]">
                    {stat.value}
                    <span className="text-lg">{stat.suffix}</span>
                  </p>
                  <p className="text-xs text-[#6B7A99] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Spline 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] w-full"
          >
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-[#6B7A99]"
      >
        <span className="text-xs tracking-widest font-bold">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
