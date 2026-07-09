import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy — ElectroXplore",
  description: "Privacy Policy for ElectroXplore research and training platform.",
}

const sections = [
  {
    title: "1. Introduction",
    body: `ElectroXplore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our research and training services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the platform.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information you voluntarily provide when you register, enroll in a course, or apply for research group membership — including your name, email address, educational background, and area of engineering interest. We also automatically collect certain technical data when you visit our platform, such as your IP address, browser type, device identifiers, pages visited, and time spent on pages. We use cookies and similar tracking technologies to improve your experience.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to: create and manage your account; process course enrollments and research group applications; communicate with you about your membership, courses, and platform updates; send newsletters or announcements (with your consent); improve our platform and content based on usage patterns; respond to your inquiries and provide support; and comply with legal obligations.`,
  },
  {
    title: "4. Sharing of Your Information",
    body: `We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating the platform (e.g., hosting, email delivery, payment processing) under strict confidentiality agreements. We may disclose your information if required by law, court order, or to protect the rights and safety of ElectroXplore and its members. In the event of a merger or acquisition, your information may be transferred as part of that transaction.`,
  },
  {
    title: "5. Cookies & Tracking",
    body: `We use cookies and similar technologies to maintain session state, remember preferences, analyze platform usage, and improve performance. You can control cookie settings through your browser. Disabling cookies may affect certain features of the platform. We do not use cookies to serve third-party advertisements.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain your personal information for as long as your account is active or as needed to provide services. If you close your account or request deletion, we will delete or anonymize your data within 30 days, except where retention is required by law or legitimate business necessity (e.g., financial records for a legally required period).`,
  },
  {
    title: "7. Security",
    body: `We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include encrypted data transmission (HTTPS), access controls, and regular security reviews. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "8. Your Rights",
    body: `Depending on your jurisdiction, you may have the right to: access the personal information we hold about you; request correction of inaccurate data; request deletion of your data; withdraw consent for certain processing activities; and lodge a complaint with a data protection authority. To exercise these rights, contact us at hello@electroxplore.org.`,
  },
  {
    title: "9. Children's Privacy",
    body: `ElectroXplore is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete that information promptly.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above and notify registered users via email of significant changes. Your continued use of the platform after any change constitutes your acceptance of the updated policy.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us: Email: hello@electroxplore.org | Address: ElectroXplore, Dhaka, Bangladesh | Phone: +880 1700-000000`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
  

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Legal</p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-foreground text-balance">
            Privacy<br />
            <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-2xl">
            We take your privacy seriously. This policy explains what data we collect, how we use it, and your rights as a member of ElectroXplore.
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
