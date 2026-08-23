import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { ThreePhotoSphere } from "../common/ThreePhotoSphere";

export const Hero = ({ onOpenContact }) => (
  <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 overflow-hidden flex flex-col justify-between min-h-[92vh]">
    {/* Subtle Dark Ambient Gradients */}
    <div
      className="absolute top-1/4 -left-20 w-[38rem] h-[38rem] rounded-full opacity-[0.14] blur-3xl pointer-events-none -z-0"
      style={{
        background: "radial-gradient(circle, #1e3a8a 0%, #0f172a 60%, transparent 80%)",
      }}
    />
    <div
      className="absolute top-1/3 right-0 w-[38rem] h-[38rem] rounded-full opacity-[0.10] blur-3xl pointer-events-none -z-0"
      style={{
        background: "radial-gradient(circle, #0369a1 0%, #0f172a 60%, transparent 80%)",
      }}
    />

    <div className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10 my-auto">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            ENTERPRISE AUTOMATION & AI
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-[4.6rem] font-bold tracking-tight leading-[1.04] text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Intelligent{" "}
            <span className="text-slate-400 font-light">
              automation
            </span>
            <br />
            for global scale.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg font-normal">
            Transform complex operations, document pipelines, and manual workflows into resilient, autonomous software systems. Built in India for world-class enterprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-white text-slate-950 font-semibold text-sm sm:text-base px-7 py-3 rounded-lg hover:bg-slate-100 transition-all shadow-md active:scale-[0.98]"
            >
              Schedule a Demo
              <ArrowRight size={16} />
            </button>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium text-sm sm:text-base px-7 py-3 rounded-lg transition-all hover:border-slate-600"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* Right 3D Earth Globe */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <ThreePhotoSphere />
        </div>
      </div>
    </div>

    {/* Live Bottom Ticker: Clean, crisp enterprise metrics */}
    <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mt-10 sm:mt-14 relative z-10">
      <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 tracking-wider uppercase">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2 text-center sm:text-left">
          <span className="text-white font-semibold">78% AUTOMATION RATE</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>1.2M+ TASKS AUTOMATED</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>99.8% ACCURACY</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-300">GLOBAL NETWORK FROM INDIA</span>
        </div>

        <a
          href="#solutions"
          className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors group"
        >
          <span>SCROLL</span>
          <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);
