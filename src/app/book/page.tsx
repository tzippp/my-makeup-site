export default function BookingPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-center bg-[#F5E8DC]">
      <h1 className="text-4xl font-bold mb-6 text-[#C8102E]">Book Your Appointment</h1>

      <p className="text-[#333333] mb-8">
        Secure your spot for brows, lips, SMP, spray tanning, and more. Choose your service, select a time, and get ready to wake up Red Carpet Ready.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-[#D4AF37]">
        <iframe
          src="YOUR_BOOKING_LINK_HERE"
          className="w-full h-[600px] border-none rounded-md"
          title="Booking Calendar"
        ></iframe>
      </div>

      <p className="text-[#333333] mt-6">
        Need help? Call us at <a href="tel:9142004121" className="text-[#C8102E] font-semibold">914-200-4121</a> or email <a href="mailto:redcarpet@redcarpetluxuryspa.com" className="text-[#C8102E] font-semibold">redcarpet@redcarpetluxuryspa.com</a>.
      </p>
    </section>
  );
}