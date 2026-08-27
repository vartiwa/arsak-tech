import React, { useState } from "react";
import { SOLUTIONS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const CATEGORIES = ["All Solutions", "Websites & Stores", "Booking & WhatsApp", "Custom Tools"];

export const SolutionsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Solutions");

  const filteredSolutions = SOLUTIONS.filter((s) => {
    if (activeCategory === "All Solutions") return true;
    if (activeCategory === "Websites & Stores") return s.accent === "blue" || s.accent === "purple";
    if (activeCategory === "Booking & WhatsApp") return s.accent === "cyan" || s.accent === "green";
    if (activeCategory === "Custom Tools") return s.accent === "orange" || s.accent === "blue";
    return true;
  });

  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Websites & Digital Tools Built for Your Business"
          sub="Choose what your business needs today, from a modern company website to an online store or booking system."
        />

        {/* Filter Category Pills */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0D0C09] text-white shadow-xs scale-102"
                  : "bg-white text-[#4A453A] border border-[rgba(22,20,14,0.12)] hover:border-[#0D0C09] hover:bg-[#FAF7F0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solution Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSolutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <InteractiveCard className="h-full">
                {/* TOP COMPARTMENT */}
                <div className="p-4 sm:p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border ${(ACCENT[s.accent] || ACCENT.blue).border} ${(ACCENT[s.accent] || ACCENT.blue).bg} shadow-sm`}>
                    <s.icon size={20} className={(ACCENT[s.accent] || ACCENT.blue).text} />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#6B6557] font-bold group-hover:text-[#0D0C09] transition-colors">
                    <span>Solution 0{i + 1}</span>
                    <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* BOTTOM COMPARTMENT */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-[#0D0C09] font-bold text-base sm:text-lg mb-2 font-['Space_Grotesk']">
                      {s.title}
                    </h3>
                    <p className="text-[#4A453A] text-xs sm:text-sm leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between text-[11px] sm:text-xs font-mono">
                    <span className="text-[#059669] font-bold flex items-center gap-1">
                      <CheckCircle2 size={13} />
                      <span>Ready to Deploy</span>
                    </span>
                    <span className="text-[#6B6557] font-semibold">100% Mobile Ready</span>
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
