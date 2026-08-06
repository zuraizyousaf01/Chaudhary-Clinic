"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { SlideUp } from "./animations/SlideUp";

const faqs = [
  {
    question: "What is laparoscopic surgery?",
    answer: "Laparoscopic surgery is a minimally invasive surgical technique that uses small incisions and a camera to perform procedures. It usually results in less pain, shorter recovery times, and minimal scarring compared to traditional open surgery."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment easily by clicking the 'Book Appointment' button on our website, which will redirect you to WhatsApp. Alternatively, you can visit our clinic directly, though booking in advance is recommended to avoid wait times."
  },
  {
    question: "Do you handle high-risk pregnancies?",
    answer: "Yes, Dr. Sehar specializes in comprehensive maternity care, including the management of high-risk pregnancies, ensuring continuous monitoring and dedicated care for both mother and baby."
  },
  {
    question: "What is the recovery time for hernia repair?",
    answer: "Recovery times vary depending on the type of hernia and the procedure performed. However, with laparoscopic hernia repair, many patients can return to light activities within a few days to a week."
  },
  {
    question: "Are emergency maternity services available?",
    answer: "Absolutely. We provide 24/7 maternity emergency services to ensure that expert care is always available when you need it most."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-6 lg:py-10 relative overflow-hidden bg-[#F5EFE6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* Image Side */}
          <SlideUp className="w-full lg:w-1/2 order-1 relative z-10">
            {/* Decorative Offset Frame */}
            <div className="absolute top-4 -left-4 lg:top-8 lg:-left-8 w-full h-full border-4 border-[#8B2E5F]/20 -z-10 hidden sm:block" />
            
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full shadow-lg overflow-hidden">
              <Image
                src="/images/FAQ_Doctor.jpeg"
                alt="Doctor answering questions"
                fill
                className="object-cover scale-[1.2] origin-[20%_center]"
              />
            </div>
          </SlideUp>

          {/* Content & Accordion Side */}
          <SlideUp delay={0.2} className="w-full lg:w-1/2 order-2 lg:pt-4">
            <div className="mb-4 lg:mb-6">
              <FadeIn>
                <span className="text-sm font-medium text-[#8B2E5F] uppercase tracking-[0.2em] mb-1 block">
                  FAQS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-2 leading-tight font-light">
                  Frequently Ask Questions
                </h2>
                <p className="text-base text-slate-500 leading-relaxed max-w-lg">
                  Get answers to common questions about our services, surgical procedures, recovery, and post-operative care.
                </p>
              </FadeIn>
            </div>

            <div className="w-full border-t border-[#8B2E5F]/30">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index}
                    className="border-b border-[#8B2E5F]/30"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left py-3 flex items-start sm:items-center gap-4 focus:outline-none group"
                    >
                      <div className={`shrink-0 flex items-center justify-center transition-transform duration-300 mt-1 sm:mt-0 ${isOpen ? 'rotate-90' : ''}`}>
                         <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6L0.25 11.6292L0.25 0.370835L10 6Z" fill="#8B2E5F"/>
                         </svg>
                      </div>
                      <span className="text-base sm:text-lg font-serif transition-colors text-[#8B2E5F]">
                        {faq.question}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-10 pr-6 pb-4 text-slate-500 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
