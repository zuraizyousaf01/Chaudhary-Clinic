import React from "react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";

const Card = ({ title, content, items }: { title: string, content: string, items: string[] }) => (
  <div className="flex-shrink-0 w-[85%] sm:w-[320px] lg:w-full snap-center bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
    <h3 className="text-[18px] leading-[1.4] font-bold text-[#111827] mb-2">{title}</h3>
    <p className="text-[15px] leading-[1.5] text-slate-600 mb-5 flex-grow">{content}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
          <span className="text-[15px] leading-[1.5] text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const BreastCancerSection = () => {
  return (
    <section className="py-12 lg:py-24 bg-white flex justify-center w-full">
      {/* Container Constraints: max-width 430px on mobile, max-w-7xl on desktop */}
      <div className="w-full max-w-[430px] lg:max-w-7xl px-[24px] lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          
          {/* Order 3 on mobile (bottom), Order 2 on desktop (right) */}
          <div className="w-full lg:w-5/12 order-3 lg:order-2 pt-4 lg:pt-0">
            {/* Patient Testimony (TikTok Video) */}
            <div className="text-center mb-[48px] lg:mb-0">
              <SlideUp delay={0.2}>
                <h3 className="text-[24px] lg:text-[28px] font-bold text-[#111827] mb-2">Hear From Our Patients</h3>
                <p className="text-[15px] text-slate-600 mb-6 lg:mb-8">Real stories of care and recovery.</p>

                <div className="mx-auto flex justify-center w-full max-w-[325px] rounded-[16px] overflow-hidden shadow-2xl border-4 border-white bg-black">
                  <video 
                    src="/videos/Breast-Cancer.mp4" 
                    controls 
                    playsInline
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '580px' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </SlideUp>
            </div>
          </div>

          {/* Order 1 & 2 on mobile (top), Order 1 on desktop (left) */}
          <div className="w-full lg:w-7/12 order-1 lg:order-1 flex flex-col">
            
            {/* Section Intro */}
            <div className="text-center lg:text-left mb-[48px]">
              <FadeIn>
                <h2 className="text-[28px] lg:text-[40px] leading-[1.2] font-extrabold text-[#111827] mb-4 lg:mb-6">
                  Breast Cancer is Curable
                </h2>
                <div className="text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[1.6] text-slate-600 space-y-4 lg:space-y-5">
                  <p>
                    <strong className="text-[#111827]">1 in 8 women</strong> faces the risk of developing breast cancer in their lifetime. But if diagnosed on time, treatment is possible, and life can be saved.
                  </p>
                  <p>
                    Surgery is an important step in the treatment of breast cancer, the purpose of which is to remove the cancerous part or the entire breast to eliminate the disease from the body.
                  </p>
                  <p className="text-pink-600 font-medium mt-2">
                    Do not ignore early symptoms. Adopt a healthy lifestyle and follow your doctor's complete instructions.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Core Medical Services (Swipeable Cards on mobile, Grid on desktop) */}
            <div className="mb-[48px] lg:mb-0 -mx-[24px] lg:mx-0 px-[24px] lg:px-0">
              <SlideUp delay={0.1}>
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 snap-x snap-mandatory gap-[16px] lg:gap-6 pb-6 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <Card
                    title="Screening & Diagnostics"
                    content="Accurate, early detection for your peace of mind."
                    items={[
                      "Comprehensive Health Evaluations",
                      "Advanced Imaging Coordination",
                      "Image-Guided Biopsies"
                    ]}
                  />
                  <Card
                    title="Tailored Treatment"
                    content="Targeted interventions based strictly on your unique biology."
                    items={[
                      "Expert Surgical Consultations",
                      "Multidisciplinary Coordination",
                      "Long-Term Monitoring"
                    ]}
                  />
                  <Card
                    title="Holistic Support"
                    content="Supporting your physical and emotional well-being."
                    items={[
                      "Step-by-Step Patient Navigation",
                      "Post-Treatment Recovery",
                      "Survivorship Resources"
                    ]}
                  />
                </div>
              </SlideUp>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BreastCancerSection;
