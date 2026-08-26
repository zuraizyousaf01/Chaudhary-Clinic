import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Breast Cancer: Symptoms, Diagnosis, and Treatment | Choudhary Clinic",
  description: "Learn about Breast Cancer (چھاتی کا کینسر), its early signs, and advanced surgical treatments offered by Dr. Waseem Abbas Chaudhary in Multan.",
  alternates: {
    canonical: '/breast-cancer',
  },
};

export default function BreastCancerPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <Translate ur={<span>Back to Home</span>} en={<span>Back to Home</span>} />
        </Link>
        
        {/* Header */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <Translate
              ur={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight urdu-text" dir="rtl">
                    چھاتی کا کینسر: قابلِ علاج ہے
                    <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                      (Breast Cancer is Curable)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    ڈاکٹر محمد وسیم عباس چوہدری (لیپروسکوپک اور جنرل سرجن) (ایم بی بی ایس، ایف سی پی ایس - نشتر میڈیکل یونیورسٹی، ہسپتال ملتان) کی زیرِ نگرانی بریسٹ کینسر کی تشخیص اور محفوظ سرجری کی سہولیات۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Breast Cancer is Curable
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Under the expert supervision of Dr. Muhammad Waseem Abbas Chaudhary (Laparoscopic & General Surgeon) (MBBS, FCPS - Nishtar Medical University, Multan), we provide comprehensive facilities for breast cancer diagnosis and safe surgical treatment.
                  </p>
                </>
              }
            />
          </div>
        </FadeIn>

        {/* Main Content */}
        <SlideUp delay={0.1}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 mb-8 space-y-12">
            
            <section>
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-6" dir="rtl">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">بریسٹ کینسر کے خطرات اور بروقت تشخیص (Risks and Early Diagnosis)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      بریسٹ کینسر خواتین میں پایا جانے والا ایک عام مرض ہے۔ ایک محتاط اندازے کے مطابق، ہر 8 میں سے 1 عورت کو زندگی میں کبھی نہ کبھی بریسٹ کینسر ہونے کا خطرہ ہوتا ہے۔ تاہم، اس بیماری سے گھبرانے کی ضرورت نہیں کیونکہ اگر وقت پر تشخیص ہو جائے تو اس کا مکمل علاج ممکن ہے، اور مریض کی زندگی بچائی جا سکتی ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Risks and Early Diagnosis</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Breast cancer is a common disease among women. It is estimated that 1 in 8 women will develop breast cancer in her lifetime. However, there is no need to panic—if diagnosed early, it is completely curable, and the patient's life can be saved.
                    </p>
                  </>
                }
              />
            </section>

            <section>
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-6" dir="rtl">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ابتدائی علامات اور احتیاط (Early Symptoms and Precautions)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      کینسر کی ابتدائی علامات کو ہرگز نظر انداز نہ کریں۔ اگر آپ کو درج ذیل میں سے کوئی بھی تبدیلی محسوس ہو تو فوراً معائنہ کروائیں:
                    </p>
                    <ul className="space-y-4 mb-6" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text">چھاتی یا بغل میں کسی قسم کی گلٹی (Lump) یا گانٹھ کا محسوس ہونا۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text">چھاتی کی ساخت، سائز یا جلد کے رنگ میں غیر معمولی تبدیلی۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text">درد کا مسلسل رہنا۔</span>
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium urdu-text" dir="rtl">
                      صحت مند طرزِ زندگی اپنائیں اور بروقت تشخیص کے لیے ڈاکٹر کی مکمل ہدایات پر عمل کریں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Early Symptoms and Precautions</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Never ignore the early signs of cancer. If you notice any of the following changes, seek a medical evaluation immediately:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg">Feeling a lump or knot in the breast or underarm.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg">Unusual changes in the shape, size, or skin color of the breast.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg">Persistent pain.</span>
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      Adopt a healthy lifestyle and follow your doctor's instructions for early diagnosis.
                    </p>
                  </>
                }
              />
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-4" dir="rtl">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">علاج میں سرجری کا کردار (Role of Surgery in Treatment)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      چھاتی کے کینسر کے علاج میں آپریشن ایک انتہائی اہم قدم ہوتا ہے۔ اس سرجری کا بنیادی مقصد کینسر زدہ حصہ (Lump/Tumor) یا بیماری کی نوعیت کے حساب سے پوری چھاتی کو نکال کر جسم سے بیماری کو جڑ سے ختم کرنا ہوتا ہے تاکہ کینسر جسم کے دیگر حصوں تک نہ پھیل سکے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">The Role of Surgery in Treatment</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Surgery is a critical step in treating breast cancer. The primary goal is to completely eradicate the disease by removing the cancerous lump (tumor) or, depending on the severity, the entire breast, preventing the cancer from spreading to other parts of the body.
                    </p>
                  </>
                }
              />
            </section>

            {/* Patient Testimony */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-8">
                <Translate
                  ur={
                    <div className="flex-1 text-right md:pl-2 w-full" dir="rtl">
                      <h3 className="text-[16px] md:text-[20px] font-semibold text-slate-800 mb-2 urdu-text">
                        ہمارے مریضوں کی زبانی
                        <span className="block text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-normal mt-2 text-slate-500" dir="ltr">Hear From Our Patients</span>
                      </h3>
                      <div className="w-12 h-0.5 bg-pink-500 mb-4 ml-auto"></div>
                      <p className="text-[14px] md:text-[16px] text-slate-600 urdu-text">
                        کیئر اور ریکوری کی حقیقی کہانیاں۔
                        <span className="block text-[12px] md:text-[14px] font-normal mt-1" dir="ltr">Real stories of care and recovery.</span>
                      </p>
                    </div>
                  }
                  en={
                    <div className="flex-1 text-left w-full">
                      <h3 className="text-[16px] md:text-[20px] font-semibold text-slate-800 mb-2">
                        Hear From Our Patients
                      </h3>
                      <div className="w-12 h-0.5 bg-pink-500 mb-4"></div>
                      <p className="text-[14px] md:text-[16px] text-slate-600">
                        Real stories of care and recovery.
                      </p>
                    </div>
                  }
                />

                <div className="flex-shrink-0 w-full sm:w-[240px] md:w-[280px] lg:w-[325px]">
                  <TestimonialCarousel videos={[
                    "/videos/Breast-Cancer-Cut.mp4",
                    "/videos/breast-cancer_testimonial-2.mp4"
                  ]} />
                </div>
              </div>
            </div>

          </div>
        </SlideUp>

        {/* CTA */}
        <SlideUp delay={0.2}>
          <div className="bg-gradient-to-br from-primary to-[#0f3b60] rounded-3xl p-8 sm:p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <Translate
              ur={
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ کو چھاتی میں کوئی غیر معمولی تبدیلی یا گلٹی محسوس ہو رہی ہے؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you noticing any unusual changes or lumps?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">ابتدائی علامات کو نظر انداز کرنا خطرناک ہو سکتا ہے۔ آج ہی خان میڈیکل سٹی، نشتر روڈ پر ہمارے ماہر سرجن سے معائنہ کروائیں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Ignoring early symptoms can be dangerous. Get evaluated by our expert surgeon today.)</span></p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20confidential%20consultation%20for%20Breast%20Care"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20b858] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    <span className="urdu-text" dir="rtl">WhatsApp پر اپوائنٹمنٹ بک کریں</span>
                    <span className="text-sm font-normal mr-2" dir="ltr">(Book Appointment)</span>
                  </a>
                </>
              }
              en={
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you noticing any unusual changes or lumps?</h2>
                  <p className="text-lg text-white/90 mb-8">Ignoring early symptoms can be dangerous. Get evaluated by our expert surgeon today at Khan Medical City, Nishtar Road.</p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20confidential%20consultation%20for%20Breast%20Care"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20b858] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    <span>Book Appointment on WhatsApp</span>
                  </a>
                </>
              }
            />
          </div>
        </SlideUp>

        {/* Dual Image Banner */}
        <SlideUp delay={0.3}>
          <div className="relative w-full mt-16 mb-32 max-w-3xl mx-auto">
            {/* Background Grayscale Image */}
            <div className="w-[75%] z-0 grayscale relative">
              <Image
                src="/images/services/Breast-Cancer_banner.webp"
                alt="Breast Cancer Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/Breast-Cancer_banner.webp"
                alt="Breast Cancer Banner"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </SlideUp>

      </div>
    </div>
  );
}
