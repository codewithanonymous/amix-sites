import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { LiveProducts } from "@/components/sections/LiveProducts";
import { TechStack } from "@/components/sections/TechStack";
import { ParallaxShowcase } from "@/components/sections/ParallaxShowcase";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAStrip } from "@/components/sections/CTAStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMIX SITES — Intelligent Software For Modern Businesses" },
      { name: "description", content: "Premium software studio building web, SaaS, restaurant QR ordering, HRM, school ERP, and cloud solutions." },
      { property: "og:title", content: "AMIX SITES — Intelligent Software For Modern Businesses" },
      { property: "og:description", content: "Premium software studio building web, SaaS, HRM, school ERP, and cloud solutions." },
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
      <LiveProducts />
      <TechStack />
      <ParallaxShowcase />
      <Portfolio limit={6} />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
