"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassCard } from "@/components/ui/glass-card";
import { Icon } from "@/components/ui/icon";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceWorkerRegister } from "@/components/landing/service-worker-register";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { cn } from "@/lib/utils";

const trusted = ["Personal Roadmaps", "Beginner Friendly", "Progress Tracking", "Practice Routines", "Clear Next Steps"];

const featureCards = [
  {
    title: "Personal Roadmap",
    copy: "A level-aware learning path shaped by goals, schedule, musical background, and current confidence.",
    icon: "target",
    className: "lg:col-span-2 lg:row-span-2",
  },
  
  {
    title: "Daily Practice Planner",
    copy: "Warmups, tone work, scales, lessons, and free play sized to the exact minutes you can commit.",
    icon: "calendar",
    className: "lg:col-span-2",
  },
  {
    title: "Progress Tracking",
    copy: "Streaks, lesson progress, roadmap percentage, and weekly completion keep momentum visible.",
    icon: "chart",
    className: "",
  },
  {
    title: "Practice Guide",
    copy: "Short, saxophone-specific prompts that keep learners moving without pretending to hear or see them.",
    icon: "message",
    className: "",
  },
  {
    title: "Milestones",
    copy: "Celebrate first notes, first scale, first module, and every visible improvement on the way.",
    icon: "spark",
    className: "lg:col-span-2",
  },
] as const;

const benefits = [
  ["zap", "Learn Faster", "Know what to practice today instead of wandering through random videos."],
  ["clock", "Stay Consistent", "Schedules become realistic weekly routines with daily check-ins."],
  ["target", "Made Around You", "Every roadmap starts with the learner, not a generic curriculum."],
  ["music", "Practice With Purpose", "Sessions blend embouchure, tone, rhythm, scales, and lessons."],
  ["lesson", "Expert Curriculum", "Structured modules support beginners and returning players."],
  ["chart", "Track Every Milestone", "Progress is visible, motivating, and easy to resume."],
] as const;

const timeline = [
  ["Share Your Starting Point", "Add experience, goals, instrument, schedule, and learning preferences."],
  ["Get Your Roadmap", "Receive a classified level and a focused first four weeks."],
  ["Daily Practice", "Follow a checklist that fits your available minutes."],
  ["Weekly Tune-Up", "Review progress and adapt the routine as your consistency changes."],
  ["Master the Saxophone", "Build tone, reading, technique, and confidence one milestone at a time."],
];

const testimonials = [
  ["SM", "Sarah M.", "Software Engineer", "I wasted months watching videos. SaxPilot finally gave me structure and a reason to show up every day."],
  ["BO", "Biodun O.", "Returning Player", "It understood that I was rusty, not new. That alone made the roadmap feel dramatically more useful."],
  ["TC", "Teni C.", "School Learner", "The streaks and daily checklist make practice feel clear. I always know what the next step is."],
];

const faqs = [
  ["Is SaxPilot for complete beginners?", "Yes. The onboarding classifies learners from complete beginner through intermediate and returning player, then adapts the roadmap accordingly."],
  ["Does SaxPilot listen to my saxophone playing?", "No. SaxPilot focuses on guided setup, roadmap building, practice prompts, and accountability. Audio and video feedback are planned for a later phase."],
  ["How does SaxPilot create my roadmap?", "It uses your experience, goals, schedule, learning style, and known challenges to build a structured sequence of lessons and routines."],
  ["Will there be pricing?", "Pricing is coming later."],
  // ["Can I use it on mobile?", "Yes. The web app is designed as an installable PWA and lays the groundwork for future native mobile apps."],
];

export function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SaxPilot",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description:
      "Personalized saxophone learning with roadmaps, practice routines, progress tracking, and timely guidance.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b1020] text-white">
      <ServiceWorkerRegister />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <GuidedSetup />
        <Problem />
        <Features />
        <DashboardShowcase />
        <Benefits />
        <Timeline />
        {/* <Testimonials /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

// function Navbar() {
//   const links = [
//     ["Features", "#features"],
//     ["Roadmap", "#roadmap"],
//     ["How It Works", "#how-it-works"],
//     // ["Testimonials", "#testimonials"],
//     ["FAQ", "#faq"],
//   ];

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#0b1020]/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
//         <Link href="/" className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#6dd3ff]">
//           <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#1f7ae0] to-[#6dd3ff] text-[#0b1020]">
//             <Icon name="music" className="h-5 w-5" />
//           </span>
//           <span className="text-base font-semibold tracking-tight">SaxPilot</span>
//         </Link>
//         <div className="hidden items-center gap-6 lg:flex">
//           {links.map(([label, href]) => (
//             <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
//               {label}
//             </a>
//           ))}
//         </div>
//         <div className="hidden items-center gap-3 sm:flex">
//           {/* <Link href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:text-white">
//             Login
//           </Link> */}
//           {/* <Link href="/register" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1020] transition hover:bg-[#6dd3ff]">
//             Get Started
//           </Link> */}
//           <Link href="#waitlist" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1020] transition hover:bg-[#6dd3ff]">
//             Join Waitlist
//           </Link>
//         </div>
//         <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white sm:hidden" aria-label="Open navigation menu">
//           <Icon name="menu" />
//         </button>
//       </nav>
//     </header>
//   );
// }
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Features", "#features"],
    ["Roadmap", "#roadmap"],
    ["How It Works", "#how-it-works"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="relative mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-[#0b1020]/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#6dd3ff]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#1f7ae0] to-[#6dd3ff] text-[#0b1020]">
              <Icon name="music" className="h-5 w-5" />
            </span>

            <span className="text-base font-semibold tracking-tight">
              SaxPilot
            </span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="#waitlist"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1020] transition hover:bg-[#6dd3ff]"
            >
              Join Waitlist
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white sm:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? ("close" as any) : ("menu" as any)} />
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 sm:hidden">
            <div className="flex flex-col gap-1">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}

              <Link
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#0b1020] transition hover:bg-[#6dd3ff]"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen px-6 pb-20 pt-32 sm:pt-40">
      <Ambient />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <Icon name="spark" className="h-4 w-4 text-[#f59e0b]" />
            Built for modern learners
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-[84px]">
            A Clearer Path to Better Playing, From Practice to Progress.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Learn through a personalized roadmap tailored to your experience, goals, schedule, and learning style.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            {/* <AnimatedButton href="/register">Start Learning Free</AnimatedButton> */}
            <AnimatedButton href="#waitlist">Join the Waitlist</AnimatedButton>
            <AnimatedButton href="#demo" variant="secondary" icon="play">
              Watch Demo
            </AnimatedButton>
          </div>
          {/* <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {["No audio feedback in MVP", "Roadmap in minutes", "PWA-ready"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2">
                {item}
              </span>
            ))}
          </div> */}
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}

function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1f7ae0]/20 blur-3xl animate-float" />
      <div className="absolute right-0 top-36 h-[420px] w-[420px] rounded-full bg-[#6dd3ff]/16 blur-3xl animate-float-delayed" />
      <div className="absolute bottom-10 left-10 h-[340px] w-[340px] rounded-full bg-[#f59e0b]/12 blur-3xl animate-float-slow" />
      <div className="noise absolute inset-0 opacity-[0.17]" />
    </div>
  );
}

function HeroDashboard() {
  const tasks = ["Warmup long tones", "B-flat to F transitions", "C major scale"];
  return (
    <div className="relative animate-rise-delayed">
      <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-[#1f7ae0]/30 via-transparent to-[#f59e0b]/20 blur-2xl" />
      <GlassCard className="relative overflow-hidden p-4 sm:p-5">
        <div className="rounded-[20px] border border-white/10 bg-[#0e172b]/90 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Today&apos;s Practice</p>
              <h2 className="mt-1 text-xl font-semibold">Rebuild embouchure</h2>
            </div>
            <span className="rounded-full bg-[#f59e0b]/15 px-3 py-1 text-sm font-semibold text-[#f59e0b]">28-day streak</span>
          </div>
          <div className="mt-6 space-y-3">
            {tasks.map((task, index) => (
              <div key={task} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.045] p-3">
                <span className={cn("grid h-7 w-7 place-items-center rounded-full", index === 0 ? "bg-[#6dd3ff] text-[#0b1020]" : "bg-white/10 text-[#6dd3ff]")}>
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-100">{task}</span>
                <span className="ml-auto text-xs text-slate-400">{(index + 1) * 5} min</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Metric label="Lesson" value="14" />
            <Metric label="Roadmap" value="74%" />
          </div>
          <div className="mt-4 rounded-[18px] border border-[#6dd3ff]/20 bg-[#1f7ae0]/10 p-4">
            <div className="flex items-center gap-3">
              <Icon name="message" className="h-5 w-5 text-[#6dd3ff]" />
              <p className="text-sm font-semibold">Practice Guide</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Keep the jaw relaxed today. Long tones first, then short scale runs before speed.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-white/8 bg-white/[0.045] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}

function Trusted() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
        {trusted.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function GuidedSetup() {
  return (
    <section id="demo" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          align="left"
          eyebrow="Guided setup"
          title="A practice path that starts by understanding you."
          copy="SaxPilot opens with a simple musical check-in that captures experience, goals, schedule, instrument type, and learning preference before any roadmap is built."
        />
        <GlassCard className="p-5">
          <div className="space-y-4 rounded-[22px] bg-[#0e172b] p-4">
            <Chat role="SaxPilot" text="Tell me about your saxophone experience." />
            <Chat role="You" text="I played 10 years ago, but I feel rusty." align="right" />
            <Chat role="SaxPilot" text="Great. We will rebuild embouchure and tone first, then move into scales and reading confidence." />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Chat({ role, text, align = "left" }: { role: string; text: string; align?: "left" | "right" }) {
  return (
    <div className={cn("flex", align === "right" && "justify-end")}>
      <div className={cn("max-w-[82%] rounded-[20px] border p-4", align === "right" ? "border-[#6dd3ff]/20 bg-[#1f7ae0]/20" : "border-white/10 bg-white/[0.06]")}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6dd3ff]">{role}</p>
        <p className="mt-2 text-sm leading-6 text-slate-100">{text}</p>
      </div>
    </div>
  );
}

function Problem() {
  const bad = ["Random YouTube videos", "No progress tracking", "No feedback loop", "No accountability", "Giving up quietly"];
  const good = ["Personal roadmap", "Daily tasks", "Weekly plan", "Practice guide", "Progress tracking"];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="The problem" title="Traditional self-learning loses the plot." copy="Most saxophone learners do not need more content. They need sequence, confidence, and a clear reason to keep practicing." />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Comparison title="Traditional learning" items={bad} tone="bad" />
          <Comparison title="SaxPilot learning" items={good} tone="good" />
        </div>
      </div>
    </section>
  );
}

function Comparison({ title, items, tone }: { title: string; items: string[]; tone: "bad" | "good" }) {
  return (
    <GlassCard className={cn("p-5", tone === "good" && "border-[#6dd3ff]/25 bg-[#1f7ae0]/10")}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.045] p-4">
            <span className={cn("grid h-8 w-8 place-items-center rounded-full", tone === "good" ? "bg-[#6dd3ff] text-[#0b1020]" : "bg-white/10 text-slate-400")}>
              <Icon name={tone === "good" ? "check" : "chevron"} className="h-4 w-4" />
            </span>
            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Features" title="Everything is shaped around practice momentum." copy="A bento-style system for setup, planning, lessons, guidance, tracking, and celebration." />
        <div className="mt-14 grid auto-rows-[260px] gap-5 lg:grid-cols-4">
          {featureCards.map((feature) => (
            <GlassCard key={feature.title} className={cn("group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6dd3ff]/30", feature.className)}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#1f7ae0]/15 opacity-0 transition group-hover:opacity-100" />
              <Icon name={feature.icon} className="relative h-8 w-8 text-[#6dd3ff]" />
              <h3 className="relative mt-8 text-2xl font-semibold">{feature.title}</h3>
              <p className="relative mt-4 max-w-md text-sm leading-7 text-slate-300">{feature.copy}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardShowcase() {
  return (
    <section id="roadmap" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Dashboard" title="A real product surface, not a decorative mockup." copy="The dashboard makes today's lesson, practice streak, weekly progress, roadmap, practice note, and quick actions instantly scannable." />
        <GlassCard className="mt-14 overflow-hidden p-3 sm:p-5">
          <div className="grid min-h-[640px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0c1426] lg:grid-cols-[240px_1fr]">
            <aside className="hidden border-r border-white/10 bg-white/[0.03] p-5 lg:block">
              <div className="flex items-center gap-3 text-lg font-semibold"><Icon name="music" className="text-[#6dd3ff]" /> SaxPilot</div>
              <div className="mt-10 space-y-2">
                {["Dashboard", "Lessons", "Roadmap", "Guide", "Progress", "Settings"].map((item, index) => (
                  <div key={item} className={cn("rounded-2xl px-4 py-3 text-sm", index === 0 ? "bg-white text-[#0b1020]" : "text-slate-300")}>{item}</div>
                ))}
              </div>
            </aside>
            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-400">Good Evening, Marvel</p>
                  <h3 className="mt-1 text-3xl font-semibold">Today is tone and timing.</h3>
                </div>
                <button className="h-12 rounded-full bg-[#6dd3ff] px-5 text-sm font-semibold text-[#0b1020]">Continue Lesson</button>
              </div>
              <div className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                <Panel title="Today's Lesson" icon="lesson">
                  <div className="mt-4 rounded-2xl bg-white/[0.055] p-4">
                    <p className="font-semibold">Long tones and breath control</p>
                    <div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-full w-[74%] rounded-full bg-gradient-to-r from-[#1f7ae0] to-[#6dd3ff]" /></div>
                    <p className="mt-3 text-sm text-slate-400">Lesson 14 - 18 minutes</p>
                  </div>
                </Panel>
                <Panel title="Practice Timer" icon="clock">
                  <div className="mt-4 grid place-items-center rounded-2xl bg-[#f59e0b]/10 p-8 text-center">
                    <p className="text-5xl font-semibold">25:00</p>
                    <p className="mt-2 text-sm text-slate-300">Recommended session</p>
                  </div>
                </Panel>
                <Panel title="Weekly Progress" icon="chart">
                  <div className="mt-4 flex h-36 items-end gap-3">
                    {[48, 76, 64, 90, 58, 82, 72].map((height, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center gap-2">
                        <span className="w-full rounded-t-xl bg-gradient-to-t from-[#1f7ae0] to-[#6dd3ff]" style={{ height: `${height}%` }} />
                        <span className="text-xs text-slate-500">D{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
                <Panel title="Practice Guide" icon="message">
                  <p className="mt-4 rounded-2xl bg-[#1f7ae0]/14 p-4 text-sm leading-6 text-slate-200">
                    Start slower than you think. If the tone wobbles, reduce volume and keep airflow steady.
                  </p>
                </Panel>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Panel({ title, icon, children }: { title: string; icon: Parameters<typeof Icon>[0]["name"]; children: React.ReactNode }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-200"><Icon name={icon} className="h-4 w-4 text-[#6dd3ff]" /> {title}</div>
      {children}
    </div>
  );
}

function Benefits() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Benefits" title="Built for the moment learners usually quit." copy="SaxPilot reduces uncertainty, shows progress, and keeps each practice session small enough to start." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([icon, title, copy]) => (
            <GlassCard key={title} className="p-6 transition hover:-translate-y-1 hover:border-[#6dd3ff]/30">
              <Icon name={icon} className="h-7 w-7 text-[#f59e0b]" />
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="How it works"
          title="A guided journey from first answer to daily progress."
          copy="The learning path is simple enough to understand and adaptive enough to keep improving."
        />

        <div className="mt-14 space-y-8">
          {timeline.map(([title, copy], index) => (
            <div key={title} className="relative flex gap-5">
              <div className="relative shrink-0">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[#0b1020] text-sm font-semibold text-[#6dd3ff]">
                  {index + 1}
                </span>

                {index < timeline.length - 1 && (
                  <div className="absolute left-1/2 top-10 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#6dd3ff] via-[#1f7ae0] to-[#f59e0b]" />
                )}
              </div>

              <GlassCard className="flex-1 p-5">
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {copy}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Testimonials" title="Designed for learners who need structure." copy="The product voice is encouraging, specific, and grounded in real practice behavior." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map(([initials, name, role, quote]) => (
            <GlassCard key={name} className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#1f7ae0] to-[#f59e0b] text-sm font-bold">{initials}</div>
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-slate-400">{role}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-1 text-[#f59e0b]">{Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">&ldquo;{quote}&rdquo;</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="Clear answers before the first note." copy="A practical overview of pricing, lessons, roadmaps, practice guidance, and mobile support." />
        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-[22px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                {question}
                <Icon name="chevron" className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// function CTA() {
//   return (
//     <section className="px-6 py-24">
//       <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1f7ae0] via-[#113a76] to-[#f59e0b] p-10 text-center shadow-2xl shadow-[#1f7ae0]/20 sm:p-16">
//         <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Ready to Practice With Direction?</h2>
//         <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">Start with a roadmap that knows where you are, where you want to go, and how much time you actually have.</p>
//         <div className="mt-9"><AnimatedButton href="/register">Start Learning Free</AnimatedButton></div>
//       </div>
//     </section>
//   );
// }
function CTA() {
  return (
    <section id="waitlist" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1f7ae0] via-[#113a76] to-[#f59e0b] p-10 text-center shadow-2xl shadow-[#1f7ae0]/20 sm:p-16">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 backdrop-blur">
            Early access
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Be First to Start Your SaxPilot Journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Join the waitlist for early access to personalized saxophone
            roadmaps, smarter practice routines, progress tracking, and AI
            coaching.
          </p>

          <div className="mt-9">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 text-lg font-semibold"><Icon name="music" className="text-[#6dd3ff]" /> SaxPilot</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">Your saxophone practice companion. Personalized learning. Steadier progress.</p>
        </div>
        {[
          ["Product", "Features", "Roadmap"],
          ["Company", "Contact", "Newsletter"],
          ["Legal", "Privacy", "Terms"],
        ].map(([heading, ...items]) => (
          <div key={heading}>
            <h3 className="text-sm font-semibold text-white">{heading}</h3>
            <div className="mt-4 space-y-3">
              {items.map((item) => <a key={item} href="#" className="block text-sm text-slate-400 transition hover:text-white">{item}</a>)}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
