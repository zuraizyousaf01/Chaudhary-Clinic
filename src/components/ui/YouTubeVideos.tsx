import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/StaggerContainer";

interface Video {
  id: string;
  title: string;
}

// Update these IDs as you upload more videos!
const videos: Video[] = [
  { id: "s0l3-A43Cc4", title: "Choudhury Clinic YouTube Video" }, 
];

export function YouTubeVideos() {
  // If there's only one video, we center it and make it larger. If more, we use a grid.
  const gridClass = videos.length === 1 
    ? "max-w-3xl mx-auto" 
    : "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto";

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <StaggerContainer className={gridClass}>
        {videos.map((video, index) => (
          <StaggerItem key={index}>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 transition-transform hover:scale-105 duration-300">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
