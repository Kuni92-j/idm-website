import type { Metadata } from 'next'
import { TrendingUp, Bot, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI導入補助金・生成AI研修 | IDM株式会社',
}

export default function HojoPage() {
  return (
    <div className="min-h-screen bg-[#F0F4FA] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            Service 02 / 03
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
            AI導入補助金・生成AI研修
          </h1>
          <p className="text-[#6B7A99] max-w-xl mx-auto">
            補助金を活用して、AI導入・研修コストを大幅に削減します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-[#2D7DD2]" size={24} />
              <h2 className="text-lg font-black text-[#1A2E5C]">AI導入補助金</h2>
            </div>
            <p className="text-[#6B7A99] text-sm leading-relaxed">
              提携先を含む支援実績の補助金採択率は95%以上です。採択を保証するものではありません。複雑な申請書類の作成から審査対策まで、ワンストップでサポートします。
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="text-[#2D7DD2]" size={24} />
              <h2 className="text-lg font-black text-[#1A2E5C]">生成AI研修</h2>
            </div>
            <p className="text-[#6B7A99] text-sm leading-relaxed">
              研修料金は1名40万円（税込）を提案基準としています。助成金は対象者・研修内容・支払方法等の要件と審査により支給が決まります。研修内容は業務と目標に合わせて設計します。
            </p>
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
