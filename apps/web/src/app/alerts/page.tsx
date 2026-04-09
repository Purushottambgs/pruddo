import type { Metadata } from "next";
import Link from "next/link";
import { Bell, TrendingDown, Zap, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Price Alerts",
  description: "Get notified when a product drops to your target price. Never overpay again.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: ArrowRight,
    title: "Analyze any product",
    body: "Paste an Amazon, Sephora, or any product URL into Pruddo and run an analysis.",
  },
  {
    step: "02",
    icon: Bell,
    title: "Set your target price",
    body: "After the analysis, click 'Set price alert' and enter the price you are willing to pay.",
  },
  {
    step: "03",
    icon: TrendingDown,
    title: "We watch the price",
    body: "Pruddo monitors the price every hour across major retailers and tracks historical trends.",
  },
  {
    step: "04",
    icon: Mail,
    title: "Get notified instantly",
    body: "The moment the price drops to or below your target, we email you with a direct link to buy.",
  },
];

const FEATURES = [
  {
    title: "Hourly price monitoring",
    description: "We check prices every hour — not once a day like other tools.",
    icon: Zap,
  },
  {
    title: "Any target price",
    description: "Set any price you want. No minimums, no restrictions.",
    icon: TrendingDown,
  },
  {
    title: "Instant email alerts",
    description: "Get notified the moment the price drops, not hours later.",
    icon: Mail,
  },
  {
    title: "Price history charts",
    description: "See 30-day price history so you know if a 'deal' is actually a deal.",
    icon: CheckCircle2,
  },
  {
    title: "Multiple alerts",
    description: "Track as many products as you want. No artificial limits.",
    icon: Bell,
  },
  {
    title: "Chrome extension",
    description: "Set alerts directly from any product page without opening a new tab.",
    icon: ArrowRight,
  },
];

export default function AlertsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <Bell className="h-3.5 w-3.5" />
            Price Alerts
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Never overpay again.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Set your target price on any product and Pruddo will email you the
            instant it drops. We monitor prices hourly across Amazon, Best Buy,
            Walmart, and more.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                Analyze a product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/chrome-extension">Get the Chrome extension</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">How price alerts work</h2>
            <p className="mt-3 text-slate-500">Four steps, takes less than 30 seconds to set up.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex flex-col items-start">
                <span className="mb-3 text-4xl font-bold text-slate-200 dark:text-slate-700">
                  {item.step}
                </span>
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Everything you need</h2>
            <p className="mt-3 text-slate-500">Pruddo price alerts are free, no credit card required.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tip section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-8 dark:border-indigo-900 dark:bg-indigo-950/40">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
                <TrendingDown className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100">
                  Pro tip: Check price history before buying
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-800 dark:text-indigo-300">
                  Many products are listed at a fake "sale" price with an inflated original price.
                  Pruddo's 30-day price history chart shows you whether a product is genuinely on
                  sale or has been at this price for months. Always check before you click buy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <Bell className="mx-auto mb-4 h-10 w-10 text-indigo-200" />
          <h2 className="text-3xl font-bold text-white">Start tracking prices today</h2>
          <p className="mt-3 text-indigo-200">
            Free forever. No credit card. Works on Amazon, Best Buy, Walmart, Target, and more.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 gap-2 bg-white text-indigo-700 hover:bg-indigo-50"
          >
            <Link href="/">
              Analyze your first product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
