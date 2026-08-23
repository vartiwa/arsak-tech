import React from "react";
import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, sub, center = false, accent = "lime" }) => (
  <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
    {eyebrow && (
      <Reveal>
        <span
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.14em] uppercase text-[#0F1524] border border-[rgba(15,21,36,0.12)] bg-[#EAF7B8] px-3.5 py-1 rounded-full mb-4 font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10160A]" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.04}>
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1524] tracking-tight leading-[1.18]"
        style={{ letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.08}>
        <p className="mt-3.5 text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);
