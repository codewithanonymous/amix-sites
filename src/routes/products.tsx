import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/config/products";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { ProductEmbed } from "@/components/ProductEmbed";
import { GradientMesh } from "@/components/fx/GradientMesh";
import { CTAStrip } from "@/components/sections/CTAStrip";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.title,
      description: p.tagline,
      url: p.embedUrl,
    },
  })),
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Live Products — Restaurant QR, HRM, School ERP | AMIX SITES" },
      { name: "description", content: "Try our flagship platforms live: Restaurant QR Ordering, HR Management dashboard, and School Management ERP." },
      { property: "og:title", content: "Live Products — AMIX SITES" },
      { property: "og:description", content: "Three flagship SaaS platforms you can try live, right now." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(productSchema) }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16" aria-label="Products hero">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <BlurReveal>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]">
              Live Products. <span className="gradient-text">Real demos.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Three flagship platforms you can try right now. Replace the embed URL in <code className="text-cyan-glow">src/config/products.ts</code> to point at your own.
            </p>
          </BlurReveal>
        </div>
      </section>

      <section className="relative pb-24 space-y-10" aria-label="Live products">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {products.map((p, i) => (
            <BlurReveal key={p.id} delay={i * 0.08}>
              <ProductEmbed product={p} />
            </BlurReveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
