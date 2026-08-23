import React from "react";
import { ChevronRight, ChevronDown, CheckCircle2, Layers } from "lucide-react";
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
  <section id="platform" className="py-16 md:py-24 border-t border-[rgba(15,21,36,0.08)] bg-transparent relative">
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
            <InteractiveCard accentColor={LAYER_GLOWS[layer.accent] || "rgba(56, 189, 248, 0.15)"} className="h-full">
              {/* TOP COMPARTMENT (Header & Icon Box as per Sketch) */}
              <div className="p-4 bg-[#F1F4F9] border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#C0EB3A]/30 bg-[#C0EB3A]/10 text-[#C0EB3A]">
                    <Layers size={15} />
                  </div>
                  <h3 className="text-[#0F1524] text-xs font-mono tracking-wider uppercase font-semibold">
                    {layer.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#475569]">0{i + 1}</span>
              </div>

              {/* BOTTOM COMPARTMENT (Body Pipeline Items as per Sketch) */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div className="flex flex-col gap-2">
                  {layer.items.map((it) => (
                    <div
                      key={it}
                      className="text-xs text-[#475569] bg-[#F6F7F9] border border-[rgba(239,237,226,0.14)] rounded-lg px-3 py-2 font-medium flex items-center justify-between"
                    >
                      <span>{it}</span>
                      <CheckCircle2 size={12} className="text-[#C0EB3A] shrink-0" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(15,21,36,0.08)] text-[11px] font-mono text-[#475569]">
                  Active Subsystem Ready
                </div>
              </div>
            </InteractiveCard>
            {i < LAYERS.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 text-[#475569] bg-slate-900 border border-slate-700 rounded-full p-1 shadow-md">
                <ChevronRight size={14} />
              </div>
            )}
            {i < LAYERS.length - 1 && (
              <div className="lg:hidden flex justify-center my-2 text-[#475569]">
                <ChevronDown size={18} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
