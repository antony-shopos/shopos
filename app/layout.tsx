import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"

import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "ShopOS - Your creative team, always on",
  description:
    "AI workforce that can produce photos, edit videos, write copy, design, prep ads, and more. No coffee breaks. No lunch breaks.",
  generator: "shopos.ai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {/* LEFT RAIL */}
        <div
          className="pointer-events-none fixed inset-y-0 z-50 w-px opacity-60"
          style={{
            left: "max(16px, calc((100vw - 1200px)/2))",
            background:
              "repeating-linear-gradient(to bottom, #cfcfcf 0px, #cfcfcf 12px, transparent 12px, transparent 28px)",
          }}
        />

        {/* RIGHT RAIL */}
        <div
          className="pointer-events-none fixed inset-y-0 z-50 w-px opacity-60"
          style={{
            right: "max(16px, calc((100vw - 1200px)/2))",
            background:
              "repeating-linear-gradient(to bottom, #cfcfcf 0px, #cfcfcf 12px, transparent 12px, transparent 28px)",
          }}
        />


        {children}
      </body>
    </html>
  )
}
