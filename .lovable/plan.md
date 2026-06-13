## Goal
Transform AMIX SITES from dark AI-feel to a premium, handcrafted **light-themed** agency site (Apple + Stripe + Linear + Framer DNA). Preserve all content, links, forms, routes, SEO, and business info — redesign UI/UX, layout, motion, and navigation only.

## Design tokens (rewrite `src/styles.css`)
- Background `#FFFFFF`, surface `#F8FAFC`, soft-gray `#F1F5F9`, ink `#0B1220`, muted `#475569`.
- Accents: electric blue `#6366F1` → purple `#8B5CF6` → cyan `#06B6D4`, with teal `#14B8A6` highlight.
- Gradients: `--gradient-iris` (blue→purple→cyan), `--gradient-text`, soft mesh blobs.
- Glass (light): `rgba(255,255,255,0.6)` + `backdrop-blur-xl` + `border-white/60` + soft shadow `0 20px 60px -30px rgba(2,6,23,0.18)`. Use `backdrop-filter` only (no `-webkit-` duplicate).
- Radius 20–24px, generous whitespace, soft shadows only.
- Typography via Google Fonts `<link>` in `__root.tsx`: **Instrument Serif** (display/H1/H2) + **Work Sans** (body/UI). Tighten H1 tracking; serif italics for emphasis.

## Navigation
- New `Header`: sticky, light glass, thin border, condensed on scroll.
- Left: wordmark. Center: minimal links (Home, Services, Products, Portfolio, About). Right: gradient CTA "Book Free Consultation".
- Mobile: hamburger → full-screen sheet with staggered link reveal, social row, CTA pinned bottom.

## Hero (full redesign)
- Light background with soft animated iris mesh blobs + subtle grid mask + faint floating particles (reduced density).
- Eyebrow chip: "Modern Software Studio".
- H1 (Instrument Serif): "Building *Modern Digital Products* That Scale" (italic gradient span).
- Subhead (Work Sans): "Web Application Developer • SaaS Product Developer • UI/UX Designer".
- Description paragraph as specified.
- CTAs: primary gradient "Book Free Consultation" → `/contact`; ghost "View Recent Projects" → smooth-scroll to `#projects`.
- Right column: light-glass dashboard mockup stack (Analytics, Orders, Attendance) with mouse-parallax tilt + float; hidden on mobile, replaced by single hero mock card.

## Floating "View Recent Projects" CTA
- New `FloatingProjectsCTA` component: fixed bottom-right (bottom-center on mobile), gradient pill, pulse ring, scroll-to `#projects`, hides while `#projects` is in view (IntersectionObserver), respects `prefers-reduced-motion`.

## Projects section (homepage — concise)
- Replace current Portfolio with 6 glass cards (E-Commerce, Restaurant POS, School Mgmt, HRM, Fee Mgmt, SaaS Product Dev).
- Each card: open-source Unsplash image (no new AI credits), name, one-line description, 3 tech tags, "View Details" → `/projects/$slug`.
- Hover: lift, gradient border bloom, image zoom, tag glow.

## Project Details pages (new route)
- New file `src/routes/projects.$slug.tsx` with data registry `src/config/projects.ts` (slug, name, hero image, description, full features list per user spec, tech stack, business benefits, live demo URL placeholder).
- Layout: **two-column on both desktop and mobile** as requested — left column = description + features grid; right column = mockup image, tech chips, benefits list, sticky "Live Demo" + "Book Consultation" CTAs.
- Feature checklists match user-provided lists for E-Commerce, School, HRM, Fee Mgmt, SaaS (and reasonable defaults for Restaurant POS).
- Per-route `head()` with unique title, description, og:title, og:description, og:image = project image, canonical.
- Page bg `#F8FAFC`, white glass cards, 20–24px radius, soft shadows, framer-style scroll reveals, sticky CTA.

## Tech We Love (redesign)
- Remove marquee. Static responsive grid (2/4/8 cols) of 8 tiles: Firebase, AWS, SQL, MongoDB, Supabase, Node.js, TypeScript, WordPress.
- Each tile: white glass, brand SVG (simple-icons CDN URLs), hover: lift + colored glow matching brand, floating badge micro-anim.

## Products section + dedicated page
- Homepage `LiveProducts`: keep iframe embed system + thumbnails, restyle to light glass, tabs with gradient underline.
- Enhance `/products` route: detailed info per product (overview, screenshots gallery from `embedUrl` iframe + thumbnail, feature grid, pricing tiers (Starter/Growth/Enterprise placeholders), benefits, CTAs). Light theme throughout.

## Motion system
- Keep `framer-motion` + `lenis`. Add reusable `Reveal`, `Parallax`, `Magnetic`, `Tilt` helpers (most already exist — restyle, don't replace).
- Mouse parallax on hero mocks; multi-layer scroll parallax on showcase; staggered reveals on sections; button micro-interactions (scale + gradient shift). All animations honor `prefers-reduced-motion` and run lighter on mobile.

## Other pages
- Restyle `about`, `services`, `portfolio`, `contact` to light theme using new tokens (no content changes). Contact form keeps existing validation; restyled inputs (white, soft border, focus iris ring).
- Footer: light variant, same content/links.

## SEO + perf
- Keep all existing meta, JSON-LD, sitemap, robots.
- Add `og:image` to project detail leaf routes only (not root).
- `<link rel="preconnect">` for Google Fonts + images.
- Lazy-load iframes & images (`loading="lazy"`, `decoding="async"`).
- Reduce particle density on small screens; disable tilt on coarse pointers (already in place).

## Files
**Create**
- `src/config/projects.ts`
- `src/routes/projects.$slug.tsx`
- `src/components/sections/ProjectsGrid.tsx` (homepage)
- `src/components/fx/FloatingProjectsCTA.tsx`
- `src/components/fx/Reveal.tsx` (if not present)

**Rewrite (visual only)**
- `src/styles.css` (full light system + tokens + utilities)
- `src/routes/__root.tsx` (font links, light bg, header/footer)
- `src/components/Header.tsx`, `src/components/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/TechStack.tsx` (static grid, drop marquee)
- `src/components/sections/LiveProducts.tsx`, `ParallaxShowcase.tsx`, `Services.tsx`, `Stats.tsx`, `Testimonials.tsx`, `CTAStrip.tsx`
- `src/components/fx/GlassCard.tsx`, `GradientMesh.tsx`, `Spotlight.tsx`, `ParticleField.tsx` (light-theme tuning)
- `src/routes/index.tsx` (swap Portfolio → ProjectsGrid, mount floating CTA)
- `src/routes/products.tsx`, `portfolio.tsx`, `about.tsx`, `services.tsx`, `contact.tsx` (light restyle)

## Out of scope
- New AI image generation (using open-source Unsplash per your direction).
- Backend/business logic changes.
- Content rewrites beyond the new hero copy you supplied.