import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Terms & Conditions — ElectroXplore",
  description: "Terms and Conditions for using ElectroXplore research and training services.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the ElectroXplore platform, website, research groups, or training programs, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, you may not access or use our services. These terms apply to all visitors, members, course enrollees, and any other users of ElectroXplore.`,
  },
  {
    title: "2. About ElectroXplore",
    body: `ElectroXplore is an engineering research organization and training platform focused on fields including Electrical & Electronic Engineering (EEE), Computer Science & Engineering (CSE), Electronics & Telecommunication Engineering (ETE), Computer & Communication Engineering (CCE), and related disciplines. We operate membership-based research groups and structured training programs.`,
  },
  {
    title: "3. Membership & Research Groups",
    body: `Research group membership is currently offered free of charge. ElectroXplore reserves the right to introduce paid tiers in the future with advance notice to existing members. Members are expected to participate in good faith, respect fellow members, and contribute constructively to research activities. ElectroXplore may revoke membership for violation of these terms or community standards at its sole discretion.`,
  },
  {
    title: "4. Training Programs & Courses",
    body: `Some training courses are offered free of charge while others require a course fee. All fees, where applicable, are clearly stated before enrollment. Course fees are non-refundable once access has been granted unless the course is cancelled by ElectroXplore. Enrollment in a course grants you a personal, non-transferable license to access the course content for the duration specified.`,
  },
  {
    title: "5. Intellectual Property",
    body: `All content published on ElectroXplore — including course materials, research summaries, articles, graphics, and the ElectroXplore name and logo — is the property of ElectroXplore or its content contributors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission. Members retain ownership of original research they contribute but grant ElectroXplore a non-exclusive license to publish and share it within the platform.`,
  },
  {
    title: "6. User Conduct",
    body: `Users agree not to: post or share plagiarized, false, or harmful content; harass, threaten, or discriminate against other members; attempt to gain unauthorized access to platform systems; use the platform for commercial solicitation without permission; or violate any applicable laws or regulations. ElectroXplore reserves the right to remove content and suspend accounts that violate these standards.`,
  },
  {
    title: "7. Privacy",
    body: `Your use of ElectroXplore is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of information as described in our Privacy Policy.`,
  },
  {
    title: "8. Disclaimers & Limitation of Liability",
    body: `ElectroXplore provides its platform and content on an "as is" basis without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or suitability of any research content or course material. To the maximum extent permitted by law, ElectroXplore shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the platform.`,
  },
  {
    title: "9. Changes to Terms",
    body: `ElectroXplore reserves the right to modify these Terms at any time. Significant changes will be communicated to registered members via email or platform notification. Continued use of the platform after changes are posted constitutes your acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    title: "10. Contact",
    body: `For questions about these Terms and Conditions, please contact us at: hello@electroxplore.org or write to us at ElectroXplore, Dhaka, Bangladesh.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Legal</p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-foreground text-balance">
            Terms &<br />
            <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-2xl">
            Please read these terms carefully before using ElectroXplore. They govern your use of our research and training services.
          </p>
          <p className="text-muted-foreground text-xs mt-4 uppercase tracking-wider">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((sec, i) => (
            <div key={i} className="space-y-3">
              <h2 className="font-heading font-bold text-foreground text-xl">{sec.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{sec.body}</p>
              {i < sections.length - 1 && <Separator className="bg-border mt-6" />}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
