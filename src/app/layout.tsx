import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
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
  title: "FeelFreeVPN",
  description: "Fast and secure VPN service",
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
        <Header />
        {children}
        <footer className="pt-16 pb-8">
        <div className="w-full flex justify-center gap-4 md:gap-8 text-xl">
          <span>Terms of use</span>
          <span>•</span>
          <span>Privacy policy</span>
          <span>•</span>
          <span>Contacts</span>
        </div>
      </footer>
      </body>
    </html>
  );
}
