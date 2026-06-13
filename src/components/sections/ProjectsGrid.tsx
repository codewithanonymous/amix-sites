import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";

export function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-24 md:py-32 scroll-mt-24" aria-label="Recent projects">
      <div aria-hidden className="absolute inset-0 bg-iris-soft opacity-50" />
      <div className="relative">
        <BlurReveal>
          <SectionHeading
            eyebrow="Recent Projects"
            title={<>Products & platforms <em className="italic gradient-text-static">we've shipped</em></>}
            subtitle="A quick look at the systems we build for modern businesses. Open any project for the full case study."
          />
        </BlurReveal>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <BlurReveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block h-full rounded-3xl bg-white/85 backdrop-blur-xl border border-foreground/8 shadow-soft hover:shadow-[0_30px_70px_-30px_rgba(99,102,241,0.35)] hover:border-primary/25 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} preview`}
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-foreground/80 shadow-soft">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-foreground/[0.04] px-2.5 py-1 text-[11px] font-medium text-foreground/70 border border-foreground/8">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    View Details <ArrowUpRight className="size-4" />
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
