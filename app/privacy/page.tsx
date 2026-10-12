import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ElectroXplore",
  description:
    "Privacy Policy for ElectroXplore research and training platform.",
};

import {
  Binary,
  BrainCircuit,
  CheckCircle2,
  Code2,
  GraduationCap,
  LineChart,
} from "lucide-react";

export default function RecruitmentPolicyPage() {
  const eligibility = [
    {
      icon: <GraduationCap className="h-5 w-5 text-indigo-500" />,
      title: "Academic Standing",
      text: "Must be a B.Sc. Engineering student (4th semester or above) in EEE, CSE, ETE, CCE, or a relevant structural engineering field.",
    },
    {
      icon: <LineChart className="h-5 w-5 text-indigo-500" />,
      title: "Performance",
      text: "Demonstrated strong academic performance and a keen interest in deep technical research domains.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5 text-indigo-500" />,
      title: "Mindset",
      text: "Strong, self-driven analytical abilities equipped with a critical problem-solving mindset.",
    },
    {
      icon: <Code2 className="h-5 w-5 text-indigo-500" />,
      title: "Technical Skill",
      text: "Functional proficiency in modern engineering frameworks and core programming languages.",
    },
  ];

  const responsibilities = [
    "Work diligently as a trainee researcher within an assigned specialized research group under direct mentor guidance.",
    "Maintain high levels of team meeting attendance, dynamic discussion contribution, and workspace presentation syncs.",
    "Demonstrate rigorous consistency, high operational discipline, and individual dedication to assigned development milestones.",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Page Header */}
        <header className="mb-10 border-b border-border pb-8 sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Join Our Cohort
          </p>

          <h1 className="text-balance font-heading text-3xl font-black sm:text-4xl lg:text-5xl">
            Recruitment Policy
          </h1>

          <p className="pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Review our academic eligibility criteria and performance metrics
            expected of active research group members.
          </p>
        </header>

        <div className="space-y-10">
          {/* Eligibility Section */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/70">
              <Binary className="h-5 w-5 text-indigo-500" />
              Eligibility & Qualifications
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-border/40 bg-muted/20 p-4 transition-colors hover:bg-muted/50 sm:p-5"
                >
                  <div className="flex-shrink-0 rounded-lg border border-border bg-background p-2 shadow-sm">
                    {item.icon}
                  </div>

                  <div className="min-w-0 space-y-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Responsibilities Section */}
          <section className="space-y-4">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/70">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              Core Responsibilities
            </h2>

            <div className="rounded-xl border border-border/50 bg-muted/20 p-5 sm:p-6">
              <ul className="space-y-5">
                {responsibilities.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Page Footer */}
        <footer className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>ElectroXplore Talent</span>
          <span>Academic Cycle: 2026</span>
        </footer>
      </div>
    </main>
  );
}
