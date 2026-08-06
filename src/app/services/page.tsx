import { Activity, Baby, Scissors, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/StaggerContainer";

export default function ServicesPage() {
  const lapWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20surgical%20consultation";
  const gynWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20gynecology%20consultation";

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
              Our Medical <span className="text-secondary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed">
              We offer specialized care in Laparoscopic Surgery and Gynecology & Obstetrics, utilizing modern technology and expert medical knowledge to ensure the best outcomes for our patients.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Laparoscopic Services */}
          <div className="mb-24">
            <SlideUp className="flex flex-col items-center text-center md:flex-row md:text-left gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl shadow-sm border border-primary/10">
                <Activity className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Clinical & Surgical Services</h2>
                <p className="text-slate-600 text-lg">Advanced Laparoscopic & General Surgery</p>
              </div>
            </SlideUp>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Laparoscopic Cholecystectomy", desc: "Minimally invasive gallbladder removal with minimal scarring and quick recovery." },
                { title: "Hernia Repair", desc: "Advanced laparoscopic techniques for inguinal, umbilical, and incisional hernias." },
                { title: "Laparoscopic Appendectomy", desc: "Safe and rapid removal of the appendix using keyhole surgery." },
                { title: "Diagnostic Laparoscopy", desc: "Exploratory procedures to diagnose unresolved abdominal pain or issues." },
                { title: "General Surgery Options", desc: "Comprehensive care for various general surgical needs beyond laparoscopy." }
              ].map((service, i) => (
                <StaggerItem key={i} className="h-full">
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
                    <div className="p-3 bg-slate-50 rounded-xl w-fit mb-6 group-hover:bg-primary/10 transition-colors">
                      <Scissors className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <FadeIn className="text-center">
              <a
                href={lapWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300"
              >
                Book Surgical Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </FadeIn>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-24" />

          {/* Gynecology Services */}
          <div className="mb-10">
            <SlideUp className="flex flex-col items-center text-center md:flex-row md:text-left gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-2xl shadow-sm border border-pink-500/10">
                <Baby className="h-10 w-10 text-pink-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Gynecological & Maternity Care</h2>
                <p className="text-slate-600 text-lg">Comprehensive women's health services</p>
              </div>
            </SlideUp>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Antenatal, Prenatal & Postnatal Care", desc: "Comprehensive monitoring and care throughout your entire pregnancy journey and beyond." },
                { title: "High-Risk Pregnancy", desc: "Expert management for pregnancies requiring specialized medical attention." },
                { title: "Normal & Cesarean Deliveries", desc: "Safe delivery options in our fully equipped, hygienic maternity ward." },
                { title: "PCOS Management", desc: "Diagnosis, treatment plans, and lifestyle counseling for Polycystic Ovary Syndrome." },
                { title: "Infertility Consultations", desc: "Initial assessments and guidance for couples struggling with conception." },
                { title: "General Gynecology", desc: "Treatment for menstrual disorders, infections, and routine women's health checkups." }
              ].map((service, i) => (
                <StaggerItem key={i} className="h-full">
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
                    <div className="p-3 bg-pink-50 rounded-xl w-fit mb-6 group-hover:bg-pink-100 transition-colors">
                      <HeartPulse className="h-6 w-6 text-pink-500 group-hover:text-pink-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="text-center">
              <a
                href={gynWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-pink-600/30 hover:bg-pink-700 hover:-translate-y-1 transition-all duration-300"
              >
                Book Gynecology Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}
