'use client';

import { motion } from 'framer-motion';

interface LocationRatingsSectionProps {
  address: string;
  rating: number;
  reviewCount: string;
  mapUrl?: string;
}

export function LocationRatingsSection({
  address,
  rating,
  reviewCount,
  mapUrl,
}: LocationRatingsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="bg-white dark:bg-[#2A4A3F] rounded-lg border border-gray-200 dark:border-gray-700 p-6 inline-block shadow-sm">
        <div className="flex items-start gap-6">
          {/* Rating */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {rating.toFixed(1)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {reviewCount}
            </p>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-200 dark:bg-gray-700"></div>

          {/* Location */}
          <div className="flex flex-col">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Address
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {address}
                </p>
              </div>
            </div>
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B8E7F] hover:text-[#4A6B62] dark:text-[#8FA99E] dark:hover:text-[#8FA99E] text-sm font-medium"
              >
                View on Map →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
