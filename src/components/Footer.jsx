import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Footer = ({ onOpenContact }) => (
  <footer className="border-t border-[rgba(22,20,14,0.12)] bg-[#EFECE3] py-8 sm:py-12 relative z-10 shadow-[inset_0_4px_12px_rgba(22,20,14,0.03)]">
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
            Automate Work. Accelerate Business. Built in India for Global Scale. © {new Date().getFullYear()}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 sm:gap-x-8 gap-y-2 text-xs sm:text-sm text-[#4A453A] font-semibold" aria-label="Footer Navigation">
          <a href="#solutions" className="hover:text-[#0D0C09] transition-colors py-1">Solutions</a>
          <a href="#platform" className="hover:text-[#0D0C09] transition-colors py-1">Platform</a>
          <a href="#industries" className="hover:text-[#0D0C09] transition-colors py-1">Industries</a>
          <a href="#services" className="hover:text-[#0D0C09] transition-colors py-1">Services</a>
          <a href="#about" className="hover:text-[#0D0C09] transition-colors py-1">About</a>
          <button onClick={onOpenContact} className="hover:text-[#0D0C09] transition-colors flex items-center gap-1 font-bold py-1 cursor-pointer">
            <span>Contact</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </button>
        </nav>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-[#6B6557] font-mono font-medium">
          <a href="#" className="hover:text-[#0D0C09] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#0D0C09] transition-colors">Security Whitepaper</a>
          <a href="#" className="hover:text-[#0D0C09] transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
