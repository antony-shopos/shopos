import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/shopos-logo.png"
                alt="ShopOS"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ShopOS is an AI-native operating system designed for modern
              ecommerce & fast-growing DTC brands. Helping them with creating
              content for product display pages, catalogs, social media, ads and
              self-learn & improve from what&apos;s working.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Loops
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Refine
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Brand Memory
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cowork
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="mb-4 font-semibold">Case Studies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  In the Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers{" "}
                  <span className="text-emerald-500 font-medium">Hiring</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Context Graph
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  D2C Brand Fund
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Logo */}
        <div className="mt-12 mb-8">
          <Image
            src="/shopos-logo.png"
            alt="ShopOS"
            width={600}
            height={180}
            className="h-24 md:h-32 w-auto"
          />
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            {"ShopOS \u00A9 2026. Built with AI & Humans, together."}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="X (Twitter)"
              className="text-foreground hover:text-foreground/80 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-foreground hover:text-foreground/80 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-foreground hover:text-foreground/80 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="text-foreground hover:text-foreground/80 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Behance"
              className="text-foreground hover:text-foreground/80 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-14.74h6.938zm-.61 5.92c.56 0 1.01-.15 1.36-.45.348-.3.52-.72.52-1.27 0-.29-.05-.54-.158-.75-.108-.21-.26-.38-.452-.51-.19-.13-.42-.22-.69-.27-.27-.05-.56-.08-.87-.08H3.41v3.33h2.918zm.24 6.29c.34 0 .65-.04.95-.12.3-.08.56-.2.79-.36.22-.16.4-.38.53-.65.13-.27.19-.6.19-.99 0-.79-.22-1.36-.66-1.72-.44-.36-1.01-.54-1.72-.54H3.41v4.38h3.16zM15.78 4.14h6.46v1.66h-6.46V4.14zm3.35 3.36c.8 0 1.49.14 2.09.42.59.28 1.08.67 1.47 1.15.38.49.66 1.06.84 1.71.18.65.27 1.35.27 2.09v.84h-7.54c.04.9.33 1.6.88 2.11.55.51 1.27.76 2.14.76.62 0 1.15-.15 1.58-.44.43-.3.75-.65.95-1.07h2.5c-.43 1.27-1.12 2.2-2.07 2.8-.95.6-2.1.9-3.44.9-.94 0-1.8-.16-2.57-.47-.78-.31-1.44-.76-2-1.33-.55-.57-.98-1.26-1.28-2.06-.3-.8-.45-1.7-.45-2.68 0-.94.15-1.82.45-2.63.3-.81.72-1.51 1.27-2.1.54-.59 1.2-1.05 1.96-1.39.77-.33 1.62-.5 2.56-.5l-.06-.01zm2.39 4.5c-.1-.73-.38-1.33-.87-1.78-.48-.45-1.1-.68-1.87-.68-.46 0-.86.08-1.21.24-.35.16-.65.37-.89.63-.24.26-.43.55-.57.87-.13.32-.22.63-.26.99l5.67.01v-.28z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* AI Summary */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Request an AI summary of ShopOS
          </p>
        </div>
      </div>
    </footer>
  )
}
