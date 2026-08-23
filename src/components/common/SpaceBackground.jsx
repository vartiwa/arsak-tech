import React from "react";

export const SpaceBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
    {/* Editorial Off-White Paper Canvas */}
    <div className="absolute inset-0 bg-[#F6F7F9]" />

    {/* Subtle Architectural Dot Matrix Grid */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Soft Luminescent Ambient Glow */}
    <div
      className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.25] blur-[140px]"
      style={{
        background: "radial-gradient(ellipse at center, #E2F79A 0%, rgba(192, 235, 58, 0.15) 50%, transparent 80%)",
      }}
    />

    {/* Clean Top Horizon Border */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(15,21,36,0.12)] to-transparent" />
  </div>
);
