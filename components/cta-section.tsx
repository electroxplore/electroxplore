import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function CtaSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/30 via-primary/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="font-heading text-5xl sm:text-6xl font-black text-foreground leading-tight text-balance">
              LET&apos;S BUILD YOUR
              <br />
              <span className="text-primary">ENGINEERING</span>
              <br />
              FUTURE TOGETHER
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Whether you want to lead a research project, publish your first
              paper, or simply learn new engineering skills — ElectroXplore is
              the place to begin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-sm px-8 gap-2"
              >
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary uppercase tracking-wider text-sm px-8"
              >
                Explore Research
              </Button>
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className="relative">
            <div className="bg-background border border-border rounded-2xl p-8 space-y-6">
          
                <div>
        <Image src="/logo.png" alt="ElectroXplore Logo" width={32} height={32} className="size-35" />
         
           <p className="text-muted-foreground text-xs font-semibold -mt-12">
                  Engineering Research & Training
                </p>
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
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground text-sm">
                      {item.label}
                    </span>
                    <span className="text-primary text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-sm gap-2">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
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
