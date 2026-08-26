import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Uterine Cancer Care & Treatment | Choudhary Clinic",
  description: "Learn about uterine cancer (بچے دانی کا کینسر) symptoms, early diagnosis, and safe surgical treatments by Dr. Sahar Waseem Chaudhary in Multan.",
};

export default function UterineCancerPage() {
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
                    بچے دانی کا کینسر: علامات، وجوہات اور علاج
                    <span className="block text-xl sm:text-2xl font-bold text-primary mt-4" dir="ltr">
                      (Uterine Cancer: Symptoms, Causes, and Treatment)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    ڈاکٹر سحر وسیم چوہدری (ماہر امراض نسواں) کی زیرِ نگرانی خواتین کی صحت، پیچیدہ امراض کی تشخیص اور جدید علاج کی مکمل سہولیات۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Uterine Cancer: Symptoms, Causes, and Treatment
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Comprehensive facilities for women's health, diagnosis of complex diseases, and modern treatment under the supervision of Dr. Sahar Waseem Chaudhary (Gynecologist).
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">بچے دانی کا کینسر کیا ہے؟ (What is Uterine Cancer?)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      بچے دانی کا کینسر (جسے Endometrial Cancer بھی کہا جاتا ہے) خواتین کے تولیدی نظام کی ایک سنگین بیماری ہے جو رحم (Uterus) کے اندرونی خلیات میں غیر معمولی اضافے کی وجہ سے پیدا ہوتی ہے۔ یہ مرض عموماً 50 سال سے زائد عمر کی خواتین یا ان خواتین میں زیادہ دیکھا جاتا ہے جو سنِ یاس (Menopause) سے گزر چکی ہوں۔ اچھی خبر یہ ہے کہ اگر اس مرض کی بروقت تشخیص ہو جائے تو یہ مکمل طور پر قابلِ علاج ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What is Uterine Cancer?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Uterine cancer (also known as Endometrial Cancer) is a serious disease of the female reproductive system caused by abnormal growth of cells inside the uterus. This disease is more commonly seen in women over the age of 50 or those who have gone through menopause. The good news is that if diagnosed in time, it is completely curable.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ابتدائی علامات (Early Symptoms)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      خواتین کو درج ذیل علامات کو ہرگز نظر انداز نہیں کرنا چاہیے اور فوراً ڈاکٹر سے رجوع کرنا چاہیے:
                    </p>
                    <ul className="space-y-4 mb-6" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text"><strong className="font-bold">غیر معمولی خون آنا:</strong> ماہواری کے دنوں کے علاوہ خون آنا، یا سنِ یاس (Menopause) کے بعد دوبارہ خون کا اخراج ہونا۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text"><strong className="font-bold">غیر معمولی رطوبت:</strong> اندام نہانی (Vagina) سے غیر معمولی، بدبودار یا پانی جیسی رطوبت کا خارج ہونا۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text"><strong className="font-bold">پیٹ اور کمر کا درد:</strong> پیٹ کے نچلے حصے (Pelvic area) یا کمر میں مسلسل درد اور بھاری پن محسوس ہونا۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg mr-2 urdu-text"><strong className="font-bold">پیشاب میں تکلیف:</strong> پیشاب کرتے وقت درد یا جلن کا احساس ہونا۔</span>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Early Symptoms</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Women should never ignore the following symptoms and should consult a doctor immediately:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg"><strong className="font-bold">Abnormal Bleeding:</strong> Bleeding outside of menstrual periods, or recurrent bleeding after menopause.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg"><strong className="font-bold">Unusual Discharge:</strong> Abnormal, foul-smelling, or watery discharge from the vagina.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg"><strong className="font-bold">Pelvic & Back Pain:</strong> Constant pain and heaviness in the lower abdomen (pelvic area) or lower back.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-slate-700 text-lg"><strong className="font-bold">Painful Urination:</strong> Feeling pain or a burning sensation while urinating.</span>
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
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">بروقت تشخیص اور علاج (Diagnosis and Treatment)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      بچے دانی کے کینسر کا علاج اس کے اسٹیج پر منحصر ہے۔ الٹراساؤنڈ اور بائیوپسی (Biopsy) کے ذریعے اس کی درست تشخیص کی جاتی ہے۔ علاج کے طریقوں میں سرجری (جس میں کینسر سے متاثرہ رحم کو نکال دیا جاتا ہے)، اور ضرورت پڑنے پر ادویات یا شعاعوں (Radiation) کا استعمال شامل ہے۔ چوہدری کلینک میں ہماری ماہر امراضِ نسواں مریض کی مکمل رازداری کے ساتھ اس کی تشخیص اور بہترین رہنمائی فراہم کرتی ہیں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">Diagnosis and Treatment</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Treatment for uterine cancer depends on its stage. It is accurately diagnosed through ultrasound and biopsy. Treatment options include surgery (where the cancer-affected uterus is removed), and if necessary, medications or radiation therapy. At Choudhary Clinic, our expert gynecologist provides diagnosis and optimal guidance with complete patient confidentiality.
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
                    "/videos/uterine-cancer_testimonial-1.mp4",
                    "/videos/uterine-cancer_testimonial-2.mp4",
                    "/videos/uterine-cancer_testimonial-3.mp4"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ کسی بھی قسم کی غیر معمولی علامت کا سامنا کر رہی ہیں؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you experiencing any unusual symptoms?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">اپنی صحت کو نظر انداز نہ کریں۔ بروقت تشخیص زندگی بچا سکتی ہے۔ آج ہی ہماری ماہر امراضِ نسواں سے مکمل رازداری کے ساتھ مشورہ کریں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Do not ignore your health. Early diagnosis can save lives. Consult our gynecologist today with complete confidentiality.)</span></p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20confidential%20gynecology%20consultation%20with%20Dr.%20Sahar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20b858] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    <span className="urdu-text" dir="rtl">WhatsApp پر اپوائنٹمنٹ بک کریں</span>
                    <span className="text-sm font-normal mr-2" dir="ltr">(Book Appointment on WhatsApp)</span>
                  </a>
                </>
              }
              en={
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you experiencing any unusual symptoms?</h2>
                  <p className="text-lg text-white/90 mb-8">Do not ignore your health. Early diagnosis can save lives. Consult our gynecologist today with complete confidentiality.</p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20confidential%20gynecology%20consultation%20with%20Dr.%20Sahar"
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

      </div>
    </div>
  );
}
