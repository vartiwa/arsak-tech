import React from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

export const SectionHeading = ({ eyebrow, accent = "blue", title, sub, center = false }) => (
  <Reveal className={center ? "text-center max-w-xl mx-auto" : "max-w-xl"}>
    {eyebrow && (
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      </div>
    )}
    <h2
      className="text-2xl md:text-3xl font-semibold text-white leading-[1.2] tracking-tight"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {title}
    </h2>
    {sub && <p className="mt-3 text-zinc-400 text-sm md:text-base leading-relaxed">{sub}</p>}
  </Reveal>
);
