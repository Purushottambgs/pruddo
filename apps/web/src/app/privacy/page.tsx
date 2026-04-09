import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pruddo collects, uses, and protects your personal data.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "**Product URLs you submit** — when you paste a product link or search for a product, we store the URL to run our analysis pipeline and cache results for 48 hours.",
      "**Usage data** — pages visited, features used, and general interaction patterns (via anonymous analytics). We do not track individual users across sessions.",
      "**Email address** — only if you sign up for price alerts or an account. Never shared with third parties.",
      "**Click data** — when you click an affiliate link, we record the retailer and product (not personal details) to track commission earnings.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To run our AI analysis pipeline and return trust scores for products you search.",
      "To send price drop alerts if you have opted in for a specific product.",
      "To improve our fake-review detection models using aggregated, anonymized patterns.",
      "To calculate and report affiliate commission performance (anonymized, no personal data).",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "We use a single session cookie to keep you logged in if you create an account.",
      "We use privacy-respecting analytics (no cross-site tracking, no fingerprinting).",
      "We do NOT use advertising cookies, retargeting pixels, or third-party tracking scripts.",
      "The Chrome extension uses chrome.storage.local — your data never leaves your browser unless you explicitly submit a product for analysis.",
    ],
  },
  {
    title: "Data Sharing",
    content: [
      "We do not sell your personal data. Ever.",
      "We do not share your email or search history with retailers, advertisers, or data brokers.",
      "Anonymized, aggregated data (e.g., 'X% of users searched for wireless earbuds') may be used in marketing materials.",
      "We may share data with law enforcement if required by a valid legal order.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "Product analysis results are cached for 48 hours, then discarded.",
      "Account data is retained until you delete your account.",
      "Price alert subscriptions are retained until you cancel them.",
      "You can request deletion of your account and associated data at any time by emailing privacy@pruddo.ai.",
    ],
  },
  {
    title: "Security",
    content: [
      "All data in transit is encrypted with TLS 1.3.",
      "Passwords are hashed with bcrypt and never stored in plain text.",
      "Our infrastructure is hosted on Railway with encrypted storage.",
      "We conduct regular security reviews and promptly patch known vulnerabilities.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "**Access** — you can request a copy of all personal data we hold about you.",
      "**Correction** — you can update incorrect information in your account settings.",
      "**Deletion** — you can delete your account and all associated data at any time.",
      "**Portability** — you can export your data in a machine-readable format on request.",
      "To exercise any of these rights, email privacy@pruddo.ai.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Pruddo is not directed at children under 13. We do not knowingly collect personal data from anyone under 13.",
      "If you believe we have inadvertently collected data from a child, please contact us immediately at privacy@pruddo.ai.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this policy periodically. When we do, we will update the 'last updated' date below.",
      "Material changes will be communicated via email if you have an account, or via a banner on the website.",
      "Continued use of Pruddo after a policy update constitutes acceptance of the new policy.",
    ],
  },
];

function renderContent(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-800 dark:text-slate-200">{part}</strong> : part
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <Shield className="h-3.5 w-3.5" />
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-500">Last updated: April 9, 2026</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            We built Pruddo to help you shop smarter — not to harvest your data.
            Here is exactly what we collect, why, and how you can control it.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      <span>{renderContent(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm text-slate-500">
                Questions about this policy? Email us at{" "}
                <a href="mailto:privacy@pruddo.ai" className="font-medium text-indigo-600 hover:underline">
                  privacy@pruddo.ai
                </a>{" "}
                or visit our{" "}
                <Link href="/contact" className="font-medium text-indigo-600 hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
