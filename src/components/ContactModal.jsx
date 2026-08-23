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

  // Close on Escape key
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
    // Simulate high-converting enterprise inquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl shadow-purple-500/10 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 mb-4">
                  <CheckCircle2 size={30} />
                </div>
                <h3 id="modal-title" className="text-xl font-semibold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Inquiry Received
                </h3>
                <p className="text-zinc-400 text-sm mt-2 max-w-sm leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. An Arsak automation architect will review your workflow requirements and reach out within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
                  <Sparkles size={14} /> Start a Conversation
                </div>
                <h3 id="modal-title" className="text-2xl font-semibold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Talk to Arsak Technologies
                </h3>
                <p className="text-zinc-400 text-sm mt-1 mb-6 leading-relaxed">
                  Tell us about your processes. We'll design a customized AI & software automation blueprint.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">Work Email *</label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">Company Name</label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">Primary Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      >
                        <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                        <option value="Document Processing & OCR">Document Processing & OCR</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="ERP & System Integration">ERP & System Integration</option>
                        <option value="Data & Analytics">Data & Analytics</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">Project Scope or Questions</label>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-3 top-3 text-zinc-500" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe the repetitive workflow or systems you'd like to connect..."
                        className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-zinc-200 disabled:opacity-50 transition-colors"
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {loading ? "Sending Blueprint Request…" : "Request Automation Blueprint"}
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
