import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import couple from "../assets/couple.jpg";
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
    <section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24 sm:px-6 sm:py-36">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A227] to-transparent" />

      <div className="pointer-events-none absolute -left-40 top-[30%] h-80 w-80 rounded-full bg-[#0F5132]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-[60%] h-80 w-80 rounded-full bg-[#C9A227]/[0.035] blur-3xl" />

      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <motion.div
          {...fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Heart
            size={24}
            strokeWidth={1.1}
            className="mx-auto text-[#C9A227]"
          />

          <p className="mt-7 text-[10px] uppercase tracking-[0.45em] text-[#C9A227] sm:tracking-[0.5em]">
            A glimpse into their journey
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light text-[#0F5132] sm:text-5xl md:text-6xl">
            Our Story
          </h2>

          <div className="mx-auto mt-7 h-px w-16 bg-[#C9A227]" />

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#0F5132]/60 sm:text-base">
            Some stories begin with grand gestures.
            Ours began quietly, unexpectedly, and in the most
            ordinary corner of the internet.
          </p>
        </motion.div>

        {/* =====================================================
            CHAPTER ONE
        ===================================================== */}

        <div className="mt-20 sm:mt-24">

          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A227] sm:tracking-[0.45em]">
              Chapter One
            </p>

            <h3 className="mt-4 font-serif text-3xl font-light text-[#0F5132] sm:text-4xl md:text-5xl">
              The Beginning
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#0F5132]/50">
              A friendship that began with a simple notification.
            </p>
          </motion.div>

          {/* =================================================
              OPENING STORY
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="mx-auto mt-12 max-w-3xl sm:mt-14"
          >
            <p className="font-serif text-2xl font-light leading-relaxed text-[#0F5132] sm:text-3xl">
              It wasn't written in the stars, and nobody would
              have tagged it as a PENG story.
            </p>

            <div className="mt-7 space-y-6 text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              <p>
                If anything, our beginnings were completely
                unspectacular, just a simple notification sliding
                onto a screen on a cold October evening in 2017.
                A random friend request from a stranger, floating
                in digital space, waiting to see if anyone would
                click accept.
              </p>

              <p>
                Then came{" "}
                <span className="font-medium text-[#0F5132]">
                  November 16, 2017
                </span>
                . Exactly 12:28 in the afternoon.
              </p>

              <p>
                That was the moment the silence broke and the first
                conversation started. Neither of us knew that a
                simple message at lunchtime on a random Thursday
                would spark something that completely altered the
                trajectory of our lives.
              </p>

              <p>
                We talked about everything and nothing; educational,
                religious, social and political perspectives, finding
                a rhythm so natural it felt like we'd been running
                in the same circles for years.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              PHOTO 1 — EARLY YEARS
              CONTAIN PREVENTS HEAD CROPPING
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="group relative mx-auto mt-14 max-w-4xl sm:mt-16"
          >
            <div className="border border-[#C9A227]/30 bg-[#0F5132] p-2 sm:p-3">
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#E8F0EB] sm:min-h-[520px]">

                <img
                  src={young01}
                  alt="Peace and Ekeng in their early years"
                  className="max-h-[600px] w-full object-contain transition duration-1000 group-hover:scale-[1.02]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#083B27]/25 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FIRST MEETING
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="mx-auto mt-14 max-w-3xl sm:mt-16"
          >
            <div className="mb-7 flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-[#C9A227]/50 sm:w-10" />

              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#C9A227] sm:text-[10px] sm:tracking-[0.3em]">
                January 28, 2018
              </span>

              <span className="h-px flex-1 bg-[#C9A227]/20" />
            </div>

            <p className="text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              Two months later, on January 28, 2018, we finally
              took the plunge and met in person. And had friends
              like Dr Edu and Mary Hilda crashing our first date.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              What followed was the chaos of real, undiluted
              friendship. It wasn't a seamless fairytale.
              It was loud, full of ridiculous laughter, petty
              arguments over who was right, overanalyzing tiny
              details, and making up over good food.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              We traded banter, tested each other's patience,
              and slowly built a foundation on the kind of honesty
              that only comes when you aren't trying to impress
              each other anymore.
            </p>

            <p className="mt-6 font-serif text-xl italic leading-relaxed text-[#0F5132]/75 sm:text-2xl">
              We were dynamic, stubborn, and completely hooked
              on each other's company.
            </p>
          </motion.div>

          {/* =================================================
              TWO EARLY PHOTOS
              PRESERVE FULL IMAGE
          ================================================= */}

          <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2">

            <motion.div
              {...fadeLeft}
              className="group border border-[#0F5132]/10 bg-[#E8F0EB] p-2"
            >
              <div className="flex min-h-[360px] items-center justify-center overflow-hidden bg-white sm:min-h-[430px]">
                <img
                  src={young02}
                  alt="Peace and Ekeng"
                  className="max-h-[520px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeRight}
              className="group border border-[#0F5132]/10 bg-[#E8F0EB] p-2"
            >
              <div className="flex min-h-[360px] items-center justify-center overflow-hidden bg-white sm:min-h-[430px]">
                <img
                  src={young03}
                  alt="Peace and Ekeng"
                  className="max-h-[520px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

          </div>

          {/* =================================================
              MAKING IT OFFICIAL
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="mx-auto mt-14 max-w-3xl sm:mt-16"
          >
            <div className="mb-7 flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-[#C9A227]/50 sm:w-10" />

              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-[#C9A227] sm:text-[10px] sm:tracking-[0.3em]">
                September 26, 2018
              </span>

              <span className="h-px flex-1 bg-[#C9A227]/20" />
            </div>

            <p className="text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              By September 26, 2018, the denial officially ended.
              We stopped pretending we were "just really good
              friends" and made it official.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              Stepping into dating meant trading friendship banter
              for something deeper, though the playful fights never
              actually stopped.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              We navigated the real world together, celebrating
              the big wins, surviving the long weeks, figuring out
              life's messy middle, and learning how to choose each
              other even on the days we drove each other up the wall.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            JOURNEY DIVIDER
        ===================================================== */}

        <motion.div
          {...fadeUp}
          className="my-24 flex items-center justify-center gap-4 sm:my-32"
        >
          <span className="h-px w-12 bg-[#C9A227]/40 sm:w-16" />

          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#C9A227]"
          />

          <span className="h-px w-12 bg-[#C9A227]/40 sm:w-16" />
        </motion.div>

        {/* =====================================================
            CHAPTER TWO
        ===================================================== */}

        <div>

          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A227] sm:tracking-[0.45em]">
              Chapter Two
            </p>

            <h3 className="mt-4 font-serif text-3xl font-light text-[#0F5132] sm:text-4xl md:text-5xl">
              A New Chapter
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#0F5132]/50">
              From growing together to making a promise.
            </p>
          </motion.div>

          {/* =================================================
              COURT WEDDING STORY
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="mx-auto mt-12 max-w-3xl sm:mt-14"
          >
            <p className="text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              Fast forward through years of shared jokes, late-night
              talks, and growing side-by-side, until{" "}
              <span className="font-medium text-[#0F5132]">
                April 24, 2025
              </span>
              .
            </p>

            <p className="mt-6 text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              With a sign of a pen and a quiet promise at the registry,
              beside our immediate family, we had our court wedding.
              It was official, simple, and deeply ours.
            </p>

            <p className="mt-8 font-serif text-2xl font-light leading-relaxed text-[#0F5132] sm:text-3xl">
              A quiet promise.
              <br />
              A beautiful milestone.
              <br />
              A new chapter.
            </p>
          </motion.div>

          {/* =================================================
              COURT PHOTOS
              PRESERVE FULL IMAGE
          ================================================= */}

          <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-5">

            <motion.div
              {...fadeLeft}
              className="group border border-[#C9A227]/30 bg-[#0F5132] p-2 sm:p-3 md:col-span-3"
            >
              <div className="flex min-h-[400px] items-center justify-center overflow-hidden bg-[#E8F0EB] sm:min-h-[520px]">
                <img
                  src={court01}
                  alt="Peace and Ekeng at their court wedding"
                  className="max-h-[600px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#083B27]/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              {...fadeRight}
              className="group border border-[#0F5132]/10 bg-[#E8F0EB] p-2 sm:p-3 md:col-span-2"
            >
              <div className="flex min-h-[400px] items-center justify-center overflow-hidden bg-white sm:min-h-[520px]">
                <img
                  src={court02}
                  alt="Peace and Ekeng at their court wedding"
                  className="max-h-[600px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>

          </div>

          {/* =================================================
              COUPLE FEATURE IMAGE
              NEW 6TH IMAGE
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="group relative mx-auto mt-16 max-w-5xl"
          >
            <div className="border border-[#C9A227]/40 bg-[#0F5132] p-2 sm:p-3">
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#E8F0EB] sm:min-h-[620px]">

                <img
                  src={couple}
                  alt="Peace and Ekeng"
                  className="max-h-[700px] w-full object-contain transition duration-1000 group-hover:scale-[1.02]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#083B27]/35 via-transparent to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-6 sm:pb-8">
                  <span className="font-serif text-lg italic tracking-wide text-white/90 sm:text-xl">
                    Peace & Ekeng
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              DECEMBER 2026
          ================================================= */}

          <motion.div
            {...fadeUp}
            className="mx-auto mt-16 max-w-3xl text-center"
          >
            <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-[#C9A227]/40 sm:w-12" />

              <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.25em] text-[#C9A227] sm:text-[10px] sm:tracking-[0.35em]">
                December 12, 2026
              </span>

              <span className="h-px w-8 bg-[#C9A227]/40 sm:w-12" />
            </div>

            <p className="text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              Now, as December 12, 2026 approaches, we stand on
              the edge of the next big step, celebrating our marriage
              with everyone we love and stepping into this next
              chapter whole-heartedly.
            </p>

            <p className="mt-7 font-serif text-2xl font-light leading-relaxed text-[#0F5132] sm:text-3xl">
              From a cold evening friend request
              <br />
              to a lifetime together.
            </p>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#0F5132]/60 sm:text-base">
              It turns out the unexpected stories really are
              the best ones.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL STORY
        ===================================================== */}

        <motion.div
          {...fadeUp}
          className="mx-auto mt-24 max-w-3xl text-center sm:mt-32"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/50">
            <Heart
              size={20}
              strokeWidth={1}
              className="text-[#C9A227]"
            />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#C9A227] sm:tracking-[0.45em]">
            And now
          </p>

          <h3 className="mt-5 font-serif text-4xl font-light leading-tight text-[#0F5132] sm:text-5xl">
            The story continues...
          </h3>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#0F5132]/60 sm:text-base">
            The next chapter is no longer just theirs to write.
            It is a celebration shared with family, friends,
            and everyone who has been part of the journey.
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