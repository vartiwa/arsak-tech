import React from "react";
import { Sparkles, CheckCircle2, MessageSquare, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const AIAgentSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent">
    <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-6">
        <SectionHeading
          eyebrow="Arsak Operations AI"
          title="An Operations Co-Pilot, Not Just a Chatbot."
          sub="Arsak AI monitors real-time telemetry across your enterprise tools, flags missing data before orders fail, and autonomously resolves reconciliation mismatches."
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-[rgba(22,20,14,0.11)] bg-white shadow-sm">
            <div className="text-xl font-bold text-[#0D0C09] font-mono">0ms Delay</div>
            <div className="text-xs text-[#4A453A] mt-1 font-medium">Instant Telemetry Monitoring</div>
          </div>
          <div className="p-4 rounded-xl border border-[rgba(22,20,14,0.11)] bg-white shadow-sm">
            <div className="text-xl font-bold text-[#0D0C09] font-mono">Auto-Healing</div>
            <div className="text-xs text-[#4A453A] mt-1 font-medium">ERP Quote Reconciliation</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6">
        <Reveal delay={0.08}>
          <InteractiveCard className="h-full">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(22,20,14,0.11)] bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(22,20,14,0.12)] flex items-center justify-center text-[#7C3AED] shadow-sm">
                  <Sparkles size={15} />
                </div>
                <span className="text-xs text-[#0D0C09] font-bold font-mono">Arsak AI · Autonomous Operations</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                Live Node Active
              </span>
            </div>

            <div className="p-6 bg-white flex flex-col gap-3.5 font-sans">
              <div className="self-end max-w-[85%] bg-[#FAF7F0] border border-[rgba(22,20,14,0.12)] text-[#0D0C09] text-xs sm:text-sm font-semibold rounded-2xl px-4 py-2.5 shadow-sm">
                Show pending purchase orders requiring validation.
              </div>

              <div className="self-start max-w-[92%] bg-white border border-[rgba(22,20,14,0.14)] text-[#0D0C09] text-xs sm:text-sm rounded-2xl px-4 py-3 shadow-sm font-medium">
                18 orders analyzed. 3 exceptions detected and autonomously mitigated:
              </div>

              <div className="self-start w-full border border-[rgba(22,20,14,0.11)] bg-[#FAF7F0] rounded-xl p-4 text-xs text-[#38342B] flex flex-col gap-2 font-mono">
                <div className="flex items-center justify-between pb-1.5 border-b border-[rgba(22,20,14,0.06)]">
                  <span className="text-[#D97706] font-bold">● 2 pricing mismatches</span>
                  <span className="text-[#059669] font-bold">Auto-resolved via ERP #910</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[rgba(22,20,14,0.06)]">
                  <span className="text-[#7C3AED] font-bold">● 1 missing tax identifier</span>
                  <span className="text-[#4A453A]">Auto-requested from vendor</span>
                </div>
                <div className="text-[#059669] font-bold flex items-center gap-1.5 pt-1">
                  <CheckCircle2 size={14} className="shrink-0" />
                  <span>15 orders validated and synchronized into SAP</span>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </Reveal>
      </div>
    </div>
  </section>
);
