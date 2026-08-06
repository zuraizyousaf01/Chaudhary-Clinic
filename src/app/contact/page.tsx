import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { SlideUp } from "@/components/ui/animations/SlideUp";

export default function ContactPage() {
  const generalWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#021817] text-white overflow-hidden">
        {/* Subtle background gradient blob */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SlideUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Contact & <span className="text-secondary">Location</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
              Get in touch with us for appointments, inquiries, or emergencies. We are here to help.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Emergency Help</h3>
              <p className="text-slate-600 text-sm mb-4">For immediate medical assistance.</p>
              <a href="tel:03008775530" className="text-xl font-bold text-primary hover:text-[var(--primary-hover)] transition-colors">0300 8775530</a>
            </div>

            <div className="bg-[#25D366]/5 rounded-2xl p-6 shadow-sm border border-[#25D366]/20">
              <div className="h-12 w-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp</h3>
              <p className="text-slate-600 text-sm mb-4">For appointments & general inquiries.</p>
              <a href={generalWaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-[#20b858] transition-colors">
                Message Clinic Reception
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Clinic Hours</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex justify-between"><span>Mon - Thu</span> <span className="font-medium">11 AM - 11 PM</span></li>
                <li className="flex justify-between"><span>Friday</span> <span className="font-medium">02 PM - 10 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="font-medium">12 AM - 10:30 PM</span></li>
                <li className="flex justify-between text-red-500"><span>Sunday</span> <span className="font-medium">Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Visit the Clinic
                </h2>
                <p className="text-slate-600">Ground Floor, Khan Medical City, Hall # 1, Nishtar Rd, Al Rahim Colony, Multan</p>
              </div>
              <a
                href="https://maps.app.goo.gl/VU11cFoZono364GH9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors whitespace-nowrap"
              >
                Get Directions on Google Maps
              </a>
            </div>
            <div className="flex-1 min-h-[400px] bg-slate-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.2526569772!2d71.46351059999999!3d30.198425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b369c00bcfcc9%3A0xc3f609b85c184074!2sKhan%20Medical%20City!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
