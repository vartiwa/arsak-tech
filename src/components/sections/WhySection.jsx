import React from "react";
import { WHY, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const WHY_GLOWS = {
  blue: "rgba(59, 130, 246, 0.16)",
  purple: "rgba(129, 140, 248, 0.16)",
  green: "rgba(16, 185, 129, 0.16)",
};

export const WhySection = () => (
  <section id="why" className="py-16 md:py-24 border-t border-[rgba(239,237,226,0.08)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Why Arsak"
        accent="blue"
        title="Built for Enterprise Trust & Performance."
        sub="Why leading engineering and ops teams choose Arsak as their automation backbone."
        center
      />
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08}>
            <InteractiveCard accentColor={WHY_GLOWS[w.accent] || "rgba(59, 130, 246, 0.16)"} className="h-full">
              {/* TOP COMPARTMENT (Header with Icon Box as per Sketch) */}
              <div className="p-5 bg-[#101426]/90 border-b border-[rgba(239,237,226,0.12)] flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${ACCENT[w.accent].border} ${ACCENT[w.accent].bg} shadow-inner`}>
                  <w.icon size={20} className={ACCENT[w.accent].text} />
                </div>
                <span className="text-xs font-mono text-[#B7B5AA]">Pillar 0{i + 1}</span>
              </div>

              {/* BOTTOM COMPARTMENT (Body Content as per Sketch) */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#070914]/95">
                <div>
                  <h3 className="text-lg font-semibold text-[#EFEDE2] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {w.title}
                  </h3>
                  <p className="text-[#B7B5AA] text-sm leading-relaxed">{w.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(239,237,226,0.08)] text-xs font-mono text-[#B7B5AA]">
                  Enterprise Grade Guarantee
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
