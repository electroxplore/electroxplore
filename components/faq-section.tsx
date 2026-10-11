"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle } from "lucide-react";
import { ContactCollapsible } from "./contact-info";

const faqs = [
  {
    q: "Is ElectroXplore a trusted research organization?",
    a: "Yes. ElectroXplore maintains strict academic integrity standards. Our research groups are led by experienced engineers with verifiable publication records. We are transparent about our membership criteria, research outcomes, and training curriculum.",
  },
  {
    q: "What are the eligibility requirements to join as a researcher?",
    a: "Applicants must be B.Sc. Engineering students currently in their 4th semester or above. We primarily accept individuals from EEE, CSE, ETE, CCE, or closely related technical disciplines who demonstrate strong academic performance and a problem-solving mindset.",
  },
  {
    q: "What is expected of me as a trainee researcher?",
    a: "You are expected to work diligently under your mentor's guidance, maintain regular attendance, dedicate the agreed-upon weekly hours, and show high operational discipline in all assigned research and data tasks.",
  },
  {
    q: "Who owns the Intellectual Property (IP) and research data?",
    a: "All IP, including raw data, methodologies, code, and final outputs (papers, patents), is the exclusive property of ElectroXplore. However, members can use findings for their own academic theses or dissertations with prior written permission.",
  },
  {
    q: "Will I receive official recognition after completing the project?",
    a: "Yes. Upon successful completion of your research tenure, satisfying your group's milestones, and completing a smooth task handover, you will receive an official Experience Certificate.",
  },
  {
    q: "Can I join multiple research groups?",
    a: "You can apply to multiple groups, though acceptance depends on your background and group capacity. We encourage interdisciplinary involvement — for example, an EEE student contributing to an IoT or AI project is very welcome.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-white dark:bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
            FAQ
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-zinc-950 dark:text-foreground leading-tight text-balance">
            LET US CLEAR
            <br />
            THINGS UP
          </h2>
          <p className="text-zinc-600 dark:text-muted-foreground leading-relaxed">
            We answer every question new members bring — here are the most
            common ones.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-2"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-zinc-50 dark:bg-card border border-zinc-200 dark:border-border rounded-xl px-5 overflow-hidden data-[state=open]:border-primary/30 shadow-sm dark:shadow-none"
            >
              <AccordionTrigger className="text-zinc-950 dark:text-foreground font-semibold text-sm py-5 hover:no-underline hover:text-primary transition-colors text-left [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 dark:text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Need more clarity */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-zinc-800 dark:text-muted-foreground font-semibold">
              Need more clarity?
            </span>
          </div>
          <p className="text-zinc-600 dark:text-muted-foreground text-sm">
            You can reach our team anytime — we&apos;re happy to answer any
            questions about research groups or training.
          </p>
          <div className="flex justify-center">
            <ContactCollapsible />
          </div>
        </div>
      </div>
    </section>
  );
}
