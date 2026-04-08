import Link from "next/link";
import { ArrowRight, Link2, Sparkles, ShoppingCart, TrendingDown, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

const STEPS = [
  {
    step: "01",
    icon: Link2,
    title: "Paste a product link or search by name",
    description:
      "Drop any Amazon, Sephora, or retailer URL into Pruddo — or just type the product name. Our Chrome extension does this automatically as you browse Amazon.",
    detail: "Supports Amazon, Sephora, iHerb, and more",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "We fetch every relevant review",
    description:
      "Our system pulls Reddit discussions, YouTube long-form reviews, and Amazon verified purchase reviews — all at once. Nothing is cherry-picked.",
    detail: "Reddit · YouTube · Amazon · Expert blogs",
  },
  {
    step: "03",
    icon: Shield,
    title: "AI filters fake reviews automatically",
    description:
      "Claude (by Anthropic) reads every review, detects suspicious patterns — incentivized purchases, review farms, coordinated bursts — and weights authentic signals more heavily.",
    detail: "94% fake review detection accuracy",
  },
  {
    step: "04",
    icon: ShoppingCart,
    title: "You get a clear verdict in seconds",
    description:
      "A 0–100 trust score, a plain-English verdict (Great Buy / Consider / Avoid), honest pros & cons, and the percentage of suspicious reviews — all in one view.",
    detail: "Results in under 60 seconds",
  },
];

const EXTRA_FEATURES = [
  {
    icon: TrendingDown,
    title: "30-day price history",
    description:
      "See if that 'limited time deal' is real. Pruddo tracks price changes across 8,500+ retailers so you always know when it's actually a good time to buy.",
  },
  {
    icon: Clock,
    title: "Price alerts",
    description:
      "Set a target price and we'll email you the moment a product drops below it. No more manually checking listings every few days.",
  },
  {
    icon: Shield,
    title: "Trust score explained",
    description:
      "Every score comes with a breakdown of which sources contributed, what percentage of reviews were flagged as suspicious, and the key themes from real buyers.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pb-16 pt-20 dark:from-slate-950 dark:to-slate-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <Sparkles className="h-3.5 w-3.5" />
            How it works
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
            Research any product
            <br />
            in{" "}
            <span className="text-indigo-500">60 seconds.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            Stop spending hours reading reviews across five different tabs.
            Pruddo aggregates every signal that matters and hands you one
            trustworthy answer.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                Try it now — it&apos;s free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Steps ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 1;
              return (
                <div
                  key={item.step}
                  className={`flex flex-col gap-8 sm:flex-row sm:items-center ${isEven ? "sm:flex-row-reverse" : ""}`}
                >
                  {/* Icon block */}
                  <div className="flex shrink-0 flex-col items-center gap-3 sm:w-48">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                      <Icon className="h-8 w-8 text-indigo-500" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500 dark:bg-slate-800">
                      {item.detail}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Connector (hidden on mobile) */}
                  {index < STEPS.length - 1 && (
                    <div className="mx-auto h-8 w-px bg-slate-200 sm:hidden dark:bg-slate-700" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Extra features ────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              More than just a trust score
            </h2>
            <p className="mt-3 text-slate-500">
              Pruddo gives you every tool to shop with confidence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {EXTRA_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Common questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Which retailers does Pruddo support?",
                a: "Right now Pruddo works best with Amazon product links. Support for Sephora, iHerb, Best Buy, and Target is actively being added. You can also search by product name to find items from any retailer in our database.",
              },
              {
                q: "How accurate is the fake review detection?",
                a: "Our AI achieves ~94% accuracy in detecting manipulated reviews in internal testing, benchmarked against confirmed fake review datasets. No system is perfect — we show you the percentage of flagged reviews alongside the trust score so you can weigh that yourself.",
              },
              {
                q: "How often are trust scores updated?",
                a: "Trust scores are recalculated every 48 hours for products with recent activity. Prices are refreshed every hour.",
              },
              {
                q: "Does the Chrome extension track my browsing?",
                a: "No. The extension only activates on Amazon product pages and only sends the product ASIN to our API. It does not track browsing history, log your searches, or share any personal data.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border-b border-slate-200 pb-6 last:border-0 dark:border-slate-800"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-bold text-white">
            Ready to try it yourself?
          </h2>
          <p className="mt-3 text-indigo-200">
            Paste any Amazon link and get a trust score in under 60 seconds.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 gap-2 bg-white text-indigo-700 hover:bg-indigo-50"
          >
            <Link href="/">
              Analyze a product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
