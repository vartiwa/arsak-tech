import {
  FileText, ShieldCheck, Layers, Database, AlertTriangle, Puzzle,
  Mail, FileSpreadsheet, Building2, Truck, ShoppingCart,
  Landmark, HeartPulse, GraduationCap, Briefcase, Rocket, Webhook, Sparkles,
  Users, Code2, Workflow, ScanLine, BarChart3, TrendingDown, TrendingUp, Gauge
} from "lucide-react";

export const ACCENT = {
  blue:   { text: "text-blue-400",   border: "border-blue-500/25",   bg: "bg-blue-500/10",   dot: "#3b82f6", ring: "hover:border-blue-500/50" },
  cyan:   { text: "text-sky-400",    border: "border-sky-500/25",    bg: "bg-sky-500/10",    dot: "#38bdf8", ring: "hover:border-sky-500/50" },
  purple: { text: "text-indigo-400", border: "border-indigo-500/25", bg: "bg-indigo-500/10", dot: "#818cf8", ring: "hover:border-indigo-500/50" },
  green:  { text: "text-emerald-400",border: "border-emerald-500/25",bg: "bg-emerald-500/10",dot: "#10b981", ring: "hover:border-emerald-500/50" },
  orange: { text: "text-amber-400",  border: "border-amber-500/25",  bg: "bg-amber-500/10",  dot: "#f59e0b", ring: "hover:border-amber-500/50" },
};

export const NAV_LINKS = ["Solutions", "Industries", "Services", "About"];

export const VALUE = [
  { n: "01", title: "Automation", desc: "Automate repetitive business processes end-to-end.", icon: Workflow, accent: "blue" },
  { n: "02", title: "Software", desc: "Build tailored, scalable digital products and internal tools.", icon: Code2, accent: "purple" },
  { n: "03", title: "Integration", desc: "Connect legacy ERP, modern CRMs, and unified databases.", icon: Webhook, accent: "green" },
];

export const PROBLEMS = [
  { icon: FileText, title: "Manual Data Entry & Document Processing" },
  { icon: Puzzle, title: "Disconnected Siloed Systems" },
  { icon: AlertTriangle, title: "Operational & Compliance Errors" },
];

export const SOLUTIONS = [
  { icon: ScanLine, title: "AI & Document Automation", desc: "Extract, validate, and route data from invoices, contracts, and unstructured files.", accent: "blue" },
  { icon: Workflow, title: "Workflow Automation", desc: "Streamline multi-step approvals, departmental handoffs, and ops tasks.", accent: "purple" },
  { icon: FileSpreadsheet, title: "Intelligent Data Extraction", desc: "Convert incoming emails, spreadsheets, and PDFs into structured records.", accent: "cyan" },
  { icon: Code2, title: "Custom Enterprise Software", desc: "Scalable internal dashboards, client portals, and bespoke applications.", accent: "green" },
  { icon: Webhook, title: "System Integration", desc: "Bi-directional sync between ERPs, CRMs, payment gateways, and databases.", accent: "orange" },
  { icon: BarChart3, title: "Real-time Data & Analytics", desc: "Live operational telemetry and interactive executive dashboards.", accent: "blue" },
];

export const STEPS = [
  { n: "01", title: "Discover", desc: "Audit manual workflows and identify high-ROI automation targets." },
  { n: "02", title: "Design", desc: "Architect resilient pipelines and secure system integrations." },
  { n: "03", title: "Build", desc: "Develop AI models, automations, and custom interfaces." },
  { n: "04", title: "Integrate", desc: "Seamlessly connect into your existing ERP, CRM, and cloud tools." },
  { n: "05", title: "Improve", desc: "Continuously monitor throughput, accuracy, and exception handling." },
];

export const LAYERS = [
  { title: "Input", items: ["Email", "PDF / Scans", "Excel / CSV", "Webhooks / APIs"], accent: "cyan" },
  { title: "AI + Automation", items: ["OCR & Extraction", "Schema Validation", "Business Logic"], accent: "purple" },
  { title: "Integrations", items: ["SAP / Oracle / ERP", "Salesforce / CRM", "PostgreSQL / Cloud"], accent: "blue" },
  { title: "Output", items: ["Live Analytics", "Automated Actions", "Audit Reports"], accent: "green" },
];

export const INDUSTRIES_VISUAL = [
  { icon: Building2, title: "Manufacturing", accent: "blue" },
  { icon: Truck, title: "Logistics & Supply Chain", accent: "cyan" },
  { icon: HeartPulse, title: "Healthcare & Biotech", accent: "purple" },
  { icon: ShoppingCart, title: "Retail & E-Commerce", accent: "green" },
];

export const INDUSTRIES_COMPACT = [
  { icon: Landmark, title: "Banking & Finance" },
  { icon: GraduationCap, title: "Education & EdTech" },
  { icon: Briefcase, title: "Professional Services" },
  { icon: Rocket, title: "High-Growth Startups" },
];

export const SERVICES = [
  "AI & Machine Learning",
  "Custom Software Development",
  "Process Automation (RPA)",
  "API & ERP Integration",
  "Cloud Architecture",
  "Data Analytics & BI"
];

export const MANUAL_FLOW = ["PDF Received", "Manual Entry", "Spreadsheet Check", "Line Verification", "Manual ERP Entry"];
export const ARSAK_FLOW = ["PDF Received", "AI Auto-Extraction", "Schema Validation", "Automated Routing", "Instant ERP Sync"];

export const DEMO_STEPS = ["Document Received", "AI Parsing & OCR", "Automated Validation", "ERP Sync Complete"];
export const DEMO_RESULT = {
  "Customer": "ABC Industries Ltd.",
  "Invoice No": "#INV-2048",
  "Line Items": "14 Items Verified",
  "Total Amount": "₹84,500.00",
  "Confidence Score": "99.8%",
  "ERP Status": "Synchronized"
};

export const STATS = [
  { label: "Average Automation Rate", to: 78, suffix: "%", icon: Gauge, accent: "blue" },
  { label: "Weekly Tasks Automated", to: 1284, suffix: "+", icon: TrendingUp, accent: "purple" },
  { label: "Cycle Time Reduction", to: 42, prefix: "-", suffix: "%", icon: TrendingDown, accent: "green" },
  { label: "Error Rate Reduction", to: 94, suffix: "%", icon: AlertTriangle, accent: "orange" },
];

export const INTEGRATION_CATEGORIES = [
  { name: "ERP Systems", accent: "blue" },
  { name: "CRM Platforms", accent: "purple" },
  { name: "SQL & NoSQL DBs", accent: "cyan" },
  { name: "AWS & GCP Cloud", accent: "green" },
  { name: "Custom REST/GraphQL APIs", accent: "orange" },
];

export const WHY = [
  { icon: Users, title: "Business First", desc: "We design technology around your specific operational workflows, not off-the-shelf templates.", accent: "blue" },
  { icon: Layers, title: "Enterprise Scalability", desc: "Modular, cloud-native architecture built to scale effortlessly with your volume.", accent: "purple" },
  { icon: ShieldCheck, title: "Security & Reliability", desc: "Rigorous data encryption, compliance-ready audit trails, and 99.9% uptime reliability.", accent: "green" },
];
