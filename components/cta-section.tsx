import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      {/* Accent glow */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="font-heading text-5xl sm:text-6xl font-black text-zinc-950 dark:text-foreground leading-tight text-balance">
              LET&apos;S BUILD YOUR
              <br />
              <span className="text-primary">ENGINEERING</span>
              <br />
              FUTURE TOGETHER
            </h1>
            <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed max-w-md">
              Whether you want to lead a research project, publish your first
              paper, or simply learn new engineering skills — ElectroXplore is
              the place to begin.
            </p>
          </div>

          {/* Right: Decorative card */}
          <div className="relative">
            <div className="bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-2xl p-8 space-y-6 shadow-xl shadow-zinc-200/40 dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Zap
                    className="w-5 h-5 text-primary-foreground"
                    fill="currentColor"
                  />
                </div>
                <div>
                  <div className="text-zinc-950 dark:text-foreground font-heading font-bold">
                    ElectroXplore
                  </div>
                  <div className="text-zinc-500 dark:text-muted-foreground text-xs">
                    Engineering Research & Training
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Research Groups", value: "Free Membership" },
                  { label: "Training Courses", value: "Free to Start" },
                  { label: "Certifications", value: "Included" },
                  { label: "Mentorship", value: "Available" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-border last:border-0"
                  >
                    <span className="text-zinc-500 dark:text-muted-foreground text-sm">
                      {item.label}
                    </span>
                    <span className="text-primary text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/register" className="block w-full">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-sm gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
