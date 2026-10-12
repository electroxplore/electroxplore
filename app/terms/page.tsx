import {
  Briefcase,
  CalendarClock,
  Coins,
  Lock,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — ElectroXplore",
  description:
    "Terms and Conditions for using ElectroXplore research and training services.",
};

export default function TermsAndConditionsPage() {
  const sections = [
    {
      icon: <Target className="w-5 h-5 text-primary" />,
      title: "1. Scope and Objectives",
      text: "The primary objective of the research team is to conduct high-quality, impactful research in areas defined by the Electro Xplore leadership and project scope. All team members are expected to align their efforts with these overarching goals.",
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-primary" />,
      title: "2. Membership Duration & Termination",
      text: "Membership is project-based (e.g., 6 months, 1 year). Electro Xplore may terminate membership due to failure to meet performance metrics, policy breaches, or ethical violations. Resignation requires a minimum of two (2) weeks' written notice with a smooth task handover.",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      title: "3. Responsibilities and Commitment",
      text: "Members must actively participate in scheduled meetings, small sessions, and webinars. All data collection, analysis, and documentation must adhere to the highest standards of academic rigor and data integrity.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "4. Intellectual Property (IP)",
      text: "All IP, including data, methodologies, code, and final research outputs (publications, reports, patents), shall be the exclusive property of Electro Xplore. Academic usage requires prior written permission.",
    },
    {
      icon: <Lock className="w-5 h-5 text-primary" />,
      title: "5. Confidentiality & Publication",
      text: "All non-public information and preliminary findings must be kept strictly confidential. Submissions for publication (papers, presentations) must receive official clearance from the Electro Xplore research lead before external sharing.",
    },
    {
      icon: <Coins className="w-5 h-5 text-primary" />,
      title: "6. Compensation and Acknowledgment",
      text: "Any stipends or financial reimbursements are governed by separate financial agreements. Authorship credit on publications is determined by the team lead based on significant contributions and academic guidelines.",
    },
    {
      icon: <Scale className="w-5 h-5 text-primary" />,
      title: "7. Dispute Resolution",
      text: "Any disputes arising from these terms and conditions will be addressed internally through mechanisms established by the Electro Xplore leadership team.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-10 border-b border-border pb-8 sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Legal Framework
          </p>

          <h1 className="text-balance font-heading text-3xl font-black sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>

          <p className="pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Please read these terms carefully before joining Electro Xplore.
            They govern your membership, responsibilities, and research
            contributions.
          </p>
        </header>

        <div className="space-y-4">
          {sections.map((item, index) => (
            <section
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border/50 bg-muted/30 p-4 transition-colors hover:bg-muted/60 sm:gap-5 sm:p-5"
            >
              <div className="flex-shrink-0 rounded-lg border border-border bg-background p-2.5 shadow-sm">
                {item.icon}
              </div>

              <div className="min-w-0 space-y-2 pt-0.5">
                <h2 className="text-sm font-semibold text-foreground sm:text-base">
                  {item.title}
                </h2>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-[10px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>ElectroXplore Legal</span>
          <span>Last updated: June 2026</span>
        </footer>
      </div>
    </main>
  );
}
