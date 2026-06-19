import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Github,
} from "lucide-react";
import { site } from "@/config/site";

/* ───────── Desktop Footer (unchanged) ───────── */

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

function DesktopFooter() {
  return (
    <footer className="relative mt-24 bg-surface border-t border-foreground/5 hidden md:block">
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

/* ───────── Mobile Footer (compact SaaS-style) ───────── */

const quickActions = [
  {
    icon: Phone,
    label: "Call",
    href: "tel:+919246891902",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${site.email}`,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: site.whatsapp,
    gradient: "from-lime-400 to-green-500",
  },
];

const socials = [
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
  { icon: Github, href: "https://github.com/amixsites", label: "GitHub" },
];

const miniNav = [
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

function MobileFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative md:hidden overflow-hidden"
    >
      {/* Top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-lg px-5 pt-8 pb-6">
        {/* ── Brand + Tagline ── */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-cyber text-white shadow-[0_4px_12px_-4px_rgba(99,102,241,0.5)]">
              <span className="font-display text-sm italic">A</span>
            </span>
            <span className="font-sans text-base font-semibold tracking-tight">
              Amix <span className="gradient-text-static">Sites</span>
            </span>
          </Link>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
            Building modern websites, SaaS products, and business software.
          </p>
        </div>

        {/* ── Quick Actions ── */}
        <div className="mt-5 flex items-center justify-center gap-3">
          {quickActions.map(({ icon: Icon, label, href, gradient }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileTap={{ scale: 0.92 }}
              className="group relative inline-flex flex-col items-center gap-1.5"
            >
              <span
                className={`inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-primary/20 backdrop-blur-sm`}
              >
                <Icon className="size-[18px]" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-medium text-foreground/70">{label}</span>
            </motion.a>
          ))}
        </div>

        {/* ── Social Icons ── */}
        <div className="mt-5 flex items-center justify-center gap-2.5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileTap={{ scale: 0.9 }}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-foreground/10 text-foreground/60 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_16px_-4px_rgba(99,102,241,0.35)] transition-all duration-200"
            >
              <Icon className="size-4" />
            </motion.a>
          ))}
        </div>

        {/* ── Mini Navigation ── */}
        <div className="mt-5 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {miniNav.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="shrink-0 inline-flex items-center rounded-full bg-white/60 backdrop-blur-sm border border-foreground/8 px-3.5 py-1.5 text-[12px] font-medium text-foreground/75 hover:text-primary hover:border-primary/25 hover:bg-white/90 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* ── Copyright ── */}
        <div className="mt-6 pt-4 border-t border-foreground/5 text-center space-y-1">
          <p className="text-[11px] text-muted-foreground">
            © 2026 Amix Sites
          </p>
          <p className="text-[11px] text-muted-foreground/70">
            Built with React, TypeScript & Coffee
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export function Footer() {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
}
