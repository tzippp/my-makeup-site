// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Red Carpet Luxury Spa</h1>
      <p className="text-gray-600 mb-10">
        in nanuet ny Your destination for expertly crafted permanent makeup, spray tanning, fine line tattoos, and scalp micropigmentation.
      </p>

      <div className="flex justify-center mb-10">
        <Image
          src="/assets/images/permanent_makeup/lip_blush_before_after.jpg"
          alt="Lip blush before and after"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto"
          priority
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/services" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          View Services
        </Link>
        <Link href="/gallery" className="border border-black px-6 py-3 rounded hover:bg-gray-100">
          See Gallery
        </Link>
      </div>
    </section>
  );
}