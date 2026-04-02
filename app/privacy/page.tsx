import Link from 'next/link'

export const metadata = {
  title: 'プライバシーポリシー | IDM株式会社',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F0F4FA] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            Privacy Policy
          </span>
          <h1 className="text-3xl font-black text-[#1A2E5C] mt-2">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-[#6B7A99] mt-2">最終更新日：2023年1月1日</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm space-y-10 text-[#1A2E5C] leading-relaxed">

          <section>
            <h2 className="text-lg font-black mb-3">1. 基本方針</h2>
            <p className="text-sm text-[#6B7A99]">
              IDM株式会社（以下「当社」）は、お客様の個人情報の保護を重要な社会的責務と認識し、個人情報の適切な取り扱いおよび保護に努めます。当社は個人情報保護法その他関連法令を遵守し、以下のプライバシーポリシーに従って個人情報を管理します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">2. 収集する個人情報</h2>
            <p className="text-sm text-[#6B7A99] mb-2">当社は以下の個人情報を収集することがあります。</p>
            <ul className="text-sm text-[#6B7A99] space-y-1 list-disc list-inside">
              <li>氏名・会社名</li>
              <li>メールアドレス・電話番号</li>
              <li>住所</li>
              <li>お問い合わせ内容</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">3. 利用目的</h2>
            <p className="text-sm text-[#6B7A99] mb-2">収集した個人情報は、以下の目的のために利用します。</p>
            <ul className="text-sm text-[#6B7A99] space-y-1 list-disc list-inside">
              <li>お問い合わせへの回答・連絡</li>
              <li>サービスの提供・契約の履行</li>
              <li>サービス改善・新サービスの開発</li>
              <li>法令に基づく対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">4. 第三者への提供</h2>
            <p className="text-sm text-[#6B7A99]">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示しません。
            </p>
            <ul className="text-sm text-[#6B7A99] space-y-1 list-disc list-inside mt-2">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">5. 個人情報の管理</h2>
            <p className="text-sm text-[#6B7A99]">
              当社は、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などのリスクに対して、合理的な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">6. Cookie（クッキー）の使用</h2>
            <p className="text-sm text-[#6B7A99]">
              当社ウェブサイトではCookieを使用することがあります。Cookieはウェブサイトの利便性向上を目的とするものであり、個人を特定する情報は含まれません。ブラウザの設定によりCookieを無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">7. 個人情報の開示・訂正・削除</h2>
            <p className="text-sm text-[#6B7A99]">
              お客様は、当社が保有する自己の個人情報について、開示・訂正・削除を求めることができます。ご希望の場合は、下記お問い合わせ先までご連絡ください。合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">8. プライバシーポリシーの変更</h2>
            <p className="text-sm text-[#6B7A99]">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は本ページにて公表します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black mb-3">9. お問い合わせ</h2>
            <p className="text-sm text-[#6B7A99]">
              個人情報の取り扱いに関するお問い合わせは、以下の連絡先までお願いいたします。
            </p>
            <div className="mt-3 text-sm text-[#6B7A99] space-y-1">
              <p className="font-bold text-[#1A2E5C]">IDM株式会社</p>
              <p>〒420-0852 静岡県静岡市葵区紺屋町6-6 ミツヒサ紺屋町ビル1F</p>
              <p>TEL：054-221-7755</p>
              <p>Email：support@idminc.jp</p>
            </div>
          </section>

        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2D7DD2] font-bold text-sm hover:underline"
          >
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
