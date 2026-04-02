'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1000, suffix: '社以上', label: '支援実績' },
  { value: 5,    suffix: '年',     label: '実績年数' },
  { value: 95,   suffix: '%以上',  label: '補助金採択率' },
  { value: 20,   suffix: '業種以上', label: '対応業種数' },
]

function useCountUp(target: number, duration: number = 1400, start: boolean = false) {
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

function StatItem({ value, suffix, label, started, delay }: {
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
    <div className="text-center text-white">
      <p className="text-4xl sm:text-5xl font-black mb-2">
        {display}<span className="text-2xl sm:text-3xl">{suffix}</span>
      </p>
      <p className="text-sm font-bold text-blue-200">{label}</p>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #1A2E5C, #2D7DD2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
