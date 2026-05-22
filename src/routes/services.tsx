import { createFileRoute } from "@tanstack/react-router";
import { Code2, Layers, QrCode, Users, GraduationCap, Cloud, Compass, Pencil, Hammer, Rocket } from "lucide-react";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { GlassCard } from "@/components/fx/GlassCard";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { GradientMesh } from "@/components/fx/GradientMesh";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, SaaS, HRM, School ERP & Cloud | AMIX SITES" },
      { name: "description", content: "Six focused practices: web development, SaaS products, restaurant QR ordering, HRM, school management, and cloud services." },
      { property: "og:title", content: "Services — AMIX SITES" },
      { property: "og:description", content: "Web, SaaS, HRM, School ERP and Cloud — one integrated team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const detail = [
  { icon: Code2, title: "Web Development", glow: "blue" as const,
    bullets: ["Marketing sites & landing pages", "Admin dashboards", "E-commerce", "Full-stack apps", "Performance & SEO"] },
  { icon: Layers, title: "SaaS Product Development", glow: "purple" as const,
    bullets: ["Multi-tenant architecture", "Subscription billing", "Role-based access", "Realtime & analytics", "Customer onboarding flows"] },
  { icon: QrCode, title: "Restaurant QR Ordering", glow: "cyan" as const,
    bullets: ["QR menu generator", "Table-wise ordering", "Live kitchen display", "Billing & invoices", "Daily reports"] },
  { icon: Users, title: "HRM Software", glow: "blue" as const,
    bullets: ["Employee directory", "Attendance (biometric/manual)", "Payroll & payslips", "Leave workflow", "Performance reviews"] },
  { icon: GraduationCap, title: "School Management ERP", glow: "purple" as const,
    bullets: ["Student profiles", "Attendance", "Fee collection & receipts", "Parent app", "Timetable, staff & exams"] },
  { icon: Cloud, title: "Cloud Services", glow: "cyan" as const,
    bullets: ["AWS / GCP deployment", "VPS hosting", "Database scaling", "CI/CD pipelines", "Monitoring & alerts"] },
];

const process = [
  { icon: Compass, title: "Discover", text: "Workshops, scope, success metrics." },
  { icon: Pencil, title: "Design", text: "Flows, wireframes, brand-grade UI." },
  { icon: Hammer, title: "Build", text: "Weekly demos, incremental releases." },
  { icon: Rocket, title: "Launch & Scale", text: "Deploy, monitor, iterate." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20" aria-label="Services hero">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <BlurReveal>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]">
              Software built to <span className="gradient-text">move your business</span> forward
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Six focused practices. One integrated team.
            </p>
          </BlurReveal>
        </div>
      </section>

      <section className="relative pb-24" aria-label="Service detail">
        <div className="mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-2">
          {detail.map((s, i) => {
            const Icon = s.icon;
            return (
              <BlurReveal key={s.title} delay={i * 0.05}>
                <GlassCard glow={s.glow} className="h-full">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyber/20 border border-white/10 glow-blue">
                      <Icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-glow" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </BlurReveal>
            );
          })}
        </div>
      </section>

      <section className="relative py-24" aria-label="Our process">
        <BlurReveal>
          <SectionHeading
            eyebrow="Our Process"
            title={<>From idea to <span className="gradient-text">launch</span></>}
          />
        </BlurReveal>
        <div className="mx-auto mt-12 max-w-6xl px-4 grid gap-5 md:grid-cols-4">
          {process.map((p, i) => {
            const Icon = p.icon;
            return (
              <BlurReveal key={p.title} delay={i * 0.08}>
                <div className="glass gradient-border rounded-2xl p-6 h-full hover:glow-blue transition-shadow">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-cyber/20 border border-white/10">
                    <Icon className="size-5" />
                  </span>
                  <div className="mt-3 text-xs font-semibold tracking-widest text-cyan-glow uppercase">Step {i + 1}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </BlurReveal>
            );
          })}
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
