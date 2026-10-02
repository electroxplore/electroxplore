// "use client"

// import React, { createContext, useContext, useEffect, useState } from "react"

// type Theme = "light" | "dark"

// interface ThemeContextType {
//   theme: Theme
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>("dark")
//   const [mounted, setMounted] = useState(false)

//   // Initialize theme from localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") as Theme | null
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

//     const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
//     setTheme(initialTheme)
//     applyTheme(initialTheme)
//     setMounted(true)
//   }, [])

//   const applyTheme = (newTheme: Theme) => {
//     const root = document.documentElement
//     if (newTheme === "dark") {
//       root.classList.add("dark")
//     } else {
//       root.classList.remove("dark")
//     }
//   }

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme)
//     applyTheme(newTheme)
//   }

//   // Prevent hydration mismatch
//   if (!mounted) {
//     return <>{children}</>
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider")
//   }
//   return context
// }

"use client"

import React, { createContext, useContext, useEffect } from "react"

type Theme = "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    
    // 1. Force dark mode immediately on mount
    root.classList.add("dark")
    root.style.colorScheme = "dark" // Tells the browser (scrollbars, forms) it's dark mode

    // 2. Set up a guard to prevent ANY changes to the 'dark' class
    const observer = new MutationObserver(() => {
      if (!root.classList.contains("dark")) {
        root.classList.add("dark")
      }
      if (root.style.colorScheme !== "dark") {
        root.style.colorScheme = "dark"
      }
    })

    // Watch the HTML tag for attribute/class updates
    observer.observe(root, { attributes: true, attributeFilter: ["class", "style"] })

    return () => observer.disconnect()
  }, [])

  // Dummy toggle function that does nothing
  const toggleTheme = () => {}

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}