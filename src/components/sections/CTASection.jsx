import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../common/Reveal";

export const CTASection = ({ onOpenContact }) => (
  <section id="cta" className="relative py-20 md:py-32 border-t border-[rgba(22,20,14,0.11)] overflow-hidden bg-transparent">
    <div
      className="absolute inset-0 -z-0 opacity-[0.12] blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(50% 60% at 50% 30%, #a855f7, transparent 70%)" }}
    />
    <div className="max-w-2xl mx-auto px-6 text-center relative">
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0D0C09] border border-slate-300 bg-[#EAF7B8] px-3.5 py-1.5 rounded-full mb-6">
          Ready to Modernize?
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0D0C09] leading-[1.15] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ready to automate your next enterprise process?
        </h2>
        <p className="mt-4 text-[#4A453A] text-base max-w-lg mx-auto">
          Contact our solutions team to receive a tailored feasibility blueprint and ROI calculation.
        </p>
        <div className="mt-8">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm md:text-base px-8 py-3.5 rounded-full px-8 py-3.5 hover:bg-zinc-200 transition-all hover:scale-105 shadow-lg shadow-white/10"
          >
            Talk to Arsak <ArrowRight size={16} />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);
