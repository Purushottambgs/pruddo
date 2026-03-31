import { Link2, Sparkles, ShoppingCart } from "lucide-react";

const STEPS = [
  {
    icon: <Link2 className="h-6 w-6 text-indigo-500" />,
    step: "01",
    title: "Paste any product link",
    description:
      "Drop an Amazon, Sephora, or any retailer URL into Pruddo — or just search by name. Our extension does this automatically as you browse.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-indigo-500" />,
    step: "02",
    title: "AI reads every review",
    description:
      "We scan Reddit threads, YouTube reviews, and Amazon listings simultaneously. Our AI detects fake reviews and weights real community opinions.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-indigo-500" />,
    step: "03",
    title: "Get the trust score + best price",
    description:
      "See a 0–100 trust score, a plain-English verdict, pros & cons, and the lowest current price across 8,500+ stores — all in seconds.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Research any product in 60 seconds
          </h2>
          <p className="mt-3 text-slate-500">
            Stop spending hours reading reviews. Pruddo does it for you.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 sm:block dark:bg-slate-700" />

          {STEPS.map((step) => (
            <div key={step.step} className="relative flex flex-col items-start gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                {step.icon}
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                  {step.step}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
