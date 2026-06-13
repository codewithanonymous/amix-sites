"use client";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full pl-5 pr-2 py-2 transition-all duration-500",
            scrolled
              ? "glass-strong border border-foreground/5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
              : "bg-white/55 border border-foreground/5 backdrop-blur-xl"
          )}
        >
          <Link to="/" className="group inline-flex items-center gap-2.5">
            <span className="relative inline-flex size-8 items-center justify-center rounded-xl bg-cyber text-white shadow-[0_6px_16px_-6px_rgba(99,102,241,0.55)]">
              <span className="font-display text-sm font-semibold italic">A</span>
            </span>
            <span className="font-sans text-[15px] font-semibold tracking-tight text-foreground">
              AMIX <span className="gradient-text-static">SITES</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-foreground/65 hover:text-foreground hover:bg-foreground/5 transition-colors"
                activeProps={{
                  className:
                    "rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-foreground bg-foreground/[0.06]",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-cyber px-4 py-2 text-[13px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_10px_30px_-8px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex size-9 items-center justify-center rounded-full bg-foreground/5 text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {site.nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-display text-foreground/85 hover:bg-foreground/5 border-b border-foreground/5"
                      activeProps={{ className: "flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-display gradient-text-static border-b border-foreground/5" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                      <ArrowRight className="size-4 text-foreground/40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-8 space-y-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full rounded-full bg-cyber px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(99,102,241,0.6)]"
                >
                  Book Free Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <p className="text-center text-xs text-muted-foreground">{site.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
