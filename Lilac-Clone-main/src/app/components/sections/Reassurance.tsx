import Image from "next/image";

export default function Reassurance() {
  return (
    <section className="grid lg:grid-cols-2 xl:grid-cols-[45%_55%] 2xl:grid-cols-[50%_50%]">

      {/* LEFT IMAGE */}
      <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[920px] order-2 lg:order-1">
        <Image
          src="/calm.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="bg-[#d8d3df] flex flex-col justify-between order-1 lg:order-2">

        {/* MAIN TEXT AREA */}
        <div className="px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-24">

          <h2 className="
            font-display
            text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl
            leading-tight
            mb-6 sm:mb-8 lg:mb-10
            text-foreground
          ">
            You don't have to do this
            <br className="hidden sm:block" />
            all <em className="italic">alone.</em>
          </h2>

          <p className="text-muted mb-6">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="
            list-disc
            pl-6
            space-y-3
            text-base
            text-foreground
          ">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="text-muted mt-8">
            With empathy and guidance, we’ll work together to navigate
            the challenges life throws your way.
          </p>
        </div>

        {/* BOTTOM CTA STRIP */}
        <button className="
          border-t border-neutral-500
          py-6
          text-center
          text-sm
          tracking-wider
          w-full
          bg-transparent
          text-foreground
          hover:bg-foreground/5
          transition-all
          duration-300
          cursor-pointer
        ">
          WORK WITH ME →
        </button>

      </div>

    </section>
  );
}
