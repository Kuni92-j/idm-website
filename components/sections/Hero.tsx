'use client'

import Link from 'next/link'
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

export default function Hero() {
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
          <div>
            <p className="text-sm font-bold text-[#2D7DD2] mb-4 tracking-widest uppercase">
              社会保険料の適正化 / 補助金 / 生成AI研修
            </p>

            <h1
              className="text-5xl sm:text-6xl font-black text-[#1A2E5C] leading-tight mb-6"
              style={{ fontWeight: 900 }}
            >
              <span className="block">制度を知る企業が、</span>
              <span className="block">コストで勝つ。</span>
            </h1>

            <p className="text-base text-[#6B7A99] leading-relaxed mb-8 max-w-lg">
              社会保険料の適正化から補助金・助成金の活用まで。複雑な制度を整理し、御社に合った選択肢を提案する伴走型パートナー。
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://line.me/R/ti/p/@905mbxmt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-4 rounded-full font-bold text-base shadow-lg"
              >
                <MessageCircle size={20} />
                LINEで無料相談
              </a>
              <div>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border-2 border-[#1A2E5C] text-[#1A2E5C] px-6 py-4 rounded-full font-bold text-base hover:bg-[#1A2E5C] hover:text-white transition-colors"
                >
                  <FileText size={20} />
                  フォームで問い合わせ
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#1A2E5C]">
                    {stat.value}
                    <span className="text-lg">{stat.suffix}</span>
                  </p>
                  <p className="text-xs text-[#6B7A99] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Spline 3D */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
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
