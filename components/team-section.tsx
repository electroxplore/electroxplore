import Image from "next/image"
import { Globe, Mail, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FaGoogleScholar, FaResearchgate } from "react-icons/fa6"
import Link from "next/link"
import { LiaLinkedin } from "react-icons/lia"
import { FaLinkedin } from "react-icons/fa"

const founders = [
  {
    name: "Mohammed Abdul Kader",
    role: "Co-Founder & Research Lead",
    field: "EEE · Signal Processing",
    bio: "MSc in Electrical Engineering with 5+ years in power electronics research. Passionate about bridging academic research and industry application.",
    image: "/images/founder-1.png",
    socials: { linkedin: "https://www.linkedin.com/in/mohammed-abdul-kader-rubel-9851421ab/", FaGoogleScholar: "https://scholar.google.com/citations?user=ksuG548AAAAJ&hl=en" },  

  },
  {
    name: "Md. Fakwer Uddin",
    role: "Co-Founder & Managing Lead",
    field: "EEE · Embedded System & IoT",
    bio: "Software engineer and educator. Designed ElectroXplore's entire training curriculum covering ML, embedded systems, and software engineering.",
    image: "/images/founder-2.png",
    socials: { linkedin: "https://www.linkedin.com/in/fkr-uddin/", FaGoogleScholar: "https://scholar.google.com/citations?user=aM3IifoAAAAJ&hl=en" },  
  },
  {
    name: "Md. Mehedi Hassain",
    role: "Co-Founder & Senior Trainer",
    field: "EEE · Medical & IoT",
    bio: "Wireless communications researcher and full-stack developer. Leads platform architecture and the IoT & Embedded Systems research group.",
    image: "/images/mehedi.png",
    socials: { linkedin: "https://www.linkedin.com/in/mehedi-hassain-7b8b8b7b/",  FaGoogleScholar: "https://scholar.google.com/citations?user=MACE5hUAAAAJ&hl=en" },  
  },
    {
    name: "Mohammad Woli Ullah",
    role: "Co-Founder & Senior Excecutive",
    field: "ETE · Wireless & IoT",
    bio: "Wireless communications researcher and full-stack developer. Leads platform architecture and the IoT & Embedded Systems research group.",
    image: "/images/woli.png",
    socials: { linkedin: "https://www.linkedin.com/in/mohammad-woli-ullah-55231670/",  FaGoogleScholar: "https://scholar.google.com/citations?hl=en&user=beyYzs8AAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=fakwer.uddin%40gmail.com&gmla=ACrTK9WdUP6pEQCWWB2-Dv_bRLXWSSkhFlDUXOig64aLq__kepYXTxHZXU8HyPjDxKlhsUoPuSNCXFuaVJP6cyDXijtOSGhbVUvqHHuRa7SITe7oUPLd7U0V6blYIFEg9aZQIBAcXlzXiXWa_qWiLsNfbh5Yua_YAYxL1pmCCD1yFkT4W0OAhxPQ1pXUgZWCGch_WLkn3au_psfFKXr0wRIyBzRERl-xz45_gRV6IbFwShdDg44" },  
  },
  //    {
  //   name: "Mohammad Woli Ullah",
  //   role: "Co-Founder & Senior Excecutive",
  //   field: "ETE · Wireless & IoT",
  //   bio: "Wireless communications researcher and full-stack developer. Leads platform architecture and the IoT & Embedded Systems research group.",
  //   image: "/images/woli.png",
  //   socials: { linkedin: "", email: "nabil@electroxplore.org", github: "#" , FaGoogleScholar: "https://scholar.google.com/citations?hl=en&user=beyYzs8AAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=fakwer.uddin%40gmail.com&gmla=ACrTK9WdUP6pEQCWWB2-Dv_bRLXWSSkhFlDUXOig64aLq__kepYXTxHZXU8HyPjDxKlhsUoPuSNCXFuaVJP6cyDXijtOSGhbVUvqHHuRa7SITe7oUPLd7U0V6blYIFEg9aZQIBAcXlzXiXWa_qWiLsNfbh5Yua_YAYxL1pmCCD1yFkT4W0OAhxPQ1pXUgZWCGch_WLkn3au_psfFKXr0wRIyBzRERl-xz45_gRV6IbFwShdDg44" },  
  // },
]

const members = [
  {
    name: "Tanvir Ahmed",
    role: "Research Member",
    field: "EEE",
    image: "/images/member-1.png",
  },
  {
    name: "Priya Das",
    role: "Research Member",
    field: "CSE",
    image: "/images/member-2.png",
  },
  {
    name: "Rafiq Uddin",
    role: "Research Member",
    field: "ETE",
    image: "/images/member-3.png",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(oklch(0.65 0.22 210) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">The People</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-foreground text-balance">
            FOUNDERS &<br />
            <span className="text-primary">MEMBERS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Built by engineers, for engineers. Meet the team behind ElectroXplore and the growing community of researchers and learners.
          </p>
        </div>

        {/* Founders grid */}
        <div className="mb-6">
          <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            Founders
            <span className="h-px flex-1 bg-border" />
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {founders.map((f) => (
              <div
                key={f.name}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
              >
                {/* Photo */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={f.image}
                    alt={`${f.name} — ${f.role}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs">
                      {f.field}
                    </Badge>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg leading-tight">{f.name}</h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">{f.role}</p>
                  </div>
                  {/* <p className="text-muted-foreground text-sm leading-relaxed">{f.bio}</p> */}

                  {/* Social links */}
                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={f.socials.linkedin}
                      aria-label={`${f.name} LinkedIn`}
                      className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
                    >
                      <FaLinkedin className="w-3.5 h-3.5" />
                    </Link>
                    {/* <Link
                      href={`mailto:${f.socials.email}`}
                      aria-label={`Email ${f.name}`}
                      className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={f.socials.github}
                      aria-label={`${f.name} GitHub`}
                      className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                    </Link> */}
                      <Link
                      href={f.socials.FaGoogleScholar}
                      aria-label={`${f.name} FaGoogleScholar`}
                      className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
                    >
                      <FaGoogleScholar className="w-3.5 h-3.5" />
                    </Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active members strip */}
        <div>
          <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            Active Members
            <span className="h-px flex-1 bg-border" />
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            {members.map((m) => (
              <div
                key={m.name}
                className="group bg-background border border-border rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-border group-hover:border-primary/40 transition-colors">
                  <Image
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-heading font-bold text-foreground text-sm">{m.name}</h4>
                  <p className="text-muted-foreground text-xs">{m.role}</p>
                  <Badge className="mt-1.5 bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5">
                    {m.field}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

        
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-foreground text-lg">Become a Member</h4>
              <p className="text-muted-foreground text-sm mt-1">
                Join our growing community. Research membership is currently free.
              </p>
            </div>
            <Link
              href="#"
              className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
