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

          {/* メッセージ */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
            <Quote className="absolute -top-4 -left-4 text-[#E8F0FB]" size={56} />
            <p className="text-[#1A2E5C] leading-[2] text-base relative z-10">
              経営者の方から「うちは大丈夫だろうか」とご相談をいただくたびに、私たちは<br />
              一社一社の実態を丁寧に確認することから始めます。制度は複雑で、正解は会社によって異なります。だからこそ、申請のサポートをするだけでなく、御社の状況を整理し、活用できる制度を一緒に考える伴走者でありたいと思っています。<br />
              まず「相談して良かった」と感じていただくこと。それが私たちの出発点です。
            </p>
            <p className="text-[#1A2E5C] leading-[2] text-base relative z-10 mt-6">
              今の時代、AIは今後すべての企業にとって必須のスキルとなり、使いこなした企業こそが競争優位を築く財産になります。<br />
              AIの導入支援と会社のキャッシュフロー改善、この両面から中小企業を支援できる企業でありたい。それがIDM株式会社の使命です。
            </p>

            <div className="mt-8 pt-6 border-t border-[#E8F0FB] flex items-center gap-4">
              <div>
                <p className="text-sm text-[#6B7A99]">IDM株式会社</p>
                <p className="text-lg font-black text-[#1A2E5C]">
                  代表取締役CEO 鈴木邦康
                </p>
              </div>
            </div>
          </div>

          {/* プロフィール */}
          <div className="mt-10 bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-sm font-bold text-[#2D7DD2] tracking-widest uppercase mb-6">
              Profile
            </h3>
            <div className="space-y-4 text-sm text-[#6B7A99] leading-relaxed">
              <p>
                <span className="font-black text-[#1A2E5C] text-base">鈴木 邦康</span>
                <span className="ml-3 text-xs bg-[#E8F0FB] text-[#2D7DD2] font-bold px-2 py-0.5 rounded-full">
                  IDM株式会社 代表取締役CEO
                </span>
              </p>
              <p>
                1986年生まれ、静岡県沼津市出身。三兄弟の長男として生まれる。<br />
                カンボジアで飲食店経営を経て、2017年に静岡市にて飲食店を開業。<br />
                会社経営をしているうちに資金繰りや多くの悩みを経験し、これは自分だけではなく多くの中小企業の悩みであることに気付き、財務・国の制度を学び始める。<br />
                自社だけではなく、多くの悩める経営者に制度活用のサポート事業を始め、2023年にIDM株式会社を設立。
              </p>
            </div>

            {/* LIFE MISSION */}
            <div className="mt-8 pt-6 border-t border-[#E8F0FB]">
              <p className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase mb-4">
                Life Mission
              </p>
              <blockquote className="border-l-4 border-[#2D7DD2] pl-5">
                <p className="text-[#1A2E5C] font-bold leading-relaxed mb-3">
                  「AIの導入支援と会社のキャッシュフロー改善、この両面から中小企業を支援できる企業でありたい。」
                </p>
                <p className="text-sm text-[#6B7A99] leading-relaxed">
                  中小企業が抱える悩みを弊社が一任し完全サポート。<br />
                  代表者様が安心して本業の経営に臨める、そんな強い会社を一社でも多くサポートできることを目指す。
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
