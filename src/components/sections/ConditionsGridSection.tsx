'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

interface Condition {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<IconProps> | string;
}

interface ConditionsGridSectionProps {
  title?: string;
  conditions: Condition[];
}

export function ConditionsGridSection({
  title = 'Conditions We Treat',
  conditions,
}: ConditionsGridSectionProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="conditions" className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F1EB] to-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a24] mb-4">
            {title}
          </h2>
          <a
            href="#all-conditions"
            className="text-[#6B8E7F] font-semibold hover:text-[#4A6B62] transition-colors"
          >
            View All Conditions →
          </a>
        </motion.div>

        {/* Conditions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {conditions.map((condition) => (
            <motion.div
              key={condition.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full border border-[#E8DDD0] hover:border-[#6B8E7F]">
                {/* Icon area */}
                {condition.icon && (
                  <div className="h-32 bg-gradient-to-br from-[#F5F1EB] to-[#EFE9E0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {typeof condition.icon === 'function' ? (
                      React.createElement(condition.icon, { width: 56, height: 56, className: 'text-[#6B8E7F]' })
                    ) : (
                      <div className="text-5xl">{condition.icon}</div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0f2a24] mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {condition.description}
                  </p>
                  <a
                    href={`#${condition.id}`}
                    className="text-[#6B8E7F] font-semibold text-sm hover:gap-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
