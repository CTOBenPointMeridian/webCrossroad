'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

interface TreatmentService {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<IconProps> | string;
}

interface TreatmentServicesSectionProps {
  title?: string;
  subtitle?: string;
  services: TreatmentService[];
}

export function TreatmentServicesSection({
  title = 'Treatment Services',
  subtitle = 'A New Type of Mental Health Treatment in Indiana',
  services,
}: TreatmentServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="treatment" className="py-16 sm:py-24 bg-gradient-to-b from-[#1a3a34] to-[#0f2a24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-[#7BA89A] font-semibold mb-3">
            {subtitle}
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our residential inpatient facility in Indiana offers a five-star rated experience with modern luxury amenities and advanced therapeutic solutions.
          </p>
        </motion.div>

        {/* Services Grid/Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => setActiveIndex(idx)}
              className={`relative p-8 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                activeIndex === idx
                  ? 'border-[#7BA89A] bg-[#2a5450]/40 shadow-xl'
                  : 'border-[#3a5a52] bg-[#1a3a34]/60 hover:border-[#7BA89A] hover:bg-[#2a5450]/50'
              }`}
            >
              {service.icon && (
                <div className="mb-4">
                  {typeof service.icon === 'function' ? (
                    React.createElement(service.icon, { width: 48, height: 48, className: 'text-[#7BA89A]' })
                  ) : (
                    <div className="text-5xl">{service.icon}</div>
                  )}
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href={`#${service.id}`}
                className="inline-flex items-center gap-2 text-[#7BA89A] font-semibold hover:gap-3 transition-all"
              >
                Learn More
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
