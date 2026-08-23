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
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-[#C0EB3A]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#EAF7B8] flex items-center justify-center text-[#10160A] mb-4">
                  <CheckCircle2 size={30} />
                </div>
                <h3 id="modal-title" className="text-xl font-bold text-[#0F1524] tracking-tight">
                  Blueprint Request Received
                </h3>
                <p className="text-[#475569] text-sm mt-2 max-w-sm leading-relaxed">
                  Thank you, <span className="text-[#0F1524] font-semibold">{formData.name}</span>. An Arsak automation architect will review your workflow specifications and respond within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-lime mt-6 inline-flex items-center justify-center px-7 py-2.5 rounded-full text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[#0F1524] bg-[#EAF7B8] px-3 py-1 rounded-full mb-3 font-semibold">
                  <Sparkles size={13} /> Direct Architecture Inquiry
                </div>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#0F1524] tracking-tight">
                  Talk to Arsak Technologies
                </h3>
                <p className="text-[#475569] text-sm mt-1 mb-6 leading-relaxed">
                  Tell us about your processes. We'll design a customized AI automation blueprint for your stack.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1524] mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0F1524] placeholder-slate-400 focus:border-[#C0EB3A] focus:ring-1 focus:ring-[#C0EB3A] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1524] mb-1.5">Work Email *</label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0F1524] placeholder-slate-400 focus:border-[#C0EB3A] focus:ring-1 focus:ring-[#C0EB3A] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1524] mb-1.5">Company Name</label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0F1524] placeholder-slate-400 focus:border-[#C0EB3A] focus:ring-1 focus:ring-[#C0EB3A] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1524] mb-1.5">Primary Focus</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-[#0F1524] focus:border-[#C0EB3A] focus:ring-1 focus:ring-[#C0EB3A] transition-colors font-medium"
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
                    <label className="block text-xs font-semibold text-[#0F1524] mb-1.5">Project Requirements</label>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-3 top-3.5 text-slate-400" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your operational workflow, ERP, or systems you want to automate..."
                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#0F1524] placeholder-slate-400 focus:border-[#C0EB3A] focus:ring-1 focus:ring-[#C0EB3A] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-lime mt-2 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold cursor-pointer disabled:opacity-50"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {loading ? "Transmitting Specification…" : "Request Automation Blueprint"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
