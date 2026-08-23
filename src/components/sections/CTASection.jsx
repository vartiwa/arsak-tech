import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "../common/Reveal";

export const CTASection = ({ onOpenContact }) => (
  <section id="cta" className="relative py-20 md:py-32 border-t border-[rgba(22,20,14,0.11)] overflow-hidden bg-transparent">
    <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
      <Reveal>
        <span className="depth-badge inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-6 font-bold">
          <span className="w-2 h-2 rounded-full bg-[#BCEB28] border border-[#0D1204]/20 shadow-sm" />
          Ready to Modernize Operations
        </span>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0C09] leading-[1.12] tracking-tight font-['Space_Grotesk']"
        >
          Ready to eliminate manual process friction forever?
        </h2>
        <p className="mt-4 text-[#4A453A] text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
          Contact our automation solutions team to receive a tailored feasibility blueprint, architecture diagram, and enterprise ROI calculation.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenContact}
            className="btn-lime inline-flex items-center gap-2.5 text-sm sm:text-base font-bold px-9 py-4 rounded-full cursor-pointer shadow-lg"
          >
            <span>Request Automation Blueprint</span>
            <ArrowRight size={17} strokeWidth={2.5} />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);
