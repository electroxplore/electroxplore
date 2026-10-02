"use client"

import { useState, useEffect } from "react"

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    // Simulates initial asset bundle hydration
    const timer = setTimeout(() => setIsAppLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (isAppLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground animate-fade-in">
        <div className="loader">
    
        </div>
      </div>
    )
  }

  return <>{children}</>
}