import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#021817] text-slate-300 py-12 border-t border-[#042f2e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4 text-white">
              <div className="relative h-24 w-64 flex-shrink-0">
                <Image src="/images/logo.webp" alt="Choudhury Clinic Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Advanced Laparoscopic & Gynecological Care providing state-of-the-art facilities and compassionate healthcare to our community.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/DrWaseemChaudhary1c/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.youtube.com/@choudhuryclinic" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FF0000] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.tiktok.com/@drwaseem334" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-5 w-5 mt-0.5" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Clinic</Link></li>
              <li><Link href="/doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Medical Services</Link></li>
              <li><a href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-primary font-medium">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-white">Emergency (24/7)</p>
                  <a href="tel:03008775530" className="hover:text-white transition-colors">0300 8775530</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-green-500 shrink-0" />
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <a href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+92 336 8775530</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <a href="https://maps.app.goo.gl/VU11cFoZono364GH9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ground Floor, Khan Medical City, Hall # 1, Nishtar Rd, Al Rahim Colony, Multan, 60000, Pakistan</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Clinic Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center border-b border-[#042f2e] pb-2">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-slate-400" /> Monday</span>
                <span className="text-white text-xs">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#042f2e] pb-2">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-slate-400" /> Tue - Thu</span>
                <span className="text-white text-xs">11:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#042f2e] pb-2">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-slate-400" /> Friday</span>
                <span className="text-white text-xs">02:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#042f2e] pb-2">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-slate-400" /> Saturday</span>
                <span className="text-white text-xs">12:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent-red" /> Sunday</span>
                <span className="text-accent-red font-medium text-xs">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-600 flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()} Choudhury Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
