import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Files AI - AI-Powered File Management Software",
  description:
    "Smart Files AI is an AI-powered file management software that organizes, searches, and summarizes your files intelligently. Available for Windows, Mac, and Linux.",
  keywords:
    "Smart Files AI, AI file management, AI file organizer, smart file search software, productivity tools, file organization, AI desktop app",
  authors: [{ name: "Prawin Kumar S" }],
  creator: "Prawin Kumar S",
  openGraph: {
    title: "Smart Files AI - AI-Powered File Management Software",
    description: "Organize, search, and summarize your files intelligently with AI-powered automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Files AI - AI-Powered File Management Software",
    description: "Organize, search, and summarize your files intelligently with AI-powered automation.",
    creator: "@prawin_codes",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
