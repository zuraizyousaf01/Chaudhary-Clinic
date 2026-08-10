"use client";

import Image from 'next/image';

import Link from 'next/link';
import { Phone, Calendar, Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [heroHeight, setHeroHeight] = useState(800);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setHeroHeight(window.innerHeight);
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  let headerClasses = 'bg-[#021817]/95 backdrop-blur-md border-b border-[#042f2e] shadow-sm translate-y-0';
  
  if (isHomePage) {
    if (scrollPos < 50) {
      headerClasses = 'bg-transparent border-transparent translate-y-0';
    } else if (scrollPos < heroHeight - 100) {
      headerClasses = 'bg-transparent border-transparent -translate-y-full';
    }
  }

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-transform duration-500 transition-colors ${headerClasses}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-40 sm:h-20 sm:w-48 flex-shrink-0 scale-100 origin-left sm:scale-125 md:scale-150">
            <Image src="/images/logo.webp" alt="Choudhury Clinic Logo" fill className="object-contain drop-shadow-sm" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="transition-colors text-teal-50 hover:text-white">Home</Link>
          <Link href="/doctors" className="transition-colors text-teal-50 hover:text-white">Doctors</Link>
          <Link href="/services" className="transition-colors text-teal-50 hover:text-white">Services</Link>
          <Link href="/about" className="transition-colors text-teal-50 hover:text-white">About</Link>
          <Link href="/contact" className="transition-colors text-teal-50 hover:text-white">Contact</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a href="tel:03008775530" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-teal-50 hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
            <span>0300 8775530</span>
          </a>

          <a
            href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-4 sm:px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
          >
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:block">Book Appointment</span>
            <span className="sm:hidden">Book Now</span>
          </a>
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden ml-4 p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      </header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#1d242b] flex flex-col md:hidden"
          >
            {/* Top Bar with Close button */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-start p-8"
            >
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-[#8B95A1] hover:text-white transition-all group"
              >
                <span className="text-[15px] font-normal tracking-wide group-hover:tracking-wider transition-all">Close</span>
                <X className="h-[22px] w-[22px] transition-transform duration-300 group-hover:rotate-90" strokeWidth={1.5} />
              </button>
            </motion.div>

            {/* Links Area */}
            <div className="flex-1 grid grid-cols-2 px-8 mt-10">
              <div className="flex flex-col space-y-4">
                {[
                  { label: 'Home', href: '/', active: true },
                  { label: 'Doctors', href: '/doctors' },
                  { label: 'Services', href: '/services' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className={`block text-[28px] sm:text-[32px] tracking-wide transition-colors ${playfair.className} ${link.active ? 'text-white' : 'text-[#8B95A1] hover:text-white'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col pl-4 sm:pl-8 border-l border-[#2a343d]/60">
                <motion.div
                  initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                  transition={{ delay: 0.4, duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="mt-2"
                >
                  <p className="text-[#8B95A1] text-xs font-semibold uppercase tracking-wider mb-2">Emergency</p>
                  <Link 
                    href="tel:03008775530" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`block text-[20px] sm:text-[24px] tracking-wide text-white hover:text-teal-400 transition-colors ${playfair.className}`}
                  >
                    0300 8775530
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-8 pb-14"
            >
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="w-full h-[1px] bg-[#2a343d] mb-7 origin-left"
              ></motion.div>
              <div className="flex items-center gap-5 text-white">
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-gray-300 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-gray-300 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-gray-300 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} href="#" className="hover:text-gray-300 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
