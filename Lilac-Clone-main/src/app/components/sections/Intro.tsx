import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-[#e9e4dc]">

      {/* TOP DIVIDER */}
      <div className="border-t border-[#cfc8be]" />

      <div className="grid lg:grid-cols-2 xl:grid-cols-[55%_45%] 2xl:grid-cols-[60%_40%]">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-between">
          
          {/* MAIN TEXT AREA */}
          <div className="px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-24 flex-1 flex items-center justify-center">
            <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">

              {/* BIG HEADING */}
              <h2 className="
                font-display
                text-3xl sm:text-4xl md:text-5xl
                lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl
                leading-[1.05]
                text-foreground
                mb-6 sm:mb-8 lg:mb-10
                text-center lg:text-left
              ">
                Live a fulfilling life.
              </h2>

              {/* BODY */}
              <p className="
                text-base sm:text-lg
                lg:text-xl xl:text-2xl 2xl:text-3xl
                text-muted
                leading-relaxed
                mb-4 sm:mb-6 lg:mb-8
                text-center lg:text-left
              ">
                Life can be challenging — especially when you&apos;re trying to
                balance your personal and professional life.
              </p>

              <p className="
                text-base sm:text-lg
                lg:text-xl xl:text-2xl 2xl:text-3xl
                text-muted
                leading-relaxed
                text-center lg:text-left
              ">
                It&apos;s easy to feel like you&apos;re alone in facing these challenges,
                but I want you to know that I&apos;m here to help.
              </p>

            </div>
          </div>

          {/* BOTTOM CTA STRIP */}
          <button className="
            border-t border-[#cfc8be]
            py-4 sm:py-6 lg:py-8
            text-center
            font-body
            text-xs sm:text-sm lg:text-base xl:text-lg
            tracking-[0.25em]
            uppercase
            text-foreground
            bg-transparent
            cursor-pointer
            transition-all
            duration-300
            hover:text-white
            hover:bg-green-900
            w-full
            font-medium
          ">
            GET IN TOUCH →
          </button>

        </div>


        {/* RIGHT IMAGE */}
        <div className="relative order-first lg:order-last">

          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px] xl:h-[820px] 2xl:h-[920px]">

            <Image
              src="/intro.webp"
              alt=""
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
