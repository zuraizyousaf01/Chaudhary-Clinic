import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, Star, MapPin, Award, GraduationCap, Stethoscope, CheckCircle2, Clock, Activity, HeartPulse } from "lucide-react";
import reviews from "../../public/data/reviews.json";
import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/StaggerContainer";
import { YouTubeVideos } from "@/components/ui/YouTubeVideos";
import { LaparoscopyIcon, GallbladderIcon, HerniaIcon, MaternityIcon, HighRiskPregnancyIcon, GynecologyIcon } from "@/components/ui/icons/MedicalIcons";

export default function Home() {
  const generalWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";
  const lapWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";
  const gynWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative -mt-20 pt-20 min-h-screen flex flex-col items-center justify-center text-white overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('/images/doctors/opd.webp')] bg-cover bg-center bg-fixed z-0" />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <StaggerContainer className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
              Advanced Laparoscopic & <br className="hidden md:block" />
              <span className="text-secondary">Gynecological Care</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
              Providing state-of-the-art surgical facilities and compassionate maternity care in a clean, modern environment.
            </p>
          </StaggerItem>
          <StaggerItem>
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
          </StaggerItem>
        </StaggerContainer>
      </section>

            {/* Dual Specialists Section */}
      <div className="relative z-10 -mt-16 rounded-t-[3rem] overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
        {/* Dr. Waseem Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 rounded-l-[100px] -z-10 hidden lg:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <SlideUp className="order-2 lg:order-1">
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
            <SlideUp delay={0.2} className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                <Stethoscope className="h-4 w-4" />
                General, Laparoscopic & Gynecologic Surgery
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Dr. Waseem Abbas Chaudhary
              </h2>
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
            <SlideUp className="order-1 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold uppercase tracking-wider mb-6">
                <HeartPulse className="h-4 w-4" />
                Obstetrics & Gynecology
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Dr. Sehar Waseem Abbas Chaudhary
              </h2>
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
            <SlideUp delay={0.2} className="order-2 lg:order-2">
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

      {/* Services Enhanced Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Subtle background blob */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-10 pointer-events-none" />
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Text */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Premium Care</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Excellence in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Medical Services</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We combine state-of-the-art technology with compassionate care to offer advanced minimally invasive surgeries and comprehensive maternity solutions.
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                View All Treatments
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Rich Cards Grid */}
          <div className="lg:col-span-8">
            <StaggerContainer className="grid sm:grid-cols-2 gap-6 relative">
              {[
                { 
                  icon: LaparoscopyIcon, 
                  title: "Laparoscopic Surgery", 
                  desc: "Advanced minimally invasive procedures ensuring faster recovery, minimal scarring, and shorter hospital stays.",
                  color: "text-primary", 
                  bg: "bg-primary/10",
                  border: "border-primary/20",
                  hover: "hover:border-primary/40 hover:shadow-primary/5"
                },
                { 
                  icon: MaternityIcon, 
                  title: "Maternity Care", 
                  desc: "Comprehensive antenatal and postnatal care, including normal and cesarean deliveries, ensuring a safe journey.",
                  color: "text-pink-600", 
                  bg: "bg-pink-100",
                  border: "border-pink-200",
                  hover: "hover:border-pink-300 hover:shadow-pink-100/50"
                },
                { 
                  icon: GallbladderIcon, 
                  title: "Gallbladder Removal", 
                  desc: "Safe and effective cholecystectomy using state-of-the-art laparoscopic techniques.",
                  color: "text-primary", 
                  bg: "bg-primary/10",
                  border: "border-primary/20",
                  hover: "hover:border-primary/40 hover:shadow-primary/5"
                },
                { 
                  icon: HighRiskPregnancyIcon, 
                  title: "High-Risk Pregnancy", 
                  desc: "Expert management of complex pregnancies with dedicated monitoring and care for mother and baby.",
                  color: "text-pink-600", 
                  bg: "bg-pink-100",
                  border: "border-pink-200",
                  hover: "hover:border-pink-300 hover:shadow-pink-100/50"
                },
                { 
                  icon: HerniaIcon, 
                  title: "Hernia Repair", 
                  desc: "Long-lasting surgical solutions for various types of hernias with minimal downtime and pain.",
                  color: "text-primary", 
                  bg: "bg-primary/10",
                  border: "border-primary/20",
                  hover: "hover:border-primary/40 hover:shadow-primary/5"
                },
                { 
                  icon: GynecologyIcon, 
                  title: "General Gynecology", 
                  desc: "Routine checkups, PCOS management, and treatments for diverse women's health issues.",
                  color: "text-pink-600", 
                  bg: "bg-pink-100",
                  border: "border-pink-200",
                  hover: "hover:border-pink-300 hover:shadow-pink-100/50"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={i} className={`${i % 2 !== 0 ? 'sm:mt-12' : ''}`}>
                    <div className={`group h-full relative bg-white rounded-[2rem] p-8 border ${item.border} transition-all duration-300 ${item.hover} hover:shadow-xl overflow-hidden flex flex-col`}>
                      {/* Decorative Background Blob */}
                      <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${item.bg} opacity-50 transition-transform duration-500 group-hover:scale-150 z-0`}></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                          <Icon className={`h-7 w-7 ${item.color} stroke-[1.5]`} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                        
                        <div className="mt-auto">
                          <Link href="/services" className={`inline-flex items-center text-sm font-bold ${item.color} group-hover:gap-2 transition-all`}>
                            Learn more <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>



      {/* Google Reviews */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Patient Reviews</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Read what our patients have to say about their experience at Choudhury Clinic.
            </p>
          </SlideUp>
          <StaggerContainer className="max-w-7xl mx-auto mb-10">
            <ReviewCarousel reviews={reviews} />
          </StaggerContainer>
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

      {/* YouTube Updates */}
      <YouTubeVideos />

      {/* Location Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
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
        </SlideUp>
      </section>
    </div>
  );
}
