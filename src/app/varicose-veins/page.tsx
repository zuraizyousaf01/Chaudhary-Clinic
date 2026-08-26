import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope, ActivitySquare, Pill, HeartPulse, Footprints } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Varicose Veins: Symptoms and Surgery | Choudhary Clinic",
  description: "Learn about Varicose Veins (ویریکوز وینز), symptoms, and advanced stripping and ligation surgery by Dr. Waseem Abbas Chaudhary.",
};

export default function VaricoseVeinsPage() {
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
                    ویریکوز وینز: علامات، وجوہات اور سرجری
                    <span className="block text-2xl sm:text-3xl font-bold text-primary mt-4" dir="ltr">
                      (Varicose Veins: Symptoms, Causes, and Surgery)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-primary pr-4 mt-6" dir="rtl">
                    ڈاکٹر محمد وسیم عباس چوہدری کی زیر نگرانی چوہدری کلینک میں ویریکوز وینز کا جدید اور موثر علاج۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Varicose Veins: Symptoms, Causes, and Surgery
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-4 mt-6">
                    Advanced and effective treatment for Varicose Veins under the supervision of Dr. Muhammad Waseem Abbas Chaudhary at Choudhary Clinic.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ویریکوز وینز (Varicose Veins) کیا ہیں؟</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      ویریکوز وینز جلد کے نیچے، خاص طور پر ٹانگوں میں، رگوں کے پھولنے اور مڑ جانے کی بیماری ہے۔ جب رگوں کے اندر موجود والوز (Valves) کمزور ہو جاتے ہیں، تو خون صحیح طرح اوپر کی طرف دل تک نہیں جا پاتا اور رگوں میں جمع ہونے لگتا ہے۔ اس سے رگیں نیلی یا جامنی رنگ کی ہو کر ابھر آتی ہیں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-primary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What are Varicose Veins?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Varicose veins are swollen, twisted veins that lie just under the skin, usually in the legs. When the valves inside the veins become weak, blood struggles to flow upward to the heart and instead collects in the veins. This causes the veins to bulge and turn blue or purple.
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
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">ویریکوز وینز کی علامات (Symptoms):</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      اگر آپ کو اپنی ٹانگوں میں درج ذیل علامات محسوس ہوں تو یہ ویریکوز وینز کی نشاندہی ہو سکتی ہے:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد اور بھاری پن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">ٹانگوں میں مسلسل درد، تھکاوٹ اور بھاری پن کا احساس۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ActivitySquare className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">ابھری ہوئی رگیں:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">جلد کے نیچے نیلی، جامنی یا سرخ رنگ کی ابھری ہوئی رگوں کا جال نظر آنا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HeartPulse className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">سوجن:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">ٹانگوں اور ٹخنوں میں سوجن رہنا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد میں اضافہ:</strong> 
                          <span className="text-slate-700 text-lg mr-2 urdu-text">زیادہ دیر تک کھڑے رہنے یا بیٹھنے کے بعد درد اور تکلیف میں شدت آ جانا۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-secondary shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Symptoms of Varicose Veins</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      If you experience the following symptoms in your legs, it could indicate varicose veins:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pain and Heaviness:</strong> 
                          <span className="text-slate-700 text-lg ml-2">A persistent ache, fatigue, and feeling of heaviness in the legs.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ActivitySquare className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Bulging Veins:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Visible network of swollen blue, purple, or red veins under the skin.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <HeartPulse className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Swelling:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Swelling in the lower legs and ankles.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Increased Pain:</strong> 
                          <span className="text-slate-700 text-lg ml-2">Worsening pain and discomfort after standing or sitting for long periods.</span>
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
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">علاج: اسٹرپنگ اور لائیگیشن سرجری (Treatment)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                      ویریکوز وینز کے مستقل علاج کے لیے اسٹرپنگ اور لائیگیشن (Stripping and Ligation) سرجری کی جاتی ہے۔
                    </p>
                    <ul className="space-y-3 mb-6 urdu-text text-lg text-slate-700" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>یہ بیماری سے متاثرہ رگوں کو نکالنے کا ایک انتہائی موثر طریقہ ہے۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>اس پروسیس سے ٹانگوں کا درد اور سوجن نمایاں حد تک کم ہوتی ہے۔</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>سرجری کے بعد ٹانگوں میں خون کی گردش (Blood Circulation) بہت بہتر ہو جاتی ہے۔</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="text-lg font-bold text-slate-900 mb-4 urdu-text flex items-center gap-2" dir="rtl">
                        <Pill className="w-5 h-5 text-secondary" />
                        سرجری کے بعد کی احتیاط (Post-Op Care):
                      </h4>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4 urdu-text" dir="rtl">
                        بہترین نتائج اور جلد ریکوری کے لیے سرجری کے بعد چند باتوں کا خیال رکھنا بے حد ضروری ہے:
                      </p>
                      <ul className="space-y-3 urdu-text text-lg text-slate-700" dir="rtl">
                        <li className="flex items-start gap-3">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>ڈاکٹر کی ہدایت کے مطابق کمپریشن اسٹاکنگز (Compression Stockings) لازمی پہنیں۔</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Footprints className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <span>خون کی گردش کو رواں رکھنے کے لیے روزانہ چھوٹی واک ضرور کریں۔</span>
                        </li>
                      </ul>
                    </div>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-primary shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">Treatment: Stripping and Ligation Surgery</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                      Stripping and Ligation surgery is performed as a permanent treatment for varicose veins.
                    </p>
                    <ul className="space-y-3 mb-6 text-lg text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>It is a highly effective procedure to remove the affected veins.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>This process significantly reduces leg pain and swelling.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>Blood circulation in the legs improves dramatically after surgery.</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Pill className="w-5 h-5 text-secondary" />
                        Post-Op Care:
                      </h4>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        For the best results and quick recovery, it is essential to follow these post-surgery instructions:
                      </p>
                      <ul className="space-y-3 text-lg text-slate-700">
                        <li className="flex items-start gap-3">
                          <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>Wear compression stockings strictly as advised by the doctor.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Footprints className="w-5 h-5 text-secondary shrink-0 mt-1" />
                          <span>Take short daily walks to maintain healthy blood circulation.</span>
                        </li>
                      </ul>
                    </div>
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ ویریکوز وینز کی تکلیف سے پریشان ہیں؟<br/><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you suffering from varicose veins pain?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">ابھری ہوئی رگوں اور ٹانگوں کے درد کو نظر انداز نہ کریں۔ آج ہی ہمارے ماہر سرجن سے معائنہ کروائیں۔<br/><span className="text-base mt-1 block font-normal" dir="ltr">(Do not ignore swollen veins and leg pain. Get evaluated by our expert surgeon today.)</span></p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Varicose%20Veins"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you suffering from varicose veins pain?</h2>
                  <p className="text-lg text-white/90 mb-8">Do not ignore swollen veins and leg pain. Get evaluated by our expert surgeon today.</p>
                  
                  <a 
                    href="https://wa.me/923368775530?text=I%20would%20like%20to%20book%20a%20consultation%20for%20Varicose%20Veins"
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
                src="/images/services/varicose_veins_banner.webp"
                alt="Varicose Veins Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            
            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/varicose_veins_banner.webp"
                alt="Varicose Veins Banner"
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
