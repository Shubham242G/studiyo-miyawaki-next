"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../components/motion"; // adjust path if needed

interface ContactFormSectionProps {
  animated?: boolean;
}

export function ContactFormSection({
  animated = false,
}: ContactFormSectionProps) {
  const Wrapper = animated ? motion.section : "section";

  return (
    <Wrapper
      {...(animated && {
        variants: fadeInUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.3 },
      })}
      id="contact"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-14 shadow-md md:px-16"
    >
      {/* Gradient layer matching service cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b36666]/15 via-transparent to-transparent"
      />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10 max-w-xl space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-600">
            Contact
          </p>
          <h2 className="text-2xl font-bold text-slate-900">
            Let's start with the real version.
          </h2>
          <p className="text-[0.9rem] leading-relaxed text-slate-700">
            You don't need a perfect brief. Share context, constraints, or even
            something half-formed. We'll respond with a clear next step.
          </p>
        </div>

        {/* Form */}
        <form className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.75rem] font-medium text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.75rem] font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g., 998-877-6655"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className="text-[0.75rem] font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className="text-[0.75rem] font-medium text-slate-700">
              Brief Message
            </label>
            <textarea
              rows={5}
              placeholder="What are you building? What problem are you trying to solve?"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </div>

          {/* CTA */}
          <div className="md:col-span-2 mt-2 flex items-center justify-between">
            <p className="text-[0.7rem] text-slate-500">
              Typical reply within 24–48 business hours.
            </p>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-[0.8rem] font-semibold text-white shadow-sm transition hover:bg-emerald-400"
            >
              Send inquiry <span>↗</span>
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
