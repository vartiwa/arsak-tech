import React, { useState } from "react";
import { SpaceBackground } from "./components/common/SpaceBackground";
import { ScrollFlowStream } from "./components/common/ScrollFlowStream";
import { CursorGlow } from "./components/common/CursorGlow";
import { Nav } from "./components/Nav";
import { ContactModal } from "./components/ContactModal";
import { AuthModal } from "./components/AuthModal";
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
import { RoiCalculatorSection } from "./components/sections/RoiCalculatorSection";
import { AIAgentSection } from "./components/sections/AIAgentSection";
import { AnalyticsSection } from "./components/sections/AnalyticsSection";
import { IntegrationsSection } from "./components/sections/IntegrationsSection";
import { WhySection } from "./components/sections/WhySection";
import { AboutSection } from "./components/sections/AboutSection";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/Footer";

export default function ArsakTechnologies() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [userSession, setUserSession] = useState(null);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);

  const handleLoginSuccess = (session) => {
    setUserSession(session);
  };

  const handleLogout = () => {
    setUserSession(null);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F0] text-[#16140E] antialiased selection:bg-[#BCEB28]/30 selection:text-black">
      {/* Fixed Planetary & Deep-Space Cosmic Background */}
      <SpaceBackground />
      {/* Global Interactive Cursor Spotlight */} 
      <CursorGlow />

      {/* Navigation with Auth & Portal Controls */}
      <Nav
        onOpenContact={openContact}
        onOpenAuth={openAuth}
        userSession={userSession}
        onLogout={handleLogout}
      />

      {/* Main Landing Page Content */}
      <main className="relative z-10">
        {/* Static Architectural Flow Stream Connecting 3D Earth to Lower Sections */}
        <ScrollFlowStream />

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
        <RoiCalculatorSection onOpenContact={openContact} />
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

      {/* Interactive Authentication & Client Portal Modal (with Guest Mode) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={closeAuth}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
