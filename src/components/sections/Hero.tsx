'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { heroData } from '@/data/data'; // 1. Import the data

export default function Hero({ id }: { id: string }) {
  
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white pt-16"
    >
      
      {/* Background Decorative Elements (Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Tagline from Data */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {heroData.tagline}
            </motion.div>
            
            {/* Headline from Data */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              {/* We render the headline. To keep the specific color style, we can split it or apply the gradient to all. 
                  Here, applying gradient to the full text for a modern look. */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-emerald-800 to-emerald-600">
                {heroData.headline}
              </span>
            </motion.h1>

            {/* Subheadline from Data */}
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {heroData.subheadline}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary Button */}
              <a 
                href="#about" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                Know More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary Button */}
              <a 
                href="#contact" 
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
              >
                Join Our Mission
              </a>
            </motion.div>

            {/* Quick Stats Strip - Mapped Dynamically */}
            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-3 gap-8">
              {heroData.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Main Hero Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-square rotate-2 hover:rotate-0 transition-transform duration-500">
               <Image 
                 src={heroData.image}
                 alt="Nitikushal NGO Volunteers" 
                 fill
                 priority 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
               
               {/* Optional Caption Overlay */}
               <div className="absolute bottom-6 left-6 text-white z-10">
                 <p className="font-bold text-lg">Community First</p>
                 <p className="text-sm opacity-90">Building a better future together.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-emerald-600 cursor-pointer z-10"
      >
        <ChevronDown size={32} />
      </motion.a>

    </section>
  );
}