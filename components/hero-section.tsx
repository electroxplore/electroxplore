import { Badge } from "@/components/ui/badge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BookOpen, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Research Fields" },
  { value: "16+", label: "Members" },
  { value: "Relevant", label: "Courses" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-transparent"
    >
      <div className="relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
              Engineering Research & Training
            </Badge>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-zinc-950 dark:text-foreground text-balance">
              EXPLORE THE FUTURE OF ENGINEERING
            </h1>
            <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed max-w-lg text-base">
              ElectroXplore brings together researchers and learners across EEE,
              CSE, ETE, CCE and more. Join our membership-based research groups
              or enroll in structured training programs.
            </p>
            <Link href="/register" className="flex flex-wrap gap-4">
              <div>
                <HoverBorderGradient
                  containerClassName="rounded-2xl"
                  as="button"
                  className="md:text-base text-sm px-6 dark:text-primary text-black  bg-gray-50 dark:bg-transparent"
                >
                  Join Research Group
                </HoverBorderGradient>
              </div>
            </Link>
            <div className="flex gap-8 pt-4 border-t border-zinc-200 dark:border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-black text-2xl text-zinc-950 dark:text-foreground">
                    {s.value}
                  </div>
                  <div className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white dark:bg-card border border-zinc-200 dark:border-border rounded-2xl overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-none">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/hero-engineering.png"
                  alt="ElectroXplore engineering research lab with PCB circuits and holographic displays"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-card dark:via-card/20 to-transparent" />
              </div>

              <div className="p-6 space-y-4 relative bg-white dark:bg-transparent">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-50 dark:bg-surface rounded-lg p-3 flex items-center gap-3 border border-zinc-200 dark:border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-zinc-950 dark:text-foreground text-sm font-semibold">
                        Research Groups
                      </div>
                      <div className="text-zinc-500 dark:text-muted-foreground text-xs">
                        Membership Based
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-50 dark:bg-surface rounded-lg p-3 flex items-center gap-3 border border-zinc-200 dark:border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-zinc-950 dark:text-foreground text-sm font-semibold">
                        Training Courses
                      </div>
                      <div className="text-zinc-500 dark:text-muted-foreground text-xs">
                        Free to Start
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-zinc-950 dark:text-foreground text-sm font-semibold">
                    5.0
                  </span>
                  <span className="text-zinc-500 dark:text-muted-foreground text-xs">
                    from 10+ members
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
