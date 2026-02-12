import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock, Layers, RefreshCw } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm text-muted-foreground">ShopOS Web</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Your creative team, always on
          </h1>
          <p className="mb-8 text-base text-muted-foreground text-balance md:text-lg leading-relaxed max-w-3xl mx-auto">
            100+ AI workflows built for commerce. Product photos. Ad creatives. Catalog copy. Video clips. Social content. Your AI teammates handle production. You handle strategy.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            Try ShopOS Web Free
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          <Card className="bg-card p-6 text-center border-border">
            <div className="mb-4 flex justify-center">
              <div className="rounded-lg bg-muted p-3">
                <Lock className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold">Fully encrypted</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Everything in ShopOS is encrypted in transit (SSL) and at-rest
              (AES-256). Your brand data stays protected.
            </p>
          </Card>

          <Card className="bg-card p-6 text-center border-border">
            <div className="mb-4 flex justify-center">
              <div className="rounded-lg bg-muted p-3">
                <Layers className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold">Multi-brand workspaces</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Manage 50 brands from one dashboard. Agencies and holding
              companies can switch contexts without logging out.
            </p>
          </Card>

          <Card className="bg-card p-6 text-center border-border">
            <div className="mb-4 flex justify-center">
              <div className="rounded-lg bg-muted p-3">
                <RefreshCw className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold">Shopify sync</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Products, inventory, orders auto-synced. Generate content for your
              actual catalog, always up to date.
            </p>
          </Card>
        </div>
      </section>

      {/* Spaces Grid Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          100+ Spaces for Every Commerce Problem
        </h2>

        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SpaceCard
            image="/product-1.jpg"
            title="Product Studio"
            description="Clean, professional studio shots for any object."
          />
          <SpaceCard
            image="/fashion-1.jpg"
            title="Fashion Studio"
            description="Get a pro studio look for your clothing items."
          />
          <SpaceCard
            image="/feature-1.jpg"
            title="Feature Highlight"
            description="Point out the specific selling points of your item."
          />
          <SpaceCard
            image="/product-2.jpg"
            title="Product Clip"
            description="Turn a still photo into a moving product video."
          />
          <SpaceCard
            image="/fashion-2.jpg"
            title="Fashion Lifestyle"
            description="Place your apparel in a real-world setting."
          />
          <SpaceCard
            image="/banner-1.jpg"
            title="Offer Banner"
            description="Place your apparel in a real-world setting."
          />
          <SpaceCard
            image="/competitor-1.jpg"
            title="Analyze Competitors"
            description="Turn a still photo into a moving product video."
          />
          <SpaceCard
            image="/lifestyle-1.jpg"
            title="Fashion Lifestyle"
            description="Place your apparel in a real-world setting."
          />
          <SpaceCard
            image="/content-1.jpg"
            title="Create Social Content"
            description="Promote a special discount with a wide header."
          />
          <SpaceCard
            image="/catalog-1.jpg"
            title="Refresh Your Catalog"
            description="Turn a still photo into a moving product video."
          />
          <SpaceCard
            image="/collage-1.jpg"
            title="Photo Collage"
            description="Mix multiple lifestyle shots into one layout."
          />
          <SpaceCard
            image="/guidelines-1.jpg"
            title="Build Brand Guidelines"
            description="Promote a special discount with a wide header."
          />
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full">
            View All Spaces
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-muted/30 px-8 py-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl text-balance">
            Give your brand AI Coworkers..
          </h2>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 mb-4"
          >
            Get Started
          </Button>
          <p className="text-sm text-muted-foreground">
            No Credit Card Required
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

function SpaceCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="mb-1 font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  )
}
