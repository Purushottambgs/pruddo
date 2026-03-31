import { ShieldCheck, TrendingDown, MessageSquare, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-indigo-500" />,
    title: "Fake review detection",
    description:
      "Our AI flags purchased reviews, incentivised ratings, and bot clusters — showing you exactly what % of a product's reviews are authentic.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-indigo-500" />,
    title: "Reddit & YouTube consensus",
    description:
      "Real people on Reddit and YouTube can't be gamed. We aggregate community sentiment from thousands of unpaid discussions.",
  },
  {
    icon: <TrendingDown className="h-5 w-5 text-indigo-500" />,
    title: "30-day price history",
    description:
      "See whether a 'sale' is real or manufactured. We track prices across Amazon, Best Buy, Walmart, Sephora, and 8,500+ more stores.",
  },
  {
    icon: <Zap className="h-5 w-5 text-indigo-500" />,
    title: "Results in under 60 seconds",
    description:
      "Paste a URL or search a product name. Our AI runs 6 analysis pipelines in parallel — you get a complete picture faster than you can read one review.",
  },
];

export function WhyPruddo() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: headline */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Why Pruddo
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100">
              Online reviews are{" "}
              <span className="text-red-500">broken.</span>
              <br />
              We fix that.
            </h2>
            <p className="mt-4 text-slate-500">
              42% of Amazon reviews are estimated to be fake. Brands pay
              influencers for five-star YouTube coverage. Pruddo sources only
              from unsponsored Reddit threads and verified community discussions
              — the internet's last honest opinions.
            </p>

            {/* Stat highlight */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                <div className="text-2xl font-bold text-red-600">42%</div>
                <div className="text-xs text-red-500">of Amazon reviews estimated fake</div>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="text-2xl font-bold text-emerald-600">97%</div>
                <div className="text-xs text-emerald-600">fake review detection accuracy</div>
              </div>
            </div>
          </div>

          {/* Right: feature list */}
          <div className="flex flex-col gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
