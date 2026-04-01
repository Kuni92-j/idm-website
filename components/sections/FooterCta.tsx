'use client'

import Link from 'next/link'
import { MessageCircle, FileText } from 'lucide-react'

export default function FooterCta() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D7DD2, #1ABCFE)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        <p className="text-sm font-bold tracking-widest uppercase text-white/70 mb-4">
          無料相談受付中
        </p>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          まずは、現状をお聞かせください。
        </h2>
        <p className="text-lg text-white/80 mb-10">
          初回ヒアリング・診断は完全無料。<br />
          提案後に進めるかはご判断いただきます。
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://line.me/R/ti/p/@905mbxmt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#06C755] px-8 py-4 rounded-full font-black text-base shadow-lg"
          >
            <MessageCircle size={20} />
            LINEで無料相談
          </a>
          <div>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-[#2D7DD2] transition-colors"
            >
              <FileText size={20} />
              フォームで問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
