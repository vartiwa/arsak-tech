import React from "react";
import { INDUSTRIES_VISUAL, INDUSTRIES_COMPACT, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const IndustryVisual = ({ accent }) => (
  <div
    className="h-24 rounded-xl mb-4 relative overflow-hidden border border-slate-800/90 shadow-inner"
    style={{ background: "linear-gradient(170deg, #0f172a, #040711)" }}
  >
    <div
      className="absolute inset-0 opacity-25"
      style={{ background: `radial-gradient(circle at 30% 30%, ${ACCENT[accent].dot}, transparent 60%)` }}
    />
    <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 items-end">
      {[0.9, 0.5, 0.75, 0.35, 0.65].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm shadow-sm"
          style={{ height: `${h * 32}px`, background: ACCENT[accent].dot, opacity: 0.75 }}
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
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {INDUSTRIES_VISUAL.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.05}>
            <InteractiveCard accentColor="rgba(245, 158, 11, 0.14)" className="p-5 flex flex-col justify-between h-full">
              <div>
                <IndustryVisual accent={ind.accent} />
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${ACCENT[ind.accent].border} ${ACCENT[ind.accent].bg}`}>
                    <ind.icon size={16} className={ACCENT[ind.accent].text} />
                  </div>
                  <span className="text-white text-sm font-semibold">{ind.title}</span>
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INDUSTRIES_COMPACT.map((ind, i) => (
          <Reveal key={ind.title} delay={i * 0.04}>
            <InteractiveCard accentColor="rgba(148, 163, 184, 0.10)" className="p-4 flex items-center gap-3">
              <ind.icon size={17} className="text-slate-400 shrink-0" />
              <span className="text-slate-200 text-sm font-medium">{ind.title}</span>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
