'use client';

import { motion } from 'framer-motion';

interface InsurancePartnersSectionProps {
  title?: string;
  logos: Array<{ name: string; logo: string }>;
}

export function InsurancePartnersSection({
  title = 'Accepted Insurance Partners',
  logos,
}: InsurancePartnersSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#4A6B62] dark:to-[#2A4A3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          {title}
        </motion.h2>

        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12"
        >
          {logos.map((partner, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {typeof partner.logo === 'string' && partner.logo.startsWith('<') ? (
                <div
                  dangerouslySetInnerHTML={{ __html: partner.logo }}
                  className="h-12 flex items-center"
                />
              ) : (
                <div className="h-12 flex items-center px-6 py-2 bg-white dark:bg-[#2A4A3F] rounded border border-gray-200 dark:border-gray-700">
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {partner.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Reassurance text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mt-12 max-w-2xl mx-auto"
        >
          We accept most major insurance providers. Not sure if your plan is covered?
          Contact us for verification and assistance.
        </motion.p>
      </div>
    </section>
  );
}
