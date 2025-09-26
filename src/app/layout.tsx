import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniPlace - Your Gateway to Smarter Placements",
  description:
    "Simplify your campus placement journey with UniPlace — manage company drives, track your applications, get notified, and prepare smartly for career opportunities.",
  metadataBase: new URL("https://uniplace.vercel.app"),
  openGraph: {
    title: "UniPlace - Smarter Campus Placements",
    description:
      "A centralized platform for students, companies, and placement cells. Automate and streamline the end-to-end placement process.",
    url: "https://uniplace.vercel.app",
    siteName: "UniPlace",
    locale: "en_IN",
    type: "website",
  },
  keywords: [
    "UniPlace",
    "uniplace",
    "uni place",
    "Campus Placement System",
    "Placement Dashboard",
    "College ERP Integration",
    "Galgotias University",
    "Jobs",
    "Internships",
    "Student Portal",
  ],
  authors: [{ name: "Vansh", url: "https://uniplace.vercel.app" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Toaster position="top-right" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
