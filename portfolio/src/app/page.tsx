"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MouseSpotlight from "@/components/MouseSpotlight";
import MultiCursorBuilder from "@/components/MultiCursorBuilder";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [isBuilderActive, setIsBuilderActive] = useState(true);
  const [isReplaying, setIsReplaying] = useState(false);

  const handleReplayIntro = () => {
    setIsReplaying(true);
    setIsBuilderActive(true);
  };

  const handleBuilderComplete = () => {
    setIsBuilderActive(false);
    setIsReplaying(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-[#f8f8f2] selection:bg-[#bd93f9] selection:text-[#0b0f17]">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />

      {/* Mouse Spotlight (Brittany Chiang style) */}
      <MouseSpotlight />

      {/* Show Multi-Cursor Live Build Engine */}
      {isBuilderActive && (
        <MultiCursorBuilder onComplete={handleBuilderComplete} isReplay={isReplaying} />
      )}

      {/* Main Portfolio Navigation */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Content Sections */}
      <main className="relative z-10 flex flex-col space-y-12 sm:space-y-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
