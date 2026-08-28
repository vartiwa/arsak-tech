import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Footer = ({ onOpenContact }) => (
  <footer className="border-t border-[rgba(22,20,14,0.12)] bg-[#EFECE3] py-8 sm:py-10 relative z-10 shadow-[inset_0_4px_12px_rgba(22,20,14,0.03)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Main Footer Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center select-none group">
            <div className="bg-white hover:bg-white/95 transition-all px-3 py-1.5 sm:px-4.5 sm:py-2.5 rounded-xl border border-[rgba(22,20,14,0.12)] shadow-[0_2px_8px_-2px_rgba(22,20,14,0.08),inset_0_1px_0_rgba(255,255,255,1)] flex items-center justify-center group-hover:shadow-[0_6px_16px_-2px_rgba(22,20,14,0.12)] group-hover:scale-[1.02]">
              <img src="/logo.png" alt="Arsak Technologies" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            </div>
          </a>
          <p className="text-[#6B6557] text-[11px] sm:text-xs mt-2.5 sm:mt-3 font-mono font-medium max-w-sm">
            Modern Websites & Digital Products. Built in India for Global Scale. © {new Date().getFullYear()}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 sm:gap-x-8 gap-y-2 text-xs sm:text-sm text-[#4A453A] font-semibold" aria-label="Footer Navigation">
          <a href="#solutions" className="hover:text-[#0D0C09] transition-colors py-1">What We Build</a>
          <a href="#demo" className="hover:text-[#0D0C09] transition-colors py-1">Live Demo</a>
          <a href="#roi-calculator" className="hover:text-[#0D0C09] transition-colors py-1">Growth Calculator</a>
          <a href="#industries" className="hover:text-[#0D0C09] transition-colors py-1">Businesses</a>
          <a href="#about" className="hover:text-[#0D0C09] transition-colors py-1">About</a>
          <button onClick={onOpenContact} className="hover:text-[#0D0C09] transition-colors flex items-center gap-1 font-bold py-1 cursor-pointer">
            <span>Contact</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </button>
        </nav>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-[#6B6557] font-mono font-medium">
          <a href="#" className="hover:text-[#0D0C09] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#0D0C09] transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Subtle Bottom Credit Row */}
      <div className="mt-8 pt-5 border-t border-[rgba(22,20,14,0.08)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-[#8A8475]">
        <span>Arsak Technologies · All rights reserved.</span>
        <div className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BCEB28] border border-[#0D1204]/20" />
          <span>Research & Development: <strong className="text-[#4A453A] font-semibold">Varun & Abhi</strong></span>
        </div>
      </div>
    </div>
  </footer>
);
