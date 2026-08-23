import React, { useState } from "react";
import { SpaceBackground } from "./components/common/SpaceBackground";
import { CursorGlow } from "./components/common/CursorGlow";
import { Nav } from "./components/Nav";
import { ContactModal } from "./components/ContactModal";
import { Hero } from "./components/sections/Hero";
import { TrustSection } from "./components/sections/TrustSection";
import { ProblemSection } from "./components/sections/ProblemSection";
import { SolutionsSection } from "./components/sections/SolutionsSection";
import { HowItWorks } from "./components/sections/HowItWorks";
import { PlatformSection } from "./components/sections/PlatformSection";
import { IndustriesSection } from "./components/sections/IndustriesSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { UseCaseSection } from "./components/sections/UseCaseSection";
import { DemoSection } from "./components/sections/DemoSection";
import { AIAgentSection } from "./components/sections/AIAgentSection";
import { AnalyticsSection } from "./components/sections/AnalyticsSection";
import { IntegrationsSection } from "./components/sections/IntegrationsSection";
import { WhySection } from "./components/sections/WhySection";
import { AboutSection } from "./components/sections/AboutSection";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/Footer";

export default function ArsakTechnologies() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen bg-[#040508] text-zinc-100 antialiased selection:bg-purple-500/30 selection:text-white">
      {/* Fixed Planetary & Deep-Space Cosmic Background */}
      <SpaceBackground />
      {/* Global Interactive Cursor Spotlight */} 
      <CursorGlow />

      {/* Navigation */}
      <Nav onOpenContact={openContact} />

      {/* Main Landing Page Content */}
      <main className="relative z-10">
        <Hero onOpenContact={openContact} />
        <TrustSection />
        <ProblemSection />
        <SolutionsSection />
        <HowItWorks />
        <PlatformSection />
        <IndustriesSection />
        <ServicesSection onOpenContact={openContact} />
        <UseCaseSection />
        <DemoSection />
        <AIAgentSection />
        <AnalyticsSection />
        <IntegrationsSection />
        <WhySection />
        <AboutSection />
        <CTASection onOpenContact={openContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={openContact} />

      {/* Interactive Contact & Blueprint Lead Capture Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};
