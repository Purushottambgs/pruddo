import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { getPostBySlug, getRecentPosts, type BlogCategory } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRecentPosts(slug).slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white pb-10 pt-12 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to blog
          </Link>

          {/* Category */}
          <span
            className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${CATEGORY_COLORS[post.category]}`}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Cover emoji */}
          <div className="mt-10 flex h-40 items-center justify-center rounded-2xl bg-indigo-50 text-8xl dark:bg-indigo-950/40">
            {post.coverEmoji}
          </div>
        </div>
      </section>

      {/* ── Article body ──────────────────────────────────────── */}
      <section className="bg-white py-12 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-slate max-w-none dark:prose-invert
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:mt-10 prose-h2:text-2xl prose-h2:text-slate-900
              prose-p:leading-relaxed prose-p:text-slate-600
              prose-li:text-slate-600
              prose-strong:text-slate-900
              prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
              dark:prose-h2:text-slate-100 dark:prose-p:text-slate-400
              dark:prose-li:text-slate-400 dark:prose-strong:text-slate-100"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>

      {/* ── Author card ───────────────────────────────────────── */}
      <section className="bg-slate-50 py-10 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                {post.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {post.author}
                </p>
                <p className="text-sm text-slate-500">{post.authorRole} · Pruddo</p>
                <p className="mt-2 text-sm text-slate-500">
                  The Pruddo research team analyzes millions of reviews to help
                  shoppers make smarter, fraud-proof purchase decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Related posts ─────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white py-14 dark:bg-slate-900">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-7 text-xl font-bold text-slate-900 dark:text-slate-100">
              More from the blog
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block">
                  <Card className="h-full border-slate-200 transition hover:shadow-md dark:border-slate-800">
                    <CardContent className="flex h-full flex-col p-5">
                      <div className="mb-3 text-2xl">{rel.coverEmoji}</div>
                      <span
                        className={`mb-2 inline-block self-start rounded-full border px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[rel.category]}`}
                      >
                        {rel.category}
                      </span>
                      <h3 className="flex-1 text-sm font-semibold leading-snug text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-100">
                        {rel.title}
                      </h3>
                      <p className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        {rel.readingTime} min · {formatDate(rel.publishedAt)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
