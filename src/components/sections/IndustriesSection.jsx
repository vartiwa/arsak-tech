import React from "react";
import { INDUSTRIES_VISUAL, INDUSTRIES_COMPACT, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight } from "lucide-react";

const IndustryVisual = ({ accent }) => (
  <div
    className="h-20 rounded-xl relative overflow-hidden border border-[rgba(22,20,14,0.11)] shadow-inner w-full bg-[#FAF7F0]"
  >
    <div
      className="absolute inset-0 opacity-15"
      style={{ background: `radial-gradient(circle at 30% 30%, ${ACCENT[accent].dot}, transparent 60%)` }}
    />
    <div className="absolute bottom-2.5 left-3 right-3 flex gap-1.5 items-end">
      {[0.9, 0.5, 0.75, 0.35, 0.65].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm shadow-sm"
          style={{ height: `${h * 26}px`, background: ACCENT[accent].dot, opacity: 0.85 }}
        />
      ))}
    </div>
  </div>
);

export const IndustriesSection = () => (
  <section id="industries" className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Industries"
        title="Solutions Tailored Across Sectors."
        sub="Our automation pipelines are battle-tested across regulated, high-volume industries."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES_VISUAL.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.05}>
            <InteractiveCard className="h-full">
              {/* TOP COMPARTMENT */}
              <div className="p-4 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex flex-col gap-2.5">
                <IndustryVisual accent={ind.accent} />
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${ACCENT[ind.accent].border} ${ACCENT[ind.accent].bg} shadow-sm`}>
                    <ind.icon size={16} className={ACCENT[ind.accent].text} />
                  </div>
                  <span className="text-[11px] font-mono text-[#6B6557] font-bold">Sector 0{i + 1}</span>
                </div>
              </div>

              {/* BOTTOM COMPARTMENT */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-[#0D0C09] text-base font-bold mb-1 font-['Space_Grotesk']">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#4A453A] leading-relaxed font-medium">
                    Automated compliance, high-volume invoice routing, and ERP synchronization.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#059669] font-bold">Enterprise Sector</span>
                  <ArrowUpRight size={13} className="text-[#6B6557]" />
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>

      {/* Compact Industry Cards */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INDUSTRIES_COMPACT.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.04}>
            <InteractiveCard className="h-full">
              <div className="p-3.5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-[rgba(22,20,14,0.11)] bg-white text-[#0D0C09] shadow-sm">
                  <ind.icon size={14} />
                </div>
                <span className="text-[10px] font-mono text-[#6B6557] font-bold">Industry</span>
              </div>
              <div className="p-3.5 bg-white">
                <span className="text-[#0D0C09] text-sm font-bold">{ind.title}</span>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
