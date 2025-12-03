'use client';

import { motion } from 'framer-motion';

interface Feature {
  image?: string;
  overline?: string;
  title: string;
  description: string;
  icon?: string;
}

interface FeatureCardsSectionProps {
  features: Feature[];
  title?: string;
  description?: string;
  layout?: 'grid' | 'carousel';
  columns?: 2 | 3 | 4;
}

export function FeatureCardsSection({
  features,
  title,
  description,
  layout = 'grid',
  columns = 3,
}: FeatureCardsSectionProps) {
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

  const gridColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#4A6B62] dark:to-slate-950">
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
            {title && <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>}
            {description && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{description}</p>}
          </motion.div>
        )}

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass[columns]} gap-8`}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="bg-white dark:bg-[#2A4A3F] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image */}
                {feature.image && (
                  <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-[#4A6B62]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Overline */}
                  {feature.overline && (
                    <span className="text-sm font-semibold text-[#6B8E7F] dark:text-[#8FA99E] uppercase tracking-wider mb-2">
                      {feature.overline}
                    </span>
                  )}

                  {/* Icon */}
                  {feature.icon && !feature.image && (
                    <div className="text-4xl mb-4">{feature.icon}</div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    {feature.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-[#6B8E7F] dark:text-[#8FA99E] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
