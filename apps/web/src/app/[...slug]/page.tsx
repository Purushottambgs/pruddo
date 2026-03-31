import { redirect } from "next/navigation";

// Reconstruct URL from catch-all slug segments.
// Browser collapses https:// → https:/ in path, so we restore it.
function reconstructUrl(slug: string[]): string | null {
  const joined = slug.join("/");
  const withProtocol = joined.replace(/^(https?):\/([^/])/, "$1://$2");

  if (!withProtocol.startsWith("http://") && !withProtocol.startsWith("https://")) {
    // Try treating it as a bare domain like amazon.com/dp/...
    const asDomain = `https://${joined}`;
    if (/^https:\/\/[a-z0-9-]+\.[a-z]{2,}/i.test(asDomain)) return asDomain;
    return null;
  }

  return withProtocol;
}

export default async function CatchAllPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { slug } = await params;
  const qs = await searchParams;

  const productUrl = reconstructUrl(slug);

  if (!productUrl) redirect("/");

  // Reattach any query params that were part of the original product URL
  // (e.g. Amazon tracking params that come after ?)
  const queryString = new URLSearchParams(qs).toString();
  const fullUrl = queryString ? `${productUrl}?${queryString}` : productUrl;

  // Redirect to /analyze?url= so the URL is safely encoded
  redirect(`/analyze?url=${encodeURIComponent(fullUrl)}`);
}
