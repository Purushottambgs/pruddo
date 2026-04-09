import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, ShieldCheck, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Pruddo earns affiliate commissions and why it never affects our trust scores.",
};

const RETAILERS = [
  { name: "Amazon Associates", logo: "🛒", commission: "1–10% depending on category" },
  { name: "Best Buy Affiliate Program", logo: "🔵", commission: "Up to 1%" },
  { name: "Walmart Affiliate Program", logo: "🟡", commission: "Up to 4%" },
  { name: "Target Partners", logo: "🎯", commission: "Up to 8%" },
  { name: "Sephora Affiliate Program", logo: "🌸", commission: "Up to 5%" },
];

const FAQS = [
  {
    q: "Does affiliate commission influence trust scores?",
    a: "No. Our trust score pipeline runs entirely independently of our affiliate layer. The AI model has no knowledge of which retailers pay us commissions, and scores are calculated before any affiliate links are generated.",
  },
  {
    q: "How do I know a link is an affiliate link?",
    a: "Any link with a 'Buy on [Retailer]' button or 'View product' CTA on an analysis page is an affiliate link. We do not hide this — it is how we keep Pruddo free.",
  },
  {
    q: "Do affiliate links cost me more?",
    a: "No. The price you pay is exactly the same whether you click through Pruddo or go directly to the retailer. The commission comes from the retailer's marketing budget, not from you.",
  },
  {
    q: "What if I don't want to use affiliate links?",
    a: "You can always search for the product directly on the retailer's website. We show the product name, ASIN, and retailer so you can find it yourself.",
  },
  {
    q: "Is this required by law to disclose?",
    a: "Yes. The FTC (US) and ASA (UK) require clear disclosure of affiliate relationships. We believe in transparency regardless of legal requirement.",
  },
];

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <DollarSign className="h-3.5 w-3.5" />
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Affiliate Disclosure
          </h1>
          <p className="mt-4 text-slate-500">Last updated: April 9, 2026</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Pruddo is free to use. Here is how we keep the lights on — and why
            it never compromises the honesty of our trust scores.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* The disclosure */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/30">
            <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
              <strong>Disclosure:</strong> Pruddo participates in affiliate marketing programs. When you click a product link on Pruddo and make a purchase, we may earn a small commission from the retailer at no extra cost to you. This is how we fund development and keep Pruddo free.
            </p>
          </div>

          {/* How it works */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
              How our affiliate model works
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                When you click a "Buy on Amazon" or "View product" button on any Pruddo analysis page, we append an affiliate tracking parameter to the URL. If you complete a purchase within the retailer's attribution window (typically 24 hours for Amazon), we receive a percentage of the sale value.
              </p>
              <p>
                We use these commissions to pay for server costs, AI API usage, development, and the team that builds Pruddo. Without affiliate revenue, we would need to charge for access or show ads — neither of which aligns with our mission.
              </p>
            </div>
          </div>

          {/* Firewall section */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
              The firewall between money and scores
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Scores first",
                  body: "Trust scores are calculated by our AI before any affiliate link is generated. The model has no commercial context.",
                },
                {
                  icon: ShieldCheck,
                  title: "No retailer influence",
                  body: "Retailers cannot pay to improve their scores. Our scoring pipeline has no input from our business team.",
                },
                {
                  icon: ShieldCheck,
                  title: "Negative scores published",
                  body: "We publish low trust scores even when it means fewer affiliate conversions. Honesty is non-negotiable.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="border-emerald-100 dark:border-emerald-900">
                    <CardContent className="p-5">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950">
                        <Icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <h3 className="mb-1 font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500">{item.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Affiliate programs */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Affiliate programs we participate in
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-950">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-slate-500">Retailer</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-500">Typical Commission</th>
                    <th className="px-4 py-3 text-left font-medium text-slate-500">Program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {RETAILERS.map((r) => (
                    <tr key={r.name} className="bg-white dark:bg-slate-900">
                      <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                        {r.logo} {r.name.split(" Affiliate")[0].split(" Partners")[0]}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{r.commission}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-xs text-indigo-600">
                          <ExternalLink className="h-3 w-3" />
                          Official program
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Commission rates vary by product category and are set by the retailer, not Pruddo.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
              Common questions
            </h2>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="border-b border-slate-100 pb-6 last:border-0 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm text-slate-500">
              Questions about our affiliate relationships? Email{" "}
              <a href="mailto:hello@pruddo.ai" className="font-medium text-indigo-600 hover:underline">
                hello@pruddo.ai
              </a>
              . You can also read our{" "}
              <Link href="/privacy" className="font-medium text-indigo-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="font-medium text-indigo-600 hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
