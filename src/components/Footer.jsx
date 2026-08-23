import React from "react";

export const Footer = ({ onOpenContact }) => (
  <footer className="border-t border-slate-800/80 bg-[#060911] py-12 relative z-10">
    <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <a href="#" className="flex items-center select-none group">
          <div className="bg-white hover:bg-slate-100 transition-all px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-sm flex items-center justify-center transform group-hover:scale-[1.02]">
            <img src="/logo.png" alt="Arsak Technologies" className="h-6 sm:h-7 w-auto object-contain" />
          </div>
        </a>
        <p className="text-slate-500 text-xs mt-3 text-center md:text-left font-mono">
          Automate Work. Accelerate Business. Built in India for Global Scale. © {new Date().getFullYear()}
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400" aria-label="Footer Navigation">
        <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
        <a href="#platform" className="hover:text-white transition-colors">Platform</a>
        <a href="#industries" className="hover:text-white transition-colors">Industries</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <button onClick={onOpenContact} className="hover:text-white transition-colors">Contact</button>
      </nav>

      <div className="flex gap-5 text-xs text-slate-500 font-mono">
        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);
