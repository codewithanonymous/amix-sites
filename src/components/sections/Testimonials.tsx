import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";

const reviews = [
  { quote: "AMIX rebuilt our ordering flow and revenue jumped 32% in two months.", name: "Aarav Mehta", role: "Owner, Spice Route" },
  { quote: "Our HR team finally has one dashboard instead of five spreadsheets.", name: "Neha Sharma", role: "Head of People, Verdant Co" },
  { quote: "The school portal cut our admin time in half.", name: "Mr. Rao", role: "Principal, Sunrise Academy" },
  { quote: "Top-tier engineering. Felt like an in-house product team.", name: "James L.", role: "Founder, CloudOps" },
  { quote: "Ship velocity is unreal. Weekly releases, zero drama.", name: "Priya K.", role: "CTO, FinLite" },
];

export function Testimonials() {
  const row = [...reviews, ...reviews];
  return (
    <section className="relative py-24" aria-label="Testimonials">
      <BlurReveal>
        <SectionHeading
          eyebrow="Loved by teams"
          title={<>What our <span className="gradient-text">clients say</span></>}
        />
      </BlurReveal>
      <div
        className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max gap-5 animate-marquee" style={{ animationDuration: "50s" }}>
          {row.map((r, i) => (
            <figure key={i} className="glass gradient-border w-[320px] md:w-[380px] rounded-2xl p-6">
              <blockquote className="text-foreground/90 leading-relaxed">"{r.quote}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
