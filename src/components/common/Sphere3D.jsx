import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Database, FileText, Workflow, Building2, Sparkles,
  Cpu, ShoppingCart, ShieldCheck, BarChart3, Webhook, ScanLine, Mail
} from "lucide-react";

const SPHERE_NODES = [
  { id: "sap", label: "SAP / ERP", sub: "Core Sync", icon: Database, color: "#3b82f6", glow: "rgba(59,130,246,0.5)" },
  { id: "ocr", label: "Invoice OCR", sub: "Auto-Parse", icon: FileText, color: "#a855f7", glow: "rgba(168,85,247,0.5)" },
  { id: "engine", label: "Workflow Engine", sub: "Zero-Code", icon: Workflow, color: "#22d3ee", glow: "rgba(34,211,238,0.5)" },
  { id: "crm", label: "Salesforce CRM", sub: "2-Way Pipeline", icon: Building2, color: "#38bdf8", glow: "rgba(56,189,248,0.5)" },
  { id: "db", label: "PostgreSQL", sub: "Encrypted DB", icon: Database, color: "#34d399", glow: "rgba(52,211,153,0.5)" },
  { id: "ai", label: "Arsak Co-Pilot", sub: "Ops Reasoning", icon: Sparkles, color: "#f43f5e", glow: "rgba(244,63,94,0.5)" },
  { id: "cloud", label: "AWS & GCP", sub: "Cloud Scale", icon: Cpu, color: "#fb923c", glow: "rgba(251,146,60,0.5)" },
  { id: "payments", label: "Stripe Gateway", sub: "Auto-Reconcile", icon: ShoppingCart, color: "#a3e635", glow: "rgba(163,230,53,0.5)" },
  { id: "audit", label: "Compliance AI", sub: "SOC2 Audit", icon: ShieldCheck, color: "#e879f9", glow: "rgba(232,121,249,0.5)" },
  { id: "telemetry", label: "Live Telemetry", sub: "Real-Time BI", icon: BarChart3, color: "#38bdf8", glow: "rgba(56,189,248,0.5)" },
  { id: "api", label: "REST / Webhook", sub: "Unified Hub", icon: Webhook, color: "#facc15", glow: "rgba(250,204,21,0.5)" },
  { id: "email", label: "Email Parser", sub: "Inbox Listener", icon: Mail, color: "#c084fc", glow: "rgba(192,132,252,0.5)" },
  { id: "scan", label: "Doc Contract AI", sub: "Key Extraction", icon: ScanLine, color: "#2dd4bf", glow: "rgba(45,212,191,0.5)" },
];

export const Sphere3D = ({ radius = 175 }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0.2, y: 0.3 });
  const [activeNode, setActiveNode] = useState(null);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0.002, y: 0.003 });
  const animFrame = useRef(null);

  // Fibonacci sphere point distribution
  const initialPoints = useMemo(() => {
    const n = SPHERE_NODES.length;
    const phi = Math.PI * (3 - Math.sqrt(5));
    return SPHERE_NODES.map((node, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const radAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radAtY;
      const z = Math.sin(theta) * radAtY;
      return { ...node, origX: x, origY: y, origZ: z };
    });
  }, []);

  useEffect(() => {
    const loop = () => {
      if (!isDragging.current) {
        velocity.current.x *= 0.96;
        velocity.current.y *= 0.96;

        const baseAutoSpin = 0.0025;
        setRotation((prev) => ({
          x: prev.x + velocity.current.x,
          y: prev.y + velocity.current.y + baseAutoSpin,
        }));
      }
      animFrame.current = requestAnimationFrame(loop);
    };

    animFrame.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrame.current);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastMouse.current.x;
    const deltaY = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };

    const sensitivity = 0.006;
    velocity.current = { x: -deltaY * sensitivity, y: deltaX * sensitivity };

    setRotation((prev) => ({
      x: prev.x - deltaY * sensitivity,
      y: prev.y + deltaX * sensitivity,
    }));
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const nodes3D = useMemo(() => {
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);

    return initialPoints.map((p) => {
      const x1 = p.origX * cosY + p.origZ * sinY;
      const y1 = p.origY;
      const z1 = -p.origX * sinY + p.origZ * cosY;

      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      const depth = (z2 + 1) / 2;
      const scale = 0.65 + depth * 0.55;
      const opacity = 0.25 + depth * 0.75;
      const screenX = x2 * radius;
      const screenY = y2 * radius;

      return {
        ...p,
        screenX,
        screenY,
        z: z2,
        scale,
        opacity,
        zIndex: Math.round(depth * 100),
      };
    });
  }, [initialPoints, rotation, radius]);

  return (
    <div className="relative w-full aspect-square max-w-[440px] lg:max-w-[500px] mx-auto flex items-center justify-center select-none">
      <div
        className="absolute inset-4 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #fb923c 0%, #ec4899 40%, #8b5cf6 70%, transparent 80%)" }}
      />
      <div className="absolute inset-6 rounded-full border border-zinc-800/60 pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute inset-16 rounded-full border border-dashed border-zinc-800/40 pointer-events-none opacity-30" />

      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
      >
        {nodes3D.map((node) => {
          const isSelected = activeNode === node.id;
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveNode(isSelected ? null : node.id);
              }}
              className="absolute transition-transform duration-75"
              style={{
                transform: `translate3d(${node.screenX}px, ${node.screenY}px, 0) scale(${node.scale})`,
                zIndex: node.zIndex + (isSelected ? 200 : 0),
                opacity: isSelected ? 1 : node.opacity,
              }}
            >
              <div
                className={`relative flex items-center gap-2.5 px-3 py-2 rounded-xl border backdrop-blur-md transition-all duration-200 ${
                  node.z > 0.1
                    ? "bg-zinc-950/90 border-zinc-700/80 shadow-lg shadow-black/60 hover:border-white hover:scale-105"
                    : "bg-zinc-950/50 border-zinc-800/40 pointer-events-none"
                }`}
                style={{
                  boxShadow: node.z > 0.3 ? `0 0 18px ${node.glow}` : undefined,
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${node.color}15`,
                    borderColor: `${node.color}40`,
                    color: node.color,
                  }}
                >
                  <Icon size={14} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-white tracking-tight leading-tight whitespace-nowrap">
                    {node.label}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                    {node.sub}
                  </span>
                </div>

                {node.z > 0.5 && (
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

      <div className="absolute -bottom-2 sm:bottom-4 right-2 sm:right-6 pointer-events-none z-30">
        <div className="flex items-center gap-2 bg-white text-black font-bold text-xs font-mono px-3.5 py-1.5 rounded-full shadow-2xl shadow-purple-500/20 border border-zinc-200 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          DRAG SPHERE
        </div>
      </div>
    </div>
  );
};
