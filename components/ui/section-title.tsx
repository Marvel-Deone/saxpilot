import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left")}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6dd3ff]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>
    </div>
  );
}
