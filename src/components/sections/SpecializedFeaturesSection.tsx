'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

interface Feature {
  icon: React.ComponentType<IconProps> | string;
  label: string;
}

interface SpecializedFeaturesSectionProps {
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function SpecializedFeaturesSection({
  title,
  description,
  features,
  columns = 3,
}: SpecializedFeaturesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const gridColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F1EB] to-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a24] mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-2 sm:grid-cols-3 ${gridColsClass[columns]} gap-6 sm:gap-8`}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white transition-colors"
            >
              <div className="mb-4">
                {typeof feature.icon === 'function' ? (
                  React.createElement(feature.icon, { width: 48, height: 48, className: 'text-[#6B8E7F]' })
                ) : (
                  <div className="text-5xl">{feature.icon}</div>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#0f2a24]">
                {feature.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
