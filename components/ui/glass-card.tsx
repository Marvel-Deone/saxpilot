import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/25 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
