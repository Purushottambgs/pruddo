import type { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse product categories on Pruddo — from electronics to skincare.",
};

const CATEGORIES = [
  {
    name: "Electronics",
    emoji: "💻",
    description: "Laptops, phones, tablets, headphones, cameras, and more.",
    examples: ["Wireless earbuds", "Mechanical keyboards", "USB-C hubs", "Smart watches"],
    color: "bg-blue-50 border-blue-100 dark:bg-blue-950/30 dark:border-blue-900",
    badgeColor: "text-blue-700 dark:text-blue-300",
    href: "/search?category=electronics",
  },
  {
    name: "Skincare",
    emoji: "✨",
    description: "Moisturizers, serums, sunscreen, cleansers, and beauty tools.",
    examples: ["Vitamin C serum", "SPF moisturizer", "Retinol cream", "Jade roller"],
    color: "bg-pink-50 border-pink-100 dark:bg-pink-950/30 dark:border-pink-900",
    badgeColor: "text-pink-700 dark:text-pink-300",
    href: "/search?category=skincare",
  },
  {
    name: "Hair Care",
    emoji: "💆",
    description: "Shampoos, conditioners, hair tools, treatments, and styling products.",
    examples: ["Keratin shampoo", "Hair dryer", "Argan oil", "Scalp massager"],
    color: "bg-amber-50 border-amber-100 dark:bg-amber-950/30 dark:border-amber-900",
    badgeColor: "text-amber-700 dark:text-amber-300",
    href: "/search?category=hair-care",
  },
  {
    name: "Home & Kitchen",
    emoji: "🏠",
    description: "Appliances, cookware, bedding, furniture, and home organization.",
    examples: ["Air fryer", "Robot vacuum", "Standing desk", "Weighted blanket"],
    color: "bg-emerald-50 border-emerald-100 dark:bg-emerald-950/30 dark:border-emerald-900",
    badgeColor: "text-emerald-700 dark:text-emerald-300",
    href: "/search?category=home",
  },
  {
    name: "Supplements",
    emoji: "💊",
    description: "Vitamins, protein powders, pre-workouts, and wellness products.",
    examples: ["Whey protein", "Magnesium glycinate", "Creatine", "Omega-3"],
    color: "bg-violet-50 border-violet-100 dark:bg-violet-950/30 dark:border-violet-900",
    badgeColor: "text-violet-700 dark:text-violet-300",
    href: "/search?category=supplements",
  },
  {
    name: "Sports & Fitness",
    emoji: "🏋️",
    description: "Gym equipment, activewear, sports accessories, and outdoor gear.",
    examples: ["Resistance bands", "Foam roller", "Running shoes", "Yoga mat"],
    color: "bg-orange-50 border-orange-100 dark:bg-orange-950/30 dark:border-orange-900",
    badgeColor: "text-orange-700 dark:text-orange-300",
    href: "/search?category=sports",
  },
  {
    name: "Books",
    emoji: "📚",
    description: "Bestsellers, textbooks, self-help, fiction, and non-fiction.",
    examples: ["Business books", "Science fiction", "Cookbooks", "Children's books"],
    color: "bg-teal-50 border-teal-100 dark:bg-teal-950/30 dark:border-teal-900",
    badgeColor: "text-teal-700 dark:text-teal-300",
    href: "/search?category=books",
  },
  {
    name: "Baby & Kids",
    emoji: "👶",
    description: "Baby gear, toys, educational products, and children's clothing.",
    examples: ["Baby monitor", "Car seat", "Educational toys", "Baby formula"],
    color: "bg-rose-50 border-rose-100 dark:bg-rose-950/30 dark:border-rose-900",
    badgeColor: "text-rose-700 dark:text-rose-300",
    href: "/search?category=baby",
  },
  {
    name: "Pet Supplies",
    emoji: "🐾",
    description: "Dog, cat, and small animal food, toys, health, and accessories.",
    examples: ["Dog food", "Cat litter", "Pet GPS tracker", "Automatic feeder"],
    color: "bg-yellow-50 border-yellow-100 dark:bg-yellow-950/30 dark:border-yellow-900",
    badgeColor: "text-yellow-700 dark:text-yellow-300",
    href: "/search?category=pets",
  },
];

export default function CategoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <Search className="h-3.5 w-3.5" />
            Browse
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Shop by category
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Browse popular product categories. Paste any product URL to get an
            instant AI trust score, fake review analysis, and price history.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Search className="ml-2 h-4 w-4 shrink-0 text-slate-400" />
            <span className="flex-1 text-sm text-slate-400">Or paste any product URL…</span>
            <Button size="sm" asChild>
              <Link href="/">Search</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`group flex flex-col rounded-xl border p-6 transition-all hover:shadow-md ${cat.color}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h2 className={`text-lg font-bold ${cat.badgeColor}`}>{cat.name}</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {cat.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {cat.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800/80 dark:text-slate-400"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                  Browse {cat.name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-bold text-white">Have a specific product in mind?</h2>
          <p className="mt-3 text-indigo-200">
            Paste any Amazon, Sephora, Best Buy, or product URL and get an instant AI trust score.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 gap-2 bg-white text-indigo-700 hover:bg-indigo-50"
          >
            <Link href="/">
              Analyze any product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
