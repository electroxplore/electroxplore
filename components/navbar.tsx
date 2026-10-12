"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, Home, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
];

const mobileNavLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Team", href: "/team", icon: Users },
  { label: "Blog", href: "/blog", icon: FlaskConical },
  { label: "News", href: "/news", icon: BookOpen },
];

export default function Navbar({ user }: any) {
  const [activeHash, setActiveHash] = useState("#home");
  const [theme, setThemeState] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setThemeState(initialTheme);
    setMounted(true);

    const onHashChange = () => setActiveHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  console.log(user);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-transparent backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="ElectroXplore Logo"
              width={140}
              height={140}
              className="size-35 hidden dark:block"
            />
            <Image
              src="/logo-w.png"
              alt="ElectroXplore Logo"
              width={140}
              height={140}
              className="size-35 block dark:hidden"
            />
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
          <div className="flex items-center gap-3">
            {/* <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="text-muted-foreground dark:hover:text-foreground hover:text-black hover:bg-transparent"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button> */}

            {user ? (
              <Link
                href="/member/dashboard"
                className="dark:text-foreground text-black md:text-base text-sm"
              >
                {user.name}
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-wider font-bold px-5"
                  >
                    Join Now
                  </Button>
                </Link>
              </>
            )}
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
            const isActive = activeHash === href;
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
                    isActive ? "bg-primary/15" : "group-hover:bg-surface"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
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
            );
          })}
        </div>
      </nav>
    </>
  );
}
