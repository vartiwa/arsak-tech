import React from "react";

export const ScrollFlowStream = () => {
  // Static Section Connection Nodes along the path
  const nodes = [
    { x: 1060, y: 280, color: "#BCEB28" },
    { x: 260, y: 720, color: "#059669" },
    { x: 440, y: 1340, color: "#2563EB" },
    { x: 1220, y: 1880, color: "#7C3AED" },
    { x: 240, y: 2520, color: "#D97706" },
  ];

  // Architectural S-Curve Spline from User Sketch
  const mainSpline = "M 1060 280 C 900 420, 520 520, 260 720 C 0 920, 120 1200, 440 1340 C 840 1480, 1340 1540, 1220 1880 C 1100 2220, 420 2280, 240 2520 C 60 2740, 360 2940, 720 3200";
  const upperEcho = "M 1074 286 C 914 426, 534 526, 274 726 C 14 926, 134 1206, 454 1346 C 854 1486, 1354 1546, 1234 1886 C 1114 2226, 434 2286, 254 2526 C 74 2746, 374 2946, 734 3206";
  const lowerEcho = "M 1046 274 C 886 414, 506 514, 246 714 C -14 914, 106 1194, 426 1334 C 826 1474, 1326 1534, 1206 1874 C 1086 2214, 406 2274, 226 2514 C 46 2734, 346 2934, 706 3194";

  return (
    <div
      className="absolute top-0 inset-x-0 h-[3300px] pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 3300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-80"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Static High-Contrast Color Gradient */}
          <linearGradient id="staticStreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BCEB28" stopOpacity="0.9" />
            <stop offset="22%" stopColor="#059669" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.75" />
            <stop offset="78%" stopColor="#7C3AED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.65" />
          </linearGradient>

          {/* Guide Track Gradient */}
          <linearGradient id="staticTrackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BCEB28" stopOpacity="0.4" />
            <stop offset="35%" stopColor="rgba(22, 20, 14, 0.14)" />
            <stop offset="70%" stopColor="rgba(22, 20, 14, 0.10)" />
            <stop offset="100%" stopColor="rgba(22, 20, 14, 0.06)" />
          </linearGradient>
        </defs>

        {/* 1. Base Blueprint Bus Lines */}
        <path
          d={upperEcho}
          stroke="rgba(22, 20, 14, 0.05)"
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={mainSpline}
          stroke="url(#staticTrackGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={lowerEcho}
          stroke="rgba(22, 20, 14, 0.05)"
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* 2. Primary Static Laser Spline */}
        <path
          d={mainSpline}
          stroke="url(#staticStreamGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* 3. Upper Parallel Accent Echo Line */}
        <path
          d={upperEcho}
          stroke="#BCEB28"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
          vectorEffect="non-scaling-stroke"
        />

        {/* 4. Static Milestone Connection Beads */}
        {nodes.map((node, i) => (
          <g key={i} transform={`translate(${node.x}, ${node.y})`}>
            {/* Outer Subtle Dashed Ring */}
            <circle
              r="10"
              fill="none"
              stroke={node.color}
              strokeWidth="1"
              strokeDasharray="2 3"
              opacity="0.4"
            />
            {/* Center Core Bead */}
            <circle
              r="3.5"
              fill="#FFFFFF"
              stroke={node.color}
              strokeWidth="2"
              className="shadow-sm"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
