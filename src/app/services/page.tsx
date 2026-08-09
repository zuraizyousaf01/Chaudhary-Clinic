import { Activity, Baby, ArrowRight } from "lucide-react";
import { LaparoscopyIcon, GallbladderIcon, HerniaIcon, MaternityIcon, HighRiskPregnancyIcon, GynecologyIcon } from "@/components/ui/icons/MedicalIcons";
import { 
  DetailedOvarianTumorIcon, 
  DetailedLapOvarianCystIcon, 
  DetailedKidneyStonesIcon, 
  DetailedBladderStonesIcon, 
  DetailedAbdominalTumorIcon 
} from "@/components/ui/icons/SurgicalIcons";
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
            
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {[
                { image: "/images/services/gallstone.png", title: "Gallstones Treatment" },
                { image: "/images/services/bile_duct.png", title: "Laparoscopic & Choledochoscopic Bile Duct Surgery" },
                { image: "/images/services/hernia.png", title: "Hernia Repair" },
                { image: "/images/services/appendectomy.png", title: "Appendectomy" },
                { image: "/images/services/breast_cancer.png", title: "Breast Cancer Care" },
                { image: "/images/services/hemorrhoids.png", title: "PPH Stapled Hemorrhoid Surgery" },
                { image: "/images/services/laser_surgery.png", title: "Laser & LigaSure Procedures" },
                { image: "/images/services/thyroid.png", title: "Thyroid & Goiter Surgery" },
                { image: "/images/services/intestines.png", title: "Small & Large Intestine Disorders" },
                { image: "/images/services/rectal_bleeding.png", title: "Rectal Bleeding Treatment" },
                { image: "/images/services/abscess.png", title: "Pus & Abscess Management" },
                { image: "/images/services/intestinal_cancer.png", title: "Intestinal Cancers" },
                { image: "/images/services/uterine_cancer.png", title: "Uterine Cancer & Gynecological Diseases" },
                { image: "/images/services/ovarian_tumor.png", title: "Ovarian Tumors & Cysts" },
                { image: "/images/services/lap_ovarian_cyst.png", title: "Laparoscopic Ovarian Cyst Removal" },
                { image: "/images/services/kidney_stones.png", title: "Kidney & Ureteral Stones" },
                { image: "/images/services/bladder_stones.png", title: "Bladder Stones" },
                { image: "/images/services/abdominal_tumor.png", title: "Abdominal Tumors / Masses" },
              ].map((service, i) => (
                <StaggerItem key={i} className="h-full">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-md border border-slate-100 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center group cursor-default">
                    <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  </div>
                </StaggerItem>
              ))}
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
            
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {[
                { image: "/images/services/mat_pregnancy.png", title: "Antenatal, Prenatal & Postnatal Care" },
                { image: "/images/services/mat_high_risk.png", title: "High-Risk Pregnancy" },
                { image: "/images/services/mat_delivery.png", title: "Normal & Cesarean Deliveries" },
                { image: "/images/services/mat_ovary.png", title: "PCOS Management" },
                { image: "/images/services/mat_fertility.png", title: "Infertility Consultations" },
                { image: "/images/services/mat_uterus.png", title: "General Gynecology" },
                { image: "/images/services/mat_miscarriage.png", title: "Recurrent Pregnancy Loss / Miscarriage Management" },
                { image: "/images/services/mat_diabetes.png", title: "Gestational Diabetes Care" },
                { image: "/images/services/mat_blood.png", title: "Gestational Anemia Treatment" },
                { image: "/images/services/mat_placenta_previa.png", title: "Placenta Previa Management" },
                { image: "/images/services/mat_molar_pregnancy.png", title: "Molar Pregnancy Care" },
                { image: "/images/services/mat_uterine_prolapse.png", title: "Uterine Prolapse Treatment" },
                { image: "/images/services/mat_infertility_treatment.png", title: "Infertility Diagnosis & Treatment" },
                { image: "/images/services/mat_menstruation.png", title: "Menstrual Disorders & Irregularities" },
                { image: "/images/services/mat_placental_abruption.png", title: "Placental Abruption Management" },
                { image: "/images/services/mat_family_planning.png", title: "Family Planning Services" },
                { image: "/images/services/mat_preeclampsia.png", title: "Gestational Hypertension & Preeclampsia Care" },
                { image: "/images/services/mat_ectopic.png", title: "Ectopic / Tubal Pregnancy Management" },
                { image: "/images/services/mat_anomalies.png", title: "Fetal Congenital Anomalies Care" },
                { image: "/images/services/mat_cancers.png", title: "Uterine & Ovarian Cysts, Tumors, and Cancers" },
                { image: "/images/services/mat_hysterectomy.png", title: "Hysterectomy (Surgical Removal of Uterus)" },
                { image: "/images/services/mat_dye_test.png", title: "Laparoscopic Dye Test (Tubal Assessment)" },
                { image: "/images/services/mat_pelvic_prolapse.png", title: "Pelvic Organ Prolapse Surgery (Bladder & Uterus)" },
                { image: "/images/services/mat_lap_ectopic.png", title: "Laparoscopic Ectopic Pregnancy Surgery" },
                { image: "/images/services/mat_gyn_oncology.png", title: "Gynecologic Oncology & Advanced Laparoscopic Surgery" }
              ].map((service, i) => (
                <StaggerItem key={i} className="h-full">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-md border border-slate-100 hover:-translate-y-1 hover:shadow-xl hover:border-pink-500/30 transition-all duration-300 flex flex-col items-center text-center group cursor-default">
                    <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden shadow-sm border border-pink-50 group-hover:shadow-md transition-shadow">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-pink-600 transition-colors">{service.title}</h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </section>
    </div>
  );
}
