import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Globe,
  HeartHandshake,
  Users,
  Zap,
} from "lucide-react";

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
];

const specs = [
  { label: "Research Groups Active", value: "12+" },
  { label: "Published Papers", value: "80+" },
  { label: "Total Members", value: "500+" },
  { label: "Courses Available", value: "30+" },
];

export default function WhySection() {
  return (
    <section className="py-24  relative">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Spec card */}
          <div className="">
            <div className="bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-2xl p-8 space-y-6 shadow-xl shadow-zinc-200/40 dark:shadow-none">
              <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
                What We Offer
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl font-black text-zinc-950 dark:text-foreground leading-tight">
                EVERYTHING WE
                <br />
                DO IS BUILT
                <br />
                <span className="text-primary">AROUND YOU</span>
              </h1>
              <p className="text-zinc-600 dark:text-muted-foreground text-sm leading-relaxed">
                We don&apos;t just sell courses. We build relationships that
                last beyond any single program — mentors who stay, communities
                that grow, and research that matters.
              </p>

              {/* Spec grid */}
              <div className="grid grid-cols-2 gap-px bg-zinc-200 dark:bg-border rounded-xl overflow-hidden">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-card p-4 space-y-1"
                  >
                    <div className="font-heading font-black text-2xl text-primary">
                      {s.value}
                    </div>
                    <div className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual circuit strip */}
              <div className="relative h-16 bg-zinc-50 dark:bg-surface border border-zinc-100 dark:border-none rounded-xl overflow-hidden flex items-center px-4 gap-3">
                <Zap className="w-5 h-5 text-primary" fill="currentColor" />
                <div className="flex-1 h-px bg-primary/20 relative">
                  <div className="absolute inset-y-0 left-0 w-1/2 h-px bg-primary animate-pulse" />
                </div>
                <span className="text-primary text-xs font-mono font-bold tracking-widest">
                  ELECTRO·XPLORE
                </span>
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
              <div
                key={title}
                className="flex gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-background dark:bg-cyan-950/20 backdrop-blur-3xl transition-colors hover:shadow-md hover:shadow-zinc-200/30 dark:hover:shadow-none group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-zinc-950 dark:text-foreground text-sm uppercase tracking-wide mb-1">
                    {title}
                  </h3>
                  <p className="text-zinc-600 dark:text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
