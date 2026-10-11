import { Eye, Globe, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We push the boundaries of what is possible in engineering, fostering a culture of curiosity and bold experimentation.",
  },
  {
    icon: Globe,
    title: "Open Knowledge",
    desc: "Research findings and learning resources are shared openly within our community — knowledge grows when it is shared.",
  },
];

export default function MissionVisionSection() {
  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div>
        <div className="text-center mb-16">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">
            Our Purpose
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-zinc-950 dark:text-foreground text-balance">
            WHAT DRIVES
            <br />
            <span className="text-primary">ELECTROXPLORE</span>
          </h1>
        </div>

        {/* Mission / Vision cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Mission */}
          <div className="group relative bg-white dark:bg-transparent backdrop-blur-xs border border-zinc-200 dark:border-zinc-900 rounded-2xl p-8 overflow-hidden hover:border-primary/40 transition-colors shadow-lg shadow-zinc-100/50 dark:shadow-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest">
                    Our Mission
                  </p>
                  <h3 className="font-heading font-black text-xl text-zinc-950 dark:text-foreground">
                    What We Do
                  </h3>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed text-base">
                To create a collaborative engineering research community where
                students, graduates, and professionals explore real-world
                problems across EEE, CSE, ETE, CCE, and beyond. We provide
                structured research groups and accessible training programs that
                bridge the gap between academic theory and practical innovation.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Research Groups",
                  "Structured Training",
                  "Peer Collaboration",
                  "Real-World Problems",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative bg-white dark:bg-transparent backdrop-blur-xs border border-zinc-200 dark:border-zinc-900 rounded-2xl p-8 overflow-hidden hover:border-primary/40 transition-colors shadow-lg shadow-zinc-100/50 dark:shadow-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest">
                    Our Vision
                  </p>
                  <h3 className="font-heading font-black text-xl text-zinc-950 dark:text-foreground">
                    Where We Are Going
                  </h3>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed text-base">
                To become the leading engineering research and education
                platform in South Asia — a recognized hub where the next
                generation of engineers develop groundbreaking solutions,
                publish impactful research, and build careers that transform
                industries and society.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "South Asia Leader",
                  "Impactful Research",
                  "Career Growth",
                  "Industry Impact",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values strip */}
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-zinc-50 dark:bg-surface border border-zinc-200 dark:border-border rounded-xl p-5 flex gap-4 items-start hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-zinc-950 dark:text-foreground text-sm mb-1">
                  {title}
                </h4>
                <p className="text-zinc-600 dark:text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
