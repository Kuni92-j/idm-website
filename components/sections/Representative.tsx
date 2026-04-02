'use client'

import { Quote } from 'lucide-react'

export default function Representative() {
  return (
    <section id="representative" className="py-24 bg-[#F0F4FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            Representative
          </span>
          <h2 className="text-2xl font-black text-[#1A2E5C] mt-2 mb-8">
            代表メッセージ
          </h2>

          <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
            <Quote className="absolute -top-4 -left-4 text-[#E8F0FB]" size={56} />
            <p className="text-[#1A2E5C] leading-[2] text-base relative z-10">
              経営者の方から「うちは大丈夫だろうか」とご相談をいただくたびに、私たちは一社一社の実態を丁寧に確認することから始めます。<br />
              制度は複雑で、正解は会社によって異なります。<br />
              だからこそ、申請のサポートをするだけでなく、御社の状況を整理し、活用できる制度を一緒に考える伴走者でありたいと思っています。<br />
              まず「相談して良かった」と感じていただくこと。<br />
              それが私たちの出発点です。
            </p>
            <p className="text-[#1A2E5C] leading-[2] text-base relative z-10 mt-6">
              今の時代、AIは今後すべての企業にとって必須のスキルとなり、使いこなした企業こそが競争優位を築く財産になります。<br />
              AIの導入支援と会社のキャッシュフロー改善、この両面から中小企業を支援できる企業でありたい。<br />
              それがIDM株式会社の使命です。
            </p>

            <div className="mt-8 pt-6 border-t border-[#E8F0FB] flex items-center gap-4">
              <div>
                <p className="text-sm text-[#6B7A99]">IDM株式会社</p>
                <p className="text-lg font-black text-[#1A2E5C]">
                  代表取締役 鈴木邦康
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
