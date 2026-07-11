import { Badge } from "@/components/ui/badge"
import { Cpu, Globe, FlaskConical, GraduationCap } from "lucide-react"

const highlights = [
  { label: "Research Articles", value: "10+" },
  { label: "Active Members", value: "16+" },
  // { label: "Partner Institutions", value: "12+" },
  { label: "Courses Delivered", value: "2+" },
]

const pillars = [
  { icon: FlaskConical, title: "Applied Research", desc: "We conduct hands-on engineering research across EEE, CSE, ETE, CCE and interdisciplinary domains, producing real-world applicable outcomes." },
  { icon: GraduationCap, title: "Structured Training", desc: "From free introductory courses to premium in-depth programs, we build expertise step by step — practical and industry-aligned." },
  { icon: Globe, title: "Global Perspective", desc: "Our research groups attract talent from across the globe, fostering international collaboration and diverse problem-solving approaches." },
  { icon: Cpu, title: "Tech-Forward Culture", desc: "We leverage cutting-edge tools, modern hardware, and innovative methodologies to stay at the frontier of engineering knowledge." },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-transparent">
      {/* Subtle right accent */}

      <div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
              About Us
            </Badge>
            <h2 className="font-heading text-4xl sm:text-5xl font-black leading-tight text-zinc-950 dark:text-foreground text-balance">
              BUILT FOR THOSE<br />
              <span className="text-primary">WHO DARE TO</span><br />
              DISCOVER
            </h2>
            <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed">
              ElectroXplore is an engineering research organization designed for the curious, the driven, and the innovative. We offer a collaborative environment where engineers and students can push boundaries, conduct meaningful research, and grow their technical skills through structured training.
            </p>
            <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed">
              Our membership-based research groups give you access to active projects, expert mentors, and a community of like-minded engineers. Training programs are initially free and transition to premium as depth increases — ensuring quality and accessibility for all.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-zinc-50 dark:bg-surface rounded-xl p-4 border border-zinc-200 dark:border-border shadow-sm shadow-zinc-100/50 dark:shadow-none">
                  <div className="font-heading font-black text-3xl text-primary">{h.value}</div>
                  <div className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-wider mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-xl p-5 hover:border-primary/30 transition-colors group shadow-md shadow-zinc-100/50 dark:shadow-none"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-zinc-950 dark:text-foreground mb-2 text-sm uppercase tracking-wide">{title}</h3>
                <p className="text-zinc-600 dark:text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}