"use client";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Rocket, Users, Star, Timer } from "lucide-react";
import { projects } from "@/config/projects";

const STATS = [
  { icon: Rocket, label: "Projects shipped", value: "50+", color: "#6366F1" },
  { icon: Users,  label: "Happy clients",    value: "40+", color: "#8B5CF6" },
  { icon: Star,   label: "Avg rating",       value: "4.9", color: "#F59E0B" },
  { icon: Timer,  label: "Avg delivery",     value: "3wk", color: "#06B6D4" },
];

export function MProductsShipped() {
  const feature = projects[0];

  return (
    <section id="work" aria-label="Products shipped" className="relative px-4 py-12">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-flex rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/65 shadow-sm">
          Products Shipped
        </span>
        <h2 className="mt-3 font-display text-[28px] leading-[1.05] tracking-[-0.02em] text-foreground">
          Real work, <em className="italic gradient-text-static">real results</em>
        </h2>
      </motion.header>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {/* Large feature tile */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-2 relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_22px_50px_-24px_rgba(2,6,23,0.25)]"
        >
          <Link
            to="/projects/$slug"
            params={{ slug: feature.slug }}
            className="block"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-foreground/70">
                Featured
              </span>
              <div className="absolute inset-x-3 bottom-3 text-white">
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-85">{feature.category}</div>
                <div className="mt-1 font-display text-[22px] leading-tight">{feature.name}</div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 4 small stat tiles */}
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 shadow-[0_14px_36px_-22px_rgba(2,6,23,0.2)]"
            >
              <span
                className="grid size-9 place-items-center rounded-xl"
                style={{ background: `${s.color}14`, boxShadow: `inset 0 0 0 1px ${s.color}26` }}
              >
                <Icon className="size-4" style={{ color: s.color }} />
              </span>
              <div className="mt-3 font-display text-[24px] leading-none text-foreground">{s.value}</div>
              <div className="mt-1 text-[11px] text-foreground/55">{s.label}</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 flex justify-center"
      >
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 rounded-full bg-white border border-foreground/10 px-5 py-3 text-[13px] font-semibold text-foreground shadow-soft hover:border-primary/30 hover:text-primary transition"
        >
          View all projects
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}

export default MProductsShipped;
