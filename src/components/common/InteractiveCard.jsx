import React, { useRef, useState } from "react";

export const InteractiveCard = ({
  children,
  className = "",
  accentColor = "rgba(56, 189, 248, 0.14)", // Subtle Cyan/Blue default
  hoverBorder = "rgba(148, 163, 184, 0.4)",
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
      className={`relative group rounded-2xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(175deg, rgba(22, 32, 53, 0.94) 0%, rgba(13, 19, 32, 0.97) 42%, rgba(7, 10, 18, 0.99) 100%)",
        boxShadow:
          "0 16px 40px -10px rgba(0, 0, 0, 0.85), 0 4px 10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.14), inset 0 -1px 0 rgba(0, 0, 0, 0.8), inset 1px 0 0 rgba(255, 255, 255, 0.04), inset -1px 0 0 rgba(255, 255, 255, 0.04)",
      }}
      {...props}
    >
      {/* 1. Dynamic Mouse-Follow Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 -z-0"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}, transparent 80%)`,
        }}
      />

      {/* 2. Top Specular Bezel Horizon Reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-20 group-hover:via-cyan-300/40 transition-all duration-300" />

      {/* 3. Physical Outer Chamfered Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-700/60 group-hover:border-slate-500/80 transition-colors z-20 shadow-sm" />

      {/* 4. Real Card Content Surface */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
