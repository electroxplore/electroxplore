import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rafiq Ahmed",
    role: "EEE Graduate, BUET",
    content: "Joining ElectroXplore's power systems group was the turning point in my academic career. I published my first paper within 6 months and gained mentorship I couldn't find elsewhere.",
    stars: 5,
    field: "EEE",
  },
  {
    name: "Nusrat Jahan",
    role: "CSE Student, SUST",
    content: "The free Python & ML course gave me exactly the practical foundation I needed. The instructors are genuinely helpful and the community Discord is incredibly active.",
    stars: 5,
    field: "CSE",
  },
  {
    name: "Tahmid Hossain",
    role: "ETE Researcher",
    content: "The wireless systems group connected me with experts I never would have met otherwise. Our research collaboration led to a conference acceptance within a year.",
    stars: 5,
    field: "ETE",
  },
]

const stats = [
  { value: "12K+", label: "Community Members" },
  { value: "600+", label: "Research Papers" },
  { value: "150", label: "Courses Completed" },
  { value: "150", label: "Active Projects" },
]

const fieldColors: Record<string, string> = {
  EEE: "bg-primary/10 text-primary",
  CSE: "bg-emerald-400/10 text-emerald-400",
  ETE: "bg-violet-400/10 text-violet-400",
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.65 0.22 210) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.22 210) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 max-w-2xl">
          <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
            Testimonials
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-foreground leading-tight text-balance">
            EVERY REVIEW IS A STORY<br />
            <span className="text-primary">WE ARE PROUD OF</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our members share their goals with us. We build relationships that last beyond any single project.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background border border-border rounded-xl p-6 space-y-4 hover:border-primary/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20" fill="currentColor" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.content}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${fieldColors[t.field]}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground text-sm font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-6 text-center">
              <div className="font-heading font-black text-3xl text-primary mb-1">{s.value}</div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
