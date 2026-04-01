import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'IDM株式会社 | 社会保険料の適正化・補助金・生成AI研修',
  description:
    '社会保険料の適正化から補助金・助成金の活用まで。複雑な制度を整理し、御社に合った選択肢を提案する伴走型パートナー。支援1,000社以上・補助金採択率95%以上。',
  openGraph: {
    title: 'IDM株式会社 | 制度を知る企業が、コストで勝つ。',
    description:
      '社会保険料の適正化から補助金・助成金の活用まで。伴走型パートナーとして御社の経営を支援します。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
