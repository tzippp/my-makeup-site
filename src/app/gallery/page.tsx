export default function GalleryPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>

      <p className="text-gray-700 mb-6">
        Explore real results from our clients—brows, lips, SMP, spray tans, and more. Every image reflects our commitment to precision, artistry, and natural beauty.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Replace these with your actual image paths */}
        <img src="/assets/gallery/brows1.jpg" alt="Ombré Brows" className="rounded-lg shadow-md" />
        <img src="/assets/gallery/lips1.jpg" alt="Lip Blush" className="rounded-lg shadow-md" />
        <img src="/assets/gallery/smp1.jpg" alt="Scalp Micropigmentation" className="rounded-lg shadow-md" />
        <img src="/assets/gallery/tan1.jpg" alt="Spray Tan Result" className="rounded-lg shadow-md" />
        <img src="/assets/gallery/eyeliner1.jpg" alt="Permanent Eyeliner" className="rounded-lg shadow-md" />
        <img src="/assets/gallery/fine-line1.jpg" alt="Fine Line Tattoo" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
}