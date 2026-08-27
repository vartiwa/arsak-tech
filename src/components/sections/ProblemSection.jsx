import React from "react";
import { Globe, AlertTriangle, Smartphone, Zap } from "lucide-react";
import { PROBLEMS } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const LegacyWebsiteCard = () => (
  <InteractiveCard className="h-full">
    {/* Top Header Compartment */}
    <div className="p-4 sm:p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-300 bg-amber-50 text-amber-700 shadow-sm">
        <AlertTriangle size={18} />
      </div>
      <span className="text-xs font-mono text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-2.5 py-0.5 rounded-full font-bold">
        Common Website Pitfalls
      </span>
    </div>
    {/* Bottom Body Compartment */}
    <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-[#0D0C09] font-bold text-base sm:text-lg mb-3 font-['Space_Grotesk']">
          Why Most Business Websites Underperform
        </h3>
        <p className="text-[#4A453A] text-xs sm:text-sm leading-relaxed mb-4">
          Generic templates and outdated sites load slowly on mobile, confuse potential buyers, and create manual work instead of generating reliable business leads.
        </p>
        <div className="space-y-2.5 pt-2 border-t border-[rgba(22,20,14,0.08)]">
          <div className="flex items-center gap-2 text-[#38342B] text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Over 65% of visitors leave if a site takes more than 2 seconds to load</span>
          </div>
          <div className="flex items-center gap-2 text-[#38342B] text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Inquiries get lost in unmonitored inboxes without instant automation</span>
          </div>
        </div>
      </div>
    </div>
  </InteractiveCard>
);

export const ProblemSection = () => (
  <section className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
      <Reveal>
        <LegacyWebsiteCard />
      </Reveal>
      <div>
        <SectionHeading
          eyebrow="The Real Challenge"
          title="Your website should work as hard as your best salesperson."
          sub="We replace clunky, outdated web pages with modern, high-converting digital storefronts that capture leads and automate customer handoffs."
        />
        <div className="mt-6 flex flex-col gap-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[rgba(22,20,14,0.11)] bg-white shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] flex items-center justify-center shrink-0">
                  <p.icon size={16} className="text-[#0D0C09]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0D0C09]">{p.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
