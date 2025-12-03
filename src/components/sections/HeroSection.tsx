'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  breadcrumbs?: Array<{ label: string; href?: string }>;
  label?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  cta?: {
    text: string;
    href: string;
  };
}

export function HeroSection({
  breadcrumbs = [],
  label,
  title,
  subtitle,
  description,
  image,
  cta,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/peaceful-view-sunset-light.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-sm text-white/70"
          >
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-white/50">/</span>}
                <a href={crumb.href || '#'} className="hover:text-white transition-colors">
                  {crumb.label}
                </a>
              </div>
            ))}
          </motion.div>
        )}

        {/* Label */}
        {label && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block"
          >
            <span className="px-4 py-2 bg-transparent text-white text-sm font-medium">
              {label}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/90 mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-white/80 mb-8 max-w-2xl"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {cta && (
            <a
              href={cta.href}
              className="px-8 py-3 bg-[#7BA89A] text-white font-semibold rounded-full hover:bg-[#6A9789] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              {cta.text}
            </a>
          )}
        </motion.div>

        {/* Side image */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12"
          >
            <img
              src={image}
              alt="Hero"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
