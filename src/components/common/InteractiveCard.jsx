import React, { useRef, useState } from "react";

export const InteractiveCard = ({
  children,
  className = "",
  accentColor = "rgba(192, 235, 58, 0.2)",
  ...props
}) => {
  return (
    <div
      className={`relative group rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 overflow-hidden flex flex-col bg-white border border-[rgba(15,21,36,0.08)] shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.04)] hover:border-[rgba(15,21,36,0.18)] ${className}`}
      {...props}
    >
      {/* Top Specular Bezel Horizon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent z-20" />

      {/* Bottom 3D Physical Shelf Lip (Sketched Double Base) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#ECEFF5] via-slate-200 to-[#ECEFF5] border-t border-slate-200/80 z-20" />

      {/* Card Content Surface */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
