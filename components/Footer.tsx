import Link from 'next/link'
import { MessageCircle, Mail, ChevronRight, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F1E3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <p className="text-xl font-black tracking-tight mb-3">
              IDM<span className="text-[#2D7DD2]">株式会社</span>
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              制度を知る企業が、コストで勝つ。社会保険料の適正化から補助金・助成金まで、伴走型でサポートします。
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">
              サービス
            </h3>
            <ul className="space-y-3">
              {[
                { label: '社会保険料の適正化', href: '/service/shakai' },
                { label: 'AI導入補助金', href: '/service/hojo' },
                { label: '生成AI研修', href: '/service/hojo' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">
              会社情報
            </h3>
            <ul className="space-y-3">
              {[
                { label: '会社概要', href: '/company' },
                { label: '実績・事例', href: '/#cases' },
                { label: '代表メッセージ', href: '/#representative' },
                { label: 'よくある質問', href: '/#faq' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">
              お問い合わせ
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                <span>〒420-0852<br />静岡県静岡市葵区紺屋町6-6<br />ミツヒサ紺屋町ビル1F</span>
              </div>
              <a
                href="tel:054-221-7755"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={15} />
                054-221-7755
              </a>
              <a
                href="mailto:idm.inc24@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={15} />
                idm.inc24@gmail.com
              </a>
              <a
                href="https://line.me/R/ti/p/@905mbxmt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#06C755] transition-colors"
              >
                <MessageCircle size={15} />
                LINEで相談する
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={15} />
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 IDM株式会社 All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
