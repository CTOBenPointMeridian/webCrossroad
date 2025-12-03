'use client';

import { motion } from 'framer-motion';

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#6B8E7F] to-[#8FA99E] dark:from-[#4A6B62] dark:to-[#6B8E7F] text-white py-3 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          {/* Visit Us */}
          <div className="flex items-center gap-2">
            <span className="font-semibold">Visit Us:</span>
            <span>450 Erie Avenue, Connersville, IN 47331</span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-4 bg-[#8B9EA3]"></div>

          {/* Admissions */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Admissions:</span>
              <a
                href="tel:+13178544559"
                className="hover:text-[#D4C5B0] transition-colors font-medium"
              >
                (317) 854-4559
              </a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#9B8B7E]"></div>
            <div className="flex items-center gap-2">
              <a
                href="tel:+18666470621"
                className="hover:text-[#D4C5B0] transition-colors font-medium"
              >
                (866) 647-0621
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-4 bg-[#8B9EA3]"></div>

          {/* Email & Verify */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@crossroadsin.com"
              className="hover:text-[#D4C5B0] transition-colors"
            >
              info@crossroadsin.com
            </a>
            <span>|</span>
            <a href="#verify" className="hover:text-[#B4A896] transition-colors font-medium">
              Verify Benefits
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
