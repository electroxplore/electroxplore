"use client"

import * as React from "react"
import { 
  ChevronsUpDown, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"

export function ContactCollapsible() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2 p-1 bg-background border border-border rounded-xl shadow-sm text-left"
    >
      {/* Header Activation Area */}
      <div className="flex items-center justify-between gap-4 px-3 py-1.5 text-left">
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] text-primary uppercase tracking-widest font-bold">
            Support Hub
          </p>
          <h4 className="text-sm font-bold text-foreground">Get In Touch</h4>
        </div>
        
        <CollapsibleTrigger className="border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer">
          <MessageCircle className="w-4 h-4" />
          Contact Us
          <ChevronsUpDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
      </div>

      {/* Hidden Expandable Extra Context */}
      <CollapsibleContent className="flex flex-col gap-2 px-2 pb-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out w-full">
        
        {/* Phone / WhatsApp Node */}
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors text-left w-full">
          <div className="p-2 rounded-lg bg-background border border-border shadow-sm text-primary flex-shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 text-left min-w-0">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
              Hotline & WhatsApp
            </span>
            <Link
              href="tel:+8801788817293" 
              className="text-xs font-semibold text-foreground hover:text-primary transition-colors block"
            >
              +880 1788-817293
            </Link>
          </div>
        </div>

        {/* Email Node */}
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors text-left w-full">
          <div className="p-2 rounded-lg bg-background border border-border shadow-sm text-primary flex-shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 text-left min-w-0">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
              Official Inquiry
            </span>
            <a 
              href="mailto:electroexplore.lab@gmail.com" 
              className="text-xs font-medium text-foreground hover:text-primary transition-colors break-all block"
            >
              electroexplore.lab@gmail.com
            </a>
          </div>
        </div>

        {/* Operational Hours Metadata */}
        <div className="flex items-center gap-3 p-3 rounded-xl border border-border/40 bg-muted/10 text-left w-full">
          <div className="p-2 rounded-lg bg-background border border-border/60 text-muted-foreground flex-shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 text-left min-w-0">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
              Response Window
            </span>
            <p className="text-[11px] text-muted-foreground/90 leading-tight font-medium">
              Sat — Thu, 10:00 AM - 08:00 PM
            </p>
          </div>
        </div>

      </CollapsibleContent>
    </Collapsible>
  )
}