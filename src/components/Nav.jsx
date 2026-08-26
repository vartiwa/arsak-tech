import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Industries", href: "#industries" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export const Nav = ({ onOpenContact }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[rgba(22,20,14,0.11)] ${
        scrolled
          ? "py-3 shadow-[0_8px_20px_-6px_rgba(22,20,14,0.08)]"
          : "py-3.5 sm:py-4 shadow-sm"
      }`}
    >
      {/* Top Specular Line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

      {/* Bottom Separation Line Accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(22,20,14,0.06)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo in High-Contrast Container with Depth */}
        <a href="#" className="flex items-center select-none group">
          <div className="bg-white hover:bg-white/95 transition-all px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[rgba(22,20,14,0.12)] shadow-[0_2px_8px_-2px_rgba(22,20,14,0.08),inset_0_1px_0_rgba(255,255,255,1)] flex items-center justify-center group-hover:shadow-[0_6px_16px_-2px_rgba(22,20,14,0.12)] group-hover:scale-[1.02]">
            <img
              src="/logo.png"
              alt="Arsak Technologies Logo"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
          </div>
        </a>

        {/* Middle Navigation - High Contrast Charcoal */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-semibold text-[#4A453A] hover:text-[#0D0C09] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button - Physical Depth Electric Lime Pill */}
        <div className="hidden md:block">
          <button
            onClick={onOpenContact}
            className="btn-lime inline-flex items-center justify-center text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer gap-1.5"
          >
            <span>Book a Demo</span>
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#4A453A] hover:text-[#0D0C09] p-1 rounded-md focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#FAF7F0] border-b border-[rgba(22,20,14,0.12)] px-6 py-5 flex flex-col gap-4 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#4A453A] hover:text-[#0D0C09] text-base py-1 transition-colors font-semibold"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenContact();
              }}
              className="btn-lime mt-2 inline-flex justify-center items-center text-sm font-bold px-5 py-2.5 rounded-full"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
