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
  <section id="why" className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Why Arsak"
        accent="blue"
        title="Built for Enterprise Trust & Performance."
        sub="Why leading engineering and ops teams choose Arsak as their automation backbone."
        center
      />
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08}>
            <InteractiveCard accentColor={WHY_GLOWS[w.accent] || "rgba(59, 130, 246, 0.16)"} className="p-7 flex flex-col justify-between h-full">
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${ACCENT[w.accent].border} ${ACCENT[w.accent].bg} mb-5 shadow-sm`}>
                  <w.icon size={22} className={ACCENT[w.accent].text} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {w.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {w.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                Pillar 0{i + 1} Foundation
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
