import React from "react";

export const SpaceBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
    {/* Editorial Warm Linen Canvas */}
    <div className="absolute inset-0 bg-[#FAF7F0]" />

    {/* Subtle Architectural Dot Matrix Grid */}
    <div
      className="absolute inset-0 opacity-[0.42]"
      style={{
        backgroundImage: "radial-gradient(#C4BDAF 1.2px, transparent 1.2px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Soft Golden Horizon Glow */}
    <div
      className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.24] blur-[140px]"
      style={{
        background: "radial-gradient(ellipse at center, #EAE2D0 0%, rgba(217, 119, 6, 0.12) 45%, transparent 80%)",
      }}
    />

    {/* Crisp Horizon Line */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(22,20,14,0.12)] to-transparent" />
  </div>
);
