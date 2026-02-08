"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    q: "Do you take insurance?",
    a: "Answer placeholder text goes here explaining the details."
  },
  {
    q: "What are your rates?",
    a: "Answer placeholder text goes here explaining the details."
  },
  {
    q: "Do you have any openings?",
    a: "Answer placeholder text goes here explaining the details."
  }
];

export default function FAQ() {

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i:number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-[#f7f5f1] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[920px] py-12 sm:py-16 lg:py-20 xl:py-30 flex items-center">

      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto grid lg:grid-cols-2 xl:grid-cols-[45%_55%] gap-12 sm:gap-16 lg:gap-20 xl:gap-24 px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full">

        {/* LEFT IMAGE */}
        <div className="flex justify-center items-center order-2 lg:order-1">
          <div className="
            relative
            w-[280px] h-[400px]
            sm:w-[320px] sm:h-[460px]
            md:w-[380px] md:h-[540px]
            lg:w-[420px] lg:h-[600px]
            xl:w-[500px] xl:h-[700px]
            2xl:w-[580px] 2xl:h-[820px]
            overflow-hidden
            rounded-t-[140px] sm:rounded-t-[160px] md:rounded-t-[200px] lg:rounded-t-[240px] xl:rounded-t-[280px]
          ">
            <Image
              src="/faq.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center order-1 lg:order-2">

          <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-12 sm:mb-14 lg:mb-16 xl:mb-18 text-foreground text-center lg:text-left">
            FAQs
          </h2>


          <div className="border-t border-foreground/40">

            {items.map((item, i) => {

              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className="
                    border-b border-foreground/40
                    py-6 sm:py-8 lg:py-10
                    group
                  "
                >

                  {/* CLICK ROW */}
                  <button
                    onClick={()=>toggle(i)}
                    className="
                      w-full flex items-center gap-4 sm:gap-6 text-left
                      text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                      cursor-pointer
                      text-foreground
                      transition-colors duration-200
                      hover:text-foreground/70
                    "
                  >

                    {/* PLUS ICON */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none flex-shrink-0"
                    >
                      +
                    </motion.span>

                    <span className="leading-tight">{item.q}</span>
                  </button>


                  {/* ANIMATED ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22,1,0.36,1]   // premium easing
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: .25 }}
                          className="
                            mt-4 sm:mt-6 ml-[40px] sm:ml-[52px] lg:ml-[64px]
                            text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
                            text-muted
                            leading-relaxed
                          "
                        >
                          {item.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
