import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { Eyebrow } from "../common/Eyebrow";

export const AIAgentSection = () => (
  <section className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent">
    <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
      <Reveal>
        <Eyebrow accent="purple">Arsak Operations AI</Eyebrow>
        <h2
          className="text-2xl md:text-3xl font-semibold text-[#0D0C09] leading-[1.2] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          An Operations Co-Pilot, Not Just a Chatbot.
        </h2>
        <p className="mt-4 text-[#4A453A] text-base leading-relaxed">
          Arsak AI monitors real-time telemetry across your enterprise tools, flags missing data before orders fail, and autonomously resolves reconciliation mismatches.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="border border-[rgba(22,20,14,0.11)] rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(22,20,14,0.11)] bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400" />
              <span className="text-sm text-zinc-200 font-medium font-mono">Arsak AI · Live Operations</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="self-end max-w-[85%] bg-white text-black text-sm font-medium rounded-xl px-4 py-2.5 shadow-sm">
              Show pending purchase orders requiring approval.
            </div>
            <div className="self-start max-w-[90%] bg-zinc-900 border border-[rgba(22,20,14,0.11)] text-zinc-200 text-sm rounded-xl px-4 py-2.5">
              18 orders analyzed. 3 exceptions detected requiring routing:
            </div>
            <div
              className="self-start max-w-[90%] border border-[rgba(22,20,14,0.11)]/90 bg-transparent/50 rounded-xl px-4 py-3 text-xs text-[#4A453A] flex flex-col gap-1.5 font-mono"
            >
              <span className="text-orange-400">● 2 pricing mismatches (resolved with ERP quote #910)</span>
              <span className="text-purple-400">● 1 missing tax identifier (requested via auto-email)</span>
              <span className="text-emerald-400 flex items-center gap-1.5 mt-1">
                <CheckCircle2 size={13} /> 15 orders approved and posted to SAP
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
