"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TranslateProps {
  ur: React.ReactNode;
  en: React.ReactNode;
}

export function Translate({ ur, en }: TranslateProps) {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by always rendering 'ur' on the server
  // and swapping on the client after mount if needed.
  if (!mounted) {
    return <>{ur}</>;
  }

  return <>{language === "ur" ? ur : en}</>;
}
