import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Stethoscope, ShieldAlert, HeartPulse, ShieldCheck, FileWarning } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "CBD Stones & IOC Treatment | Choudhary Clinic",
  description: "Learn about modern intraoperative choledochoscopy (IOC) treatment for CBD stones (پتے کی نالی میں پتھری) by Dr. Waseem Abbas Chaudhary.",
};

export default function CBDStonesPage() {
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
                    پتے کی نالی میں پتھری اور IOC کے ذریعے جدید علاج
                    <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                      (CBD Stones & IOC Treatment)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    چوہدری سرجیکل اینڈ گائنی کلینک میں پتے کی نالی (CBD) کی پتھری کا جدید اور موثر علاج۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    CBD Stones & Modern IOC Treatment
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Advanced and effective treatment for Common Bile Duct (CBD) stones at Choudhary Surgical & Gynae Clinic.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">پتے کی نالی میں پتھری کا علاج (Treatment for CBD Stones)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      CBD یعنی پتے کی نالی میں پتھری کی صورت میں اب انٹراآپریٹو کولیڈوکوسکوپی (IOC) کے ذریعے کامیاب علاج ممکن ہے۔ یہ ایک جدید اور محفوظ طریقہ ہے جو مریضوں کو پیچیدہ سرجریوں سے بچاتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Treatment for CBD Stones</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      In the case of CBD (Common Bile Duct) stones, successful treatment is now possible through Intraoperative Choledochoscopy (IOC). This is an advanced and safe method that saves patients from complex open surgeries.
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
                      <Stethoscope className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">IOC کیسے کی جاتی ہے؟ (How is IOC Performed?)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      یہ ایک جدید ٹیکنیک ہے جس میں سرجری کے دوران ایک کیمرے والا خاص آلہ (کولیڈوکوسکوپ - Choledochoscope) استعمال کیا جاتا ہے۔ اس آلے کی مدد سے سرجن CBD (مشترکہ پتے کی نالی) میں براہ راست دیکھ کر پتھریوں کی درست نشاندہی کرتا ہے اور ان کی مکمل صفائی یقینی بناتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Stethoscope className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">How is IOC Performed?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      It is a modern technique in which a special instrument with a camera (Choledochoscope) is used during surgery. With the help of this instrument, the surgeon can directly view the CBD, accurately identify stones, and ensure their complete removal.
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
                      <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">اس طریقہ علاج کے فوائد (Benefits of IOC)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                      یہ طریقہ علاج درج ذیل صورتوں میں روایتی طریقوں سے زیادہ مؤثر، معیاری اور کم خرچ ہے:
                    </p>
                    <ul className="space-y-3 mb-4 urdu-text text-lg text-slate-700" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>جب ERCP (اینڈوسکوپک طریقہ علاج) ناکام ہو جائے۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>جب پتے کی نالی میں موجود پتھری کا سائز بہت بڑا ہو۔</span>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">Benefits of IOC</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      This treatment method is more effective, high-quality, and cost-efficient than traditional methods in the following situations:
                    </p>
                    <ul className="space-y-3 mb-4 text-lg text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>When ERCP (Endoscopic Retrograde Cholangiopancreatography) fails.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>When the stones present in the bile duct are very large.</span>
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
                      <FileWarning className="w-8 h-8 text-red-500 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">بروقت علاج کیوں ضروری ہے؟ (Risks of Delaying Treatment)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      اس بیماری کی علامات کو کبھی نظر انداز نہیں کرنا چاہیے۔ اگر پتے کی نالی کی پتھری کا بروقت علاج نہ ہو تو درج ذیل سنگین مسائل پیدا ہو سکتے ہیں:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">پیلیا (Jaundice):</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">یرقان کا شدت اختیار کر جانا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">انفیکشن (Infection):</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">نالی میں پیپ پڑ جانا یا شدید انفیکشن ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HeartPulse className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">جگر کی خرابی (Liver Damage):</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">جگر کے افعال کا بری طرح متاثر ہونا۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <FileWarning className="w-8 h-8 text-red-500 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Risks of Delaying Treatment</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      The symptoms of this condition should never be ignored. If CBD stones are not treated promptly, the following serious complications may arise:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Jaundice:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Severe worsening of jaundice.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Infection:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Formation of pus in the duct or a severe infection (Cholangitis).</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HeartPulse className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Liver Damage:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Liver function becoming severely compromised.</span>
                        </div>
                      </li>
                    </ul>
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کسی بھی سوال یا مشورے کے لیے ہم سے رابطہ کریں۔<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Contact us for any questions or consultation.)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">پتے کی نالی کے مسائل میں تاخیر خطرناک ہو سکتی ہے۔ آج ہی چوہدری سرجیکل اینڈ گائنی کلینک (خان میڈیکل سٹی، نشتر روڈ) میں اپوائنٹمنٹ بک کریں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Delaying CBD issues can be dangerous. Book your appointment today.)</span></p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20ask%20a%20question%20about%20CBD%20Stones%20and%20IOC%20Treatment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20b858] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    <span className="urdu-text" dir="rtl">WhatsApp پر رابطہ کریں</span>
                    <span className="text-sm font-normal mr-2" dir="ltr">(Contact on WhatsApp)</span>
                  </a>
                </>
              }
              en={
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact us for any questions or consultation.</h2>
                  <p className="text-lg text-white/90 mb-8">Delaying CBD issues can be dangerous. Book your appointment today at Choudhary Surgical & Gynae Clinic (Khan Medical City, Nishtar Road).</p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20ask%20a%20question%20about%20CBD%20Stones%20and%20IOC%20Treatment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20b858] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    <span>Contact on WhatsApp</span>
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
                src="/images/services/cbd_banner.webp"
                alt="CBD Stones Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/cbd_banner.webp"
                alt="CBD Stones Banner"
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
