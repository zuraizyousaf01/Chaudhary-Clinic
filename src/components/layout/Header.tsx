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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
            <Image src="/images/logo.webp" alt="Choudhary Clinic Logo" fill className="object-contain drop-shadow-sm" />
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
            className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all whitespace-nowrap"
          >
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.facebook.com/DrWaseemChaudhary1c/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[20px] w-[20px]"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/choudhuryclinic/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[20px] w-[20px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} href="https://www.youtube.com/@choudharyclinic" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[20px] w-[20px]"><path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} href="https://www.tiktok.com/@drwaseem334" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg viewBox="0 0 448 512" fill="currentColor" className="h-[18px] w-[18px] mt-0.5"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
