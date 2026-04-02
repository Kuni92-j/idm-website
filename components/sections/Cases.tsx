'use client'

import { ArrowRight } from 'lucide-react'

const cases = [
  {
    badge: 'フィットネス業',
    scale: '68名・人件費4億円規模',
    issue: '給与体系が複雑で社会保険料の負担が増加',
    proposal: '給与体系の全面見直しと報酬設計の最適化',
    result: '年間コスト大幅削減・従業員満足度向上・還付金額1億円超',
  },
  {
    badge: '歯科医院',
    scale: '20名・人件費1.5億円規模',
    issue: '医療法人の役員報酬設計が非効率',
    proposal: '医療法人特有の報酬体系見直し',
    result: '社会保険料の適正化と税負担の軽減・還付金額4千万円超',
  },
  {
    badge: '建設業',
    scale: '10名・人件費7,000万円規模',
    issue: 'AI導入を検討するも補助金申請が難航',
    proposal: 'IT導入補助金の申請サポート',
    result: '350万円満額採択・DX推進を実現',
  },
  {
    badge: '営業会社',
    scale: '営業マンの能力の差と管理体制難',
    issue: '営業スキルにばらつきがあり、成約率・粗利が安定しない',
    proposal: '助成金活用型AI研修の導入',
    result: '営業スキルの統一化・成約率と粗利の可視化・販路拡大・助成率75%・節税効果',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
              Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
              業種別 支援事例
            </h2>
            <p className="text-[#6B7A99] max-w-xl mx-auto">
              飲食・医療・建設など幅広い業種で実績を積み重ねてきました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <div
                key={c.badge}
                className="bg-[#F0F4FA] rounded-3xl p-7 border border-transparent hover:border-[#2D7DD2]/20 transition-colors"
              >
                <span className="inline-block bg-[#1A2E5C] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                  {c.badge}
                </span>
                <p className="text-xs text-[#6B7A99] mb-4">{c.scale}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-[#6B7A99] mb-1">課題</p>
                    <p className="text-sm text-[#1A2E5C] font-bold">{c.issue}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#6B7A99] mb-1">提案</p>
                    <p className="text-sm text-[#1A2E5C]">{c.proposal}</p>
                  </div>
                  <div className="pt-3 border-t border-white">
                    <p className="text-xs font-bold text-[#2D7DD2] mb-1 flex items-center gap-1">
                      <ArrowRight size={12} />
                      改善イメージ
                    </p>
                    <p className="text-sm font-bold text-[#1A2E5C]">{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
