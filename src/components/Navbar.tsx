"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-[#C8102E]">
        Red Carpet Luxury Spa
      </Link>

      {/* Services Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-[#C8102E] text-white rounded-md"
        >
          Services ▼
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md">
            <Link href="/services/brows" className="block px-4 py-2 hover:bg-gray-100">Brows</Link>
            <Link href="/services/eyeliner" className="block px-4 py-2 hover:bg-gray-100">Eyeliner</Link>
            <Link href="/services/lips" className="block px-4 py-2 hover:bg-gray-100">Lips</Link>
            <Link href="/services/smp" className="block px-4 py-2 hover:bg-gray-100">Scalp Micropigmentation</Link>
            <Link href="/services/tanning" className="block px-4 py-2 hover:bg-gray-100">Spray Tanning</Link>
            <Link href="/services/tattoos" className="block px-4 py-2 hover:bg-gray-100">Fine Line Tattoos</Link>
            <Link href="/services/removal" className="block px-4 py-2 hover:bg-gray-100">Saline Tattoo Removal</Link>
            <Link href="/services/pmu" className="block px-4 py-2 hover:bg-gray-100">Permanent Makeup Overview</Link>
          </div>
        )}
      </div>

      {/* Booking Button */}
      <Link href="/book" className="px-4 py-2 bg-[#C8102E] text-white rounded-md">
        Book Now
      </Link>
    </nav>
  );
}