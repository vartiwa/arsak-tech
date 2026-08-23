import React, { useRef, useState } from "react";

export const InteractiveCard = ({
  children,
  className = "",
  accentColor = "rgba(192, 235, 58, 0.15)",
  ...props
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 overflow-hidden flex flex-col ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #151815 0%, #0E100F 50%, #080A09 100%)",
        boxShadow:
          "0 18px 45px -10px rgba(0, 0, 0, 0.9), 0 4px 12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(239, 237, 226, 0.12), inset 0 -3px 0 rgba(0, 0, 0, 0.9), inset 1px 0 0 rgba(239, 237, 226, 0.03), inset -1px 0 0 rgba(239, 237, 226, 0.03)",
      }}
      {...props}
    >
      {/* 1. Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 -z-0"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}, transparent 80%)`,
        }}
      />

      {/* 2. Top Specular Bezel Horizon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[rgba(239,237,226,0.20)] to-transparent z-20 group-hover:via-[#C0EB3A]/40 transition-all duration-300" />

      {/* 3. Physical Outer Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[rgba(239,237,226,0.12)] group-hover:border-[rgba(192,235,58,0.4)] transition-colors z-20 shadow-sm" />

      {/* 4. Bottom 3D Physical Shelf Lip (Sketched Double Base) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#080A09] via-[rgba(239,237,226,0.1)] to-[#080A09] border-t border-black/90 z-20" />

      {/* 5. Card Content Surface */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
