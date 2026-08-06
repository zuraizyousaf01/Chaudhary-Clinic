import { CheckCircle2, ShieldPlus, Clock } from "lucide-react";
import { SlideUp } from "@/components/ui/animations/SlideUp";

export default function AboutPage() {
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
              About <span className="text-secondary">Choudhury Clinic</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
              Dedicated to providing advanced surgical and maternal care with a commitment to patient safety and hygiene.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">Our Vision</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Choudhury Clinic was established with a singular vision: to make advanced medical care accessible, safe, and comfortable. We specialize in two primary domains: minimally invasive Laparoscopic Surgery and comprehensive Gynecology & Obstetrics. 
          </p>
          <p className="text-slate-700 leading-relaxed">
            By focusing on these core specialties, we ensure that our patients receive expert attention from highly qualified specialists using the latest medical technology. Our patient-first approach means less recovery time, better outcomes, and a supportive environment throughout your healthcare journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200">
            <ShieldPlus className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hygiene & Safety Standards</h3>
            <ul className="space-y-3">
              {[
                "100% Sterilized Modular Operation Theaters",
                "Strict infection control protocols",
                "Single-use medical disposables",
                "Daily deep cleaning of all patient areas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-[#25D366] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Clinic Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-slate-600 border-b border-slate-200 pb-2">
                <span className="font-medium">Monday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-slate-600 border-b border-slate-200 pb-2">
                <span className="font-medium">Tue - Thu</span>
                <span>11:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-center text-slate-600 border-b border-slate-200 pb-2">
                <span className="font-medium">Friday</span>
                <span>02:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-slate-600 border-b border-slate-200 pb-2">
                <span className="font-medium">Saturday</span>
                <span>12:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between items-center text-red-500 font-medium">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        </div>
      </section>
    </div>
  );
}
