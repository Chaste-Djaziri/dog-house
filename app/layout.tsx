import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dog House Rwanda - Premium Dogs from Rwanda to the World",
  description:
    "Dog House Rwanda offers premium dogs for sale in Rwanda and worldwide. We also take in unwanted dogs. Contact Tray McCall at traymccall1@gmail.com for more information.",
  keywords: "dogs, puppies, Rwanda, dog adoption, dog house, pet shop, Tray McCall, Dog House Rwanda",
  authors: [{ name: "Chaste Djaziri", url: "https://chastedjaziri.micorp.pro" }],
  openGraph: {
    title: "Dog House Rwanda - Premium Dogs from Rwanda to the World",
    description:
      "Dog House Rwanda offers premium dogs for sale in Rwanda and worldwide. We also take in unwanted dogs. Email: traymccall1@gmail.com",
    url: "https://doghouserwanda.com",
    siteName: "Dog House Rwanda",
    images: [
      {
        url: "/images/dog3.png",
        width: 800,
        height: 600,
        alt: "Dog House Rwanda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog House Rwanda - Premium Dogs from Rwanda to the World",
    description: "Dog House Rwanda offers premium dogs for sale in Rwanda and worldwide. Email: traymccall1@gmail.com",
    images: ["/images/dog3.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
