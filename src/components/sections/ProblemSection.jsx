import React from "react";
import { User, PenLine, AlertTriangle } from "lucide-react";
import { PROBLEMS } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const ManualDeskPanel = () => (
  <InteractiveCard accentColor="rgba(245, 158, 11, 0.12)" className="h-full">
    {/* Top Header Compartment */}
    <div className="p-5 bg-[#EFECE4] border-b border-[rgba(22,20,14,0.09)] flex items-center justify-between">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-amber-500/30 bg-amber-500/10 text-amber-400">
        <AlertTriangle size={18} />
      </div>
      <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded">
        Legacy Operations
      </span>
    </div>
    {/* Bottom Body Compartment */}
    <div className="p-6 bg-white flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-[#16140E] font-semibold text-base mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Manual Operations Bottleneck
        </h3>
        <div className="grid grid-cols-6 gap-2 mb-6">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="h-3.5 rounded-sm bg-slate-900 border border-[rgba(239,237,226,0.1)]"
              style={{ opacity: 0.35 + (i % 5) * 0.12 }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-[#5C584E] text-xs sm:text-sm">
          <User size={14} className="text-amber-400 shrink-0" />
          <span>Teams re-typing data across disconnected tools</span>
        </div>
        <div className="flex items-center gap-2.5 text-[#5C584E] text-xs sm:text-sm mt-3">
          <PenLine size={14} className="text-amber-400 shrink-0" />
          <span>Manual spot-checks causing verification delays</span>
        </div>
      </div>
    </div>
  </InteractiveCard>
);

export const ProblemSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.08)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <ManualDeskPanel />
      </Reveal>
      <div>
        <SectionHeading
          accent="orange"
          eyebrow="The Problem"
          title="Manual processes slow business growth."
          sub="Enterprises lose thousands of productive hours every quarter copying data between invoices, spreadsheets, and legacy back-office software."
        />
        <div className="mt-6 flex flex-col gap-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <InteractiveCard accentColor="rgba(245, 158, 11, 0.12)">
                <div className="p-4 bg-[#EFECE4] border-b border-[rgba(22,20,14,0.09)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-amber-500/30 bg-amber-500/10 text-amber-400">
                      <p.icon size={16} />
                    </div>
                    <span className="text-[#16140E] text-sm font-semibold">{p.title}</span>
                  </div>
                  <span className="text-xs font-mono text-[#5C584E]">0{i + 1}</span>
                </div>
                <div className="px-4 py-3 bg-white text-xs text-[#5C584E]">
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
