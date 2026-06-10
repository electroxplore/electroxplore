import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, BookOpen, Globe, Award, Zap, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Quality Research",
    desc: "Every group maintains research standards with active publications, conferences, and peer reviews ensuring credibility.",
  },
  {
    icon: Users,
    title: "Collaborative Community",
    desc: "Work alongside brilliant engineers, share ideas freely, and build lasting professional networks across disciplines.",
  },
  {
    icon: BookOpen,
    title: "Free to Start Training",
    desc: "Our training programs start free so anyone can access foundational knowledge before advancing to premium tiers.",
  },
  {
    icon: Globe,
    title: "Interdisciplinary Exposure",
    desc: "Cross-department collaborations between EEE, CSE, ETE, and CCE teams produce innovative multi-domain solutions.",
  },
  {
    icon: Award,
    title: "Certifications & Badges",
    desc: "Earn verified digital certificates upon completing training modules and research milestones recognized by industry.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship Access",
    desc: "Get paired with experienced researchers and senior engineers who guide your growth within your chosen field.",
  },
]

const specs = [
  { label: "Research Groups Active", value: "12+" },
  { label: "Published Papers", value: "80+" },
  { label: "Total Members", value: "500+" },
  { label: "Courses Available", value: "30+" },
]

export default function WhySection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.65 0.22 210) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Spec card */}
          <div className="relative">
            <div className="bg-background border border-border rounded-2xl p-8 space-y-6">
              <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
                What We Offer
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground leading-tight">
                EVERYTHING WE<br />
                DO IS BUILT<br />
                <span className="text-primary">AROUND YOU</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We don&apos;t just sell courses. We build relationships that last beyond any single program — mentors who stay, communities that grow, and research that matters.
              </p>

              {/* Spec grid */}
              <div className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
                {specs.map((s) => (
                  <div key={s.label} className="bg-card p-4 space-y-1">
                    <div className="font-heading font-black text-2xl text-primary">{s.value}</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Visual circuit strip */}
              <div className="relative h-16 bg-surface rounded-xl overflow-hidden flex items-center px-4 gap-3">
                <Zap className="w-5 h-5 text-primary" fill="currentColor" />
                <div className="flex-1 h-px bg-primary/20 relative">
                  <div className="absolute inset-y-0 left-0 w-1/2 h-px bg-primary animate-pulse" />
                </div>
                <span className="text-primary text-xs font-mono font-bold tracking-widest">ELECTRO·XPLORE</span>
                <div className="flex-1 h-px bg-primary/20 relative">
                  <div className="absolute inset-y-0 right-0 w-1/2 h-px bg-primary animate-pulse" />
                </div>
                <Zap className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Right: Features grid */}
          <div className="space-y-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-xl hover:bg-background transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wide mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
