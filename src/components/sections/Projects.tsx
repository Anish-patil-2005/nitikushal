'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Tag, Briefcase, X } from 'lucide-react';
import { projectsData } from '@/data/data';

// Define the type for your project data (Optional, helps TS)
type Project = typeof projectsData[0];

export default function Projects({ id }: { id: string }) {
  
  // State to track which project is currently clicked
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Animation Variants for the Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            <Briefcase size={18} />
            Our Initiatives
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Projects that <span className="text-emerald-600">Create Impact</span>
          </motion.h2>
          <p className="text-gray-600 mt-4">
            From grassroots initiatives to large-scale campaigns, explore the work we are doing to build a better tomorrow.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              // Add click handler to the whole card
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              
              {/* IMAGE WRAPPER */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                    project.status === "Ongoing" ? "bg-emerald-600" : "bg-gray-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                  <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    <Tag size={12} /> {project.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Truncated description for the card */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                    Read Full Story
                    <ArrowUpRight size={16} />
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW ALL BUTTON */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all">
            View All Projects
          </button>
        </div> */}

      </div>

      {/* ------------------------------------------- */}
      {/* PROJECT DETAILS MODAL          */}
      {/* ------------------------------------------- */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto relative flex flex-col"
              >
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-800 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Modal Image */}
                <div className="relative w-full h-64 sm:h-80 flex-shrink-0">
                   <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-emerald-600 px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 space-y-6">
                  
                  {/* Meta Data Row */}
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600 border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-emerald-600" />
                      <span className="font-medium">Started:</span> {selectedProject.year}
                    </div>
                    <div className="flex items-center gap-2">
                       <Briefcase size={18} className="text-emerald-600" />
                       <span className="font-medium">Status:</span> {selectedProject.status}
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="prose prose-emerald max-w-none text-gray-600 leading-relaxed">
                    <p>{selectedProject.description}</p>
                    <p>{selectedProject.details}</p>
                    {/* If you add a 'longDescription' field to your data later, use that here instead */}
                  </div>

                  {/* Modal Footer */}
                  <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      Close
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}