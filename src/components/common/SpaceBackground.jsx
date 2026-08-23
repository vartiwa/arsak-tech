import React from "react";

export const SpaceBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
    {/* Pure Pleurat Warm Carbon Canvas (#0B0D0C) */}
    <div className="absolute inset-0 bg-[#0B0D0C]" />

    {/* Subtle Architectural Dot Grid in Warm Bone */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(#EFEDE2 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Soft Electric Lime Ambient Glow on Horizon */}
    <div
      className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full opacity-[0.07] blur-[160px]"
      style={{
        background: "radial-gradient(ellipse at center, #C0EB3A 0%, rgba(192, 235, 58, 0.15) 50%, transparent 80%)",
      }}
    />

    {/* Clean Warm Bone Dividing Horizon */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(239,237,226,0.12)] to-transparent" />
  </div>
);
