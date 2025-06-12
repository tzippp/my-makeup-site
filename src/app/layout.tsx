// src/app/layout.tsx
import "./styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Red Carpet Luxury Spa",
  description: "Permanent Makeup, Spray Tanning, Fine Line Tattoos & More in Rockland County, NY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        <header className="border-b shadow-sm sticky top-0 z-50 bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold tracking-wide">
              Red Carpet Luxury Spa
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-100 text-sm text-center py-6 mt-12 border-t">
          <p>© {new Date().getFullYear()} Red Carpet Luxury Spa. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

// MobileMenu component (can be moved to a separate file if preferred)
function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
          <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </div>
  );
}