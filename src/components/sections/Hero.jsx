import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { ThreePhotoSphere } from "../common/ThreePhotoSphere";

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[rgba(22,20,14,0.12)] bg-[#EFECE4] mb-6 text-xs font-mono text-[#10160A] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#10160A] shadow-sm animate-pulse" />
                <span>Available for Enterprise Deployments & Pilots</span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#16140E] tracking-[-0.035em] leading-[1.08] max-w-xl font-['Space_Grotesk']" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Intelligent Software & Automation Pipelines for Growing Enterprises.
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-base sm:text-lg text-[#5C584E] leading-relaxed max-w-lg font-normal">
                Arsak Technologies builds resilient AI extraction models, automated workflow backbones, and custom enterprise software that eliminate manual friction forever.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="btn-lime inline-flex items-center justify-center text-sm font-semibold px-7 py-3.5 rounded-full cursor-pointer gap-2"
                >
                  <span>Request Automation Blueprint</span>
                  <ArrowUpRight size={16} />
                </button>
                <a
                  href="#solutions"
                  className="btn-secondary inline-flex items-center gap-2 text-sm px-6 py-3.5 rounded-full"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Proof Metrics */}
            <Reveal delay={0.16}>
              <div className="mt-12 pt-8 border-t border-[rgba(22,20,14,0.08)] grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#16140E] font-mono">99.8%</div>
                  <div className="text-xs text-[#7A756B] mt-1 font-mono uppercase tracking-wider">Extraction Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#16140E] font-mono">&lt;250ms</div>
                  <div className="text-xs text-[#7A756B] mt-1 font-mono uppercase tracking-wider">Processing Latency</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#16140E] font-mono">100%</div>
                  <div className="text-xs text-[#7A756B] mt-1 font-mono uppercase tracking-wider">Audit Trail Logged</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Massive Centerpiece 3D Earth Globe Covering Right Half */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full overflow-visible -translate-y-3 lg:-translate-y-7">
            <Reveal delay={0.06} className="w-full flex flex-col items-center">
              <div className="w-full h-[540px] sm:h-[630px] lg:h-[720px] xl:h-[780px] flex items-center justify-center select-none overflow-visible">
                <ThreePhotoSphere />
              </div>
              <div className="mt-2 text-center text-xs font-mono text-[#7A756B] flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16140E]" />
                <span>Global Indian Engineering Hubs & Partner Capital Arcs</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
