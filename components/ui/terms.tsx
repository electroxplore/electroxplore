import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { 
  Target, 
  CalendarClock, 
  Briefcase, 
  ShieldCheck, 
  Lock, 
  Coins, 
  Scale, 
  X 
} from "lucide-react";

export function TermsAndConditionsDrawer() {
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
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors cursor-pointer">
          Terms & Conditions
        </button>
      </DrawerTrigger>
      
      <DrawerContent className="h-full max-w-md ml-auto rounded-l-xl">
        <DrawerHeader className="text-left pt-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-1">
              Legal Framework
            </p>
            <DrawerTitle className="font-heading font-black text-3xl text-foreground text-balance">
              Terms & Conditions
            </DrawerTitle>
          </div>
          <DrawerDescription className="text-muted-foreground pt-2 text-sm leading-relaxed">
            Please read these terms carefully before joining Electro Xplore. They govern your membership, responsibilities, and research contributions.
          </DrawerDescription>
        </DrawerHeader>

        {/* Scrollable Terms Content */}
        <div className="no-scrollbar overflow-y-auto px-4 py-2 flex-1 space-y-3">
          {sections.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-3.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-background border border-border shadow-sm">
                {item.icon}
              </div>
              <div className="space-y-1 pt-0.5">
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <DrawerFooter className="border-t border-border bg-background pt-4 pb-6">
          <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
            <span>ElectroXplore Legal</span>
            <span>Last updated: June 2026</span>
          </div>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full gap-2">
              <X className="w-4 h-4" /> Close Terms
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}