"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowRight, UsersRound, TicketCheck } from "lucide-react"

const groups = [
  {
    id: "01",
    name: "Embedded Syestems & IoT",
    field: "EEE",
    members: 3,
    desc: "Solutions for semi-paralyze people ",
    topics: ["Embedded Systems", "IoT", "Medical", "Assistive Technology"],
  },
  {
    id: "02",
    name: "Machine Learning & Embedded AI",
    field: "EEE",
    members: 2,
    desc: "Developing a mechanism for semi paralyzed individuals.",
    topics: ["Machine Learning", "Embedded AI", "IoT", "Mechanical Design"],
  },
  {
    id: "03",
    name: "Computer Vision & Image Processing",
    field: "EEE",
    members: 2,
    desc: "Developing a system for semi paralyzed individuals.",
    topics: ["Computer Vision", "IoT", "Medical", "Assistive Technology"],
  },
]

const fieldColors: Record<string, string> = {
  EEE: "text-primary border-primary/30 bg-primary/10",
  CSE: "text-emerald-600 dark:text-emerald-400 border-emerald-600/30 dark:border-emerald-400/30 bg-emerald-600/10 dark:bg-emerald-400/10",
  ETE: "text-violet-600 dark:text-violet-400 border-violet-600/30 dark:border-violet-400/30 bg-violet-600/10 dark:bg-violet-400/10",
  CCE: "text-amber-600 dark:text-amber-400 border-amber-600/30 dark:border-amber-400/30 bg-amber-600/10 dark:bg-amber-400/10",
  "EEE / CCE": "text-primary border-primary/30 bg-primary/10",
}

export default function ResearchSection() {
  const [expanded, setExpanded] = useState<string | null>("01")

  return (
    <section id="research" className="py-24 bg-white dark:bg-background relative overflow-hidden">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
              Research Groups
            </Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-black leading-tight text-zinc-950 dark:text-foreground text-balance">
              BROWSE<br />
              <span className="text-primary">WHAT JUST</span><br />
              LAUNCHED
            </h2>
            <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed max-w-sm">
              Our research groups are open for membership. Each group is led by experienced researchers with active publication and project pipelines.
            </p>

            {/* Member count badge */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-surface border-2 border-white dark:border-background flex items-center justify-center text-xs font-bold text-primary">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-zinc-500 dark:text-muted-foreground text-sm">
                <span className="text-zinc-950 dark:text-foreground font-semibold">15+</span> active members 
              </span>
            </div>
          </div>

          {/* Right: Accordion list */}
          <div className="space-y-2">
            {groups.map((g) => {
              const isOpen = expanded === g.id
              return (
                <div
                  key={g.id}
                  className={`border rounded-xl overflow-hidden transition-colors cursor-pointer shadow-sm dark:shadow-none ${
                    isOpen
                      ? "border-primary/30 bg-zinc-50 dark:bg-card"
                      : "border-zinc-200 dark:border-border bg-white dark:bg-surface hover:border-zinc-300 dark:hover:border-border/60"
                  }`}
                  onClick={() => setExpanded(isOpen ? null : g.id)}
                >
                  <div className="flex items-center justify-between p-4 gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-zinc-400 dark:text-muted-foreground text-xs font-mono flex-shrink-0">{g.id}</span>
                      <div className="min-w-0">
                        <div className="text-zinc-950 dark:text-foreground font-semibold text-sm truncate">{g.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={`text-xs border px-2 py-0 ${fieldColors[g.field]}`}>{g.field}</Badge>
                          <span className="text-zinc-500 dark:text-muted-foreground text-xs">{g.members} members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-zinc-400 dark:text-muted-foreground">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-zinc-200 dark:border-border pt-4 space-y-3 bg-white dark:bg-transparent">
                      <p className="text-zinc-600 dark:text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {g.topics.map((t) => (
                          <span key={t} className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="mt-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-xs uppercase tracking-wider gap-1 bg-transparent">
                        Batch Full <UsersRound className="w-3 h-3" /> 
                      </Button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}