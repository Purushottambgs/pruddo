import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Pruddo — Real reviews. Real prices. Before you buy.",
    template: "%s · Pruddo",
  },
  description:
    "Pruddo detects fake reviews and generates AI trust scores from Reddit, YouTube, and Amazon — plus 30-day price history across 8,500+ stores.",
  openGraph: {
    title: "Pruddo — Real reviews. Real prices.",
    description: "Stop getting fooled by fake reviews. Get the trust score before you buy.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 antialiased dark:bg-slate-950">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
