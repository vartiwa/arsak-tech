import React, { useState } from "react";
import { Terminal, CheckCircle2, Play, Sparkles, Activity, FileJson, ArrowUpRight, Cpu } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const DemoSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { name: "OCR", label: "Model Latency", val: "18ms", color: "#16a34a" },
    { name: "LLM", label: "Context Window", val: "128k", color: "#2563eb" },
    { name: "ERP", label: "API Sync Rate", val: "99.9%", color: "#16a34a" },
    { name: "SEC", label: "TLS Encryption", val: "v1.3", color: "#7c3aed" },
    { name: "OPS", label: "Throughput", val: "2.4k/s", color: "#d97706" },
    { name: "VPC", label: "Isolated Node", val: "Ready", color: "#059669" },
    { name: "ISO", label: "Compliance", val: "Passed", color: "#16a34a" }
  ];

  return (
    <section id="demo" className="py-16 md:py-24 border-t border-[rgba(22,20,14,0.08)] bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
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
                {/* Header Compartment */}
                <div className="p-4 sm:p-5 bg-[#EFECE4] border-b border-[rgba(22,20,14,0.09)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-mono text-[#16140E] font-semibold">pipeline.arsak.config</span>
                  </div>
                  <span className="text-xs font-mono text-[#10160A] bg-[#C0EB3A] px-2.5 py-0.5 rounded-full font-semibold">
                    Production Active
                  </span>
                </div>

                {/* Body Content with Syntax Highlighting */}
                <div className="p-6 bg-white flex-1 flex flex-col justify-between font-mono text-xs sm:text-[13px] leading-relaxed">
                  <div className="text-[#3E3B33] space-y-1">
                    <div><span className="text-[#2563eb] font-semibold">const</span> <span className="text-[#16140E] font-bold">pipeline</span> = <span className="text-[#7c3aed]">new</span> <span className="text-[#d97706] font-bold">ArsakPipeline</span>({'{'}</div>
                    <div className="pl-4"><span className="text-[#7A756B]">tenant:</span> <span className="text-[#16a34a]">"enterprise.prod.in"</span>,</div>
                    <div className="pl-4"><span className="text-[#7A756B]">model:</span> <span className="text-[#16a34a]">"arsak-extractor-v4"</span>,</div>
                    <div className="pl-4"><span className="text-[#7A756B]">validation:</span> <span className="text-[#16140E] font-semibold">"strict_schema_enforced"</span>,</div>
                    <div className="pl-4"><span className="text-[#7A756B]">connectors:</span> [<span className="text-[#16a34a]">"SAP"</span>, <span className="text-[#16a34a]">"PostgreSQL"</span>, <span className="text-[#16a34a]">"Salesforce"</span>]</div>
                    <div>{'}'});</div>
                    <div className="pt-2 text-[#94A3B8]">// Live Execution Telemetry:</div>
                    <div><span className="text-[#2563eb]">await</span> <span className="text-[#16140E]">pipeline</span>.<span className="text-[#d97706]">dispatchSync</span>();</div>
                  </div>

                  {/* 7-Bar Telemetry Metric Visualizer */}
                  <div className="mt-8 pt-5 border-t border-[rgba(22,20,14,0.08)]">
                    <div className="flex items-center justify-between text-xs mb-3 text-[#5C584E]">
                      <span className="text-[#16140E] font-bold">{metrics[activeMetric].name} Telemetry</span>
                      <span>{metrics[activeMetric].label}: <strong className="text-[#16140E]">{metrics[activeMetric].val}</strong></span>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {metrics.map((m, idx) => (
                        <button
                          key={m.name}
                          onClick={() => setActiveMetric(idx)}
                          className={`h-12 rounded-lg transition-all flex flex-col items-center justify-center gap-1 border ${
                            activeMetric === idx
                              ? "border-[#10160A] bg-[#C0EB3A] scale-105 shadow-sm"
                              : "border-[rgba(22,20,14,0.09)] bg-[#F8FAFC] hover:border-slate-300"
                          }`}
                        >
                          <span className="text-[10px] font-bold text-[#16140E]">{m.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: m.color }} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>
          </div>

          {/* Right Column: Sub-Bento Boxes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Box 1: Extraction Schema Output */}
            <Reveal delay={0.06}>
              <InteractiveCard>
                <div className="p-4 bg-[#EFECE4] border-b border-[rgba(22,20,14,0.09)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileJson size={16} className="text-[#10160A]" />
                    <span className="text-xs font-mono text-[#16140E] font-bold">payload.extracted.json</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#16a34a] font-semibold">Validated</span>
                </div>
                <div className="p-5 bg-white font-mono text-xs text-[#3E3B33] space-y-1.5">
                  <div className="flex justify-between"><span>invoice_id:</span> <span className="text-[#16140E] font-semibold">"INV-2048"</span></div>
                  <div className="flex justify-between"><span>vendor:</span> <span className="text-[#16140E] font-semibold">"ABC Industries Ltd."</span></div>
                  <div className="flex justify-between"><span>net_payable:</span> <span className="text-[#16140E] font-bold">"₹84,500.00"</span></div>
                  <div className="flex justify-between"><span>confidence:</span> <span className="text-[#16a34a] font-semibold">"99.82%"</span></div>
                </div>
              </InteractiveCard>
            </Reveal>

            {/* Box 2: Autonomous Copilot Mode */}
            <Reveal delay={0.1}>
              <InteractiveCard>
                <div className="p-4 bg-[#EFECE4] border-b border-[rgba(22,20,14,0.09)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-[#2563eb]" />
                    <span className="text-xs font-mono text-[#16140E] font-bold">copilot.autonomous.node</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#2563eb] font-semibold">VPC Secure</span>
                </div>
                <div className="p-5 bg-white flex flex-col justify-between text-xs text-[#5C584E]">
                  <p className="leading-relaxed">
                    Zero-human-intervention routing configured. Exceptions exceeding tolerance trigger instantaneous Slack/Email escalations.
                  </p>
                  <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.08)] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#16140E] font-semibold">Audit Trace: 100% Immutable</span>
                    <ArrowUpRight size={13} className="text-[#7A756B]" />
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
