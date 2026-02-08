export default function CTA() {
  return (
    <section className="
      bg-[#7c7d4b]
      text-white
      min-h-[620px]
      flex items-center justify-center
      text-center
      px-6
    ">
      <div className="max-w-3xl">

        {/* Headline */}
        <h2 className="
          font-display
          text-4xl md:text-5xl lg:text-6xl
          mb-8
          tracking-tight
        ">
          Get started today.
        </h2>

        {/* Body Text */}
        <p className="
          text-lg md:text-xl
          leading-relaxed
          opacity-90
          mb-12
        ">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to
          starting this therapeutic journey with you.
        </p>

        {/* Button */}
        <button className="
          border border-white
          px-10 py-4
          text-sm tracking-[0.18em] uppercase
          transition-all duration-300
          hover:bg-white hover:text-[#7c7d4b]
        ">
          GET IN TOUCH →
        </button>

      </div>
    </section>
  );
}
