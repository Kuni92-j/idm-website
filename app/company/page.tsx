import type { Metadata } from 'next'
import { Building2, User, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '会社概要 | IDM株式会社',
}

const info = [
  { label: '会社名', value: 'IDM株式会社' },
  { label: '代表取締役', value: '鈴木邦康' },
  { label: '所在地', value: '〒420-0852 静岡県静岡市葵区紺屋町6-6 ミツヒサ紺屋町ビル1F' },
  { label: '電話番号', value: '054-221-7755' },
  { label: 'メールアドレス', value: 'idm.inc24@gmail.com' },
  { label: '事業内容', value: '社会保険料適正化コンサルティング、補助金・助成金申請支援、生成AI研修' },
  { label: '支援実績', value: '1,000社以上' },
  { label: '補助金採択率', value: '95%以上（当社実績）' },
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#F0F4FA] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            Company
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2">
            会社概要
          </h1>
        </div>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#1A2E5C] to-[#2D7DD2] p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Building2 size={28} />
              <h2 className="text-2xl font-black">IDM株式会社</h2>
            </div>
            <p className="text-white/80">制度を知る企業が、コストで勝つ。</p>
          </div>

          <div className="divide-y divide-gray-100">
            {info.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-center gap-2 p-6"
              >
                <dt className="w-40 text-sm font-bold text-[#6B7A99] flex-shrink-0">
                  {label}
                </dt>
                <dd className="text-[#1A2E5C] font-bold">{value}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-sm p-8">
          <h3 className="text-lg font-black text-[#1A2E5C] mb-4 flex items-center gap-2">
            <User size={20} className="text-[#2D7DD2]" />
            代表メッセージ
          </h3>
          <p className="text-[#6B7A99] leading-relaxed">
            経営者の方から「うちは大丈夫だろうか」とご相談をいただくたびに、私たちは一社一社の実態を丁寧に確認することから始めます。制度は複雑で、正解は会社によって異なります。だからこそ、申請を代行するだけでなく、御社の状況を整理し、活用できる制度を一緒に考える伴走者でありたいと思っています。まず「相談して良かった」と感じていただくこと。それが私たちの出発点です。
          </p>
          <p className="mt-4 font-black text-[#1A2E5C]">
            代表取締役 鈴木邦康
          </p>
        </div>
      </div>
    </div>
  )
}
