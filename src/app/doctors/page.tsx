import { ArrowRight, Award, GraduationCap, Stethoscope } from "lucide-react";

export default function DoctorsPage() {
  const lapWaLink = "https://wa.me/923001775530?text=Hello%20Chaudhary%20Clinic%2C%20I%20want%20to%20book%20a%20consultation%20with%20the%20Laparoscopic%20Surgery%20Specialist.";
  const gynWaLink = "https://wa.me/923001775530?text=Hello%20Chaudhary%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20consultation%20with%20the%20Gynecology%20%26%20Obstetrics%20Specialist.";

  return (
    <div className="py-12 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Specialists</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet our highly qualified and experienced doctors dedicated to providing the best medical care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Laparoscopic Specialist */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="h-64 bg-slate-200 relative">
               <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600">
                  [Laparoscopic Specialist Photo]
               </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider mb-2">General Surgeon</span>
                <h2 className="text-3xl font-bold text-slate-900">Dr. Laparoscopic Surgeon</h2>
                <p className="text-secondary font-medium">Laparoscopic & General Surgery Specialist</p>
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
            <div className="h-64 bg-slate-200 relative">
               <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-600">
                  [Gynecology Specialist Photo]
               </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider mb-2">Obstetrician & Gynecologist</span>
                <h2 className="text-3xl font-bold text-slate-900">Dr. Gynecology Specialist</h2>
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
                  <p className="text-sm text-slate-600">Specializes in normal/cesarean deliveries, PCOS management, infertility treatments, and routine prenatal care.</p>
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
    </div>
  );
}
