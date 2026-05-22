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
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40 [mask-image:linear-gradient(180deg,transparent,black_30%,black_70%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <BlurReveal key={s.label} delay={i * 0.08}>
              <div className="glass gradient-border rounded-2xl p-5 md:p-7 text-center hover:glow-blue transition-shadow duration-500">
                <div className="font-display text-3xl md:text-5xl font-bold gradient-text">
                  {s.value % 1 === 0 ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  ) : (
                    <>99.9{s.suffix.replace("%","")}<span>%</span></>
                  )}
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground tracking-wider uppercase">
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
