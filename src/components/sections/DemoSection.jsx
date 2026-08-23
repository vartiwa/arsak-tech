import React, { useState } from "react";
import { Terminal, CheckCircle2, Play, Sparkles, Activity, FileJson, ArrowUpRight, Cpu } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const DemoSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { name: "OCR", label: "Model Latency", val: "18ms", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
    { name: "LLM", label: "Context Window", val: "128k", color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE" },
    { name: "ERP", label: "API Sync Rate", val: "99.9%", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
    { name: "SEC", label: "TLS Encryption", val: "v1.3", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
    { name: "OPS", label: "Throughput", val: "2.4k/s", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
    { name: "VPC", label: "Isolated Node", val: "Ready", color: "#0D9488", bg: "#F0FDFA", border: "#99F6E4" },
    { name: "ISO", label: "Compliance", val: "Passed", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" }
  ];

  return (
    <section id="demo" className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Interactive Blueprint"
          title="Engineered with Mathematical Precision."
          sub="Inspect our autonomous extraction pipelines, live telemetry visualizers, and ERP synchronization schemas."
          center
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          
          {/* Main Config Card */}
          <div className="lg:col-span-7">
            <Reveal>
              <InteractiveCard className="h-full">
                {/* Header Compartment with Inset Depth */}
                <div className="p-4 sm:p-5 bg-[#EFECE3] border-b border-[rgba(22,20,14,0.11)] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm" />
                    </div>
                    <span className="text-xs font-mono text-[#0D0C09] font-bold">pipeline.arsak.config</span>
                  </div>
                  <span className="text-xs font-mono text-[#0D1204] bg-[#BCEB28] border border-[#0D1204]/15 px-3 py-0.5 rounded-full font-bold shadow-sm">
                    ● Production Active
                  </span>
                </div>

                {/* Body Content with High-Contrast Syntax Highlighting */}
                <div className="p-6 bg-white flex-1 flex flex-col justify-between font-mono text-xs sm:text-[13px] leading-relaxed">
                  <div className="text-[#38342B] space-y-1.5">
                    <div><span className="text-[#2563EB] font-bold">const</span> <span className="text-[#0D0C09] font-bold">pipeline</span> = <span className="text-[#7C3AED] font-bold">new</span> <span className="text-[#D97706] font-bold">ArsakPipeline</span>({'{'}</div>
                    <div className="pl-4"><span className="text-[#6B6557]">tenant:</span> <span className="text-[#059669] font-medium">"enterprise.prod.in"</span>,</div>
                    <div className="pl-4"><span className="text-[#6B6557]">model:</span> <span className="text-[#059669] font-medium">"arsak-extractor-v4"</span>,</div>
                    <div className="pl-4"><span className="text-[#6B6557]">validation:</span> <span className="text-[#0D0C09] font-bold">"strict_schema_enforced"</span>,</div>
                    <div className="pl-4"><span className="text-[#6B6557]">connectors:</span> [<span className="text-[#059669] font-medium">"SAP"</span>, <span className="text-[#059669] font-medium">"PostgreSQL"</span>, <span className="text-[#059669] font-medium">"Salesforce"</span>]</div>
                    <div>{'}'});</div>
                    <div className="pt-2 text-[#6B6557]">// Live Execution Telemetry:</div>
                    <div><span className="text-[#2563EB] font-bold">await</span> <span className="text-[#0D0C09] font-bold">pipeline</span>.<span className="text-[#D97706] font-bold">dispatchSync</span>();</div>
                  </div>

                  {/* 7-Bar Telemetry Metric Visualizer with Tactile Button Depth */}
                  <div className="mt-8 pt-5 border-t border-[rgba(22,20,14,0.11)]">
                    <div className="flex items-center justify-between text-xs mb-3 text-[#4A453A]">
                      <span className="text-[#0D0C09] font-bold">{metrics[activeMetric].name} Telemetry</span>
                      <span>{metrics[activeMetric].label}: <strong className="text-[#0D0C09] font-bold">{metrics[activeMetric].val}</strong></span>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {metrics.map((m, idx) => (
                        <button
                          key={m.name}
                          onClick={() => setActiveMetric(idx)}
                          className={`h-12 rounded-xl transition-all flex flex-col items-center justify-center gap-1 border ${
                            activeMetric === idx
                              ? "border-[#0D0C09] bg-[#BCEB28] scale-105 shadow-[0_4px_12px_rgba(188,235,40,0.5),inset_0_1px_0_rgba(255,255,255,0.7)]"
                              : "border-[rgba(22,20,14,0.11)] bg-[#FAF7F0] hover:border-[rgba(22,20,14,0.25)] hover:bg-[#F3EFE6] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                          }`}
                        >
                          <span className="text-[10px] font-bold text-[#0D0C09]">{m.name}</span>
                          <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: m.color }} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>
          </div>

          {/* Right Column: Sub-Bento Boxes with Depth */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Box 1: Extraction Schema Output */}
            <Reveal delay={0.06}>
              <InteractiveCard>
                <div className="p-4 bg-[#EFECE3] border-b border-[rgba(22,20,14,0.11)] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileJson size={16} className="text-[#0D0C09]" />
                    <span className="text-xs font-mono text-[#0D0C09] font-bold">payload.extracted.json</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-full font-bold">
                    Validated
                  </span>
                </div>
                <div className="p-5 bg-white font-mono text-xs text-[#38342B] space-y-2">
                  <div className="flex justify-between pb-1 border-b border-[rgba(22,20,14,0.05)]">
                    <span className="text-[#6B6557]">invoice_id:</span> <span className="text-[#0D0C09] font-bold">"INV-2048"</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-[rgba(22,20,14,0.05)]">
                    <span className="text-[#6B6557]">vendor:</span> <span className="text-[#0D0C09] font-bold">"ABC Industries Ltd."</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-[rgba(22,20,14,0.05)]">
                    <span className="text-[#6B6557]">net_payable:</span> <span className="text-[#0D0C09] font-extrabold text-[13px] bg-[#FEF3C7] px-1.5 py-0.5 rounded border border-[#FDE68A]">"₹84,500.00"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6557]">confidence:</span> <span className="text-[#059669] font-bold">"99.82%"</span>
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>

            {/* Box 2: Autonomous Copilot Mode */}
            <Reveal delay={0.1}>
              <InteractiveCard>
                <div className="p-4 bg-[#EFECE3] border-b border-[rgba(22,20,14,0.11)] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-[#2563EB]" />
                    <span className="text-xs font-mono text-[#0D0C09] font-bold">copilot.autonomous.node</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-full font-bold">
                    VPC Secure
                  </span>
                </div>
                <div className="p-5 bg-white flex flex-col justify-between text-xs text-[#4A453A]">
                  <p className="leading-relaxed font-medium">
                    Zero-human-intervention routing configured. Exceptions exceeding tolerance trigger instantaneous Slack/Email escalations.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#0D0C09] font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      Audit Trace: 100% Immutable
                    </span>
                    <ArrowUpRight size={13} className="text-[#6B6557]" />
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};
