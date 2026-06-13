import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl px-4",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-foreground/8 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-foreground/70 uppercase shadow-soft">
          <span className="size-1.5 rounded-full bg-cyber shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
