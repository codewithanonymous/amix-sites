"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { BlurReveal } from "@/components/fx/BlurReveal";

const tech = [
  { name: "Firebase", slug: "firebase", color: "#F58220" },
  { name: "AWS", slug: "amazonaws", color: "#FF9900" },
  { name: "SQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
];

// Per-tech orbit ring + animation params (deterministic, not random)
const orbits = tech.map((t, i) => {
  const ring = i % 2; // 0 = inner ring, 1 = outer ring
  const perRing = 4;
  const idxInRing = Math.floor(i / 2);
  const angle = (idxInRing / perRing) * Math.PI * 2 + (ring ? Math.PI / perRing : 0);
  const duration = 38 + ring * 14 + (i % 3) * 4; // 38s..60s
  const direction = ring === 0 ? 1 : -1;
  return { ...t, ring, angle, duration, direction, floatDelay: (i * 0.4) % 2 };
});

export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ inner: 110, outer: 175 });
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  // Parallax (mouse on desktop, tilt-like for touch)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const py = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const parallaxX = useTransform(px, (v) => v * 18);
  const parallaxY = useTransform(py, (v) => v * 18);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) setSize({ inner: 95, outer: 150 });
      else if (w < 768) setSize({ inner: 115, outer: 180 });
      else if (w < 1024) setSize({ inner: 150, outer: 230 });
      else setSize({ inner: 180, outer: 280 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduce) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2))));
      my.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2))));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28" aria-label="Technology ecosystem">
      {/* gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.22), transparent 70%)" }} />
        <div className="absolute left-[15%] top-[20%] size-[280px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(56,189,248,0.22), transparent 70%)" }} />
        <div className="absolute right-[12%] bottom-[18%] size-[300px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(217,70,239,0.22), transparent 70%)" }} />
      </div>

      {/* particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1 rounded-full bg-primary/40"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
            animate={reduce ? undefined : { y: [0, -14, 0], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: (i % 5) * 0.4 }}
          />
        ))}
      </div>

      <BlurReveal>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-foreground/8 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-foreground/70 uppercase shadow-soft">
            <span className="size-1.5 rounded-full bg-cyber shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
            Tech We Love
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] text-foreground">
            Technology <em className="italic gradient-text-static">Ecosystem</em>
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">
            Production-grade tools we trust to ship fast and scale cleanly.
          </p>
        </div>
      </BlurReveal>

      {/* Orbit stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-10 md:mt-14"
        style={{
          width: "100%",
          maxWidth: 720,
          height: (size.outer + 80) * 2,
          maxHeight: "min(80vh, 720px)",
        }}
      >
        <motion.div className="absolute inset-0" style={{ x: parallaxX, y: parallaxY }}>
          {/* center hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid place-items-center size-28 md:size-36 rounded-full bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_30px_70px_-25px_rgba(99,102,241,0.45)]">
              <div aria-hidden className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.25), transparent 70%)" }} />
              <div className="relative text-center px-3">
                <div className="font-display text-[15px] md:text-lg text-foreground leading-tight">AMIX</div>
                <div className="text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-foreground/55 mt-0.5">Stack</div>
              </div>
            </div>
          </div>

          {/* orbit rings (visual guides) */}
          {[size.inner, size.outer].map((r, i) => (
            <div
              key={i}
              aria-hidden
              className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-foreground/10"
              style={{ width: r * 2, height: r * 2, transform: "translate(-50%, -50%)" }}
            />
          ))}

          {/* orbiting chips */}
          {orbits.map((o) => {
            const radius = o.ring === 0 ? size.inner : size.outer;
            return (
              <motion.div
                key={o.name}
                className="absolute left-1/2 top-1/2"
                style={{ width: 0, height: 0 }}
                initial={{ rotate: (o.angle * 180) / Math.PI }}
                animate={
                  reduce
                    ? { rotate: (o.angle * 180) / Math.PI }
                    : { rotate: [(o.angle * 180) / Math.PI, (o.angle * 180) / Math.PI + 360 * o.direction] }
                }
                transition={reduce ? undefined : { duration: o.duration, repeat: Infinity, ease: "linear" }}
              >
                {/* offset to radius */}
                <div style={{ transform: `translate(${radius}px, 0)` }}>
                  {/* counter-rotate so chip stays upright + add gentle float */}
                  <motion.div
                    animate={
                      reduce
                        ? undefined
                        : { rotate: [0, -360 * o.direction], y: [0, -6, 0, 6, 0] }
                    }
                    transition={
                      reduce
                        ? undefined
                        : {
                            rotate: { duration: o.duration, repeat: Infinity, ease: "linear" },
                            y: { duration: 4 + o.floatDelay, repeat: Infinity, ease: "easeInOut", delay: o.floatDelay },
                          }
                    }
                    style={{ x: "-50%", y: "-50%" }}
                  >
                    <TechChip
                      tech={o}
                      active={active === o.name}
                      onActivate={(v) => setActive(v ? o.name : (cur) => (cur === o.name ? null : cur))}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

function TechChip({
  tech,
  active,
  onActivate,
}: {
  tech: { name: string; slug: string; color: string };
  active: boolean;
  onActivate: (v: boolean) => void;
}) {
  return (
    <motion.button
      type="button"
      aria-label={tech.name}
      onHoverStart={() => onActivate(true)}
      onHoverEnd={() => onActivate(false)}
      onTapStart={() => onActivate(true)}
      onTap={() => onActivate(false)}
      whileTap={{ scale: 1.08 }}
      animate={{ scale: active ? 1.12 : 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="group relative inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/70 pl-2 pr-3.5 py-1.5 md:pl-2.5 md:pr-4 md:py-2 shadow-[0_14px_30px_-14px_rgba(15,23,42,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ ["--brand" as any]: tech.color }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ boxShadow: `0 18px 44px -16px ${tech.color}66, inset 0 0 0 1px ${tech.color}33` }}
      />
      <span className="grid place-items-center size-6 md:size-7 rounded-full bg-white shadow-soft">
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          className="size-3.5 md:size-4"
        />
      </span>
      <span className="text-[11px] md:text-[12px] font-semibold text-foreground/80 whitespace-nowrap">{tech.name}</span>
    </motion.button>
  );
}
