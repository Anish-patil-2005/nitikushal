'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { galleryData } from '@/data/data'; // IMPORT DATA

// We duplicate the array to create the seamless infinite loop effect.
const marqueeImages = [...galleryData, ...galleryData];

export default function Gallery({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 bg-emerald-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           <span className="flex items-center justify-center gap-2 text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3">
             <Camera size={18} />
             Our Impact in Pictures
           </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Moments of <span className="text-emerald-600">Change</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A visual journey through our recent initiatives, events, and the lives we have touched together.
          </p>
        </motion.div>
      </div>

      {/* INFINITE SLIDING CAROUSEL (MARQUEE) */}
      <div className="relative w-full">
        
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-50/50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          {/* The motion.div is the track that moves. */}
          <motion.div
            className="flex gap-6 pl-6" 
            animate={{
              x: ["0%", "-50%"], 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,     // Slower duration for smooth landscape flow
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {marqueeImages.map((image, index) => (
              // IMAGE CARD - Landscape Aspect Ratio
              <div 
                key={`${image.src}-${index}`} 
                className="relative w-[400px] h-[250px] md:w-[500px] md:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md group border border-gray-100"
              >
                {/* ACTIVE IMAGE COMPONENT */}
                {/* Ensure paths in data.ts match: /gallery_image/filename.jpg */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 400px, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay and Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white font-bold text-xl">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}