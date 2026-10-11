import Footer from "@/components/footer";
import LayoutProvider from "@/components/layout-provider";
import Navbar from "@/components/navbar";
import SpotlightPreview from "@/components/spotlight-demo";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { getCurrentUser } from "@/lib/jwt";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "ElectroXplore — Engineering Research & Training",
//   description:
//     "ElectroXplore is a research organization focused on engineering fields including EEE, CSE, ETE, and CCE. Join our membership-based research groups and training programs.",
//   generator: "FKR",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-touch-icon.png",
//   },
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://electroxplore.com"),

  title: {
    default: "ElectroXplore — Engineering Research & Training",
    template: "%s | ElectroXplore",
  },

  description:
    "ElectroXplore is an engineering research and training organization focused on EEE, CSE, ETE, and CCE. Explore research opportunities, join research groups, and develop practical engineering skills.",

  applicationName: "ElectroXplore",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "ElectroXplore",
    "engineering research",
    "engineering training",
    "EEE",
    "CSE",
    "ETE",
    "CCE",
    "robotics",
    "embedded systems",
    "IoT",
    "computer science",
    "research groups",
    "engineering education",
    "Bangladesh",
  ],

  authors: [
    {
      name: "ElectroXplore",
      url: "https://electroxplore.com",
    },
  ],

  creator: "ElectroXplore",
  publisher: "ElectroXplore",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    other: [
      {
        rel: "mask-icon",
        url: "/logo-b.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://electroxplore.com/",
    siteName: "ElectroXplore",
    title: "ElectroXplore — Engineering Research & Training",
    description:
      "Discover engineering research, join collaborative research groups, and explore practical training opportunities with ElectroXplore.",
    images: [
      {
        url: "https://electroxplore.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ElectroXplore — Engineering Research & Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ElectroXplore — Engineering Research & Training",
    description:
      "Explore engineering research, collaborative research groups, and practical training opportunities with ElectroXplore.",
    images: ["https://electroxplore.com/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "education",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-background`}
    >
      {/* Removed bg-white to protect forced dark-mode theme structure */}
      <body className="relative font-sans antialiased bg-background text-foreground">
        <LayoutProvider>
          <SpotlightPreview className="absolute top-0 left-0" />
          <ThemeProvider>
            <Navbar user={user} />
            <div className="md:py-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
          {process.env.NODE_ENV === "production" && <Analytics />}
          <SpeedInsights />
          <Toaster richColors />
        </LayoutProvider>
      </body>
    </html>
  );
}
