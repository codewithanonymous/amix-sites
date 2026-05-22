import { products } from "@/config/products";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { ProductEmbed } from "@/components/ProductEmbed";

export function LiveProducts() {
  return (
    <section id="products" className="relative py-24 md:py-32" aria-label="Live products">
      <div aria-hidden className="absolute inset-0 bg-hero-mesh opacity-60" />
      <div className="relative">
        <BlurReveal>
          <SectionHeading
            eyebrow="Live & Real"
            title={<>Try Our <span className="gradient-text">Live Products</span></>}
            subtitle="Real, working products. Click any card to launch the live demo in-page."
          />
        </BlurReveal>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-4 lg:grid-cols-3">
          {products.map((p, i) => (
            <BlurReveal key={p.id} delay={i * 0.1}>
              <ProductEmbed product={p} />
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
