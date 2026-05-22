"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { GradientMesh, Aurora } from "@/components/fx/GradientMesh";
import { ParticleField } from "@/components/fx/ParticleField";
import { Spotlight } from "@/components/fx/Spotlight";

function FloatingMock({
  className,
  delay,
  children,
}: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute glass gradient-border rounded-2xl p-4 animate-float ${className ?? ""}`}
      style={{ animationDelay: `${delay ?? 0}s`, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-36 pb-24"
      aria-label="Hero"
    >
      <GradientMesh />
      <Aurora />
      <Spotlight />
      <ParticleField density={70} />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex w-fit items-center gap-2 rounded-full glass gradient-border px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase"
            >
              <Sparkles className="size-3.5 text-cyan-glow" />
              Modern Software Studio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.25rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight"
            >
              Building <span className="gradient-text">Intelligent Software</span> Solutions For Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl"
            >
              Web • SaaS • Restaurant QR Ordering • HRM • School ERP • Cloud
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3"
            >
              <MagneticButton to="/contact" variant="primary">
                Get Started <ArrowRight className="ml-1.5 size-4" />
              </MagneticButton>
              <MagneticButton to="/products" variant="glass">
                <PlayCircle className="mr-1.5 size-4" /> Live Demo
              </MagneticButton>
              <MagneticButton to="/contact" variant="ghost">
                Contact Us
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="relative h-[440px] md:h-[520px] hidden lg:block"
          >
            <FloatingMock delay={0.2} className="top-4 left-2 w-[68%] glow-blue">
              <div className="text-[10px] font-semibold text-cyan-glow tracking-wider uppercase">Analytics</div>
              <div className="mt-2 flex items-end gap-1 h-24">
                {[40, 65, 55, 80, 60, 90, 75, 95, 70, 88].map((v, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-cyber" style={{ height: `${v}%`, opacity: 0.7 + i * 0.03 }} />
                ))}
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                <div><div className="text-muted-foreground">MRR</div><div className="font-bold">$48k</div></div>
                <div><div className="text-muted-foreground">Users</div><div className="font-bold">12.4k</div></div>
                <div><div className="text-muted-foreground">Churn</div><div className="font-bold">1.2%</div></div>
              </div>
            </FloatingMock>

            <FloatingMock delay={0.55} className="top-32 right-0 w-[58%] glow-purple">
              <div className="text-[10px] font-semibold text-accent tracking-wider uppercase">Kitchen Orders</div>
              <ul className="mt-2 space-y-1.5 text-xs">
                {["#A21 · Table 4 · 3 items", "#A22 · Table 7 · 1 item", "#A23 · Takeaway · 5 items"].map((t) => (
                  <li key={t} className="flex items-center justify-between rounded-md bg-white/5 px-2.5 py-1.5">
                    <span className="text-foreground/90">{t}</span>
                    <span className="size-1.5 rounded-full bg-cyan-glow animate-pulse" />
                  </li>
                ))}
              </ul>
            </FloatingMock>

            <FloatingMock delay={0.85} className="bottom-2 left-10 w-[52%] glow-cyan">
              <div className="text-[10px] font-semibold text-cyan-glow tracking-wider uppercase">Attendance</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative size-16">
                  <div className="absolute inset-0 rounded-full bg-cyber opacity-30" />
                  <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center text-sm font-bold">94%</div>
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
