import React from "react";
import { SOLUTIONS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight } from "lucide-react";

export const SolutionsSection = () => (
  <section id="solutions" className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Solutions"
        title="Engineered for real operational impact."
        sub="Purpose-built automation pipelines and software modules that resolve your biggest workflow bottlenecks."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <InteractiveCard className="h-full">
              {/* TOP COMPARTMENT */}
              <div className="p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${ACCENT[s.accent].border} ${ACCENT[s.accent].bg} shadow-sm`}>
                  <s.icon size={20} className={ACCENT[s.accent].text} />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#6B6557] font-bold group-hover:text-[#0D0C09] transition-colors">
                  <span>Module 0{i + 1}</span>
                  <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* BOTTOM COMPARTMENT */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3
                    className="text-[#0D0C09] font-bold text-base mb-2 font-['Space_Grotesk']"
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#4A453A] text-sm leading-relaxed font-medium">{s.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#059669] font-bold">Enterprise Pipeline</span>
                  <span className="text-[#6B6557] font-semibold">Active Ready</span>
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
