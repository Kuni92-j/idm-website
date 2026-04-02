'use client'

import Link from 'next/link'
import { MessageCircle, FileText, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/* ── カウントアップ ── */
function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({
  value, suffix, label, started, delay,
}: {
  value: number; suffix: string; label: string; started: boolean; delay: number
}) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [started, delay])
  const count = useCountUp(value, 1400, active)
  const display = value >= 1000 ? count.toLocaleString() : count.toString()
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-black text-[#1A2E5C]">
        {display}<span className="text-xl">{suffix}</span>
      </p>
      <p className="text-xs text-[#6B7A99] mt-1">{label}</p>
    </div>
  )
}

/* ── 1文字ずつフェードイン ── */
function AnimatedHeading({ lines }: { lines: string[] }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // 行をまたいで文字のインデックスを通算する
  let globalIndex = 0

  return (
    <h1
      ref={ref}
      className="text-5xl sm:text-6xl font-black text-[#1A2E5C] leading-tight mb-6"
      style={{ fontWeight: 900 }}
    >
      {lines.map((line, li) => {
        const chars = Array.from(line)
        return (
          <span key={li} className="block">
            {chars.map((char) => {
              const idx = globalIndex++
              const delay = idx * 60 // 1文字60msずつ
              return (
                <span
                  key={idx}
                  style={{
                    display: 'inline-block',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: visible
                      ? `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
                      : 'none',
                    // 全角スペース・改行が潰れないよう
                    whiteSpace: 'pre',
                  }}
                >
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}

/* ── メイン ── */
export default function Hero() {
  const stats = [
    { value: 1000, suffix: '社以上',  label: '支援実績' },
    { value: 5,    suffix: '年',      label: '実績年数' },
    { value: 95,   suffix: '%以上',   label: '補助金採択率' },
    { value: 20,   suffix: '業種以上', label: '対応業種数' },
  ]

  const statsRef = useRef<HTMLDivElement>(null)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen bg-[#F0F4FA] flex items-center overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center py-20">

          <p className="text-sm font-bold text-[#2D7DD2] mb-4 tracking-widest uppercase">
            社会保険料の適正化 / 補助金 / 生成AI研修
          </p>

          <AnimatedHeading lines={['制度を知る企業が、', 'コストで勝つ。']} />

          <p className="text-base text-[#6B7A99] leading-relaxed mb-8 max-w-xl">
            社会保険料の適正化から補助金・助成金の活用まで。複雑な制度を整理し、御社に合った選択肢を提案する伴走型パートナー。
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="https://line.me/R/ti/p/@905mbxmt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-4 rounded-full font-bold text-base shadow-lg"
            >
              <MessageCircle size={20} />
              LINEで無料相談
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-[#1A2E5C] text-[#1A2E5C] px-6 py-4 rounded-full font-bold text-base hover:bg-[#1A2E5C] hover:text-white transition-colors"
            >
              <FileText size={20} />
              フォームで問い合わせ
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                started={statsStarted}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-[#6B7A99]">
        <span className="text-xs tracking-widest font-bold">SCROLL</span>
        <ChevronDown size={20} />
      </div>
    </section>
  )
}
