// import { Analytics } from "@vercel/analytics/next";
// import type { Metadata } from "next";
// import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Toaster } from "@/components/ui/sonner";
// import { getCurrentUser } from "@/lib/jwt";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import SpotlightPreview from "@/components/spotlight-demo";

// const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// const spaceGrotesk = Space_Grotesk({
//   variable: "--font-space-grotesk",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "ElectroXplore — Engineering Research & Training",
//   description:
//     "ElectroXplore is a research organization focused on engineering fields including EEE, CSE, ETE, and CCE. Join our membership-based research groups and training programs.",
//   generator: "v0.app",
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
//     apple: "/apple-icon.png",
//   },
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const user = await getCurrentUser();

//   return (
//     <html
//       lang="en"
//       className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} bg-background`}
//     >
//       <body className="relative font-sans antialiased dark:bg-black bg-white">
//         <SpotlightPreview className="absolute top-0 left-0" />
//         <ThemeProvider>
//           <Navbar user={user} />
//           <div className="md:py-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
//           <Footer/>
//         </ThemeProvider>
//         {process.env.NODE_ENV === "production" && <Analytics />}
//         <Analytics />
//         <SpeedInsights />
//         <Toaster richColors />
//       </body>
//     </html>
//   );
// }

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { getCurrentUser } from "@/lib/jwt";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SpotlightPreview from "@/components/spotlight-demo";
import LayoutProvider from "@/components/layout-provider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElectroXplore — Engineering Research & Training",
  description:
    "ElectroXplore is a research organization focused on engineering fields including EEE, CSE, ETE, and CCE. Join our membership-based research groups and training programs.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
