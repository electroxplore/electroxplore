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
  LineChart, 
  BrainCircuit, 
  Code2, 
  Binary, 
  CheckCircle2, 
  X 
} from "lucide-react";

export function RecruitmentPolicyDrawer() {
  const eligibility = [
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
      title: "Academic Standing",
      text: "Must be a B.Sc. Engineering student (4th semester or above) in EEE, CSE, ETE, CCE, or a relevant structural engineering field.",
    },
    {
      icon: <LineChart className="w-5 h-5 text-indigo-500" />,
      title: "Performance",
      text: "Demonstrated strong academic performance and a keen interest in deep technical research domains.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-indigo-500" />,
      title: "Mindset",
      text: "Strong, self-driven analytical abilities equipped with a critical problem-solving mindset.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
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
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors cursor-pointer">
          Eligibility & Responsibilities
        </button>
      </DrawerTrigger>
      
      <DrawerContent className="h-full max-w-md ml-auto rounded-l-xl">
        <DrawerHeader className="text-left pt-6">
          <div>
            <p className="text-indigo-500 text-xs uppercase tracking-widest font-semibold mb-1">
              Join Our Cohort
            </p>
            <DrawerTitle className="font-heading font-black text-3xl text-foreground text-balance">
              Recruitment Policy
            </DrawerTitle>
          </div>
          <DrawerDescription className="text-muted-foreground pt-2 text-sm leading-relaxed">
            Review our academic eligibility criteria and performance metrics expected of active research group members.
          </DrawerDescription>
        </DrawerHeader>

        {/* Scrollable Policy Layout */}
        <div className="no-scrollbar overflow-y-auto px-4 py-2 flex-1 space-y-5">
          {/* Eligibility Section */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-foreground/70 flex items-center gap-2">
              <Binary className="w-4 h-4 text-indigo-500" /> Eligibility & Qualifications
            </h3>
            <div className="space-y-2">
              {eligibility.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-xl border border-border/40 bg-muted/20"
                >
                  <div className="flex-shrink-0 p-1.5 rounded-md bg-background border border-border">
                    {item.icon}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs font-semibold text-foreground">{item.title}</p>
                    <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Responsibilities Section */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-foreground/70 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Core Responsibilities
            </h3>
            <ul className="space-y-2.5 pl-1">
              {responsibilities.map((text, index) => (
                <li key={index} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DrawerFooter className="border-t border-border bg-background pt-4 pb-6">
          <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
            <span>ElectroXplore Talent</span>
            <span>Academic Cycle: 2026</span>
          </div>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full gap-2">
              <X className="w-4 h-4" /> Dismiss Panel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}