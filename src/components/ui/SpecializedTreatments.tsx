"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Activity } from "lucide-react";
import { FadeIn } from "@/components/ui/animations/FadeIn";
import { SlideUp } from "@/components/ui/animations/SlideUp";

const treatments = [
  {
    id: "hernia",
    enTitle: "Hernia",
    urTitle: "ہرنیا",
    desc: "Are you experiencing symptoms like a bulge, pain, or discomfort? Learn about advanced, long-lasting surgical treatments available.",
    link: "/hernia",
    color: "bg-primary hover:bg-primary-hover shadow-primary/20"
  },
  {
    id: "fibroids",
    enTitle: "Uterine Fibroids",
    urTitle: "بچے دانی کی رسولی",
    desc: "Experiencing heavy bleeding, pelvic pain, or frequent urination? Discover modern treatment options for uterine fibroids.",
    link: "/fibroids-uterus",
    color: "bg-pink-600 hover:bg-pink-700 shadow-pink-600/20"
  },
  {
    id: "gallstones",
    enTitle: "Gallstones",
    urTitle: "پتے کی پتھری",
    desc: "Experiencing severe pain in the upper right abdomen? Discover advanced laparoscopic treatments for gallstones.",
    link: "/gallstones",
    color: "bg-teal-600 hover:bg-teal-700 shadow-teal-600/20"
  },
  {
    id: "goitre",
    enTitle: "Goitre",
    urTitle: "گلہڑ",
    desc: "Experiencing neck swelling or hormonal imbalances? Learn about the symptoms and advanced surgical treatments for goitre.",
    link: "/goitre",
    color: "bg-slate-800 hover:bg-slate-900 shadow-slate-900/20"
  },
  {
    id: "piles",
    enTitle: "Piles",
    urTitle: "بواسیر",
    desc: "Suffering from painful lumps or bleeding? Discover the advanced, painless options for treating piles.",
    link: "/piles",
    color: "bg-blue-700 hover:bg-blue-800 shadow-blue-700/20"
  },
  {
    id: "varicose-veins",
    enTitle: "Varicose Veins",
    urTitle: "ویریکوز وینز",
    desc: "Suffering from swollen or twisted veins? Learn about effective stripping and ligation surgery for varicose veins.",
    link: "/varicose-veins",
    color: "bg-cyan-700 hover:bg-cyan-800 shadow-cyan-700/20"
  },
  {
    id: "cbd-stones",
    enTitle: "CBD Stones",
    urTitle: "پتے کی نالی میں پتھری",
    desc: "Delaying treatment for bile duct stones can be dangerous. Discover safe and advanced intraoperative choledochoscopy (IOC).",
    link: "/cbd-stones",
    color: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
  },
  {
    id: "breast-cancer",
    enTitle: "Breast Cancer",
    urTitle: "چھاتی کا کینسر",
    desc: "Don't ignore early symptoms. Learn about the risks, early diagnosis, and the role of safe surgery in effectively treating breast cancer.",
    link: "/breast-cancer",
    color: "bg-pink-700 hover:bg-pink-800 shadow-pink-700/20"
  },
  {
    id: "uterine-cancer",
    enTitle: "Uterine Cancer",
    urTitle: "بچے دانی کا کینسر",
    desc: "Don't ignore unusual bleeding or pelvic pain. Discover safe, modern, and confidential treatments for uterine cancer.",
    link: "/uterine-cancer",
    color: "bg-pink-700 hover:bg-pink-800 shadow-pink-700/20"
  },
  {
    id: "pilonidal-sinus",
    enTitle: "Pilonidal Sinus",
    urTitle: "پائیلونائیڈل سائنس",
    desc: "Suffering from tailbone pain, swelling, or pus discharge? Learn about advanced surgical solutions for a permanent cure.",
    link: "/pilonidal-sinus",
    color: "bg-indigo-700 hover:bg-indigo-800 shadow-indigo-700/20"
  }
];

export const SpecializedTreatments = () => {
  const [openId, setOpenId] = useState<string | null>("hernia");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-8 sm:mt-12 w-full max-w-5xl mx-auto relative z-20">
      <FadeIn className="text-center mb-8 px-4">
        <p className="text-slate-600 font-medium text-lg md:text-[22px] leading-relaxed max-w-3xl mx-auto">
          Explore our comprehensive range of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">specialized treatments</span>. We provide modern, <span className="font-bold text-slate-900 border-b-2 border-primary/20">minimally invasive solutions</span> tailored for your quick recovery.
        </p>
      </FadeIn>

      <SlideUp delay={0.1} className="grid grid-cols-2 gap-3 sm:gap-4 items-start px-4 sm:px-0">
        {treatments.map((t) => {
          const isOpen = openId === t.id;
          return (
            <div
              key={t.id}
              className={`bg-white rounded-[1.25rem] border transition-all duration-300 overflow-hidden ${isOpen ? 'col-span-2 border-slate-300 shadow-md' : 'border-slate-200 shadow-sm hover:shadow'}`}
            >
              <button
                onClick={() => toggle(t.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-2 sm:gap-4 focus:outline-none focus:bg-slate-50/50 transition-colors text-left"
              >
                <div className="flex flex-col items-start justify-center gap-1">
                  <span className="text-lg md:text-xl font-extrabold text-[#0B1530] leading-none">{t.enTitle}</span>
                  <span className="text-[15px] font-medium text-slate-500 urdu-text leading-none mt-1" dir="rtl">{t.urTitle}</span>
                </div>
                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-slate-600 leading-relaxed max-w-xl">
                    {t.desc}
                  </p>
                  <Link
                    href={t.link}
                    className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl ${t.color} px-6 py-3 text-sm font-bold text-white transition-all shadow-sm hover:-translate-y-0.5`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </SlideUp>
    </div>
  );
};

export default SpecializedTreatments;
