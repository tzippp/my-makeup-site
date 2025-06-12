import Link from "next/link";

export default function PermanentMakeupOverview() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Permanent Makeup</h1>

      <p className="text-gray-700 mb-6">
        Enhance your natural beauty with long-lasting, low-maintenance results. Our permanent makeup services are designed to simplify your routine while delivering flawless, confidence-boosting results.
      </p>

      <ul className="space-y-6">
        <li>
          <Link href="/services/permanent-makeup/eyebrows" className="text-xl text-blue-700 hover:underline">
            Eyebrows
          </Link>
          <p className="text-gray-600">
            From ombré brows to microshading, we create natural-looking brows that frame your face beautifully.
          </p>
        </li>

        <li>
          <Link href="/services/permanent-makeup/eyeliner" className="text-xl text-blue-700 hover:underline">
            Eyeliner
          </Link>
          <p className="text-gray-600">
            Define your eyes with precision—choose from subtle lash enhancement to bold liner styles.
          </p>
        </li>

        <li>
          <Link href="/services/permanent-makeup/lips" className="text-xl text-blue-700 hover:underline">
            Lips
          </Link>
          <p className="text-gray-600">
            Add color, shape, and symmetry with lip blush or full lip tinting for a youthful, polished look.
          </p>
        </li>

        <li>
          <Link href="/services/permanent-makeup/removal" className="text-xl text-blue-700 hover:underline">
            Removal
          </Link>
          <p className="text-gray-600">
            Safe, effective pigment lightening and removal for previous work or corrections.
          </p>
        </li>
      </ul>
    </section>
  );
}