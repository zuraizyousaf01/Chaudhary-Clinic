"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { StaggerItem } from "@/components/ui/animations/StaggerContainer";

interface Review {
  id: string | number;
  rating: number;
  reviewText: string;
  patientName: string;
  visitReason: string;
  relativeTime: string;
}

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Desktop View: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <StaggerItem key={review.id} className="h-full">
            <ReviewCard review={review} />
          </StaggerItem>
        ))}
      </div>

      {/* Mobile View: Carousel */}
      <div className="md:hidden relative px-12">
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-slate-600 hover:text-primary transition-colors focus:outline-none"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full">
           <ReviewCard review={reviews[currentIndex]} />
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-slate-600 hover:text-primary transition-colors focus:outline-none"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col min-h-[280px] md:h-[280px] hover:shadow-md transition-shadow">
      <div className="flex items-center gap-1 mb-3 text-yellow-400">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-slate-700 text-sm mb-4 md:overflow-y-auto pr-2 flex-grow">"{review.reviewText}"</p>
      <div className="mt-auto border-t border-slate-200 pt-4 shrink-0">
        <p className="font-semibold text-slate-900 text-sm">{review.patientName}</p>
        <p className="text-xs text-slate-600">{review.visitReason} • {review.relativeTime}</p>
      </div>
    </div>
  );
}
