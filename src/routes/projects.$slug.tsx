import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CalendarCheck, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { getProject, projects, type Project } from "@/config/projects";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { GradientMesh } from "@/components/fx/GradientMesh";
import { CTAStrip } from "@/components/sections/CTAStrip";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — AMIX SITES` : "Project — AMIX SITES";
    const desc = p?.tagline ?? "Detailed case study of an AMIX SITES project.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        ...(p?.image ? [{ property: "og:image", content: p.image }, { name: "twitter:image", content: p.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="text-center">
        <h1 className="font-display text-5xl">Project not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-1.5 text-primary font-semibold">
          <ArrowLeft className="size-4" /> Back home
        </Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 bg-white" aria-label={`${project.name} hero`}>
        <GradientMesh />
        <div className="relative mx-auto max-w-7xl px-4">
          <BlurReveal>
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="size-4" /> All Projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white border border-foreground/8 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/70 shadow-soft">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                <Sparkles className="size-3" /> Case Study
              </span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-foreground max-w-3xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              {project.tagline}
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* Two-column body (mobile + desktop per spec) */}
      <section className="relative pb-20 bg-surface" aria-label="Project details">
        <div className="mx-auto max-w-7xl px-4 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* LEFT — description + features */}
            <div className="space-y-6">
              <BlurReveal>
                <div className="rounded-3xl bg-white border border-foreground/8 p-7 md:p-8 shadow-soft">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">Overview</h2>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.tagline} Built end-to-end by AMIX SITES, this {project.category.toLowerCase()} platform is designed to be fast, secure, and easy to operate — engineered for real businesses, not demos.
                  </p>
                </div>
              </BlurReveal>

              <BlurReveal delay={0.05}>
                <div className="rounded-3xl bg-white border border-foreground/8 p-7 md:p-8 shadow-soft">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">Features</h2>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 rounded-2xl bg-foreground/[0.03] border border-foreground/5 px-3.5 py-3 text-sm">
                        <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground/85 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurReveal>

              <BlurReveal delay={0.1}>
                <div className="rounded-3xl bg-white border border-foreground/8 p-7 md:p-8 shadow-soft">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground">Business Benefits</h2>
                  <ul className="mt-5 space-y-3">
                    {project.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyber" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurReveal>
            </div>

            {/* RIGHT — mockup, tech, sticky CTAs */}
            <div className="space-y-6 md:sticky md:top-24">
              <BlurReveal>
                <div className="relative rounded-3xl overflow-hidden border border-foreground/8 shadow-[0_30px_80px_-30px_rgba(99,102,241,0.45)]">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="eager"
                    decoding="async"
                    className="block w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </BlurReveal>

              <BlurReveal delay={0.05}>
                <div className="rounded-3xl bg-white border border-foreground/8 p-6 shadow-soft">
                  <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/55">Tech Stack</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-foreground/[0.04] border border-foreground/8 px-2.5 py-1 text-[11px] font-semibold text-foreground/75">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurReveal>

              <BlurReveal delay={0.1}>
                <div className="rounded-3xl bg-cyber p-6 text-white shadow-[0_24px_60px_-20px_rgba(99,102,241,0.55)]">
                  <h3 className="font-display text-2xl">Like what you see?</h3>
                  <p className="mt-1.5 text-sm text-white/85">Let's build something similar — or even better — for your business.</p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-foreground px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
                      >
                        <ExternalLink className="size-4" /> View Live Demo
                      </a>
                    )}
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/15 border border-white/30 text-white px-5 py-3 text-sm font-semibold hover:bg-white/25 transition-colors"
                    >
                      <CalendarCheck className="size-4" /> Book Free Consultation
                    </Link>
                  </div>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="relative pb-20 bg-surface" aria-label="More projects">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">More projects</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.filter(p => p.slug !== project.slug).slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-3xl bg-white border border-foreground/8 shadow-soft hover:shadow-[0_24px_60px_-24px_rgba(99,102,241,0.35)] hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{p.tagline}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View Details <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
