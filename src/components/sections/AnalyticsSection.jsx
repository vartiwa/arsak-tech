import React from "react";
import { STATS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { Counter } from "../common/Counter";
import { InteractiveCard } from "../common/InteractiveCard";
import { Activity } from "lucide-react";

const STAT_GLOWS = {
  blue: "rgba(59, 130, 246, 0.16)",
  purple: "rgba(129, 140, 248, 0.16)",
  green: "rgba(16, 185, 129, 0.16)",
  orange: "rgba(245, 158, 11, 0.16)",
};

export const AnalyticsSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(15,21,36,0.08)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Measurable Results"
        accent="blue"
        title="Quantifiable Operational Gains."
        sub="Demonstrated efficiency gains achieved across client automation deployments."
        center
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <InteractiveCard accentColor={STAT_GLOWS[s.accent] || "rgba(59, 130, 246, 0.15)"} className="h-full">
              {/* TOP COMPARTMENT (Header & Icon Box as per Sketch) */}
              <div className="p-4 bg-[#F1F4F9] border-b border-slate-200 flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${ACCENT[s.accent].border} ${ACCENT[s.accent].bg} shadow-inner`}>
                  <s.icon size={18} className={ACCENT[s.accent].text} />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                  Telemetry Active
                </span>
              </div>

              {/* BOTTOM COMPARTMENT (Body Metric Counter as per Sketch) */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#0F1524] tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <Counter to={s.to} suffix={s.suffix} prefix={s.prefix || ""} />
                  </div>
                  <p className="text-[#475569] text-xs sm:text-sm mt-2 font-medium leading-relaxed">{s.label}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(15,21,36,0.08)] text-[11px] font-mono text-[#475569]">
                  Aggregated KPI 0{i + 1}
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
      <p className="text-center text-[#64748B] text-xs mt-7 font-mono">
        * Aggregated performance averages across deployed production systems
      </p>
    </div>
  </section>
);
