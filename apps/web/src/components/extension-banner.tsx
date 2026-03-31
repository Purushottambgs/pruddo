import { Chrome, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExtensionBanner() {
  return (
    <section className="overflow-hidden bg-indigo-600 py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          {/* Icon */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <Chrome className="h-10 w-10 text-white" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                FREE
              </span>
              <span className="flex items-center gap-1 text-xs text-indigo-200">
                <Star className="h-3 w-3 fill-current" />
                4.8 · 2,400+ reviews
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Get Pruddo for Chrome — see trust scores while you shop
            </h2>
            <p className="mt-2 text-sm text-indigo-200">
              Auto-detects Amazon products. Opens instantly in a side panel.
              No account required.
            </p>
          </div>

          {/* CTA */}
          <div className="flex shrink-0 flex-col items-center gap-2">
            <Button
              className="gap-2 bg-white text-indigo-600 hover:bg-indigo-50"
              size="lg"
            >
              <Zap className="h-4 w-4" />
              Add to Chrome
            </Button>
            <span className="text-xs text-indigo-200">Works on Amazon, Sephora & more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
