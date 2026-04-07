import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { BLOG_POSTS, getFeaturedPost, getRecentPosts, type BlogCategory } from "@/lib/blog-data";

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  Guides: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Research: "bg-violet-50 text-violet-700 border-violet-100",
  "Product News": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Shopping Tips": "bg-amber-50 text-amber-700 border-amber-100",
  "Fake Reviews": "bg-red-50 text-red-700 border-red-100",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const featured = getFeaturedPost();
  const recent = getRecentPosts(featured?.slug);
  const allCategories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            <BookOpen className="h-3.5 w-3.5" />
            The Pruddo Blog
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Smarter shopping, <br className="hidden sm:block" />
            one read at a time.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-500">
            Research, guides, and data-driven insights on how to navigate
            online shopping without getting burned.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          {/* ── Featured post ─────────────────────────────────── */}
          {featured && (
            <section className="mb-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Featured
              </p>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <Card className="overflow-hidden border-slate-200 transition hover:shadow-md dark:border-slate-800">
                  <CardContent className="p-0">
                    <div className="grid sm:grid-cols-[280px_1fr]">
                      {/* Cover */}
                      <div className="flex items-center justify-center bg-indigo-50 p-10 text-7xl dark:bg-indigo-950/40 sm:rounded-l-xl">
                        {featured.coverEmoji}
                      </div>
                      {/* Content */}
                      <div className="flex flex-col justify-between p-7">
                        <div>
                          <span
                            className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[featured.category]}`}
                          >
                            {featured.category}
                          </span>
                          <h2 className="mt-3 text-2xl font-bold text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-100">
                            {featured.title}
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-slate-500">
                            {featured.excerpt}
                          </p>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span>{featured.author}</span>
                            <span>·</span>
                            <span>{formatDate(featured.publishedAt)}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {featured.readingTime} min read
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-xs font-medium text-indigo-600 transition group-hover:gap-2">
                            Read more
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </section>
          )}

          {/* ── Category filter ────────────────────────────────── */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-500">Filter:</span>
            <Link
              href="/blog"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900"
            >
              All
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`rounded-full border px-3 py-1 text-sm transition hover:shadow-sm ${CATEGORY_COLORS[cat]}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* ── Post grid ─────────────────────────────────────── */}
          <section>
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              All posts
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="h-full border-slate-200 transition hover:shadow-md dark:border-slate-800">
                    <CardContent className="flex h-full flex-col p-6">
                      {/* Cover emoji */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800">
                        {post.coverEmoji}
                      </div>

                      {/* Category */}
                      <span
                        className={`mb-3 inline-block self-start rounded-full border px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[post.category]}`}
                      >
                        {post.category}
                      </span>

                      {/* Title + excerpt */}
                      <h3 className="mb-2 font-semibold leading-snug text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-100">
                        {post.title}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime} min</span>
                        <span>·</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Newsletter CTA ─────────────────────────────────── */}
          <section className="mt-16 rounded-2xl bg-indigo-600 p-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              Get smarter shopping tips in your inbox
            </h2>
            <p className="mt-2 text-indigo-200">
              One email per week. No spam. Unsubscribe anytime.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full max-w-xs rounded-lg border-0 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none sm:w-64"
              />
              <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50 sm:w-auto">
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
