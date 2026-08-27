import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { InteractiveCard } from "../common/InteractiveCard";

export const CTASection = ({ onOpenContact }) => (
  <section id="cta" className="py-12 sm:py-16 md:py-24 bg-transparent relative">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Reveal>
        <InteractiveCard className="p-8 sm:p-12 text-center bg-white">
          <span className="text-xs font-mono font-bold text-[#0D1204] bg-[#BCEB28] border border-[#0D1204]/15 px-3 py-1 rounded-full uppercase tracking-wider">
            Ready to Get Started?
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0C09] mt-4 mb-4 tracking-tight font-['Space_Grotesk']"
          >
            Let's Build a Modern Website for Your Business.
          </h2>
          <p className="text-[#4A453A] text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            Tell us what your company does and what you're looking for. We'll give you a clear proposal and timeline within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="btn-lime w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-7 py-3 rounded-full cursor-pointer gap-2"
            >
              <span>Get a Free Consultation & Quote</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="mt-4 text-[11px] font-mono text-[#6B6557]">
            ✓ Quick Turnaround · ✓ 100% Mobile Ready · ✓ Dedicated Support
          </div>
        </InteractiveCard>
      </Reveal>
    </div>
  </section>
);
