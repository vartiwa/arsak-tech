import React from "react";

export const InteractiveCard = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`relative group rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 overflow-hidden flex flex-col bg-white border border-[rgba(22,20,14,0.11)] shadow-[0_8px_24px_-6px_rgba(22,20,14,0.07),0_2px_6px_rgba(22,20,14,0.03)] hover:shadow-[0_24px_50px_-10px_rgba(22,20,14,0.14),0_6px_16px_rgba(22,20,14,0.06)] hover:border-[rgba(22,20,14,0.25)] before:absolute before:inset-x-0 before:-bottom-3 before:h-3 before:content-[''] ${className}`}
      {...props}
    >
      {/* 1. Top Specular Glaze Sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent z-20" />

      {/* 2. Bottom 3D Physical Shelf Base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3.5px] bg-gradient-to-r from-[#E5DFD1] via-[#D8D1C1] to-[#E5DFD1] border-t border-[#D0C8B7] z-20 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />

      {/* 3. Outer Inner Specular Rim */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(22,20,14,0.04)] z-20" />

      {/* 4. Card Content */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
