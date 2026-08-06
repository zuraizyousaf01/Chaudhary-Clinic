import { Activity, Baby, ArrowRight } from "lucide-react";
import { LaparoscopyIcon, GallbladderIcon, HerniaIcon, MaternityIcon, HighRiskPregnancyIcon, GynecologyIcon } from "@/components/ui/icons/MedicalIcons";
import Link from "next/link";
import Image from "next/image";
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
          <div className="mb-32">
            {/* Thematic Graphic Header */}
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <FadeIn className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  <Activity className="h-5 w-5" />
                  Surgical Department
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Advanced Laparoscopic & General Surgery
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We utilize state-of-the-art minimally invasive techniques to ensure faster recovery times, minimal scarring, and the best possible outcomes for our patients.
                </p>
                <a
                  href={lapWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Book Surgical Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </FadeIn>
              
              <FadeIn className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/surgery-banner.png" 
                    alt="Modern Operating Room" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
              </FadeIn>
            </div>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: GallbladderIcon, title: "Laparoscopic Cholecystectomy", desc: "Minimally invasive gallbladder removal with minimal scarring and quick recovery." },
                { icon: HerniaIcon, title: "Hernia Repair", desc: "Advanced laparoscopic techniques for inguinal, umbilical, and incisional hernias." },
                { icon: LaparoscopyIcon, title: "Laparoscopic Appendectomy", desc: "Safe and rapid removal of the appendix using keyhole surgery." },
                { icon: LaparoscopyIcon, title: "Diagnostic Laparoscopy", desc: "Exploratory procedures to diagnose unresolved abdominal pain or issues." },
                { icon: LaparoscopyIcon, title: "General Surgery Options", desc: "Comprehensive care for various general surgical needs beyond laparoscopy." }
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                <StaggerItem key={i} className="h-full">
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
                    <div className="p-3 bg-slate-50 rounded-xl w-fit mb-6 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                  </div>
                </StaggerItem>
              )})}
            </StaggerContainer>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-24" />

          {/* Gynecology Services */}
          <div className="mb-20">
            {/* Thematic Graphic Header */}
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <FadeIn className="lg:col-span-7">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/maternity-banner.png" 
                    alt="Maternity Ward" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent mix-blend-overlay"></div>
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-pink-50 text-pink-600 font-bold text-sm border border-pink-100">
                  <Baby className="h-5 w-5" />
                  Maternity Department
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Gynecological & Maternity Care
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Providing compassionate, comprehensive women's health services from routine checkups to high-risk pregnancies and safe deliveries in a supportive environment.
                </p>
                <a
                  href={gynWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-pink-600/30 hover:bg-pink-700 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Book Gynecology Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </FadeIn>
            </div>
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MaternityIcon, title: "Antenatal, Prenatal & Postnatal Care", desc: "Comprehensive monitoring and care throughout your entire pregnancy journey and beyond." },
                { icon: HighRiskPregnancyIcon, title: "High-Risk Pregnancy", desc: "Expert management for pregnancies requiring specialized medical attention." },
                { icon: MaternityIcon, title: "Normal & Cesarean Deliveries", desc: "Safe delivery options in our fully equipped, hygienic maternity ward." },
                { icon: GynecologyIcon, title: "PCOS Management", desc: "Diagnosis, treatment plans, and lifestyle counseling for Polycystic Ovary Syndrome." },
                { icon: GynecologyIcon, title: "Infertility Consultations", desc: "Initial assessments and guidance for couples struggling with conception." },
                { icon: GynecologyIcon, title: "General Gynecology", desc: "Treatment for menstrual disorders, infections, and routine women's health checkups." }
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                <StaggerItem key={i} className="h-full">
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col group">
                    <div className="p-3 bg-pink-50 rounded-xl w-fit mb-6 group-hover:bg-pink-100 transition-colors">
                      <Icon className="h-8 w-8 text-pink-500 group-hover:text-pink-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                  </div>
                </StaggerItem>
              )})}
            </StaggerContainer>
          </div>

        </div>
      </section>
    </div>
  );
}
