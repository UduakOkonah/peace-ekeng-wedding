import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import young01 from "../assets/young-01.jpg";
import young02 from "../assets/young-02.jpg";
import young03 from "../assets/young-03.jpg";
import court01 from "../assets/court-01.jpg";
import court02 from "../assets/court-02.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] px-6 py-28 sm:py-36">

      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A227] to-transparent" />

      <div className="mx-auto max-w-6xl">

        {/* SECTION INTRO */}
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <Heart
            size={24}
            strokeWidth={1.1}
            className="mx-auto text-[#C9A227]"
          />

          <p className="mt-7 text-[10px] uppercase tracking-[0.5em] text-[#C9A227]">
            A glimpse into their journey
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light text-[#0F5132] sm:text-5xl md:text-6xl">
            Our Story
          </h2>

          <div className="mx-auto mt-7 h-px w-16 bg-[#C9A227]" />

          <p className="mt-7 text-sm leading-8 text-[#0F5132]/60 sm:text-base">
            Before the celebration, there was a journey.
            A collection of memories, milestones and moments
            that brought Peace and Ekeng to this beautiful chapter.
          </p>
        </motion.div>

        {/* YOUNGER YEARS */}
        <div className="mt-24">

          <motion.div
            {...fadeUp}
            className="mb-10 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A227]">
              Chapter One
            </p>

            <h3 className="mt-4 font-serif text-3xl font-light text-[#0F5132] sm:text-4xl">
              The Early Days
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#0F5132]/50">
              The memories that came before the milestones.
            </p>
          </motion.div>

          {/* Main old photo */}
          <motion.div
            {...fadeUp}
            className="group relative mx-auto max-w-4xl overflow-hidden"
          >
            <div className="border border-[#C9A227]/30 bg-[#0F5132] p-2">
              <div className="relative overflow-hidden">
                <img
                  src={young01}
                  alt="Peace and Ekeng in their younger years"
                  className="h-[430px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[560px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#083B27]/45 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Two smaller photos */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">

            <motion.div
              {...fadeLeft}
              className="group overflow-hidden border border-[#0F5132]/10 bg-[#E8F0EB] p-2"
            >
              <div className="overflow-hidden">
                <img
                  src={young02}
                  alt="Peace and Ekeng"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[430px]"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeRight}
              className="group overflow-hidden border border-[#0F5132]/10 bg-[#E8F0EB] p-2"
            >
              <div className="overflow-hidden">
                <img
                  src={young03}
                  alt="Peace and Ekeng"
                  className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[430px]"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* JOURNEY DIVIDER */}
        <motion.div
          {...fadeUp}
          className="my-24 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-[#C9A227]/40" />
          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#C9A227]"
          />
          <span className="h-px w-16 bg-[#C9A227]/40" />
        </motion.div>

        {/* COURT MARRIAGE */}
        <div>

          <motion.div
            {...fadeUp}
            className="mb-10 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A227]">
              Chapter Two
            </p>

            <h3 className="mt-4 font-serif text-3xl font-light text-[#0F5132] sm:text-4xl">
              A New Chapter
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#0F5132]/50">
              A beautiful milestone in their journey together.
            </p>
          </motion.div>

          {/* Court marriage gallery */}
          <div className="grid gap-5 md:grid-cols-5">

            <motion.div
              {...fadeLeft}
              className="group overflow-hidden border border-[#C9A227]/30 bg-[#0F5132] p-2 md:col-span-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={court01}
                  alt="Peace and Ekeng at their court marriage"
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[520px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#083B27]/35 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              {...fadeRight}
              className="group overflow-hidden border border-[#0F5132]/10 bg-[#E8F0EB] p-2 md:col-span-2"
            >
              <div className="overflow-hidden">
                <img
                  src={court02}
                  alt="Peace and Ekeng at their court marriage"
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[520px]"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* FINAL STORY */}
        <motion.div
          {...fadeUp}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/50">
            <Heart
              size={20}
              strokeWidth={1}
              className="text-[#C9A227]"
            />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.45em] text-[#C9A227]">
            And now
          </p>

          <h3 className="mt-5 font-serif text-4xl font-light leading-tight text-[#0F5132] sm:text-5xl">
            The story continues...
          </h3>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#0F5132]/60 sm:text-base">
            From the memories of yesterday to the beautiful
            moments of today, Peace and Ekeng look forward
            to celebrating the next chapter surrounded by
            family and loved ones.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]/50" />
            <span className="font-serif text-lg italic text-[#0F5132]/50">
              PENG 2026
            </span>
            <span className="h-px w-10 bg-[#C9A227]/50" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}