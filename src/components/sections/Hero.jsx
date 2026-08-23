import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { ThreePhotoSphere } from "../common/ThreePhotoSphere";

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[rgba(239,237,226,0.14)] bg-[rgba(239,237,226,0.04)] mb-6 text-xs font-mono text-[#B7B5AA]">
                <span className="w-2 h-2 rounded-full bg-[#C0EB3A] shadow-sm shadow-[#C0EB3A]/50 animate-pulse" />
                <span>Available for Enterprise Deployments & Pilots</span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1
                className="text-4xl sm:text-5xl lg:text-[58px] font-semibold text-[#EFEDE2] tracking-[-0.035em] leading-[1.08] max-w-2xl"
              >
                Intelligent Software & Automation Pipelines for Growing Enterprises.
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-base sm:text-lg text-[#B7B5AA] leading-relaxed max-w-xl">
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#EFEDE2] border border-[rgba(239,237,226,0.18)] hover:border-[rgba(239,237,226,0.35)] px-6 py-3.5 rounded-full hover:bg-[rgba(239,237,226,0.04)] transition-all"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Proof Metrics */}
            <Reveal delay={0.16}>
              <div className="mt-12 pt-8 border-t border-[rgba(239,237,226,0.1)] grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-[#EFEDE2] font-mono">99.8%</div>
                  <div className="text-xs text-[#7D7C72] mt-1 font-mono uppercase tracking-wider">Extraction Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-[#EFEDE2] font-mono">&lt;250ms</div>
                  <div className="text-xs text-[#7D7C72] mt-1 font-mono uppercase tracking-wider">Processing Latency</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-[#EFEDE2] font-mono">100%</div>
                  <div className="text-xs text-[#7D7C72] mt-1 font-mono uppercase tracking-wider">Audit Trail Logged</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Centerpiece 3D Photorealistic Interactive Earth Globe */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <Reveal delay={0.06}>
              <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[480px] mx-auto flex items-center justify-center select-none">
                <ThreePhotoSphere />
              </div>
              <div className="mt-2 text-center text-xs font-mono text-[#7D7C72] flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C0EB3A]" />
                <span>Global Indian Engineering Hubs & Partner Arcs</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
