import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Engineering } from "@/components/sections/Engineering";
import { AIEngineering } from "@/components/sections/AIEngineering";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Experience } from "@/components/sections/Experience";
import { GithubSection } from "@/components/sections/GithubSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060709] text-[#f0f2f5] selection:bg-blue-500/30 selection:text-blue-200">
      {/* Subtle cursor follower glow */}
      <CursorGlow />

      {/* Sticky Compact Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex flex-col">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Engineering />
        <AIEngineering />
        <TerminalSection />
        <Experience />
        <GithubSection />
        <Contact />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
}
