import { Link } from "@tanstack/react-router";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { GlassCard } from "@/components/fx/GlassCard";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const items = [
  { title: "Quickserve", category: "Restaurant", outcome: "QR ordering platform — 32% revenue lift.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=70" },
  { title: "PeoplePulse", category: "HRM", outcome: "Unified HR dashboard for 1,200+ employees.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70" },
  { title: "EduCore", category: "Education", outcome: "School ERP across 14 campuses.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=70" },
  { title: "NorthRetail", category: "E-commerce", outcome: "Multi-vendor marketplace, 50k SKUs.", img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=70" },
  { title: "CloudOps", category: "Cloud", outcome: "DevOps console with one-click deploys.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70" },
  { title: "FinLite", category: "SaaS", outcome: "Subscription CRM for SMB finance teams.", img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=70" },
];

export function Portfolio({ limit }: { limit?: number }) {
  const list = limit ? items.slice(0, limit) : items;
  return (
    <section className="relative py-24 md:py-32" aria-label="Portfolio">
      <BlurReveal>
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Products & platforms <span className="gradient-text">we've shipped</span></>}
        />
      </BlurReveal>

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((it, i) => (
          <BlurReveal key={it.title} delay={i * 0.06}>
            <GlassCard tilt={false} glow="purple" className="group overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={it.img}
                  alt={`${it.title} — ${it.category} case study preview`}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={675}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full glass px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase">{it.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.outcome}</p>
              </div>
            </GlassCard>
          </BlurReveal>
        ))}
      </div>

      {limit && (
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/90 hover:text-foreground">
            See full portfolio <ArrowUpRight className="size-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
