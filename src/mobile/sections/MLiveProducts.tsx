"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/config/products";

export function MLiveProducts() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = el.scrollLeft + el.clientWidth / 2;
        const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
        let best = 0, bestDist = Infinity;
        cards.forEach((c, i) => {
          const cardCenter = c.offsetLeft + c.offsetWidth / 2;
          const d = Math.abs(cardCenter - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    const card = el?.querySelectorAll<HTMLElement>("[data-card]")[i];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section id="products" aria-label="Live products" className="relative py-12">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6 }}
        className="px-4 text-center"
      >
        <span className="inline-flex rounded-full bg-white/70 backdrop-blur-md border border-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/65 shadow-sm">
          Live & Real
        </span>
        <h2 className="mt-3 font-display text-[28px] leading-[1.05] tracking-[-0.02em] text-foreground">
          Try our <em className="italic gradient-text-static">live products</em>
        </h2>
      </motion.header>

      <div
        ref={scrollerRef}
        className="mt-6 flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 pb-2"
        style={{ WebkitOverflowScrolling: "touch", scrollPaddingInline: "1rem" }}
      >
        {products.map((p, i) => (
          <motion.article
            key={p.id}
            data-card
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            animate={{ scale: i === active ? 1 : 0.96, opacity: i === active ? 1 : 0.85 }}
            className="snap-center shrink-0 w-[82%] rounded-3xl bg-white/85 backdrop-blur-xl border border-white/70 overflow-hidden shadow-[0_22px_50px_-24px_rgba(2,6,23,0.25)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.thumbnail}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <h3 className="font-display text-[19px] leading-tight text-foreground">{p.title}</h3>
              <p className="mt-1 text-[13px] text-foreground/65 leading-relaxed">{p.tagline}</p>
              <a
                href={p.embedUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cyber px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(99,102,241,0.65)]"
              >
                Live Demo <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to product ${i + 1}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === active ? 20 : 6,
              background: i === active ? "hsl(var(--primary))" : "rgba(15,23,42,0.18)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default MLiveProducts;
