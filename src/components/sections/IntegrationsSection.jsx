import React from "react";
import { INTEGRATION_CATEGORIES } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export const IntegrationsSection = () => (
  <section className="py-16 md:py-20 border-t border-[rgba(22,20,14,0.11)] bg-transparent">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Integrations"
        title="Seamlessly Integrates with Your Existing Stack."
        sub="No need to replace what works. Arsak connects cleanly through enterprise-grade secure APIs, webhooks, and direct database connectors."
        center
      />
      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
          {INTEGRATION_CATEGORIES.map((c) => (
            <span
              key={c.name}
              className="text-xs sm:text-sm text-[#0D0C09] border border-[rgba(22,20,14,0.13)] rounded-full px-5 py-2.5 font-bold bg-white hover:bg-[#EFECE3] hover:border-[rgba(22,20,14,0.25)] transition-all shadow-[0_2px_8px_-2px_rgba(22,20,14,0.06),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-0.5 cursor-default flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#BCEB28] border border-[#0D1204]/20 shadow-sm" />
              {c.name}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
