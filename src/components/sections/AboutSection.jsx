import React from "react";
import { Reveal } from "../common/Reveal";

export const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent">
    <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10">
      <Reveal>
        <h2
          className="text-2xl md:text-3xl font-semibold text-white leading-[1.2] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Technology Built Around Your Business Operations.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
          Arsak Technologies is on a mission to free human talent from repetitive manual busywork by engineering resilient, high-accuracy AI software and automation pipelines.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-purple-500/30 bg-purple-500/[0.03] rounded-2xl p-6">
            <h3
              className="text-purple-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2"
            >
              Our Vision
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Make enterprise-grade AI and intelligent process automation accessible, transparent, and seamless for growing organizations worldwide.
            </p>
          </div>
          <div className="border border-blue-500/30 bg-blue-500/[0.03] rounded-2xl p-6">
            <h3
              className="text-blue-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2"
            >
              Our Mission
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Build dependable software systems that connect fragmented applications and eliminate administrative friction forever.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
