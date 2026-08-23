import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { ThreePhotoSphere } from "../common/ThreePhotoSphere";

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-20 lg:pb-10 min-h-[calc(100vh-65px)] flex items-center overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[rgba(22,20,14,0.12)] bg-[#EFECE4] mb-3.5 text-xs font-mono text-[#10160A] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#10160A] shadow-sm animate-pulse" />
                <span>Available for Enterprise Deployments & Pilots</span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#16140E] tracking-[-0.035em] leading-[1.08] max-w-xl font-['Space_Grotesk']" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Intelligent Software & Automation Pipelines for Growing Enterprises.
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-3.5 text-sm sm:text-base text-[#5C584E] leading-relaxed max-w-lg font-normal">
                Arsak Technologies builds resilient AI extraction models, automated workflow backbones, and custom enterprise software that eliminate manual friction forever.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenContact}
                  className="btn-lime inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 rounded-full cursor-pointer gap-2"
                >
                  <span>Request Automation Blueprint</span>
                  <ArrowUpRight size={15} />
                </button>
                <a
                  href="#solutions"
                  className="btn-secondary inline-flex items-center gap-2 text-xs sm:text-sm px-5 sm:px-6 py-3 rounded-full"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Proof Metrics */}
            <Reveal delay={0.16}>
              <div className="mt-7 pt-5 border-t border-[rgba(22,20,14,0.08)] grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-md">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#16140E] font-mono">99.8%</div>
                  <div className="text-[11px] text-[#7A756B] mt-0.5 font-mono uppercase tracking-wider">Extraction Accuracy</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#16140E] font-mono">&lt;250ms</div>
                  <div className="text-[11px] text-[#7A756B] mt-0.5 font-mono uppercase tracking-wider">Processing Latency</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#16140E] font-mono">100%</div>
                  <div className="text-[11px] text-[#7A756B] mt-0.5 font-mono uppercase tracking-wider">Audit Trail Logged</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Centerpiece 3D Earth Globe */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full">
            <Reveal delay={0.06} className="w-full flex flex-col items-center">
              <div className="w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] aspect-square flex items-center justify-center select-none">
                <ThreePhotoSphere />
              </div>
              <div className="mt-1 text-center text-xs font-mono text-[#7A756B] flex items-center justify-center gap-2">
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
