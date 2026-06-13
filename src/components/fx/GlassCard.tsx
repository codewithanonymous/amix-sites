"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  glow?: "blue" | "purple" | "cyan" | "none";
  tilt?: boolean;
  children: React.ReactNode;
};

/** Light glassmorphic card with optional 3D tilt + soft glow. */
export function GlassCard({
  className,
  glow = "blue",
  tilt = true,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pointerFine, setPointerFine] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  useEffect(() => {
    setPointerFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!tilt || !pointerFine) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const hoverGlow =
    glow === "blue" ? "hover:shadow-[0_30px_70px_-30px_rgba(99,102,241,0.45)]" :
    glow === "purple" ? "hover:shadow-[0_30px_70px_-30px_rgba(139,92,246,0.45)]" :
    glow === "cyan" ? "hover:shadow-[0_30px_70px_-30px_rgba(6,182,212,0.45)]" : "";

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt && pointerFine ? { rotateX: rx, rotateY: ry, transformPerspective: 1200 } : undefined}
      className={cn(
        "relative rounded-3xl bg-white/80 backdrop-blur-xl border border-foreground/8 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/20",
        hoverGlow,
        className
      )}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
}
