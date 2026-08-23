import React from "react";
import { User, PenLine } from "lucide-react";
import { PROBLEMS } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

const ManualDeskPanel = () => (
  <div
    className="relative rounded-2xl border border-slate-800/80 overflow-hidden p-6 sm:p-8"
    style={{ background: "linear-gradient(160deg, #120a08 0%, #08050a 100%)" }}
  >
    <span
      className="inline-block text-xs tracking-[0.15em] uppercase text-orange-400 border border-orange-500/30 bg-orange-500/10 rounded-full px-3.5 py-1 mb-5"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      Manual Operations Bottleneck
    </span>
    <div className="grid grid-cols-6 gap-2 mb-6">
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="h-4 rounded-sm bg-zinc-900 border border-slate-800/80"
          style={{ opacity: 0.4 + (i % 5) * 0.12 }}
        />
      ))}
    </div>
    <div className="flex items-center gap-2.5 text-zinc-400 text-xs sm:text-sm">
      <User size={14} className="text-orange-400 shrink-0" />
      <span>Teams re-typing data across disconnected tools</span>
    </div>
    <div className="flex items-center gap-2.5 text-zinc-400 text-xs sm:text-sm mt-2.5">
      <PenLine size={14} className="text-orange-400 shrink-0" />
      <span>Manual spot-checks causing verification delays</span>
    </div>
  </div>
);

export const ProblemSection = () => (
  <section className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent">
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
        <div className="mt-6 flex flex-col gap-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex items-center gap-3.5 border border-slate-800/80 bg-[#0a0f1d]/70 backdrop-blur-md shadow-sm rounded-xl px-4 py-3.5">
                <p.icon size={17} className="text-orange-400 shrink-0" />
                <span className="text-zinc-200 text-sm font-medium">{p.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
