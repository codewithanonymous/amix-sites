import { Quote } from "lucide-react";
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
          title={<>What our <em className="italic gradient-text-static">clients say</em></>}
        />
      </BlurReveal>
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee" style={{ animationDuration: "55s" }}>
          {row.map((r, i) => (
            <figure key={i} className="w-[320px] md:w-[380px] rounded-3xl bg-white border border-foreground/8 p-7 shadow-soft">
              <Quote className="size-5 text-primary/60" />
              <blockquote className="mt-3 text-foreground/90 leading-relaxed">"{r.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm">
                <span className="size-9 rounded-full bg-gradient-to-br from-primary to-accent" aria-hidden />
                <span>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-muted-foreground text-xs">{r.role}</div>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
