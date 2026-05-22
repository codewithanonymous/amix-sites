import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { GradientMesh } from "@/components/fx/GradientMesh";
import { BlurReveal } from "@/components/fx/BlurReveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Work | AMIX SITES" },
      { name: "description", content: "Products and platforms we've shipped — restaurants, HR, education, cloud, and SaaS." },
      { property: "og:title", content: "Portfolio — AMIX SITES" },
      { property: "og:description", content: "Selected work across SaaS, restaurants, HR, education and cloud." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-10" aria-label="Portfolio hero">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <BlurReveal>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]">
              Selected <span className="gradient-text">Work</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Products and platforms we've shipped.
            </p>
          </BlurReveal>
        </div>
      </section>
      <Portfolio />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
