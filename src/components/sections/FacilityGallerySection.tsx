'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FacilityGallerySectionProps {
  title?: string;
  description?: string;
  imageCount?: number;
}

export function FacilityGallerySection({
  title = 'Our Expansive Mental Health Treatment Center in Indiana',
  description = 'At Crossroads Healing Centers of Indiana, we take pride in having created a space where mental wellness is infused in every aspect of our facilities. From our modern semi-private and private en-suites to our copper tubs and sand-tray therapy to our indoor basketball and pickleball courts, our mental health facilities were designed with your wellness in mind.',
  imageCount = 12,
}: FacilityGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const placeholderImages = Array.from({ length: imageCount }, (_, i) => ({
    id: i,
    alt: `Facility Image ${i + 1}`,
  }));

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F1EB] to-[#EFE9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a24] mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            {description}
          </p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            href="#tour"
            className="inline-block mt-8 px-8 py-3 bg-[#6B8E7F] text-white rounded-lg font-semibold hover:bg-[#4A6B62] transition-colors"
          >
            Tour Our Facilities
          </motion.a>
        </motion.div>

        {/* Image Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {placeholderImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(image.id)}
              className="relative h-48 sm:h-56 rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Placeholder image */}
              <div className="w-full h-full bg-gradient-to-br from-[#EFE9E0] to-[#E8DDD0] flex items-center justify-center">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                  📸
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <button className="px-4 py-2 bg-[#6B8E7F] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel controls hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <span>←</span>
            <span>Scroll to explore all facilities</span>
            <span>→</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
