import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Navigation,
  ChevronDown,
  Sparkles,
  Phone,
} from "lucide-react";

import OpeningCurtain from "./components/OpeningCurtain";
import SaveTheDate from "./components/SaveTheDate";
import RSVP from "./components/RSVP";
import OurStory from "./components/OurStory";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

const fadeRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <main className="overflow-x-hidden bg-[#FFFDF8] text-[#0F5132]">

      {/* =====================================================
          OPENING CURTAIN
      ===================================================== */}

      {!invitationOpened && (
        <OpeningCurtain
          onOpen={() => setInvitationOpened(true)}
        />
      )}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFFDF8]">

        {/* Decorative botanical background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <svg
            className="absolute -left-24 top-20 h-[520px] w-[420px] opacity-[0.11]"
            viewBox="0 0 420 520"
            fill="none"
          >
            <path
              d="M60 500C100 390 150 310 250 220C300 175 350 120 390 20"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M112 405C78 370 48 350 12 345"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M145 355C112 315 92 275 85 235"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M190 305C235 292 275 270 305 238"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M232 255C270 220 295 185 305 145"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M285 190C320 170 345 145 360 112"
              stroke="#0F5132"
              strokeWidth="1"
            />
          </svg>

          <svg
            className="absolute -right-24 bottom-0 h-[500px] w-[400px] rotate-180 opacity-[0.11]"
            viewBox="0 0 420 520"
            fill="none"
          >
            <path
              d="M60 500C100 390 150 310 250 220C300 175 350 120 390 20"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M112 405C78 370 48 350 12 345"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M145 355C112 315 92 275 85 235"
              stroke="#0F5132"
              strokeWidth="1"
            />
            <path
              d="M190 305C235 292 275 270 305 238"
              stroke="#0F5132"
              strokeWidth="1"
            />
          </svg>

          <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C9A227]/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-6xl px-6 py-24 text-center">

          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.6em] text-[#C9A227] sm:text-xs"
          >
            PENG 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mx-auto mt-7 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 text-[11px] uppercase tracking-[0.38em] text-[#0F5132]/65 sm:text-xs"
          >
            Joyfully request your presence
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-4 font-serif text-lg italic text-[#0F5132]/75 sm:text-xl"
          >
            at the Marriage Ceremony of their children
          </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.1,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-8 font-serif text-[2.6rem] font-light tracking-wide sm:text-6xl md:text-8xl lg:text-9xl"
    >
      Peace
      <span className="mx-1.5 text-[#C9A227] sm:mx-3 md:mx-5">&</span>
      Ekeng
</motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 90 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mx-auto mt-8 h-px bg-[#C9A227]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-8"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C9A227] sm:text-xs">
              Saturday
            </p>

            <p className="mt-3 font-serif text-2xl font-light sm:text-3xl">
              12 December 2026
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/55 sm:text-xs">
              <span>11:00 AM</span>
              <span className="h-1 w-1 rounded-full bg-[#C9A227]" />
              <span>Calabar</span>
              <span className="h-1 w-1 rounded-full bg-[#C9A227]" />
              <span>Cross River State</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-20 flex flex-col items-center"
          >
            <span className="text-[9px] uppercase tracking-[0.45em] text-[#0F5132]/40">
              Scroll to explore
            </span>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/40"
            >
              <ChevronDown
                size={15}
                strokeWidth={1.2}
                className="text-[#C9A227]"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
      </section>

      {/* OUR STORY */}
      <OurStory />

      {/* =====================================================
          THE FAMILIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0F5132] px-6 py-28 text-[#FFFDF8] sm:py-36">

        <div className="absolute left-1/2 top-0 h-40 w-px bg-gradient-to-b from-[#C9A227] to-transparent" />

        <div className="relative mx-auto max-w-5xl text-center">

          <motion.div {...fadeUp}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#E5C76B]">
              With grateful hearts
            </p>

            <h2 className="mt-6 font-serif text-4xl font-light sm:text-5xl">
              The Families
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-[#C9A227]" />
          </motion.div>

          <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-20">

            <motion.div {...fadeLeft} className="relative">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#E5C76B]">
                Mr. & Mrs.
              </p>

              <h3 className="mt-5 font-serif text-2xl font-light leading-relaxed sm:text-3xl">
                Lawrence Albert Okonah
              </h3>

              <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#FFFDF8]/65">
                Okonah Family
                <br />
                Ikot Afanga, Essien Udim L.G.A.
                <br />
                Akwa Ibom State
              </p>

              <div className="mx-auto mt-8 h-px w-10 bg-[#C9A227]/60" />
            </motion.div>

            <motion.div {...fadeRight} className="relative">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#E5C76B]">
                Rev. & Mrs.
              </p>

              <h3 className="mt-5 font-serif text-2xl font-light leading-relaxed sm:text-3xl">
                Ekeng Ewa Ekeng
              </h3>

              <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#FFFDF8]/65">
                Abasi Asibong Family
                <br />
                Obutong Itak Mkpa
                <br />
                Calabar, Cross River State
              </p>

              <div className="mx-auto mt-8 h-px w-10 bg-[#C9A227]/60" />
            </motion.div>

          </div>

          <motion.div {...fadeUp} className="mt-20">
            <p className="font-serif text-lg italic text-[#FFFDF8]/75">
              Joyfully request your presence
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#E5C76B]">
              at the Marriage Ceremony of their children
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INVITATION MESSAGE
      ===================================================== */}

      <section className="relative bg-[#FFFDF8] px-6 py-28 sm:py-36">

        <div className="mx-auto max-w-4xl text-center">

          <motion.div {...fadeUp}>
            <Heart
              size={25}
              strokeWidth={1}
              className="mx-auto text-[#C9A227]"
            />

            <p className="mt-8 text-[10px] uppercase tracking-[0.5em] text-[#0F5132]/50">
              A celebration of love
            </p>

            <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-[#0F5132] sm:text-5xl md:text-6xl">
              Two hearts,
              <br />
              one beautiful beginning.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#0F5132]/65 sm:text-base">
              With joy and gratitude, we invite you to celebrate with us
              as Peace and Ekeng begin their journey together in marriage.
              Your presence will make this special day even more meaningful.
            </p>

            <div className="mx-auto mt-10 h-px w-16 bg-[#C9A227]" />
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          WEDDING DETAILS
      ===================================================== */}

      <section className="bg-[#E8F0EB] px-6 py-28 sm:py-36">

        <div className="mx-auto max-w-5xl">

          <motion.div {...fadeUp} className="text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A227]">
              Mark the day
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light text-[#0F5132] sm:text-5xl">
              Wedding Details
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <motion.div
              {...fadeUp}
              className="border border-[#0F5132]/10 bg-[#FFFDF8] p-8 text-center"
            >
              <CalendarDays
                size={25}
                strokeWidth={1.2}
                className="mx-auto text-[#C9A227]"
              />

              <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[#0F5132]/50">
                Date
              </p>

              <h3 className="mt-4 font-serif text-2xl font-light">
                Saturday
              </h3>

              <p className="mt-2 text-sm text-[#0F5132]/65">
                12 December 2026
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="border border-[#0F5132]/10 bg-[#FFFDF8] p-8 text-center"
            >
              <Clock3
                size={25}
                strokeWidth={1.2}
                className="mx-auto text-[#C9A227]"
              />

              <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[#0F5132]/50">
                Time
              </p>

              <h3 className="mt-4 font-serif text-2xl font-light">
                11:00 AM
              </h3>

              <p className="mt-2 text-sm text-[#0F5132]/65">
                Please arrive early
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="border border-[#0F5132]/10 bg-[#FFFDF8] p-8 text-center"
            >
              <MapPin
                size={25}
                strokeWidth={1.2}
                className="mx-auto text-[#C9A227]"
              />

              <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[#0F5132]/50">
                Location
              </p>

              <h3 className="mt-4 font-serif text-2xl font-light">
                Calabar
              </h3>

              <p className="mt-2 text-sm text-[#0F5132]/65">
                Cross River State
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SAVE THE DATE
      ===================================================== */}

      <section className="bg-[#FFFDF8] px-6 py-24 sm:py-32">
        <motion.div {...fadeUp}>
          <SaveTheDate />
        </motion.div>
      </section>

      {/* =====================================================
          DRESS CODE
      ===================================================== */}

      <section className="bg-[#0F5132] px-6 py-28 text-[#FFFDF8] sm:py-36">

        <div className="mx-auto max-w-5xl text-center">

          <motion.div {...fadeUp}>
            <Sparkles
              size={25}
              strokeWidth={1.2}
              className="mx-auto text-[#E5C76B]"
            />

            <p className="mt-7 text-[10px] uppercase tracking-[0.5em] text-[#E5C76B]">
              Dress with us
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl">
              Dress Code
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#FFFDF8]/65">
              Formal and traditional wedding attire are warmly welcomed.
              Come dressed to celebrate love, joy and a beautiful new beginning.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            <motion.div
              {...fadeLeft}
              className="border border-[#FFFDF8]/10 bg-[#FFFDF8]/[0.04] p-10"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#E5C76B]">
                Ladies
              </p>

              <h3 className="mt-5 font-serif text-3xl font-light">
                Elegant & Graceful
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#FFFDF8]/55">
                Celebrate the day in an elegant look that complements
                the colours of the occasion.
              </p>
            </motion.div>

            <motion.div
              {...fadeRight}
              className="border border-[#FFFDF8]/10 bg-[#FFFDF8]/[0.04] p-10"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#E5C76B]">
                Gentlemen
              </p>

              <h3 className="mt-5 font-serif text-3xl font-light">
                Classic & Refined
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#FFFDF8]/55">
                Come dressed in a timeless, polished style
                befitting the celebration.
              </p>
            </motion.div>

          </div>

          {/* Colours */}
          <motion.div {...fadeUp} className="mt-16">

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#E5C76B]">
              Colours of the day
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">

              <span className="h-10 w-10 rounded-full border border-[#FFFDF8]/20 bg-[#FFFDF8] shadow-lg" />

              <span className="h-10 w-10 rounded-full border border-[#FFFDF8]/10 bg-[#0F5132] shadow-lg" />

              <span className="h-10 w-10 rounded-full bg-[#C9A227] shadow-lg" />

            </div>

            <p className="mt-5 text-xs text-[#FFFDF8]/55">
              White · Emerald Green · Gold
            </p>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VENUE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#E8F0EB] px-6 py-28 sm:py-36">

        <div className="mx-auto max-w-5xl">

          <motion.div {...fadeUp} className="text-center">

            <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A227]">
              Join us here
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light text-[#0F5132] sm:text-5xl">
              The Venue
            </h2>

          </motion.div>

          <motion.div
            {...fadeUp}
            className="relative mt-16 overflow-hidden border border-[#0F5132]/10 bg-[#FFFDF8]"
          >

            {/* Decorative map grid */}
            <div className="absolute inset-0 opacity-[0.06]">
              <div className="absolute inset-0 bg-[linear-gradient(#0F5132_1px,transparent_1px),linear-gradient(90deg,#0F5132_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative grid min-h-[420px] items-center md:grid-cols-2">

              <div className="p-10 text-center md:p-14 md:text-left">

                <MapPin
                  size={30}
                  strokeWidth={1}
                  className="mx-auto text-[#C9A227] md:mx-0"
                />

                <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-[#0F5132]/45">
                  Ceremony
                </p>

                <h3 className="mt-5 max-w-md font-serif text-3xl font-light leading-tight text-[#0F5132] sm:text-4xl">
                  The Church of Jesus Christ of Latter-day Saints
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#0F5132]/60">
                  Technical Roundabout
                  <br />
                  Calabar, Cross River State
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">

                  <div className="flex items-center gap-2 border border-[#0F5132]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#0F5132]/60">
                    <Clock3 size={13} />
                    11:00 AM
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=The+Church+of+Jesus+Christ+of+Latter-day+Saints+Technical+Roundabout+Calabar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#0F5132] px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-[#FFFDF8] transition hover:bg-[#083B27]"
                  >
                    <Navigation size={13} />
                    Get Directions
                  </a>

                </div>
              </div>

              <div className="flex h-full min-h-[300px] items-center justify-center bg-[#0F5132] p-10">

                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#C9A227]/30">

                  <div className="absolute inset-5 rounded-full border border-[#C9A227]/20" />

                  <div className="absolute inset-12 rounded-full border border-[#C9A227]/20" />

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A227] shadow-2xl">
                    <MapPin
                      size={25}
                      className="text-[#0F5132]"
                      strokeWidth={1.3}
                    />
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RSVP
      ===================================================== */}

      <section className="bg-[#FFFDF8] px-6 py-28 sm:py-36">

        <div className="mx-auto max-w-5xl">

          <motion.div {...fadeUp} className="text-center">

            <Heart
              size={24}
              strokeWidth={1.2}
              className="mx-auto text-[#C9A227]"
            />

            <p className="mt-7 text-[10px] uppercase tracking-[0.5em] text-[#C9A227]">
              We would love to celebrate with you
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light text-[#0F5132] sm:text-5xl">
              RSVP
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#0F5132]/60">
              Kindly let us know if you will be joining us
              as we celebrate this special day.
            </p>

          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >

            <div className="border border-[#0F5132]/10 bg-[#E8F0EB] p-6 text-center">
              <Phone
                size={19}
                strokeWidth={1.2}
                className="mx-auto text-[#C9A227]"
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/45">
                Asibong
              </p>

              <p className="mt-2 font-serif text-xl text-[#0F5132]">
                0816 632 1901
              </p>
            </div>

            <div className="border border-[#0F5132]/10 bg-[#E8F0EB] p-6 text-center">
              <Phone
                size={19}
                strokeWidth={1.2}
                className="mx-auto text-[#C9A227]"
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/45">
                Uduakobong
              </p>

              <p className="mt-2 font-serif text-xl text-[#0F5132]">
                0912 166 2916
              </p>
            </div>

          </motion.div>

          <motion.div {...fadeUp} className="mt-12">
            <RSVP />
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0F5132] px-6 py-32 text-center text-[#FFFDF8] sm:py-40">

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.04] blur-3xl" />

        <motion.div {...fadeUp} className="relative">

          <p className="text-[10px] uppercase tracking-[0.5em] text-[#E5C76B]">
            With love
          </p>

          <h2 className="mt-7 font-serif text-5xl font-light sm:text-6xl md:text-7xl">
            Peace <span className="text-[#C9A227]">&</span> Ekeng
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#FFFDF8]/60">
            Thank you for being part of our story.
            We look forward to celebrating this beautiful beginning
            with you.
          </p>

          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/50" />
            <Heart
              size={15}
              strokeWidth={1}
              className="text-[#C9A227]"
            />
            <span className="h-px w-12 bg-[#C9A227]/50" />
          </div>

        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#083B27] px-6 py-8 text-center text-[#FFFDF8]/40">

        <p className="text-[9px] uppercase tracking-[0.4em]">
          PENG 2026 · Peace & Ekeng
        </p>

        <p className="mt-3 text-[10px]">
          Saturday · 12 December 2026 · Calabar
        </p>

      </footer>

    </main>
  );
}