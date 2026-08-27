import React from "react";
import { ArrowUpRight, Sparkles, Smartphone, Zap } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { ThreePhotoSphere } from "../common/ThreePhotoSphere";

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12 min-h-[calc(100vh-65px)] flex items-center overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[rgba(22,20,14,0.12)] bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] mb-3 text-[11px] sm:text-xs font-mono text-[#10160A] font-semibold max-w-full truncate">
                <span className="w-2 h-2 rounded-full bg-[#10160A] shadow-sm animate-pulse shrink-0" />
                <span className="truncate">Accepting New Website & Custom Software Projects</span>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] xl:text-[50px] font-bold text-[#0D0C09] tracking-[-0.035em] leading-[1.12] sm:leading-[1.08] max-w-xl font-['Space_Grotesk']" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Modern Websites & Digital Products Built for Growing Businesses.
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-3 sm:mt-3.5 text-xs sm:text-sm md:text-base text-[#4A453A] leading-relaxed max-w-lg font-normal">
                We design and build clean, fast, high-converting websites for companies — and power them with smart automations, client portals, and custom software as your business expands.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-5 sm:mt-6 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3.5 w-full xs:w-auto">
                <button
                  onClick={onOpenContact}
                  className="btn-lime inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full cursor-pointer gap-2 text-center shadow-sm"
                >
                  <span>Start Your Website Project</span>
                  <ArrowUpRight size={15} />
                </button>
                <a
                  href="#solutions"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-center"
                >
                  <span>Explore What We Build</span>
                </a>
              </div>
            </Reveal>

            {/* Quick Proof Metrics */}
            <Reveal delay={0.16}>
              <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[rgba(22,20,14,0.11)] grid grid-cols-3 gap-2 sm:gap-8 w-full max-w-md">
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-[#0D0C09] font-mono">100%</div>
                  <div className="text-[9px] sm:text-[11px] text-[#4A453A] mt-0.5 font-mono uppercase tracking-wider">Mobile First</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-[#0D0C09] font-mono">&lt;1 Sec</div>
                  <div className="text-[9px] sm:text-[11px] text-[#4A453A] mt-0.5 font-mono uppercase tracking-wider">Page Load Speed</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-[#0D0C09] font-mono">Custom</div>
                  <div className="text-[9px] sm:text-[11px] text-[#4A453A] mt-0.5 font-mono uppercase tracking-wider">Design & Code</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Earth Globe with Tech Capital Hubs */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full mt-2 lg:mt-0">
            <Reveal delay={0.06} className="w-full flex flex-col items-center">
              <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] lg:max-w-[560px] aspect-square flex items-center justify-center select-none">
                <ThreePhotoSphere />
              </div>
              <div className="mt-1 sm:mt-2 text-center text-[10px] sm:text-xs font-mono text-[#4A453A] flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16140E] shrink-0" />
                <span>Crafting Digital Experiences Worldwide · Built in India</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
