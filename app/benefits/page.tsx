import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits — ElectroXplore",
  description:
    "Benefits of joining ElectroXplore research and training platform.",
};

import {
  Award,
  BookOpen,
  FileText,
  Globe,
  GraduationCap,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

export default function BenefitsPage() {
  const benefits = [
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      text: "Gain advanced training and expertise in a focused research field.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      text: "Learn research methodologies and academic writing skills.",
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      text: "Gain hands-on experience with advanced research tools and software.",
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      text: "Collaborate with experienced researchers and mentors.",
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      text: "Opportunity to publish research papers in recognized journals.",
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      text: "Attend and present at national and international conferences.",
    },
    {
      icon: <Trophy className="h-5 w-5 text-primary" />,
      text: "Participate in competitive technical programs and hackathons.",
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      text: "Receive an official Experience Certificate upon successful completion.",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-foreground relative">
      <div className="mx-auto w-full max-w-4xl pt-16">
        {/* Page Header */}
        <header className="mb-10 border-b border-border pb-8 sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Perks & Growth
          </p>

          <h1 className="text-balance font-heading text-3xl font-black sm:text-4xl lg:text-5xl">
            Benefits of Joining ElectroXplore
          </h1>

          <p className="pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Please read these terms carefully before using ElectroXplore. They
            govern your use of our research and training services.
          </p>
        </header>

        {/* Benefits List */}
        <section className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="flex items-start gap-4 rounded-xl backdrop-blur-xs border border-border/50 bg-muted/30 p-4 transition-colors hover:bg-muted/60 sm:p-5"
            >
              <div className="flex-shrink-0 rounded-lg border border-border bg-background p-2.5 shadow-sm">
                {benefit.icon}
              </div>

              <p className="pt-1 text-sm leading-relaxed text-foreground/90">
                {benefit.text}
              </p>
            </article>
          ))}
        </section>

        {/* Page Footer */}
        <footer className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>ElectroXplore Hub</span>
          <span>Last updated: June 2026</span>
        </footer>
      </div>
    </main>
  );
}
