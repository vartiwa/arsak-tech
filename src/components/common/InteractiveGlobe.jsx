import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Database, FileText, Workflow, Building2, Sparkles,
  Cpu, ShoppingCart, ShieldCheck, BarChart3, Webhook, ScanLine, Mail
} from "lucide-react";

const GLOBE_CARDS = [
  { id: "sap", title: "SAP S/4HANA", tag: "ERP Integration", metric: "Live 2-Way Sync", icon: Database, color: "#3b82f6", bgGrad: "from-blue-600/30 to-blue-900/10", border: "border-blue-500/40" },
  { id: "ocr", title: "Invoice #2048.pdf", tag: "AI Document OCR", metric: "99.8% Extracted", icon: FileText, color: "#a855f7", bgGrad: "from-purple-600/30 to-purple-900/10", border: "border-purple-500/40" },
  { id: "engine", title: "Workflow Engine", tag: "Orchestration", metric: "0.2s Execution", icon: Workflow, color: "#22d3ee", bgGrad: "from-cyan-600/30 to-cyan-900/10", border: "border-cyan-500/40" },
  { id: "crm", title: "Salesforce CRM", tag: "Lead Pipeline", metric: "Auto-Enriched", icon: Building2, color: "#38bdf8", bgGrad: "from-sky-600/30 to-sky-900/10", border: "border-sky-500/40" },
  { id: "ai", title: "Arsak AI Co-Pilot", tag: "Operations AI", metric: "Autonomous Fix", icon: Sparkles, color: "#fb923c", bgGrad: "from-orange-600/30 to-orange-900/10", border: "border-orange-500/40" },
  { id: "db", title: "PostgreSQL Data", tag: "Encrypted DB", metric: "10k writes/sec", icon: Database, color: "#a3e635", bgGrad: "from-lime-600/30 to-lime-900/10", border: "border-lime-500/40" },
  { id: "cloud", title: "AWS & GCP Cloud", tag: "Infrastructure", metric: "99.99% Uptime", icon: Cpu, color: "#3b82f6", bgGrad: "from-blue-600/30 to-blue-900/10", border: "border-blue-500/40" },
  { id: "payments", title: "Stripe Billing", tag: "Reconciliation", metric: "Auto-Matched", icon: ShoppingCart, color: "#a3e635", bgGrad: "from-lime-600/30 to-lime-900/10", border: "border-lime-500/40" },
  { id: "audit", title: "Compliance Shield", tag: "SOC2 Audit Trail", metric: "100% Compliant", icon: ShieldCheck, color: "#e879f9", bgGrad: "from-fuchsia-600/30 to-fuchsia-900/10", border: "border-fuchsia-500/40" },
  { id: "telemetry", title: "Live Operations BI", tag: "Real-time Telemetry", metric: "-42% Cycle Time", icon: BarChart3, color: "#22d3ee", bgGrad: "from-cyan-600/30 to-cyan-900/10", border: "border-cyan-500/40" },
  { id: "api", title: "REST & Webhooks", tag: "API Integration", metric: "Bi-directional", icon: Webhook, color: "#fb923c", bgGrad: "from-orange-600/30 to-orange-900/10", border: "border-orange-500/40" },
  { id: "contract", title: "Contract Parser AI", tag: "Legal AI Extraction", metric: "Verified Clauses", icon: ScanLine, color: "#a855f7", bgGrad: "from-purple-600/30 to-purple-900/10", border: "border-purple-500/40" },
  { id: "email", title: "Inbound Email AI", tag: "Parser & Routing", metric: "Zero Latency", icon: Mail, color: "#38bdf8", bgGrad: "from-sky-600/30 to-sky-900/10", border: "border-sky-500/40" },
];

export const InteractiveGlobe = ({ radius = 175 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0.15, y: 0.4 });
  const [activeCard, setActiveCard] = useState(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0.001, y: 0.003 });
  const animFrame = useRef(null);

  const initialCards = useMemo(() => {
    const n = GLOBE_CARDS.length;
    const phi = Math.PI * (3 - Math.sqrt(5));
    return GLOBE_CARDS.map((card, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      return { ...card, origX: x, origY: y, origZ: z };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = 460);
    const height = (canvas.height = 460);
    const cx = width / 2;
    const cy = height / 2;
    const r = radius * 0.96;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const sphereGrad = ctx.createRadialGradient(
        cx - r * 0.35,
        cy - r * 0.35,
        r * 0.1,
        cx,
        cy,
        r
      );
      sphereGrad.addColorStop(0, "#1c1c28");
      sphereGrad.addColorStop(0.5, "#0e0e16");
      sphereGrad.addColorStop(0.85, "#06060a");
      sphereGrad.addColorStop(1, "#020204");

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(168, 85, 247, 0.4)";
      ctx.stroke();

      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(59, 130, 246, 0.18)";

      for (let lat = -60; lat <= 60; lat += 30) {
        const radLat = (lat * Math.PI) / 180;
        const ringR = r * Math.cos(radLat);
        const ringY = r * Math.sin(radLat);

        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= 360; lon += 12) {
          const radLon = (lon * Math.PI) / 180;
          let px = ringR * Math.cos(radLon);
          let py = ringY;
          let pz = ringR * Math.sin(radLon);

          let x1 = px * cosY + pz * sinY;
          let y1 = py;
          let z1 = -px * sinY + pz * cosY;

          let x2 = x1;
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;

          if (z2 > -r * 0.2) {
            const screenX = cx + x2;
            const screenY = cy + y2;
            if (first) {
              ctx.moveTo(screenX, screenY);
              first = false;
            } else {
              ctx.lineTo(screenX, screenY);
            }
          }
        }
        ctx.stroke();
      }

      for (let lon = 0; lon < 180; lon += 45) {
        const radLon = (lon * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 10) {
          const radLat = (lat * Math.PI) / 180;
          let px = r * Math.cos(radLat) * Math.cos(radLon);
          let py = r * Math.sin(radLat);
          let pz = r * Math.cos(radLat) * Math.sin(radLon);

          let x1 = px * cosY + pz * sinY;
          let y1 = py;
          let z1 = -px * sinY + pz * cosY;

          let x2 = x1;
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;

          if (z2 > -r * 0.2) {
            const screenX = cx + x2;
            const screenY = cy + y2;
            if (first) {
              ctx.moveTo(screenX, screenY);
              first = false;
            } else {
              ctx.lineTo(screenX, screenY);
            }
          }
        }
        ctx.stroke();
      }

      ctx.lineWidth = 1.5;
      for (let i = 0; i < initialCards.length; i += 2) {
        const pA = initialCards[i];
        const pB = initialCards[(i + 1) % initialCards.length];

        const rotA = rotate3D(pA.origX * r, pA.origY * r, pA.origZ * r, cosX, sinX, cosY, sinY);
        const rotB = rotate3D(pB.origX * r, pB.origY * r, pB.origZ * r, cosX, sinX, cosY, sinY);

        if (rotA.z > 0 && rotB.z > 0) {
          ctx.strokeStyle = "rgba(34, 211, 238, 0.4)";
          ctx.beginPath();
          ctx.moveTo(cx + rotA.x, cy + rotA.y);
          const midX = (rotA.x + rotB.x) * 0.55;
          const midY = (rotA.y + rotB.y) * 0.55;
          ctx.quadraticCurveTo(cx + midX * 1.15, cy + midY * 1.15, cx + rotB.x, cy + rotB.y);
          ctx.stroke();
        }
      }
    };

    render();
  }, [rotation, radius, initialCards]);

  const rotate3D = (x, y, z, cosX, sinX, cosY, sinY) => {
    let x1 = x * cosY + z * sinY;
    let y1 = y;
    let z1 = -x * sinY + z * cosY;
    let x2 = x1;
    let y2 = y1 * cosX - z1 * sinX;
    let z2 = y1 * sinX + z1 * cosX;
    return { x: x2, y: y2, z: z2 };
  };

  useEffect(() => {
    const loop = () => {
      if (!isDragging.current) {
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
        const autoSpin = 0.0028;
        setRotation((prev) => ({
          x: prev.x + velocity.current.x,
          y: prev.y + velocity.current.y + autoSpin,
        }));
      }
      animFrame.current = requestAnimationFrame(loop);
    };
    animFrame.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame.current);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastPos.current.x;
    const deltaY = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    const sensitivity = 0.0055;
    velocity.current = { x: -deltaY * sensitivity, y: deltaX * sensitivity };
    setRotation((prev) => ({
      x: prev.x - deltaY * sensitivity,
      y: prev.y + deltaX * sensitivity,
    }));
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const cards3D = useMemo(() => {
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);

    return initialCards.map((card) => {
      const x1 = card.origX * cosY + card.origZ * sinY;
      const y1 = card.origY;
      const z1 = -card.origX * sinY + card.origZ * cosY;

      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const depth = (z2 + 1) / 2;
      const scale = 0.7 + depth * 0.45;
      const opacity = depth > 0.4 ? 0.35 + depth * 0.65 : 0.15 + depth * 0.3;
      const screenX = x2 * (radius * 1.05);
      const screenY = y2 * (radius * 1.05);

      return {
        ...card,
        screenX,
        screenY,
        z: z2,
        scale,
        opacity,
        zIndex: Math.round(depth * 100),
      };
    });
  }, [initialCards, rotation, radius]);

  return (
    <div className="relative w-full aspect-square max-w-[440px] lg:max-w-[500px] mx-auto flex items-center justify-center select-none">
      <div
        className="absolute inset-2 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,146,60,0.4) 0%, rgba(236,72,153,0.3) 40%, rgba(59,130,246,0.3) 70%, transparent 85%)"
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none rounded-full shadow-2xl shadow-purple-950/40"
      />
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none z-10"
      >
        {cards3D.map((node) => {
          const isSelected = activeCard === node.id;
          const Icon = node.icon;
          const isFront = node.z > 0;

          return (
            <div
              key={node.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveCard(isSelected ? null : node.id);
              }}
              className="absolute transition-transform duration-75"
              style={{
                transform: `translate3d(${node.screenX}px, ${node.screenY}px, 0) scale(${node.scale})`,
                zIndex: node.zIndex + (isSelected ? 300 : 0),
                opacity: isSelected ? 1 : node.opacity,
              }}
            >
              <div
                className={`relative flex items-center gap-2.5 px-3 py-2 rounded-xl border backdrop-blur-md transition-all duration-200 ${
                  isFront
                    ? `bg-gradient-to-br ${node.bgGrad} bg-zinc-950/90 ${node.border} shadow-xl shadow-black/80 hover:border-white hover:scale-105`
                    : "bg-zinc-950/40 border-zinc-800/30 pointer-events-none"
                }`}
                style={{
                  boxShadow: isFront && node.z > 0.3 ? `0 0 20px ${node.color}40, inset 0 0 12px ${node.color}15` : undefined,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${node.color}20`,
                    borderColor: `${node.color}50`,
                    color: node.color,
                  }}
                >
                  <Icon size={15} />
                </div>
                <div className="flex flex-col text-left pr-1">
                  <span className="text-xs font-bold text-white tracking-tight leading-tight whitespace-nowrap">
                    {node.title}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[9px] font-mono text-zinc-400 whitespace-nowrap">{node.tag}</span>
                    <span className="text-[9px] font-mono font-medium text-emerald-400 whitespace-nowrap">• {node.metric}</span>
                  </div>
                </div>
                {isFront && node.z > 0.4 && (
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-ping shrink-0"
                    style={{ backgroundColor: node.color }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-4 pointer-events-none z-30">
        <div className="flex items-center gap-2 bg-white text-black font-extrabold text-xs font-mono px-4 py-2 rounded-full shadow-2xl shadow-purple-500/30 border border-zinc-200 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          DRAG GLOBE
        </div>
      </div>
    </div>
  );
};
