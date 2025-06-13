// app/page.tsx
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Red Carpet Luxury Spa – Rockland County’s #1 Permanent Makeup</title>
        <meta
          name="description"
          content="Effortless beauty with brows, eyeliner, lips & more at Red Carpet Luxury Spa in Nanuet, NY."
        />
      </Head>

      <header className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/assets/home-hero.jpg"
          alt="Red Carpet Luxury Spa hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
            Wake Up Red Carpet Ready
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 max-w-xl">
            Rockland County’s premier permanent makeup clinic for brows, eyeliner, lips & more.
          </p>
          <Link href="/book">
            <button className="bg-white text-black py-3 px-6 font-medium rounded hover:bg-gray-100 transition">
              Book Now
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/service/eyebrows">
              <a className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
                <Image
                  src="/assets/thumb-brows.jpg"
                  alt="Permanent Brows"
                  width={600}
                  height={400}
                  className="object-cover w-full h-40"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">Permanent Brows</h3>
                  <p className="text-sm text-gray-600">Microshading & nano brows.</p>
                </div>
              </a>
            </Link>
            <Link href="/service/eyeliner">
              <a className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
                <Image
                  src="/assets/thumb-eyeliner.jpg"
                  alt="Permanent Eyeliner"
                  width={600}
                  height={400}
                  className="object-cover w-full h-40"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">Permanent Eyeliner</h3>
                  <p className="text-sm text-gray-600">Smudge-proof, waterproof.</p>
                </div>
              </a>
            </Link>
            {/* …other thumbnails */}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-left">
            <li>Licensed Aesthetician & Certified Artist</li>
            <li>Premium pigments & gentle techniques</li>
            <li>Hundreds of 5-star reviews</li>
            <li>Personalized consultation & after-care</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 text-center text-gray-700">
        <p>© 2025 Red Carpet Luxury Spa • 197 Main St, Nanuet, NY • (914) 200-4121</p>
      </footer>
    </>
  )
}