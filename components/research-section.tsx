"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"

const groups = [
  {
    id: "01",
    name: "Power Systems & Renewable Energy",
    field: "EEE",
    members: 48,
    desc: "Investigating smart grid integration, renewable energy harvesting, and power electronics for sustainable solutions.",
    topics: ["Smart Grid", "Solar PV", "Energy Storage", "FACTS Devices"],
  },
  {
    id: "02",
    name: "Machine Learning & AI Systems",
    field: "CSE",
    members: 62,
    desc: "Developing deep learning architectures, NLP models, and AI-driven engineering tools for real-world applications.",
    topics: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
  },
  {
    id: "03",
    name: "Wireless & Antenna Engineering",
    field: "ETE",
    members: 35,
    desc: "Designing next-gen antenna systems, exploring 5G/6G propagation, and advancing RF circuit research.",
    topics: ["5G/6G", "Microstrip Antennas", "Signal Processing", "SDR"],
  },
  {
    id: "04",
    name: "Embedded Systems & IoT",
    field: "CCE",
    members: 55,
    desc: "Building low-power embedded architectures, sensor networks, and IoT platforms for smart environments.",
    topics: ["RTOS", "Sensor Fusion", "FPGA", "Edge AI"],
  },
  {
    id: "05",
    name: "Robotics & Control Systems",
    field: "EEE / CCE",
    members: 41,
    desc: "Advancing autonomous systems, control algorithms, and robotic platforms through interdisciplinary collaboration.",
    topics: ["PID & MPC", "ROS", "Computer Vision", "Mechatronics"],
  },
]

const fieldColors: Record<string, string> = {
  EEE: "text-primary border-primary/30 bg-primary/10",
  CSE: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  ETE: "text-violet-400 border-violet-400/30 bg-violet-400/10",
  CCE: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "EEE / CCE": "text-primary border-primary/30 bg-primary/10",
}

export default function ResearchSection() {
  const [expanded, setExpanded] = useState<string | null>("01")

  return (
    <section id="research" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
              Research Groups
            </Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-black leading-tight text-foreground text-balance">
              BROWSE<br />
              <span className="text-primary">WHAT JUST</span><br />
              LAUNCHED
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Our research groups are open for membership. Each group is led by experienced researchers with active publication and project pipelines.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-xs font-bold gap-2">
              Browse All Groups <ArrowRight className="w-3.5 h-3.5" />
            </Button>

            {/* Member count badge */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                <span className="text-foreground font-semibold">500+</span> active members
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
                  className={`border rounded-xl overflow-hidden transition-colors cursor-pointer ${
                    isOpen
                      ? "border-primary/30 bg-card"
                      : "border-border bg-surface hover:border-border/60"
                  }`}
                  onClick={() => setExpanded(isOpen ? null : g.id)}
                >
                  <div className="flex items-center justify-between p-4 gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-muted-foreground text-xs font-mono flex-shrink-0">{g.id}</span>
                      <div className="min-w-0">
                        <div className="text-foreground font-semibold text-sm truncate">{g.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={`text-xs border px-2 py-0 ${fieldColors[g.field]}`}>{g.field}</Badge>
                          <span className="text-muted-foreground text-xs">{g.members} members</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-muted-foreground">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-border pt-4 space-y-3">
                      <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {g.topics.map((t) => (
                          <span key={t} className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="mt-2 border-primary/30 text-primary hover:bg-primary/10 text-xs uppercase tracking-wider gap-1">
                        Apply for Membership <ArrowRight className="w-3 h-3" />
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
