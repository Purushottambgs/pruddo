import { redirect } from "next/navigation";
import { AnalyzePage } from "@/components/analyze-page";

export default async function AnalyzeRoutePage({
  searchParams,
}: {
  searchParams: Promise<{ url?: string }>;
}) {
  const { url } = await searchParams;

  if (!url) redirect("/");

  // Ensure protocol is present
  const productUrl = url.startsWith("http") ? url : `https://${url}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <AnalyzePage productUrl={productUrl} />
    </div>
  );
}
