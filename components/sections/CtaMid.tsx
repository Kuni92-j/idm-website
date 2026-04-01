'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, FileText } from 'lucide-react'

export default function CtaMid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2E5C] mb-4">
          まず、現状をお聞かせください。
        </h2>
        <p className="text-[#6B7A99] mb-8">
          初回相談は完全無料です。提案後に進めるかはご判断いただきます。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://line.me/R/ti/p/@905mbxmt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={20} />
            LINEで無料相談
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-[#1A2E5C] text-[#1A2E5C] px-8 py-4 rounded-full font-bold text-base hover:bg-[#1A2E5C] hover:text-white transition-colors"
            >
              <FileText size={20} />
              フォームで問い合わせ
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
