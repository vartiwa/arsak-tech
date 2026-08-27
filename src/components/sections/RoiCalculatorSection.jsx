import React, { useState } from "react";
import { Calculator, TrendingUp, Users, ArrowUpRight, ShieldCheck, Zap, ShoppingBag } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const RoiCalculatorSection = ({ onOpenContact }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(1200);
  const [avgOrderValue, setAvgOrderValue] = useState(2500); // ₹2,500 or $50
  const [currentLeads, setCurrentLeads] = useState(15);
  const [currency, setCurrency] = useState("₹"); // "₹" | "$"

  // Arsak Modern Fast Website typically increases conversion by 2.2x to 3.5x
  const conversionMultiplier = 2.4;
  const projectedLeads = Math.round(currentLeads * conversionMultiplier);
  const newExtraLeadsMonthly = projectedLeads - currentLeads;
  const estimatedNewRevenueMonthly = Math.round(newExtraLeadsMonthly * (avgOrderValue * 0.4)); // assuming 40% deal close
  const estimatedNewRevenueAnnual = estimatedNewRevenueMonthly * 12;

  const formatCurrency = (val) => {
    if (currency === "₹") {
      if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
      if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
      return `₹${val.toLocaleString("en-IN")}`;
    } else {
      if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
      if (val >= 1000) return `$${(val / 1000).toFixed(1)}k`;
      return `$${val.toLocaleString("en-US")}`;
    }
  };

  return (
    <section id="roi-calculator" className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Growth Calculator"
          title="Calculate Your Website's Potential"
          sub="See how a modern, fast website helps you get more inquiries and extra monthly sales."
          center
        />

        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Business Sliders */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal className="h-full">
              <InteractiveCard className="p-5 sm:p-7 flex flex-col justify-between h-full bg-white">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,20,14,0.11)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFECE3] border border-[rgba(22,20,14,0.12)] flex items-center justify-center text-[#0D0C09] shadow-xs">
                      <Calculator size={20} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0D0C09] font-['Space_Grotesk']">
                        Your Business Numbers
                      </h3>
                      <span className="text-xs text-[#6B6557] font-mono">Move sliders to estimate impact</span>
                    </div>
                  </div>

                  {/* Currency Switcher */}
                  <div className="flex items-center p-1 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] text-xs font-mono font-bold">
                    <button
                      onClick={() => setCurrency("₹")}
                      className={`px-3 py-1 rounded-lg transition-all ${currency === "₹" ? "bg-[#BCEB28] text-[#0D1204] shadow-xs" : "text-[#6B6557]"}`}
                    >
                      INR (₹)
                    </button>
                    <button
                      onClick={() => setCurrency("$")}
                      className={`px-3 py-1 rounded-lg transition-all ${currency === "$" ? "bg-[#BCEB28] text-[#0D1204] shadow-xs" : "text-[#6B6557]"}`}
                    >
                      USD ($)
                    </button>
                  </div>
                </div>

                {/* Sliders Container */}
                <div className="space-y-6 py-6">
                  {/* Slider 1: Monthly Visitors */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs sm:text-sm font-bold text-[#0D0C09] flex items-center gap-2">
                        <Users size={16} className="text-[#2563EB]" />
                        <span>Estimated Monthly Website Visitors:</span>
                      </label>
                      <span className="text-sm font-bold font-mono bg-[#EFECE3] px-3 py-1 rounded-lg text-[#0D0C09] border border-[rgba(22,20,14,0.1)]">
                        {monthlyVisitors.toLocaleString()} Visitors/mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={15000}
                      step={200}
                      value={monthlyVisitors}
                      onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                      className="w-full accent-[#0D0C09] cursor-pointer h-2 bg-[#EFECE3] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#8A8475] mt-1">
                      <span>200 Visitors</span>
                      <span>5,000 Visitors</span>
                      <span>15,000+ Visitors</span>
                    </div>
                  </div>

                  {/* Slider 2: Current Inquiries */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs sm:text-sm font-bold text-[#0D0C09] flex items-center gap-2">
                        <Zap size={16} className="text-[#D97706]" />
                        <span>Current Inquiries / Calls Per Month:</span>
                      </label>
                      <span className="text-sm font-bold font-mono bg-[#EFECE3] px-3 py-1 rounded-lg text-[#0D0C09] border border-[rgba(22,20,14,0.1)]">
                        {currentLeads} Inquiries/mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={100}
                      value={currentLeads}
                      onChange={(e) => setCurrentLeads(Number(e.target.value))}
                      className="w-full accent-[#0D0C09] cursor-pointer h-2 bg-[#EFECE3] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#8A8475] mt-1">
                      <span>2 Leads</span>
                      <span>50 Leads</span>
                      <span>100+ Leads</span>
                    </div>
                  </div>

                  {/* Slider 3: Average Customer / Sale Value */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs sm:text-sm font-bold text-[#0D0C09] flex items-center gap-2">
                        <ShoppingBag size={16} className="text-[#059669]" />
                        <span>Average Order / Client Deal Value:</span>
                      </label>
                      <span className="text-sm font-bold font-mono bg-[#EFECE3] px-3 py-1 rounded-lg text-[#0D0C09] border border-[rgba(22,20,14,0.1)]">
                        {currency}{avgOrderValue.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={currency === "₹" ? 500 : 30}
                      max={currency === "₹" ? 50000 : 2000}
                      step={currency === "₹" ? 500 : 25}
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      className="w-full accent-[#0D0C09] cursor-pointer h-2 bg-[#EFECE3] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#8A8475] mt-1">
                      <span>{currency === "₹" ? "₹500" : "$30"}</span>
                      <span>{currency === "₹" ? "₹25,000" : "$1,000"}</span>
                      <span>{currency === "₹" ? "₹50,000+" : "$2,000+"}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Note */}
                <div className="pt-4 border-t border-[rgba(22,20,14,0.11)] flex items-center gap-2 text-[11px] font-mono text-[#6B6557]">
                  <ShieldCheck size={14} className="text-[#059669]" />
                  <span>Calculated from real client mobile conversion benchmarks.</span>
                </div>
              </InteractiveCard>
            </Reveal>
          </div>

          {/* Right Column: Projected Business Growth */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal delay={0.06} className="h-full">
              <InteractiveCard className="p-5 sm:p-7 flex flex-col justify-between h-full bg-white">
                <div>
                  {/* Top Metric Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(22,20,14,0.11)]">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider">
                        Projected Growth Output
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0D0C09] font-['Space_Grotesk'] mt-0.5">
                        New Monthly Revenue Potential
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold bg-[#BCEB28] text-[#0D1204] px-3 py-1 rounded-full shadow-xs">
                      +140% Conversion Uplift
                    </span>
                  </div>

                  {/* High-Impact Revenue Box */}
                  <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-[#EFECE3] border border-[rgba(22,20,14,0.12)] shadow-[inset_0_2px_4px_rgba(22,20,14,0.04)] text-center">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B6557] font-bold">
                      Estimated Extra Annual Revenue:
                    </div>
                    <div className="text-3xl sm:text-5xl font-extrabold text-[#0D0C09] font-mono mt-1 tracking-tight">
                      {formatCurrency(estimatedNewRevenueAnnual)}
                    </div>
                    <div className="text-xs text-[#059669] font-bold font-mono mt-2 flex items-center justify-center gap-1.5">
                      <TrendingUp size={14} />
                      <span>~{formatCurrency(estimatedNewRevenueMonthly)} extra revenue every month</span>
                    </div>
                  </div>

                  {/* 3 Secondary Benchmark Cards */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mt-4">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] text-center">
                      <div className="text-[10px] font-mono uppercase text-[#6B6557] font-bold">New Monthly Leads</div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#0D0C09] mt-0.5">
                        +{newExtraLeadsMonthly} <span className="text-[10px]">Leads</span>
                      </div>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] text-center">
                      <div className="text-[10px] font-mono uppercase text-[#6B6557] font-bold">Delivery Time</div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#0D0C09] mt-0.5">
                        10-14 <span className="text-[10px]">Days</span>
                      </div>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] text-center">
                      <div className="text-[10px] font-mono uppercase text-[#6B6557] font-bold">Page Speed</div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#059669] mt-0.5">
                        99/100
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-6 pt-5 border-t border-[rgba(22,20,14,0.11)]">
                  <button
                    onClick={onOpenContact}
                    className="btn-lime w-full justify-center inline-flex items-center gap-2 py-3 sm:py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                  >
                    <span>Get a Free Website Consultation & Quote</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </button>
                  <div className="text-center text-[10px] sm:text-[11px] font-mono text-[#6B6557] mt-2">
                    Custom proposal within 24 hours · Built to convert
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
