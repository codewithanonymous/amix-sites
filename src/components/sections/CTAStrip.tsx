import { MessageCircle, CalendarClock } from "lucide-react";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { site } from "@/config/site";

export function CTAStrip() {
  return (
    <section className="relative py-20" aria-label="Contact us">
      <BlurReveal>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl glass-strong gradient-border p-10 md:p-14 text-center glow-purple">
            <div aria-hidden className="absolute inset-0 bg-hero-mesh opacity-80" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Have a product in mind? <span className="gradient-text">Let's build it.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your project — we'll get back within one business day.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton to="/contact" variant="primary">
                  <CalendarClock className="mr-1.5 size-4" /> Schedule a Demo
                </MagneticButton>
                <MagneticButton href={site.whatsapp} variant="glass" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 size-4" /> WhatsApp Chat
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </BlurReveal>
    </section>
  );
}
