import Link from "next/link";
import { ArrowRight, Shield, Zap, Eye, Heart, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

const STATS = [
  { value: "2M+", label: "Products analyzed" },
  { value: "48M+", label: "Reviews processed" },
  { value: "142K+", label: "Shoppers helped weekly" },
  { value: "94%", label: "Fake review detection accuracy" },
];

const VALUES = [
  {
    icon: Shield,
    title: "Radical transparency",
    description:
      "We show you exactly where our scores come from — every review source, every signal. No black boxes.",
  },
  {
    icon: Eye,
    title: "Fake review detection",
    description:
      "Our AI flags suspicious patterns: incentivized reviews, review farms, and coordinated bursts. You see the real picture.",
  },
  {
    icon: Zap,
    title: "Speed over everything",
    description:
      "Research that used to take an hour takes 60 seconds. We aggregate, you decide — never the other way around.",
  },
  {
    icon: Heart,
    title: "Always on your side",
    description:
      "We earn affiliate commissions when you buy through our links — but this never, ever influences a trust score.",
  },
];

const TEAM = [
  {
    name: "Purushottam",
    role: "Founder & CEO",
    bio: "Built Pruddo after spending three hours researching a blender, only to return it a week later. There had to be a better way.",
    avatar: "P",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "AI Team",
    role: "Machine Learning",
    bio: "Specialists in NLP, sentiment analysis, and anomaly detection — the brains behind the trust score engine.",
    avatar: "AI",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Product Team",
    role: "Design & Engineering",
    bio: "Obsessed with making complex review data feel instantly understandable. Every pixel has a purpose.",
    avatar: "UX",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pb-20 pt-20 dark:from-slate-950 dark:to-slate-900">
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
            <Star className="h-3.5 w-3.5" />
            Our story
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
            Shopping online is{" "}
            <span className="text-red-500">broken.</span>
            <br />
            We&apos;re fixing it.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            Pruddo was built on a simple belief: every shopper deserves access
            to honest, unfiltered information before they spend their money.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our story ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
            The problem we&apos;re solving
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              Before buying a $60 moisturizer, a rational person might want to
              know: does it actually work? The obvious next step is reading
              reviews — but that rabbit hole leads to Amazon ratings that may be
              inflated by incentivized buyers, Reddit threads scattered across
              five subreddits, and YouTube videos that bury their verdict at the
              12-minute mark.
            </p>
            <p>
              We&apos;ve all been there. You open 12 tabs, spend an hour
              reading, and still feel uncertain. Then you buy it anyway — and
              sometimes return it anyway.
            </p>
            <p>
              Pruddo collapses that entire process into 60 seconds. We pull
              every meaningful signal, run it through AI trained to spot fake
              reviews and surface real consensus, and hand you a single
              trustworthy score along with the honest pros, cons, and the lowest
              price available right now.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              What we stand for
            </h2>
            <p className="mt-3 text-slate-500">
              Four principles that guide every product decision we make.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-slate-100">
            How Pruddo works
          </h2>
          <ol className="space-y-8">
            {[
              {
                step: "01",
                title: "You paste a link or search a product",
                body: "Drop any Amazon, Sephora, or product URL into Pruddo — or just type the product name. We handle the rest.",
              },
              {
                step: "02",
                title: "We fetch every relevant review",
                body: "Our crawler pulls discussions from Reddit, long-form YouTube reviews, and verified Amazon purchases — not cherry-picked, all of it.",
              },
              {
                step: "03",
                title: "AI analyzes, weighs, and filters",
                body: "Claude (by Anthropic) reads the reviews, detects anomalies consistent with fake or incentivized reviews, and weighs authentic signals more heavily.",
              },
              {
                step: "04",
                title: "You get a clear verdict in seconds",
                body: "A 0–100 trust score, honest pros & cons, the percentage of suspicious reviews, and the lowest current price across major retailers.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="shrink-0 text-3xl font-bold text-slate-200 dark:text-slate-700">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Users className="mx-auto mb-4 h-8 w-8 text-indigo-500" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              The team
            </h2>
            <p className="mt-3 text-slate-500">
              A small, focused team obsessed with honest information.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name} className="border-slate-200 text-center dark:border-slate-800">
                <CardContent className="p-6">
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold ${member.color}`}
                  >
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-xs text-indigo-600">{member.role}</p>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-bold text-white">
            Ready to shop smarter?
          </h2>
          <p className="mt-3 text-indigo-200">
            Join 142,000+ shoppers who use Pruddo before every purchase.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-white text-indigo-700 hover:bg-indigo-50"
            >
              <Link href="/">
                Try it free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-indigo-200 hover:bg-indigo-500 hover:text-white"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
