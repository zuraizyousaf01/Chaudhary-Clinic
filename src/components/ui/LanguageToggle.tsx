"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-8" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-3 py-1.5 rounded-full transition-all text-sm font-medium backdrop-blur-md"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>{language === "ur" ? "EN" : "اردو"}</span>
    </button>
  );
}
