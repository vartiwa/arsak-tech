import React from "react";
import { STATS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { Counter } from "../common/Counter";
import { InteractiveCard } from "../common/InteractiveCard";
import { Activity } from "lucide-react";

export const AnalyticsSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Measurable Results"
        title="Quantifiable Operational Gains."
        sub="Demonstrated efficiency gains achieved across enterprise client automation deployments."
        center
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <InteractiveCard className="h-full">
              {/* TOP COMPARTMENT */}
              <div className="p-4 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${ACCENT[s.accent].border} ${ACCENT[s.accent].bg} shadow-sm`}>
                  <s.icon size={18} className={ACCENT[s.accent].text} />
                </div>
                <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                  Telemetry Active
                </span>
              </div>

              {/* BOTTOM COMPARTMENT */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div
                    className="text-3xl sm:text-4xl font-bold text-[#0D0C09] tracking-tight font-['Space_Grotesk']"
                  >
                    <Counter to={s.to} suffix={s.suffix} prefix={s.prefix || ""} />
                  </div>
                  <p className="text-[#4A453A] text-xs sm:text-sm mt-2 font-semibold leading-relaxed">{s.label}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.11)] text-[11px] font-mono text-[#6B6557] font-medium">
                  Aggregated KPI 0{i + 1}
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
      <p className="text-center text-[#6B6557] text-xs mt-7 font-mono font-medium">
        * Aggregated performance averages across deployed production systems
      </p>
    </div>
  </section>
);
