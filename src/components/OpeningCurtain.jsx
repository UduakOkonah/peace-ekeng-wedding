import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { useState } from "react";

export default function OpeningCurtain({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-[#083B27]">
      {/* =========================================================
          LEFT CURTAIN
      ========================================================= */}
      <motion.div
        initial={{ x: 0 }}
        animate={isOpening ? { x: "-100%" } : { x: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="absolute inset-y-0 left-0 z-40 w-1/2 overflow-hidden"
      >
        <CurtainFabric side="left" />
        <BotanicalGarden side="left" />
      </motion.div>

      {/* =========================================================
          RIGHT CURTAIN
      ========================================================= */}
      <motion.div
        initial={{ x: 0 }}
        animate={isOpening ? { x: "100%" } : { x: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="absolute inset-y-0 right-0 z-40 w-1/2 overflow-hidden"
      >
        <CurtainFabric side="right" />
        <BotanicalGarden side="right" />
      </motion.div>

      {/* =========================================================
          CENTER INVITATION
      ========================================================= */}
      <motion.div
        className="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto py-6 sm:py-8"
        animate={
          isOpening
            ? { opacity: 0, scale: 0.94 }
            : { opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="relative w-full max-w-2xl px-4 text-center text-[#FFFDF8] sm:px-6">

          <FloralDivider />

          {/* Event mark */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#E5C76B] sm:mt-8 sm:text-[11px] sm:tracking-[0.45em]"
          >
            PENG 2026
          </motion.p>

          {/* Heart medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto mt-6 flex h-20 w-20 items-center justify-center sm:mt-7 sm:h-24 sm:w-24"
          >
            <div className="absolute inset-0 rounded-full border border-[#E5C76B]/70" />

            <div className="absolute inset-2 rounded-full border border-[#C9A227]/50" />

            <div className="absolute inset-4 rounded-full bg-[#C9A227]/10 backdrop-blur-sm sm:inset-5" />

            <Heart
              size={24}
              strokeWidth={1.5}
              className="relative z-10 fill-[#C9A227]/20 text-[#E5C76B] sm:h-[27px] sm:w-[27px]"
            />

            <Leaf
              className="absolute -left-4 top-4 -rotate-45"
            />

            <Leaf
              className="absolute -right-4 bottom-4 rotate-[135deg]"
            />
          </motion.div>

          {/* Names */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="mt-7"
          >
            <h1 className="font-serif text-[2.7rem] font-medium tracking-wide sm:text-6xl">
              Peace
            </h1>

            <p className="my-2 font-serif text-2xl italic text-[#E5C76B]">
              &
            </p>

            <h1 className="font-serif text-[2.7rem] font-medium tracking-wide sm:text-6xl">
              Ekeng
            </h1>
          </motion.div>

          {/* Gold line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 170, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto mt-7 h-px bg-[#C9A227]"
          />

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-6"
          >
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#E5C76B] sm:text-xs sm:tracking-[0.32em]">
              Saturday · 12 December 2026
            </p>

            <p className="mt-2 text-[11px] tracking-[0.12em] text-[#FFFDF8]/80 sm:text-sm sm:tracking-[0.18em]">
              11:00 AM · Calabar
            </p>
          </motion.div>

          {/* Bells + flowers */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-7 flex items-center justify-center gap-5"
          >
            <Bell />

            <FloralMini />

            <Bell />
          </motion.div>

          {/* Open button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            onClick={handleOpen}
            disabled={isOpening}
            className="group mx-auto mt-7 flex items-center gap-2.5 rounded-full border border-[#E5C76B]/70 bg-[#083B27]/70 px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FFFDF8] backdrop-blur-sm transition-all duration-300 hover:bg-[#C9A227] hover:text-[#083B27] sm:mt-9 sm:gap-3 sm:px-8 sm:py-4 sm:text-[11px] sm:tracking-[0.28em]"
          >
            <span>
              {isOpening ? "Opening..." : "Open Invitation"}
            </span>

            <ChevronDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </motion.button>

          <div className="mt-7 sm:mt-10">
            <FloralDivider />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* =============================================================
   CURTAIN FABRIC
============================================================= */

function CurtainFabric({ side }) {
  return (
    <div className="absolute inset-0 bg-[#0F5132]">

      {/* Deep velvet base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B452C] via-[#0F5132] to-[#073521]" />

      {/* Heavy velvet folds */}
      <div className="absolute inset-0 opacity-70">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full"
            style={{
              left: `${i * 8}%`,
              width: "9%",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.24), rgba(255,255,255,0.09), rgba(0,0,0,0.22))",
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Soft velvet highlight */}
      <div
        className={`absolute inset-y-0 w-1/2 ${
          side === "left" ? "right-0" : "left-0"
        } bg-gradient-to-r from-transparent via-[#E5C76B]/5 to-transparent`}
      />

      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#041F14]/60 to-transparent" />
    </div>
  );
}

/* =============================================================
   LUSH BOTANICAL GARDEN
============================================================= */

function BotanicalGarden({ side }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 1.4 }}
      className={`pointer-events-none absolute top-0 ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
    <svg
    viewBox="0 0 270 720"
    fill="none"
    className={`h-[85vh] w-[155px] sm:h-[88vh] sm:w-[210px] md:h-[720px] md:w-[270px] ${
        side === "right" ? "scale-x-[-1]" : ""
    }`}
    >
        {/* =====================================================
            MAIN THICK VINES
        ===================================================== */}

        <path
          d="
            M18 720
            C25 640 34 575 55 515
            C76 450 102 405 112 350
            C123 290 130 235 150 180
            C170 120 205 55 248 5
          "
          stroke="#C9A227"
          strokeWidth="3.2"
          strokeOpacity="0.9"
          strokeLinecap="round"
        />

        <path
          d="
            M48 720
            C70 650 82 590 80 535
            C78 470 58 425 72 370
            C86 315 120 285 132 230
            C145 170 153 110 180 55
          "
          stroke="#E5C76B"
          strokeWidth="2.4"
          strokeOpacity="0.82"
          strokeLinecap="round"
        />

        <path
          d="
            M0 555
            C45 525 85 505 110 460
            C138 410 150 365 174 325
          "
          stroke="#C9A227"
          strokeWidth="2.2"
          strokeOpacity="0.8"
          strokeLinecap="round"
        />

        <path
          d="
            M72 415
            C115 400 155 375 188 330
            C220 285 225 235 250 205
          "
          stroke="#E5C76B"
          strokeWidth="2"
          strokeOpacity="0.72"
          strokeLinecap="round"
        />

        {/* =====================================================
            BIG LOWER LEAVES
        ===================================================== */}

        <LeafSVG x="20" y="670" rotate="-58" size="42" />
        <LeafSVG x="48" y="625" rotate="30" size="38" />
        <LeafSVG x="30" y="570" rotate="-48" size="44" />
        <LeafSVG x="62" y="535" rotate="42" size="36" />

        <LeafSVG x="25" y="500" rotate="-62" size="42" />
        <LeafSVG x="73" y="475" rotate="34" size="39" />
        <LeafSVG x="60" y="425" rotate="-55" size="40" />

        {/* =====================================================
            CENTER LEAVES
        ===================================================== */}

        <LeafSVG x="82" y="395" rotate="40" size="35" />
        <LeafSVG x="75" y="350" rotate="-58" size="39" />
        <LeafSVG x="105" y="320" rotate="35" size="34" />

        <LeafSVG x="92" y="275" rotate="-62" size="40" />
        <LeafSVG x="118" y="245" rotate="35" size="34" />
        <LeafSVG x="108" y="205" rotate="-55" size="38" />

        {/* =====================================================
            UPPER LEAVES
        ===================================================== */}

        <LeafSVG x="135" y="180" rotate="38" size="36" />
        <LeafSVG x="140" y="140" rotate="-62" size="40" />
        <LeafSVG x="160" y="110" rotate="30" size="34" />

        <LeafSVG x="170" y="75" rotate="-55" size="38" />
        <LeafSVG x="192" y="48" rotate="30" size="32" />
        <LeafSVG x="215" y="20" rotate="-45" size="34" />

        {/* =====================================================
            SIDE BRANCH LEAVES
        ===================================================== */}

        <LeafSVG x="4" y="545" rotate="-75" size="32" />
        <LeafSVG x="90" y="510" rotate="55" size="30" />

        <LeafSVG x="102" y="455" rotate="-70" size="32" />
        <LeafSVG x="132" y="420" rotate="48" size="32" />

        <LeafSVG x="145" y="365" rotate="-65" size="34" />
        <LeafSVG x="175" y="335" rotate="45" size="30" />

        <LeafSVG x="180" y="280" rotate="-60" size="32" />
        <LeafSVG x="210" y="250" rotate="45" size="30" />

        {/* =====================================================
            SMALL LEAVES FOR FULLNESS
        ===================================================== */}

        <LeafSVG x="15" y="610" rotate="35" size="22" />
        <LeafSVG x="45" y="550" rotate="-30" size="24" />
        <LeafSVG x="58" y="490" rotate="20" size="22" />

        <LeafSVG x="83" y="440" rotate="-35" size="23" />
        <LeafSVG x="110" y="375" rotate="25" size="22" />
        <LeafSVG x="95" y="300" rotate="-30" size="24" />

        <LeafSVG x="130" y="270" rotate="25" size="21" />
        <LeafSVG x="125" y="215" rotate="-30" size="23" />

        <LeafSVG x="155" y="165" rotate="25" size="21" />
        <LeafSVG x="175" y="125" rotate="-30" size="23" />
        <LeafSVG x="190" y="80" rotate="25" size="20" />

        {/* =====================================================
            FLOWERS
        ===================================================== */}

        <FlowerSVG x="42" y="595" scale="1.25" />
        <FlowerSVG x="80" y="470" scale="1" />
        <FlowerSVG x="65" y="350" scale="1.15" />

        <FlowerSVG x="115" y="285" scale="0.9" />
        <FlowerSVG x="145" y="190" scale="1.1" />
        <FlowerSVG x="185" y="105" scale="0.9" />

        <FlowerSVG x="225" y="42" scale="1.15" />

        {/* =====================================================
            GOLD DOTS / BOTANICAL DETAILS
        ===================================================== */}

        <circle cx="30" cy="450" r="3" fill="#E5C76B" />
        <circle cx="95" cy="390" r="2.5" fill="#C9A227" />
        <circle cx="125" cy="330" r="3" fill="#E5C76B" />
        <circle cx="155" cy="250" r="2.5" fill="#C9A227" />
        <circle cx="195" cy="155" r="3" fill="#E5C76B" />
        <circle cx="230" cy="90" r="2.5" fill="#C9A227" />

        {/* =====================================================
            TINY FLOWER SPARKS
        ===================================================== */}

        <TinyFlower x="25" y="390" />
        <TinyFlower x="105" y="430" />
        <TinyFlower x="125" y="150" />
        <TinyFlower x="205" y="220" />
        <TinyFlower x="240" y="130" />
      </svg>
    </motion.div>
  );
}

/* =============================================================
   LARGE LEAF
============================================================= */

function LeafSVG({ x, y, rotate = 0, size = 30 }) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate})`}
      opacity="0.95"
    >
      <path
        d={`
          M0 0
          C${size * 0.15} -${size * 0.75},
          ${size * 0.55} -${size * 1.05},
          ${size} -${size * 0.65}
          C${size * 0.9} -${size * 0.12},
          ${size * 0.42} ${size * 0.22},
          0 0Z
        `}
        fill="#C9A227"
        fillOpacity="0.28"
        stroke="#E5C76B"
        strokeWidth="1.8"
        strokeOpacity="0.95"
      />

      <path
        d={`
          M1 0
          C${size * 0.28} -${size * 0.23},
          ${size * 0.62} -${size * 0.48},
          ${size * 0.92} -${size * 0.65}
        `}
        stroke="#FFF0A6"
        strokeWidth="1.2"
        strokeOpacity="0.9"
        strokeLinecap="round"
      />
    </g>
  );
}

/* =============================================================
   LARGE FLOWER
============================================================= */

function FlowerSVG({ x, y, scale = 1 }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      opacity="0.95"
    >
      <circle
        cx="0"
        cy="-8"
        r="6"
        fill="#C9A227"
        fillOpacity="0.25"
        stroke="#E5C76B"
        strokeWidth="1.5"
      />

      <circle
        cx="8"
        cy="0"
        r="6"
        fill="#C9A227"
        fillOpacity="0.25"
        stroke="#E5C76B"
        strokeWidth="1.5"
      />

      <circle
        cx="0"
        cy="8"
        r="6"
        fill="#C9A227"
        fillOpacity="0.25"
        stroke="#E5C76B"
        strokeWidth="1.5"
      />

      <circle
        cx="-8"
        cy="0"
        r="6"
        fill="#C9A227"
        fillOpacity="0.25"
        stroke="#E5C76B"
        strokeWidth="1.5"
      />

      <circle
        cx="0"
        cy="0"
        r="3.5"
        fill="#E5C76B"
        stroke="#FFF3B0"
        strokeWidth="1.2"
      />
    </g>
  );
}

/* =============================================================
   SMALL FLOWER
============================================================= */

function TinyFlower({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} opacity="0.8">
      <circle
        cx="0"
        cy="-4"
        r="2.5"
        fill="#E5C76B"
      />

      <circle
        cx="4"
        cy="0"
        r="2.5"
        fill="#E5C76B"
      />

      <circle
        cx="0"
        cy="4"
        r="2.5"
        fill="#E5C76B"
      />

      <circle
        cx="-4"
        cy="0"
        r="2.5"
        fill="#E5C76B"
      />

      <circle
        cx="0"
        cy="0"
        r="1.5"
        fill="#FFF3B0"
      />
    </g>
  );
}

/* =============================================================
   TOP / BOTTOM FLORAL DIVIDER
============================================================= */

function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A227] sm:w-20" />

      <div className="flex items-center gap-2 text-[#E5C76B]">
        <span className="h-1.5 w-1.5 rotate-45 border border-[#E5C76B]" />
        <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#E5C76B]" />
      </div>

      <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A227] sm:w-20" />
    </div>
  );
}

/* =============================================================
   SMALL FLOWER BETWEEN BELLS
============================================================= */

function FloralMini() {
  return (
    <div className="relative flex h-10 w-16 items-center justify-center">
      <span className="absolute h-px w-14 bg-[#C9A227]/70" />

      <div className="relative z-10 flex items-center gap-1.5">
        <span className="h-3 w-3 rotate-45 border border-[#E5C76B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#C9A227]" />
        <span className="h-3 w-3 rotate-45 border border-[#E5C76B]" />
      </div>
    </div>
  );
}

/* =============================================================
   SMALL CENTER LEAF
============================================================= */

function Leaf({ className = "" }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className={className}
    >
      <path
        d="M2 21C5 12 11 5 22 2C20 12 13 19 2 21Z"
        fill="#C9A227"
        fillOpacity="0.25"
        stroke="#E5C76B"
        strokeWidth="1.4"
      />

      <path
        d="M3 20C9 14 15 9 21 3"
        stroke="#FFF0A6"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =============================================================
   BELL
============================================================= */

function Bell() {
  return (
    <svg
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
    >
      {/* Bell body */}
      <path
        d="M6 25C7 22 8 19 8 15V12C8 7.6 11.2 4 15 4C18.8 4 22 7.6 22 12V15C22 19 23 22 24 25H6Z"
        fill="#C9A227"
        fillOpacity="0.18"
        stroke="#E5C76B"
        strokeWidth="1.5"
      />

      {/* Bell rim */}
      <path
        d="M4 25H26"
        stroke="#E5C76B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Clapper */}
      <circle
        cx="15"
        cy="29"
        r="2"
        fill="#E5C76B"
      />

      {/* Bell top */}
      <path
        d="M13 4C13 2.7 13.8 2 15 2C16.2 2 17 2.7 17 4"
        stroke="#E5C76B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}