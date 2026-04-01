'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '社会保険料の適正化は違法ではないですか？',
    a: '法令の範囲内で給与体系・報酬設計を見直す取り組みです。脱法的な手法は一切用いません。専門家が法令に則った方法で、適正な範囲での最適化をご提案します。',
  },
  {
    q: '無料相談は本当に無料ですか？',
    a: '初回のヒアリング・診断は完全無料です。提案後に進めるかはご判断いただきます。押し売りや無理な勧誘は一切行いません。',
  },
  {
    q: '補助金の採択は保証されますか？',
    a: '採択の保証はできません。当社支援実績では95%以上の採択率となっています。審査基準を踏まえた申請書作成で、採択可能性を最大化します。',
  },
  {
    q: 'どのような業種でも対応できますか？',
    a: '飲食・建設・医療・介護・不動産など幅広い業種の実績があります。業種ごとの特性を踏まえた最適なご提案が可能です。まずはご相談ください。',
  },
]

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border border-[#E8F0FB] rounded-2xl overflow-hidden bg-white"
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D7DD2] text-white text-sm font-black flex items-center justify-center">
            Q
          </span>
          <span className="font-bold text-[#1A2E5C] leading-relaxed">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          {open ? (
            <Minus className="text-[#2D7DD2]" size={20} />
          ) : (
            <Plus className="text-[#2D7DD2]" size={20} />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8F0FB] text-[#2D7DD2] text-sm font-black flex items-center justify-center">
                A
              </span>
              <p className="text-[#6B7A99] leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2">
            よくある質問
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
