import React from "react";
import { ChevronRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { LAYERS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const LAYER_GLOWS = {
  cyan: "rgba(56, 189, 248, 0.16)",
  purple: "rgba(129, 140, 248, 0.16)",
  blue: "rgba(59, 130, 246, 0.16)",
  green: "rgba(16, 185, 129, 0.16)",
};

export const PlatformSection = () => (
  <section id="platform" className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Architecture"
        accent="cyan"
        title="One Unified Automation Layer."
        sub="Connecting incoming business inputs to downstream systems with total transparency."
        center
      />
      <div className="mt-14 grid lg:grid-cols-4 gap-5 items-stretch">
        {LAYERS.map((layer, i) => (
          <Reveal key={layer.title} delay={i * 0.08} className="relative flex flex-col h-full">
            <InteractiveCard accentColor={LAYER_GLOWS[layer.accent] || "rgba(56, 189, 248, 0.15)"} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-5 pb-2.5 border-b border-slate-800/80">
                  <span className="w-2 h-2 rounded-full" style={{ background: ACCENT[layer.accent].dot }} />
                  <h3 className="text-white text-xs font-mono tracking-wider uppercase font-semibold">
                    {layer.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2.5">
                  {layer.items.map((it) => (
                    <div
                      key={it}
                      className="text-xs text-slate-300 bg-[#03060f] border border-slate-800/80 hover:border-slate-700 rounded-lg px-3 py-2 font-medium flex items-center justify-between transition-colors"
                    >
                      <span>{it}</span>
                      <CheckCircle2 size={12} className="text-slate-500 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                Step 0{i + 1} Pipeline Layer
              </div>
            </InteractiveCard>
            {i < LAYERS.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 text-slate-500 bg-slate-900 border border-slate-700 rounded-full p-0.5 shadow-md">
                <ChevronRight size={14} />
              </div>
            )}
            {i < LAYERS.length - 1 && (
              <div className="lg:hidden flex justify-center my-2 text-slate-500">
                <ChevronDown size={18} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
