import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope, Droplets, Flame } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Gallstones: Symptoms and Treatment | Choudhary Clinic",
  description: "Learn about Gallstones (پتے کی پتھری), their causes, symptoms, and advanced laparoscopic treatments by Dr. Waseem Abbas Chaudhary in Multan.",
};

export default function GallstonesPage() {
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight urdu-text" dir="rtl">
                  پتے کی پتھری کیا ہے؟ وجوہات، علامات اور علاج
                  <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                    (Gallstones: Causes, Symptoms, and Treatment)
                  </span>
                </h1>
              }
              en={
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Gallstones: Causes, Symptoms, and Treatment
                </h1>
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">پتے کی پتھری کیا ہے؟ (What are Gallstones?)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      پتے کی پتھریاں (Gallstones) چھوٹے سخت ذرات ہوتے ہیں جو پتے (Gallbladder) کے اندر بنتے ہیں۔ جب پتے میں موجود کولیسٹرول یا دیگر مادے زیادہ ہو جاتے ہیں، یا صحیح طریقے سے خارج نہیں ہو پاتے، تو یہ مادے جمع ہو کر پتھری کی شکل اختیار کر لیتے ہیں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What are Gallstones?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Gallstones are small, hard deposits that form inside the gallbladder. When cholesterol or other substances in the gallbladder become concentrated, or do not drain properly, these materials collect and solidify into stones.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">پتے کی پتھری کی علامات (Symptoms of Gallstones):</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      اگر پتھری پتے کی نالی میں پھنس جائے تو یہ شدید تکلیف کا باعث بن سکتی ہے۔ اس کی عام علامات درج ذیل ہیں:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">پیٹ کی دائیں طرف (اوپری حصے میں) شدید درد ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">نظام ہاضمہ کی خرابی:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">قے یا متلی ہونا اور پیٹ کا پھولنا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">جلن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">سینے اور معدے میں جلن کا احساس۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">یرقان (Jaundice):</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">جلد اور آنکھوں کا پیلا پڑ جانا، جو اس بات کی نشاندہی کرتا ہے کہ پتھری نے پتے کی نالی کو بلاک کر دیا ہے۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Symptoms of Gallstones</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      If a gallstone gets lodged in a bile duct, it can cause severe discomfort. Common symptoms include:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pain:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Severe pain in the upper right part of the abdomen.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Digestive Issues:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Nausea, vomiting, and abdominal bloating.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Heartburn:</strong> 
                          <span className="text-slate-700 text-lg ml-2">A sensation of burning in the chest or stomach.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Jaundice:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Yellowing of the skin and eyes, indicating that a stone has blocked a bile duct.</span>
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
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">علاج اور مشورہ (Treatment and Consultation):</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      پتے کی پتھری کا سب سے موثر اور مستقل علاج سرجری (عام طور پر لیپروسکوپک سرجری) کے ذریعے پتے کو نکالنا ہے۔ بروقت تشخیص اور علاج سے آپ مستقبل کی پیچیدگیوں اور شدید درد سے بچ سکتے ہیں۔ خان میڈیکل سٹی، نشتر روڈ پر ہمارے ماہر سرجن جدید ترین سہولیات کے ساتھ آپ کے علاج کے لیے موجود ہیں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">Treatment and Consultation</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The most effective and permanent treatment for gallstones is surgical removal of the gallbladder (usually via laparoscopic surgery). Early diagnosis and treatment can prevent future complications and severe pain. Our expert surgeon at Khan Medical City, Nishtar Road, is available with state-of-the-art facilities for your treatment.
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ کو پتے کی پتھری کی علامات محسوس ہو رہی ہیں؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you experiencing gallstone symptoms?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">درد کو نظر انداز نہ کریں۔ آج ہی ہمارے ماہر سرجن سے مشورہ کریں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Do not ignore the pain. Consult our expert surgeon today.)</span></p>
                  
                  <a 
                    href="https://wa.me/923001775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Gallstones"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you experiencing gallstone symptoms?</h2>
                  <p className="text-lg text-white/90 mb-8">Do not ignore the pain. Consult our expert surgeon today.</p>
                  
                  <a 
                    href="https://wa.me/923001775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Gallstones"
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
                src="/images/services/gallstones_banner.webp"
                alt="Gallstones Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/gallstones_banner.webp"
                alt="Gallstones Banner"
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
