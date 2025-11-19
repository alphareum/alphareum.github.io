import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alvin | Professional Researcher",
  description: "Professional researcher specializing in financial markets and technology. Building analytical solutions that bridge technical gaps into practical applications.",
  keywords: ["researcher", "financial markets", "technology", "data analysis", "content strategy"],
  authors: [{ name: "Alvin Wijayanto" }],
  creator: "Alvin Wijayanto",
  openGraph: {
    title: "Alvin | Professional Researcher",
    description: "Professional researcher specializing in financial markets and technology",
    url: "https://alphareum.github.io",
    siteName: "Alvin Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin | Professional Researcher",
    description: "Professional researcher specializing in financial markets and technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
