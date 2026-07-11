import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yah Bamba | Architecte de Solutions Digitales & Financières",
  description: "Expert fullstack spécialisé en systèmes web, mobile, intelligence artificielle et fintech. Je conçois des solutions digitales sur mesure qui transforment des idées en entreprises performantes.",
  keywords: ["Yah Bamba", "Développeur Web", "Développeur Mobile", "Fintech", "IA", "Côte d'Ivoire", "Freelance", "Fullstack", "React", "Next.js", "Flutter", "Portfolio"],
  authors: [{ name: "Yah Bamba" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Yah Bamba | Architecte de Solutions Digitales & Financières",
    description: "Expert fullstack spécialisé en systèmes web, mobile, IA et fintech. Solutions sur mesure pour entreprises et startups.",
    url: "https://yahbamba.com",
    siteName: "Yah Bamba Portfolio",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yah Bamba - Architecte de Solutions Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yah Bamba | Architecte de Solutions Digitales",
    description: "Expert fullstack spécialisé en systèmes web, mobile, IA et fintech.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0f] text-white overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
