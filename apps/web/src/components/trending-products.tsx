import { TrendingUp } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { TRENDING_PRODUCTS } from "@/lib/mock-products";

export function TrendingProducts() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              <TrendingUp className="h-3.5 w-3.5" />
              Trending now
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Most researched products today
            </h2>
          </div>
          <a
            href="/search?sort=trending"
            className="hidden text-sm font-medium text-indigo-500 hover:text-indigo-600 sm:block"
          >
            See all →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
