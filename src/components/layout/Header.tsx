"use client";

import Image from 'next/image';

import Link from 'next/link';
import { Phone, Calendar, Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
    <header className={`sticky top-0 z-50 w-full transition-transform duration-500 transition-colors ${headerClasses}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-40 sm:h-20 sm:w-48 flex-shrink-0 scale-100 origin-left sm:scale-125 md:scale-150">
            <Image src="/images/logo.png" alt="Choudhury Clinic Logo" fill className="object-contain drop-shadow-sm" />
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

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#042f2e] bg-[#021817] px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-teal-50 hover:text-white font-medium">Home</Link>
          <Link href="/doctors" onClick={() => setMobileMenuOpen(false)} className="block text-teal-50 hover:text-white font-medium">Doctors</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-teal-50 hover:text-white font-medium">Services</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-teal-50 hover:text-white font-medium">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-teal-50 hover:text-white font-medium">Contact</Link>
          <div className="pt-4 border-t border-[#042f2e]">
            <a href="tel:03008775530" className="flex items-center gap-2 mt-2 p-4 bg-[#042f2e]/50 rounded-lg text-teal-50 font-medium hover:bg-[#042f2e] transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span>Emergency: 0300 8775530</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
