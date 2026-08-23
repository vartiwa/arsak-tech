import React from "react";
import { SERVICES } from "../../data/siteData";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";
import { ArrowUpRight } from "lucide-react";

export const ServicesSection = ({ onOpenContact }) => (
  <section id="services" className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Capabilities"
        accent="blue"
        title="Enterprise Capabilities & Engineering Services."
        sub="From bespoke AI architectures to legacy ERP modernization, we build production systems that scale."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s} delay={i * 0.05}>
            <InteractiveCard accentColor="rgba(56, 189, 248, 0.14)" className="p-6 flex flex-col justify-between h-full cursor-pointer" onClick={onOpenContact}>
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span>Capability 0{i + 1}</span>
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Custom engineered models and low-latency integration pipelines built for enterprise throughput.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-400">Explore Architecture</span>
                <span>Production Ready</span>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
