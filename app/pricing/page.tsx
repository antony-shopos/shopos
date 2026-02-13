"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 pt-24 text-center">
        <h1 className="text-3xl font-semibold">Brands that Learn</h1>

        <p className="mt-3 text-muted-foreground">
          Choose how you want to build your commerce context graph
        </p>

        {/* Toggle */}
        <div className="mt-6 flex justify-center">
          <div className="relative flex rounded-full bg-muted p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`relative z-10 px-4 py-1 text-sm ${!annual ? "text-black" : "text-muted-foreground"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setAnnual(true)}
              className={`relative z-10 px-4 py-1 text-sm ${annual ? "text-black" : "text-muted-foreground"
                }`}
            >
              Annually
            </button>

            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow transition-all duration-300 ${annual ? "translate-x-full" : ""
                }`}
            />
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <PricingCard
            title="Starter"
            price={annual ? "$239" : "$299"}
            subtitle="/month"
            features={[
              "200 generations/month",
              "1 brand workspace",
              "Basic Memory",
              "Core tools",
              "Community support",
            ]}
            cta="Start Free Trial"
          />

          <PricingCard
            title="Growth"
            price={annual ? "$639" : "$799"}
            subtitle="/month"
            features={[
              "1,000 generations/month",
              "3 brand workspaces",
              "Advanced Memory",
              "API access",
              "Priority support",
            ]}
            cta="Start Free Trial"
          />

          <PricingCard
            title="Enterprise"
            price="Custom Pricing"
            subtitle=""
            features={[
              "Unlimited generations",
              "Unlimited workspaces",
              "Dedicated support",
              "Custom integrations",
              "Enterprise security",
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* FEATURE TABLE */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-x-auto">
          <div className="min-w-[800px] rounded-xl border">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium w-[40%]">
                    Feature
                  </th>
                  <th className="p-4 text-center font-medium">Starter</th>
                  <th className="p-4 text-center font-medium">Growth</th>
                  <th className="p-4 text-center font-medium">
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody>
                <Row
                  f="Generations/month"
                  s="200"
                  g="1000"
                  e="Unlimited"
                />
                <Row
                  f="Brand workspaces"
                  s="1"
                  g="3"
                  e="Unlimited"
                />
                <Row f="Team seats" s="1" g="5" e="Unlimited" />
                <Row
                  f="Brand Memory"
                  s="Basic"
                  g="Full"
                  e="Full + Custom"
                />
                <Row
                  f="Files Storage"
                  s="10GB"
                  g="100GB"
                  e="Unlimited"
                />
                <Row f="Spaces access" s="20" g="100+" e="100+" />

                <CheckRow f="Loops" s={false} g={true} e={true} />
                <CheckRow f="Refine" s={false} g={true} e={true} />
                <CheckRow
                  f="ShopOS Cowork"
                  s={false}
                  g={false}
                  e={true}
                />
                <CheckRow
                  f="White Label"
                  s={false}
                  g={false}
                  e={true}
                />
                <CheckRow
                  f="API Access"
                  s={false}
                  g={false}
                  e={true}
                />

                <Row
                  f="Support"
                  s="Community"
                  g="Email"
                  e="Dedicated"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-8 text-center">FAQs</h2>

        <div className="space-y-0">
          {[
            {
              question: "What counts as a \"generation\"?",
              answer: "A: One Space execution. \"Product Photo\" = 1 generation (creates 5 variations). \"Ad Creative Set\" = 1 generation (creates 10 variations)."
            },
            {
              question: "Can I change plans anytime?",
              answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference for the current billing period."
            },
            {
              question: "What if I go over my generation limit?",
              answer: "If you reach your generation limit, you can either upgrade to a higher plan or purchase additional generations as needed. We'll notify you before you hit your limit."
            },
            {
              question: "Is there a free trial?",
              answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. You'll have full access to all features during your trial period."
            },
            {
              question: "Do you offer nonprofit discounts?",
              answer: "We offer a 20% discount on annual plans. Additionally, we provide special pricing for educational institutions and non-profit organizations. Contact our sales team for more information."
            },
            {
              question: "What payment methods?",
              answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely."
            },
            {
              question: "Can I cancel anytime?",
              answer: "Absolutely! You can cancel your subscription at any time with no penalties. Your access will continue until the end of your current billing period."
            },
          ].map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="flex justify-between items-center w-full py-6 text-left"
              >
                <span className="font-medium text-base">{faq.question}</span>
                <div className="flex-shrink-0 ml-4">
                  {openFaqIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                  }`}
              >
                <div className="text-muted-foreground text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-2xl font-semibold">
          Start building your commerce context graph
        </h2>

        <div className="mt-6">
          <Button size="lg">Start Free Trial</Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

/* ---------- COMPONENTS ---------- */

function PricingCard({
  title,
  price,
  subtitle,
  features,
  cta,
}: any) {
  return (
    <div className="rounded-xl border p-6 flex flex-col">
      <h3 className="font-semibold">{title}</h3>

      <div className="mt-4 text-3xl font-semibold">
        {price}{" "}
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground flex-1">
        {features.map((f: string) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>

      <Button className="mt-6 w-full">{cta}</Button>
    </div>
  )
}

function Row({ f, s, g, e }: any) {
  return (
    <tr className="border-b">
      <td className="p-4 text-muted-foreground">{f}</td>
      <td className="p-4 text-center">{s}</td>
      <td className="p-4 text-center">{g}</td>
      <td className="p-4 text-center">{e}</td>
    </tr>
  )
}

function CheckRow({ f, s, g, e }: any) {
  return (
    <tr className="border-b">
      <td className="p-4 text-muted-foreground">{f}</td>

      <td className="p-4 text-center">
        {s ? "✓" : <span className="text-red-500">✕</span>}
      </td>

      <td className="p-4 text-center">
        {g ? "✓" : <span className="text-red-500">✕</span>}
      </td>

      <td className="p-4 text-center">
        {e ? "✓" : <span className="text-red-500">✕</span>}
      </td>
    </tr>
  )
}
