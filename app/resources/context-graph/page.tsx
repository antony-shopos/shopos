"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function ContextGraphPage() {
    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />

            {/* Hero Section */}
            <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    How your commerce
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="italic text-blue-600">context graph</span> learns
                </h1>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                    A live, evolving system that gets smarter as you work. It learns your brand, your products, your style.
                </p>
            </section>

            {/* Brand Memory Section */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs mb-4">
                            01
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Brand Memory</h2>
                        <p className="text-muted-foreground mb-4">
                            Upload your brand guidelines, logos, color palettes, and tone of voice. ShopOS remembers everything and applies it consistently across all outputs.
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Every asset you create stays on-brand. No more manual checks or style guide lookups.
                        </p>
                    </div>
                    <div className="relative h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <p className="text-sm text-muted-foreground">Brand Assets</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Files Section */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                                    <polyline points="13 2 13 9 20 9" />
                                </svg>
                            </div>
                            <p className="text-sm text-muted-foreground">Product Catalog</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs mb-4">
                            02
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Files</h2>
                        <p className="text-muted-foreground mb-4">
                            Your product catalog, past campaigns, and creative assets become part of the graph. ShopOS analyzes what works and learns your visual language.
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Upload once, reference forever. The system knows your inventory better than a spreadsheet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Loops Section */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs mb-4">
                            03
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Loops</h2>
                        <p className="text-muted-foreground mb-4">
                            Your feedback trains the AI. Every time you approve, reject, or refine an output, the context graph adjusts. It learns what "good" means for your brand.
                        </p>
                        <p className="text-muted-foreground text-sm">
                            The more you use it, the better it gets. Like a creative partner who actually listens.
                        </p>
                    </div>
                    <div className="relative h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                                    <path d="M21 3v5h-5" />
                                </svg>
                            </div>
                            <p className="text-sm text-muted-foreground">Feedback Loop</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Refine Section */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                    <path d="M11 8v6" />
                                    <path d="M8 11h6" />
                                </svg>
                            </div>
                            <p className="text-sm text-muted-foreground">Iterative Refinement</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs mb-4">
                            04
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Refine</h2>
                        <p className="text-muted-foreground mb-4">
                            Don't start from scratch. Refine existing outputs with natural language. "Make it warmer," "Add more contrast," "Try a different angle."
                        </p>
                        <p className="text-muted-foreground text-sm">
                            The graph remembers your preferences and applies them to future generations automatically.
                        </p>
                    </div>
                </div>
            </section>

            {/* You Section */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs mb-4">
                            05
                        </div>
                        <h2 className="text-3xl font-bold mb-4">You</h2>
                        <p className="text-muted-foreground mb-4">
                            You're the director. The context graph is your production team. You set the vision, approve the direction, and the system handles execution.
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Stay in control without micromanaging every pixel. Focus on strategy, not production.
                        </p>
                    </div>
                    <div className="relative h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <p className="text-sm text-muted-foreground">You're in Control</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Downloadable Acre Idea Section */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <h2 className="text-3xl font-bold mb-12">The Downloadable Acre Idea</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h3 className="font-semibold mb-3">Traditional Workflow</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Brief a designer</li>
                            <li>• Wait for drafts</li>
                            <li>• Review and revise</li>
                            <li>• Repeat 3-5 times</li>
                            <li>• Finally approve</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">ShopOS Context Graph</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Describe what you need</li>
                            <li>• Get variations instantly</li>
                            <li>• Refine with feedback</li>
                            <li>• System learns preferences</li>
                            <li>• Next time it's even faster</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Large SHOPOS Branding Section */}
            <section className="mx-auto max-w-7xl px-6 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />
                <div className="relative text-center">
                    <div className="mb-8">
                        <h2 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tight">
                            SHOPOS
                        </h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
                        A commerce context graph that learns your brand, remembers your preferences, and gets smarter with every interaction.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                        <span>Brand Memory</span>
                        <span>•</span>
                        <span>Product Catalog</span>
                        <span>•</span>
                        <span>Feedback Loops</span>
                        <span>•</span>
                        <span>Iterative Refinement</span>
                        <span>•</span>
                        <span>You're in Control</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
                <h2 className="text-2xl font-semibold mb-6">
                    Start building your commerce context graph
                </h2>
                <Button size="lg" className="rounded-full">
                    Try ShopOS Free
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                    No credit card required
                </p>
            </section>

            <SiteFooter />
        </div>
    )
}
