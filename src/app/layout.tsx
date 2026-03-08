import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "Rajeshwar Vanka",
  description:
    "Distributed systems, databases, AI/data infrastructure, and self-hosted systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-100 bg-[#0b0d10]`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_24%),linear-gradient(to_bottom,#0b0d10,#0f1115)]">
          <div className="mx-auto max-w-6xl px-6">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}