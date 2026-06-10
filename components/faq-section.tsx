"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  {
    q: "Is ElectroXplore a trusted research organization?",
    a: "Yes. ElectroXplore maintains strict academic integrity standards. Our research groups are led by experienced engineers with verifiable publication records. We are transparent about our membership criteria, research outcomes, and training curriculum.",
  },
  {
    q: "What if I don't enjoy a course after enrolling?",
    a: "We have a transparent refund and feedback policy. Since foundational courses are free, you can try before committing to any premium content. All paid courses offer a 7-day satisfaction window — if it's not right for you, we'll make it right.",
  },
  {
    q: "How does membership in a research group work?",
    a: "Membership is application-based. You apply for a specific group, go through a brief orientation, and get assigned to a project team. There are no fees initially — we want passionate people, not just paying subscribers.",
  },
  {
    q: "Can I join multiple research groups?",
    a: "You can apply to multiple groups, though acceptance depends on your background and group capacity. We encourage interdisciplinary involvement — for example, an EEE student contributing to an IoT or AI project is very welcome.",
  },
  {
    q: "When will training programs start charging fees?",
    a: "Advanced and specialized modules will introduce course fees as we expand our content library and bring in expert instructors. Foundational courses will remain free permanently. You will always have clear visibility on what is free vs. paid before enrolling.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs uppercase tracking-widest px-3 py-1">
            FAQ
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-foreground leading-tight text-balance">
            LET US CLEAR<br />
            THINGS UP
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We answer every question new members bring — here are the most common ones.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-5 overflow-hidden data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-foreground font-semibold text-sm py-5 hover:no-underline hover:text-primary transition-colors text-left [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
            <span className="text-muted-foreground font-semibold">Need more clarity?</span>
          </div>
          <p className="text-muted-foreground text-sm">
            You can reach our team anytime — we&apos;re happy to answer any questions about research groups or training.
          </p>
          <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-bold gap-2">
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
