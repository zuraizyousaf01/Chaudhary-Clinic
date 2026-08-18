import { SlideUp } from "@/components/ui/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/ui/animations/StaggerContainer";

interface Video {
  id: string;
  title: string;
}

// Update these IDs as you upload more videos!
const videos: Video[] = [
  { id: "s0l3-A43Cc4", title: "Choudhary Clinic YouTube Video" },
];

export function YouTubeVideos() {
  // If there's only one video, we center it and make it larger. If more, we use a grid.
  const gridClass = videos.length === 1
    ? "max-w-3xl mx-auto"
    : "grid md:grid-cols-3 gap-6 max-w-6xl mx-auto";

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Watch & Learn</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Explore our educational videos on surgeries and maternal health to understand your procedures better.</p>
        <a href="https://www.youtube.com/@choudhuryclinic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#CC0000] transition-colors">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          Subscribe on YouTube
        </a>
      </div>
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
