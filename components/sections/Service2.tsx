'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const achievementCards = [
  { industry: '飲食店', amount: '350万円', note: '満額採択' },
  { industry: '建設業', amount: '350万円', note: '満額採択' },
  { industry: 'ネイルサロン', amount: '220万円', note: '採択' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

function BarChart({ inView }: { inView: boolean }) {
  const [ourWidth, setOurWidth] = useState(0)
  const [avgWidth, setAvgWidth] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t1 = setTimeout(() => setOurWidth(95), 300)
    const t2 = setTimeout(() => setAvgWidth(46), 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [inView])

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-bold text-[#1A2E5C]">当社の採択率</span>
          <span className="text-lg font-black text-[#2D7DD2]">95%以上</span>
        </div>
        <div className="h-10 bg-[#E8F0FB] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2D7DD2] rounded-full flex items-center justify-end pr-4 transition-all duration-1000 ease-out"
            style={{ width: `${ourWidth}%` }}
          >
            <span className="text-white text-sm font-bold">95%+</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-bold text-[#6B7A99]">全国平均採択率</span>
          <span className="text-lg font-black text-[#6B7A99]">約46%</span>
        </div>
        <div className="h-10 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6B7A99] rounded-full flex items-center justify-end pr-4 transition-all duration-1000 ease-out"
            style={{ width: `${avgWidth}%` }}
          >
            <span className="text-white text-sm font-bold">46%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Service2() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div custom={0} variants={fadeUp} className="mb-16 text-center">
            <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
              Service 02
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
              AI導入補助金サポート
            </h2>
            <p className="text-[#6B7A99] max-w-xl mx-auto">
              補助金申請の複雑な手続きをワンストップでサポート。全国平均の約2倍の採択率を実現しています。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="text-[#2D7DD2]" size={24} />
                <h3 className="text-lg font-black text-[#1A2E5C]">採択率比較</h3>
              </div>
              <BarChart inView={inView} />
            </motion.div>

            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievementCards.map((card, i) => (
                <motion.div
                  key={card.industry}
                  custom={i + 2}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between border border-[#E8F0FB]"
                >
                  <div>
                    <span className="text-xs font-bold text-[#6B7A99] uppercase">
                      採択実績
                    </span>
                    <p className="text-lg font-black text-[#1A2E5C] mt-1">
                      {card.industry}
                    </p>
                    <span className="inline-block mt-2 text-xs bg-[#E8F0FB] text-[#2D7DD2] font-bold px-3 py-1 rounded-full">
                      {card.note}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-[#2D7DD2]">
                      {card.amount}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
