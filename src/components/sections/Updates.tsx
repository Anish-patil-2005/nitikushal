'use client';

import { motion } from 'framer-motion';
import { Bell, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { updatesData } from '@/data/data'; // IMPORT DATA

export default function Updates({ id }: { id: string }) {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id={id} className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            <Bell size={18} />
            Latest News
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Stay <span className="text-emerald-600">Updated</span>
          </motion.h2>
          <p className="text-gray-600 mt-4">
            Catch up on our recent activities, upcoming events, and important announcements.
          </p>
        </div>

        {/* UPDATES LIST */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {updatesData.map((item) => (
            <motion.div 
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              
              {/* Date & Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                  <Calendar size={14} className="text-emerald-600" />
                  {item.date}
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded uppercase tracking-wide">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                {item.excerpt}
              </p>

              

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}