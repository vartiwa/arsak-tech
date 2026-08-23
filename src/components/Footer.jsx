import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Footer = ({ onOpenContact }) => (
  <footer className="border-t border-[rgba(22,20,14,0.12)] bg-[#EFECE3] py-14 relative z-10 shadow-[inset_0_4px_12px_rgba(22,20,14,0.03)]">
    <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <a href="#" className="flex items-center select-none group">
          <div className="bg-white hover:bg-[#FAF7F0] transition-all px-3.5 py-1.5 rounded-xl border border-[rgba(22,20,14,0.12)] shadow-[0_2px_8px_-2px_rgba(22,20,14,0.08),inset_0_1px_0_rgba(255,255,255,1)] flex items-center justify-center">
            <img src="/logo.png" alt="Arsak Technologies" className="h-6 sm:h-7 w-auto object-contain" />
          </div>
        </a>
        <p className="text-[#6B6557] text-xs mt-3 text-center md:text-left font-mono font-medium">
          Automate Work. Accelerate Business. Built in India for Global Scale. © {new Date().getFullYear()}
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#4A453A] font-semibold" aria-label="Footer Navigation">
        <a href="#solutions" className="hover:text-[#0D0C09] transition-colors">Solutions</a>
        <a href="#platform" className="hover:text-[#0D0C09] transition-colors">Platform</a>
        <a href="#industries" className="hover:text-[#0D0C09] transition-colors">Industries</a>
        <a href="#services" className="hover:text-[#0D0C09] transition-colors">Services</a>
        <a href="#about" className="hover:text-[#0D0C09] transition-colors">About</a>
        <button onClick={onOpenContact} className="hover:text-[#0D0C09] transition-colors flex items-center gap-1">
          <span>Contact</span>
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </button>
      </nav>

      <div className="flex gap-5 text-xs text-[#6B6557] font-mono font-medium">
        <a href="#" className="hover:text-[#0D0C09] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#0D0C09] transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);
