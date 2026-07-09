import Image from "next/image"
import { Users, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import Link from "next/link"

const stats = [
  { value: "10+", label: "Research Fields" },
  { value: "16+", label: "Members" },
  { value: "Relevant", label: "Courses" },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.65 0.22 210) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.22 210) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Accent glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
              Engineering Research & Training
            </Badge>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-foreground text-balance">
              EXPLORE THE<br />
              <span className="text-primary">FUTURE OF</span><br />
              ENGINEERING
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-lg text-base">
              ElectroXplore brings together researchers and learners across EEE, CSE, ETE, CCE and more. Join our membership-based research groups or enroll in structured training programs.
            </p>
            <Link href="/register" className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-sm px-8 gap-2">
                Join Research Group <FaArrowUpRightFromSquare className="size-3" />
              </Button>
              {/* <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary uppercase tracking-wider text-sm px-8">
                Browse Courses
              </Button> */}
            </Link>
            <div className="flex gap-8 pt-4 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-black text-2xl text-foreground">{s.value}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/hero-engineering.png"
                  alt="ElectroXplore engineering research lab with PCB circuits and holographic displays"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {/* Tag on image */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                    Active Research
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface rounded-lg p-3 flex items-center gap-3 border border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground text-sm font-semibold">Research Groups</div>
                      <div className="text-muted-foreground text-xs">Membership Based</div>
                    </div>
                  </div>
                  <div className="bg-surface rounded-lg p-3 flex items-center gap-3 border border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground text-sm font-semibold">Training Courses</div>
                      <div className="text-muted-foreground text-xs">Free to Start</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-foreground text-sm font-semibold">5.0</span>
                  <span className="text-muted-foreground text-xs">from 10+ members</span>
                </div>
              </div>
            </div>
            <div className="animate-pulse absolute -top-4 -right-4 bg-white text-primary-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center text-center border-4 border-primary">
              <span className="font-heading font-black text-xl leading-none">Free</span>
              <span className="text-xs leading-none mt-0.5 opacity-80">to Join</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
