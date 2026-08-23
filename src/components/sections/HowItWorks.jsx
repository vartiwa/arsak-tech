import React from "react";
import { STEPS } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { FlowLine } from "../common/FlowLine";
import { InteractiveCard } from "../common/InteractiveCard";

export const HowItWorks = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Process"
        title="How We Partner With You."
        sub="A streamlined 5-step methodology from initial workflow audit to production deployment."
        center
      />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06} className="relative flex flex-col h-full">
            <InteractiveCard className="h-full">
              {/* Top Compartment */}
              <div className="p-3.5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#0D1204] bg-[#BCEB28] border border-[#0D1204]/15 px-2.5 py-0.5 rounded-full shadow-sm">
                  Step {s.n}
                </span>
                <span className="text-[10px] font-mono text-[#6B6557] font-semibold">Stage 0{i + 1}</span>
              </div>
              {/* Bottom Compartment */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3
                    className="text-[#0D0C09] font-bold text-sm mb-1.5 font-['Space_Grotesk']"
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#4A453A] text-xs leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            </InteractiveCard>
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6">
                <FlowLine horizontal length={24} delay={i * 0.25} color="#2563EB" />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
