import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '社会保険料の適正化 | IDM株式会社',
}

export default function ShakaiPage() {
  return (
    <div className="min-h-screen bg-[#F0F4FA] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            Service 01
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
            社会保険料の適正化と
            <br className="sm:hidden" />給与体系見直し
          </h1>
          <p className="text-[#6B7A99] max-w-xl mx-auto">
            法令の範囲内で給与体系・報酬設計を最適化。専門家が一社一社の実態に合わせた提案を行います。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-black text-[#1A2E5C] mb-6 flex items-center gap-2">
            <CheckCircle className="text-[#2D7DD2]" size={22} />
            こんな企業様に多くご相談いただいています
          </h2>
          <div className="flex flex-wrap gap-3">
            {['従業員5名以上', '年間人件費3,000万円以上', '給与体系を数年変えていない', '役員報酬の設計が古い', '複数業態を持つ法人'].map((t) => (
              <span key={t} className="inline-block bg-[#E8F0FB] text-[#1A2E5C] text-sm font-bold px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://line.me/R/ti/p/@905mbxmt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg"
          >
            <MessageCircle size={20} />
            LINEで無料相談する
          </a>
          <p className="mt-4 text-sm text-[#6B7A99]">
            初回ヒアリング・診断は完全無料です。
          </p>
        </div>
      </div>
    </div>
  )
}
