import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  TrendingDown,
  ChevronLeft,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrustScoreBadge } from "@/components/trust-score-badge";
import { PriceChart } from "@/components/price-chart";
import { TRENDING_PRODUCTS } from "@/lib/mock-products";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = TRENDING_PRODUCTS.find((p) => p.id === id) ?? TRENDING_PRODUCTS[0]!;

  const PROS = [
    "Exceptional noise cancellation — best-in-class per Reddit consensus",
    "Premium sound quality with wide soundstage",
    "Comfortable for 6+ hour sessions",
    "Reliable multipoint Bluetooth connection",
    "Industry-leading 30hr battery life",
  ];

  const CONS = [
    "No IP rating for water/sweat resistance",
    "Touch controls too sensitive for some users",
    "Premium price point vs. competitors",
  ];

  const PRICES = [
    { retailer: "Amazon", price: product.price, inStock: true, badge: "Best price" },
    { retailer: "Best Buy", price: product.price + 20, inStock: true, badge: null },
    { retailer: "Walmart", price: product.price + 10, inStock: false, badge: null },
    { retailer: "Target", price: product.price + 25, inStock: true, badge: null },
  ];

  const REVIEWS = [
    {
      platform: "Reddit",
      icon: "🟠",
      count: product.sources.reddit,
      sentiment: 92,
      highlight:
        `"Coming from AirPods Pro, the noise cancellation is on a completely different level. Worth every penny."`,
      subreddit: "r/headphones",
    },
    {
      platform: "YouTube",
      icon: "🔴",
      count: product.sources.youtube,
      sentiment: 88,
      highlight: `"After testing 14 pairs, this is the one I recommend to everyone. The ANC is genuinely mind-blowing."`,
      subreddit: "MKBHD Review",
    },
    {
      platform: "Amazon",
      icon: "🟡",
      count: product.sources.amazon,
      sentiment: 85,
      highlight: `"I've bought these three times as gifts. Everyone loves them. Sound quality is exceptional."`,
      subreddit: "Verified Purchase",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to search
        </Link>

        {/* Product header */}
        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Image */}
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <div>
              <p className="text-sm font-medium text-slate-500">{product.brand} · {product.category}</p>
              <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                {product.name}
              </h1>
            </div>

            {/* Fake review warning */}
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-emerald-600">
                  {(100 - product.fakeReviewPercent).toFixed(0)}% authentic reviews
                </span>
                {" "}· {product.fakeReviewPercent}% flagged as fake
              </span>
            </div>

            {/* Source count */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1">
                🟠 {product.sources.reddit.toLocaleString()} Reddit posts
              </Badge>
              <Badge variant="secondary" className="gap-1">
                🔴 {product.sources.youtube} YouTube reviews
              </Badge>
              <Badge variant="secondary" className="gap-1">
                🟡 {product.sources.amazon.toLocaleString()} Amazon reviews
              </Badge>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-emerald-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="ml-2 text-sm text-slate-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="ml-2 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                  <TrendingDown className="h-3.5 w-3.5" />
                  {product.priceDropPercent}% off
                </span>
              </div>
              <Button className="gap-2" asChild>
                <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                  Buy on {product.retailer.charAt(0).toUpperCase() + product.retailer.slice(1)}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Trust score — right column */}
          <div className="shrink-0">
            <TrustScoreBadge score={product.trustScore} verdict={product.verdict} size="lg" />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reviews">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="price">Price History</TabsTrigger>
            <TabsTrigger value="buy">Where to Buy</TabsTrigger>
          </TabsList>

          {/* ── Reviews tab ──────────────────────────────── */}
          <TabsContent value="reviews" className="mt-4 space-y-4">
            {/* Pros & Cons */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <ThumbsUp className="h-4 w-4 text-emerald-500" />
                    What people love
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {PROS.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="mt-0.5 text-emerald-500">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <ThumbsDown className="h-4 w-4 text-red-400" />
                    Common complaints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {CONS.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="mt-0.5 text-red-400">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Review sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Review sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {REVIEWS.map((r) => (
                  <div key={r.platform} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg dark:bg-slate-800">
                      {r.icon}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                          {r.platform}
                          <span className="ml-2 text-xs text-slate-400">
                            {r.count.toLocaleString()} posts · {r.subreddit}
                          </span>
                        </span>
                        <span className="text-sm font-semibold text-emerald-600">
                          {r.sentiment}% positive
                        </span>
                      </div>
                      {/* Sentiment bar */}
                      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-emerald-500"
                          style={{ width: `${r.sentiment}%` }}
                        />
                      </div>
                      <p className="text-sm italic text-slate-500">{r.highlight}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Price tab ────────────────────────────────── */}
          <TabsContent value="price" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">30-day price history · Amazon</CardTitle>
              </CardHeader>
              <CardContent>
                <PriceChart />
                <p className="mt-3 text-xs text-slate-400">
                  Price tracked daily across major retailers. Set a price alert to be notified when it drops.
                </p>
                <Button variant="secondary" size="sm" className="mt-3">
                  🔔 Set price alert
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Buy tab ──────────────────────────────────── */}
          <TabsContent value="buy" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Best prices right now</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {PRICES.map((p) => (
                    <div key={p.retailer} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                          {p.retailer}
                        </span>
                        {p.badge && (
                          <Badge variant="great" className="text-xs">{p.badge}</Badge>
                        )}
                        {!p.inStock && (
                          <Badge variant="secondary" className="text-xs">Out of stock</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`font-semibold ${p.inStock ? "text-slate-900 dark:text-slate-100" : "text-slate-400"}`}>
                          ${p.price.toFixed(2)}
                        </span>
                        <Button
                          size="sm"
                          variant={p.badge ? "default" : "secondary"}
                          disabled={!p.inStock}
                          asChild={p.inStock}
                        >
                          {p.inStock ? (
                            <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
                              Buy <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          ) : (
                            <span>Unavailable</span>
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Pruddo earns a small commission on purchases. This never influences our trust scores.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Skeleton className="mb-6 h-4 w-32" />
      <div className="mb-6 flex gap-6">
        <Skeleton className="h-48 w-48 rounded-xl" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-96" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-10 w-48" />
        </div>
        <Skeleton className="h-32 w-32 rounded-xl" />
      </div>
      <Skeleton className="mb-4 h-10 w-64" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  );
}
