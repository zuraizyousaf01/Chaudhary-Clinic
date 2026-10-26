"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Quote, Camera } from "lucide-react";
import Masonry from "react-masonry-css";

// Use all gallery images for the about page masonry layout
const galleryImages = [
  { src: "/images/gallery/clinic-gallery-38.webp", width: 1156, height: 867 },
  { src: "/images/gallery/clinic-gallery-25.webp", width: 995, height: 825 },
  { src: "/images/gallery/clinic-gallery-37.webp", width: 1280, height: 720 },
  { src: "/images/gallery/clinic-gallery-03.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-15.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-33.webp", width: 1280, height: 890 },
  { src: "/images/gallery/clinic-gallery-17.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-48.webp", width: 1280, height: 835 },
  { src: "/images/gallery/clinic-gallery-42.webp", width: 1280, height: 853 },
  { src: "/images/gallery/clinic-gallery-44.webp", width: 960, height: 1280 },
  { src: "/images/gallery/clinic-gallery-11.webp", width: 864, height: 1152 },
  { src: "/images/gallery/clinic-gallery-24.webp", width: 590, height: 1280 },
  { src: "/images/gallery/clinic-gallery-27.webp", width: 1080, height: 810 },
  { src: "/images/gallery/clinic-gallery-36.webp", width: 1156, height: 867 },
  { src: "/images/gallery/clinic-gallery-35.webp", width: 1280, height: 720 },
  { src: "/images/gallery/clinic-gallery-19.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-14.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-04.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-06.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-20.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-30.webp", width: 1280, height: 853 },
  { src: "/images/gallery/clinic-gallery-26.webp", width: 665, height: 702 },
  { src: "/images/gallery/clinic-gallery-21.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-31.webp", width: 1280, height: 853 },
  { src: "/images/gallery/clinic-gallery-09.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-23.webp", width: 960, height: 720 },
  { src: "/images/gallery/clinic-gallery-02.webp", width: 1066, height: 1600 },
  { src: "/images/gallery/clinic-gallery-08.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-28.webp", width: 576, height: 1280 },
  { src: "/images/gallery/clinic-gallery-10.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-43.webp", width: 1280, height: 853 },
  { src: "/images/gallery/clinic-gallery-22.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-13.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-07.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-47.webp", width: 814, height: 1094 },
  { src: "/images/gallery/clinic-gallery-46.webp", width: 910, height: 1141 },
  { src: "/images/gallery/clinic-gallery-29.webp", width: 1280, height: 963 },
  { src: "/images/gallery/clinic-gallery-49.webp", width: 729, height: 729 },
  { src: "/images/gallery/clinic-gallery-39.webp", width: 914, height: 1280 },
  { src: "/images/gallery/clinic-gallery-40.webp", width: 989, height: 1280 },
  { src: "/images/gallery/clinic-gallery-05.webp", width: 1600, height: 1142 },
  { src: "/images/gallery/clinic-gallery-45.webp", width: 1280, height: 960 },
  { src: "/images/gallery/clinic-gallery-32.webp", width: 1280, height: 853 },
  { src: "/images/gallery/clinic-gallery-01.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-41.webp", width: 1280, height: 853 },
  { src: "/images/gallery/clinic-gallery-34.webp", width: 853, height: 1280 },
  { src: "/images/gallery/clinic-gallery-18.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-12.webp", width: 1600, height: 1066 },
  { src: "/images/gallery/clinic-gallery-16.webp", width: 1600, height: 1142 },
];

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-3xl mx-auto mb-16 md:mb-20 px-4 text-center flex flex-col items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 z-0 pointer-events-none">
            <Quote className="w-48 h-48 md:w-64 md:h-64 rotate-180" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-slate-600 text-xs font-bold uppercase tracking-widest border border-slate-200/60 mb-6 shadow-sm">
              <Camera className="w-4 h-4 text-primary" />
              Our Journey
            </div>
            <p className="text-slate-700 text-xl md:text-2xl leading-relaxed italic font-serif">
              Browse through captured moments of our journey, representing our dedication to patient care, our milestones, and the vibrant life at Choudhary Clinic.
            </p>
          </div>
        </div>

        {/* True Masonry Layout */}
        <Masonry
          breakpointCols={{
            default: 4,
            1024: 3,
            768: 2,
          }}
          className="flex w-auto -ml-3 md:-ml-4"
          columnClassName="pl-3 md:pl-4 bg-clip-padding"
        >
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="mb-3 md:mb-4 rounded-xl overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-md transition-all break-inside-avoid bg-slate-100"
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={`Clinic Facility Image ${index + 1}`}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors z-50 bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1600}
              height={1200}
              className="object-contain max-h-[90vh] w-auto h-auto rounded-md shadow-2xl"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
