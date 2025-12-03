'use client';

import { motion } from 'framer-motion';

interface Benefit {
  icon?: string;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  title: string;
  description?: string;
  benefits: Benefit[];
  highlightBenefits?: Array<{ icon?: string; title: string; description: string }>;
  backgroundImage?: string;
}

export function WhyChooseUsSection({
  title,
  description,
  benefits,
  highlightBenefits,
  backgroundImage,
}: WhyChooseUsSectionProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="py-16 sm:py-24 bg-cover bg-center relative overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Benefits List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors"
            >
              {benefit.icon && (
                <div className="flex-shrink-0 text-3xl">{benefit.icon}</div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-100">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted Benefits Cards */}
        {highlightBenefits && highlightBenefits.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlightBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg"
              >
                {benefit.icon && (
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
