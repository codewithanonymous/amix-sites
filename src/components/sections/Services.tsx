"use client";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2, Layers, QrCode, Users, GraduationCap, Cloud } from "lucide-react";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";

const services = [
  { icon: Code2, title: "Web Development", desc: "Business sites, dashboards, e-commerce, full-stack apps built for scale and speed.", color: "from-indigo-500 to-blue-500" },
  { icon: Layers, title: "SaaS Products", desc: "Subscription platforms, CRMs, multi-tenant systems with billing and analytics.", color: "from-violet-500 to-fuchsia-500" },
  { icon: QrCode, title: "QR Ordering", desc: "QR menus, table ordering, kitchen dashboards and billing for restaurants.", color: "from-cyan-500 to-teal-500" },
  { icon: Users, title: "HRM Software", desc: "Employees, attendance, payroll and leave — one unified people platform.", color: "from-indigo-500 to-sky-500" },
  { icon: GraduationCap, title: "School ERP", desc: "Student portal, fees, parent app, staff and exams — one campus OS.", color: "from-purple-500 to-pink-500" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS deployment, VPS hosting, scaling, CI/CD and infra monitoring.", color: "from-teal-500 to-cyan-500" },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-28" aria-label="Services">
      <BlurReveal>
        <SectionHeading
          eyebrow="What We Do"
          title={<>Software built to <em className="italic gradient-text-static">move your business</em> forward</>}
          subtitle="Six focused practices. One integrated team."
        />
      </BlurReveal>

      <div className="mx-auto mt-10 md:mt-14 grid max-w-7xl gap-3 md:gap-4 px-4 grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isOpen = open === i;
          return (
            <BlurReveal key={s.title} delay={i * 0.05}>
              <motion.button
                type="button"
                layout
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`group relative w-full text-left rounded-2xl bg-white/80 backdrop-blur-xl border border-foreground/8 p-4 md:p-5 shadow-soft hover:shadow-[0_20px_44px_-22px_rgba(99,102,241,0.4)] hover:border-primary/25 transition-all duration-400 overflow-hidden ${isOpen ? "ring-1 ring-primary/30" : ""}`}
              >
                <motion.div layout="position" className="flex items-start gap-3">
                  <span className={`inline-flex size-10 md:size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-[0_10px_24px_-10px_rgba(99,102,241,0.55)]`}>
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans text-sm md:text-base font-semibold text-foreground leading-tight">{s.title}</h3>
                  </div>
                  <ChevronDown className={`size-4 shrink-0 text-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </motion.div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </BlurReveal>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
          Explore all services <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
