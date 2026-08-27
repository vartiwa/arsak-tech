import React from "react";
import { Sparkles, Code2, Zap } from "lucide-react";
import { WHY, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const WhySection = () => (
  <section id="why" className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionHeading
        eyebrow="Why Arsak"
        title="Built for Speed, Reliability, and Long-Term Scale"
        sub="Why growing businesses and modern companies choose Arsak as their dedicated web and software engineering partner."
        center
      />
      <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {WHY.map((w, i) => {
          const accentObj = (ACCENT[w.accent] || ACCENT.blue) || ACCENT.blue;
          const Icon = w.icon || Sparkles;
          return (
            <Reveal key={w.title} delay={i * 0.08}>
              <InteractiveCard className="h-full">
                {/* TOP COMPARTMENT */}
                <div className="p-4 sm:p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border ${accentObj.border} ${accentObj.bg} shadow-sm`}>
                    <Icon size={20} className={accentObj.text} />
                  </div>
                  <span className="text-xs font-mono text-[#4A453A] font-bold">Pillar 0{i + 1}</span>
                </div>

                {/* BOTTOM COMPARTMENT */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-[#0D0C09] font-bold text-base sm:text-lg mb-2 font-['Space_Grotesk']">
                      {w.title}
                    </h3>
                    <p className="text-[#4A453A] text-xs sm:text-sm leading-relaxed font-medium">{w.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[rgba(22,20,14,0.11)] text-xs font-mono text-[#059669] font-bold">
                    ✓ Verified Quality Guarantee
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
