import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "My Site",
  description: "A beautiful website showcasing services",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 My Site. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}