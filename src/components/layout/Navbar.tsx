'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Our Work', href: '#projects' },
  { name: 'Updates', href: '#updates' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed header (64px/4rem)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
            href="#home" 
            onClick={(e) => handleScrollTo(e, '#home')} 
            className="flex items-center gap-2"
          >
            {/* You can replace this div with an <Image /> tag later */}
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              Nitikushal
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block text-lg font-medium text-gray-700 hover:text-emerald-600 hover:pl-2 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100 my-4" />
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="block w-full text-center bg-emerald-600 text-white py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}