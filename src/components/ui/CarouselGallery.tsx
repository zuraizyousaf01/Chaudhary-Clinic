"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const galleryImages = [
  "/images/gallery/clinic-gallery-20.webp",
  "/images/gallery/clinic-gallery-05.webp",
  "/images/gallery/clinic-gallery-01.webp",
  "/images/gallery/clinic-gallery-16.webp",
];

export default function CarouselGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="py-6 md:py-8 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Our <span className="text-primary">Commitment</span> to You
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We are dedicated to providing compassionate care, advanced treatments, and a welcoming environment for all your healthcare needs.
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => emblaApi?.scrollPrev()} className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-primary hover:border-primary flex items-center justify-center transition-colors z-10 relative">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => emblaApi?.scrollNext()} className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-primary hover:border-primary flex items-center justify-center transition-colors z-10 relative">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 touch-pan-y py-6">
            {[...galleryImages, ...galleryImages].map((src, index) => (
              <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-all">
                  <Image src={src} alt={`Facility ${(index % galleryImages.length) + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link href="/about#gallery" className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 px-6 py-2.5 text-sm font-bold text-slate-700 transition-colors border border-slate-200 shadow-sm hover:shadow-md">
            Explore Our Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
