import React from "react";
import { MANUAL_FLOW, ARSAK_FLOW } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { FlowLine } from "../common/FlowLine";
import { InteractiveCard } from "../common/InteractiveCard";

const FeaturedFlow = ({ title, steps, isArsak }) => (
  <InteractiveCard className="p-6 md:p-8 h-full flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-6">
        <span
          className={`inline-block text-xs font-mono tracking-wider uppercase font-bold px-3 py-1 rounded-full border ${
            isArsak
              ? "text-[#0D1204] bg-[#BCEB28] border-[#0D1204]/15 shadow-sm"
              : "text-[#B45309] bg-[#FEF3C7] border-[#FDE68A]"
          }`}
        >
          {title}
        </span>
      </div>
      <div className="flex flex-col">
        {steps.map((s, i) => (
          <div key={s}>
            <div
              className={`text-xs sm:text-sm rounded-xl px-4 py-3 border font-semibold ${
                isArsak
                  ? "border-[#BCEB28] bg-[#FAF7F0] text-[#0D0C09] shadow-[0_4px_12px_rgba(188,235,40,0.15)]"
                  : "border-[rgba(22,20,14,0.11)] bg-[#FAF7F0] text-[#6B6557]"
              }`}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <div className="my-1">
                <FlowLine length={20} delay={i * 0.15} color={isArsak ? "#059669" : "#d97706"} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </InteractiveCard>
);

export const UseCaseSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Workflow Comparison"
        title="From Manual Drag to Instant Execution"
        sub="Side-by-side comparison of conventional document entry versus Arsak AI extraction."
        center
      />
      <Reveal delay={0.08}>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <FeaturedFlow title="Traditional Manual Process" steps={MANUAL_FLOW} isArsak={false} />
          <FeaturedFlow title="Arsak Automated Pipeline" steps={ARSAK_FLOW} isArsak={true} />
        </div>
      </Reveal>
    </div>
  </section>
);
