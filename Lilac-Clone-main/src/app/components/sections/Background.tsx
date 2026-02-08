"use client";

import { SetStateAction, useState } from "react";

export default function Background() {
  const items = [
    {
      title: "Education",
      content:
        "Master of Clinical Psychology — University Name\nB.Sc. Behavioral Sciences — College Name",
    },
    {
      title: "Licensure",
      content:
        "Licensed Professional Counselor — State Board\nRegistration #XXXXX",
    },
    {
      title: "Certifications",
      content:
        "CBT Certification\nTrauma-Informed Care Training\nMindfulness Practitioner",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-[#e4e0da] py-32">

      <div className="max-w-[1100px] mx-auto px-8">

        {/* TITLE */}
        <h2 className="font-display text-4xl lg:text-5xl text-center text-foreground mb-16">
          My Professional Background
        </h2>

        {/* ACCORDION */}
        <div className="max-w-[750px] mx-auto border-t border-foreground/40">

          {items.map((item, i) => (
            <div key={i} className="border-b border-foreground/40">

              {/* HEADER */}
              <button
                onClick={() => toggle(i)}
                className="
                  w-full
                  flex items-center justify-between
                  py-4
                  text-left
                  text-xl lg:text-2xl
                  text-foreground
                  cursor-pointer
                "
              >
                {item.title}

                <span
                  className={`
                    text-3xl transition-transform duration-300
                    ${open === i ? "rotate-45" : ""}
                  `}
                >
                  +
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${open === i ? "max-h-96 pb-6" : "max-h-0"}
                `}
              >
                <p className="text-muted text-lg whitespace-pre-line pr-8">
                  {item.content}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
