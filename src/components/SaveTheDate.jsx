import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Heart } from "lucide-react";

const WEDDING_DATE = new Date("2026-12-12T11:00:00+01:00");

const EVENT_TITLE = "Peace & Ekeng Wedding";

const EVENT_DESCRIPTION =
  "Join us as we celebrate the marriage of Peace & Ekeng.";

const EVENT_LOCATION =
  "The Church of Jesus Christ of Latter-day Saints, Technical Roundabout, Calabar, Cross River State";

function getTimeLeft() {
  const difference = WEDDING_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function pad(number) {
  return String(number).padStart(2, "0");
}

function formatICSDate(date) {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addToCalendar = () => {
    const start = new Date(WEDDING_DATE);
    const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//PENG 2026//Peace & Ekeng Wedding//EN",
      "BEGIN:VEVENT",
      `UID:peng-2026-${start.getTime()}@peaceandekeng`,
      `DTSTAMP:${formatICSDate(new Date())}`,
      `DTSTART:${formatICSDate(start)}`,
      `DTEND:${formatICSDate(end)}`,
      `SUMMARY:${EVENT_TITLE}`,
      `DESCRIPTION:${EVENT_DESCRIPTION}`,
      `LOCATION:${EVENT_LOCATION}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Peace-and-Ekeng-Wedding.ics";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const addToGoogleCalendar = () => {
    const start = new Date(WEDDING_DATE);
    const end = new Date(
      start.getTime() + 3 * 60 * 60 * 1000
    );

    const formatGoogleDate = (date) => {
      return date
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "");
    };

    const startDate = formatGoogleDate(start);
    const endDate = formatGoogleDate(end);

    const googleCalendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(EVENT_TITLE)}` +
      `&dates=${startDate}/${endDate}` +
      `&details=${encodeURIComponent(EVENT_DESCRIPTION)}` +
      `&location=${encodeURIComponent(EVENT_LOCATION)}`;

    window.open(
      googleCalendarUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const countdown = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Heart
            size={23}
            strokeWidth={1.2}
            className="mx-auto text-[#C9A227]"
          />

          <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-[#C9A227]">
            Save the date
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light text-[#0F5132] sm:text-5xl md:text-6xl">
            12 December 2026
          </h2>

          <p className="mt-4 font-serif text-lg italic text-[#0F5132]/60">
            Until forever begins...
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5"
        >
          {countdown.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25 + index * 0.08,
              }}
              className="border border-[#0F5132]/10 bg-[#E8F0EB]/60 px-4 py-7"
            >
              <motion.p
                key={item.value}
                initial={{ opacity: 0.5, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-serif text-4xl font-light text-[#0F5132] sm:text-5xl"
              >
                {pad(item.value)}
              </motion.p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#0F5132]/45">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Event information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-14 max-w-2xl border-y border-[#0F5132]/10 py-8"
        >
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">

            <div className="flex items-center gap-3">
              <CalendarDays
                size={17}
                strokeWidth={1.2}
                className="text-[#C9A227]"
              />

              <div className="text-left">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#0F5132]/40">
                  Date
                </p>

                <p className="mt-1 text-sm text-[#0F5132]">
                  Saturday, 12 December 2026
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-[#0F5132]/10 sm:block" />

            <div className="flex items-center gap-3">
              <Clock3
                size={17}
                strokeWidth={1.2}
                className="text-[#C9A227]"
              />

              <div className="text-left">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#0F5132]/40">
                  Time
                </p>

                <p className="mt-1 text-sm text-[#0F5132]">
                  11:00 AM
                </p>
              </div>
            </div>

          </div>

          <div className="mx-auto mt-7 flex max-w-lg items-start justify-center gap-3 text-center">
            <MapPin
              size={17}
              strokeWidth={1.2}
              className="mt-0.5 shrink-0 text-[#C9A227]"
            />

            <p className="text-sm leading-6 text-[#0F5132]/60">
              The Church of Jesus Christ of Latter-day Saints
              <br />
              Technical Roundabout, Calabar, Cross River State
            </p>
          </div>
        </motion.div>

        {/* Calendar buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={addToCalendar}
            className="group flex w-full items-center justify-center gap-3 bg-[#0F5132] px-7 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#FFFDF8] transition duration-300 hover:bg-[#083B27] sm:w-auto"
          >
            <CalendarDays
              size={15}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />

            Add to Calendar
          </button>

          <button
            type="button"
            onClick={addToGoogleCalendar}
            className="flex w-full items-center justify-center gap-3 border border-[#0F5132]/20 px-7 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#0F5132] transition duration-300 hover:border-[#C9A227] hover:text-[#C9A227] sm:w-auto"
          >
            <CalendarDays
              size={15}
              strokeWidth={1.2}
            />

            Google Calendar
          </button>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 text-[10px] uppercase tracking-[0.25em] text-[#0F5132]/35"
        >
          We cannot wait to celebrate with you
        </motion.p>

      </div>
    </section>
  );
}