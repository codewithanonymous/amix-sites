"use client";
import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import type { Product } from "@/config/products";
import { GlassCard } from "@/components/fx/GlassCard";

export function ProductEmbed({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard glow={product.accent} className="p-5 md:p-6 h-full" tilt={false}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">{product.title}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{product.tagline}</p>
        </div>
        <a
          href={product.embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-foreground/60 hover:text-primary transition-colors shrink-0"
        >
          Open <ExternalLink className="size-3" />
        </a>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {product.features.slice(0, 4).map((f) => (
          <span
            key={f}
            className="rounded-full bg-foreground/[0.04] border border-foreground/8 px-2.5 py-1 text-[11px] font-medium text-foreground/75"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-foreground/8 bg-surface">
        {open ? (
          <iframe
            src={product.embedUrl}
            title={`${product.title} live demo`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="fullscreen"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Launch ${product.title} live demo`}
          >
            <img
              src={product.thumbnail}
              alt={`${product.title} preview`}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-[0_14px_36px_-12px_rgba(15,23,42,0.4)]">
                <Play className="size-4 text-primary" /> Launch live demo
              </span>
            </div>
          </button>
        )}
      </div>
    </GlassCard>
  );
}
