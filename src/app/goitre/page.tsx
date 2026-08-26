import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope, Wind, Eye, BrainCircuit, ActivitySquare, Moon } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Goitre: Symptoms and Treatment | Choudhary Clinic",
  description: "Learn about Goitre (گلہڑ), its physical and hormonal symptoms, and advanced surgical treatments by Dr. Waseem Abbas Chaudhary.",
};

export default function GoitrePage() {
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
                    گلہڑ
                    <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                      (Goitre)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    ڈاکٹر محمد وسیم عباس چوہدری (لیپروسکوپک اور جنرل سرجن، ایم بی بی ایس، ایف سی پی ایس) کی زیر نگرانی گلہڑ اور تھائیرائیڈ کے دیگر مسائل کا جدید اور محفوظ علاج۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Goitre
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Advanced and safe treatment for Goitre and other thyroid problems under the supervision of Dr. Muhammad Waseem Abbas Chaudhary (Laparoscopic & General Surgeon, MBBS, FCPS).
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">گلہڑ کیا ہے؟ (What is Goitre?)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      تھائیرائیڈ گلینڈ (Thyroid Gland) ایک تتلی کی شکل کا غدود ہے جو گردن کے سامنے والے حصے میں واقع ہوتا ہے۔ یہ جسم کے مختلف افعال کو کنٹرول کرنے والے ہارمونز پیدا کرتا ہے۔ جب اس غدود کے افعال میں تبدیلی آتی ہے، یا اس کے سائز میں غیر معمولی اضافہ ہو جاتا ہے، تو گردن کے حصے میں ایک نمایاں ابھار یا سوجن پیدا ہو جاتی ہے جسے عام زبان میں گلہڑ کہا جاتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What is Goitre?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The thyroid gland is a butterfly-shaped gland located in the front of the neck. It produces hormones that control various bodily functions. When the function of this gland changes or its size increases abnormally, it creates a prominent bulge or swelling in the neck, commonly known as Goitre.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">گلہڑ کی علامات اور نشانیاں (Symptoms & Signs)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      گلہڑ کی علامات کو دو حصوں میں تقسیم کیا جا سکتا ہے: غدود کے بڑھنے کی وجہ سے پیدا ہونے والے مسائل، اور ہارمونز کی زیادتی کی نشانیاں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Symptoms & Signs</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Symptoms of goitre can be divided into two categories: physical problems caused by the enlarged gland, and hormonal symptoms.
                    </p>
                  </>
                }
              />

              <div className="mb-8">
                <Translate
                  ur={
                    <>
                      <h3 className="text-xl font-bold text-primary mb-4 urdu-text" dir="rtl">1. جسمانی دباؤ کی علامات (Physical Symptoms):</h3>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                        جب غدود کا سائز بہت زیادہ بڑھ جائے تو یہ سانس اور خوراک کی نالی پر دباؤ ڈال سکتا ہے:
                      </p>
                      <ul className="space-y-4" dir="rtl">
                        <li className="flex items-start gap-3">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">گردن کی سوجن:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">گردن کے اوپر گولائی کا بڑھ جانا اور واضح سوجن کا نظر آنا۔</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">نگلنے میں دشواری:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">کھانا یا پانی نگلنے میں تکلیف یا رکاوٹ محسوس ہونا۔</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Wind className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">سانس میں تکلیف:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">سانس کی نالی پر دباؤ کے باعث، خاص طور پر لیٹتے وقت سانس لینے میں دشواری۔</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <ActivitySquare className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">آواز میں تبدیلی:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">آواز کا بھاری ہو جانا یا گلے میں مسلسل دباؤ کا احساس۔</span>
                          </div>
                        </li>
                      </ul>
                    </>
                  }
                  en={
                    <>
                      <h3 className="text-xl font-bold text-primary mb-4">1. Physical Symptoms:</h3>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        When the gland becomes too large, it can put pressure on the airway and esophagus:
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <div>
                            <strong className="text-slate-900 text-lg">Neck Swelling:</strong> 
                            <span className="text-slate-700 text-lg ml-2">A visible swelling or enlargement at the base of your neck.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <div>
                            <strong className="text-slate-900 text-lg">Difficulty Swallowing:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Feeling obstruction or pain when eating or drinking.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Wind className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg">Breathing Issues:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Difficulty breathing, especially when lying down, due to pressure on the windpipe.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <ActivitySquare className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg">Voice Changes:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Hoarseness or a constant feeling of tightness in the throat.</span>
                          </div>
                        </li>
                      </ul>
                    </>
                  }
                />
              </div>

              <div>
                <Translate
                  ur={
                    <>
                      <h3 className="text-xl font-bold text-primary mb-4 urdu-text" dir="rtl">2. تھائیرائیڈ ہارمونز کی خرابی کی نشانیاں (Hormonal Symptoms):</h3>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                        جیسا کہ ہماری کلینک کی گائیڈ لائنز میں واضح کیا گیا ہے، اگر گلہڑ کی وجہ سے ہارمونز کا توازن بگڑ جائے تو یہ علامات ظاہر ہوتی ہیں:
                      </p>
                      <ul className="space-y-4" dir="rtl">
                        <li className="flex items-start gap-3">
                          <Eye className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">آنکھوں میں سوجن:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">آنکھوں کا باہر کی طرف ابھرا ہوا محسوس ہونا۔</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <BrainCircuit className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">پریشانی اور گھبراہٹ:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">بلاوجہ بے چینی، دل کی دھڑکن تیز ہونا اور گھبراہٹ کا طاری رہنا۔</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Activity className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">ہاتھوں کا کانپنا:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">ہاتھوں اور انگلیوں میں کپکپاہٹ (Tremors) محسوس ہونا۔</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Moon className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg urdu-text">نیند میں مشکل ہونا:</strong> 
                            <span className="text-slate-700 text-lg mr-2 urdu-text">بے خوابی کا شکار ہونا یا رات کو پرسکون نیند نہ آنا۔</span>
                          </div>
                        </li>
                      </ul>
                    </>
                  }
                  en={
                    <>
                      <h3 className="text-xl font-bold text-primary mb-4">2. Hormonal Symptoms:</h3>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        If the goitre causes a hormonal imbalance, the following symptoms may occur:
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <Eye className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg">Bulging Eyes:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Eyes appearing swollen or bulging outward.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <BrainCircuit className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg">Anxiety and Nervousness:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Unexplained anxiety, rapid heartbeat, and restlessness.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Activity className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg">Hand Tremors:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Shakiness or tremors in the hands and fingers.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Moon className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <div>
                            <strong className="text-slate-900 text-lg">Sleep Difficulties:</strong> 
                            <span className="text-slate-700 text-lg ml-2">Insomnia or inability to get restful sleep.</span>
                          </div>
                        </li>
                      </ul>
                    </>
                  }
                />
              </div>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-4" dir="rtl">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">گلہڑ کا علاج (Treatment Options)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                      گلہڑ کی علامات کو نظر انداز نہ کریں، وقت پر علاج آپ کی صحت بچا سکتا ہے۔ گلہڑ کا علاج اس کے سائز اور ہارمونز کی سطح پر منحصر ہے۔
                    </p>
                    <ul className="space-y-3 mb-4 urdu-text text-lg text-slate-700" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>اگر گلہڑ چھوٹا ہے، تو اسے صرف ادویات کے ذریعے کنٹرول کیا جا سکتا ہے۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>اگر گلہڑ بہت بڑا ہو جائے، نگلنے یا سانس لینے میں رکاوٹ پیدا کرے، یا کینسر کا شبہ ہو، تو اس کا سب سے موثر علاج تھائیرائیڈیکٹومی (Thyroidectomy) یعنی سرجری کے ذریعے غدود کا کچھ یا مکمل حصہ نکالنا ہے۔</span>
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      ہماری کلینک (چوہدری کلینک، خان میڈیکل سٹی، نشتر روڈ) میں جدید ترین لیپروسکوپک اور جنرل سرجری کی سہولیات کے ساتھ اس کا محفوظ اور کامیاب علاج کیا جاتا ہے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">Treatment Options</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      Do not ignore goitre symptoms; timely treatment can save your health. The treatment depends on the size of the goitre and hormone levels.
                    </p>
                    <ul className="space-y-3 mb-4 text-lg text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>If the goitre is small, it can often be controlled with medication.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>If the goitre is very large, causes difficulty breathing or swallowing, or if cancer is suspected, the most effective treatment is Thyroidectomy (partial or complete surgical removal of the gland).</span>
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      At Choudhary Clinic (Khan Medical City, Nishtar Road), we offer state-of-the-art laparoscopic and general surgery facilities for safe and successful treatment.
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ گلہڑ کی ان علامات کا شکار ہیں؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you experiencing these signs of Goitre?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">اپنی صحت پر سمجھوتہ نہ کریں۔ آج ہی ڈاکٹر محمد وسیم عباس چوہدری سے مشورہ کریں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Do not compromise on your health. Consult Dr. Waseem Abbas Choudhury today.)</span></p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Waseem%20for%20Goitre"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you experiencing these signs of Goitre?</h2>
                  <p className="text-lg text-white/90 mb-8">Do not compromise on your health. Consult Dr. Waseem Abbas Chaudhary today.</p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Waseem%20for%20Goitre"
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
                src="/images/services/goitre_banner.webp"
                alt="Goitre Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/goitre_banner.webp"
                alt="Goitre Banner"
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
