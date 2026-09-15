"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";
import { usePathname } from "next/navigation";

const URDU_PAGES = [
  "/breast-cancer",
  "/uterine-cancer",
  "/hernia",
  "/fibroids-uterus",
  "/gallstones",
  "/goitre",
  "/piles",
  "/varicose-veins",
  "/cbd-stones",
  "/pilonidal-sinus",
];

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Only show on specified Urdu pages
  if (!URDU_PAGES.includes(pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-2xl shadow-slate-900/20 border border-slate-700 transition-all hover:-translate-y-1"
        aria-label="Toggle language"
      >
        <Languages className="w-5 h-5 text-primary" />
        <span className="font-semibold">{language === "ur" ? "Read in English" : "اردو میں پڑھیں"}</span>
      </button>
    </div>
  );
}
