import React, { useState } from "react";
import {
  Globe,
  ShoppingBag,
  Calendar,
  CheckCircle2,
  Sparkles,
  RefreshCw
} from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";
import { InteractiveCard } from "../common/InteractiveCard";

const WEBSITE_PRESETS = [
  {
    id: "lead-gen",
    title: "Business & Company Website",
    category: "Lead Capture & WhatsApp",
    icon: Globe,
    mockPreview: {
      siteName: "Apex Interior Studio",
      actionTitle: "New Client Inquiry Submitted",
      visitorName: "Rahul Sharma",
      contact: "+91 98765 43210 · Mumbai",
      serviceRequested: "Complete 3BHK Home Interior Design",
      submittedTime: "Just now (Mobile Browser)"
    },
    liveOutcomes: [
      { label: "WhatsApp Auto-Reply", val: "Sent in 1 sec", desc: "Service catalog & price list sent to client", status: "Instant Reply" },
      { label: "Automatic Lead Alert", val: "Instant Alert", desc: "Notification sent to owner's WhatsApp", status: "Logged" },
      { label: "Mobile Speed Score", val: "99 / 100", desc: "Loads instantly on 4G and 5G phones", status: "Super Fast" },
      { label: "Google Search (SEO)", val: "Optimized", desc: "Ready for local Google search ranking", status: "SEO Ready" }
    ],
    techStack: "Clean Modern Code · Fast Hosting · WhatsApp Alerts",
    responseLatency: "< 1 Sec"
  },
  {
    id: "ecommerce",
    title: "Online Store & E-Commerce",
    category: "UPI Checkout & Order Alerts",
    icon: ShoppingBag,
    mockPreview: {
      siteName: "Urban Craft Apparel",
      actionTitle: "Online Order #ORD-8821 Paid",
      visitorName: "Ananya Iyer",
      contact: "Paid via UPI (Google Pay / PhonePe)",
      serviceRequested: "2x Premium Linen Shirts (₹3,499)",
      submittedTime: "Just now (Instant Checkout)"
    },
    liveOutcomes: [
      { label: "1-Tap UPI Payment", val: "Instant Success", desc: "Easy payment via GPay, PhonePe, or Cards", status: "Instant Settlement" },
      { label: "WhatsApp Order Receipt", val: "PDF Sent", desc: "Automated invoice with order summary", status: "Delivered" },
      { label: "Real-Time Stock Update", val: "-2 Units Synced", desc: "Available quantity auto-decremented", status: "Updated" },
      { label: "Customer Details Saved", val: "Saved to List", desc: "Added to customer list for repeat orders", status: "Saved" }
    ],
    techStack: "UPI & Cards · Instant Invoicing · Inventory Tracking",
    responseLatency: "< 1 Sec"
  },
  {
    id: "booking",
    title: "Appointment Booking Website",
    category: "Calendar & Reminders",
    icon: Calendar,
    mockPreview: {
      siteName: "Dr. Mehta Dental Clinic",
      actionTitle: "Appointment Slot Reserved",
      visitorName: "Vikram Malhotra",
      contact: "Confirmed for Saturday, 11:30 AM",
      serviceRequested: "Dental Checkup & Consultation",
      submittedTime: "Booked via 24/7 Web Widget"
    },
    liveOutcomes: [
      { label: "Calendar Sync", val: "Slot Reserved", desc: "Direct 2-way sync with your Google Calendar", status: "Confirmed" },
      { label: "WhatsApp & SMS Reminder", val: "Scheduled", desc: "Automatic reminders to reduce missed appointments", status: "Automated" },
      { label: "Patient / Client Details", val: "Saved", desc: "Contact details collected before arrival", status: "Organized" },
      { label: "Zero Phone Tag", val: "100% Online", desc: "Clients pick their own available time slot", status: "Hands-Free" }
    ],
    techStack: "Google Calendar · Automated Reminders · Mobile Booking",
    responseLatency: "< 1 Sec"
  }
];

export const DemoSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const activeDemo = WEBSITE_PRESETS[activeIdx];

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 600);
  };

  return (
    <section id="demo" className="py-12 sm:py-16 md:py-24 border-t border-[rgba(22,20,14,0.11)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Interactive Website Showcase"
          title="See How Our Websites Win & Automate Customers"
          sub="Select a business model below to test how our websites capture inquiries, take payments, and automate daily tasks."
          center
        />

        {/* Website Format Selector */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {WEBSITE_PRESETS.map((preset, i) => {
            const Icon = preset.icon;
            const isSelected = activeIdx === i;
            return (
              <button
                key={preset.id}
                onClick={() => {
                  setActiveIdx(i);
                  triggerSimulation();
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0D0C09] text-white shadow-sm scale-102"
                    : "bg-white text-[#4A453A] border border-[rgba(22,20,14,0.12)] hover:border-[#0D0C09] hover:bg-[#FAF7F0]"
                }`}
              >
                <Icon size={16} className={isSelected ? "text-[#BCEB28]" : "text-[#6B6557]"} />
                <span>{preset.title}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full hidden sm:inline ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#FAF7F0] text-[#6B6557]"
                }`}>
                  {preset.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Clean Interactive Sandbox */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Live Visitor Action Card */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal className="h-full">
              <InteractiveCard className="p-4 sm:p-6 h-full flex flex-col justify-between bg-white">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(22,20,14,0.11)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-[#0D0C09] uppercase">
                      Visitor Interaction: {activeDemo.mockPreview.siteName}
                    </span>
                  </div>
                  <button
                    onClick={triggerSimulation}
                    className="btn-secondary inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold cursor-pointer hover:bg-[#BCEB28]"
                  >
                    <RefreshCw size={12} className={isSimulating ? "animate-spin" : ""} />
                    <span>Test Interaction</span>
                  </button>
                </div>

                {/* Simulated Customer Submission Box */}
                <div className="my-4 p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] relative font-sans text-xs shadow-inner">
                  {/* Subtle Pulse Animation */}
                  {isSimulating && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#BCEB28] to-transparent shadow-[0_0_10px_#BCEB28] z-20 animate-pulse" />
                  )}

                  <div className="flex justify-between items-start pb-3 border-b border-[rgba(22,20,14,0.08)]">
                    <div>
                      <div className="font-bold text-[#0D0C09] text-sm font-['Space_Grotesk']">
                        {activeDemo.mockPreview.actionTitle}
                      </div>
                      <div className="text-[11px] text-[#6B6557] font-mono mt-0.5">
                        Customer: <strong className="text-[#0D0C09]">{activeDemo.mockPreview.visitorName}</strong>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-[#EFECE3] px-2 py-0.5 rounded text-[#4A453A] font-semibold">
                      {activeDemo.mockPreview.submittedTime}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="py-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-[rgba(22,20,14,0.1)] flex justify-between items-center">
                      <span className="text-[#6B6557]">Inquiry / Order Details:</span>
                      <span className="font-bold text-[#2563EB]">{activeDemo.mockPreview.serviceRequested}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-[rgba(22,20,14,0.1)] flex justify-between items-center">
                      <span className="text-[#6B6557]">Contact / Payment Mode:</span>
                      <span className="font-bold text-[#059669]">{activeDemo.mockPreview.contact}</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-[#8A8475] flex items-center justify-between border-t border-[rgba(22,20,14,0.06)]">
                    <span>Engine: Arsak Web Speed Core</span>
                    <span>100% Mobile Optimized</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-[rgba(22,20,14,0.11)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6B6557]">Response Speed: <strong className="text-[#0D0C09]">{activeDemo.responseLatency}</strong></span>
                  <span className="text-[#059669] font-bold">✓ Zero Customer Delay</span>
                </div>
              </InteractiveCard>
            </Reveal>
          </div>

          {/* Right Column: Automated Business Outcomes */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal delay={0.06} className="h-full">
              <InteractiveCard className="p-4 sm:p-6 h-full flex flex-col justify-between bg-white">
                <div>
                  {/* Top Mode Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(22,20,14,0.11)]">
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={16} className="text-[#059669]" />
                      <span className="text-xs font-bold text-[#0D0C09] font-mono uppercase">
                        Instant Automated Business Results
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      <span>100% Automated</span>
                    </span>
                  </div>

                  {/* 4 Automated Outcome Items */}
                  <div className="my-4 space-y-2">
                    {activeDemo.liveOutcomes.map((item) => (
                      <div
                        key={item.label}
                        className="p-2.5 sm:p-3 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#0D0C09]">{item.label}</div>
                          <div className="text-[11px] text-[#6B6557] mt-0.5">{item.desc}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#A7F3D0]">
                            {item.val}
                          </span>
                          <span className="text-[10px] font-mono text-[#4A453A] font-semibold">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-3 border-t border-[rgba(22,20,14,0.11)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#6B6557]">Tech: <strong className="text-[#0D0C09]">{activeDemo.techStack}</strong></span>
                  <span className="text-[#059669] font-bold">Built for Real Business Growth</span>
                </div>
              </InteractiveCard>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
