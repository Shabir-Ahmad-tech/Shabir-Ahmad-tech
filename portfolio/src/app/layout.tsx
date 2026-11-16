import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shabir Ahmad | AI & Computer Engineering Student",
  description:
    "Portfolio of Shabir Ahmad — First-year AI & Computer Engineering student at Tongmyong University. Low-level systems in C, neural networks in PyTorch, and modern web engineering.",
  keywords: [
    "Shabir Ahmad",
    "Tongmyong University",
    "AI Engineer",
    "Computer Engineering",
    "PyTorch",
    "Machine Learning",
    "C Programming",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Shabir Ahmad" }],
  openGraph: {
    title: "Shabir Ahmad | AI & Computer Engineering Student",
    description:
      "Explore projects, technical capabilities, and systems engineering by Shabir Ahmad at Tongmyong University.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0f17] text-[#f8f8f2] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
