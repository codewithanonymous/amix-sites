import { AnimatedCounter } from "@/components/fx/AnimatedCounter";
import { BlurReveal } from "@/components/fx/BlurReveal";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "SaaS Products" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 24, suffix: "/7", label: "Support" },
];

export function Stats() {
  return (
    <section className="relative py-20" aria-label="By the numbers">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <BlurReveal key={s.label} delay={i * 0.08}>
              <div className="rounded-3xl bg-white border border-foreground/8 p-6 md:p-8 text-center shadow-soft hover:shadow-[0_24px_60px_-24px_rgba(99,102,241,0.30)] hover:-translate-y-1 transition-all duration-500">
                <div className="font-display text-4xl md:text-5xl gradient-text-static">
                  {s.value % 1 === 0 ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  ) : (
                    <>99.9{s.suffix.replace("%","")}<span>%</span></>
                  )}
                </div>
                <div className="mt-2 text-[11px] md:text-xs text-muted-foreground tracking-[0.18em] uppercase font-semibold">
                  {s.label}
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
