import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center pt-16 sm:pt-20 lg:pt-24 xl:pt-28 min-h-screen">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px] 2xl:max-w-[1920px]">
        <div className="grid lg:grid-cols-[45%_55%] xl:grid-cols-[40%_60%] 2xl:grid-cols-[42%_58%] items-center gap-8 lg:gap-12 xl:gap-16">

          {/* LEFT — Curved Cutout Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">

            <div
              className="
                relative
                w-[280px] h-[420px]
                sm:w-[320px] sm:h-[480px]
                md:w-[380px] md:h-[570px]
                lg:w-[420px] lg:h-[630px]
                xl:w-[500px] xl:h-[750px]
                2xl:w-[560px] 2xl:h-[840px]
                overflow-hidden
              "
              style={{
                borderTopLeftRadius: "50% 30%",
                borderTopRightRadius: "50% 30%",
              }}
            >
              <Image
                src="/hero.webp"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

          {/* RIGHT — Text */}
          <div className="flex items-center order-1 lg:order-2">

            <div className="w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl">

              <h1 className="
                font-display
                text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl
                leading-[0.9]
                tracking-[-0.02em]
                text-foreground
                mb-4 sm:mb-6 lg:mb-8
                text-center lg:text-left
              ">
                Live your life
                <br />
                in full bloom
              </h1>

              <p className="
                font-body
                text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl
                text-muted
                mb-8 sm:mb-10 lg:mb-12
                text-center lg:text-left
                leading-relaxed
              ">
                Therapy for Adults in Minneapolis, MN.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="
                  border border-foreground
                  px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6
                  text-xs sm:text-sm lg:text-base xl:text-lg
                  tracking-[0.2em]
                  uppercase
                  text-foreground
                  hover:bg-foreground
                  hover:text-background
                  transition-all duration-300
                  font-medium
                ">
                  CONNECT WITH ME →
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
