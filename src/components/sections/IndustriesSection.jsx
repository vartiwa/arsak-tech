import React from "react";
import { INDUSTRIES_VISUAL, INDUSTRIES_COMPACT, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight } from "lucide-react";

const IndustryVisual = ({ accent }) => (
  <div
    className="h-20 rounded-xl relative overflow-hidden border border-slate-800/90 shadow-inner w-full"
    style={{ background: "linear-gradient(170deg, #0f172a, #040711)" }}
  >
    <div
      className="absolute inset-0 opacity-25"
      style={{ background: `radial-gradient(circle at 30% 30%, ${ACCENT[accent].dot}, transparent 60%)` }}
    />
    <div className="absolute bottom-2.5 left-3 right-3 flex gap-1.5 items-end">
      {[0.9, 0.5, 0.75, 0.35, 0.65].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm shadow-sm"
          style={{ height: `${h * 26}px`, background: ACCENT[accent].dot, opacity: 0.75 }}
        />
      ))}
    </div>
  </div>
);

export const IndustriesSection = () => (
  <section id="industries" className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Industries"
        accent="orange"
        title="Solutions Tailored Across Sectors."
        sub="Our automation pipelines are battle-tested across regulated, high-volume industries."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES_VISUAL.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.05}>
            <InteractiveCard accentColor="rgba(245, 158, 11, 0.14)" className="h-full">
              {/* TOP COMPARTMENT (Header Visual as per Sketch) */}
              <div className="p-4 bg-[#0e1628]/80 border-b border-slate-700/70 flex flex-col gap-2.5">
                <IndustryVisual accent={ind.accent} />
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${ACCENT[ind.accent].border} ${ACCENT[ind.accent].bg}`}>
                    <ind.icon size={16} className={ACCENT[ind.accent].text} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Sector 0{i + 1}</span>
                </div>
              </div>

              {/* BOTTOM COMPARTMENT (Body Title & Details as per Sketch) */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#070b16]/90">
                <div>
                  <h3 className="text-white text-base font-semibold mb-1 group-hover:text-cyan-200 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated compliance, high-volume invoice routing, and ERP synchronization.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-medium">Enterprise Sector</span>
                  <ArrowUpRight size={13} className="text-slate-500" />
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
            <InteractiveCard accentColor="rgba(148, 163, 184, 0.10)" className="h-full">
              <div className="p-3.5 bg-[#0e1628]/70 border-b border-slate-700/60 flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-slate-700 bg-slate-800/80 text-slate-300">
                  <ind.icon size={14} />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Industry</span>
              </div>
              <div className="p-3.5 bg-[#070b16]/90">
                <span className="text-slate-200 text-sm font-semibold">{ind.title}</span>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
