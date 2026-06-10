import { Cpu, Wifi, Zap, Code2, CircuitBoard, BrainCircuit, Waves, Settings2 } from "lucide-react"

const fields = [
  { icon: Zap, label: "EEE", full: "Electrical & Electronic Engineering" },
  { icon: Code2, label: "CSE", full: "Computer Science & Engineering" },
  { icon: Wifi, label: "ETE", full: "Electronics & Telecom Engineering" },
  { icon: CircuitBoard, label: "CCE", full: "Computer & Communication Engineering" },
  { icon: Cpu, label: "ME", full: "Mechanical Engineering" },
  { icon: BrainCircuit, label: "AI/ML", full: "Artificial Intelligence & ML" },
  { icon: Waves, label: "Signal", full: "Signal Processing" },
  { icon: Settings2, label: "Control", full: "Control Systems" },
]

export default function FieldsSection() {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-xs uppercase tracking-widest mb-10">
          The engineering fields we work in — all in one place
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {fields.map(({ icon: Icon, label, full }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary/30 bg-card hover:bg-surface transition-all cursor-pointer"
              title={full}
            >
              <div className="w-10 h-10 bg-surface group-hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="font-heading font-bold text-foreground text-sm text-center group-hover:text-primary transition-colors">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
