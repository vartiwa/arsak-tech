import React from "react";

export const SpaceBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
    {/* Warm Linen Beige Canvas */}
    <div className="absolute inset-0 bg-[#FBF9F4]" />

    {/* Subtle Architectural Dot Matrix Grid in Warm Taupe */}
    <div
      className="absolute inset-0 opacity-[0.38]"
      style={{
        backgroundImage: "radial-gradient(#C8C1B4 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Soft Golden Amber-Beige Ambient Glow */}
    <div
      className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.22] blur-[140px]"
      style={{
        background: "radial-gradient(ellipse at center, #E8E0CE 0%, rgba(243, 180, 74, 0.15) 45%, transparent 80%)",
      }}
    />

    {/* Clean Top Horizon Border in Warm Taupe */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(22,20,14,0.12)] to-transparent" />
  </div>
);
