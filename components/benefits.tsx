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
  GraduationCap, 
  BookOpen, 
  Wrench, 
  Users, 
  FileText, 
  Globe, 
  Trophy, 
  Award,
  X
} from "lucide-react";

export function BenefitsDrawer() {
  const benefits = [
    {
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      text: "Receive specialized training and gain state-of-the-art knowledge in a focused research field.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      text: "Learn research methodologies and academic writing skills.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      text: "Gain hands-on experience with advanced research tools and software.",
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      text: "Collaborate with experienced researchers and mentors.",
    },
    {
      icon: <FileText className="w-5 h-5 text-primary" />,
      text: "Opportunity to publish research papers in recognized journals.",
    },
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      text: "Attend and present at national and international conferences.",
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      text: "Participate in competitive technical programs and hackathons.",
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      text: "Receive an official Experience Certificate upon successful completion.",
    },
  ];

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors cursor-pointer">
          Benefits
        </button>
      </DrawerTrigger>
      
      {/* Target a specific width for the right-side drawer panel */}
      <DrawerContent className="h-full max-w-md ml-auto rounded-l-xl">
        <DrawerHeader className="text-left pt-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-1">
              Perks & Growth
            </p>
            <DrawerTitle className="font-heading font-black text-3xl text-foreground text-balance">
              Benefits of Joining ElectroXplore
            </DrawerTitle>
          </div>
          <DrawerDescription className="text-muted-foreground pt-2 text-sm leading-relaxed">
            Please read these terms carefully before using ElectroXplore. They govern your use of our research and training services.
          </DrawerDescription>
        </DrawerHeader>

        {/* Scrollable Benefits List */}
        <div className="no-scrollbar overflow-y-auto px-4 py-2 flex-1 space-y-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-3.5 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-background border border-border shadow-sm">
                {benefit.icon}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed pt-1">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer info matching your design specs */}
        <DrawerFooter className="border-t border-border bg-background pt-4 pb-6">
          <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
            <span>ElectroXplore Hub</span>
            <span>Last updated: June 2026</span>
          </div>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full gap-2">
              <X className="w-4 h-4" /> Close Panel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}