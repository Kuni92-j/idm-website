'use client'

import Link from 'next/link'
import { MessageCircle, FileText } from 'lucide-react'

export default function CtaMid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2E5C] mb-4">
          まず、現状をお聞かせください。
        </h2>
        <p className="text-[#6B7A99] mb-8">
          初回相談は完全無料です。提案後に進めるかはご判断いただきます。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://line.me/R/ti/p/@905mbxmt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg"
          >
            <MessageCircle size={20} />
            LINEで無料相談
          </a>
          <div>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-[#1A2E5C] text-[#1A2E5C] px-8 py-4 rounded-full font-bold text-base hover:bg-[#1A2E5C] hover:text-white transition-colors"
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
