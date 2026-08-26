import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertCircle, Activity, HeartPulse } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Hernia: Causes, Symptoms, and Treatment | Choudhary Clinic",
  description: "Learn about Hernia (ہارنیا), its causes, symptoms, and the advanced surgical treatments offered at Choudhary Clinic in Multan.",
  alternates: {
    canonical: '/hernia',
  },
};

export default function HerniaPage() {
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
                  ہارنیا کیا ہے اور اس کا علاج؟
                  <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                    (Hernia: Causes, Symptoms, and Treatment)
                  </span>
                </h1>
              }
              en={
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Hernia: Causes, Symptoms, and Treatment
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ہارنیا کیا ہے؟ (What is a Hernia?)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      ہارنیا اس وقت ہوتا ہے جب جسم کا کوئی اندرونی حصہ (جیسے آنت) پٹھوں یا ٹشوز کے کمزور حصے سے باہر نکل آتا ہے۔ یہ عام طور پر پیٹ، ناف، یا ران کے اوپری حصے (Groin) میں ہوتا ہے۔ اگر اس کا بروقت علاج نہ کیا جائے تو یہ بڑھ سکتا ہے اور شدید تکلیف کا باعث بن سکتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What is a Hernia?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A hernia occurs when an internal part of the body (such as an intestine) pushes through a weakness in the muscle or surrounding tissue wall. It commonly appears in the abdomen, navel, or upper thigh (groin). If not treated in time, it can grow larger and cause severe discomfort and complications.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ہارنیا کی علامات (Symptoms of Hernia):</h2>
                    </div>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">ابھار یا گٹھلی:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">پیٹ یا ران کے قریب ایک واضح ابھار محسوس ہونا جو لیٹنے پر غائب ہو جاتا ہے۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد اور تکلیف:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">کھانسنے، جھکنے، یا بھاری وزن اٹھاتے وقت درد میں اضافہ ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">بھاری پن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">پیٹ کے نچلے حصے میں دباؤ یا بھاری پن کا احساس۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">جلن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">متاثرہ جگہ پر جلن یا چبھن محسوس ہونا۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Symptoms of Hernia</h2>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Bulge or Lump:</strong> 
                          <span className="text-slate-700 text-lg ml-2">A visible bulge near the abdomen or groin that often disappears when lying down.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pain and Discomfort:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Increased pain while coughing, bending, or lifting heavy objects.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Heaviness:</strong> 
                          <span className="text-slate-700 text-lg ml-2">A sensation of pressure or heaviness in the lower abdomen.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Burning Sensation:</strong> 
                          <span className="text-slate-700 text-lg ml-2">A burning or aching feeling at the site of the bulge.</span>
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
                      <HeartPulse className="w-8 h-8 text-pink-600 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ہارنیا کا علاج (Treatment Procedure):</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      ہارنیا ادویات سے یا خود بخود ٹھیک نہیں ہوتا۔ اس کا واحد اور مستقل علاج سرجری ہے۔ سرجری کے دوران:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg urdu-text">باہر نکلے ہوئے حصے کو احتیاط سے واپس اس کی اصل جگہ پر کر دیا جاتا ہے۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg urdu-text">پٹھوں کے کمزور حصے پر ایک خاص قسم کی جالی (Mesh) لگائی جاتی ہے تاکہ اس حصے کو مضبوط بنایا جا سکے اور ہارنیا دوبارہ نہ ہو۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg urdu-text">یہ ایک محفوظ اور عام سرجری ہے، جس کے بعد مریض بہت جلد اپنی روٹین کی زندگی کی طرف واپس آ سکتا ہے۔</span>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <HeartPulse className="w-8 h-8 text-pink-600 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Treatment Procedure</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Hernias do not heal on their own or with medication. The only permanent solution is surgery. During surgery:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">The protruding tissue is carefully pushed back into its correct anatomical position.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">A special synthetic mesh is placed over the weakened muscle wall to reinforce it and prevent the hernia from recurring.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-lg">This is a highly safe and common procedure, allowing patients to return to their normal daily routine very quickly.</span>
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
                    <h3 className="text-xl font-bold text-slate-900 mb-3 urdu-text" dir="rtl">سرجری کے بعد کی احتیاط (Post-Op Care):</h3>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      سرجری کے بعد چند ہفتوں تک بھاری وزن اٹھانے اور سخت مشقت والے کاموں سے پرہیز کرنا بہت ضروری ہے تاکہ زخم مکمل طور پر ٹھیک ہو سکے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Post-Op Care</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      After surgery, it is crucial to avoid heavy lifting and strenuous physical activity for a few weeks to ensure the surgical site heals completely.
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ کو ہارنیا کی علامات محسوس ہو رہی ہیں؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you experiencing hernia symptoms?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">آج ہی ہمارے ماہر سرجن سے مشورہ کریں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Consult our expert surgeon today.)</span></p>
                  
                  <a 
                    href="https://wa.me/923001775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Hernia"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you experiencing hernia symptoms?</h2>
                  <p className="text-lg text-white/90 mb-8">Consult our expert surgeon today for a professional evaluation.</p>
                  
                  <a 
                    href="https://wa.me/923001775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Hernia"
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
                src="/images/services/hernia_Banner.webp"
                alt="Hernia Surgery Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/hernia_Banner.webp"
                alt="Hernia Surgery"
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
