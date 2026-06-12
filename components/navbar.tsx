"use client"

import { useState, useEffect } from "react"
import { Home, FlaskConical, BookOpen, Users, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "Training", href: "#training" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
]

const mobileNavLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Research", href: "#research", icon: FlaskConical },
  { label: "Courses", href: "#training", icon: BookOpen },
  { label: "Team", href: "#team", icon: Users },
  { label: "About", href: "#about", icon: Info },
]

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home")

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#home")
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home">
        <Image src="/logo.png" alt="ElectroXplore Logo" width={32} height={32} className="size-35" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-wider font-bold px-5"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile: show logo + Join button in top bar, nav handled by bottom bar */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-wider font-bold px-4 h-8"
            >
              Join
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile bottom sticky icon navbar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around px-2 py-1 safe-bottom">
          {mobileNavLinks.map(({ label, href, icon: Icon }) => {
            const isActive = activeHash === href
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setActiveHash(href)}
                className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-colors group"
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-primary/15"
                      : "group-hover:bg-surface"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-wide transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
