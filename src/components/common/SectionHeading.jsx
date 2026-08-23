import React from "react";
import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, sub, center = false }) => (
  <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
    {eyebrow && (
      <Reveal>
        <span
          className="depth-badge inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] uppercase px-3.5 py-1 rounded-full mb-3.5 font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-[#BCEB28] border border-[#0D1204]/20 shadow-sm" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.04}>
      <h2
        className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0D0C09] tracking-[-0.035em] leading-[1.14] font-['Space_Grotesk']"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.08}>
        <p className="mt-3.5 text-[#4A453A] text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);
