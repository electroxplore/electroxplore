import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, BookOpen, ArrowRight, Lock } from "lucide-react"

const courses = [
 

  {
    id: "01",
    title: "Embedded Systems & IoT Architecture",
    field: "IoT", // Corrected field to match the title
    duration: "Based on Project",
    students: 12,
    level: "Intermediate",
    free: true,
    desc: "Design and implement smart interconnected systems, working with sensor arrays, microcontrollers, and real-time cloud data pipelines.",
  },
  {
    id: "02",
    title: "Academic Research & Paper Writing with Overleaf",
    field: "Signal Processing", // Fixed broken string quote from your input snippet
    duration: "Based on Project",
    students: 12,
    level: "Intermediate",
    free: true,
    desc: "Master LaTeX formatting, literature reviews, methodology documentation, and structuring peer-reviewed manuscripts using Overleaf.",
  },

  //  {
  //   id: "03",
  //   title: "5G & Beyond: Wireless Systems",
  //   field: "ETE",
  //   duration: "6 weeks",
  //   students: 78,
  //   level: "Intermediate",
  //   free: false,
  //   desc: "Dive into 5G NR architecture, beamforming, massive MIMO and next-generation wireless technologies.",
  // },

]

const fieldColors: Record<string, string> = {
  EEE: "text-primary border-primary/30 bg-primary/10",
  CSE: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  ETE: "text-violet-400 border-violet-400/30 bg-violet-400/10",
  CCE: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "CCE / EEE": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "CSE / ETE": "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
}

const levelColors: Record<string, string> = {
  Beginner: "text-green-400",
  Intermediate: "text-amber-400",
  Advanced: "text-red-400",
}

export default function TrainingSection() {
  return (
    <section id="training" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
              Training Programs
            </Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-foreground leading-tight text-balance">
              BROWSE WHAT<br />
              <span className="text-primary">JUST LAUNCHED</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Free courses available to start
            
          </div>
        </div>

        {/* Courses grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={`text-xs border px-2 py-0 ${fieldColors[c.field]}`}>{c.field}</Badge>
                  <span className={`text-xs font-semibold ${levelColors[c.level]}`}>{c.level}</span>
                </div>
                {c.free ? (
                  <Badge className="bg-green-400/10 text-green-400 border border-green-400/30 text-xs px-2 py-0">Free</Badge>
                ) : (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    <span className="text-xs">Premium</span>
                  </div>
                )}
              </div>

              <span className="text-muted-foreground text-xs font-mono mb-2">{c.id}</span>
              <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{c.desc}</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {c.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {c.students} enrolled
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Structured
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-10">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider text-sm font-bold px-10 gap-2">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}
