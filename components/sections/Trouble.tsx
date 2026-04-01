import { Clock, SearchX, XCircle, CircleDollarSign, ThumbsDown, HelpCircle } from 'lucide-react'

const troubles = [
  {
    icon: Clock,
    title: '本業以外に手がつけられない',
    desc: '本業で手一杯、補助金申請まで手がまわらない。',
  },
  {
    icon: SearchX,
    title: '申請対象がないと思っている',
    desc: '補助金を申請できる対象ではないと思って、申請してない。',
  },
  {
    icon: XCircle,
    title: '複雑で諦めた',
    desc: '申請を試みたが複雑で諦めた。',
  },
  {
    icon: CircleDollarSign,
    title: '着手金が高い',
    desc: '代行業者にお願いしようと考えたが、本当に通るかわからないのに高い着手金を払いたくない。',
  },
  {
    icon: ThumbsDown,
    title: '思っていたサポートと違った',
    desc: '採択後サポートが終了し、入金まで至らなかった。',
  },
  {
    icon: HelpCircle,
    title: 'その他',
    desc: 'うまく活用できていない理由は様々。まずはご相談ください。',
  },
]

const cashFlowItems = [
  {
    phase: '01',
    title: '現状の資金繰りを「見える化」',
    desc: '今の収支・借入状況・社会保険料負担を整理し、改善余地を把握します。',
  },
  {
    phase: '02',
    title: '社会保険料の適正化で固定費を削減',
    desc: '給与体系・役員報酬の見直しで、毎月の保険料負担を合法的に最適化します。',
  },
  {
    phase: '03',
    title: '補助金・助成金を活用して投資余力を確保',
    desc: 'AI導入・設備投資・人材育成に使える補助金を最大限活用します。',
  },
  {
    phase: '04',
    title: '資金繰りの安定した経営体制へ',
    desc: '固定費削減＋資金調達の両輪で、手元資金に余裕のある経営を実現します。',
  },
]

function DiagramFigure() {
  return (
    <div className="mt-14 mb-2">
      <p className="text-center text-sm font-bold text-[#2D7DD2] tracking-widest uppercase mb-6">
        Figure
      </p>
      <h3 className="text-center text-xl font-black text-[#1A2E5C] mb-10">
        なぜ補助金を活用できていないのか
      </h3>

      {/* Diagram */}
      <div className="relative flex flex-col items-center">
        {/* Center circle */}
        <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-[#1A2E5C] to-[#2D7DD2] flex flex-col items-center justify-center text-white shadow-lg mb-0">
          <span className="text-xs font-bold text-white/70 leading-none">補助金を</span>
          <span className="text-base font-black leading-snug">活用できない</span>
          <span className="text-xs font-bold text-white/70 leading-none">理由</span>
        </div>

        {/* Connector lines + outer boxes */}
        <div className="w-full max-w-2xl mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 relative">
          {/* Vertical line from center down */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-[#2D7DD2]/40" />

          {troubles.slice(0, 5).map((t, i) => {
            const Icon = t.icon
            return (
              <div
                key={i}
                className="bg-white border-2 border-[#E8F0FB] rounded-2xl p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:border-[#2D7DD2] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#E8F0FB] flex items-center justify-center">
                  <Icon className="text-[#2D7DD2]" size={18} />
                </div>
                <p className="text-xs font-black text-[#1A2E5C] leading-snug">{t.title}</p>
                <p className="text-[10px] text-[#6B7A99] leading-relaxed">{t.desc}</p>
              </div>
            )
          })}

          {/* その他 — spans remaining */}
          <div className="bg-[#F0F4FA] border-2 border-dashed border-[#C8D8F0] rounded-2xl p-4 flex flex-col items-center text-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <HelpCircle className="text-[#2D7DD2]" size={18} />
            </div>
            <p className="text-xs font-black text-[#1A2E5C] leading-snug">その他</p>
            <p className="text-[10px] text-[#6B7A99] leading-relaxed">
              うまく活用できていない理由は様々。まずはご相談ください。
            </p>
          </div>
        </div>

        {/* Arrow pointing down */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-[#2D7DD2]/40" />
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#2D7DD2]/60" />
        </div>

        {/* Solution box */}
        <div className="mt-4 bg-gradient-to-r from-[#1A2E5C] to-[#2D7DD2] rounded-2xl px-8 py-5 text-white text-center shadow-md max-w-sm w-full">
          <p className="text-sm font-bold text-white/70 mb-1">Solution</p>
          <p className="text-base font-black">IDMが伴走してすべて解決します</p>
        </div>
      </div>
    </div>
  )
}

export default function Trouble() {
  return (
    <>
      {/* 社長の悩みセクション */}
      <section className="py-24 bg-[#F0F4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
              Trouble
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
              こんなお悩み、ありませんか？
            </h2>
            <p className="text-[#6B7A99] max-w-xl mx-auto">
              多くの中小企業の経営者様から、こういったご相談をいただいています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {troubles.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-[#E8F0FB] flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E8F0FB] flex items-center justify-center">
                    <Icon className="text-[#2D7DD2]" size={20} />
                  </div>
                  <div>
                    <p className="font-black text-[#1A2E5C] text-sm mb-2 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#6B7A99] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Figure / Diagram */}
          <DiagramFigure />

          <div className="mt-12 text-center">
            <p className="text-[#1A2E5C] font-bold text-lg">
              それ、制度の使い方次第で解決できるかもしれません。
            </p>
            <p className="text-[#6B7A99] mt-2">
              IDM株式会社は、複雑な制度を整理して御社に合った選択肢をご提案します。
            </p>
          </div>
        </div>
      </section>

      {/* 資金繰りセクション */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
              Cash Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
              資金繰り改善の流れ
            </h2>
            <p className="text-[#6B7A99] max-w-xl mx-auto">
              社会保険料の削減と補助金の活用を組み合わせることで、手元資金を増やす経営へ。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cashFlowItems.map((item) => (
              <div
                key={item.phase}
                className="bg-[#F0F4FA] rounded-2xl p-7 flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A2E5C] flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-blue-300">STEP</span>
                    <span className="text-sm font-black text-white leading-none">{item.phase}</span>
                  </div>
                </div>
                <div>
                  <p className="font-black text-[#1A2E5C] mb-2">{item.title}</p>
                  <p className="text-sm text-[#6B7A99] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-[#1A2E5C] to-[#2D7DD2] rounded-3xl p-8 text-white text-center">
            <p className="text-lg font-black mb-2">まずは無料で現状診断を受けてみませんか？</p>
            <p className="text-white/80 text-sm mb-6">
              お話を聞くだけでも構いません。ご判断はその後で。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://line.me/R/ti/p/@905mbxmt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full font-bold text-sm shadow"
              >
                LINEで無料相談
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[#1A2E5C] transition-colors"
              >
                フォームで問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
