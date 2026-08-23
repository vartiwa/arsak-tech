import React from "react";
import { SOLUTIONS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight } from "lucide-react";

const ACCENT_GLOWS = {
  blue: "rgba(59, 130, 246, 0.16)",
  cyan: "rgba(56, 189, 248, 0.16)",
  purple: "rgba(129, 140, 248, 0.16)",
  green: "rgba(16, 185, 129, 0.16)",
  orange: "rgba(245, 158, 11, 0.16)",
};

export const SolutionsSection = () => (
  <section id="solutions" className="py-16 md:py-24 border-t border-[rgba(239,237,226,0.08)] relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Solutions"
        accent="blue"
        title="Engineered for real operational impact."
        sub="Purpose-built automation pipelines and software modules that resolve your biggest workflow bottlenecks."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <InteractiveCard accentColor={ACCENT_GLOWS[s.accent] || "rgba(59, 130, 246, 0.16)"} className="h-full">
              {/* TOP COMPARTMENT (Header with Icon/Visual Box as per Sketch) */}
              <div className="p-5 bg-[#101426]/90 border-b border-[rgba(239,237,226,0.12)] flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${ACCENT[s.accent].border} ${ACCENT[s.accent].bg} shadow-inner`}>
                  <s.icon size={20} className={ACCENT[s.accent].text} />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#B7B5AA] group-hover:text-cyan-300 transition-colors">
                  <span>Module 0{i + 1}</span>
                  <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* BOTTOM COMPARTMENT (Body Content with Title & Description as per Sketch) */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#070914]/95">
                <div>
                  <h3
                    className="text-[#EFEDE2] font-semibold text-base mb-2 group-hover:text-cyan-200 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#B7B5AA] text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(239,237,226,0.08)] flex items-center justify-between text-xs font-mono text-[#B7B5AA]">
                  <span className="text-cyan-400 font-medium">Enterprise Pipeline</span>
                  <span>Active Ready</span>
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
