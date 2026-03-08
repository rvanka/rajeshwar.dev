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
    "Distributed systems, infrastructure, self-hosted platforms, and practical AI projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-zinc-100 antialiased`}
      >
        <div className="min-h-screen">
          <div className="mx-auto max-w-6xl px-6">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}