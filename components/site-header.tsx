"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)

  const navItems = [
    { label: "Products", href: "/use-cases", hasDropdown: true, dropdownType: "products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources", hasDropdown: true, dropdownType: "resources" },
    { label: "Pricing", href: "/pricing" },
  ]

  const productDropdownItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM6 8C7.1 8 8 8.9 8 10C8 11.1 7.1 12 6 12C4.9 12 4 11.1 4 10C4 8.9 4.9 8 6 8ZM18 8C19.1 8 20 8.9 20 10C20 11.1 19.1 12 18 12C16.9 12 16 11.1 16 10C16 8.9 16.9 8 18 8ZM12 7C12.6 7 13 7.4 13 8V9H15C15.6 9 16 9.4 16 10V11H17C17.6 11 18 11.4 18 12C18 12.6 17.6 13 17 13H16V14C16 14.6 15.6 15 15 15H13V16C13 16.6 12.6 17 12 17C11.4 17 11 16.6 11 16V15H9C8.4 15 8 14.6 8 14V13H7C6.4 13 6 12.6 6 12C6 11.4 6.4 11 7 11H8V10C8 9.4 8.4 9 9 9H11V8C11 7.4 11.4 7 12 7Z" />
        </svg>
      ),
      title: "Use Cases",
      description: "Built for every brand",
      href: "/use-cases"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 12C14.21 12 16 13.79 16 16C16 16.55 15.55 17 15 17H9C8.45 17 8 16.55 8 16C8 13.79 9.79 12 12 12Z" />
        </svg>
      ),
      title: "Spaces",
      description: "Workflows trained for ecommerce",
      href: "/spaces"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 5.5V20C23 21.1 22.1 22 21 22H3C1.9 22 1 21.1 1 20V4C1 2.9 1.9 2 3 2H17.5C18.2 2 18.9 2.3 19.4 2.9L22.9 6.4C23.5 6.9 23.8 7.6 23.8 8.3L23 5.5ZM7 18C7 17.4 7.4 17 8 17H16C16.6 17 17 17.4 17 18C17 18.6 16.6 19 16 19H8C7.4 19 7 18.6 7 18ZM7 14C7 13.4 7.4 13 8 13H16C16.6 13 17 13.4 17 14C17 14.6 16.6 15 16 15H8C7.4 15 7 14.6 7 14ZM7 10C7 9.4 7.4 9 8 9H12C12.6 9 13 9.4 13 10C13 10.6 12.6 11 12 11H8C7.4 11 7 10.6 7 10Z" />
        </svg>
      ),
      title: "Refine",
      description: "Human edits train intelligence",
      href: "/refine"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
        </svg>
      ),
      title: "Brand Memory",
      description: "Brand rules, always remembered",
      href: "/brand-memory"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.6 6.62C19.1 6.12 19.1 5.32 18.6 4.82C18.1 4.32 17.3 4.32 16.8 4.82L12 9.62L7.2 4.82C6.7 4.32 5.9 4.32 5.4 4.82C4.9 5.32 4.9 6.12 5.4 6.62L10.2 11.42L5.4 16.22C4.9 16.72 4.9 17.52 5.4 18.02C5.9 18.52 6.7 18.52 7.2 18.02L12 13.22L16.8 18.02C17.3 18.52 18.1 18.52 18.6 18.02C19.1 17.52 19.1 16.72 18.6 16.22L13.8 11.42L18.6 6.62Z" />
          <path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12Z" opacity="0.3" />
        </svg>
      ),
      title: "Loops",
      description: "Performance improves itself",
      href: "/loops"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
        </svg>
      ),
      title: "Files",
      description: "A library of proven winners",
      href: "/files"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4Z" />
        </svg>
      ),
      title: "Cowork",
      description: "Your AI commerce operator",
      href: "/cowork"
    },
  ]

  const resourcesDropdownItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
        </svg>
      ),
      title: "Context Graph",
      description: "Learns how your brand operates",
      href: "/resources/context-graph"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM6 10H12V14H6V10ZM13 10H18V11H13V10ZM13 12H18V13H13V12ZM13 14H18V15H13V14Z" />
        </svg>
      ),
      title: "D2C Brand Fund",
      description: "Infrastructure for brand growth",
      href: "/resources/brand-fund"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.18L19.09 7.5L12 10.82L4.91 7.5L12 4.18ZM4 9.18L11 12.5V19.82L4 16.5V9.18ZM13 19.82V12.5L20 9.18V16.5L13 19.82Z" />
        </svg>
      ),
      title: "About Us",
      description: "The team behind ShopOS",
      href: "/about"
    },
  ]

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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

              if (item.hasDropdown) {
                const isProducts = item.dropdownType === "products"
                const showDropdown = isProducts ? showProductsDropdown : showResourcesDropdown
                const setShowDropdown = isProducts ? setShowProductsDropdown : setShowResourcesDropdown
                const dropdownItems = isProducts ? productDropdownItems : resourcesDropdownItems

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={`transition-colors ${isActive
                        ? "text-foreground font-medium underline underline-offset-4"
                        : "text-foreground/80 hover:text-foreground"
                        }`}
                    >
                      {item.label}
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                      className={`absolute top-full left-0 pt-4 transition-all duration-200 ${showDropdown
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                        }`}
                    >
                      <div className={`w-[600px] bg-background border border-border rounded-xl shadow-2xl p-6 transition-all duration-200 ${showDropdown
                        ? "translate-y-0"
                        : "-translate-y-2"
                        }`}>
                        <div className={isProducts ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}>
                          {dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                            >
                              <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                  {dropdownItem.icon}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                  {dropdownItem.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors ${isActive
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
