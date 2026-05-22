import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, CalendarClock, ChevronDown } from "lucide-react";
import { BlurReveal } from "@/components/fx/BlurReveal";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { GradientMesh } from "@/components/fx/GradientMesh";
import { site } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const faqs = [
  { q: "How long does a typical project take?", a: "Marketing sites in 2–4 weeks; SaaS MVPs in 6–10 weeks; ERPs in 3–4 months." },
  { q: "Do you work with international clients?", a: "Yes — we work async across time zones with overlap windows." },
  { q: "Can you customize one of your live products?", a: "Absolutely. Our Restaurant, HRM, and School platforms are designed to be branded and extended." },
  { q: "What does support after launch look like?", a: "Monthly retainers for monitoring, fixes, and feature work — or hand off cleanly to your team." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build Something | AMIX SITES" },
      { name: "description", content: "Tell us about your project — we'll get back within one business day. Email amixsites@gmail.com or WhatsApp us." },
      { property: "og:title", content: "Contact AMIX SITES" },
      { property: "og:description", content: "Let's build something. Reach the AMIX SITES team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: ContactPage,
});

const Schema = z.object({
  name: z.string().min(2, "Please add your name").max(80),
  company: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("Enter a valid email"),
  projectType: z.string().min(1, "Pick a project type"),
  budget: z.string().min(1, "Pick a budget"),
  message: z.string().min(10, "A bit more detail, please").max(2000),
});
type FormData = z.infer<typeof Schema>;

function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("contact form submission:", data);
    toast.success("Message received — we'll be in touch within one business day.");
    reset();
  };

  return (
    <>
      <Toaster />
      <section className="relative overflow-hidden pt-36 pb-16" aria-label="Contact hero">
        <GradientMesh />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <BlurReveal>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]">
              Let's build <span className="gradient-text">something.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Tell us about your project — we'll get back within one business day.
            </p>
          </BlurReveal>
        </div>
      </section>

      <section className="relative pb-24" aria-label="Contact form">
        <div className="mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-5">
          <BlurReveal className="lg:col-span-2">
            <div className="glass gradient-border rounded-3xl p-7 h-full">
              <h2 className="font-display text-xl font-semibold">Reach us</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-cyber/20 border border-white/10 glow-blue"><Mail className="size-4" /></span>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider">Email</div>
                    <a href={`mailto:${site.email}`} className="font-medium hover:text-cyan-glow">{site.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-cyber/20 border border-white/10 glow-purple"><MapPin className="size-4" /></span>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider">Location</div>
                    <div className="font-medium">{site.location}</div>
                  </div>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <MagneticButton href={site.whatsapp} target="_blank" rel="noopener noreferrer" variant="glass">
                  <MessageCircle className="mr-1.5 size-4" /> WhatsApp
                </MagneticButton>
                <MagneticButton href={`mailto:${site.email}`} variant="primary">
                  <CalendarClock className="mr-1.5 size-4" /> Schedule Demo
                </MagneticButton>
              </div>
            </div>
          </BlurReveal>

          <BlurReveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass gradient-border rounded-3xl p-7 space-y-4 glow-blue"
              noValidate
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input {...register("name")} className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Company">
                  <input {...register("company")} className={inputCls} placeholder="Optional" />
                </Field>
              </div>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register("email")} className={inputCls} placeholder="you@company.com" />
              </Field>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Project Type" error={errors.projectType?.message}>
                  <Select {...register("projectType")} options={["Web","SaaS","Restaurant QR","HRM","School ERP","Cloud","Other"]} />
                </Field>
                <Field label="Budget" error={errors.budget?.message}>
                  <Select {...register("budget")} options={["< $5k","$5k–$15k","$15k–$50k","$50k+"]} />
                </Field>
              </div>
              <Field label="Message" error={errors.message?.message}>
                <textarea {...register("message")} rows={5} className={inputCls} placeholder="What are you building?" />
              </Field>
              <div className="pt-2">
                <MagneticButton type="submit" variant="primary">
                  {isSubmitting ? "Sending…" : "Send Message"}
                </MagneticButton>
              </div>
            </form>
          </BlurReveal>
        </div>
      </section>

      <section className="relative pb-24" aria-label="FAQ">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">
            Frequently <span className="gradient-text">asked</span>
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="glass gradient-border rounded-2xl p-5 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 px-4 py-3 text-sm placeholder:text-muted-foreground/70 transition-all";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold tracking-wider uppercase text-foreground/80">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

const Select = ({ options, ...rest }: { options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select {...rest} className={inputCls + " appearance-none"}>
    <option value="">Select…</option>
    {options.map((o) => <option key={o} value={o}>{o}</option>)}
  </select>
);
