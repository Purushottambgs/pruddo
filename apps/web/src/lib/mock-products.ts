import type { TrustVerdict } from "@pruddo/shared";

export interface MockProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  currency: string;
  trustScore: number;
  verdict: TrustVerdict;
  fakeReviewPercent: number;
  reviewCount: number;
  retailer: string;
  affiliateUrl: string;
  priceDropPercent: number;
  sources: { reddit: number; youtube: number; amazon: number };
}

export const TRENDING_PRODUCTS: MockProduct[] = [
  {
    id: "prod-001",
    name: "CeraVe Moisturizing Cream",
    brand: "CeraVe",
    category: "Skincare",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    price: 14.99,
    originalPrice: 19.99,
    currency: "USD",
    trustScore: 94,
    verdict: "great_buy",
    fakeReviewPercent: 2.1,
    reviewCount: 48203,
    retailer: "amazon",
    affiliateUrl: "https://amazon.com/dp/B00TTD9BRC?tag=pruddo-20",
    priceDropPercent: 25,
    sources: { reddit: 1240, youtube: 34, amazon: 46929 },
  },
  {
    id: "prod-002",
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    price: 279.99,
    originalPrice: 349.99,
    currency: "USD",
    trustScore: 87,
    verdict: "great_buy",
    fakeReviewPercent: 4.2,
    reviewCount: 12847,
    retailer: "amazon",
    affiliateUrl: "https://amazon.com/dp/B09XS7JWHH?tag=pruddo-20",
    priceDropPercent: 20,
    sources: { reddit: 342, youtube: 28, amazon: 12477 },
  },
  {
    id: "prod-003",
    name: "La Roche-Posay Sunscreen SPF 50",
    brand: "La Roche-Posay",
    category: "Skincare",
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    price: 19.99,
    originalPrice: 24.99,
    currency: "USD",
    trustScore: 91,
    verdict: "great_buy",
    fakeReviewPercent: 1.8,
    reviewCount: 31200,
    retailer: "amazon",
    affiliateUrl: "https://amazon.com/dp/B002CML1XE?tag=pruddo-20",
    priceDropPercent: 20,
    sources: { reddit: 892, youtube: 19, amazon: 30289 },
  },
  {
    id: "prod-004",
    name: "Dyson Airwrap Complete",
    brand: "Dyson",
    category: "Hair Care",
    imageUrl: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80",
    price: 499.99,
    originalPrice: 599.99,
    currency: "USD",
    trustScore: 72,
    verdict: "consider",
    fakeReviewPercent: 8.3,
    reviewCount: 22100,
    retailer: "bestbuy",
    affiliateUrl: "https://bestbuy.com/dyson-airwrap",
    priceDropPercent: 17,
    sources: { reddit: 567, youtube: 88, amazon: 21445 },
  },
  {
    id: "prod-005",
    name: "Apple AirPods Pro (2nd Gen)",
    brand: "Apple",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    price: 189.00,
    originalPrice: 249.00,
    currency: "USD",
    trustScore: 89,
    verdict: "great_buy",
    fakeReviewPercent: 3.1,
    reviewCount: 67400,
    retailer: "amazon",
    affiliateUrl: "https://amazon.com/dp/B0BDHWDR12?tag=pruddo-20",
    priceDropPercent: 24,
    sources: { reddit: 2100, youtube: 142, amazon: 65158 },
  },
  {
    id: "prod-006",
    name: "The Ordinary Niacinamide 10%",
    brand: "The Ordinary",
    category: "Skincare",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
    price: 6.50,
    originalPrice: 9.99,
    currency: "USD",
    trustScore: 88,
    verdict: "great_buy",
    fakeReviewPercent: 3.4,
    reviewCount: 18900,
    retailer: "amazon",
    affiliateUrl: "https://amazon.com/dp/B07N5F8KTQ?tag=pruddo-20",
    priceDropPercent: 35,
    sources: { reddit: 3400, youtube: 67, amazon: 15433 },
  },
  {
    id: "prod-007",
    name: "Kindle Paperwhite (16 GB)",
    brand: "Amazon",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    price: 99.99,
    originalPrice: 139.99,
    currency: "USD",
    trustScore: 93,
    verdict: "great_buy",
    fakeReviewPercent: 2.8,
    reviewCount: 91200,
    retailer: "amazon",
    affiliateUrl: "https://amazon.com/dp/B09TMF6742?tag=pruddo-20",
    priceDropPercent: 29,
    sources: { reddit: 788, youtube: 31, amazon: 90381 },
  },
  {
    id: "prod-008",
    name: "Drunk Elephant Protini Polypeptide Cream",
    brand: "Drunk Elephant",
    category: "Skincare",
    imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    price: 58.00,
    originalPrice: 68.00,
    currency: "USD",
    trustScore: 44,
    verdict: "avoid",
    fakeReviewPercent: 18.7,
    reviewCount: 9800,
    retailer: "sephora",
    affiliateUrl: "https://sephora.com/drunk-elephant-protini",
    priceDropPercent: 15,
    sources: { reddit: 1200, youtube: 43, amazon: 8557 },
  },
];

export const CATEGORIES = [
  { id: "skincare", name: "Skincare", emoji: "✨", count: "12,400+ products", color: "from-rose-50 to-pink-50 border-rose-100" },
  { id: "electronics", name: "Electronics", emoji: "⚡", count: "34,200+ products", color: "from-blue-50 to-indigo-50 border-blue-100" },
  { id: "hair-care", name: "Hair Care", emoji: "💇", count: "8,100+ products", color: "from-amber-50 to-yellow-50 border-amber-100" },
  { id: "home", name: "Home & Kitchen", emoji: "🏠", count: "21,000+ products", color: "from-emerald-50 to-teal-50 border-emerald-100" },
  { id: "supplements", name: "Supplements", emoji: "💊", count: "6,800+ products", color: "from-purple-50 to-violet-50 border-purple-100" },
  { id: "fitness", name: "Fitness", emoji: "🏋️", count: "9,300+ products", color: "from-orange-50 to-red-50 border-orange-100" },
];

export const STATS = [
  { value: "2M+", label: "Products analyzed" },
  { value: "50M+", label: "Reviews decoded" },
  { value: "8,500+", label: "Stores tracked" },
  { value: "97%", label: "Fake review accuracy" },
];
