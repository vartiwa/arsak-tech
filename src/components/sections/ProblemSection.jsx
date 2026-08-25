import React from "react";
import { User, PenLine, AlertTriangle } from "lucide-react";
import { PROBLEMS } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const ManualDeskPanel = () => (
  <InteractiveCard className="h-full">
    {/* Top Header Compartment */}
    <div className="p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-300 bg-amber-50 text-amber-700 shadow-sm">
        <AlertTriangle size={18} />
      </div>
      <span className="text-xs font-mono text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-2.5 py-0.5 rounded-full font-bold">
        Legacy Operations
      </span>
    </div>
    {/* Bottom Body Compartment */}
    <div className="p-6 bg-white flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-[#0D0C09] font-bold text-base mb-3 font-['Space_Grotesk']">
          Manual Operations Bottleneck
        </h3>
        <div className="grid grid-cols-6 gap-2 mb-6">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="h-3.5 rounded-sm bg-[#FAF7F0] border border-[rgba(22,20,14,0.11)]"
              style={{ opacity: 0.45 + (i % 5) * 0.12 }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-[#38342B] text-xs sm:text-sm font-medium">
          <User size={15} className="text-amber-600 shrink-0" />
          <span>Teams re-typing data across disconnected enterprise tools</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#38342B] text-xs sm:text-sm mt-3 font-medium">
          <PenLine size={15} className="text-amber-600 shrink-0" />
          <span>Manual spot-checks causing multi-day verification delays</span>
        </div>
      </div>
    </div>
  </InteractiveCard>
);

export const ProblemSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <ManualDeskPanel />
      </Reveal>
      <div>
        <SectionHeading
          eyebrow="The Problem"
          title="Manual processes slow business growth."
          sub="Enterprises lose thousands of productive hours every quarter copying data between invoices, spreadsheets, and legacy back-office software."
        />
        <div className="mt-6 flex flex-col gap-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <InteractiveCard>
                <div className="p-4 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-amber-200 bg-amber-50 text-amber-700 shadow-sm">
                      <p.icon size={16} />
                    </div>
                    <span className="text-[#0D0C09] text-sm font-bold">{p.title}</span>
                  </div>
                  <span className="text-xs font-mono text-[#6B6557] font-bold">0{i + 1}</span>
                </div>
                <div className="px-4 py-3 bg-white text-xs text-[#4A453A] font-medium">
                  Eliminated with Arsak autonomous extraction & validation pipelines.
                </div>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
