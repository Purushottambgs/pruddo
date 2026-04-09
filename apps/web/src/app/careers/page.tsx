import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Pruddo team and help build the future of honest product research.",
};

const PERKS = [
  {
    icon: Zap,
    title: "Move fast",
    body: "Small team, big impact. Your work ships to real users within days, not quarters.",
  },
  {
    icon: Heart,
    title: "Remote first",
    body: "Work from anywhere. We are fully distributed and async-friendly.",
  },
  {
    icon: Users,
    title: "Mission-driven",
    body: "We are fighting fake reviews. Every line of code makes shopping more honest for millions of people.",
  },
];

const OPEN_ROLES = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
    description:
      "Own features end-to-end across our Next.js frontend and Hono API. You will build the scraping pipeline, improve our AI integration, and ship features users love.",
    requirements: [
      "4+ years of TypeScript experience",
      "Strong Next.js and Node.js skills",
      "Experience with PostgreSQL and Redis",
      "Ability to work independently in a remote environment",
    ],
  },
  {
    title: "ML / AI Engineer",
    team: "AI",
    type: "Full-time",
    location: "Remote",
    description:
      "Improve our fake-review detection models, fine-tune prompts for Claude, and build the next generation of trust scoring. You will work with real-world review data at scale.",
    requirements: [
      "Experience with LLMs and prompt engineering",
      "Python or TypeScript ML background",
      "Familiarity with NLP and sentiment analysis",
      "Comfortable working with the Anthropic API",
    ],
  },
  {
    title: "Product Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote",
    description:
      "Design interfaces that make complex review data feel instantly trustworthy. You will own the visual direction of Pruddo — website, extension side panel, and mobile.",
    requirements: [
      "Strong Figma skills and a portfolio showing data-heavy UIs",
      "Experience designing for both web and browser extensions",
      "Ability to implement designs in Tailwind CSS is a plus",
      "Passion for clear, honest communication through design",
    ],
  },
  {
    title: "Growth & Marketing",
    team: "Marketing",
    type: "Full-time",
    location: "Remote",
    description:
      "Drive user acquisition through SEO, content, and community. You will own the growth funnel from search to activation.",
    requirements: [
      "Track record growing a B2C product from 0",
      "Strong SEO and content marketing skills",
      "Data-driven mindset — comfortable with analytics",
      "Genuine interest in consumer tech and e-commerce",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <Briefcase className="h-3.5 w-3.5" />
            We are hiring
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Help us fix how people shop
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Pruddo is a small, ambitious team building the world is most honest
            product research tool. We are remote-first, move fast, and are
            looking for people who care deeply about the problem we are solving.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="gap-2">
              <a href="#open-roles">
                See open roles
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="flex flex-col items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{perk.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{perk.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Open roles</h2>
            <p className="mt-2 text-slate-500">All roles are remote. Salary is competitive and equity is offered.</p>
          </div>

          <div className="space-y-5">
            {OPEN_ROLES.map((role) => (
              <Card key={role.title} className="border-slate-200 dark:border-slate-800">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {role.title}
                        </h3>
                        <Badge variant="secondary">{role.team}</Badge>
                      </div>
                      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {role.location}
                        </span>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {role.description}
                      </p>
                      <ul className="space-y-1.5">
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-slate-500">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="shrink-0">
                      <a href={`mailto:careers@pruddo.ai?subject=Application: ${role.title}`}>
                        Apply now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Do not see your role?
            </h3>
            <p className="mt-2 text-slate-500">
              We always want to hear from exceptional people. Send us your CV and tell us how you would make Pruddo better.
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <a href="mailto:careers@pruddo.ai?subject=Open Application">
                Send an open application
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-bold text-white">Questions about working at Pruddo?</h2>
          <p className="mt-3 text-indigo-200">
            Email{" "}
            <a href="mailto:careers@pruddo.ai" className="underline underline-offset-2">
              careers@pruddo.ai
            </a>{" "}
            or visit our{" "}
            <Link href="/about" className="underline underline-offset-2">
              About page
            </Link>{" "}
            to learn more about our team.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
