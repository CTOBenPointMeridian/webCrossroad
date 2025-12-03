'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
  address?: string;
  phone?: string;
  phoneLocal?: string;
  email?: string;
  navLinks?: Array<{ label: string; href: string }>;
}

const defaultNavLinks = [
  { label: 'Treatment', href: '#treatment' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export function Footer({
  address,
  phone = '(844) 523-4502',
  phoneLocal,
  email = 'info@crossroadsin.com',
  navLinks = defaultNavLinks,
}: FooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-[#4A6B62] dark:bg-[#2A4A3F] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#6B8E7F] flex items-center justify-center">
                <span className="text-white font-bold">CH</span>
              </div>
              <span className="font-bold">Crossroads Healing</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing compassionate, evidence-based treatment for addiction and mental health.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#B4A896] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {navLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#B4A896] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <div className="hover:text-[#B4A896] transition-colors block">
                  <span className="font-semibold text-white">Admissions</span>
                  <div>
                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-[#B4A896]">
                      {phone}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#B4A896] transition-colors block"
                >
                  <span className="font-semibold text-white">Email</span>
                  <div className="break-all">{email}</div>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#5A7A6F] pt-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 text-sm border-t border-[#5A7A6F] pt-8"
          >
            <p>
              &copy; {new Date().getFullYear()} Crossroads Healing Center. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              If you or a loved one is struggling with addiction or mental health, we're here to help.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
