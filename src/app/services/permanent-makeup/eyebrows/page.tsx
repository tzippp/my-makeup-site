// app/service/eyebrows/page.tsx
import Head from 'next/head'
import Image from 'next/image'

export default function BrowsPage() {
  return (
    <>
      <Head>
        <title>Permanent Brows in Rockland County, NY | Red Carpet Luxury Spa</title>
        <meta
          name="description"
          content="Microshading & permanent brow artistry in Rockland County. Natural-looking brows in one session."
        />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-semibold mb-6">Permanent Brows in Rockland County, NY</h1>
        <Image
          src="/assets/brows-hero.jpg"
          alt="Perfectly shaped permanent brows"
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
        <p className="mb-4">
          Achieve flawlessly natural brows with our signature microshading technique.
          Your custom pigment match and in-depth consultation are included.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Personalized brow mapping & design</li>
          <li>Comfort-focused microshading</li>
          <li>Touch-up session within 6–8 weeks</li>
          <li>After-care guide & support</li>
        </ul>
        <a
          href="/book"
          className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition"
        >
          Book Your Brows Session
        </a>
      </main>
    </>
  )
}