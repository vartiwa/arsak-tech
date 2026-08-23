import React from "react";
import { SOLUTIONS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const ACCENT_GLOWS = {
  blue: "rgba(59, 130, 246, 0.16)",
  cyan: "rgba(56, 189, 248, 0.16)",
  purple: "rgba(129, 140, 248, 0.16)",
  green: "rgba(16, 185, 129, 0.16)",
  orange: "rgba(245, 158, 11, 0.16)",
};

export const SolutionsSection = () => (
  <section id="solutions" className="py-16 md:py-24 border-t border-slate-800/60 relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Solutions"
        accent="blue"
        title="Engineered for real operational impact."
        sub="Purpose-built automation pipelines and software modules that resolve your biggest workflow bottlenecks."
      />
      <div className="mt-12 grid sm:grid-cols-2 gap-5">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05} className={i % 3 === 0 ? "sm:col-span-2" : ""}>
            <InteractiveCard accentColor={ACCENT_GLOWS[s.accent] || "rgba(59, 130, 246, 0.16)"} className="p-6 md:p-7 flex items-start gap-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                  ACCENT[s.accent].border
                } ${ACCENT[s.accent].bg} shadow-sm`}
              >
                <s.icon size={20} className={ACCENT[s.accent].text} />
              </div>
              <div className="min-w-0">
                <h3
                  className="text-white font-semibold text-base mb-1.5 group-hover:text-cyan-200 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
