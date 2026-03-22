import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { VideoProjectCard } from "@/components/VideoProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32">
        <Hero />
        {projects.map((project, index) => (
          <VideoProjectCard
            key={project.id}
            project={project}
            sectionId={index === 0 ? "projects" : undefined}
          />
        ))}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
