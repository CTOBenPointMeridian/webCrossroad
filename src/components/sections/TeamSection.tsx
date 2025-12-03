'use client';

import { motion } from 'framer-motion';
import { CallbackForm } from '@/components/forms/CallbackForm';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo?: string;
  badge?: string;
}

interface TeamSectionProps {
  title: string;
  description?: string;
  members: TeamMember[];
  showCallbackForm?: boolean;
  callbackFormProps?: {
    title?: string;
    description?: string;
  };
}

export function TeamSection({
  title,
  description,
  members,
  showCallbackForm = true,
  callbackFormProps,
}: TeamSectionProps) {
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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#4A6B62] dark:to-[#2A4A3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-white dark:bg-[#2A4A3F] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Photo */}
                {member.photo ? (
                  <div className="relative h-64 bg-gray-200 dark:bg-[#4A6B62] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badge */}
                    {member.badge && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute top-4 right-4 bg-yellow-400 dark:bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-full text-sm"
                      >
                        {member.badge}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-to-br from-[#F5F4F0] to-[#F5F4F0] dark:from-[#4A6B62] dark:to-[#4A6B62] flex items-center justify-center">
                    <div className="text-6xl text-gray-300 dark:text-gray-600">👤</div>
                  </div>
                )}

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#6B8E7F] dark:text-[#8FA99E] font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callback Form */}
        {showCallbackForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <CallbackForm
              title={callbackFormProps?.title}
              description={callbackFormProps?.description}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
