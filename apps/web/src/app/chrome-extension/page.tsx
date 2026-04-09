import type { Metadata } from "next";
import Link from "next/link";
import { Chrome, Zap, Bell, ShieldCheck, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Chrome Extension",
  description: "Get Pruddo trust scores on any product page without leaving the store.",
};

const FEATURES = [
  {
    icon: Zap,
    title: "Instant trust scores",
    body: "Get Pruddo's AI trust score in a side panel while you browse any product page — Amazon, Sephora, Best Buy, and more.",
  },
  {
    icon: Bell,
    title: "One-click price alerts",
    body: "Set a target price without leaving the product page. We will email you the moment it drops.",
  },
  {
    icon: ShieldCheck,
    title: "Fake review warning",
    body: "A badge appears automatically on Amazon product pages if our model detects a high percentage of suspicious reviews.",
  },
  {
    icon: Star,
    title: "Pros & cons overlay",
    body: "See a summary of what people love and hate about the product without reading hundreds of reviews.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Add to Chrome",
    body: 'Click "Add to Chrome" and confirm the installation. Takes 5 seconds.',
  },
  {
    step: "2",
    title: "Browse any product",
    body: "Visit Amazon, Best Buy, Sephora, or any product page. The Pruddo icon will appear in your toolbar.",
  },
  {
    step: "3",
    title: "Click the icon",
    body: "Click the Pruddo icon to open the side panel. Your trust score loads in seconds.",
  },
];

export default function ChromeExtensionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                <Chrome className="h-3.5 w-3.5" />
                Chrome Extension
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                Pruddo in your browser,{" "}
                <span className="text-indigo-600">always.</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                Get AI trust scores, fake review warnings, and price alerts
                directly on any product page — without opening a new tab.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Button size="lg" className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                  <Chrome className="h-5 w-5" />
                  Add to Chrome — Free
                </Button>
                <p className="text-xs text-slate-400">
                  Manifest V3 · No login required to start
                </p>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-6 lg:justify-start">
                {[
                  { value: "Free", label: "Always free" },
                  { value: "V3", label: "Manifest V3" },
                  { value: "<50ms", label: "Load time" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mockup card */}
            <div className="w-full max-w-xs shrink-0 lg:max-w-sm">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs text-slate-400">Pruddo Side Panel</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/40">
                    <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Trust Score</span>
                    <span className="text-2xl font-bold text-emerald-600">84</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs text-slate-600 dark:text-slate-400">91% authentic reviews</span>
                  </div>
                  <div className="space-y-1.5">
                    {["Great battery life", "Solid build quality"].map((pro) => (
                      <div key={pro} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">{pro}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="sm" className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700">
                    <Bell className="h-3.5 w-3.5" />
                    Set price alert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">What the extension does</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500">{feature.body}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to install */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Install in 3 steps</h2>
          </div>
          <div className="space-y-8">
            {STEPS.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="bg-slate-50 py-12 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
                Privacy-first by design
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
                The extension only activates when you click the Pruddo icon. It does not track your
                browsing history, inject code on every page, or send data without your action.
                All data is stored locally in chrome.storage.local — nothing leaves your browser
                unless you explicitly submit a product for analysis.
              </p>
              <Link href="/privacy" className="mt-2 inline-block text-sm font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-900 dark:text-emerald-400">
                Read our privacy policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <Chrome className="mx-auto mb-4 h-10 w-10 text-indigo-200" />
          <h2 className="text-3xl font-bold text-white">Ready to shop smarter?</h2>
          <p className="mt-3 text-indigo-200">
            Free forever. Works on Chrome, Brave, and Edge.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 bg-white text-indigo-700 hover:bg-indigo-50">
              <Chrome className="h-5 w-5" />
              Add to Chrome — Free
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-indigo-200 hover:bg-indigo-500 hover:text-white">
              <Link href="/">Try the web app first <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
