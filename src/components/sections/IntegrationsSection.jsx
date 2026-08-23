import React from "react";
import { INTEGRATION_CATEGORIES, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export const IntegrationsSection = () => (
  <section className="py-16 md:py-20 border-t border-[rgba(15,21,36,0.08)] bg-transparent">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Integrations"
        accent="cyan"
        title="Seamlessly Integrates with Your Existing Stack."
        sub="No need to replace what works. Arsak connects cleanly through secure APIs and direct connectors."
        center
      />
      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          {INTEGRATION_CATEGORIES.map((c) => (
            <span
              key={c.name}
              className={`text-sm text-zinc-200 border rounded-full px-5 py-2.5 font-medium bg-[#0a0f1d]/70 backdrop-blur-md shadow-sm shadow-sm ${
                ACCENT[c.accent].border
              }`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
