import Image from "next/image";

const cards = [
  {
    title: "Self-Esteem",
    text: "Building a strong sense of self-worth is key to living a fulfilled life. Let’s work together to bolster your self-esteem.",
    img: "/s1.webp",
  },
  {
    title: "Relationships",
    text: "Navigating relationships can be complex. I’m here to guide you through these complexities to help you form healthier connections.",
    img: "/s2.webp",
  },
  {
    title: "Burnout",
    text: "Feeling overwhelmed by your career is more common than you think. Together, we’ll identify strategies to manage and prevent burnout.",
    img: "/s3.webp",
  },
];

export default function Specialties() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32 2xl:py-40">
      {/* Title */}
      <h2
        className="
          font-display
          text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
          text-center
          mb-12 sm:mb-16 lg:mb-20 xl:mb-24
          text-foreground
          px-4
        "
      >
        My Specialties
      </h2>

      {/* Cards */}
      <div
        className="
          max-w-[1600px] 2xl:max-w-[1920px]
          mx-auto
          grid
          grid-cols-1 md:grid-cols-2 xl:grid-cols-3
          gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16
          px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16
        "
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="
              bg-[#e9e4dc]
              border-2 border-black
              p-6 sm:p-8 lg:p-10 xl:p-12
              flex flex-col
              justify-between
              min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px]
              hover:border-[#7c7d4b] transition-all duration-300
            "
          >
            {/* Text */}
            <div>
              <h3
                className="
                  font-display
                  text-xl sm:text-2xl lg:text-3xl xl:text-4xl
                  mb-4 sm:mb-6 lg:mb-8
                  text-foreground
                "
              >
                {c.title}
              </h3>

              <p
                className="
                  text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl
                  text-muted
                  leading-relaxed
                "
              >
                {c.text}
              </p>
            </div>

            {/* Image */}
            <div
              className="
                relative
                w-[200px] h-[200px]
                sm:w-[240px] sm:h-[240px]
                lg:w-[280px] lg:h-[280px]
                xl:w-[320px] xl:h-[320px]
                2xl:w-[360px] 2xl:h-[360px]
                mx-auto
                mt-8 lg:mt-12
                rounded-full
                overflow-hidden
              "
            >
              <Image src={c.img} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
