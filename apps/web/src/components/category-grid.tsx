import Link from "next/link";
import { CATEGORIES } from "@/lib/mock-products";
import { cn } from "@/lib/utils";

export function CategoryGrid() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Browse by category
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Every product. Every review. Every price.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/search?category=${cat.id}`}
              className={cn(
                "group flex flex-col items-center gap-2 rounded-xl border bg-gradient-to-b p-4 text-center transition-all hover:shadow-md hover:-translate-y-0.5",
                cat.color
              )}
            >
              <span className="text-3xl">{cat.emoji}</span>
              <span className="text-sm font-semibold text-slate-800">{cat.name}</span>
              <span className="text-xs text-slate-500">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
