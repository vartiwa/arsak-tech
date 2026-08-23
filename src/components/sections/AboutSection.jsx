import React from "react";
import { Reveal } from "../common/Reveal";
import { InteractiveCard } from "../common/InteractiveCard";
import { Target, Compass } from "lucide-react";

export const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 border-t border-slate-800/60 bg-transparent relative">
    <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
      <Reveal className="lg:col-span-5">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-[1.2] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Technology Built Around Your Business Operations.
        </h2>
        <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
          Arsak Technologies is on a mission to free human talent from repetitive manual busywork by engineering resilient, high-accuracy AI software and automation pipelines.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="lg:col-span-7">
        <div className="grid sm:grid-cols-2 gap-6">
          <InteractiveCard accentColor="rgba(129, 140, 248, 0.16)" className="h-full">
            {/* Top Header Compartment */}
            <div className="p-4 bg-[#0e1628]/80 border-b border-slate-700/70 flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                <Compass size={18} />
              </div>
              <span className="text-xs font-mono text-indigo-400 font-semibold">Our Vision</span>
            </div>
            {/* Bottom Body Compartment */}
            <div className="p-5 sm:p-6 bg-[#070b16]/90 flex-1 flex flex-col justify-between">
              <p className="text-slate-300 text-sm leading-relaxed">
                Make enterprise-grade AI and intelligent process automation accessible, transparent, and seamless for growing organizations worldwide.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                Long-term Horizon
              </div>
            </div>
          </InteractiveCard>

          <InteractiveCard accentColor="rgba(56, 189, 248, 0.16)" className="h-full">
            {/* Top Header Compartment */}
            <div className="p-4 bg-[#0e1628]/80 border-b border-slate-700/70 flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <Target size={18} />
              </div>
              <span className="text-xs font-mono text-blue-400 font-semibold">Our Mission</span>
            </div>
            {/* Bottom Body Compartment */}
            <div className="p-5 sm:p-6 bg-[#070b16]/90 flex-1 flex flex-col justify-between">
              <p className="text-slate-300 text-sm leading-relaxed">
                Build dependable software systems that connect fragmented applications and eliminate administrative friction forever.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                Engineering Focus
              </div>
            </div>
          </InteractiveCard>
        </div>
      </Reveal>
    </div>
  </section>
);
