import React from "react";

export const ScrollFlowStream = () => {
  // Static Section Connection Nodes along the complete path down to the footer
  const nodes = [
    { x: 1060, y: 280, color: "#BCEB28" },
    { x: 260, y: 720, color: "#059669" },
    { x: 440, y: 1340, color: "#2563EB" },
    { x: 1220, y: 1880, color: "#7C3AED" },
    { x: 240, y: 2520, color: "#D97706" },
    { x: 720, y: 3180, color: "#059669" },
    { x: 1200, y: 3820, color: "#2563EB" },
    { x: 280, y: 4460, color: "#7C3AED" },
    { x: 1160, y: 5100, color: "#BCEB28" },
    { x: 320, y: 5740, color: "#059669" },
    { x: 1140, y: 6380, color: "#2563EB" },
    { x: 260, y: 7020, color: "#7C3AED" },
    { x: 720, y: 7650, color: "#BCEB28" },
  ];

  // Full-Length Architectural S-Curve Spline flowing seamlessly down to the end
  const mainSpline = "M 1060 280 C 900 420, 520 520, 260 720 C 0 920, 120 1200, 440 1340 C 840 1480, 1340 1540, 1220 1880 C 1100 2220, 420 2280, 240 2520 C 60 2740, 420 2980, 720 3180 C 1020 3380, 1380 3600, 1200 3820 C 1020 4040, 100 4240, 280 4460 C 460 4680, 1340 4880, 1160 5100 C 980 5320, 140 5520, 320 5740 C 500 5960, 1320 6160, 1140 6380 C 960 6600, 80 6800, 260 7020 C 440 7240, 540 7450, 720 7650";
  const upperEcho = "M 1074 286 C 914 426, 534 526, 274 726 C 14 926, 134 1206, 454 1346 C 854 1486, 1354 1546, 1234 1886 C 1114 2226, 434 2286, 254 2526 C 74 2746, 434 2986, 734 3186 C 1034 3386, 1394 3606, 1214 3826 C 1034 4046, 114 4246, 294 4466 C 474 4686, 1354 4886, 1174 5106 C 994 5326, 154 5526, 334 5746 C 514 5966, 1334 6166, 1154 6386 C 974 6606, 94 6806, 274 7026 C 454 7246, 554 7456, 734 7656";
  const lowerEcho = "M 1046 274 C 886 414, 506 514, 246 714 C -14 914, 106 1194, 426 1334 C 826 1474, 1326 1534, 1206 1874 C 1086 2214, 406 2274, 226 2514 C 46 2734, 406 2974, 706 3174 C 1006 3374, 1366 3594, 1186 3814 C 1006 4034, 86 4234, 266 4454 C 446 4674, 1326 4874, 1146 5094 C 966 5314, 126 5514, 306 5734 C 486 5954, 1306 6154, 1126 6374 C 946 6594, 66 6794, 246 7014 C 426 7234, 526 7444, 706 7644";

  return (
    <div
      className="absolute top-0 inset-x-0 h-[7800px] pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 7800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-80"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Static High-Contrast Color Gradient across the entire page */}
          <linearGradient id="staticStreamGradFull" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BCEB28" stopOpacity="0.9" />
            <stop offset="15%" stopColor="#059669" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#7C3AED" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#D97706" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#059669" stopOpacity="0.8" />
            <stop offset="90%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BCEB28" stopOpacity="0.85" />
          </linearGradient>

          {/* Guide Track Gradient */}
          <linearGradient id="staticTrackGradFull" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BCEB28" stopOpacity="0.4" />
            <stop offset="25%" stopColor="rgba(22, 20, 14, 0.14)" />
            <stop offset="50%" stopColor="rgba(22, 20, 14, 0.10)" />
            <stop offset="75%" stopColor="rgba(22, 20, 14, 0.08)" />
            <stop offset="100%" stopColor="rgba(22, 20, 14, 0.05)" />
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
          stroke="url(#staticTrackGradFull)"
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
          stroke="url(#staticStreamGradFull)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* 3. Static Milestone Connection Beads */}
        {nodes.map((node, i) => (
          <g key={i} transform={`translate(${node.x}, ${node.y})`}>
            {/* Outer Target Ring */}
            <circle
              r="8"
              fill="none"
              stroke={node.color}
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.5"
            />
            {/* Solid Core Bead */}
            <circle
              r="3.5"
              fill="#FAF7F0"
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
