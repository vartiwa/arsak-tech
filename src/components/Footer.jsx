import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Footer = ({ onOpenContact }) => (
  <footer className="border-t border-[rgba(22,20,14,0.08)] bg-[#F2EFE8] py-12 relative z-10">
    <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <a href="#" className="flex items-center select-none group">
          <div className="bg-white hover:bg-[#FBF9F4] transition-all px-3.5 py-1.5 rounded-xl border border-[rgba(22,20,14,0.1)] shadow-sm flex items-center justify-center">
            <img src="/logo.png" alt="Arsak Technologies" className="h-6 sm:h-7 w-auto object-contain" />
          </div>
        </a>
        <p className="text-[#7A756B] text-xs mt-3 text-center md:text-left font-mono">
          Automate Work. Accelerate Business. Built in India for Global Scale. © {new Date().getFullYear()}
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#5C584E]" aria-label="Footer Navigation">
        <a href="#solutions" className="hover:text-[#16140E] transition-colors">Solutions</a>
        <a href="#platform" className="hover:text-[#16140E] transition-colors">Platform</a>
        <a href="#industries" className="hover:text-[#16140E] transition-colors">Industries</a>
        <a href="#services" className="hover:text-[#16140E] transition-colors">Services</a>
        <a href="#about" className="hover:text-[#16140E] transition-colors">About</a>
        <button onClick={onOpenContact} className="hover:text-[#16140E] transition-colors flex items-center gap-1">
          <span>Contact</span>
          <ArrowUpRight size={13} />
        </button>
      </nav>

      <div className="flex gap-5 text-xs text-[#7A756B] font-mono">
        <a href="#" className="hover:text-[#16140E] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#16140E] transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);
