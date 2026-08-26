import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope, Droplets, HeartPulse, Flame, CircleAlert } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Piles (Hemorrhoids): Symptoms and Treatment | Choudhary Clinic",
  description: "Learn about Piles/Bawaseer (بواسیر), its causes, early symptoms, and advanced painless treatments by Dr. Waseem Abbas Chaudhary.",
};

export default function PilesPage() {
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
                    بواسیر: علامات، وجوہات اور علاج
                    <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                      (Piles/Hemorrhoids: Symptoms, Causes, and Treatment)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    ڈاکٹر محمد وسیم عباس چوہدری کی زیر نگرانی چوہدری کلینک میں بواسیر کا جدید، محفوظ اور موثر علاج۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Piles/Hemorrhoids: Symptoms, Causes, and Treatment
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Advanced, safe, and effective treatment for hemorrhoids under the supervision of Dr. Muhammad Waseem Abbas Chaudhary at Choudhary Clinic.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">بواسیر کیا ہے؟ (What are Piles/Hemorrhoids?)</h2>
                    </div>
                    <p className="text-xl font-medium text-slate-800 leading-relaxed urdu-text mb-6 italic" dir="rtl">
                      ”بواسیر ایک بیماری ہے جس میں مقعد یا آنت کے آخری حصے کی رگیں سوجن کا شکار ہو کر گانٹھوں کی شکل اختیار کر لیتی ہیں۔“
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                      یہ عموماً دو قسم کی ہوتی ہے:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">اندرونی بواسیر (Internal Hemorrhoids):</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">جو مقعد کے اندرونی حصے میں ہوتی ہے اور عام طور پر درد نہیں کرتی، لیکن اس میں خون آ سکتا ہے۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">بیرونی بواسیر (External Hemorrhoids):</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">جو مقعد کے باہر کی طرف ہوتی ہے اور انتہائی تکلیف دہ ہو سکتی ہے۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What are Piles/Hemorrhoids?</h2>
                    </div>
                    <p className="text-xl font-medium text-slate-800 leading-relaxed mb-6 italic">
                      "Piles (hemorrhoids) are swollen veins in your lower rectum and anus, similar to varicose veins."
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      There are generally two types:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Internal Hemorrhoids:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Located inside the rectum, they are usually painless but can cause bleeding.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">External Hemorrhoids:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Located under the skin around the anus, these can be extremely painful.</span>
                        </div>
                      </li>
                    </ul>
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">بواسیر کی ابتدائی علامات (Early Symptoms of Piles)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      اگر آپ کو درج ذیل میں سے کوئی بھی علامت محسوس ہو تو اسے نظر انداز نہ کریں:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">بیٹھنے یا پاخانہ کرتے وقت مقعد کے حصے میں شدید درد اور تکلیف کا احساس۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleAlert className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">دائمی قبض:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">مسلسل قبض رہنا، جو کہ اس بیماری کی سب سے بڑی وجہ اور علامت دونوں ہے۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">خارش:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">مقعد کے ارد گرد کے حصے میں شدید خارش اور بے چینی محسوس ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">پاخانے میں خون آنا:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">پاخانہ کرتے وقت یا اس کے بعد شوخ سرخ رنگ کے خون کا اخراج ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HeartPulse className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">مقعد کے حصے میں سوجن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">مقعد کے باہر گانٹھیں (Lumps) بن جانا یا نمایاں سوجن محسوس ہونا۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Early Symptoms of Piles</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Do not ignore any of the following symptoms:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pain:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Severe pain and discomfort around the anal area, especially when sitting or during bowel movements.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleAlert className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Chronic Constipation:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Persistent constipation, which is both a major cause and a symptom of this condition.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Itching:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Intense itching and irritation in the anal region.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Bleeding:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Passing bright red blood during or after bowel movements.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HeartPulse className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Swelling:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Formation of lumps or noticeable swelling outside the anus.</span>
                        </div>
                      </li>
                    </ul>
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
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">علاج اور احتیاط (Treatment & Care)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      بواسیر کا علاج اس کے درجے (Stage) پر منحصر ہے۔ ابتدائی مراحل میں اسے پانی کے زیادہ استعمال، فائبر والی خوراک اور ادویات سے کنٹرول کیا جا سکتا ہے۔ تاہم، اگر گانٹھیں بڑھ جائیں اور خون یا درد مسلسل رہے، تو بغیر کسی چیر پھاڑ کے جدید طریقوں (جیسے بینڈنگ یا سرجری) کے ذریعے اس کا مکمل اور محفوظ علاج کیا جاتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">Treatment & Care</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Treatment for hemorrhoids depends on their stage. In early stages, it can be controlled with increased water intake, a high-fiber diet, and medications. However, if the lumps enlarge and bleeding or pain persists, safe and advanced treatments (such as rubber band ligation or surgery) provide a complete and permanent cure.
                    </p>
                  </>
                }
              />
            </section>

          </div>
        </SlideUp>

        {/* CTA */}
        <SlideUp delay={0.2}>
          <div className="bg-gradient-to-br from-primary to-[#0f3b60] rounded-3xl p-8 sm:p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <Translate
              ur={
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ بواسیر کی ان تکلیف دہ علامات کا شکار ہیں؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you suffering from these painful symptoms of piles?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">اپنی تکلیف کو مزید نہ بڑھنے دیں۔ آج ہی ہمارے کلینک سے رابطہ کریں اور درست علاج پائیں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Do not let your pain worsen. Contact our clinic today for the right treatment.)</span></p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Piles/Bawaseer"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you suffering from these painful symptoms of piles?</h2>
                  <p className="text-lg text-white/90 mb-8">Do not let your pain worsen. Contact our clinic today for the right treatment.</p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Piles/Bawaseer"
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
                src="/images/services/piles_banner.webp"
                alt="Piles Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/piles_banner.webp"
                alt="Piles Banner"
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
