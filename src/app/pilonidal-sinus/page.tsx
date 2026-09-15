import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  AlertCircle, 
  Activity, 
  Stethoscope, 
  Droplets, 
  CircleAlert, 
  Flame, 
  Clock, 
  Scissors, 
  Layers, 
  ShieldCheck, 
  Video 
} from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Pilonidal Sinus: Symptoms, Causes & Surgery | Choudhary Clinic",
  description: "Learn about Pilonidal Sinus (پائیلونائیڈل سائنس), its symptoms, causes, and advanced permanent surgical treatment by Dr. Muhammad Waseem Abbas Chaudhary in Multan.",
  alternates: {
    canonical: '/pilonidal-sinus',
  },
};

export default function PilonidalSinusPage() {
  const whatsappUrl = "https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Waseem%20for%20Pilonidal%20Sinus";

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium mb-8 transition-colors"
        >
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
                    پائیلونائیڈل سائنس: علامات، وجوہات اور جدید علاج
                    <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                      (Pilonidal Sinus: Symptoms, Causes, and Modern Treatment)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    ڈاکٹر محمد وسیم عباس چوہدری (لیپروسکوپک اور جنرل سرجن) کی زیرِ نگرانی چوہدری کلینک میں پائیلونائیڈل سائنس کا جدید اور مستقل علاج۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Pilonidal Sinus: Symptoms, Causes, and Modern Treatment
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Advanced and permanent treatment for Pilonidal Sinus under the expert supervision of Dr. Muhammad Waseem Abbas Chaudhary (Laparoscopic & General Surgeon) at Choudhary Clinic.
                  </p>
                </>
              }
            />
          </div>
        </FadeIn>

        {/* Main Content */}
        <SlideUp delay={0.1}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 mb-8 space-y-12">
            
            {/* Section: What is Pilonidal Sinus */}
            <section>
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-6" dir="rtl">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">
                        پائیلونائیڈل سائنس کیا ہے؟ (What is a Pilonidal Sinus?)
                      </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text mb-4" dir="rtl">
                      پائیلونائیڈل سائنس ریڑھ کی ہڈی کے بالکل نچلے سرے پر (کولہوں کے درمیان) جلد کے اندر بننے والی ایک چھوٹی نالی یا سرنگ (Tract) کو کہتے ہیں۔ جب ٹوٹے ہوئے بال جلد کے اندر دھنس جاتے ہیں، تو جسم انہیں بیرونی خطرہ سمجھ کر ان کے گرد سوجن اور انفیکشن پیدا کر دیتا ہے۔
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      وقت کے ساتھ ساتھ یہ ایک ناسور یا دائمی زخم کی شکل اختیار کر لیتا ہے۔ یہ مسئلہ عموماً نوجوانوں اور زیادہ دیر بیٹھ کر کام کرنے والے افراد میں عام ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        What is a Pilonidal Sinus?
                      </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      A pilonidal sinus is a small channel or tunnel (tract) that develops beneath the skin at the base of the tailbone, right in the cleft between the buttocks. When loose or broken hair penetrates into the skin, the body treats them as a foreign element, causing local inflammation and bacterial infection.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Over time, this turns into a chronic discharging wound or recurring abscess. It is particularly prevalent among young adults and people whose lifestyle involves prolonged sitting.
                    </p>
                  </>
                }
              />
            </section>

            {/* Section: Symptoms */}
            <section>
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-6" dir="rtl">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">
                        نمایاں علامات (Symptoms of Pilonidal Sinus)
                      </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      اگر آپ کو ریڑھ کی ہڈی کے نچلے حصے میں درج ذیل علامات محسوس ہوں تو فوری معائنہ کروائیں:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد اور سوجن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">دمچی (Tailbone) کی ہڈی کے قریب کولہوں کے درمیانی حصے میں شدید درد، سرخی اور سوجن ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">پیپ اور خون کا اخراج:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">متاثرہ جگہ پر موجود چھوٹے سوراخوں سے بدبودار پیپ یا خون رسنا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">بیٹھنے میں دشواری:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">کرسی یا سخت سطح پر بیٹھتے وقت شدید تکلیف اور چبھن کا احساس ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleAlert className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">سخت گٹھلی یا پھوڑا:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">متاثرہ جگہ پر ہاتھ لگانے سے جلد کے نیچے ایک سخت، تکلیف دہ ابھار محسوس ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">ہلکا بخار:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">شدید انفیکشن کی صورت میں جسم میں سستی اور ہلکا بخار محسوس ہو سکتا ہے۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        Symptoms of Pilonidal Sinus
                      </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Do not ignore any of the following symptoms near the base of your spine:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pain and Swelling:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Severe pain, redness, and swelling in the natal cleft near the tailbone.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pus and Blood Discharge:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Foul-smelling pus or blood oozing from small pit openings in the affected area.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Difficulty Sitting:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Sharp pain, tenderness, and discomfort when sitting on chairs or hard surfaces.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CircleAlert className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Hard Lump or Abscess:</strong> 
                          <span className="text-slate-700 text-lg ml-2">A firm, tender lump or painful swelling felt under the skin upon palpation.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Flame className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Mild Fever:</strong> 
                          <span className="text-slate-700 text-lg ml-2">In cases of acute infection, general body weakness and mild fever may develop.</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
              />
            </section>

            {/* Section: Causes and Risk Factors */}
            <section className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-6" dir="rtl">
                      <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">
                        بیماری کی وجوہات اور خطرات (Causes and Risk Factors)
                      </h2>
                    </div>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">زیادہ دیر بیٹھنا:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">طویل دورانیے تک مسلسل بیٹھ کر کام کرنا (جیسے ڈرائیونگ، آئی ٹی کا کام یا پڑھائی)۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scissors className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">بالوں کا جلد میں گھسنا:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">جلد کے نچلے حصے پر موٹے بالوں کا جلد کے اندر مڑ جانا (Ingrown hair)۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">مسلسل رگڑ:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">سخت اور تنگ کپڑوں کے باعث اس حصے پر مسلسل دباؤ اور پسینہ آنا۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        Causes and Risk Factors
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Prolonged Sitting:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Sitting continuously for long hours (such as driving, desk jobs, IT work, or studying).</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scissors className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Ingrown / Penetrating Hair:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Coarse hair growing inward or loose hairs forced into the skin pores by pressure.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Continuous Friction:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Constant rubbing and excessive pressure from tight clothes combined with moisture and sweat.</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
              />
            </section>

            {/* Section: Permanent Treatment */}
            <section>
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-4" dir="rtl">
                      <Stethoscope className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">
                        مستقل علاج (Treatment Options)
                      </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                      صرف مرہم یا وقتی اینٹی بائیوٹکس اس بیماری کا مستقل حل نہیں ہیں۔ اگر انفیکشن زیادہ ہو جائے تو وقتی طور پر پیپ نکالنا (Drainage) ضروری ہوتا ہے، لیکن اس کا مکمل اور مستقل علاج سرجری ہے۔
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      سرجری کے دوران ناسور کی اندرونی نالی اور بالوں کو جڑ سے صاف کر دیا جاتا ہے تاکہ یہ بیماری دوبارہ نہ ابھرے۔ جدید طریقوں کے بعد مریض جلد اپنی معمول کی سرگرمیوں پر واپس لوٹ سکتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        Permanent Treatment Options
                      </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      Topical ointments or temporary courses of antibiotics do not provide a permanent cure. If an acute abscess forms, immediate incision and drainage provides temporary relief, but definitive eradication requires surgical intervention.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      During surgery, the sinus tract and nested hair follicles are completely excised from the root to eliminate the risk of recurrence. With modern surgical techniques, patient recovery is swift, allowing a quick return to everyday activities.
                    </p>
                  </>
                }
              />
            </section>

            {/* Video Procedure Section */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                <Translate
                  ur={
                    <div className="flex-1 text-right md:pl-2 w-full" dir="rtl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                        <Video className="w-3.5 h-3.5" />
                        <span>سرجیکل طریقہ کار</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 urdu-text">
                        پائیلونائیڈل سائنس کا طریقہ علاج
                        <span className="block text-sm uppercase tracking-wider font-normal mt-1 text-slate-500" dir="ltr">
                          Pilonidal Sinus Procedure
                        </span>
                      </h3>
                      <div className="w-12 h-0.5 bg-primary mb-4 ml-auto"></div>
                      <p className="text-slate-600 urdu-text leading-relaxed text-base sm:text-lg">
                        ڈاکٹر محمد وسیم عباس چوہدری کے جدید اور محفوظ سرجیکل طریقہ کار کی لائیو ویڈیو دیکھیں۔
                        <span className="block text-sm font-normal mt-2 text-slate-500" dir="ltr">
                          Watch the live surgical technique and procedure demonstration.
                        </span>
                      </p>
                    </div>
                  }
                  en={
                    <div className="flex-1 text-left w-full">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                        <Video className="w-3.5 h-3.5" />
                        <span>Surgical Demonstration</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        Pilonidal Sinus Procedure
                      </h3>
                      <div className="w-12 h-0.5 bg-primary mb-4"></div>
                      <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                        Watch the advanced, minimally invasive surgical technique performed by Dr. Muhammad Waseem Abbas Chaudhary.
                      </p>
                    </div>
                  }
                />

                {/* Vertical Video Player Frame */}
                <div className="flex-shrink-0 w-full sm:w-[260px] md:w-[280px] lg:w-[320px]">
                  <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                    <video
                      src="/videos/Pilonidal_Sinus_procedure.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">
                    کیا آپ ریڑھ کی ہڈی کے نچلے حصے میں درد یا پیپ کے اخراج کا شکار ہیں؟
                    <br/>
                    <span className="text-xl mt-2 block font-normal" dir="ltr">
                      (Are you experiencing tailbone pain or pus discharge?)
                    </span>
                  </h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">
                    علامات کو چھپانے یا نظر انداز کرنے سے انفیکشن پھیل سکتا ہے۔ آج ہی ہمارے ماہر جنرل سرجن سے معائنہ کروائیں۔
                    <br/>
                    <span className="text-base mt-1 block font-normal" dir="ltr">
                      (Hiding or ignoring symptoms can spread infection. Get evaluated by our expert general surgeon today.)
                    </span>
                  </p>
                  
                  <a 
                    href={whatsappUrl}
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Are you experiencing tailbone pain or pus discharge?
                  </h2>
                  <p className="text-lg text-white/90 mb-8">
                    Hiding or ignoring symptoms can cause the infection to spread. Get evaluated by our expert general surgeon today.
                  </p>
                  
                  <a 
                    href={whatsappUrl}
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
            <div className="w-[75%] z-0 grayscale relative rounded-2xl overflow-hidden">
              <Image
                src="/images/services/pilonidal_Sinus_banner.webp"
                alt="Pilonidal Sinus Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl rounded-2xl overflow-hidden">
              <Image
                src="/images/services/pilonidal_Sinus_banner.webp"
                alt="Pilonidal Sinus Banner"
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
