import React from "react";
import { SERVICES } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight, Layers } from "lucide-react";

export const ServicesSection = ({ onOpenContact }) => (
  <section id="services" className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionHeading
        eyebrow="Capabilities"
        accent="blue"
        title="Enterprise Capabilities & Engineering Services."
        sub="From bespoke AI architectures to legacy ERP modernization, we build production systems that scale."
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SERVICES.map((s, i) => (
          <Reveal key={s} delay={i * 0.05}>
            <InteractiveCard accentColor="rgba(56, 189, 248, 0.14)" className="h-full cursor-pointer" onClick={onOpenContact}>
              {/* TOP COMPARTMENT (Header with Icon Box as per Sketch) */}
              <div className="p-5 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-blue-500/30 bg-blue-500/10 shadow-inner text-[#F3B44A]">
                  <Layers size={18} />
                </div>
                <span className="text-xs font-mono text-[#4A453A]">Service 0{i + 1}</span>
              </div>

              {/* BOTTOM COMPARTMENT (Body Content as per Sketch) */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-lg font-semibold text-[#0D0C09] group-hover:text-[#0D0C09] transition-colors mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {s}
                  </h3>
                  <p className="text-xs text-[#4A453A] leading-relaxed">
                    Custom engineered models and low-latency integration pipelines built for high enterprise throughput.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between text-xs font-mono text-[#4A453A]">
                  <span className="text-[#C0EB3A]">Request Blueprint</span>
                  <ArrowUpRight size={13} className="text-[#4A453A] group-hover:text-[#C0EB3A] transition-colors" />
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
