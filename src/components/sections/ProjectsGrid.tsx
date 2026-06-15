import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";

export function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-20 md:py-28 scroll-mt-24" aria-label="Recent projects">
      <div aria-hidden className="absolute inset-0 bg-iris-soft opacity-50" />
      <div className="relative">
        <BlurReveal>
          <SectionHeading
            eyebrow="Recent Projects"
            title={<>Products & platforms <em className="italic gradient-text-static">we've shipped</em></>}
            subtitle="A quick look at the systems we build for modern businesses."
          />
        </BlurReveal>

        <div className="mx-auto mt-10 md:mt-14 grid max-w-7xl gap-4 px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((p, i) => (
            <BlurReveal key={p.slug} delay={i * 0.04}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col rounded-2xl bg-white/85 backdrop-blur-xl border border-foreground/8 shadow-soft hover:shadow-[0_24px_50px_-22px_rgba(99,102,241,0.4)] hover:border-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-400 overflow-hidden"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <span className="absolute top-2 left-2 rounded-full bg-white/90 backdrop-blur px-2 py-0.5 text-[9px] font-semibold tracking-[0.14em] uppercase text-foreground/80 shadow-soft">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-3 md:p-4">
                  <h3 className="font-display text-[15px] md:text-base text-foreground leading-tight line-clamp-2">{p.name}</h3>
                  <div className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                    View Details <ArrowUpRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
