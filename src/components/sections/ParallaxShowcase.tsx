"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Aurora } from "@/components/fx/GradientMesh";

export function ParallaxShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-48" aria-label="Our approach">
      <Aurora />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />

      <motion.div style={{ y: y2 }} aria-hidden className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <motion.div style={{ y: y1 }} aria-hidden className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <motion.div style={{ scale }} className="relative mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-display text-[clamp(2rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-tight">
          We don't just build websites.<br />
          <span className="gradient-text">We build digital ecosystems.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          End-to-end product engineering — from first wireframe to cloud deployment, monitoring, and scale.
        </p>
      </motion.div>
    </section>
  );
}
