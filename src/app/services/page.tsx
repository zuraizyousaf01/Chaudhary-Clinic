import { Activity, Baby, Scissors, HeartPulse } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const lapWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";
  const gynWaLink = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20an%20appointment";

  return (
    <div className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Medical Services</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer specialized care in Laparoscopic Surgery and Gynecology & Obstetrics, utilizing modern technology and expert medical knowledge to ensure the best outcomes for our patients.
          </p>
        </div>

        {/* Laparoscopic Services */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Clinical & Surgical Services (Laparoscopy)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Laparoscopic Cholecystectomy", desc: "Minimally invasive gallbladder removal with minimal scarring and quick recovery." },
              { title: "Hernia Repair", desc: "Advanced laparoscopic techniques for inguinal, umbilical, and incisional hernias." },
              { title: "Laparoscopic Appendectomy", desc: "Safe and rapid removal of the appendix using keyhole surgery." },
              { title: "Diagnostic Laparoscopy", desc: "Exploratory procedures to diagnose unresolved abdominal pain or issues." },
              { title: "General Surgery Options", desc: "Comprehensive care for various general surgical needs beyond laparoscopy." }
            ].map((service, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <Scissors className="h-6 w-6 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center md:text-left">
            <a
              href={lapWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
            >
              Book Surgical Consultation
            </a>
          </div>
        </div>

        {/* Gynecology Services */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-pink-50 rounded-xl">
              <Baby className="h-8 w-8 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Gynecological & Maternity Care</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Routine Prenatal Care", desc: "Comprehensive monitoring and care throughout your pregnancy journey." },
              { title: "High-Risk Pregnancy", desc: "Expert management for pregnancies requiring specialized medical attention." },
              { title: "Normal & Cesarean Deliveries", desc: "Safe delivery options in our fully equipped, hygienic maternity ward." },
              { title: "PCOS Management", desc: "Diagnosis, treatment plans, and lifestyle counseling for Polycystic Ovary Syndrome." },
              { title: "Infertility Consultations", desc: "Initial assessments and guidance for couples struggling with conception." },
              { title: "General Gynecology", desc: "Treatment for menstrual disorders, infections, and routine women's health checkups." }
            ].map((service, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <HeartPulse className="h-6 w-6 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center md:text-left">
            <a
              href={gynWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-hover transition-colors"
            >
              Book Gynecology Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
