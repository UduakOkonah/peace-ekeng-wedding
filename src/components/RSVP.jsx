import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, Send } from "lucide-react";

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/Peaceokonah2@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success === true || response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("RSVP submission error:", error);
      alert(
        "We could not send your RSVP right now. Please try again or contact the family directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">

      <AnimatePresence mode="wait">

        {/* =====================================================
            SUCCESS MESSAGE
        ===================================================== */}

        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-[#0F5132]/10 bg-[#E8F0EB] px-6 py-16 text-center sm:px-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FFFDF8]">
              <Check
                size={27}
                strokeWidth={1.2}
                className="text-[#C9A227]"
              />
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.45em] text-[#C9A227]">
              RSVP received
            </p>

            <h3 className="mt-5 font-serif text-4xl font-light text-[#0F5132]">
              Thank you
            </h3>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#0F5132]/60">
              Your response has been received. We are so happy to
              celebrate this beautiful day with you.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]/50" />

              <Heart
                size={14}
                strokeWidth={1}
                className="text-[#C9A227]"
              />

              <span className="h-px w-10 bg-[#C9A227]/50" />
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-10 border border-[#0F5132]/20 px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-[#0F5132] transition hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              Submit another RSVP
            </button>
          </motion.div>
        ) : (

          /* =====================================================
             RSVP FORM
          ===================================================== */

          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="border border-[#0F5132]/10 bg-[#E8F0EB]/50 p-6 sm:p-10"
          >

            {/* FormSubmit settings */}
            <input
              type="hidden"
              name="_subject"
              value="New RSVP — Peace & Ekeng Wedding"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            {/* Honeypot spam protection */}
            <input
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />

            {/* Full name */}
            <div>
              <label
                htmlFor="name"
                className="text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/50"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-3 w-full border-b border-[#0F5132]/15 bg-transparent px-0 py-3 font-serif text-lg text-[#0F5132] outline-none placeholder:text-[#0F5132]/25 focus:border-[#C9A227]"
              />
            </div>

            {/* Email */}
            <div className="mt-8">
              <label
                htmlFor="email"
                className="text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/50"
              >
                Email Address
                <span className="ml-2 normal-case tracking-normal text-[#0F5132]/30">
                  optional
                </span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                className="mt-3 w-full border-b border-[#0F5132]/15 bg-transparent px-0 py-3 font-serif text-lg text-[#0F5132] outline-none placeholder:text-[#0F5132]/25 focus:border-[#C9A227]"
              />
            </div>

            {/* Attendance */}
            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/50">
                Will you be joining us?
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                <label className="group cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="Joyfully accepts"
                    required
                    className="peer sr-only"
                  />

                  <div className="border border-[#0F5132]/10 bg-[#FFFDF8] px-5 py-4 text-center transition peer-checked:border-[#C9A227] peer-checked:bg-[#0F5132] peer-checked:text-[#FFFDF8]">
                    <span className="font-serif text-lg">
                      Joyfully accepts
                    </span>
                  </div>
                </label>

                <label className="group cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="Regretfully declines"
                    required
                    className="peer sr-only"
                  />

                  <div className="border border-[#0F5132]/10 bg-[#FFFDF8] px-5 py-4 text-center transition peer-checked:border-[#C9A227] peer-checked:bg-[#0F5132] peer-checked:text-[#FFFDF8]">
                    <span className="font-serif text-lg">
                      Regretfully declines
                    </span>
                  </div>
                </label>

              </div>
            </div>

            {/* Number of guests */}
            <div className="mt-8">
              <label
                htmlFor="guests"
                className="text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/50"
              >
                Number of Guests
              </label>

              <select
                id="guests"
                name="guests"
                required
                defaultValue=""
                className="mt-3 w-full border-b border-[#0F5132]/15 bg-transparent px-0 py-3 font-serif text-lg text-[#0F5132] outline-none focus:border-[#C9A227]"
              >
                <option value="" disabled>
                  Select number of guests
                </option>

                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.3em] text-[#0F5132]/50"
              >
                A Message
                <span className="ml-2 normal-case tracking-normal text-[#0F5132]/30">
                  optional
                </span>
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Leave a little note for Peace & Ekeng..."
                className="mt-3 w-full resize-none border-b border-[#0F5132]/15 bg-transparent px-0 py-3 font-serif text-lg text-[#0F5132] outline-none placeholder:text-[#0F5132]/25 focus:border-[#C9A227]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-10 flex w-full items-center justify-center gap-3 bg-[#0F5132] px-7 py-4 text-[10px] uppercase tracking-[0.3em] text-[#FFFDF8] transition duration-300 hover:bg-[#083B27] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border border-[#FFFDF8]/30 border-t-[#FFFDF8]" />
                  Sending RSVP
                </>
              ) : (
                <>
                  Send RSVP

                  <Send
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <p className="mt-5 text-center text-[9px] leading-5 text-[#0F5132]/35">
              Your RSVP will be sent securely to the wedding family.
            </p>

          </motion.form>
        )}

      </AnimatePresence>
    </div>
  );
}