import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Activity, Stethoscope, Droplets, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";
import { Translate } from "@/components/ui/Translate";

export const metadata: Metadata = {
  title: "Uterine Fibroids: Symptoms and Treatment | Choudhary Clinic",
  description: "Learn about Uterine Fibroids (بچے دانی کی رسولی), their symptoms, and advanced treatments provided by Dr. Sehar Waseem Chaudhary in Multan.",
};

export default function FibroidsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <Translate ur={<span>Back to Home</span>} en={<span>Back to Home</span>} />
        </Link>

        {/* Header */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <Translate
              ur={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight urdu-text" dir="rtl">
                    بچے دانی کی رسولی
                    <span className="block text-2xl sm:text-3xl font-bold text-pink-600 mt-4" dir="ltr">
                      (Uterine Fibroids)
                    </span>
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed urdu-text border-r-4 border-pink-500 pr-4 mt-6" dir="rtl">
                    ڈاکٹر سحر وسیم چوہدری (ماہر امراض نسواں) کی زیر نگرانی، ہم خواتین کی صحت اور ان کے مسائل کا بہترین اور جدید علاج فراہم کرتے ہیں۔
                  </p>
                </>
              }
              en={
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Uterine Fibroids
                  </h1>
                  <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-pink-500 pl-4 mt-6">
                    Under the supervision of Dr. Sahar Waseem Chaudhary (Gynecologist), we provide the best and most advanced treatments for women's health issues.
                  </p>
                </>
              }
            />
          </div>
        </FadeIn>

        {/* Main Content */}
        <SlideUp delay={0.1}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 mb-8 space-y-12">

            <section>
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-6" dir="rtl">
                      <AlertCircle className="w-8 h-8 text-pink-600 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">رسولی کیا ہے؟ (What are Fibroids?)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      یہ بچے دانی (Uterus) کے اندر یا باہر بننے والی اضافی گلٹیاں ہوتی ہیں۔ یہ عموماً کینسر نہیں ہوتیں اور زیادہ تر خطرناک بھی نہیں ہوتیں۔ تاہم، اگر ان کا سائز بڑھ جائے یا ان کی جگہ حساس ہو، تو یہ بعض اوقات ماہواری میں زیادہ خون آنے، شدید درد، یا حمل میں مشکلات کا باعث بن سکتی ہیں۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <AlertCircle className="w-8 h-8 text-pink-600 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">What are Fibroids?</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Fibroids are non-cancerous growths that develop in or around the uterus. They are typically benign and mostly harmless. However, if they grow large or are located in sensitive areas, they can cause heavy menstrual bleeding, severe pain, or pregnancy complications.
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
                      <Activity className="w-8 h-8 text-pink-500 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900 urdu-text">رسولی کی علامات (Symptoms of Fibroids)</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6 urdu-text" dir="rtl">
                      اگرچہ بعض خواتین میں اس کی کوئی علامات ظاہر نہیں ہوتیں، لیکن درج ذیل علامات محسوس ہونے پر ڈاکٹر سے رجوع کرنا ضروری ہے:
                    </p>
                    <ul className="space-y-4" dir="rtl">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">بار بار پیشاب آنا:</strong>
                          <span className="text-slate-700 text-lg mr-2 urdu-text">مثانے پر دباؤ کی وجہ سے بار بار پیشاب آنے کی شکایت۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">درد اور دباؤ:</strong>
                          <span className="text-slate-700 text-lg mr-2 urdu-text">پیٹ کے نچلے حصے یا کمر میں مسلسل درد اور دباؤ کا احساس۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">بھاری پن:</strong>
                          <span className="text-slate-700 text-lg mr-2 urdu-text">پیٹ یا رحم کا پھول جانا اور غیر معمولی بھاری پن محسوس ہونا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">زیادہ خون آنا:</strong>
                          <span className="text-slate-700 text-lg mr-2 urdu-text">ماہواری (حیض) کے دوران معمول سے بہت زیادہ خون آنا۔</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg urdu-text">طویل ماہواری:</strong>
                          <span className="text-slate-700 text-lg mr-2 urdu-text">ماہواری کا معمول سے زیادہ دنوں تک جاری رہنا۔</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Activity className="w-8 h-8 text-pink-500 shrink-0" />
                      <h2 className="text-2xl font-bold text-slate-900">Symptoms of Fibroids</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Although some women show no symptoms at all, it is important to consult a doctor if you experience the following:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Frequent Urination:</strong>
                          <span className="text-slate-700 text-lg ml-2">Urge to urinate frequently due to pressure on the bladder.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Pain and Pressure:</strong>
                          <span className="text-slate-700 text-lg ml-2">Constant feeling of pain or pressure in the lower abdomen or back.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                        <div>
                          <strong className="text-slate-900 text-lg">Heaviness:</strong>
                          <span className="text-slate-700 text-lg ml-2">Bloating or a feeling of unusual heaviness in the pelvic area.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Droplets className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Heavy Bleeding:</strong>
                          <span className="text-slate-700 text-lg ml-2">Unusually heavy bleeding during menstruation.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-pink-500 shrink-0 mt-1" />
                        <div>
                          <strong className="text-slate-900 text-lg">Prolonged Periods:</strong>
                          <span className="text-slate-700 text-lg ml-2">Menstrual periods lasting much longer than normal.</span>
                        </div>
                      </li>
                    </ul>
                  </>
                }
              />
            </section>

            <section className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100">
              <Translate
                ur={
                  <>
                    <div className="flex items-center gap-3 mb-4" dir="rtl">
                      <Stethoscope className="w-6 h-6 text-pink-600 shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900 urdu-text">ماہر امراض نسواں سے کب ملیں؟ (Consultation & Next Steps)</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed urdu-text" dir="rtl">
                      اگر آپ کو ان میں سے کوئی بھی علامات محسوس ہو رہی ہیں، تو بروقت تشخیص بہت اہم ہے۔ الٹراساؤنڈ کے ذریعے رسولی کی جسامت اور نوعیت کا جائزہ لینے کے بعد ادویات یا سرجری کے ذریعے اس کا محفوظ علاج کیا جا سکتا ہے۔ خان میڈیکل سٹی، نشتر روڈ پر واقع ہماری کلینک میں تشریف لائیں تاکہ آپ کی صحت کا مکمل معائنہ کیا جا سکے۔
                    </p>
                  </>
                }
                en={
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <Stethoscope className="w-6 h-6 text-pink-600 shrink-0" />
                      <h3 className="text-xl font-bold text-slate-900">When to Consult a Gynecologist</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If you are experiencing any of these symptoms, early diagnosis is crucial. By evaluating the size and nature of the fibroid through an ultrasound, it can be safely treated with medication or surgery. Visit our clinic at Khan Medical City, Nishtar Road, for a comprehensive health evaluation.
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 urdu-text" dir="rtl">کیا آپ کو رسولی کی علامات محسوس ہو رہی ہیں؟<br /><span className="text-xl mt-2 block font-normal" dir="ltr">(Are you experiencing fibroid symptoms?)</span></h2>
                  <p className="text-lg text-white/90 mb-8 urdu-text" dir="rtl">آج ہی ہماری ماہر امراض نسواں سے مشورہ کریں۔<br /><span className="text-base mt-1 block font-normal" dir="ltr">(Consult our expert gynecologist today.)</span></p>

                  <a
                    href="https://wa.me/923001775530?text=I%20would%20like%20to%20book%20a%20gynecology%20consultation%20with%20Dr.%20Sahar"
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
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Are you experiencing fibroid symptoms?</h2>
                  <p className="text-lg text-white/90 mb-8">Consult our expert gynecologist today for a professional evaluation.</p>

                  <a
                    href="https://wa.me/923001775530?text=I%20would%20like%20to%20book%20a%20gynecology%20consultation%20with%20Dr.%20Sahar"
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
                src="/images/services/fibroids_uterus_banner.webp"
                alt="Uterine Fibroids Banner Black and White"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* Foreground Colored Image */}
            <div className="absolute top-[30%] right-0 w-[75%] z-10 shadow-2xl">
              <Image
                src="/images/services/fibroids_uterus_banner.webp"
                alt="Uterine Fibroids Banner"
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
