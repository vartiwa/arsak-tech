import React from "react";
import { MANUAL_FLOW, ARSAK_FLOW } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { FlowLine } from "../common/FlowLine";
import { InteractiveCard } from "../common/InteractiveCard";

const FeaturedFlow = ({ title, steps, isArsak }) => (
  <InteractiveCard className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between items-center text-center">
    <div className="w-full flex flex-col items-center">
      {/* Centered Flow Category Title */}
      <div className="flex items-center justify-center mb-5 sm:mb-6 w-full">
        <span
          className={`inline-block text-xs font-mono tracking-wider uppercase font-bold px-4 py-1.5 rounded-full border text-center ${
            isArsak
              ? "text-[#0D1204] bg-[#BCEB28] border-[#0D1204]/15 shadow-sm"
              : "text-[#B45309] bg-[#FEF3C7] border-[#FDE68A]"
          }`}
        >
          {title}
        </span>
      </div>

      {/* Centered Workflow Steps */}
      <div className="flex flex-col items-center w-full">
        {steps.map((s, i) => (
          <div key={s} className="w-full flex flex-col items-center">
            <div
              className={`text-xs sm:text-sm rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 border font-semibold text-center w-full max-w-sm flex items-center justify-center ${
                isArsak
                  ? "border-[#BCEB28] bg-[#FAF7F0] text-[#0D0C09] shadow-[0_4px_12px_rgba(188,235,40,0.15)]"
                  : "border-[rgba(22,20,14,0.11)] bg-[#FAF7F0] text-[#6B6557]"
              }`}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <div className="my-1 flex justify-center w-full">
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
  <section className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionHeading
        eyebrow="Visitor Experience"
        title="The Difference a Modern Website Makes"
        sub="See how a fast, clear website turns everyday visitors into paying customers without friction."
        center
      />
      <Reveal delay={0.08}>
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <FeaturedFlow title="Old / Slow Website" steps={MANUAL_FLOW} isArsak={false} />
          <FeaturedFlow title="Fast Modern Arsak Website" steps={ARSAK_FLOW} isArsak={true} />
        </div>
      </Reveal>
    </div>
  </section>
);
