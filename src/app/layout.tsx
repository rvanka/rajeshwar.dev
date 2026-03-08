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
    "Staff at Google working on databases, distributed systems, and AI/data infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">

          {/* Navbar aligned with page content */}
          <div className="border-b border-white/10 sticky top-0 z-50 bg-zinc-950/60 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-6">
              <Navbar />
            </div>
          </div>

          {/* Page content */}
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-6">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 mt-16">
            <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
              <div>© {new Date().getFullYear()} Rajeshwar Vanka</div>

              <div className="flex gap-6 mt-3 md:mt-0">
                <a
                  href="mailto:rajeshwar.vanka@gmail.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>

                <a
                  href="https://github.com/rvanka"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rajeshwarvanka/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>

                <span className="text-zinc-600">rajeshwar.dev</span>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}