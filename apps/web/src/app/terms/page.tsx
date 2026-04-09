import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Pruddo.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using Pruddo (the 'Service'), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.",
      "These terms apply to all visitors, users, and anyone who accesses or uses the Service, including users of our Chrome extension.",
      "We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "2. Description of Service",
    content: [
      "Pruddo is an AI-powered product research tool that aggregates reviews from Reddit, YouTube, and Amazon, and generates trust scores using artificial intelligence.",
      "Trust scores are estimates based on publicly available data and AI analysis. They are provided for informational purposes only and do not constitute a guarantee of product quality.",
      "Pruddo is not a retailer. We do not sell products. We may earn affiliate commissions when you click through to purchase a product.",
    ],
  },
  {
    title: "3. User Accounts",
    content: [
      "You may use core features of Pruddo without an account. An account is required for price alerts and saved searches.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must provide accurate information when creating an account. Impersonation or false information is prohibited.",
      "You must be at least 13 years old to create an account.",
    ],
  },
  {
    title: "4. Acceptable Use",
    content: [
      "You may not use Pruddo to scrape, harvest, or mass-download data from our platform.",
      "You may not attempt to reverse-engineer, decompile, or extract our trust score algorithms.",
      "You may not use automated scripts or bots to submit product URLs at scale.",
      "You may not use the Service for any illegal purpose or in violation of any local, state, national, or international law.",
      "You may not attempt to gain unauthorized access to any part of the Service or its related systems.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "The Pruddo name, logo, trust score methodology, and all original content on this website are owned by Pruddo and protected by copyright and trademark law.",
      "You may not reproduce, distribute, or create derivative works from our content without explicit written permission.",
      "Review content sourced from Reddit, YouTube, and Amazon is the property of those respective platforms and their users.",
    ],
  },
  {
    title: "6. Disclaimer of Warranties",
    content: [
      "THE SERVICE IS PROVIDED 'AS IS' WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED.",
      "We do not warrant that trust scores are accurate, complete, or up to date. They are AI-generated estimates from public data.",
      "We do not warrant that the Service will be uninterrupted, error-free, or free from viruses or other harmful components.",
      "Any reliance on trust scores is at your own risk. Always conduct your own research before making a purchase.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Pruddo shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
      "This includes damages for loss of profits, goodwill, data, or other intangible losses resulting from your use of the Service.",
      "Our total liability for any claim arising from these terms or the Service is limited to the amount you paid us in the past 12 months (if any).",
    ],
  },
  {
    title: "8. Affiliate Links & Commissions",
    content: [
      "Pruddo participates in affiliate programs including Amazon Associates. When you click a product link and make a purchase, we may earn a commission.",
      "Affiliate commissions do not influence trust scores. Our scoring pipeline operates independently of commercial considerations.",
      "Affiliate relationships are disclosed on our Affiliate Disclosure page.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "We reserve the right to suspend or terminate your account at any time for violation of these terms.",
      "You may delete your account at any time from your account settings.",
      "Upon termination, your right to use the Service ceases immediately.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These terms are governed by the laws of India, without regard to conflict of law principles.",
      "Any disputes arising from these terms or the Service will be resolved through binding arbitration in accordance with Indian law.",
      "If any provision of these terms is held to be unenforceable, the remaining provisions remain in full force.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <FileText className="h-3.5 w-3.5" />
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-500">Last updated: April 9, 2026</p>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Please read these terms carefully before using Pruddo. They govern
            your use of our website, API, and Chrome extension.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title} className="border-b border-slate-100 pb-10 last:border-0 dark:border-slate-800">
                <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm text-slate-500">
                Questions about these terms? Email{" "}
                <a href="mailto:legal@pruddo.ai" className="font-medium text-indigo-600 hover:underline">
                  legal@pruddo.ai
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
