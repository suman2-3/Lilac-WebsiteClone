export default function Footer() {
  return (
    <footer className="bg-[#f7f5f1] text-foreground">

      {/* TOP AREA */}
      <div className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="space-y-8">

          <h3 className="font-display text-3xl">
            Lilac Template
          </h3>

          <div className="space-y-2 text-lg">
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
          </div>

          <div className="space-y-2 text-lg underline underline-offset-4">
            <p>email@example.com</p>
            <p>(555) 555-5555</p>
          </div>

        </div>

        {/* MIDDLE */}
        <div className="space-y-6">
          <h4 className="font-display text-2xl">Hours</h4>

          <div className="text-lg space-y-1">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 lg:text-right">

          <h4 className="font-display text-2xl">Find</h4>

          <div className="flex flex-col gap-2 text-lg underline underline-offset-4">
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>

        </div>

      </div>

      {/* SEPARATOR STRIP */}
      <div className="bg-[#e4e0da] py-6">

        <div className="max-w-[1000px] mx-auto px-4 text-center space-y-4">

          {/* LEGAL LINKS */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm underline underline-offset-4">
            <a href="#">Privacy & Cookies Policy</a>
            <a href="#">Good Faith Estimate</a>
            <a href="#">Website Terms & Conditions</a>
            <a href="#">Disclaimer</a>
          </div>

          {/* CREDIT */}
          <p className="text-sm">
            Website Template Credits:{" "}
            <span className="underline underline-offset-4">
              Go Bloom Creative
            </span>
          </p>

          {/* COPYRIGHT  */}
          <p className="text-sm">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>

        </div>

      </div>
    </footer>
  );
}
