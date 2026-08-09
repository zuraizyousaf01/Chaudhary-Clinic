import Image from "next/image";
import { ArrowRight, Award, GraduationCap, Stethoscope, CheckCircle2, Clock, Activity, HeartPulse } from "lucide-react";
import { SlideUp } from "@/components/ui/animations/SlideUp";

export default function DoctorsPage() {
  const lapWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";
  const gynWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";

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
              Our <span className="text-secondary">Specialists</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
              Meet our highly qualified and experienced doctors dedicated to providing the best medical care.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Dr. Waseem Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 rounded-l-[100px] -z-10 hidden lg:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <SlideUp className="order-1 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4" />
                <div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/images/doctors/dr-waseem.webp" 
                    alt="Dr. Waseem Abbas Chaudhary" 
                    fill 
                    className="object-cover object-[center_15%]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-32">
                    <div className="flex items-center gap-4 text-white">
                      <div className="bg-primary p-3 rounded-full">
                        <Activity className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">Experience</p>
                        <p className="text-xl font-bold">10+ Years in Surgery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>

            {/* Content Side */}
            <SlideUp delay={0.2} className="order-2 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Dr. Waseem Abbas Chaudhary
              </h2>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                <Stethoscope className="h-4 w-4" />
                General, Laparoscopic & Gynecologic Surgery
              </span>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Minimally Invasive Surgery Specialist dedicated to providing advanced surgical care with reduced recovery times and optimal patient outcomes.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1 bg-slate-100 p-2 rounded-lg shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Education & Qualifications</h3>
                    <p className="text-slate-600 leading-relaxed">MBBS, FCPS (General Surgery). Continuously updating skills with the latest surgical advancements.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-slate-100 p-2 rounded-lg shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Core Expertise</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Cholecystectomy</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Hernia Repair</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Appendectomy</span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Diagnostic Laparoscopy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={lapWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300"
                >
                  Book Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Dr. Sehar Section */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Content Side */}
            <SlideUp className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Dr. Sehar Waseem Abbas Chaudhary
              </h2>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold uppercase tracking-wider mb-6">
                <HeartPulse className="h-4 w-4" />
                Obstetrics & Gynecology
              </span>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Expert in comprehensive women's health, maternity care, and handling complex gynecological procedures with compassion.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1 bg-white shadow-sm border border-slate-100 p-2 rounded-lg shrink-0">
                    <GraduationCap className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Education & Qualifications</h3>
                    <p className="text-slate-600 leading-relaxed">MBBS, FCPS (Gynecology & Obstetrics). Dedicated to providing evidence-based maternity care.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-white shadow-sm border border-slate-100 p-2 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Areas of Excellence</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Prenatal Care</span>
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Antenatal Care</span>
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Postnatal Care</span>
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">High-Risk Pregnancies</span>
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">PCOS Management</span>
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Infertility Treatments</span>
                      <span className="bg-white border border-slate-200 shadow-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Complex Deliveries</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={gynWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-pink-600/30 hover:bg-pink-700 hover:-translate-y-1 transition-all duration-300"
                >
                  Book Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </SlideUp>

            {/* Image Side */}
            <SlideUp delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-200 to-transparent rounded-3xl transform -translate-x-4 translate-y-4" />
                <div className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/images/doctors/dr-sehar.webp" 
                    alt="Dr. Sehar Waseem Abbas Chaudhary" 
                    fill 
                    className="object-cover object-[center_15%]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-32">
                    <div className="flex items-center gap-4 text-white">
                      <div className="bg-pink-500 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-pink-200 font-medium uppercase tracking-wider">Availability</p>
                        <p className="text-xl font-bold">24/7 Maternity Emergency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
            
          </div>
        </div>
      </section>
    </div>
  );
}
