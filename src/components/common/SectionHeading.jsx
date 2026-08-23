import React from "react";
import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, sub, center = false, accent = "lime" }) => (
  <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
    {eyebrow && (
      <Reveal>
        <span
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.16em] uppercase text-[#C0EB3A] border border-[#C0EB3A]/25 bg-[#C0EB3A]/10 px-3.5 py-1 rounded-full mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0EB3A] animate-pulse" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.04}>
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#EFEDE2] tracking-tight leading-[1.18]"
        style={{ letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.08}>
        <p className="mt-3.5 text-[#B7B5AA] text-sm sm:text-base leading-relaxed max-w-2xl">
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);
