import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Use Cases - ShopOS",
}

const useCases = [
  {
    title: "Fashion & Apparel",
    description:
      "Your seasonal drops perform differently across segments. We learn which visuals convert and which products pair.",
    stat: "15–30% ROAS Lift",
    image: "/use-cases/fashion.png",
  },
  {
    title: "Home & Living",
    description:
      "Room context matters. Lifestyle beats catalog shots. Your commerce context graph learns patterns automatically.",
    stat: "40% Less Creative Waste",
    image: "/use-cases/home.png",
  },
  {
    title: "Beauty & Personal Care",
    description:
      "Ingredient callouts build trust. Tutorial content builds it faster. We map what works and feed it back.",
    stat: "Trust Based Conversion",
    image: "/use-cases/beauty.png",
  },
  {
    title: "Electronics & Gadgets",
    description:
      "Spec tables convert engineers. Lifestyle shots convert gift buyers. Serve the right creative.",
    stat: "Lower CAC",
    image: "/use-cases/electronics.png",
  },
  {
    title: "Food & Beverage",
    description:
      "Recipe integration lifts AOV. Seasonal flavors need lead time. Your brand learns timing.",
    stat: "18% Higher AOV",
    image: "/use-cases/food.png",
  },
  {
    title: "Health & Fitness",
    description:
      "Before/after works. Testimonials work better. Demo videos convert more.",
    stat: "2.4x Conversion on Video",
    image: "/use-cases/fitness.png",
  },
]

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Built for{" "}
          <span className="italic text-blue-500">every</span> brand type
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          ShopOS adapts to your category, customer, and growth stage.
          Stop guessing and start accumulating brand intelligence.
        </p>
      </section>

      {/* USE CASE GRID */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative mb-4 h-48 md:h-56 w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* fade overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
              </div>

              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <p className="mt-4 text-xs font-medium text-muted-foreground">
                {item.stat}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to stop guessing?
        </h2>

        <p className="mt-3 text-muted-foreground">
          Join brands building their commerce intelligence today.
        </p>

        <div className="mt-6">
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
