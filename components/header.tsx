"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Instagram, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Dogs", href: "/dogs" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-amber-600">🐕 Dog House</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} active={pathname === item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <a href="https://www.instagram.com/doghouse_rw/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
          </Button>
          <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700">
            <a href="tel:+250787272038">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-amber-600">🐕 Dog House</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <MobileNavLink key={item.href} href={item.href} active={pathname === item.href}>
                    {item.name}
                  </MobileNavLink>
                ))}
              </nav>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-amber-600" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Kigali, Rwanda (29.958487, -1.941381)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild variant="outline" size="sm" className="justify-start gap-2">
                  <a href="https://www.instagram.com/doghouse_rw/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>
                </Button>
                <Button asChild size="sm" className="justify-start gap-2 bg-amber-600 hover:bg-amber-700">
                  <a href="tel:+250787272038">
                    <Phone className="h-4 w-4" />
                    <span>+250 787 272 038</span>
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative font-medium transition-colors hover:text-amber-600",
        active ? "text-amber-600" : "text-foreground",
      )}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  )
}

function MobileNavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-lg font-medium transition-colors hover:text-amber-600",
        active ? "text-amber-600" : "text-foreground",
      )}
    >
      {children}
    </Link>
  )
}
