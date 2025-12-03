'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CallbackFormProps {
  title?: string;
  description?: string;
  onSubmit?: (data: { name: string; phone: string; message: string }) => Promise<void>;
}

export function CallbackForm({ title = 'Request a Confidential Callback', description, onSubmit }: CallbackFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Submit to API endpoint
      const response = await fetch('/api/submit-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit callback request');
      }

      // If custom onSubmit provided, call it as well
      if (onSubmit) {
        await onSubmit(formData);
      }

      setSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#F5F4F0] dark:bg-[#4A6B62]/20 border-2 border-[#D9D3C8] dark:border-[#6B8E7F] rounded-lg p-8 text-center"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-[#6B8E7F] dark:text-[#B4A896] mb-2">
          Thank you!
        </h3>
        <p className="text-[#6B8E7F] dark:text-[#B4A896] mb-4">
          We've received your request and will be in touch shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#6B8E7F] dark:text-[#B4A896] font-semibold hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-[#2A4A3F] rounded-lg shadow-lg p-8"
    >
      {title && (
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-[#D9D3C8] dark:border-[#5A7A6F] bg-white dark:bg-[#4A6B62] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6B8E7F] transition-all"
            placeholder="Your name"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-[#D9D3C8] dark:border-[#5A7A6F] bg-white dark:bg-[#4A6B62] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6B8E7F] transition-all"
            placeholder="(555) 123-4567"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-[#D9D3C8] dark:border-[#5A7A6F] bg-white dark:bg-[#4A6B62] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6B8E7F] transition-all resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#F5F4F0] dark:bg-[#4A6B62]/20 border border-[#D9D3C8] dark:border-[#6B8E7F] text-[#9B8B7E] dark:text-[#D4C5B0] px-4 py-3 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-6 bg-[#6B8E7F] text-white font-semibold rounded-lg hover:bg-[#4A6B62] disabled:bg-[#8A8A82] disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {isLoading ? 'Submitting...' : 'Submit Request'}
        </motion.button>

        {/* Reassurance text */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          Your information is kept confidential. We'll respond within 24 hours.
        </p>
      </form>
    </motion.div>
  );
}
