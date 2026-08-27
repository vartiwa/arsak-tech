import React from "react";
import { Reveal } from "../common/Reveal";
import { InteractiveCard } from "../common/InteractiveCard";
import { Target, Compass } from "lucide-react";

export const AboutSection = () => (
  <section id="about" className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
      <Reveal className="lg:col-span-5">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0C09] leading-[1.2] tracking-tight font-['Space_Grotesk']"
        >
          We Build Websites That Help Businesses Grow.
        </h2>
        <p className="mt-4 text-[#4A453A] text-sm md:text-base leading-relaxed font-medium">
          Arsak Technologies helps growing companies build modern websites and helpful digital tools that look professional, attract customers, and make daily work easy.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="lg:col-span-7">
        <div className="grid sm:grid-cols-2 gap-6">
          <InteractiveCard className="h-full">
            <div className="p-4 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm">
                <Compass size={18} />
              </div>
              <span className="text-xs font-mono text-indigo-700 font-bold">Our Vision</span>
            </div>
            <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-between">
              <p className="text-[#4A453A] text-sm leading-relaxed font-medium">
                Make high-quality, ultra-fast websites and helpful digital tools simple, transparent, and affordable for every business.
              </p>
              <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.11)] text-xs font-mono text-[#059669] font-bold">
                Clear & Honest Work
              </div>
            </div>
          </InteractiveCard>

          <InteractiveCard className="h-full">
            <div className="p-4 bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-blue-200 bg-blue-50 text-blue-700 shadow-sm">
                <Target size={18} />
              </div>
              <span className="text-xs font-mono text-blue-700 font-bold">Our Mission</span>
            </div>
            <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-between">
              <p className="text-[#4A453A] text-sm leading-relaxed font-medium">
                Deliver clean websites that work flawlessly, load instantly on mobile, and bring you real customer inquiries every month.
              </p>
              <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.11)] text-xs font-mono text-[#059669] font-bold">
                Fast & Reliable
              </div>
            </div>
          </InteractiveCard>
        </div>
      </Reveal>
    </div>
  </section>
);
