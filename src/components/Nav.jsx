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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0B0D0C]/94 backdrop-blur-md border-b border-[rgba(239,237,226,0.1)] shadow-lg py-3"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo in High-Contrast White Container */}
        <a href="#" className="flex items-center select-none group">
          <div className="bg-white hover:bg-[#EFEDE2] transition-all px-3.5 py-1.5 rounded-xl border border-zinc-200 shadow-sm flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Arsak Technologies Logo"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>
        </a>

        {/* Middle Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-[#B7B5AA] hover:text-[#EFEDE2] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button - Pleurat Lime Pill */}
        <div className="hidden md:block">
          <button
            onClick={onOpenContact}
            className="btn-lime inline-flex items-center justify-center text-xs font-semibold px-5 py-2 rounded-full cursor-pointer gap-1.5"
          >
            <span>Book a Demo</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#B7B5AA] hover:text-[#EFEDE2] p-1 rounded-md focus:outline-none"
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
            className="md:hidden overflow-hidden bg-[#0B0D0C] border-b border-[rgba(239,237,226,0.12)] px-6 py-5 flex flex-col gap-4 shadow-xl"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[#B7B5AA] hover:text-[#EFEDE2] text-base py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenContact();
              }}
              className="btn-lime mt-2 inline-flex justify-center items-center text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
