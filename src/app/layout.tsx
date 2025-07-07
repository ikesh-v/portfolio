import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ikesh Portfolio",
  description: "Ikesh Portfolio built using Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  return (
    <html lang="en" className ="">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <header className="row-start-1">
            <Header />
          </header>
          {children}
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <p>&copy; 2025 Ikesh V</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
