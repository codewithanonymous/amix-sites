import { MessageCircle, CalendarClock } from "lucide-react";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { site } from "@/config/site";

export function CTAStrip() {
  return (
    <section className="relative py-24" aria-label="Contact us">
      <BlurReveal>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-white border border-foreground/8 p-10 md:p-16 text-center shadow-[0_40px_100px_-40px_rgba(99,102,241,0.35)]">
            <div aria-hidden className="absolute inset-0 bg-iris-soft opacity-100" />
            <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-foreground">
                Have a product in mind? <em className="italic gradient-text-static">Let's build it.</em>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your project — we'll get back within one business day.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton to="/contact" variant="primary">
                  <CalendarClock className="mr-1.5 size-4" /> Book Free Consultation
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
