import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, User, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { label: "What We Build", href: "#solutions" },
  { label: "Live Demo", href: "#demo" },
  { label: "Growth Calculator", href: "#roi-calculator" },
  { label: "Businesses We Serve", href: "#industries" },
  { label: "Services", href: "#services" },
];

export const Nav = ({ onOpenContact, onOpenAuth, userSession, onLogout }) => {
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
          ? "py-2 sm:py-3 shadow-[0_8px_20px_-6px_rgba(22,20,14,0.08)]"
          : "py-2.5 sm:py-3.5 shadow-sm"
      }`}
    >
      {/* Top Specular Line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

      {/* Bottom Separation Line Accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(22,20,14,0.06)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo in High-Contrast Container with Depth */}
        <a href="#" className="flex items-center select-none group">
          <div className="bg-white hover:bg-white/95 transition-all px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl border border-[rgba(22,20,14,0.12)] shadow-[0_2px_8px_-2px_rgba(22,20,14,0.08),inset_0_1px_0_rgba(255,255,255,1)] flex items-center justify-center group-hover:shadow-[0_6px_16px_-2px_rgba(22,20,14,0.12)] group-hover:scale-[1.02]">
            <img
              src="/logo.png"
              alt="Arsak Technologies Logo"
              className="h-7 xs:h-8 sm:h-9 md:h-11 w-auto object-contain"
            />
          </div>
        </a>

        {/* Middle Navigation - High Contrast Charcoal */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Main Navigation">
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

        {/* Right CTA Area: Portal Auth + Request Blueprint */}
        <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
          {userSession ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white border border-[rgba(22,20,14,0.12)] px-3 py-1.5 rounded-full text-xs font-mono shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-bold text-[#0D0C09]">{userSession.role}</span>
                <span className="text-[#6B6557]">({userSession.email.split('@')[0]})</span>
              </div>
              <button
                onClick={onLogout}
                className="btn-secondary text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer inline-flex items-center gap-1 hover:border-red-300 hover:text-red-700"
                title="Sign Out of Session"
              >
                <LogOut size={13} />
                <span>Exit</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAuth}
                className="btn-secondary inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full cursor-pointer shadow-2xs"
              >
                <User size={13} className="text-[#4A453A]" />
                <span>Client Portal</span>
              </button>

              <button
                onClick={onOpenContact}
                className="btn-lime inline-flex items-center justify-center text-xs font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full cursor-pointer gap-1.5"
              >
                <span>Request Blueprint</span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu toggle button (min 44x44 tap target) */}
        <button
          className="md:hidden text-[#0D0C09] bg-white border border-[rgba(22,20,14,0.12)] p-2 rounded-xl focus:outline-none shadow-xs active:scale-95 transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
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
            className="md:hidden overflow-hidden bg-[#FAF7F0] border-b border-[rgba(22,20,14,0.12)] px-4 sm:px-6 py-4 flex flex-col gap-3 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 pb-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="bg-white border border-[rgba(22,20,14,0.08)] px-3 py-2.5 rounded-xl text-[#4A453A] hover:text-[#0D0C09] text-xs font-bold transition-colors text-center shadow-xs"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[rgba(22,20,14,0.1)] flex flex-col gap-2.5">
              {userSession ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    onLogout();
                  }}
                  className="btn-secondary w-full justify-center inline-flex items-center gap-2 text-xs font-bold py-2.5 rounded-full"
                >
                  <LogOut size={14} />
                  <span>Sign Out ({userSession.email.split('@')[0]})</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setOpen(false);
                      onOpenAuth();
                    }}
                    className="btn-secondary w-full justify-center inline-flex items-center gap-2 text-xs font-bold py-2.5 rounded-full shadow-xs"
                  >
                    <User size={14} />
                    <span>Client Portal (Guest Sandbox)</span>
                  </button>
                  <button
                    onClick={() => {
                      setOpen(false);
                      onOpenContact();
                    }}
                    className="btn-lime w-full justify-center inline-flex items-center text-xs font-bold py-2.5 rounded-full shadow-sm"
                  >
                    Request Blueprint
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
