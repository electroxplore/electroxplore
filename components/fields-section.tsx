import { Binary, BrainCircuit, Cpu, Radio, Waves } from "lucide-react";
import { PiSunHorizonLight } from "react-icons/pi";

const fields = [
  { icon: Cpu, label: "Robotics", full: "Robotics & Automation Engineering" },
  { icon: Binary, label: "Embedded Systems", full: "Embedded Systems Design" },
  { icon: Radio, label: "IoT", full: "Internet of Things" },
  {
    icon: Waves,
    label: "Signal Processing",
    full: "Signal Processing & Communications",
  },
  {
    icon: PiSunHorizonLight,
    label: "Renewable Energy",
    full: "Renewable Energy & Power Systems",
  },
  {
    icon: BrainCircuit,
    label: "AI/ML",
    full: "Artificial Intelligence & Machine Learning",
  },
];

export default function FieldsSection() {
  return (
    <section className="py-16 bg-white dark:bg-background border-y border-zinc-200 relative dark:border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest mb-10">
          The engineering fields we work in — all in one place
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {fields.map(({ icon: Icon, label, full }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-zinc-200 dark:border-border hover:border-primary/30 bg-white dark:bg-card hover:bg-zinc-50 dark:hover:bg-surface transition-all cursor-pointer shadow-sm dark:shadow-none"
              title={full}
            >
              <div className="w-10 h-10 bg-zinc-50 dark:bg-surface group-hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors border border-zinc-100 dark:border-none">
                <Icon className="w-5 h-5 text-zinc-400 dark:text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="font-heading font-bold text-zinc-950 dark:text-foreground text-sm text-center group-hover:text-primary transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
