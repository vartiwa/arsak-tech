import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, Sparkles, Building, Mail, User, MessageSquare } from "lucide-react";

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI & Workflow Automation",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "AI & Workflow Automation",
      message: ""
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D0C09]/50 backdrop-blur-md"
          />

          {/* Modal Card with Multi-Layer Physical Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-white border border-[rgba(22,20,14,0.14)] shadow-[0_25px_60px_-15px_rgba(22,20,14,0.25),0_8px_20px_rgba(22,20,14,0.08)] z-10 my-8 overflow-hidden"
          >
            {/* Top Specular Sheen & Lime Accent Bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#BCEB28]" />
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#E5DFD1] via-[#D8D1C1] to-[#E5DFD1] border-t border-[#D0C8B7]" />

            {/* Header Box */}
            <div className="px-6 sm:px-8 pt-7 pb-5 bg-[#EFECE3] border-b border-[rgba(22,20,14,0.11)] shadow-[inset_0_2px_4px_rgba(22,20,14,0.03)] flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#0D1204] bg-[#BCEB28] px-3 py-0.5 rounded-full mb-2 font-bold shadow-sm">
                  <Sparkles size={12} /> Direct Architecture Inquiry
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-[#0D0C09] tracking-tight font-['Space_Grotesk']">
                  Talk to Arsak Technologies
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-[#4A453A] hover:text-[#0D0C09] p-2 rounded-full hover:bg-white transition-colors border border-transparent hover:border-[rgba(22,20,14,0.12)] shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 sm:p-8 bg-white">
              {submitted ? (
                <div className="py-6 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] mb-4 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0D0C09] tracking-tight font-['Space_Grotesk']">
                    Blueprint Request Received
                  </h4>
                  <p className="text-[#4A453A] text-sm mt-2 max-w-sm leading-relaxed font-medium">
                    Thank you, <span className="text-[#0D0C09] font-bold">{formData.name}</span>. An Arsak automation architect will review your workflow specifications and respond within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-lime mt-6 inline-flex items-center justify-center px-8 py-3 rounded-full text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <p className="text-[#4A453A] text-xs leading-relaxed mb-1 font-medium">
                    Tell us about your processes. We'll design a customized AI automation blueprint for your enterprise stack.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0D0C09] mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6557]" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.14)] rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0D0C09] placeholder-[#8A8475] focus:border-[#0D0C09] focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D0C09] mb-1.5">Work Email *</label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6557]" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.14)] rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0D0C09] placeholder-[#8A8475] focus:border-[#0D0C09] focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0D0C09] mb-1.5">Company Name</label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6557]" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.14)] rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0D0C09] placeholder-[#8A8475] focus:border-[#0D0C09] focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D0C09] mb-1.5">Primary Focus</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.14)] rounded-xl px-3.5 py-2.5 text-sm text-[#0D0C09] focus:border-[#0D0C09] focus:bg-white transition-all font-semibold"
                      >
                        <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                        <option value="Document Processing & OCR">Document Processing & OCR</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="ERP & System Integration">ERP & System Integration</option>
                        <option value="Data & Analytics">Data & Analytics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D0C09] mb-1.5">Project Requirements</label>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-[#6B6557]" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your operational workflow, ERP, or systems you want to automate..."
                        className="w-full bg-[#FAF7F0] border border-[rgba(22,20,14,0.14)] rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0D0C09] placeholder-[#8A8475] focus:border-[#0D0C09] focus:bg-white transition-all resize-none font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-lime mt-2 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold cursor-pointer disabled:opacity-50"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {loading ? "Transmitting Specification…" : "Request Automation Blueprint"}
                  </button>
                <div className="mt-4 pt-3 border-t border-[rgba(22,20,14,0.08)] flex items-center justify-between text-[11px] font-mono text-[#6B6557]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      256-Bit TLS Encrypted · Mutual NDA Enforced
                    </span>
                    <span className="text-[#059669] font-bold">Zero-Retention</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
