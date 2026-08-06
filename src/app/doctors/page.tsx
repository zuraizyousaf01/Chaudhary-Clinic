import Image from "next/image";
import { ArrowRight, Award, GraduationCap, Stethoscope } from "lucide-react";
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

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
          {/* Laparoscopic Specialist */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="h-80 lg:h-96 bg-slate-200 relative">
              <Image 
                src="/images/doctors/dr-waseem.webp" 
                alt="Dr. Waseem Abbas Chaudhary" 
                fill 
                className="object-cover object-[center_15%]"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider mb-2">General, Advance Laparoscopic & Gynecologic Surgery</span>
                <h2 className="text-3xl font-bold text-slate-900">Dr. Waseem Abbas Chaudhary</h2>
                <p className="text-secondary font-medium">Minimally Invasive Surgery Specialist</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 text-slate-400 shrink-0" />
                  <p className="text-sm text-slate-600">MBBS, FCPS (General Surgery)</p>
                </div>
                <div className="flex gap-3">
                  <Award className="h-5 w-5 text-slate-400 shrink-0" />
                  <p className="text-sm text-slate-600">Over 10 years of experience in minimally invasive surgical procedures.</p>
                </div>
                <div className="flex gap-3">
                  <Stethoscope className="h-5 w-5 text-slate-400 shrink-0" />
                  <p className="text-sm text-slate-600">Specializes in Cholecystectomy (Gallbladder), Hernia Repair, Appendectomy, and diagnostic laparoscopy.</p>
                </div>
              </div>

              <a
                href={lapWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Gynecology Specialist */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="h-80 lg:h-96 bg-slate-200 relative">
              <Image 
                src="/images/doctors/dr-sehar.webp" 
                alt="Dr. Sehar Waseem Abbas Chaudhary" 
                fill 
                className="object-cover object-[center_15%]"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider mb-2">Obstetrician & Gynecologist</span>
                <h2 className="text-3xl font-bold text-slate-900">Dr. Sehar Waseem Abbas Chaudhary</h2>
                <p className="text-secondary font-medium">Women's Health & Maternity Care</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 text-slate-400 shrink-0" />
                  <p className="text-sm text-slate-600">MBBS, FCPS (Gynecology & Obstetrics)</p>
                </div>
                <div className="flex gap-3">
                  <Award className="h-5 w-5 text-slate-400 shrink-0" />
                  <p className="text-sm text-slate-600">Expert in handling high-risk pregnancies and complex gynecological surgeries.</p>
                </div>
                <div className="flex gap-3">
                  <Stethoscope className="h-5 w-5 text-slate-400 shrink-0" />
                  <p className="text-sm text-slate-600">Specializes in normal/cesarean deliveries, PCOS management, infertility treatments, and comprehensive prenatal, antenatal, and postnatal care.</p>
                </div>
              </div>

              <a
                href={gynWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
