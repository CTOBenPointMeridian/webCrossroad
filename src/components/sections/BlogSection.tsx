'use client';

import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
}

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  posts: BlogPost[];
}

export function BlogSection({
  title = 'Latest News & Articles',
  subtitle = 'Our Blog Articles',
  posts,
}: BlogSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a24] mb-2">
            {title}
          </h2>
          <p className="text-lg text-[#6B8E7F] font-semibold">
            {subtitle}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-[#E8DDD0] hover:border-[#6B8E7F]"
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#F5F1EB] to-[#EFE9E0] flex items-center justify-center">
                <span className="text-5xl">📰</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#6B8E7F]/10 text-[#6B8E7F] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0f2a24] mb-3 line-clamp-2 hover:text-[#6B8E7F] transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="border-t border-[#E8DDD0] pt-4 flex items-center justify-between text-xs text-gray-600">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>

                {/* Read More */}
                <a
                  href={`#blog-${post.id}`}
                  className="mt-4 inline-block text-[#6B8E7F] dark:text-[#8FA99E] font-semibold text-sm hover:gap-2 flex items-center gap-1 group hover:translate-x-1 transition-transform"
                >
                  Read More
                  <span>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#all-blogs"
            className="inline-block px-8 py-3 border-2 border-[#6B8E7F] text-[#6B8E7F] dark:text-[#8FA99E] dark:border-teal-400 rounded-lg font-semibold hover:bg-[#F5F4F0] dark:hover:bg-teal-900/20 transition-colors"
          >
            View All Blogs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
