import React from "react";
import { ChevronRight, ChevronDown, CheckCircle2, Layers } from "lucide-react";
import { LAYERS, ACCENT } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const PlatformSection = () => (
  <section id="platform" className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Architecture"
        title="One Unified Automation Layer."
        sub="Connecting incoming business inputs to downstream systems with total transparency."
        center
      />
      <div className="mt-14 grid lg:grid-cols-4 gap-5 items-stretch">
        {LAYERS.map((layer, i) => (
          <Reveal key={layer.title} delay={i * 0.08} className="relative flex flex-col h-full">
            <InteractiveCard className="h-full">
              {/* TOP COMPARTMENT */}
              <div className="p-4 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-[rgba(22,20,14,0.11)] bg-white text-[#0D0C09] shadow-sm">
                    <Layers size={15} />
                  </div>
                  <h3 className="text-[#0D0C09] text-xs font-mono tracking-wider uppercase font-bold">
                    {layer.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#6B6557] font-bold">0{i + 1}</span>
              </div>

              {/* BOTTOM COMPARTMENT */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div className="flex flex-col gap-2">
                  {layer.items.map((it) => (
                    <div
                      key={it}
                      className="text-xs text-[#0D0C09] bg-[#FAF7F0] border border-[rgba(22,20,14,0.11)] rounded-lg px-3 py-2 font-semibold flex items-center justify-between"
                    >
                      <span>{it}</span>
                      <CheckCircle2 size={13} className="text-[#059669] shrink-0" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.11)] text-[11px] font-mono text-[#059669] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  Active Subsystem Ready
                </div>
              </div>
            </InteractiveCard>

            {/* Desktop Connector Pill */}
            {i < LAYERS.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 text-[#0D0C09] bg-white border border-[rgba(22,20,14,0.15)] rounded-full p-1.5 shadow-[0_4px_10px_rgba(22,20,14,0.08),inset_0_1px_0_rgba(255,255,255,1)]">
                <ChevronRight size={14} strokeWidth={2.5} />
              </div>
            )}
            {i < LAYERS.length - 1 && (
              <div className="lg:hidden flex justify-center my-2 text-[#0D0C09]">
                <ChevronDown size={18} strokeWidth={2.5} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
