'use client'

import { Bot, ArrowRight } from 'lucide-react'

const cases = [
  {
    type: '広告代理店',
    count: '10名',
    cost: '400万円',
    subsidy: '約396万円',
    actual: '約4万円',
  },
  {
    type: '介護・医療',
    count: '15名',
    cost: '600万円',
    subsidy: '約594万円',
    actual: '約6万円',
  },
  {
    type: '不動産',
    count: '5名',
    cost: '200万円',
    subsidy: '約198万円',
    actual: '約2万円',
  },
]

export default function Service3() {
  return (
    <section className="py-24 bg-[#F0F4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
              Service 03
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
              生成AI研修
            </h2>
            <p className="text-[#6B7A99] max-w-xl mx-auto">
              助成金を活用することで、研修費用の大半をカバー。実質数万円の負担で社員全員が生成AIを習得できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div
                key={c.type}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#E8F0FB]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F0FB] flex items-center justify-center">
                    <Bot className="text-[#2D7DD2]" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-[#1A2E5C]">{c.type}</p>
                    <p className="text-xs text-[#6B7A99]">{c.count}参加</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-[#6B7A99]">研修費用</span>
                    <span className="font-bold text-[#1A2E5C]">{c.cost}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-[#6B7A99]">助成額</span>
                    <span className="font-bold text-[#2D7DD2]">{c.subsidy}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-bold text-[#1A2E5C]">実質負担</span>
                    <span className="text-xl font-black text-[#C9963A]">{c.actual}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs text-[#2D7DD2] font-bold">
                  <ArrowRight size={14} />
                  助成金活用で大幅コスト削減
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
