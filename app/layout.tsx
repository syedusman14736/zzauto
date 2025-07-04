import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Z&Z Auto Transport - Reliable Nationwide Vehicle Shipping",
  description:
    "Professional auto transport services across all 50 states. Get your free quote today for safe, insured vehicle shipping with Z&Z Auto Transport.",
  keywords: "auto transport, car shipping, vehicle transport, nationwide shipping, enclosed transport, open transport",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
