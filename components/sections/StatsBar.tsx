'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 1000, suffix: '社+', label: '支援実績' },
  { value: 5, suffix: '年', label: '実績年数' },
  { value: 95, suffix: '%+', label: '補助金採択率' },
  { value: 10, suffix: '業種+', label: '対応業種数' },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(false)
  const inView = useInView(useRef(null), { once: true })

  useEffect(() => {
    if (!inView || ref.current) return
    ref.current = true
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return <>{count}</>
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [started, setStarted] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!inView || started) return
    setStarted(true)
    stats.forEach((stat, i) => {
      const duration = 2000
      const start = Date.now()
      const step = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounts((prev) => {
          const next = [...prev]
          next[i] = Math.floor(eased * stat.value)
          return next
        })
        if (progress < 1) requestAnimationFrame(step)
      }
      setTimeout(() => requestAnimationFrame(step), i * 150)
    })
  }, [inView, started])

  return (
    <section
      ref={ref}
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, #1A2E5C, #2D7DD2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-4xl sm:text-5xl font-black mb-2">
                {counts[i]}
                {stat.suffix}
              </p>
              <p className="text-sm font-bold text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
