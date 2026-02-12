import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "D2C Brand Fund - ShopOS",
  description:
    "ShopOS is committing $100K to help D2C brands scale smarter with systematic learning infrastructure.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Applications Open
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            D2C Brand Fund
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
            Every growing brand deserves systematic learning infrastructure.
            <br />
            ShopOS is committing $100K to help brands scale smarter.
          </p>
        </div>
      </section>

      {/* Spacer area matching design */}
      <div className="h-32 md:h-48" />

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Headline */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              $100K to help D2C Brands
            </h2>
            <p className="text-3xl italic text-emerald-500 md:text-4xl">
              Stop Guessing
            </p>
          </div>

          {/* Body Copy */}
          <div className="mb-12 space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Most brands operate like casinos. Launch creative, hope it works,
              repeat. Performance Brand Managers waste 60% of their time on
              repetitive workflows across fragmented tools.
            </p>
          </div>

          {/* Blockquote */}
          <div className="mb-12 border-l-0 py-6">
            <div className="mb-4">
              <span className="text-4xl font-serif leading-none text-foreground/80">
                {"\""}
              </span>
            </div>
            <p className="mb-6 text-base leading-relaxed text-foreground/90">
              We believe brands should learn systematically. Test creative,
              measure results, apply insights, compound knowledge.
            </p>
            <div>
              <p className="font-semibold text-foreground">Sai Krishna</p>
              <p className="text-sm text-muted-foreground">
                Co-Founder, ShopOS
              </p>
            </div>
          </div>

          <hr className="mb-12 border-border" />

          {/* Paragraph after quote */}
          <div className="mb-10">
            <p className="text-base leading-relaxed text-foreground/90">
              We are backing brands ready to shift from random content
              generation to continuous learning systems. If you are a
              Performance Brand Manager at a growing D2C brand ($1M-$50M ARR)
              tired of unpredictable creative performance, we want to work with
              you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              {"Apply Now →"}
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Criteria & Benefits Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Criteria Card */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="border-b border-border bg-muted/50 px-6 py-4">
                <h3 className="text-lg font-semibold">Criteria</h3>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    D2C brand doing $1M + annual revenue
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Active ad spend on Meta, Google, or both
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    10+ SKUs with regular creative needs
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Ready to test systematically for 90 days
                  </li>
                </ul>
              </div>
            </div>

            {/* What You Get Card */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="border-b border-border bg-muted/50 px-6 py-4">
                <h3 className="text-lg font-semibold">What you get</h3>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    12 months ShopOS access (Pro tier, $199/mo value
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Dedicated onboarding and strategy session
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Monthly performance reviews with our team
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    Case Study collaboration if results hit targets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
