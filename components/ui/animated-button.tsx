import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
}: Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: "arrow" | "play";
}>) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-[#6dd3ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1020] sm:h-14 sm:px-7",
        variant === "primary"
          ? "bg-white text-[#0b1020] shadow-xl shadow-[#1f7ae0]/20 hover:-translate-y-0.5 hover:bg-[#6dd3ff]"
          : "border border-white/15 bg-white/[0.06] text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]",
      )}
    >
      {icon === "play" ? <Icon name="play" className="h-4 w-4 fill-current" /> : null}
      <span>{children}</span>
      {icon === "arrow" ? <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /> : null}
    </Link>
  );
}
