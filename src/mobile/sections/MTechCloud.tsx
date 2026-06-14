"use client";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Tech = {
  name: string;
  slug: string;
  color: string;
  desc: string;
  /** Organic placement in % within the cloud area */
  x: number;
  y: number;
  /** Visual scale of chip */
  s?: number;
};

const TECH: Tech[] = [
  { name: "Firebase",   slug: "firebase",   color: "#F58220", desc: "Realtime data, auth & hosting at Google scale.", x: 14, y: 12, s: 1.0 },
  { name: "AWS",        slug: "amazonaws",  color: "#FF9900", desc: "Cloud infrastructure that scales to millions.",  x: 64, y: 6,  s: 1.1 },
  { name: "MongoDB",    slug: "mongodb",    color: "#47A248", desc: "Flexible document database for modern apps.",     x: 40, y: 28, s: 1.05 },
  { name: "SQL",        slug: "postgresql", color: "#4169E1", desc: "Battle-tested relational data, done right.",      x: 8,  y: 46, s: 0.95 },
  { name: "Node.js",    slug: "nodedotjs",  color: "#5FA04E", desc: "Fast, event-driven server runtime.",              x: 70, y: 42, s: 1.0 },
  { name: "TypeScript", slug: "typescript", color: "#3178C6", desc: "Type-safe JavaScript at every layer.",            x: 30, y: 62, s: 1.05 },
  { name: "Supabase",   slug: "supabase",   color: "#3ECF8E", desc: "Postgres + auth + storage in minutes.",           x: 60, y: 72, s: 1.0 },
  { name: "WordPress",  slug: "wordpress",  color: "#21759B", desc: "The world's most flexible CMS.",                  x: 16, y: 80, s: 0.95 },
];

function Chip({ t, i, parallaxY }: { t: Tech; i: number; parallaxY: any }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const seed = (i * 37) % 5;
  const dur = 6 + (i % 4);
  const delay = (i * 0.27) % 2.2;
  const drift = 6 + (i % 3) * 2;
  const rot = (i % 2 === 0 ? 1 : -1) * (2 + (i % 3));

  return (
    <motion.button
      type="button"
      onTapStart={() => setActive(true)}
      onTap={() => setTimeout(() => setActive(false), 700)}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      initial={{ opacity: 0, y: 24, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.94 }}
      className="absolute -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        left: `${t.x}%`,
        top: `${t.y}%`,
        y: parallaxY,
      }}
      aria-label={t.name}
    >
      <motion.span
        animate={
          reduce
            ? undefined
            : {
                y: [0, -drift, 0, drift * 0.6, 0],
                rotate: [0, rot, 0, -rot * 0.7, 0],
              }
        }
        transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
        className="relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 backdrop-blur-xl bg-white/70 border border-white/70 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.18)] transition-shadow duration-500"
        style={{
          transform: `scale(${t.s ?? 1})`,
          boxShadow: active
            ? `0 14px 40px -10px ${t.color}66, 0 0 0 1px ${t.color}33 inset`
            : undefined,
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-xl transition-opacity duration-500"
          style={{ background: `radial-gradient(closest-side, ${t.color}55, transparent 70%)`, opacity: active ? 1 : 0 }}
        />
        <img
          src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#", "")}`}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          className="size-[18px] shrink-0"
        />
        <span className="text-[12px] font-semibold tracking-tight text-foreground/85">
          {t.name}
        </span>
      </motion.span>
    </motion.button>
  );
}

function TechCardSlider() {
  return (
    <div
      className="mt-6 -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-3"
      style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
      aria-label="Technology highlights"
    >
      {TECH.map((t, i) => (
        <motion.article
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.98 }}
          className="snap-center shrink-0 w-[78%] rounded-3xl bg-white/80 backdrop-blur-xl border border-white/70 p-4 shadow-[0_18px_44px_-22px_rgba(2,6,23,0.22)]"
          style={{ scrollSnapAlign: "center" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="grid size-11 place-items-center rounded-2xl"
              style={{ background: `${t.color}14`, boxShadow: `inset 0 0 0 1px ${t.color}26` }}
            >
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#", "")}`}
                alt={`${t.name} logo`}
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
              />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-[18px] leading-tight text-foreground truncate">{t.name}</h3>
              <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/45 font-semibold">Production-grade</p>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-foreground/65">{t.desc}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function MTechCloud() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cloudY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const blobY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);

  return (
    <section
      ref={ref}
      id="tech"
      aria-label="Tech we love"
      className="relative overflow-hidden px-4 py-14"
    >
      {/* Soft gradient blob background */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-16 left-1/2 size-72 -translate-x-1/2 rounded-full blur-3xl opacity-60"
             style={{ background: "radial-gradient(closest-side, #6366F1AA, transparent 70%)" }} />
        <div className="absolute bottom-0 right-[-20%] size-72 rounded-full blur-3xl opacity-50"
             style={{ background: "radial-gradient(closest-side, #06B6D4AA, transparent 70%)" }} />
        <div className="absolute top-1/3 left-[-15%] size-60 rounded-full blur-3xl opacity-50"
             style={{ background: "radial-gradient(closest-side, #8B5CF6AA, transparent 70%)" }} />
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/65 shadow-sm">
          Tech We Love
        </span>
        <h2 className="mt-3 font-display text-[28px] leading-[1.05] tracking-[-0.02em] text-foreground">
          A <em className="italic gradient-text-static">modern stack</em>, picked with care
        </h2>
      </motion.header>

      {/* Floating cloud */}
      <motion.div
        style={{ y: cloudY }}
        className="relative mx-auto mt-6 h-[340px] w-full max-w-[420px]"
      >
        {TECH.map((t, i) => (
          <Chip key={t.name} t={t} i={i} parallaxY={0} />
        ))}
      </motion.div>

      {/* Swipeable cards */}
      <TechCardSlider />
    </section>
  );
}

export default MTechCloud;
