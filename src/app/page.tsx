import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, Star, MapPin } from "lucide-react";
import reviews from "../../public/data/reviews.json";

export default function Home() {
  const generalWaLink = "https://wa.me/923001775530?text=Hello%20Chaudhary%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20OPD%20time%20slots.";
  const lapWaLink = "https://wa.me/923001775530?text=Hello%20Chaudhary%20Clinic%2C%20I%20want%20to%20book%20a%20consultation%20with%20the%20Laparoscopic%20Surgery%20Specialist.";
  const gynWaLink = "https://wa.me/923001775530?text=Hello%20Chaudhary%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20consultation%20with%20the%20Gynecology%20%26%20Obstetrics%20Specialist.";

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-theme-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/facility/clinic-building.jpg')] bg-cover bg-center" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 font-medium text-sm mb-8 border border-red-500/20">
            <Phone className="h-4 w-4" />
            24/7 Emergency Care: 0300 8775530
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
            Advanced Laparoscopic & <br className="hidden md:block" />
            <span className="text-secondary">Gynecological Care</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            Providing state-of-the-art surgical facilities and compassionate maternity care in a clean, modern environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={generalWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[#20b858] transition-all hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-theme-dark px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Specialists Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Laparoscopic Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-200 transition-transform hover:-translate-y-1 duration-300">
            <div className="h-48 bg-slate-200 relative">
              <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600">
                [Laparoscopic Specialist Photo]
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Laparoscopic Surgery</h3>
              <p className="text-slate-600 mb-6 flex-1">
                Minimally invasive procedures for gallbladder, hernia, appendectomy, and diagnostic laparoscopy with fast recovery times.
              </p>
              <a
                href={lapWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
              >
                Consult Surgeon
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Gynecology Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-200 transition-transform hover:-translate-y-1 duration-300">
            <div className="h-48 bg-slate-200 relative">
              <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600">
                [Gynecology Specialist Photo]
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Gynecology & Obstetrics</h3>
              <p className="text-slate-600 mb-6 flex-1">
                Comprehensive care for women, including prenatal care, high-risk pregnancy management, and PCOS treatment.
              </p>
              <a
                href={gynWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
              >
                Consult Gynecologist
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">State of the Art Facilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our clinic is equipped with modern, modular operation theaters and hygienic recovery rooms to ensure the best care.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden relative shadow-md">
             <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600 text-sm font-medium">
                [Operation Theater Photo]
              </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden relative shadow-md">
             <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600 text-sm font-medium">
                [Reception Photo]
              </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden relative shadow-md">
             <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600 text-sm font-medium">
                [Clinic Building Photo]
              </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Patient Reviews</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Read what our patients have to say about their experience at Chaudhary Clinic.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-3 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm mb-4 max-h-32 overflow-y-auto pr-2 flex-grow">"{review.reviewText}"</p>
                <div className="mt-auto border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{review.patientName}</p>
                  <p className="text-xs text-slate-600">{review.visitReason} • {review.relativeTime}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/VU11cFoZono364GH9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Read All Reviews on Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-10 flex flex-col justify-center bg-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-slate-300 text-sm">Ground Floor, Khan Medical City, Hall # 1, Nishtar Rd, Al Rahim Colony, Multan, 60000, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Appointments</h4>
                    <p className="text-slate-300 text-sm mb-4">Walk-ins welcome, but booking in advance via WhatsApp is recommended to avoid waiting.</p>
                    <a
                      href={generalWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-bold text-white hover:bg-[#20b858] transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 h-[400px] lg:h-auto bg-slate-200">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.2526569772!2d71.46351059999999!3d30.198425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b369c00bcfcc9%3A0xc3f609b85c184074!2sKhan%20Medical%20City!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
         </div>
      </section>
    </div>
  );
}
