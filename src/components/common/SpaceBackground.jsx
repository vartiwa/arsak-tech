import React, { useMemo } from "react";

export const SpaceBackground = () => {
  const stars = useMemo(() => {
    const list = [];
    for (let i = 0; i < 75; i++) {
      const top = ((i * 17.3 + 5.7) % 100).toFixed(2);
      const left = ((i * 29.1 + 11.3) % 100).toFixed(2);
      const size = (0.75 + ((i * 7) % 6) * 0.15).toFixed(2);
      const opacity = (0.15 + ((i * 13) % 40) * 0.01).toFixed(2);
      const duration = (4 + (i % 5) * 1.5).toFixed(1);
      const delay = ((i % 7) * 0.8).toFixed(1);
      list.push({ id: i, top, left, size, opacity, duration, delay });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Deep Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#060911]" />

      {/* Subtle Deep Space Ambient Nebula (Ultra-subtle dark indigo) */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 80%)",
        }}
      />
      <div
        className="absolute top-[40%] -right-[10%] w-[55vw] h-[55vw] rounded-full opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.6) 70%, transparent 80%)",
        }}
      />

      {/* Subtle Faint Planetary Orbit Curves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="85%" cy="18%" rx="420" ry="160" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 8" transform="rotate(-15, 1200, 200)" />
        <ellipse cx="15%" cy="52%" rx="480" ry="180" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="5 10" transform="rotate(20, 200, 600)" />
      </svg>

      {/* Subtle Micro Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-slate-300"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `subtleTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes subtleTwinkle {
          0% { opacity: 0.10; }
          50% { opacity: 0.45; }
          100% { opacity: 0.18; }
        }
      `}</style>
    </div>
  );
};
