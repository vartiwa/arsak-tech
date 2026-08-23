import React, { useRef, useState } from "react";

export const InteractiveCard = ({
  children,
  className = "",
  accentColor = "rgba(192, 235, 58, 0.2)",
  ...props
}) => {
  return (
    <div
      className={`relative group rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 overflow-hidden flex flex-col bg-white border border-[rgba(22,20,14,0.09)] shadow-[0_4px_20px_-4px_rgba(22,20,14,0.05),0_1px_3px_rgba(22,20,14,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(22,20,14,0.10),0_2px_8px_rgba(22,20,14,0.04)] hover:border-[rgba(22,20,14,0.20)] ${className}`}
      {...props}
    >
      {/* Top Specular Bezel Horizon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent z-20" />

      {/* Bottom 3D Physical Shelf Lip (Sketched Double Base in Warm Linen) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#EAE5D9] via-[#E2DDD0] to-[#EAE5D9] border-t border-[#DFD9CB] z-20" />

      {/* Card Content Surface */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
