"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Info, X, Sparkles, ShoppingBag, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { ecommerceProjects, type EcommerceProject } from "@/config/ecommerce-projects";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ──────────────────────────────────────────────
   Browser Frame Component
   ────────────────────────────────────────────── */
function BrowserFrame({
  project,
  className,
}: {
  project: EcommerceProject;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden border border-foreground/8 shadow-soft bg-white group/frame",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-gray-50 to-gray-100/80 border-b border-foreground/6">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/80" />
          <span className="size-2.5 rounded-full bg-yellow-400/80" />
          <span className="size-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 mx-3">
          <div className="flex items-center gap-2 rounded-md bg-white/90 border border-foreground/6 px-3 py-1 text-[11px] text-muted-foreground font-mono truncate">
            <svg className="size-3 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">{project.demoUrl.replace("https://", "")}</span>
          </div>
        </div>
      </div>

      {/* Preview area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
        {/* Shimmer loading effect */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          </div>
        )}
        <img
          src={project.previewImage}
          alt={`${project.name} — ${project.tagline}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-700",
            loaded ? "opacity-100" : "opacity-0",
            "group-hover/frame:scale-[1.03]"
          )}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Project Detail Modal (Desktop)
   ────────────────────────────────────────────── */
function ProjectDetailDialog({
  project,
  open,
  onClose,
}: {
  project: EcommerceProject | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-0">
        <div className="relative">
          <BrowserFrame project={project} className="rounded-none rounded-t-2xl border-0" />
        </div>
        <div className="p-6 space-y-5">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary">
                {project.category}
              </span>
            </div>
            <DialogTitle className="font-display text-2xl">{project.name}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Achievements</h4>
            <div className="grid gap-2">
              {project.achievements.map((a) => (
                <div key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Sparkles className="size-4 text-accent shrink-0 mt-0.5" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <ExternalLink className="size-4" /> View Live Demo
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ──────────────────────────────────────────────
   Project Detail Drawer (Mobile)
   ────────────────────────────────────────────── */
function ProjectDetailDrawer({
  project,
  open,
  onClose,
}: {
  project: EcommerceProject | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <Drawer open={open} onOpenChange={(v) => !v && onClose()}>
      <DrawerContent className="max-h-[85vh]">
        <div className="overflow-y-auto px-4 pb-6">
          <DrawerHeader className="px-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary">
                {project.category}
              </span>
            </div>
            <DrawerTitle className="font-display text-xl text-left">{project.name}</DrawerTitle>
            <DrawerDescription className="text-sm text-left text-muted-foreground leading-relaxed">
              {project.description}
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-5 mt-2">
            {/* Tech */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Features</h4>
              <div className="grid grid-cols-2 gap-1.5">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Achievements</h4>
              <div className="grid gap-1.5">
                {project.achievements.map((a) => (
                  <div key={a} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Sparkles className="size-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3.5 text-sm font-semibold text-white shadow-lg active:scale-[0.98] transition-all"
            >
              <ExternalLink className="size-4" /> View Live Demo
            </a>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

/* ──────────────────────────────────────────────
   Desktop Showcase Card (alternating layout)
   ────────────────────────────────────────────── */
function DesktopProjectCard({
  project,
  index,
  onViewDetails,
}: {
  project: EcommerceProject;
  index: number;
  onViewDetails: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reversed = index % 2 === 1;

  const glowClass =
    project.accent === "blue"
      ? "hover:shadow-[0_40px_80px_-30px_rgba(99,102,241,0.3)]"
      : project.accent === "purple"
        ? "hover:shadow-[0_40px_80px_-30px_rgba(139,92,246,0.3)]"
        : "hover:shadow-[0_40px_80px_-30px_rgba(6,182,212,0.3)]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className={cn(
        "group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center rounded-[2rem] p-6 lg:p-10 bg-white/60 backdrop-blur-xl border border-foreground/6 shadow-soft transition-all duration-500 hover:-translate-y-1",
        glowClass,
        reversed && "lg:grid-cols-[1fr_1.2fr]"
      )}
    >
      {/* Preview */}
      <div className={cn("relative", reversed && "lg:order-2")}>
        {/* Floating glow behind */}
        <div
          className={cn(
            "absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl",
            project.accent === "blue" && "bg-primary/10",
            project.accent === "purple" && "bg-accent/10",
            project.accent === "cyan" && "bg-cyan-glow/10"
          )}
        />
        <BrowserFrame project={project} className="relative" />
      </div>

      {/* Details */}
      <div className={cn("space-y-5", reversed && "lg:order-1")}>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-primary">
            {project.category}
          </span>
        </div>

        <div>
          <h3 className="font-display text-3xl lg:text-4xl text-foreground leading-tight">
            {project.name}
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{project.tagline}</p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-secondary/80 backdrop-blur px-3 py-1 text-xs font-medium text-secondary-foreground border border-foreground/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key features (first 3) */}
        <div className="space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="size-4 text-primary shrink-0" />
              <span>{f}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <ExternalLink className="size-4" />
            View Live Demo
          </a>
          <button
            onClick={onViewDetails}
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-foreground/10 px-6 py-3 text-sm font-semibold text-foreground shadow-soft hover:border-primary/30 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Info className="size-4" />
            View Project Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Mobile Carousel Card
   ────────────────────────────────────────────── */
function MobileCard({
  project,
  onViewDetails,
}: {
  project: EcommerceProject;
  onViewDetails: () => void;
}) {
  return (
    <div className="w-full shrink-0 snap-center px-1">
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-foreground/8 shadow-soft overflow-hidden">
        {/* Compact preview */}
        <BrowserFrame project={project} className="rounded-none border-x-0 border-t-0" />

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary">
              {project.category}
            </span>
          </div>

          <div>
            <h3 className="font-display text-xl text-foreground">{project.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{project.tagline}</p>
          </div>

          {/* CTAs */}
          <div className="flex gap-2 pt-1">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-md active:scale-[0.97] transition-all"
            >
              <ExternalLink className="size-3.5" />
              Live Demo
            </a>
            <button
              onClick={onViewDetails}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white border border-foreground/10 px-4 py-3 text-sm font-semibold text-foreground shadow-soft active:scale-[0.97] transition-all"
            >
              <Info className="size-3.5" />
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Mobile Carousel
   ────────────────────────────────────────────── */
function MobileCarousel({
  onViewDetails,
}: {
  onViewDetails: (project: EcommerceProject) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[i] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.min(index, ecommerceProjects.length - 1));
  };

  const goTo = (dir: "prev" | "next") => {
    const newIndex =
      dir === "prev"
        ? Math.max(0, activeIndex - 1)
        : Math.min(ecommerceProjects.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-4"
        style={{ scrollPaddingInline: "1rem" }}
      >
        {ecommerceProjects.map((p) => (
          <MobileCard key={p.slug} project={p} onViewDetails={() => onViewDetails(p)} />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => goTo("prev")}
          disabled={activeIndex === 0}
          aria-label="Previous project"
          className="size-9 rounded-full bg-white border border-foreground/10 shadow-soft flex items-center justify-center disabled:opacity-30 active:scale-90 transition-all"
        >
          <ChevronLeft className="size-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {ecommerceProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
              aria-label={`Go to project ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-gradient-to-r from-primary to-accent"
                  : "w-2 bg-foreground/15"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => goTo("next")}
          disabled={activeIndex === ecommerceProjects.length - 1}
          aria-label="Next project"
          className="size-9 rounded-full bg-white border border-foreground/10 shadow-soft flex items-center justify-center disabled:opacity-30 active:scale-90 transition-all"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Section Export
   ────────────────────────────────────────────── */
export function FeaturedEcommerce() {
  const [selectedProject, setSelectedProject] = useState<EcommerceProject | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openDetails = (project: EcommerceProject) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  const closeDetails = () => {
    setDetailOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="featured-ecommerce"
      className="relative py-20 md:py-32 overflow-hidden scroll-mt-24"
      aria-label="Featured E-Commerce Projects"
    >
      {/* Background effects */}
      <div aria-hidden className="absolute inset-0 bg-iris-soft opacity-40" />
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 via-accent/5 to-cyan-glow/5 blur-3xl opacity-60 pointer-events-none"
      />

      <div className="relative">
        {/* Header */}
        <BlurReveal>
          <SectionHeading
            eyebrow="Featured Stores"
            title={
              <>
                E-Commerce <em className="italic gradient-text-static">Projects</em>
              </>
            }
            subtitle="Live stores we've designed and built — click through to experience them yourself."
          />
        </BlurReveal>

        {/* Desktop layout (hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-10 lg:gap-14 mx-auto mt-14 max-w-7xl px-4">
          {ecommerceProjects.map((project, i) => (
            <DesktopProjectCard
              key={project.slug}
              project={project}
              index={i}
              onViewDetails={() => openDetails(project)}
            />
          ))}
        </div>

        {/* Mobile layout (hidden on desktop) */}
        <div className="md:hidden mt-10">
          <MobileCarousel onViewDetails={openDetails} />
        </div>
      </div>

      {/* Detail modal/drawer */}
      {isMobile ? (
        <ProjectDetailDrawer project={selectedProject} open={detailOpen} onClose={closeDetails} />
      ) : (
        <ProjectDetailDialog project={selectedProject} open={detailOpen} onClose={closeDetails} />
      )}
    </section>
  );
}
