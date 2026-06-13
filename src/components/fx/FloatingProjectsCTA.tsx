"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingProjectsCTA() {
  const [visible, setVisible] = useState(false);
  const [inProjects, setInProjects] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("projects");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setInProjects(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const onClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const show = visible && !inProjects;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={onClick}
          aria-label="View recent projects"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="fixed z-40 bottom-5 right-5 md:bottom-7 md:right-7 group"
        >
          <span aria-hidden className="absolute inset-0 rounded-full animate-pulse-ring" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-cyber px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_-12px_rgba(99,102,241,0.65)] hover:shadow-[0_22px_50px_-10px_rgba(139,92,246,0.75)] transition-all hover:-translate-y-0.5">
            <Layers className="size-4" />
            <span className="hidden sm:inline">View Recent Projects</span>
            <span className="sm:hidden">Projects</span>
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
