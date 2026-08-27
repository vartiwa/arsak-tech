import React from "react";
import { VALUE, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { InteractiveCard } from "../common/InteractiveCard";

export const TrustSection = () => (
  <section className="py-12 sm:py-16 md:py-20 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {VALUE.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <InteractiveCard className="h-full">
              {/* Top Compartment */}
              <div className="p-4 sm:p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border ${(ACCENT[v.accent] || ACCENT.blue).border} ${(ACCENT[v.accent] || ACCENT.blue).bg} shadow-sm`}>
                  <v.icon size={20} className={(ACCENT[v.accent] || ACCENT.blue).text} />
                </div>
                <span className="text-xs font-mono text-[#4A453A] font-bold">Phase 0{v.n}</span>
              </div>

              {/* Bottom Compartment */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-[#0D0C09] font-bold text-base sm:text-lg mb-2 font-['Space_Grotesk']">
                    {v.title}
                  </h3>
                  <p className="text-[#4A453A] text-xs sm:text-sm leading-relaxed font-medium">{v.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between text-xs font-mono text-[#4A453A]">
                  <span className="text-[#059669] font-bold">Core Offering</span>
                  <span className="font-semibold">Tailored</span>
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
