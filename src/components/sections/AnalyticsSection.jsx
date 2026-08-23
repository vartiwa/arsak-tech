import React from "react";
import { STATS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { Counter } from "../common/Counter";
import { InteractiveCard } from "../common/InteractiveCard";

const STAT_GLOWS = {
  blue: "rgba(59, 130, 246, 0.16)",
  purple: "rgba(129, 140, 248, 0.16)",
  green: "rgba(16, 185, 129, 0.16)",
  orange: "rgba(245, 158, 11, 0.16)",
};

export const AnalyticsSection = () => (
  <section className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Measurable Results"
        accent="blue"
        title="Quantifiable Operational Gains."
        sub="Demonstrated efficiency gains achieved across client automation deployments."
        center
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <InteractiveCard accentColor={STAT_GLOWS[s.accent] || "rgba(59, 130, 246, 0.15)"} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${ACCENT[s.accent].border} ${ACCENT[s.accent].bg} mb-4 shadow-sm`}>
                  <s.icon size={18} className={ACCENT[s.accent].text} />
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <Counter to={s.to} suffix={s.suffix} prefix={s.prefix || ""} />
                </div>
                <p className="text-slate-300 text-xs md:text-sm mt-2 font-medium">{s.label}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                Production Metric 0{i + 1}
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
      <p className="text-center text-slate-500 text-xs mt-7 font-mono">
        * Aggregated performance averages across deployed production systems
      </p>
    </div>
  </section>
);
