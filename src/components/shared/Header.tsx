'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Treatment', href: '#treatment' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Experience', href: '#experience' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#B4A896] backdrop-blur-sm border-b border-[#9D8F7F] shadow-md">
      {/* Top Row */}
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Phone - Left */}
          <div className="hidden sm:flex items-center gap-2 text-[#0f2a24] flex-shrink-0">
            <svg className="w-4 h-4 text-[#6B8E7F]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.585 1.607 2.775 3.191 3.193l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a2 2 0 01-2 2h-1C9.716 19 3 12.284 3 4V3z" />
            </svg>
            <a href="tel:(866) 647-0621" className="text-xs sm:text-sm font-semibold hover:text-[#6B8E7F] transition-colors">
              (866) 647-0621
            </a>
          </div>

          {/* Logo - Center */}
          <Link
            href="/"
            className="flex-1 flex justify-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src="/logo.webp"
              alt="Crossroads Healing Center Logo"
              width={360}
              height={360}
              loading="eager"
              decoding="sync"
              style={{
                width: '360px',
                height: 'auto',
                display: 'block',
              }}
            />
          </Link>

          {/* Get Started Button - Right */}
          <div className="hidden sm:flex flex-shrink-0">
            <a
              href="/quiz"
              className="px-4 sm:px-6 py-2 bg-[#6B8E7F] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#4A6B62] transition-colors"
            >
              GET STARTED
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 hover:bg-[#E8DDD0] rounded-lg transition-colors flex-shrink-0"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#0f2a24]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden sm:block border-t border-[#E8DDD0] bg-[#F5F1EB]/50 py-3">
        <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-center items-center gap-6">
            {navItems.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-6">
                <a
                  href={item.href}
                  className="text-xs sm:text-sm font-medium text-[#6B8E7F] hover:text-[#4A6B62] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
                {idx < navItems.length - 1 && <span className="text-[#D4C5B0]">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden border-t border-[#E8DDD0] bg-[#F5F1EB]/90 backdrop-blur-sm"
        >
          <div className="px-4 py-4 space-y-2 max-w-full mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-[#0f2a24] hover:bg-white hover:text-[#6B8E7F] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-[#E8DDD0] pt-3 mt-3">
              <a
                href="tel:(866) 647-0621"
                className="block px-4 py-2 text-sm font-semibold text-[#6B8E7F] hover:bg-white rounded-lg transition-colors"
              >
                📞 (866) 647-0621
              </a>
              <a
                href="/quiz"
                className="block px-4 py-3 mt-2 bg-[#6B8E7F] text-white rounded-lg text-sm font-semibold hover:bg-[#4A6B62] transition-colors text-center"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
