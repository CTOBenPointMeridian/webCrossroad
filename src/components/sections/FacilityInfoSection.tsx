'use client';

import { motion } from 'framer-motion';

interface FacilityInfo {
  icon: string;
  label: string;
  value: string;
}

interface FacilityInfoSectionProps {
  items: FacilityInfo[];
}

export function FacilityInfoSection({ items }: FacilityInfoSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-12 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-[#4A6B62] dark:to-[#2A4A3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-[#2A4A3F] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
                {item.label}
              </p>
              <p className="text-3xl font-bold text-[#6B8E7F] dark:text-[#8FA99E]">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
