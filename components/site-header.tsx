"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()

  const navItems = [
    { label: "Products", href: "/use-cases" },
    { label: "Case Studies", href: "#" },
    { label: "Resources", href: "/resources" },
    { label: "Pricing", href: "#" },
  ]

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/shopos-logo.png"
              alt="ShopOS"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive = item.href !== "#" && pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-foreground font-medium underline underline-offset-4"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            {"Get Early Access →"}
          </Button>
        </div>
      </div>
    </header>
  )
}
