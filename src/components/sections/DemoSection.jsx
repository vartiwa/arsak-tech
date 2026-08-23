import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Play, RotateCcw, Sparkles, Terminal, Activity, Server, Zap, ArrowUpRight, Cpu } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const DemoSection = () => {
  const [activeBar, setActiveBar] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pipelineState, setPipelineState] = useState("idle");
  const [activeTab, setActiveTab] = useState("config");

  const bars = [
    { id: 1, color: "#3b82f6", height: "38%", label: "Ingestion", value: "99.4%", latency: "4ms" },
    { id: 2, color: "#06b6d4", height: "62%", label: "OCR Parsing", value: "99.8%", latency: "12ms" },
    { id: 3, color: "#a855f7", height: "30%", label: "Schema Validation", value: "100%", latency: "6ms" },
    { id: 4, color: "#84cc16", height: "84%", label: "Throughput", value: "1.2k/s", latency: "Real-time" },
    { id: 5, color: "#f97316", height: "54%", label: "Dynamic Routing", value: "14ms", latency: "Optimized" },
    { id: 6, color: "#2563eb", height: "96%", label: "ERP Synchronization", value: "99.9%", latency: "Instant" },
    { id: 7, color: "#14b8a6", height: "45%", label: "Telemetry Feed", value: "Active", latency: "Live" },
  ];

  const handleRunPipeline = () => {
    setIsProcessing(true);
    setPipelineState("running");
    setTimeout(() => {
      setIsProcessing(false);
      setPipelineState("completed");
    }, 1100);
  };

  const handleReset = () => {
    setPipelineState("idle");
    setIsProcessing(false);
  };

  return (
    <section id="demo" className="py-16 md:py-24 border-t border-[rgba(239,237,226,0.08)] bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Architecture & Pipeline"
          accent="blue"
          title="Modular, Multi-Box Enterprise Engine."
          sub="Inspect how Arsak orchestrates intelligent data pipelines, validation rules, and autonomous ERP sync."
          center
        />

        {/* Multi-Box Bento Grid Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BOX 1: The Exact Developer Code & Multi-Bar Config Card (Reference Image) */}
          <Reveal className="lg:col-span-7 flex flex-col">
            <InteractiveCard accentColor="rgba(56, 189, 248, 0.15)" className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                {/* Window Header with Tabs */}
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[rgba(239,237,226,0.12)] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-[#B7B5AA]">pipeline.arsak.config</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/90 border border-[rgba(239,237,226,0.1)] p-0.5 rounded-lg">
                    <button
                      onClick={() => setActiveTab("config")}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${activeTab === "config" ? "bg-slate-800 text-[#EFEDE2] font-semibold" : "text-[#B7B5AA] hover:text-slate-200"}`}
                    >
                      Config
                    </button>
                    <button
                      onClick={() => setActiveTab("metrics")}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${activeTab === "metrics" ? "bg-slate-800 text-[#EFEDE2] font-semibold" : "text-[#B7B5AA] hover:text-slate-200"}`}
                    >
                      Metrics
                    </button>
                  </div>
                </div>

                {/* Code Block with Exact Syntax Highlights */}
                <div className="font-mono text-sm sm:text-base leading-relaxed tracking-tight select-none mb-7 bg-slate-950/40 p-4 rounded-xl border border-[rgba(239,237,226,0.08)]">
                  <div className="flex flex-wrap items-center">
                    <span className="text-purple-400 font-medium">const</span>
                    <span className="text-[#EFEDE2] ml-2 font-medium">workflow</span>
                    <span className="text-purple-400 ml-2 font-medium">=</span>
                    <span className="text-cyan-400 ml-2 font-semibold">createPipeline</span>
                    <span className="text-pink-400 font-medium">(</span>
                    <span className="text-pink-300 font-medium">source</span>
                    <span className="text-pink-400 font-medium">)</span>
                  </div>
                  <div className="text-[#B7B5AA] text-xs sm:text-sm my-2 font-normal">
                    // AI Extraction · Validation · Routing
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="text-sky-400 font-medium">deploy</span>
                    <span className="text-[#EFEDE2] font-medium">(</span>
                    <span className="text-[#EFEDE2] font-medium">workflow</span>
                    <span className="text-[#EFEDE2] font-medium">)</span>
                    <span className="text-[#B7B5AA]">.to(</span>
                    <span className="text-lime-400 font-medium">"enterprise-erp"</span>
                    <span className="text-[#B7B5AA]">)</span>
                  </div>
                </div>
              </div>

              {/* Inset Multi-Bar Chart Box with Interactive Hover Depth */}
              <div className="rounded-xl border border-[rgba(239,237,226,0.14)] bg-[#050711] p-5 sm:p-6 mt-auto shadow-inner">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#B7B5AA]">
                  <span className="flex items-center gap-1.5">
                    <Cpu size={13} className="text-cyan-400" /> Pipeline Throughput Telemetry
                  </span>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    Real-time (60 FPS)
                  </span>
                </div>

                <div className="flex items-end justify-between h-24 sm:h-28 gap-2.5 sm:gap-4 px-2 pt-2">
                  {bars.map((bar) => {
                    const isHovered = activeBar === bar.id;
                    return (
                      <div
                        key={bar.id}
                        onMouseEnter={() => setActiveBar(bar.id)}
                        onMouseLeave={() => setActiveBar(null)}
                        className="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer"
                      >
                        {/* Interactive Tooltip on Hover */}
                        {isHovered && (
                          <div className="absolute -top-11 bg-slate-900/95 border border-slate-700 text-[#EFEDE2] text-[11px] font-mono px-2.5 py-1 rounded shadow-xl whitespace-nowrap z-30 pointer-events-none transform -translate-y-1 transition-all">
                            <div className="font-semibold text-cyan-300">{bar.label}</div>
                            <div className="text-[#B7B5AA] text-[10px]">{bar.value} · {bar.latency}</div>
                          </div>
                        )}
                        {/* Bar with Subtle Gradient & Elevation on Hover */}
                        <div
                          className="w-full rounded-t-sm transition-all duration-300 transform-gpu group-hover:scale-y-105 group-hover:brightness-125 shadow-sm"
                          style={{
                            height: bar.height,
                            backgroundColor: bar.color,
                            opacity: activeBar === null || isHovered ? 0.95 : 0.45,
                            boxShadow: isHovered ? `0 0 16px ${bar.color}66` : "none",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-900 text-[11px] font-mono text-[#7D7C72]">
                  <span>INPUT INGESTION</span>
                  <span>ENTERPRISE DISPATCH</span>
                </div>
              </div>
            </InteractiveCard>
          </Reveal>

          {/* BOX 2: Live AI Extraction Payload & Action Box */}
          <Reveal delay={0.06} className="lg:col-span-5 flex flex-col">
            <InteractiveCard accentColor="rgba(168, 85, 247, 0.14)" className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[rgba(239,237,226,0.12)]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B7B5AA]">
                    <Terminal size={14} className="text-cyan-400" />
                    <span>payload.extracted.json</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {pipelineState === "completed" ? "Validated 100%" : "Schema Ready"}
                  </span>
                </div>

                <div className="bg-[#050711] border border-[rgba(239,237,226,0.14)] rounded-xl p-4 font-mono text-xs text-[#B7B5AA] space-y-2.5 shadow-inner">
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-900/60">
                    <span className="text-[#7D7C72]">customer_entity:</span>
                    <span className="text-[#EFEDE2] font-medium">"ABC Industries Ltd."</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-900/60">
                    <span className="text-[#7D7C72]">document_id:</span>
                    <span className="text-cyan-300">"#INV-2048-HQ"</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-900/60">
                    <span className="text-[#7D7C72]">verified_items:</span>
                    <span className="text-emerald-400 font-semibold">14 Line Items (100%)</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-900/60">
                    <span className="text-[#7D7C72]">reconciliation_rate:</span>
                    <span className="text-amber-300">99.8% Confidence</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-[#7D7C72]">destination_sync:</span>
                    <span className="text-indigo-300">"SAP S/4HANA"</span>
                  </div>
                </div>
              </div>

              {/* Execution Controls */}
              <div className="mt-6 pt-4 border-t border-[rgba(239,237,226,0.12)] flex items-center justify-between gap-3">
                <button
                  onClick={handleRunPipeline}
                  disabled={isProcessing}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-slate-100 disabled:opacity-60 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <Play size={14} className={isProcessing ? "animate-spin text-blue-600" : ""} />
                  {isProcessing ? "Processing Pipeline..." : pipelineState === "completed" ? "Re-run Pipeline" : "Simulate Live Run"}
                </button>
                {pipelineState === "completed" && (
                  <button
                    onClick={handleReset}
                    className="p-2.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-[#B7B5AA] transition-colors cursor-pointer"
                    title="Reset"
                  >
                    <RotateCcw size={15} />
                  </button>
                )}
              </div>
            </InteractiveCard>
          </Reveal>

          {/* BOX 3: Telemetry Metrics Card */}
          <Reveal delay={0.10} className="lg:col-span-4">
            <InteractiveCard accentColor="rgba(59, 130, 246, 0.15)" className="p-6 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between text-xs font-mono text-[#B7B5AA] mb-4">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Activity size={14} /> telemetry.metrics
                </span>
                <ArrowUpRight size={14} className="text-[#7D7C72]" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#EFEDE2] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  78%
                </div>
                <div className="text-sm text-[#B7B5AA] font-medium mt-1">Average Automation Rate</div>
                <p className="text-xs text-[#B7B5AA] mt-2">
                  Measured across 1.2M+ enterprise workflow cycles with zero manual intervention.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[rgba(239,237,226,0.08)] flex items-center justify-between text-xs font-mono text-[#B7B5AA]">
                <span>Cycle Time:</span>
                <span className="text-emerald-400 font-bold">-42% Reduction</span>
              </div>
            </InteractiveCard>
          </Reveal>

          {/* BOX 4: Bi-Directional Connectors Card */}
          <Reveal delay={0.12} className="lg:col-span-4">
            <InteractiveCard accentColor="rgba(16, 185, 129, 0.14)" className="p-6 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between text-xs font-mono text-[#B7B5AA] mb-4">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Server size={14} /> connectors.status
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">99.9% Uptime</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#050711] border border-[rgba(239,237,226,0.12)] hover:border-slate-700 transition-colors">
                  <span className="text-[#B7B5AA]">SAP / Oracle ERP</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 12ms
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#050711] border border-[rgba(239,237,226,0.12)] hover:border-slate-700 transition-colors">
                  <span className="text-[#B7B5AA]">Salesforce / CRM</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 18ms
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#050711] border border-[rgba(239,237,226,0.12)] hover:border-slate-700 transition-colors">
                  <span className="text-[#B7B5AA]">PostgreSQL / Cloud</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 8ms
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[rgba(239,237,226,0.08)] flex items-center justify-between text-xs font-mono text-[#B7B5AA]">
                <span>Active Pipelines:</span>
                <span className="text-[#EFEDE2] font-medium">42 Live Feeds</span>
              </div>
            </InteractiveCard>
          </Reveal>

          {/* BOX 5: Operations Co-Pilot Box */}
          <Reveal delay={0.14} className="lg:col-span-4">
            <InteractiveCard accentColor="rgba(245, 158, 11, 0.14)" className="p-6 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between text-xs font-mono text-[#B7B5AA] mb-4">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Zap size={14} /> copilot.autonomous
                </span>
                <ArrowUpRight size={14} className="text-[#7D7C72]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#EFEDE2] mb-1.5">Autonomous Exception Routing</div>
                <p className="text-xs text-[#B7B5AA] leading-relaxed">
                  Automatically flags missing tax IDs, resolves pricing variances, and dispatches validated transactions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[rgba(239,237,226,0.08)] flex items-center justify-between text-xs font-mono text-[#B7B5AA]">
                <span>Weekly Resolves:</span>
                <span className="text-cyan-400 font-bold">1,284 Tasks</span>
              </div>
            </InteractiveCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
