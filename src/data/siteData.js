import {
  Globe, Layout, Smartphone, Sparkles, Code2,
  Building2, ShoppingBag, Stethoscope, Briefcase, GraduationCap,
  Truck, ShieldCheck, Zap, Gauge, Clock,
  MessageSquare, Utensils, Home
} from "lucide-react";

export const ACCENT = {
  blue:   { text: "text-blue-700",   border: "border-blue-200",   bg: "bg-blue-50",   dot: "#2563eb", ring: "hover:border-blue-400" },
  cyan:   { text: "text-sky-800",    border: "border-sky-200",    bg: "bg-sky-50",    dot: "#0284c7", ring: "hover:border-sky-400" },
  purple: { text: "text-indigo-700", border: "border-indigo-200", bg: "bg-indigo-50", dot: "#4f46e5", ring: "hover:border-indigo-400" },
  green:  { text: "text-emerald-700",border: "border-emerald-200",bg: "bg-emerald-50",dot: "#059669", ring: "hover:border-emerald-400" },
  orange: { text: "text-amber-800",  border: "border-amber-200",  bg: "bg-amber-50",  dot: "#d97706", ring: "hover:border-amber-400" },
};

export const VALUE = [
  { n: "01", title: "Modern Business Websites", desc: "Clean, fast websites that look great on phones and turn visitors into real customers.", icon: Layout, accent: "blue" },
  { n: "02", title: "Online Stores & Booking", desc: "Sell products with UPI payments or let clients easily book appointments 24/7.", icon: ShoppingBag, accent: "purple" },
  { n: "03", title: "Simple WhatsApp Alerts", desc: "Get instant WhatsApp notifications when a customer fills a form or asks for a quote.", icon: Zap, accent: "green" },
];

export const PROBLEMS = [
  { icon: Globe, title: "Outdated, slow website that makes visitors leave" },
  { icon: Smartphone, title: "Hard to navigate on mobile phones" },
  { icon: MessageSquare, title: "Losing customer inquiries due to slow manual replies" },
];

export const SOLUTIONS = [
  { icon: Globe, title: "Company & Business Websites", desc: "Clean, professional websites with 1-tap WhatsApp and call buttons that build trust with new clients.", accent: "blue" },
  { icon: ShoppingBag, title: "Online Stores (E-Commerce)", desc: "Simple online storefronts with instant UPI, Google Pay, and credit card payments.", accent: "purple" },
  { icon: Clock, title: "Appointment & Service Booking", desc: "Automatic booking calendars for clinics, consultants, salons, and home services.", accent: "cyan" },
  { icon: MessageSquare, title: "Instant WhatsApp Alerts", desc: "Get customer names, phone numbers, and inquiries delivered straight to your WhatsApp.", accent: "green" },
  { icon: Code2, title: "Client Portals & Dashboards", desc: "Simple private login areas for your customers to see quotes, receipts, or project progress.", accent: "orange" },
  { icon: Sparkles, title: "Custom Business Tools", desc: "Tailored digital tools to easily manage your daily billing, inventory, or customer lists.", accent: "blue" },
];

export const STEPS = [
  { n: "01", title: "Share Your Vision", desc: "Tell us about your business, the services you offer, and what you'd like on your website." },
  { n: "02", title: "Design & Preview", desc: "We design a clean, modern layout and share a live interactive preview for your feedback." },
  { n: "03", title: "Fast Development", desc: "We build your site to load ultra-fast on mobile phones, tablets, and computers." },
  { n: "04", title: "Review & Launch", desc: "We connect your domain name, set up your contact forms, and launch your site live." },
  { n: "05", title: "Support & Updates", desc: "We help you update content, add new products, and keep your website running smoothly." },
];

export const LAYERS = [
  { title: "Design & Layout", items: ["Custom Mobile Design", "High-Resolution Images", "Fast Loading Pages", "Clean Typography"], accent: "cyan" },
  { title: "Customer Actions", items: ["1-Tap WhatsApp Button", "Direct Phone Call Link", "Instant Contact Form", "Google Map Location"], accent: "purple" },
  { title: "Payments & Orders", items: ["UPI / Google Pay", "Credit / Debit Cards", "Instant PDF Receipts", "Order Confirmation SMS"], accent: "blue" },
  { title: "Hosting & Peace of Mind", items: ["Free SSL Certificate", "99.9% Reliable Uptime", "Google Search Setup", "Daily Automatic Backups"], accent: "green" },
];

export const INDUSTRIES_VISUAL = [
  { icon: Building2, title: "Local Businesses & Shops", accent: "blue" },
  { icon: ShoppingBag, title: "Retail & E-Commerce Brands", accent: "purple" },
  { icon: Stethoscope, title: "Clinics & Doctors", accent: "cyan" },
  { icon: Briefcase, title: "Consultants & Agencies", accent: "green" },
];

export const INDUSTRIES_COMPACT = [
  { icon: Home, title: "Real Estate & Interiors" },
  { icon: Utensils, title: "Restaurants & Cafes" },
  { icon: GraduationCap, title: "Coaching & Education" },
  { icon: Truck, title: "Logistics & Services" },
];

export const SERVICES = [
  "Modern Website Design",
  "Online Stores & E-Commerce",
  "Appointment Booking Systems",
  "WhatsApp & Lead Automation",
  "Mobile Optimization & Speed Fix",
  "Custom Business Software"
];

export const MANUAL_FLOW = [
  "Customer lands on slow website",
  "Cannot find phone number or pricing",
  "Leaves website without contacting",
  "Business loses a potential customer"
];

export const ARSAK_FLOW = [
  "Customer lands on fast mobile site",
  "Taps 1-click WhatsApp or booking button",
  "Gets instant reply & answers",
  "Deal closed with zero delay"
];

export const DEMO_STEPS = [
  "Visitor Inquires on Website",
  "Instant AI Response & Qualification",
  "Automated WhatsApp & Email Confirmation",
  "Synced Directly to Admin CRM"
];

export const DEMO_RESULT = {
  "Customer": "Acme Retail Ltd.",
  "Project Type": "E-Commerce + WhatsApp Suite",
  "Delivery Timeline": "14 Days",
  "PageSpeed Score": "99 / 100",
  "Conversion Uplift": "+340%",
  "Status": "Live in Production"
};

export const STATS = [
  { label: "Page Load Speed", to: 1, prefix: "< ", suffix: " Sec", icon: Gauge, accent: "blue" },
  { label: "Mobile Compatibility", to: 100, suffix: "%", icon: Smartphone, accent: "green" },
  { label: "Average Delivery Time", to: 14, suffix: " Days", icon: Clock, accent: "purple" },
  { label: "Client Satisfaction", to: 100, suffix: "%", icon: ShieldCheck, accent: "orange" },
];

export const WHY = [
  { title: "Clean & Custom Built", desc: "No bloated, slow templates. Every website is built fresh for speed, clear readability, and real customer inquiries.", icon: Sparkles, accent: "blue" },
  { title: "100% Mobile Optimized", desc: "Most of your customers will visit from their phones. We ensure your website looks stunning on every mobile screen.", icon: Smartphone, accent: "purple" },
  { title: "Grow At Your Own Pace", desc: "Start with a simple business website today, and easily add an online store, booking tools, or custom software as you expand.", icon: Zap, accent: "green" }
];

export const INTEGRATION_CATEGORIES = [
  { name: "WhatsApp Business", accent: "green" },
  { name: "UPI / Google Pay / Razorpay", accent: "blue" },
  { name: "Google Calendar", accent: "purple" },
  { name: "Google Sheets & CRM", accent: "cyan" },
  { name: "Instagram & Social Links", accent: "orange" }
];
