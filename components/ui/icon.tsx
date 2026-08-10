type IconName =
  | "arrow"
  | "bot"
  | "calendar"
  | "chart"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "headphones"
  | "lesson"
  | "menu"
  | "message"
  | "music"
  | "play"
  | "spark"
  | "star"
  | "target"
  | "zap";

const paths: Record<IconName, string[]> = {
  arrow: ["M5 12h14", "M13 5l7 7-7 7"],
  bot: ["M12 8V4", "M8 4h8", "M6 10h12v8H6z", "M9 14h.01", "M15 14h.01"],
  calendar: ["M8 3v4", "M16 3v4", "M4 8h16", "M5 5h14v15H5z"],
  chart: ["M4 19h16", "M7 16V9", "M12 16V5", "M17 16v-4"],
  check: ["M20 6 9 17l-5-5"],
  chevron: ["M6 9l6 6 6-6"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 7v5l3 2"],
  close: ["M6 6l12 12", "M18 6L6 18"],
  headphones: ["M4 14v-2a8 8 0 0 1 16 0v2", "M4 14h4v6H4z", "M16 14h4v6h-4z"],
  lesson: ["M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4-4z", "M5 4v12"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  message: ["M21 12a8 8 0 0 1-8 8H6l-3 3v-8a8 8 0 1 1 18-3Z"],
  music: ["M9 18V5l10-2v13", "M9 18a3 3 0 1 1-2-2.83", "M19 16a3 3 0 1 1-2-2.83"],
  play: ["M8 5v14l11-7z"],
  spark: ["M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z"],
  star: ["M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8L6.6 20l1-6-4.4-4.3 6.1-.9z"],
  target: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z", "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"],
  zap: ["M13 2 4 14h7l-1 8 9-12h-7z"],
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 2,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {paths[name].map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  );
}
