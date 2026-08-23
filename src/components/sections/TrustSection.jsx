import React from "react";
import { VALUE, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";

export const TrustSection = () => (
  <section className="py-16 md:py-20 border-t border-slate-800/60 bg-transparent">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <div className="grid sm:grid-cols-3 gap-5">
        {VALUE.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className={`rounded-2xl border border-slate-800/80 bg-[#0a0f1d]/70 backdrop-blur-md shadow-sm p-6 ${ACCENT[v.accent].ring} transition-all duration-300 hover:bg-[#0f172a]/80 hover:border-slate-700 hover:shadow-md`}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-zinc-500">{v.n}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${ACCENT[v.accent].bg} ${ACCENT[v.accent].border} border`}>
                  <v.icon size={16} className={ACCENT[v.accent].text} />
                </div>
              </div>
              <h3 className="text-white font-medium text-base mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {v.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
