"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GradientMesh } from "@/components/fx/GradientMesh";
import { ParticleField } from "@/components/fx/ParticleField";

function FloatingMock({
  className,
  delay,
  children,
}: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-2xl bg-white/85 backdrop-blur-xl border border-foreground/8 p-4 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] animate-float ${className ?? ""}`}
      style={{ animationDelay: `${delay ?? 0}s`, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

function scrollToProjects() {
  const el = document.getElementById("projects");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-36 pb-24 bg-white"
      aria-label="Hero"
    >
      <GradientMesh />
      <ParticleField density={40} />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-6 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white border border-foreground/8 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/70 shadow-soft"
            >
              <Sparkles className="size-3.5 text-primary" />
              Modern Software Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6.4vw,5.25rem)] leading-[0.98] tracking-[-0.02em] text-foreground"
            >
              Building <em className="not-italic gradient-text-static italic font-display">Modern Digital Products</em> That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="text-sm md:text-base font-medium text-foreground/65"
            >
              Web Application Developer · SaaS Product Developer · UI/UX Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              We create high-performance websites, SaaS platforms, business software, and digital experiences that help companies grow faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-cyber px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(99,102,241,0.65)] hover:shadow-[0_18px_44px_-10px_rgba(139,92,246,0.75)] transition-all hover:-translate-y-0.5"
              >
                <CalendarCheck className="size-4" />
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-foreground/10 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all hover:-translate-y-0.5 shadow-soft"
              >
                View Recent Projects
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-4 flex items-center gap-5 text-xs text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <span key={i} className="size-7 rounded-full border-2 border-white bg-gradient-to-br from-primary/40 to-accent/40" />
                ))}
              </div>
              <span><strong className="text-foreground font-semibold">50+ teams</strong> shipped with us</span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="relative h-[440px] md:h-[520px] hidden lg:block"
          >
            <FloatingMock delay={0.2} className="top-4 left-2 w-[68%]">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">Analytics</div>
                <span className="text-[10px] font-semibold text-foreground/40">Last 30d</span>
              </div>
              <div className="mt-3 flex items-end gap-1 h-24">
                {[40, 65, 55, 80, 60, 90, 75, 95, 70, 88].map((v, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-cyber" style={{ height: `${v}%`, opacity: 0.55 + i * 0.04 }} />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div><div className="text-foreground/50 text-[10px] uppercase tracking-wider">MRR</div><div className="font-semibold text-foreground">$48k</div></div>
                <div><div className="text-foreground/50 text-[10px] uppercase tracking-wider">Users</div><div className="font-semibold text-foreground">12.4k</div></div>
                <div><div className="text-foreground/50 text-[10px] uppercase tracking-wider">Churn</div><div className="font-semibold text-foreground">1.2%</div></div>
              </div>
            </FloatingMock>

            <FloatingMock delay={0.55} className="top-36 right-0 w-[58%]">
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-accent">Kitchen Orders</div>
              <ul className="mt-2.5 space-y-1.5 text-xs">
                {["#A21 · Table 4 · 3 items", "#A22 · Table 7 · 1 item", "#A23 · Takeaway · 5 items"].map((t) => (
                  <li key={t} className="flex items-center justify-between rounded-lg bg-foreground/[0.03] px-2.5 py-2">
                    <span className="text-foreground/85 font-medium">{t}</span>
                    <span className="size-1.5 rounded-full bg-cyan-glow animate-pulse" />
                  </li>
                ))}
              </ul>
            </FloatingMock>

            <FloatingMock delay={0.85} className="bottom-2 left-10 w-[52%]">
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-cyan-glow">Attendance</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative size-16">
                  <div className="absolute inset-0 rounded-full bg-cyber opacity-90" />
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center text-sm font-bold text-foreground">94%</div>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> Present 188</div>
                  <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-accent" /> Leave 8</div>
                  <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-cyan-glow" /> Late 4</div>
                </div>
              </div>
            </FloatingMock>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
