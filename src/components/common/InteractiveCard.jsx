import React from "react";

export const InteractiveCard = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`relative group rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-2 overflow-hidden flex flex-col bg-white border border-[rgba(22,20,14,0.11)] shadow-[0_14px_34px_-8px_rgba(22,20,14,0.12),0_4px_12px_rgba(22,20,14,0.05),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_65px_-12px_rgba(22,20,14,0.20),0_10px_24px_rgba(22,20,14,0.08)] hover:border-[rgba(22,20,14,0.25)] before:absolute before:inset-x-0 before:-bottom-3 before:h-3 before:content-[''] ${className}`}
      {...props}
    >
      {/* 1. Top Specular Glaze Sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/95 to-transparent z-20" />

      {/* 2. Bottom 3D Physical Shelf Base with Depth Shadow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3.5px] bg-gradient-to-r from-[#DFD7C7] via-[#D0C7B4] to-[#DFD7C7] border-t border-[#C5BCAB] z-20 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_rgba(22,20,14,0.06)]" />

      {/* 3. Outer Inner Specular Rim */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),inset_0_-1px_1.5px_rgba(22,20,14,0.05)] z-20" />

      {/* 4. Card Content */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
