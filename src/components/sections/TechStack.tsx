import { BlurReveal } from "@/components/fx/BlurReveal";
import { LogoMarquee } from "@/components/fx/LogoMarquee";
import { SectionHeading } from "@/components/fx/SectionHeading";

export function TechStack() {
  return (
    <section className="relative py-20" aria-label="Technology stack">
      <BlurReveal>
        <SectionHeading
          eyebrow="Tech We Love"
          title={<>Engineered on a <span className="gradient-text">modern stack</span></>}
        />
      </BlurReveal>
      <div className="mx-auto mt-10 max-w-7xl px-2">
        <LogoMarquee />
      </div>
    </section>
  );
}
