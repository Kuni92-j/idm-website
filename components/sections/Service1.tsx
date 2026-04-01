'use client'

import { CheckCircle } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: '無料ヒアリング',
    desc: '現状の従業員数・給与体系・業種などをお聞きします',
  },
  {
    num: '02',
    title: '現状診断・見直し余地の確認',
    desc: '専門家が状況を確認し見直し余地を整理します',
  },
  {
    num: '03',
    title: '提案内容のご説明・ご判断',
    desc: '具体的な提案後、進めるかはご判断に委ねます',
  },
  {
    num: '04',
    title: '実施サポート・アフターフォロー',
    desc: '手続きから定着まで伴走型でサポートします',
  },
]

const targets = [
  '従業員5名以上',
  '年間人件費3,000万円以上',
  '給与体系を数年変えていない',
  '役員報酬の設計が古い',
  '複数業態を持つ法人',
]

export default function Service1() {
  return (
    <section id="service" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
              Service 01
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
              社会保険料の適正化と
              <br className="sm:hidden" />
              給与体系見直し
            </h2>
            <p className="text-[#6B7A99] max-w-xl mx-auto">
              法令の範囲内で給与体系・報酬設計を最適化。専門家が一社一社の実態に合わせた提案を行います。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Steps */}
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#E8F0FB] flex flex-col items-center justify-center">
                    <span className="text-xs font-bold text-[#2D7DD2]">STEP</span>
                    <span className="text-sm font-black text-[#1A2E5C]">{step.num}</span>
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-[#1A2E5C] mb-1">{step.title}</p>
                    <p className="text-sm text-[#6B7A99]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Target Card */}
            <div className="bg-[#E8F0FB] rounded-3xl p-8">
              <h3 className="text-lg font-black text-[#1A2E5C] mb-6 flex items-center gap-2">
                <CheckCircle className="text-[#2D7DD2]" size={22} />
                こんな企業が対象です
              </h3>
              <div className="flex flex-wrap gap-3">
                {targets.map((target) => (
                  <span
                    key={target}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-bold text-[#1A2E5C] shadow-sm border border-[#2D7DD2]/20"
                  >
                    {target}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-5 bg-white rounded-2xl border border-[#2D7DD2]/10">
                <p className="text-xs text-[#6B7A99] mb-1">初回相談</p>
                <p className="text-xl font-black text-[#1A2E5C]">
                  完全無料・ノーリスク
                </p>
                <p className="text-sm text-[#6B7A99] mt-2">
                  提案後に進めるかはご判断に委ねます。押し売り一切なし。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
