'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ company: '', name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // メール送信: support@idminc.jp
    const mailtoLink = `mailto:support@idminc.jp?subject=${encodeURIComponent(`【お問い合わせ】${formData.company} ${formData.name}様`)}&body=${encodeURIComponent(`会社名: ${formData.company}\nお名前: ${formData.name}\nメールアドレス: ${formData.email}\n\n【お問い合わせ内容】\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F0F4FA] pt-24 pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#2D7DD2] tracking-widest uppercase">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1A2E5C] mt-2 mb-4">
            お問い合わせ
          </h1>
          <p className="text-[#6B7A99]">
            シミュレーション無料。まずはお気軽にご相談ください。
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl p-6 mb-8 space-y-3">
          <div className="flex items-start gap-3 text-sm text-[#1A2E5C]">
            <MapPin size={16} className="text-[#2D7DD2] mt-0.5 flex-shrink-0" />
            <span>〒420-0852 静岡県静岡市葵区紺屋町6-6 ミツヒサ紺屋町ビル1F</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#1A2E5C]">
            <Phone size={16} className="text-[#2D7DD2] flex-shrink-0" />
            <a href="tel:054-221-7755" className="hover:text-[#2D7DD2] transition-colors">054-221-7755</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#1A2E5C]">
            <Mail size={16} className="text-[#2D7DD2] flex-shrink-0" />
            <a href="mailto:support@idminc.jp" className="hover:text-[#2D7DD2] transition-colors">support@idminc.jp</a>
          </div>
        </div>

        {/* LINE CTA */}
        <motion.a
          href="https://line.me/R/ti/p/@905mbxmt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#06C755] text-white rounded-2xl p-5 mb-8 font-bold text-lg shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle size={24} />
          LINEで今すぐ相談する（無料）
        </motion.a>

        <div className="relative flex items-center mb-8">
          <div className="flex-grow border-t border-gray-200" />
          <span className="flex-shrink mx-4 text-sm text-[#6B7A99]">または</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>

        {/* Form */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-10 text-center shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-[#E8F0FB] flex items-center justify-center mx-auto mb-4">
              <Send className="text-[#2D7DD2]" size={28} />
            </div>
            <h2 className="text-xl font-black text-[#1A2E5C] mb-2">
              送信が完了しました
            </h2>
            <p className="text-[#6B7A99]">
              お問い合わせありがとうございます。2営業日以内にご返信いたします。
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#1A2E5C] mb-2">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1A2E5C] focus:outline-none focus:border-[#2D7DD2] transition-colors"
                placeholder="例：IDM株式会社"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1A2E5C] mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1A2E5C] focus:outline-none focus:border-[#2D7DD2] transition-colors"
                placeholder="例：鈴木 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1A2E5C] mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1A2E5C] focus:outline-none focus:border-[#2D7DD2] transition-colors"
                placeholder="例：info@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1A2E5C] mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#1A2E5C] focus:outline-none focus:border-[#2D7DD2] transition-colors resize-none"
                placeholder="ご相談内容をお書きください"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#1A2E5C] text-white py-4 rounded-full font-bold text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              送信する
            </motion.button>
            <p className="text-xs text-center text-[#6B7A99]">
              送信いただいた情報は、お問い合わせへの対応のみに使用します。
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
