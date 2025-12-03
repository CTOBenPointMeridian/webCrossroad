'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Treatment', href: '#treatment' },
  { label: 'Conditions', href: '#conditions' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '/about' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F4F0] dark:bg-[#092534] border-b border-[#d9d3c8] dark:border-[#1a5a6d] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo centered and contact info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 sm:py-3">
          {/* Mobile Menu Button - Left */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors absolute left-4"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
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

          {/* Centered Logo */}
          <Link href="/" className="flex flex-col items-center gap-2">
            <img
              src="/logo.webp"
              alt="Crossroads Healing Center"
              className="w-14 h-14 object-contain"
            />
            <div className="text-center">
              <p className="text-xs font-semibold text-[#6B8E7F] dark:text-[#8FA99E] tracking-widest uppercase">
                Crossroads
              </p>
              <p className="text-xs font-semibold text-[#6B8E7F] dark:text-[#8FA99E] tracking-widest uppercase">
                Healing Center
              </p>
            </div>
          </Link>

          {/* Get Started Button - Right */}
          <div className="hidden sm:block">
            <a
              href="/quiz"
              className="px-6 py-2 bg-[#6B8E7F] text-[#F5F4F0] rounded-lg text-sm font-semibold hover:bg-[#4A6B62] transition-colors"
            >
              GET STARTED
            </a>
          </div>
        </div>

        {/* Navigation Links - Full width */}
        <div className="flex justify-center border-t border-[#d9d3c8] dark:border-[#1a5a6d] py-3">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#6B8E7F] dark:text-[#F5F4F0] hover:text-[#4A6B62] dark:hover:text-[#B4A896] transition-colors uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/quiz"
                className="block px-4 py-2 bg-[#6B8E7F] text-[#F5F4F0] rounded-lg text-sm font-semibold hover:bg-[#4A6B62] transition-colors text-center"
              >
                GET STARTED
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
