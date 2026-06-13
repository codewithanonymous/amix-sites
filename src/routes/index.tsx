import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { LiveProducts } from "@/components/sections/LiveProducts";
import { TechStack } from "@/components/sections/TechStack";
import { ParallaxShowcase } from "@/components/sections/ParallaxShowcase";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { FloatingProjectsCTA } from "@/components/fx/FloatingProjectsCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMIX SITES — Building Modern Digital Products That Scale" },
      { name: "description", content: "Premium software studio building web apps, SaaS platforms, business software, and digital experiences that help companies grow faster." },
      { property: "og:title", content: "AMIX SITES — Building Modern Digital Products That Scale" },
      { property: "og:description", content: "Web, SaaS, HRM, school ERP, and cloud — built by a modern software studio." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ProjectsGrid />
      <LiveProducts />
      <TechStack />
      <ParallaxShowcase />
      <Testimonials />
      <CTAStrip />
      <FloatingProjectsCTA />
    </>
  );
}
