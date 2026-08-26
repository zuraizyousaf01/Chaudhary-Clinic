"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  videos: string[];
}

export function TestimonialCarousel({ videos }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState<'left' | 'right' | null>(null);

  if (!videos || videos.length === 0) return null;

  const handleNext = () => {
    if (isSwiping) return;
    setIsSwiping('right');
    setTimeout(() => {
      setActiveIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0));
      setIsSwiping(null);
    }, 300);
  };

  const handlePrev = () => {
    if (isSwiping) return;
    setIsSwiping('left');
    setTimeout(() => {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1));
      setIsSwiping(null);
    }, 300);
  };

  const handleDotClick = (idx: number) => {
    if (isSwiping || idx === activeIndex) return;
    setIsSwiping(idx > activeIndex ? 'right' : 'left');
    setTimeout(() => {
      setActiveIndex(idx);
      setIsSwiping(null);
    }, 300);
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <div className="relative w-full max-w-sm mx-auto mt-2 aspect-[9/16] max-h-[580px]">
        {/* Underlaying Stack Cards */}
        {videos.length > 2 && (
          <div className={`absolute inset-0 bg-slate-200 rounded-[12px] lg:rounded-[16px] border-2 lg:border-4 border-white shadow-sm z-0 transition-all duration-300 ease-in-out origin-bottom ${
            isSwiping ? 'translate-x-12 -translate-y-4 rotate-[15deg] scale-95 opacity-60' : 'transform rotate-[5deg] scale-[0.9] translate-x-4 translate-y-2 opacity-100'
          }`} />
        )}
        {videos.length > 1 && (
          <div className={`absolute inset-0 bg-slate-300 rounded-[12px] lg:rounded-[16px] border-2 lg:border-4 border-white shadow-md z-0 transition-all duration-300 ease-in-out origin-bottom ${
            isSwiping ? '-translate-x-12 translate-y-0 -rotate-[15deg] scale-95 opacity-60' : 'transform -rotate-[3deg] scale-[0.95] -translate-x-3 translate-y-1 opacity-100'
          }`} />
        )}
        
        {/* Main Video Layer */}
        <div className={`absolute inset-0 z-10 w-full flex justify-center rounded-[12px] lg:rounded-[16px] overflow-hidden shadow-xl lg:shadow-2xl border-2 lg:border-4 border-white bg-black transition-all duration-300 ease-in-out origin-bottom ${
          isSwiping === 'right' ? '-translate-x-16 -rotate-12 opacity-0 scale-90' : isSwiping === 'left' ? 'translate-x-16 rotate-12 opacity-0 scale-90' : 'translate-x-0 rotate-0 opacity-100 scale-100'
        }`}>
          <video
            key={videos[activeIndex]}
            src={videos[activeIndex]}
            controls
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>

          {videos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/30 hover:bg-white/90 backdrop-blur-sm rounded-full shadow transition-all z-20"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/30 hover:bg-white/90 backdrop-blur-sm rounded-full shadow transition-all z-20"
                aria-label="Next video"
              >
                <ChevronRight className="w-5 h-5 text-slate-800" />
              </button>
            </>
          )}
        </div>
      </div>

      {videos.length > 1 && (
        <div className="flex justify-center gap-2 mt-1">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-primary scale-125' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`View video ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
