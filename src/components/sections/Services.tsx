import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Layers, QrCode, Users, GraduationCap, Cloud } from "lucide-react";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { GlassCard } from "@/components/fx/GlassCard";
import { SectionHeading } from "@/components/fx/SectionHeading";

const services = [
  { icon: Code2, title: "Web Development", desc: "Business sites, dashboards, e-commerce, full-stack apps.", glow: "blue" as const },
  { icon: Layers, title: "SaaS Product Development", desc: "Subscription platforms, CRMs, multi-tenant systems.", glow: "purple" as const },
  { icon: QrCode, title: "Restaurant QR Ordering", desc: "QR menus, table ordering, kitchen dashboard, billing.", glow: "cyan" as const },
  { icon: Users, title: "HRM Software", desc: "Employees, attendance, payroll, leave management.", glow: "blue" as const },
  { icon: GraduationCap, title: "School Management", desc: "Student portal, fees, parents, staff, exams.", glow: "purple" as const },
  { icon: Cloud, title: "Cloud Services", desc: "AWS deployment, VPS hosting, scaling, DevOps.", glow: "cyan" as const },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32" aria-label="Services">
      <BlurReveal>
        <SectionHeading
          eyebrow="What We Do"
          title={<>Software built to <span className="gradient-text">move your business</span> forward</>}
          subtitle="Six focused practices. One integrated team."
        />
      </BlurReveal>

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <BlurReveal key={s.title} delay={i * 0.06}>
              <GlassCard glow={s.glow} className="h-full">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyber/20 border border-white/10 glow-blue">
                    <Icon className="size-5 text-foreground" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </BlurReveal>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/90 hover:text-foreground">
          Explore all services <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
