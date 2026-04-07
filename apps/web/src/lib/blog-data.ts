export type BlogCategory =
  | "Guides"
  | "Research"
  | "Product News"
  | "Shopping Tips"
  | "Fake Reviews";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  publishedAt: string; // ISO date string
  readingTime: number; // minutes
  featured: boolean;
  coverEmoji: string;
  body: string; // simplified HTML / markdown body for demo
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-spot-fake-amazon-reviews",
    title: "How to Spot Fake Amazon Reviews Before They Fool You",
    excerpt:
      "Review manipulation is a billion-dollar industry. Here are the red flags that signal a product's ratings can't be trusted — and how Pruddo detects them automatically.",
    category: "Fake Reviews",
    author: "Pruddo Research",
    authorRole: "Data & AI Team",
    publishedAt: "2026-03-28",
    readingTime: 7,
    featured: true,
    coverEmoji: "🔍",
    body: `
<p>Fake reviews have become one of e-commerce's most persistent problems. A 2025 study found that up to <strong>42% of Amazon reviews</strong> in certain categories show signs of manipulation — incentivized purchases, review swaps, or outright fabrication.</p>

<h2>The red flags to watch for</h2>

<p>Most fake reviews share telltale patterns once you know what to look for:</p>

<ul>
  <li><strong>Review bursts:</strong> Dozens of 5-star reviews appearing within a 48-hour window after months of silence is a classic sign of a coordinated campaign.</li>
  <li><strong>Identical language:</strong> When multiple reviewers use the same unusual phrasing ("life-changing experience", "game changer for my lifestyle"), they likely received the same template.</li>
  <li><strong>Unverified purchases with long reviews:</strong> Real buyers leave short, specific feedback. Generic 600-word essays from unverified accounts are suspicious.</li>
  <li><strong>Profile age vs. review volume:</strong> A 3-month-old account with 200 reviews, all 5-star, is a red flag factory.</li>
</ul>

<h2>How Pruddo detects manipulation</h2>

<p>Our AI model analyzes every review against these signals simultaneously. We flag the percentage of suspicious reviews and factor it into the trust score — so a product with a 4.7-star Amazon rating but 38% suspicious reviews might receive a Pruddo score of 51/100 (Consider), rather than the inflated impression its star count suggests.</p>

<p>The key is cross-referencing: when Reddit discussions and YouTube reviews disagree with Amazon ratings, that gap is almost always explained by review manipulation on the marketplace side.</p>

<h2>What to do as a shopper</h2>

<p>Until AI tools are universal, here's a manual checklist:</p>

<ol>
  <li>Sort by "Most recent" and look for clustering in the timeline.</li>
  <li>Filter to 3-star reviews — these are statistically the most honest.</li>
  <li>Search "[product name] reddit" and read unfiltered community takes.</li>
  <li>Or just use Pruddo, which does all of this in 60 seconds.</li>
</ol>
    `,
  },
  {
    slug: "price-history-guide-never-overpay",
    title: "The Shopper's Guide to Price History: Never Overpay Again",
    excerpt:
      "That 'limited time deal' is often the same price the product has been for months. Here's how to use price history data to know when you're actually getting a bargain.",
    category: "Shopping Tips",
    author: "Pruddo Research",
    authorRole: "Data & AI Team",
    publishedAt: "2026-03-18",
    readingTime: 5,
    featured: false,
    coverEmoji: "📉",
    body: `
<p>Retailers are experts at manufacturing urgency. "Only 3 left!" banners and countdown timers are designed to short-circuit rational decision-making. Price history data is your antidote.</p>

<h2>Why the "sale price" is often a lie</h2>

<p>Amazon and other retailers frequently inflate a product's "original price" before marking it down for a sale event. The Federal Trade Commission has investigated this practice repeatedly. A product listed at "$89.99, was $149.99" may never have actually sold at $149.99.</p>

<p>Price history charts reveal the truth: if the "sale price" is actually the product's stable going rate for the past six months, you're not getting a deal — you're getting the normal price with extra theater.</p>

<h2>How to read a price history chart</h2>

<ul>
  <li><strong>Stable line:</strong> The product rarely goes on sale. Buy when convenient — it won't get significantly cheaper.</li>
  <li><strong>Regular dips:</strong> The product goes on sale predictably (before Prime Day, Black Friday, etc.). Wait for the next dip.</li>
  <li><strong>Recent spike:</strong> The current price is higher than historical average. This is a bad time to buy.</li>
  <li><strong>Recent drop:</strong> Either a genuine sale or a price correction. Look at the 90-day average to judge.</li>
</ul>

<h2>Pruddo's price alerts</h2>

<p>Set a target price on any product and we'll email you the moment it drops below your threshold. No more manually checking listings every few days.</p>
    `,
  },
  {
    slug: "reddit-vs-amazon-reviews-which-to-trust",
    title: "Reddit vs Amazon Reviews: Which Source Should You Actually Trust?",
    excerpt:
      "Both platforms have their strengths and blind spots. Understanding the incentive structures behind each review ecosystem makes you a smarter shopper.",
    category: "Research",
    author: "Pruddo Research",
    authorRole: "Data & AI Team",
    publishedAt: "2026-03-08",
    readingTime: 6,
    featured: false,
    coverEmoji: "⚖️",
    body: `
<p>Amazon reviews and Reddit discussions are both valuable — but they're fundamentally different information sources with different reliability profiles.</p>

<h2>Amazon reviews: the signal inside the noise</h2>

<p>Amazon's "Verified Purchase" badge filters out the most obvious manipulation, but it's not foolproof. Sellers can issue full refunds after purchase, allowing buyers to leave verified reviews without actually paying. The most reliable Amazon reviews are:</p>

<ul>
  <li>3-star reviews (highest honesty rate statistically)</li>
  <li>Reviews mentioning specific model numbers, batch issues, or comparison to competing products</li>
  <li>Reviews written more than 30 days after purchase</li>
</ul>

<h2>Reddit: unfiltered, but not perfect</h2>

<p>Reddit's anonymous structure removes the purchase incentive for fake reviews, making it more trustworthy for most product categories. However, it has its own biases:</p>

<ul>
  <li>Enthusiast communities over-represent power users (r/Headphones reviewers are not average listeners)</li>
  <li>Brand communities can develop cultish loyalty that suppresses criticism</li>
  <li>Newer products are often over-hyped before durability issues surface</li>
</ul>

<h2>Why YouTube matters</h2>

<p>Long-form YouTube reviews expose issues that written reviews miss: build quality, noise levels, software bugs, and day-30 vs day-1 impressions. They're also the hardest to fake at scale.</p>

<h2>Pruddo's approach</h2>

<p>We weight sources based on the product category. For skincare, Reddit community consensus carries more weight than Amazon ratings. For electronics, YouTube durability reviews get a heavier signal. There's no one-size-fits-all formula.</p>
    `,
  },
  {
    slug: "introducing-pruddo-chrome-extension",
    title: "Introducing the Pruddo Chrome Extension: Reviews Wherever You Shop",
    excerpt:
      "We've launched a Chrome extension that brings Pruddo's trust scores directly into your Amazon browsing experience — without opening a new tab.",
    category: "Product News",
    author: "Pruddo Team",
    authorRole: "Product",
    publishedAt: "2026-02-20",
    readingTime: 3,
    featured: false,
    coverEmoji: "🧩",
    body: `
<p>Today we're launching the Pruddo Chrome Extension — a Manifest V3 side panel that appears automatically when you land on an Amazon product page.</p>

<h2>What it does</h2>

<p>The extension detects the product ASIN from the URL, pulls the latest Pruddo trust score, and surfaces it in a clean side panel with three tabs:</p>

<ul>
  <li><strong>Reviews:</strong> Trust score, fake review percentage, community pros & cons</li>
  <li><strong>Price:</strong> Current prices across retailers + 30-day price chart</li>
  <li><strong>Buy:</strong> Affiliate links to the lowest-price retailer in stock</li>
</ul>

<p>It works entirely in the background — no sign-in required, no data sent from your browsing history.</p>

<h2>How to install</h2>

<p>Search "Pruddo" in the Chrome Web Store, or click the "Add extension" button in the Pruddo navbar. Setup takes 30 seconds.</p>

<h2>What's next</h2>

<p>Support for Sephora, Best Buy, and Target product pages is coming in the next release. We're also working on a price alert notification system that works through the extension without needing an account.</p>
    `,
  },
  {
    slug: "best-skincare-products-2026-trust-scores",
    title: "Top-Rated Skincare Products of 2026 (by Pruddo Trust Score)",
    excerpt:
      "We analyzed 10,000+ skincare products and surfaced the ones with the highest trust scores — meaning real community consensus, not inflated Amazon ratings.",
    category: "Guides",
    author: "Pruddo Research",
    authorRole: "Data & AI Team",
    publishedAt: "2026-02-10",
    readingTime: 8,
    featured: false,
    coverEmoji: "🧴",
    body: `
<p>Skincare is one of the most review-manipulated categories on Amazon. Brands with aggressive influencer programs and review incentive systems routinely outscore products with decades of dermatologist-backed evidence.</p>

<p>We filtered our product database to surface only products with a Pruddo trust score of 80 or above — meaning real community consensus from Reddit, YouTube, and Amazon combined.</p>

<h2>Moisturizers (Score 80+)</h2>

<ul>
  <li><strong>CeraVe Moisturizing Cream</strong> — Score: 91. Consistent consensus across every review platform. Dermatologist staple for good reason.</li>
  <li><strong>Neutrogena Hydro Boost</strong> — Score: 84. Strong for oily skin types; mixed signals for dry skin.</li>
  <li><strong>La Roche-Posay Toleriane</strong> — Score: 88. Particularly praised for sensitive skin in Reddit communities.</li>
</ul>

<h2>Serums (Score 80+)</h2>

<ul>
  <li><strong>The Ordinary Niacinamide 10% + Zinc 1%</strong> — Score: 87. One of the most-discussed products on r/SkincareAddiction. Overwhelmingly positive with caveats for certain skin types clearly documented.</li>
  <li><strong>Paula's Choice BHA Exfoliant</strong> — Score: 85. Cult status on Reddit; YouTube dermatologists consistently recommend it.</li>
</ul>

<p>The full list of 200+ skincare products with trust scores above 80 is available in our product database — just search by category.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.featured);
}

export function getRecentPosts(exclude?: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== exclude).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
