import React from "react";
import { MANUAL_FLOW, ARSAK_FLOW, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { FlowLine } from "../common/FlowLine";
import { InteractiveCard } from "../common/InteractiveCard";

const FeaturedFlow = ({ title, steps, accent, badgeAccent }) => (
  <InteractiveCard
    accentColor={accent === "orange" ? "rgba(245, 158, 11, 0.12)" : "rgba(56, 189, 248, 0.15)"}
    className="p-6 md:p-8 h-full flex flex-col justify-between"
  >
    <div>
      <span
        className={`inline-block text-xs font-mono tracking-wider uppercase mb-6 font-semibold ${ACCENT[badgeAccent].text}`}
      >
        {title}
      </span>
      <div className="flex flex-col">
        {steps.map((s, i) => (
          <div key={s}>
            <div
              className={`text-sm rounded-xl px-4 py-3 border font-medium ${
                accent === "orange"
                  ? "border-[rgba(239,237,226,0.14)] bg-[#F6F7F9] text-[#475569]"
                  : "border-[#C0EB3A]/30 bg-[#0E100F] text-[#0F1524] shadow-sm"
              }`}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <div className="my-1">
                <FlowLine length={20} delay={i * 0.15} color={accent === "orange" ? "#f59e0b" : "#38bdf8"} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </InteractiveCard>
);

export const UseCaseSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(15,21,36,0.08)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        title="From Manual Drag to Instant Execution"
        sub="Side-by-side comparison of conventional document entry versus Arsak AI extraction."
        center
      />
      <Reveal delay={0.08}>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <FeaturedFlow title="Traditional Manual Process" steps={MANUAL_FLOW} accent="orange" badgeAccent="orange" />
          <FeaturedFlow title="Arsak Automated Pipeline" steps={ARSAK_FLOW} accent="blue" badgeAccent="cyan" />
        </div>
      </Reveal>
    </div>
  </section>
);
