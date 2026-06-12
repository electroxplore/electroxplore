import { Mail, Phone, MapPin, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BenefitsDrawer } from "./benefits";
import { TermsAndConditionsDrawer } from "./ui/terms";
import { RecruitmentPolicyDrawer } from "./policy";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Research Groups", href: "#research" },
  { label: "Training Courses", href: "#training" },
  { label: "Our Team", href: "#team" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/electroxplore/",
  },
  // { icon: Globe, label: "LinkedIn", href: "#" },
  // { icon: GitBranch, label: "GitHub", href: "#" },
  // { icon: Play, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Brand + Contact */}
          <div className="space-y-5">
            <Link href="#home">
        <Image src="/icon.png" alt="ElectroXplore Logo" width={32} height={32} className="w-20" />
          </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Engineering research and training for the next generation of
              innovators.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Chittagong, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <Link
                  href="tel:+8801700000000"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  +880 1788-817293
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <Link
                  href="mailto:electroexplore.lab@gmail.com"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  electroexplore.lab@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-foreground font-heading font-bold text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-foreground font-heading font-bold text-xs uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  target="_blank"
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <h4 className="text-foreground font-heading font-bold text-xs uppercase tracking-widest">
                Research Fields
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Robotics",
                  "Embedded Systems",
                  "IOT",
                  "Signal Processing",
                  "Renewable Energy",
                  "AI/ML",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} ElectroXplore. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <BenefitsDrawer />
            <TermsAndConditionsDrawer />
            <RecruitmentPolicyDrawer />
          </div>
        </div>
      </div>
    </footer>
  );
}
