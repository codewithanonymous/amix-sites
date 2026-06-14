"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2, Smartphone, LayoutDashboard, ShoppingBag, Building2, Cloud, ChevronDown,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  features: string[];
  color: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2, title: "Web Apps",
    blurb: "High-performance websites and web platforms.",
    features: ["Next.js / TanStack", "SEO & schema", "Edge hosting", "Analytics"],
    color: "#6366F1",
  },
  {
    icon: LayoutDashboard, title: "SaaS Products",
    blurb: "Multi-tenant platforms built to scale.",
    features: ["Auth & billing", "Admin panel", "API & webhooks", "Usage analytics"],
    color: "#8B5CF6",
  },
  {
    icon: Smartphone, title: "Mobile-First UX",
    blurb: "App-like experiences that feel native on phones.",
    features: ["Touch-first UI", "Offline-ready", "60fps motion", "PWA install"],
    color: "#06B6D4",
  },
  {
    icon: ShoppingBag, title: "E-Commerce",
    blurb: "Premium stores that turn visits into orders.",
    features: ["Stripe / Razorpay", "Cart & checkout", "Inventory", "Order ops"],
    color: "#14B8A6",
  },
  {
    icon: Building2, title: "Business Software",
    blurb: "HRM, School ERP, POS — tailored to your ops.",
    features: ["Role-based access", "Reports", "Workflows", "Integrations"],
    color: "#F59E0B",
  },
  {
    icon: Cloud, title: "Cloud & DevOps",
    blurb: "Reliable infra on AWS, Cloudflare and Supabase.",
    features: ["CI/CD", "Backups", "Monitoring", "Cost tuning"],
    color: "#0EA5E9",
  },
];

function Card({ s, i, open, onToggle }: { s: Service; i: number; open: boolean; onToggle: () => void }) {
  const Icon = s.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl bg-white/80 backdrop-blur-xl border border-white/70 p-4 shadow-[0_14px_36px_-20px_rgba(2,6,23,0.18)] ${open ? "col-span-2" : ""}`}
    >
      <motion.button
        layout
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-3 text-left"
      >
        <span
          className="grid size-10 shrink-0 place-items-center rounded-xl"
          style={{ background: `${s.color}14`, boxShadow: `inset 0 0 0 1px ${s.color}26` }}
        >
          <Icon className="size-5" style={{ color: s.color }} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-[16px] leading-tight text-foreground truncate">{s.title}</span>
          <span className="block text-[11px] text-foreground/55 truncate">{s.blurb}</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="size-4 text-foreground/50" />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 border-t border-foreground/8">
              <p className="text-[13px] text-foreground/70 leading-relaxed">{s.blurb}</p>
              <ul className="mt-3 grid grid-cols-2 gap-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-[12px] text-foreground/75">
                    <span className="size-1.5 rounded-full" style={{ background: s.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function MWhatWeDo() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="services" aria-label="What we do" className="relative px-4 py-12">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-flex rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/65 shadow-sm">
          What We Do
        </span>
        <h2 className="mt-3 font-display text-[28px] leading-[1.05] tracking-[-0.02em] text-foreground">
          Services <em className="italic gradient-text-static">crafted to ship</em>
        </h2>
      </motion.header>

      <motion.div layout className="mt-6 grid grid-cols-2 gap-3">
        {SERVICES.map((s, i) => (
          <Card
            key={s.title}
            s={s}
            i={i}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default MWhatWeDo;
