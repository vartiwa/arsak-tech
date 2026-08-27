import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building2,
  KeyRound,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Eye,
  EyeOff
} from "lucide-react";

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [tab, setTab] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFeedback({
        type: "success",
        title: "Enterprise Session Authenticated",
        message: `Connected to secure tenant console for ${email || "enterprise client"}.`
      });
      setTimeout(() => {
        onLoginSuccess({
          email: email || "demo@enterprise.com",
          role: "Enterprise Admin",
          isGuest: false,
        });
        onClose();
        setFeedback(null);
      }, 1200);
    }, 800);
  };

  const handleGuestDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFeedback({
        type: "guest",
        title: "Sandbox Demo Mode Unlocked",
        message: "Exploring live enterprise environment without login. No backend required."
      });
      setTimeout(() => {
        onLoginSuccess({
          email: "guest.auditor@arsak.internal",
          role: "Sandbox Guest",
          isGuest: true,
        });
        onClose();
        setFeedback(null);
      }, 1200);
    }, 600);
  };

  const handleSSOLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFeedback({
        type: "success",
        title: `${provider} SSO Authenticated`,
        message: `Single Sign-On handshake verified with ${provider}.`
      });
      setTimeout(() => {
        onLoginSuccess({
          email: `client@${provider.toLowerCase().replace(/\s+/g, "")}-tenant.com`,
          role: "SSO Verified User",
          isGuest: false,
        });
        onClose();
        setFeedback(null);
      }, 1200);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D0C09]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-lg w-full max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl mx-2 border border-[rgba(22,20,14,0.13)] shadow-[0_25px_60px_-15px_rgba(22,20,14,0.28)] overflow-hidden z-10 my-8"
          >
            {/* Top Recessed Header Compartment */}
            <div className="p-4 sm:p-6 bg-[#EFECE3] border-b border-[rgba(22,20,14,0.11)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white px-3 py-1.5 rounded-xl border border-[rgba(22,20,14,0.12)] shadow-xs flex items-center justify-center">
                  <img src="/logo.png" alt="Arsak Logo" className="h-6 w-auto object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10160A]">
                      Client Portal
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-[#BCEB28] text-[#0D1204] px-2 py-0.5 rounded-full">
                      Live
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0D0C09] font-['Space_Grotesk']">
                    Enterprise Portal Access
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF7F0] border border-[rgba(22,20,14,0.12)] flex items-center justify-center text-[#4A453A] hover:text-[#0D0C09] transition-colors shadow-xs cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 bg-white">
              {feedback ? (
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0D0C09] font-['Space_Grotesk']">
                    {feedback.title}
                  </h4>
                  <p className="text-sm text-[#4A453A] mt-2 max-w-xs font-medium leading-relaxed">
                    {feedback.message}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#059669] font-bold">
                    <Sparkles size={14} />
                    <span>Redirecting to Console...</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Mode Tab Switcher */}
                  <div className="grid grid-cols-2 p-1 rounded-xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.1)] text-xs font-mono font-bold">
                    <button
                      type="button"
                      onClick={() => setTab("signin")}
                      className={`py-2 rounded-lg transition-all cursor-pointer ${
                        tab === "signin"
                          ? "bg-white text-[#0D0C09] shadow-xs"
                          : "text-[#6B6557] hover:text-[#0D0C09]"
                      }`}
                    >
                      Client Sign In
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab("signup")}
                      className={`py-2 rounded-lg transition-all cursor-pointer ${
                        tab === "signup"
                          ? "bg-white text-[#0D0C09] shadow-xs"
                          : "text-[#6B6557] hover:text-[#0D0C09]"
                      }`}
                    >
                      Request Tenant Access
                    </button>
                  </div>

                  {/* 1-Click Enterprise SSO Providers */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6557]">
                      Enterprise Single Sign-On (SSO):
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleSSOLogin("Microsoft 365")}
                        disabled={isLoading}
                        className="p-2.5 rounded-xl border border-[rgba(22,20,14,0.12)] bg-[#FAF7F0] hover:bg-white hover:border-[#0D0C09] transition-all flex items-center justify-center gap-2 text-xs font-bold text-[#0D0C09] shadow-2xs cursor-pointer"
                      >
                        <Building2 size={15} className="text-[#0078D4]" />
                        <span>Microsoft 365</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSSOLogin("Google Workspace")}
                        disabled={isLoading}
                        className="p-2.5 rounded-xl border border-[rgba(22,20,14,0.12)] bg-[#FAF7F0] hover:bg-white hover:border-[#0D0C09] transition-all flex items-center justify-center gap-2 text-xs font-bold text-[#0D0C09] shadow-2xs cursor-pointer"
                      >
                        <Globe size={15} className="text-[#4285F4]" />
                        <span>Google Workspace</span>
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-full border-t border-[rgba(22,20,14,0.1)]" />
                    <span className="absolute bg-white px-3 text-[11px] font-mono text-[#6B6557] uppercase">
                      or with work email
                    </span>
                  </div>

                  {/* Email & Password Form */}
                  <form onSubmit={handleSignIn} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#4A453A] uppercase mb-1.5">
                        Work Email Address
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6557]" />
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.12)] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#0D0C09] placeholder-[#8A8475] focus:outline-none focus:border-[#0D0C09] focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    {tab === "signup" && (
                      <div>
                        <label className="block text-xs font-mono font-bold text-[#4A453A] uppercase mb-1.5">
                          Organization / Company Name
                        </label>
                        <div className="relative">
                          <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6557]" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Acme Global Logistics"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.12)] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#0D0C09] placeholder-[#8A8475] focus:outline-none focus:border-[#0D0C09] focus:bg-white transition-all font-medium"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-mono font-bold text-[#4A453A] uppercase">
                          Password / Access Key
                        </label>
                        {tab === "signin" && (
                          <button
                            type="button"
                            onClick={() => alert("Password reset link sent to work email.")}
                            className="text-[11px] font-mono text-[#059669] hover:underline font-bold"
                          >
                            Forgot?
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <KeyRound size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6557]" />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          placeholder="••••••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.12)] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-[#0D0C09] placeholder-[#8A8475] focus:outline-none focus:border-[#0D0C09] focus:bg-white transition-all font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B6557] hover:text-[#0D0C09] cursor-pointer"
                        >
                          {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    {/* Primary Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-lime w-full justify-center inline-flex items-center gap-2 py-3 px-6 rounded-full text-xs sm:text-sm font-bold shadow-md cursor-pointer disabled:opacity-50"
                      >
                        <span>{tab === "signin" ? "Sign In to Client Console" : "Request Enterprise Tenant"}</span>
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </button>
                    </div>
                  </form>

                  {/* Explore as Guest (Sandbox Demo Mode) - NO LOGIN REQUIRED */}
                  <div className="pt-2">
                    <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[rgba(22,20,14,0.11)] flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D0C09]">
                          <Zap size={14} className="text-[#059669]" />
                          <span>No Account Needed</span>
                        </div>
                        <div className="text-[11px] text-[#6B6557] font-medium mt-0.5">
                          Explore live telemetry without credentials.
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleGuestDemo}
                        disabled={isLoading}
                        className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold shrink-0 cursor-pointer shadow-xs"
                      >
                        <Sparkles size={13} className="text-[#B45309]" />
                        <span>Continue as Guest</span>
                      </button>
                    </div>
                  </div>

                  {/* Security Footnote */}
                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-[#6B6557]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#059669]" />
                      SOC 2 Type II · TLS 1.3
                    </span>
                    <span className="font-bold text-[#0D0C09]">Zero Data Retention</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
