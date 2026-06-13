"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "ghost";
type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};
type LinkProps = CommonProps & { to: string; href?: never; onClick?: never; type?: never };
type AnchorProps = CommonProps & { href: string; to?: never; onClick?: never; type?: never; target?: string; rel?: string };
type ButtonProps = CommonProps & {
  onClick?: () => void;
  type?: "button" | "submit";
  to?: never;
  href?: never;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-cyber text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_14px_36px_-8px_rgba(139,92,246,0.7)]",
  glass:
    "bg-white border border-foreground/8 text-foreground hover:border-primary/30 hover:text-primary shadow-soft",
  ghost:
    "text-foreground/75 hover:text-foreground hover:bg-foreground/5",
};

function useMagnetic() {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);
  const onMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { ref, x, y, onMove, onLeave };
}

export function MagneticButton(props: LinkProps | AnchorProps | ButtonProps) {
  const { variant = "primary", className, children } = props;
  const m = useMagnetic();
  const base =
    "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 will-change-transform hover:-translate-y-0.5";

  const inner = (
    <motion.span
      ref={m.ref as any}
      style={{ x: m.x, y: m.y }}
      onMouseMove={m.onMove}
      onMouseLeave={m.onLeave}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.span>
  );

  if ("to" in props && props.to) {
    return <Link to={props.to}>{inner}</Link>;
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel}>
        {inner}
      </a>
    );
  }
  return (
    <button type={(props as ButtonProps).type ?? "button"} onClick={(props as ButtonProps).onClick}>
      {inner}
    </button>
  );
}
