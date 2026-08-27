import React from "react";
import { MessageSquare, Sparkles, CheckCircle2, Phone, Clock } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

export const AIAgentSection = () => (
  <section className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-6">
        <SectionHeading
          eyebrow="Smart Website Tools"
          title="Never Miss a Customer Inquiry, Even While You Sleep."
          sub="Our websites can be connected with automated WhatsApp replies and 24/7 inquiry capture, so your potential customers get answers right away."
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-[rgba(22,20,14,0.11)] bg-white shadow-sm">
            <div className="text-xl font-bold text-[#0D0C09] font-mono">Instant</div>
            <div className="text-xs text-[#4A453A] mt-1 font-medium">WhatsApp Reply to Customers</div>
          </div>
          <div className="p-4 rounded-xl border border-[rgba(22,20,14,0.11)] bg-white shadow-sm">
            <div className="text-xl font-bold text-[#0D0C09] font-mono">24/7</div>
            <div className="text-xs text-[#4A453A] mt-1 font-medium">Lead & Booking Capture</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6">
        <Reveal delay={0.08}>
          <InteractiveCard className="h-full">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(22,20,14,0.11)] bg-[#EFECE3] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[rgba(22,20,14,0.11)] flex items-center justify-center text-[#25D366] shadow-sm">
                  <MessageSquare size={16} />
                </div>
                <span className="text-xs text-[#0D0C09] font-bold font-mono">Automated WhatsApp Assistant</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                Active 24/7
              </span>
            </div>

            <div className="p-5 sm:p-6 bg-white flex flex-col gap-3.5 font-sans">
              <div className="self-end max-w-[85%] bg-[#FAF7F0] border border-[rgba(22,20,14,0.11)] text-[#0D0C09] text-xs sm:text-sm font-semibold rounded-2xl px-4 py-2.5 shadow-sm">
                Hi! What are your business timings and service packages?
              </div>

              <div className="self-start max-w-[92%] bg-white border border-[rgba(22,20,14,0.14)] text-[#0D0C09] text-xs sm:text-sm rounded-2xl px-4 py-3 shadow-sm font-medium">
                Hello! We are open Monday to Saturday (10 AM - 7 PM). Here is our brochure and price list:
              </div>

              <div className="self-start w-full border border-[rgba(22,20,14,0.11)] bg-[#FAF7F0] rounded-xl p-3.5 text-xs text-[#38342B] flex flex-col gap-2 font-mono">
                <div className="flex items-center justify-between pb-1.5 border-b border-[rgba(22,20,14,0.06)]">
                  <span className="text-[#0D0C09] font-bold">📄 Service Price Catalog.pdf</span>
                  <span className="text-[#059669] font-bold">Auto-Delivered</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6557]">Lead Phone: +91 98765 43210</span>
                  <span className="text-[#2563EB] font-bold">Saved to Contact List</span>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </Reveal>
      </div>
    </div>
  </section>
);
