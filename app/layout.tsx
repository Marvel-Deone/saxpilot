import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saxpilot.app"),
  title: {
    default: "SaxPilot - Your Saxophone Practice Companion",
    template: "%s | SaxPilot",
  },
  description:
    "SaxPilot helps saxophone players follow personalized roadmaps, daily practice routines, progress tracking, and timely guidance.",
  applicationName: "SaxPilot",
  keywords: [
    "saxophone lessons",
    "learn saxophone",
    "practice planner",
    "personalized music learning",
    "saxophone practice companion",
  ],
  authors: [{ name: "SaxPilot" }],
  creator: "SaxPilot",
  openGraph: {
    title: "SaxPilot - Your Saxophone Practice Companion",
    description:
      "Personalized saxophone roadmaps, daily practice routines, and timely guidance for modern learners.",
    url: "https://saxpilot.app",
    siteName: "SaxPilot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaxPilot - Your Saxophone Practice Companion",
    description:
      "Personalized saxophone roadmaps, daily practice routines, and timely guidance for modern learners.",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
