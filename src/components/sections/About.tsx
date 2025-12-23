'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { aboutData } from '@/data/data'; // 1. Import Data

export default function About({ id }: { id: string }) {
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-emerald-600 font-semibold tracking-wider uppercase text-sm"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
          >
            Driven by Purpose, <br />
            <span className="text-emerald-600">United by Compassion.</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeIn}
            className="text-gray-600 text-lg"
          >
            Nitikushal is a non-profit organization dedicated to uplifting underprivileged communities through education, healthcare, and sustainable development.
          </motion.p>
        </div>

        {/* 2. FOUNDING STORY (Split Layout) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gray-200 w-full relative group">
                
                {/* UPDATED IMAGE PATH */}
                {/* Ensure you have an image at: public/about_image/founding.jpg (or png) */}
                <Image 
                  src="/about_image/founding.png" 
                  alt="Nitikushal Founding Story - Volunteers" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Floating Badge (From Data) */}
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">{aboutData.badge}</p>
                <p className="text-sm opacity-90">{aboutData.badgeText}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:pl-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Founding Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              It started with a simple idea: that every individual deserves a fair chance at life. Established in 2014, Nitikushal began as a small group of volunteers teaching street children on weekends.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today, we have grown into a full-fledged movement, touching thousands of lives across the region. We believe that true change happens when we empower people to help themselves.
            </p>

            {/* Checklist from Data */}
            <ul className="space-y-4 mb-8">
              {aboutData.checklist.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#team" 
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 hover:gap-3 transition-all group"
            >
              Meet Our Leadership
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* 3. MISSION, VISION, VALUES (Cards mapped from Data) */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {aboutData.cards.map((card, index) => {
            // Apply special styling for the middle card (Vision) to make it pop
            const isMiddle = index === 1;
            
            return (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border text-center relative overflow-hidden ${
                  isMiddle 
                    ? "bg-white border-gray-100 shadow-lg" 
                    : "bg-emerald-50 border-emerald-100"
                }`}
              >
                {/* Special top bar for middle card */}
                {isMiddle && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                )}

                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ${
                  isMiddle 
                    ? "bg-emerald-600 text-white shadow-md" 
                    : "bg-white text-emerald-600"
                }`}>
                  <card.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}