import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#e9e4dd] min-h-[920px] flex items-center ">

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 px-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl mb-8">
            Hi, I’m Lilac.
          </h2>

          <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-xl text-muted">
            I’m committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we’ll work together to navigate the challenges life
            throws your way.
          </p>

          <button className="mt-10 border border-foreground px-8 py-4 tracking-widest uppercase text-sm">
            LET&apos;S CHAT →
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">

          {/* Main */}
          <div className="relative w-[520px] h-[700px] overflow-hidden rounded-t-full">
            <Image src="/about-main.webp" alt="" fill className="object-cover"/>
          </div>

          {/* Circle Overlay */}
          <div className="absolute -bottom-16 -right-16 w-[360px] h-[360px] rounded-full overflow-hidden border-0 border-[#e9e4dd]">
            <Image src="/about-circle.webp" alt="" fill className="object-cover"/>
          </div>

        </div>

      </div>
    </section>
  );
}
