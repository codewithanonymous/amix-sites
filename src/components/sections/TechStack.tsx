import { BlurReveal } from "@/components/fx/BlurReveal";
import { SectionHeading } from "@/components/fx/SectionHeading";

const tech = [
  { name: "Firebase", slug: "firebase", color: "#F58220" },
  { name: "AWS", slug: "amazonaws", color: "#FF9900" },
  { name: "SQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
];

export function TechStack() {
  return (
    <section className="relative py-24" aria-label="Technology stack">
      <BlurReveal>
        <SectionHeading
          eyebrow="Tech We Love"
          title={<>Engineered on a <em className="italic gradient-text-static">modern stack</em></>}
          subtitle="Production-grade tools we trust to ship fast and scale cleanly."
        />
      </BlurReveal>
      <div className="mx-auto mt-12 max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          {tech.map((t, i) => (
            <BlurReveal key={t.name} delay={i * 0.04} y={12}>
              <div
                className="group relative flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-white border border-foreground/8 p-5 aspect-square shadow-soft hover:-translate-y-1 hover:border-primary/20 transition-all duration-500"
                style={{ ["--brand" as any]: t.color }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `0 20px 50px -20px ${t.color}55` }}
                />
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace("#", "")}`}
                  alt={`${t.name} logo`}
                  loading="lazy"
                  width={40}
                  height={40}
                  className="size-10 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="text-[12px] font-semibold text-foreground/80">{t.name}</span>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
