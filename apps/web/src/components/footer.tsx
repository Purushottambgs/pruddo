import Link from "next/link";
import Image from "next/image";

const LINKS = {
  Product: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Chrome extension", href: "/chrome-extension" },
    { label: "Price alerts", href: "/alerts" },
    { label: "Categories", href: "/categories" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Affiliate disclosure", href: "/affiliate-disclosure" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Image src="/logo.png.png" alt="Pruddo" width={120} height={36} className="h-8 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Real reviews. Real prices. Before you buy.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Pruddo earns affiliate commissions when you click through and
              buy. This never affects our trust scores.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-slate-900 dark:hover:text-slate-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-800">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Pruddo. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Review sources: Reddit · YouTube · Amazon · Expert blogs
          </p>
        </div>
      </div>
    </footer>
  );
}
