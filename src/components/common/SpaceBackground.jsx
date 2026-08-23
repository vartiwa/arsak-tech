import React from "react";

export const SpaceBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
    {/* Deep Midnight Ink Ground (#050711 from pleurat.com) */}
    <div className="absolute inset-0 bg-[#050711]" />

    {/* Subtle Architectural Dot Grid */}
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: "radial-gradient(#EFEDE2 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Soft Electric Lime Ambient Glow on Top Horizon */}
    <div
      className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[480px] rounded-full opacity-[0.08] blur-[150px]"
      style={{
        background: "radial-gradient(ellipse at center, #C0EB3A 0%, rgba(192, 235, 58, 0.2) 40%, transparent 80%)",
      }}
    />

    {/* Subtle Hairline Dividing Horizon */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(239,237,226,0.15)] to-transparent" />
  </div>
);
