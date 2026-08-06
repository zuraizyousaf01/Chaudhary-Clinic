"use client";

import Link from 'next/link';
import { Phone, Calendar, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
            CC
          </div>
          <span className="text-xl font-bold text-slate-900 hidden sm:block">
            Choudhury Clinic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-slate-600 hover:text-primary transition-colors">Home</Link>
          <Link href="/doctors" className="text-slate-600 hover:text-primary transition-colors">Doctors</Link>
          <Link href="/services" className="text-slate-600 hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="text-slate-600 hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a href="tel:03008775530" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4" />
            <span>0300 8775530</span>
          </a>

          <a
            href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
          >
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:block">Book Appointment</span>
            <span className="sm:hidden">Book</span>
          </a>
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden ml-4 p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-primary font-medium">Home</Link>
          <Link href="/doctors" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-primary font-medium">Doctors</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-primary font-medium">Services</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-primary font-medium">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-primary font-medium">Contact</Link>
          <div className="pt-4 border-t border-slate-200">
            <a href="tel:03008775530" className="flex items-center gap-2 mt-2 p-4 bg-slate-50 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              <span>Emergency: 0300 8775530</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
