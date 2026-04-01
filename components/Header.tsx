'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'

const navItems = [
  { label: 'サービス', href: '/#service' },
  { label: '実績・事例', href: '/#cases' },
  { label: '会社概要', href: '/company' },
  { label: 'お問い合わせ', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black text-[#1A2E5C] tracking-tight">
              IDM<span className="text-[#2D7DD2]">株式会社</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-[#1A2E5C] hover:text-[#2D7DD2] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* LINE CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://line.me/R/ti/p/@905mbxmt"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#06C755] text-white px-4 py-2 rounded-full text-sm font-bold"
            >
              <MessageCircle size={16} />
              LINEで無料相談
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-[#1A2E5C]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 right-0 bottom-0 w-72 bg-white shadow-xl z-50 md:hidden">
          <nav className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-bold text-[#1A2E5C] hover:text-[#2D7DD2] border-b border-gray-100 pb-4"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://line.me/R/ti/p/@905mbxmt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#06C755] text-white px-4 py-3 rounded-full font-bold mt-4"
            >
              <MessageCircle size={18} />
              LINEで無料相談
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
