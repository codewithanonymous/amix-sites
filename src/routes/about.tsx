import { createFileRoute } from "@tanstack/react-router";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { GlassCard } from "@/components/fx/GlassCard";
import { LogoMarquee } from "@/components/fx/LogoMarquee";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { Stats } from "@/components/sections/Stats";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { GradientMesh } from "@/components/fx/GradientMesh";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Modern Software Studio | AMIX SITES" },
      { name: "description", content: "AMIX SITES is a modern software studio building products businesses actually use." },
      { property: "og:title", content: "About — AMIX SITES" },
      { property: "og:description", content: "Modern software studio for web, SaaS, HRM, ERP and cloud." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Build for real users", text: "Every screen ships with intent." },
  { title: "Engineer for scale", text: "Cloud-native from day one." },
  { title: "Move with speed", text: "Weekly releases, not yearly rewrites." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16" aria-label="About hero">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <BlurReveal>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]">
              We're <span className="gradient-text">AMIX SITES.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              A modern software studio building products that businesses actually use.
            </p>
          </BlurReveal>
        </div>
      </section>

      <section className="relative py-12" aria-label="Story">
        <div className="mx-auto max-w-4xl px-4">
          <BlurReveal>
            <div className="glass gradient-border rounded-3xl p-8 md:p-10 space-y-4 text-foreground/90">
              <p>
                We started AMIX SITES with one belief: software should pull its weight. Not just look modern — actually move the
                numbers that matter for the business behind it.
              </p>
              <p>
                Today we build full-stack web apps, multi-tenant SaaS platforms, and operational software for restaurants, HR
                teams, schools, and cloud-first startups. Same studio, same standards, from a marketing site to a 10-screen ERP.
              </p>
            </div>
          </BlurReveal>
        </div>
      </section>

      <section className="relative py-20" aria-label="Values">
        <BlurReveal>
          <SectionHeading
            eyebrow="What we stand for"
            title={<>Principles that <span className="gradient-text">ship</span></>}
          />
        </BlurReveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 px-4 md:grid-cols-3">
          {values.map((v, i) => (
            <BlurReveal key={v.title} delay={i * 0.08}>
              <GlassCard glow={i === 0 ? "blue" : i === 1 ? "purple" : "cyan"}>
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </GlassCard>
            </BlurReveal>
          ))}
        </div>
      </section>

      <Stats />

      <section className="relative py-12" aria-label="Tech we love">
        <BlurReveal>
          <SectionHeading
            eyebrow="Tech we love"
            title={<>Built on a <span className="gradient-text">modern stack</span></>}
          />
        </BlurReveal>
        <div className="mx-auto mt-8 max-w-7xl px-2">
          <LogoMarquee />
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
