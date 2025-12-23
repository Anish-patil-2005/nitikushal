'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Users } from 'lucide-react';
import { teamData } from '@/data/data'; // IMPORT DATA

export default function Team({ id }: { id: string }) {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            <Users size={18} />
            Our Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Meet the <span className="text-emerald-600">Changemakers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-4"
          >
            The dedicated individuals working behind the scenes to make our vision a reality.
          </motion.p>
        </div>

        {/* TEAM GRID */}
       <motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
>
  {teamData.map((member, index) => (
    <motion.div 
      key={index}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <Image 
          src={member.image} 
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6 text-center relative">
        {member.linkedin && (
          <div className="absolute -top-5 right-6">
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2.5 rounded-full shadow-lg hover:bg-emerald-700 transition-colors flex items-center justify-center scale-0 group-hover:scale-100 duration-300"
              title="Connect on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-emerald-600 font-medium text-sm mb-3 uppercase tracking-wide">
          {member.role}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>


      </div>
    </section>
  );
}