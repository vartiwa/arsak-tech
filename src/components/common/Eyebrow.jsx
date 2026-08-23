import React from "react";
import { ACCENT } from "../../data/siteData";

export const Eyebrow = ({ children, accent = "blue" }) => {
  const acc = ACCENT[accent] || ACCENT.blue;
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase mb-3 ${acc.text}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: acc.dot }} />
      {children}
    </div>
  );
};
