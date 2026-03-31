# Pruddo.ai — Project Rules for Claude Code

## Project Overview
Pruddo is an AI-powered shopping assistant with a Chrome browser extension and a website (pruddo.ai). It aggregates reviews from Reddit, YouTube, and Amazon, generates AI trust scores for products, shows price history and comparison, and monetizes through affiliate links.

## Tech Stack (DO NOT deviate from this)
- **Language**: TypeScript everywhere. No JavaScript files. No Python. No other languages.
- **Package manager**: pnpm (not npm, not yarn)
- **Monorepo**: Turborepo with pnpm workspaces
- **Website (apps/web)**: Next.js 15 with App Router, standalone output mode, Tailwind CSS for styling
- **API server (apps/api)**: Hono framework on Node.js (not Express, not Fastify)
- **Chrome extension (apps/extension)**: Manifest V3, React + Vite for the side panel, vanilla TypeScript for content scripts and service worker
- **Background worker (apps/worker)**: Node.js with BullMQ for job processing
- **Database**: PostgreSQL with Drizzle ORM (not Prisma, not TypeORM, not Sequelize)
- **Cache and queue**: Redis with ioredis client and BullMQ
- **Auth**: Better Auth (not NextAuth, not Clerk, not Auth0)
- **AI**: Anthropic Claude API using @anthropic-ai/sdk
- **Email**: Resend
- **Charts**: Recharts library
- **Hosting**: Railway (all services). No Vercel. No AWS. No Firebase.
- **CDN**: Cloudflare (free tier)

## Repository Structure
```
pruddo/
  apps/
    web/              — Next.js website (pruddo.ai)
    api/              — Hono API server (api.pruddo.ai)
    worker/           — BullMQ background job processor
    extension/        — Chrome extension (Manifest V3)
  packages/
    shared/           — TypeScript types, constants, utilities
    db/               — Drizzle schema and migrations
    ai/               — Claude API prompts and trust score logic
    affiliate/        — Affiliate link wrapping and tracking
```

## Coding Standards
- Always use TypeScript strict mode
- Use async/await, never raw promises with .then()
- Use named exports, not default exports (except for Next.js pages which require default exports)
- File naming: kebab-case for files (product-card.tsx), PascalCase for components (ProductCard)
- Use Tailwind CSS classes for all styling in the website and extension side panel. No CSS modules. No styled-components. No inline style objects unless absolutely necessary.
- All API responses must use types from packages/shared
- Error handling: always use try/catch with meaningful error messages
- No console.log in production code — use a proper logger or remove before committing
- No hardcoded API URLs — use environment variables
- No hardcoded secrets — all secrets go in .env files which are gitignored

## Chrome Extension Rules
- Manifest V3 only (not V2)
- Content scripts and service worker: vanilla TypeScript (no React, no framework)
- Side panel: React + Vite
- Use chrome.sidePanel API for the side panel
- Use chrome.runtime.sendMessage for communication between content script and service worker
- Never use localStorage in the extension — use chrome.storage.local instead
- All API calls go through the service worker, not directly from content scripts

## API Rules
- Use Hono framework with typed routes
- All endpoints return JSON
- Use Zod for request/response validation
- Error responses follow format: { error: string, code: string }
- Success responses follow format: { data: T } where T is the typed response
- Add CORS headers for pruddo.ai and Chrome extension origins

## Database (PostgreSQL on Railway)
- Use Drizzle ORM with PostgreSQL — no Prisma, no TypeORM, no Sequelize, no raw SQL
- Connection via DATABASE_URL environment variable from Railway
- Table names: plural, snake_case (products, price_histories, users)
- Column names: snake_case (created_at, trust_score)
- Always include created_at and updated_at timestamps on every table
- Use UUID for primary keys (not auto-increment integers)

### Tables
- **products**: id, name, asin, upc, brand, category, image_url, source_url, retailer, created_at, updated_at
- **trust_scores**: id, product_id (FK), score (0-100), verdict, pros (JSONB), cons (JSONB), fake_review_percent, review_count, sources (JSONB), raw_analysis (JSONB), created_at, expires_at
- **prices**: id, product_id (FK), retailer, price (DECIMAL), currency, url, affiliate_url, in_stock, recorded_at
- **users**: id, email (unique), name, password_hash, created_at, updated_at
- **price_alerts**: id, user_id (FK), product_id (FK), target_price (nullable), is_active, last_notified_at, created_at
- **clicks**: id, product_id (FK), user_id (nullable FK), retailer, source (extension/website), affiliate_url, clicked_at

### Cache (Redis on Railway)
- Connection via REDIS_URL environment variable from Railway
- Cache keys: product:{id}:score (48hr TTL), product:{id}:reviews (48hr TTL), product:{id}:prices (1hr TTL)
- BullMQ job queue for background processing (review analysis, price scraping)

## UI Design System (Stripe-inspired)
- **Component library**: shadcn/ui — use shadcn components as the base for ALL UI elements. Install with: npx shadcn@latest add [component]
- **Design philosophy**: Stripe-inspired. Light, clean, trustworthy, premium. NOT dark mode by default. Light gray page background, white cards, subtle borders, generous whitespace.
- **Font**: Inter (via Google Fonts or next/font). Fallback: system-ui, sans-serif. No other fonts.
- **Border radius**: Use rounded-xl (12px) for cards, rounded-lg (8px) for buttons/inputs, rounded-full for badges/avatars

### Brand Colors (Tailwind classes)
- **Primary accent (Pruddo indigo)**: Use indigo-500 (#6366F1) for primary buttons, links, active states. indigo-600 for hover.
- **Page background**: slate-50 (#F8FAFC) — the light gray canvas
- **Card background**: white (#FFFFFF) with border border-slate-200
- **Primary text**: slate-900 (#0F172A)
- **Secondary text**: slate-500 (#64748B)
- **Tertiary/muted text**: slate-400 (#94A3B8)
- **Borders**: slate-200 (#E2E8F0) default, slate-300 on hover

### Trust Score Colors (CRITICAL — these are the core of Pruddo's UI)
- **Score 80-100 (Great buy)**: emerald-500 (#10B981) text/badge, emerald-50 (#ECFDF5) background
- **Score 50-79 (Consider)**: amber-500 (#F59E0B) text/badge, amber-50 (#FFFBEB) background
- **Score 0-49 (Avoid)**: red-500 (#EF4444) text/badge, red-50 (#FEF2F2) background
- Trust score badges: large bold number + colored label, inside a white card with subtle border (like Stripe's metric cards)

### Price Colors
- **Price is below average (good deal)**: emerald-500 text
- **Price is above average (bad deal)**: red-500 text
- **Price is normal**: slate-700 text
- **Price chart line**: indigo-500

### Layout Patterns (Stripe-style)
- Page background: slate-50. Content sits on white cards.
- Cards: bg-white rounded-xl border border-slate-200 p-6 (generous padding)
- Card headers: text-sm font-medium text-slate-500 uppercase tracking-wide (like Stripe's section labels)
- Metric displays: text-3xl font-semibold for the number, text-sm text-slate-500 for the label below
- Tables: minimal borders, alternating row backgrounds (white / slate-50)
- Buttons: Primary = bg-indigo-500 hover:bg-indigo-600 text-white. Secondary = bg-white border border-slate-200 hover:bg-slate-50
- Buy/CTA buttons: bg-indigo-500 text-white rounded-lg px-6 py-3 font-medium with hover:bg-indigo-600

### Dark Mode
- Support both light and dark using Tailwind's dark: prefix
- BUT default to light mode. Dark mode is a secondary option.
- In dark mode: page bg = slate-950, card bg = slate-900, text = slate-100, borders = slate-800

### Extension Side Panel Specific
- Side panel is narrow (~360px). Use compact layouts.
- Tab navigation at the top: Reviews | Price | Buy
- Active tab: indigo-500 text + indigo-500 bottom border
- Cards inside side panel: smaller padding (p-3 instead of p-6)
- Trust score badge: prominent, centered, first thing the user sees

## When Asked to Create Something
- Always check if a similar component/utility already exists in the codebase before creating a new one
- Always import shared types from @pruddo/shared
- Always handle loading, error, and empty states in UI components
- For the extension: always test that it works when loaded as an unpacked extension in Chrome
- For the website: always ensure pages work with server-side rendering (no window/document references in server components)
