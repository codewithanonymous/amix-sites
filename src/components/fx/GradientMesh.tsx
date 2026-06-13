/** Light premium iris gradient mesh — pure CSS, GPU-friendly. */
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-1/3 -left-1/4 h-[55vmax] w-[55vmax] rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" />
      <div
        className="absolute -bottom-1/3 -right-1/4 h-[55vmax] w-[55vmax] rounded-full bg-accent/22 blur-[120px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/20 blur-[140px] animate-glow-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -inset-[20%] opacity-50 animate-aurora"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, oklch(0.60 0.21 275 / 0.35), oklch(0.62 0.22 305 / 0.30), oklch(0.72 0.16 220 / 0.35), oklch(0.60 0.21 275 / 0.35))",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
