import React from "react";
import { STEPS } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { FlowLine } from "../common/FlowLine";
import { InteractiveCard } from "../common/InteractiveCard";

export const HowItWorks = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(15,21,36,0.08)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Process"
        accent="cyan"
        title="How We Partner With You."
        sub="A streamlined 5-step methodology from initial workflow audit to production deployment."
        center
      />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.06} className="relative flex flex-col h-full">
            <InteractiveCard accentColor="rgba(56, 189, 248, 0.14)" className="p-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-[#C0EB3A] border border-[#C0EB3A]/30 bg-[#C0EB3A]/10 px-2 py-0.5 rounded inline-block mb-3">
                  Step {s.n}
                </span>
                <h3
                  className="text-[#0F1524] font-semibold text-sm mb-1.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#475569] text-xs leading-relaxed">{s.desc}</p>
              </div>
            </InteractiveCard>
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6">
                <FlowLine horizontal length={24} delay={i * 0.25} color="#38bdf8" />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
