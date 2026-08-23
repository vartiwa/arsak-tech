import React from "react";
import { VALUE, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight } from "lucide-react";

export const TrustSection = () => (
  <section className="py-16 md:py-20 border-t border-[rgba(239,237,226,0.08)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <div className="grid sm:grid-cols-3 gap-6">
        {VALUE.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <InteractiveCard accentColor="rgba(56, 189, 248, 0.14)" className="h-full">
              {/* Top Compartment (Header & Icon Box as per Sketch) */}
              <div className="p-5 bg-[#101426]/90 border-b border-[rgba(239,237,226,0.12)] flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${ACCENT[v.accent].border} ${ACCENT[v.accent].bg} shadow-inner`}>
                  <v.icon size={20} className={ACCENT[v.accent].text} />
                </div>
                <span className="text-xs font-mono text-[#B7B5AA]">Pillar 0{v.n}</span>
              </div>

              {/* Bottom Compartment (Body as per Sketch) */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#070914]/95">
                <div>
                  <h3 className="text-[#EFEDE2] font-semibold text-base mb-2 group-hover:text-cyan-200 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {v.title}
                  </h3>
                  <p className="text-[#B7B5AA] text-sm leading-relaxed">{v.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(239,237,226,0.08)] flex items-center justify-between text-xs font-mono text-[#B7B5AA]">
                  <span className="text-cyan-400 font-medium">Core Value</span>
                  <span>Verified</span>
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
