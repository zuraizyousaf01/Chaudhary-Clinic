import { CheckCircle2, ShieldPlus, Clock, Heart, Award, Users, Stethoscope, ArrowRight, ShieldCheck } from "lucide-react";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/StaggerContainer";
import MasonryGallery from "@/components/ui/MasonryGallery";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Choudhary Clinic's mission to provide advanced laparoscopic and gynecological care with a patient-centered approach in Multan.",
  alternates: {
    canonical: '/about',
  },
};

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
              About <span className="text-secondary">Choudhary Clinic</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
              Dedicated to providing advanced surgical and maternal care with a commitment to patient safety, hygiene, and compassion.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Vision Section */}
          <SlideUp>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-16">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full min-h-[300px]">
                  <Image
                    src="/images/doctors/Doctors_vision.webp"
                    alt="Doctors Vision"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary w-fit mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider">Our Vision</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Setting the Standard in Healthcare</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Choudhary Clinic was established with a singular vision: to make advanced medical care accessible, safe, and comfortable. We specialize in two primary domains: minimally invasive Laparoscopic Surgery and comprehensive Gynecology & Obstetrics.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    By focusing on these core specialties, we ensure that our patients receive expert attention from highly qualified specialists using the latest medical technology. Our patient-first approach means less recovery time, better outcomes, and a supportive environment throughout your healthcare journey.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Core Values */}
          <div className="mb-20">
            <SlideUp className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide our practice and patient care every single day.</p>
            </SlideUp>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy, respect, and deep understanding." },
                { icon: Award, title: "Excellence", desc: "Striving for the highest standards in medical and surgical outcomes." },
                { icon: ShieldPlus, title: "Safety", desc: "Uncompromising protocols for hygiene and infection control." },
                { icon: Users, title: "Patient-First", desc: "Prioritizing your comfort, convenience, and health above all else." },
              ].map((val, i) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={i}>
                    <div className="bg-white rounded-2xl p-5 md:p-8 border border-slate-200 text-center h-full hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                        <Icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{val.title}</h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Meet the Experts */}
          <div className="mb-20 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Lead Specialists</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Our clinic is spearheaded by two highly qualified specialists who bring decades of combined experience in complex surgeries and maternal care. Together, they form a formidable team dedicated to your well-being.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-6 w-6 text-primary" />
                    <span className="text-lg font-medium">Dr. Waseem Abbas (Laparoscopic Surgeon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-6 w-6 text-pink-500" />
                    <span className="text-lg font-medium">Dr. Sehar Waseem (Gynecologist & Obstetrician)</span>
                  </div>
                </div>
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-primary-hover transition-colors"
                >
                  View Full Profiles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden border-4 border-slate-800">
                <Image
                  src="/images/doctors/opd.webp"
                  alt="Clinic Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Facilities and Hours Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <SlideUp>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 h-full hover:shadow-md transition-shadow">
                <ShieldPlus className="h-10 w-10 text-secondary mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Hygiene & Safety Standards</h3>
                <ul className="space-y-4">
                  {[
                    "100% Sterilized Modular Operation Theaters",
                    "Strict infection control protocols",
                    "Single-use medical disposables",
                    "Daily deep cleaning of all patient areas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="h-6 w-6 text-[#25D366] shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 h-full hover:shadow-md transition-shadow">
                <Clock className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Clinic Hours</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center text-slate-700 border-b border-slate-100 pb-3">
                    <span className="font-medium text-lg">Monday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700 border-b border-slate-100 pb-3">
                    <span className="font-medium text-lg">Tue - Thu</span>
                    <span>11:00 AM - 10:30 PM</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700 border-b border-slate-100 pb-3">
                    <span className="font-medium text-lg">Friday</span>
                    <span>02:00 PM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center text-slate-700 border-b border-slate-100 pb-3">
                    <span className="font-medium text-lg">Saturday</span>
                    <span>12:00 AM - 10:30 PM</span>
                  </li>
                  <li className="flex justify-between items-center text-red-500 font-medium text-lg">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </SlideUp>
          </div>

        </div>
      </section>

      {/* Insurance and Panels */}
      <section className="py-10 md:py-12 bg-slate-50 relative z-10 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SlideUp className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3">Accepted Insurance & Corporate Panels</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">We are on the panel of leading health insurance providers and corporate organizations to make your healthcare journey seamless.</p>
          </SlideUp>
          <StaggerContainer className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              "Askari Insurance",
              "EFU Health Insurance",
              "NBP (National Bank of Pakistan)",
              "Jubilee General Insurance",
              "Alfalah Insurance",
              "PTCL",
              "Health eConnex",
              "UIC Pakistan",
              "IGI Insurance",
              "State Life Insurance",
              "Adamjee Insurance",
              "Salaam Takaful",
              "Century Insurance"
            ].map((panel, i) => (
              <StaggerItem key={i}>
                <div className="group flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl hover:border-secondary/40 hover:shadow-sm transition-all duration-200">
                  <div className="bg-secondary/10 p-1.5 rounded-md group-hover:bg-secondary/20 transition-colors">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{panel}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Clinic Gallery */}
      <MasonryGallery />
    </div>
  );
}
