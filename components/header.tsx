"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">DM</span>
            <span className="text-2xl font-bold text-yellow-500">Insights</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    isActive(item.path) ? "text-emerald-600" : "text-foreground/60"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />

            {!isMobile && (
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Get Started</Link>
              </Button>
            )}

            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="container mx-auto px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`py-2 text-sm font-medium transition-colors hover:text-emerald-600 ${
                  isActive(item.path) ? "text-emerald-600" : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
