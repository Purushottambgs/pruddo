"use client";

import { useState } from "react";
import { Mail, MessageSquare, Twitter, Github, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: "Email us",
    description: "For partnerships, press, and general inquiries.",
    value: "hello@pruddo.ai",
    href: "mailto:hello@pruddo.ai",
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description: "Fastest way to reach us. We monitor DMs daily.",
    value: "@pruddo_ai",
    href: "https://twitter.com/pruddo_ai",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Found a bug or have a feature request? Open an issue.",
    value: "github.com/pruddo",
    href: "https://github.com/pruddo",
  },
];

const FAQS = [
  {
    q: "How does Pruddo calculate the trust score?",
    a: "We pull reviews from Reddit, YouTube, and Amazon, then use Claude AI to analyze sentiment, detect suspicious patterns (incentivized reviews, review farms, coordinated bursts), and weight authentic signals more heavily. The result is a 0–100 score.",
  },
  {
    q: "Does affiliate commission affect the trust scores?",
    a: "Never. Affiliate links are only shown after the trust score is calculated. Our scoring pipeline has no knowledge of which retailers pay us commissions.",
  },
  {
    q: "How often are scores updated?",
    a: "Trust scores are recalculated every 48 hours for active products. Prices are refreshed every hour.",
  },
  {
    q: "Can I request a product to be added?",
    a: "Yes — just paste the product URL into Pruddo's search bar. If we don't have it yet, we'll queue it for analysis and email you when the score is ready.",
  },
  {
    q: "Is there an API for developers?",
    a: "We're working on a public API tier. Reach out via email if you're interested in early access.",
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission — wire up to your API / Resend when ready
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <MessageSquare className="h-3.5 w-3.5" />
            Get in touch
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            We&apos;d love to hear from you
          </h1>
          <p className="mt-5 text-lg text-slate-500">
            Have a question, a partnership idea, or just want to say hi? Drop us
            a message and we&apos;ll get back within one business day.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Contact form */}
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <CheckCircle className="mb-4 h-14 w-14 text-emerald-500" />
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      Message sent!
                    </h2>
                    <p className="mt-2 text-slate-500">
                      Thanks for reaching out. We&apos;ll reply to{" "}
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {form.email}
                      </span>{" "}
                      within one business day.
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-6"
                      onClick={() => {
                        setForm({ name: "", email: "", subject: "", message: "" });
                        setStatus("idle");
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        Send us a message
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        All fields are required.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          Your name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          Email address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Partnership, bug report, general question…"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us what's on your mind…"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-indigo-900"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full"
                      size="lg"
                    >
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact channels */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Other ways to reach us
                </h3>
                <div className="space-y-3">
                  {CONTACT_CHANNELS.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <a
                        key={channel.title}
                        href={channel.href}
                        target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                          <Icon className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            {channel.title}
                          </p>
                          <p className="text-xs text-slate-500">{channel.description}</p>
                          <p className="mt-1 text-xs font-medium text-indigo-600">
                            {channel.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response time */}
              <Card className="border-slate-200 bg-emerald-50 dark:border-slate-800 dark:bg-emerald-950/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400">
                      Usually replies within 24 hours
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-500">
                    Mon–Fri, 9 AM–6 PM IST
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
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

      <Footer />
    </>
  );
}
