import { Suspense } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Footer } from "@/components/footer";

function looksLikeUrl(q: string): string | null {
  const s = q.trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (/^(www\.)?[a-z0-9-]+\.[a-z]{2,}(\/.*)?$/i.test(s)) return `https://${s}`;
  return null;
}

const CATEGORY_DATA: Record<string, {
  name: string;
  emoji: string;
  description: string;
  popularSearches: string[];
  color: string;
  textColor: string;
}> = {
  skincare: {
    name: "Skincare",
    emoji: "✨",
    description: "Find the best moisturizers, serums, sunscreens, and cleansers. Our AI detects fake reviews so you only trust real results.",
    popularSearches: [
      "CeraVe Moisturizing Cream",
      "The Ordinary Vitamin C Serum",
      "Neutrogena Sunscreen SPF 50",
      "La Roche-Posay Cleanser",
      "Paula's Choice BHA Exfoliant",
      "Cetaphil Gentle Skin Cleanser",
    ],
    color: "from-pink-50 to-white dark:from-pink-950/30 dark:to-slate-900",
    textColor: "text-pink-600",
  },
  electronics: {
    name: "Electronics",
    emoji: "💻",
    description: "Laptops, phones, headphones, cameras — get AI trust scores before you spend big on tech.",
    popularSearches: [
      "Sony WH-1000XM5 Headphones",
      "Apple AirPods Pro",
      "Samsung Galaxy S24",
      "Anker USB-C Hub",
      "Logitech MX Master 3",
      "Kindle Paperwhite",
    ],
    color: "from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-900",
    textColor: "text-blue-600",
  },
  "hair-care": {
    name: "Hair Care",
    emoji: "💆",
    description: "Shampoos, conditioners, hair tools, and treatments. See what real users say before you buy.",
    popularSearches: [
      "OGX Argan Oil Shampoo",
      "Dyson Airwrap",
      "Moroccanoil Treatment",
      "Briogeo Scalp Scrub",
      "Chi Flat Iron",
      "Olaplex No.3 Hair Perfector",
    ],
    color: "from-amber-50 to-white dark:from-amber-950/30 dark:to-slate-900",
    textColor: "text-amber-600",
  },
  home: {
    name: "Home & Kitchen",
    emoji: "🏠",
    description: "Appliances, cookware, furniture, and home gadgets. Trust scores from Reddit and YouTube reviewers.",
    popularSearches: [
      "Instant Pot Duo",
      "Dyson V15 Vacuum",
      "Ninja Air Fryer",
      "Tempur-Pedic Pillow",
      "iRobot Roomba",
      "Nespresso Vertuo",
    ],
    color: "from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-900",
    textColor: "text-emerald-600",
  },
  supplements: {
    name: "Supplements",
    emoji: "💊",
    description: "Vitamins, protein powders, and wellness products. AI trust scores help you separate legit from overhyped.",
    popularSearches: [
      "Garden of Life Protein",
      "Optimum Nutrition Whey",
      "Thorne Magnesium",
      "Nordic Naturals Omega-3",
      "Athletic Greens AG1",
      "Creatine Monohydrate",
    ],
    color: "from-violet-50 to-white dark:from-violet-950/30 dark:to-slate-900",
    textColor: "text-violet-600",
  },
  sports: {
    name: "Sports & Fitness",
    emoji: "🏋️",
    description: "Gym equipment, activewear, and sports accessories backed by real user reviews.",
    popularSearches: [
      "Theragun Mini",
      "Lululemon Leggings",
      "TRX Suspension Trainer",
      "Manduka PRO Yoga Mat",
      "Gaiam Foam Roller",
      "Nike Air Zoom Pegasus",
    ],
    color: "from-orange-50 to-white dark:from-orange-950/30 dark:to-slate-900",
    textColor: "text-orange-600",
  },
  books: {
    name: "Books",
    emoji: "📚",
    description: "Find well-reviewed books across all genres. No fake reviews, just real reader opinions.",
    popularSearches: [
      "Atomic Habits",
      "The Psychology of Money",
      "Educated by Tara Westover",
      "Project Hail Mary",
      "Thinking Fast and Slow",
      "Deep Work by Cal Newport",
    ],
    color: "from-teal-50 to-white dark:from-teal-950/30 dark:to-slate-900",
    textColor: "text-teal-600",
  },
  baby: {
    name: "Baby & Kids",
    emoji: "👶",
    description: "Baby gear, toys, and children's products. Trust scores matter most when buying for your family.",
    popularSearches: [
      "Graco 4Ever Car Seat",
      "Hatch Baby Sound Machine",
      "Lovevery Play Kit",
      "Nanit Baby Monitor",
      "UPPAbaby Vista Stroller",
      "Ergobaby Carrier",
    ],
    color: "from-rose-50 to-white dark:from-rose-950/30 dark:to-slate-900",
    textColor: "text-rose-600",
  },
  pets: {
    name: "Pet Supplies",
    emoji: "🐾",
    description: "Dog food, cat litter, pet health, and accessories. AI trust scores for the things your pets depend on.",
    popularSearches: [
      "Royal Canin Dog Food",
      "Temptations Cat Treats",
      "PetSafe Automatic Feeder",
      "Furbo Dog Camera",
      "Litter-Robot 4",
      "Kong Classic Dog Toy",
    ],
    color: "from-yellow-50 to-white dark:from-yellow-950/30 dark:to-slate-900",
    textColor: "text-yellow-600",
  },
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; url?: string; category?: string }>;
}) {
  return (
    <Suspense fallback={<SearchSkeleton />}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}

async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; url?: string; category?: string }>;
}) {
  const { q, url, category } = await searchParams;

  // Redirect URL queries to analyze
  const candidate = url ?? q ?? "";
  const resolvedUrl = looksLikeUrl(candidate);
  if (resolvedUrl) {
    redirect(`/analyze?url=${encodeURIComponent(resolvedUrl)}`);
  }

  // Category page
  if (category) {
    const cat = CATEGORY_DATA[category];

    if (!cat) {
      redirect("/categories");
    }

    return (
      <>
        <section className={`bg-gradient-to-b ${cat.color} py-16`}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/categories" className="hover:text-slate-700">Categories</Link>
              <span>/</span>
              <span className={cat.textColor}>{cat.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-5xl">{cat.emoji}</span>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{cat.name}</h1>
                <p className="mt-1 text-slate-500">{cat.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 dark:bg-slate-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-lg font-semibold text-slate-900 dark:text-slate-100">
              Popular in {cat.name}
            </h2>
            <p className="mb-6 text-sm text-slate-500">
              Paste any product URL or click a popular search below to get an instant AI trust score.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cat.popularSearches.map((search) => (
                <Link
                  key={search}
                  href={`/search?q=${encodeURIComponent(search)}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                >
                  {search}
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/30">
              <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
                Have a specific product in mind?
              </p>
              <p className="mt-1 text-sm text-indigo-700 dark:text-indigo-300">
                Paste any Amazon, Sephora, or product URL in the search bar above to get an instant AI trust score.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  // Text search query
  if (q) {
    return (
      <>
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Results for <span className="text-indigo-500">&quot;{q}&quot;</span>
          </h1>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/30">
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              Tip: For the best results, paste the product URL directly.
            </p>
            <p className="mt-1 text-sm text-indigo-700 dark:text-indigo-300">
              Go to Amazon, Best Buy, or Sephora, find your product, copy the URL, and paste it in the search bar above.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Empty state
  return (
    <>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-slate-400">
        <Search className="h-10 w-10" />
        <p>Enter a product name or Amazon link to get started.</p>
        <Link href="/categories" className="mt-2 text-sm text-indigo-600 hover:underline">
          Or browse by category
        </Link>
      </div>
      <Footer />
    </>
  );
}

function SearchSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Skeleton className="mb-6 h-8 w-64" />
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}
