"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingDown, Users, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { TrustScoreBadge } from "@/components/trust-score-badge";
import type { MockProduct } from "@/lib/mock-products";

export function ProductCard({ product }: { product: MockProduct }) {
  const totalReviews = (
    product.sources.reddit +
    product.sources.youtube +
    product.sources.amazon
  ).toLocaleString();

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Price drop badge */}
        {product.priceDropPercent > 0 && (
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-white">
            <TrendingDown className="h-3 w-3" />
            {product.priceDropPercent}% off
          </div>
        )}
        {/* Trust score — top right */}
        <div className="absolute right-2 top-2">
          <TrustScoreBadge score={product.trustScore} verdict={product.verdict} size="sm" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <p className="text-xs font-medium text-slate-400">{product.brand}</p>
          <p className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-slate-900 dark:text-slate-100">
            {product.name}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-emerald-600">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Meta row */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-2 text-xs text-slate-500 dark:border-slate-800">
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {totalReviews} reviews
          </span>
          <span className="flex items-center gap-1 text-emerald-600">
            <ShieldCheck className="h-3 w-3" />
            {(100 - product.fakeReviewPercent).toFixed(0)}% real
          </span>
        </div>

        {/* Source pills */}
        <div className="flex gap-1">
          {product.sources.reddit > 0 && (
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
              Reddit {product.sources.reddit >= 1000 ? `${(product.sources.reddit / 1000).toFixed(1)}k` : product.sources.reddit}
            </span>
          )}
          {product.sources.youtube > 0 && (
            <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">
              YT {product.sources.youtube}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
