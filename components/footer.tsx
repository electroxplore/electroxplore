// import { Separator } from "@/components/ui/separator";
// import { Mail, MapPin, Phone } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "Our Team", href: "/team" },
//   { label: "Blog", href: "/blog" },
//   { label: "News", href: "/news" },
// ];

// const socials = [
//   {
//     icon: FaFacebook,
//     label: "Facebook",
//     href: "https://www.facebook.com/electroxplore/",
//   },
//   {
//     icon: FaLinkedin,
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/company/electroxplore/",
//   },
//   { icon: FaGithub, label: "GitHub", href: "https://github.com/electroxplore" },
// ];

// export default function Footer() {
//   return (
//     <footer className="dark:bg-card bg white  border-t border-border relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div className="space-y-5">
//             <Link
//               href="/"
//               aria-label="ElectroXplore home"
//               className="inline-flex items-center gap-3 mt-[-6px]"
//             >
//               <span
//                 className="flex h-12 w-12 items-center justify-center
//                 rounded-xl border border-border bg-card"
//               >
//                 <Image
//                   src="/icon.png"
//                   alt="ElectroXplore"
//                   width={36}
//                   height={36}
//                   className="h-9 w-9 object-contain"
//                 />
//               </span>

//               <span>
//                 <span className="block text-lg font-bold tracking-tight">
//                   ElectroXplore
//                 </span>
//                 <span
//                   className="block text-[10px] font-medium uppercase
//                   tracking-[0.22em] text-muted-foreground"
//                 >
//                   Research & Innovation
//                 </span>
//               </span>
//             </Link>

//             <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
//               Engineering research and training for the next generation of
//               innovators.
//             </p>

//             <div className="space-y-3">
//               <Link
//                 href="https://www.google.com/maps/search/22.365124,+91.782564?entry=tts&g_ep=EgoyMDI2MTAwNi4wIPu8ASoASAFQAw%3D%3D&skid=7f9e27dd-d333-4435-bb3e-fa313d9b21b4"
//                 className="flex items-start gap-3 "
//               >
//                 <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
//                 <span className="text-muted-foreground text-sm text-muted-foreground text-sm hover:text-foreground transition-colors">
//                   W-D-7, West Ferojshah Colony, Akbarshah, Chittagong,
//                   Bangladesh
//                 </span>
//               </Link>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-primary flex-shrink-0" />
//                 <Link
//                   href="tel:+8801700000000"
//                   className="text-muted-foreground text-sm hover:text-foreground transition-colors"
//                 >
//                   +880 1788-817293
//                 </Link>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-primary flex-shrink-0" />
//                 <Link
//                   href="mailto:electroexplore.lab@gmail.com"
//                   className="text-muted-foreground text-sm hover:text-foreground transition-colors"
//                 >
//                   electroexplore.lab@gmail.com
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-5">
//             <h4 className="dark:text-foreground text-black font-heading font-bold text-xs uppercase tracking-widest">
//               Quick Links
//             </h4>
//             <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-muted-foreground hover:text-primary text-sm transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="space-y-5">
//             <h4 className="dark:text-foreground text-black font-heading font-bold text-xs uppercase tracking-widest">
//               Follow Us
//             </h4>
//             <div className="flex flex-wrap gap-3">
//               {socials.map(({ icon: Icon, label, href }) => (
//                 <Link
//                   key={label}
//                   target="_blank"
//                   href={href}
//                   aria-label={label}
//                   className="w-10 h-10  bg-gray-50 dark:bg-surface rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
//                 >
//                   <Icon className="w-4 h-4" />
//                 </Link>
//               ))}
//             </div>

//             <div className="pt-2 space-y-2">
//               <h4 className=" font-heading font-bold text-xs uppercase tracking-widest dark:text-foreground text-black">
//                 Research Fields
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Robotics",
//                   "Embedded Systems",
//                   "IOT",
//                   "Signal Processing",
//                   "Renewable Energy",
//                   "AI/ML",
//                 ].map((f) => (
//                   <span
//                     key={f}
//                     className="text-xs bg-gray-50 dark:bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
//                   >
//                     {f}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <Separator className="bg-border my-8" />
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-muted-foreground text-xs">
//             &copy; {new Date().getFullYear()} ElectroXplore. All rights
//             reserved.
//           </p>
//           <div className="flex gap-4 text-xs text-muted-foreground">
//             <Link href="/benefits">Benefits</Link>
//             <Link href="/terms">Terms & Conditions</Link>
//             <Link href="/privacy">Eligibility & Responsibilities</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
];

const researchTags = [
  "Robotics",
  "Embedded Systems",
  "IoT",
  "Signal Processing",
  "Renewable Energy",
  "AI / ML",
];

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/electroxplore/",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/electroxplore/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/electroxplore",
  },
];

export default function Footer() {
  return (
    <footer className="relative dark:bg-card/40 backdrop-blur-sm border-t border-border/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-border/60">
          <Link
            href="/"
            aria-label="ElectroXplore home"
            className="flex items-center gap-3.5 group"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background shadow-xs group-hover:border-primary/50 transition-colors">
              <Image
                src="/icon.png"
                alt="ElectroXplore"
                width={30}
                height={30}
                className="h-7 w-7 object-contain"
              />
            </span>
            <div>
              <span className="block text-lg font-bold tracking-tight text-foreground font-heading">
                ElectroXplore
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Research & Innovation
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                aria-label={label}
                className="h-9 w-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Middle Section: Symmetrical 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Col 1: About */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              About Us
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed pr-2">
              Engineering research and hardware prototyping designed to empower
              the next generation of technical innovators.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research Fields */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Focus Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {researchTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary/70 text-secondary-foreground border border-border/60 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <Link
                href="https://www.google.com/maps/search/22.365124,+91.782564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-foreground transition-colors leading-snug"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Akbarshah, Chittagong, Bangladesh</span>
              </Link>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <Link
                  href="tel:+8801788817293"
                  className="hover:text-foreground transition-colors"
                >
                  +880 1788-817293
                </Link>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <Link
                  href="mailto:electroexplore.lab@gmail.com"
                  className="hover:text-foreground transition-colors truncate"
                >
                  electroexplore.lab@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Policy Links */}
        <Separator className="border-border/60" />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ElectroXplore. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/benefits"
              className="hover:text-foreground transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Responsibilities
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
