import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "Press Release", to: "/about" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Restaurant Ordering", to: "/products" },
      { label: "HR Management", to: "/products" },
      { label: "School ERP", to: "/products" },
      { label: "Cloud Services", to: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", to: "/" },
      { label: "Documentation", to: "/" },
      { label: "Case Studies", to: "/portfolio" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms of Use", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms & Conditions", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 bg-surface border-t border-foreground/5">
      <div aria-hidden className="absolute inset-x-0 -top-px h-px bg-cyber opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-cyber text-white shadow-[0_6px_16px_-6px_rgba(99,102,241,0.55)]">
                <span className="font-display text-base italic">A</span>
              </span>
              <span className="font-sans text-lg font-semibold">
                AMIX <span className="gradient-text-static">SITES</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {site.tagline}. Modern software studio building products that businesses actually use.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Facebook, href: site.socials.facebook, label: "Facebook" },
                { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
                { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: site.socials.twitter, label: "Twitter" },
                { Icon: Youtube, href: site.socials.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-white border border-foreground/8 text-foreground/70 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-foreground/55">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="group inline-flex items-center gap-1 text-foreground/75 hover:text-primary transition-colors">
                      {l.label}
                      <ArrowUpRight className="size-3 opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 rounded-2xl bg-white border border-foreground/8 px-5 py-4 md:grid-cols-2 shadow-soft">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <MapPin className="size-4 text-primary" />
            <span><strong className="font-semibold">Regd. Office —</strong> {site.location}</span>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary md:justify-end"
          >
            <Mail className="size-4 text-primary" />
            {site.email}
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
