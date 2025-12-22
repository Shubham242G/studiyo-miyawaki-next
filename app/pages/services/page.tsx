"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  fadeIn,
  staggerContainer,
} from "../../components/motion";
import { motion } from "framer-motion";

const coreServices = [
  {
    label: "01",
    name: "Flagship studio website",
    short: "A calm, product‑like home for your practice.",
    bullet1: "Positioning, sitemap, and page flows shaped around how you actually sell.",
    bullet2: "Next.js build with fast loads, clean URLs, and analytics wired from day one.",
    bullet3: "Launch kit with copy prompts, content calendar, and Loom walkthroughs.",
  },
  {
    label: "02",
    name: "Ongoing optimisation sprints",
    short: "Lightweight, recurring work on the site you already have.",
    bullet1: "Monthly or quarterly design and UX passes focused on conversion bottlenecks.",
    bullet2: "Search and content tweaks based on how real visitors are behaving.",
    bullet3: "Small experiments shipped without huge redesigns or long retainers.",
  },
  {
    label: "03",
    name: "Personal brand hub",
    short: "A single link that makes your work, voice, and offers make sense.",
    bullet1: "Signature homepage, writing index, and lead capture all in one place.",
    bullet2: "Content templates so publishing doesn’t stall after launch.",
    bullet3: "Room to grow into courses, community, or productised services later.",
  },
];

const addOns = [
  {
    tag: "Add‑on",
    title: "Content & SEO foundation",
    copy: "Keyword mapping, information architecture, and on‑page structure so every important page has a real search plan.",
  },
  {
    tag: "Add‑on",
    title: "Visual identity refresh",
    copy: "Palette, typography, and simple marks tailored to web so the interface feels like one brand, not three.",
  },
  {
    tag: "Add‑on",
    title: "Performance watch",
    copy: "Quarterly audit of speed, UX, and search health with a short, human readout instead of a 40‑page PDF.",
  },
];

const stats = [
  {
    label: "Avg. lift in qualified leads",
    value: "37%",
    note: "Measured across 6 recent redesigns after 90 days.",
  },
  {
    label: "Pages shipped that same year",
    value: "120+",
    note: "From one‑page experiments to full ecosystems.",
  },
  {
    label: "Projects started from referrals",
    value: "4 of 5",
    note: "Most work comes from existing clients introducing us.",
  },
];

const faqs = [
  {
    q: "What is the typical starting point?",
    a: "A 45‑minute call to understand your offer, current site, and constraints. From there you get a written plan and a simple, fixed‑fee proposal.",
  },
  {
    q: "How long does a flagship site usually take?",
    a: "Most builds land between 4–8 weeks, depending on scope and how ready your content is.",
  },
  {
    q: "Do you work with in‑house teams and existing vendors?",
    a: "Yes. A lot of work plugs into internal marketing, design, or dev teams. The studio plays nicely with existing stacks.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-6 md:px-6 lg:px-0">
        {/* HEADER BAR */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
              StudiYo Miyawaki
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">
              Services
            </h1>
          </div>
          <Link
            href="/"
            className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[0.7rem] text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
          >
            Back to home ↗
          </Link>
        </header>

        <div className="space-y-6">
          {/* HERO / POSITIONING */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-md md:px-7 md:py-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center opacity-15 mix-blend-soft-light"
            />
            <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
              <MotionDiv
                variants={fadeInUp}
                className="md:col-span-7 space-y-3"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                  What the studio actually does
                </p>
                <h2 className="text-xl font-medium text-slate-900 md:text-[1.45rem]">
                  Calm, product‑grade websites for practices that trade on trust, not volume.
                </h2>
                <p className="text-[0.85rem] text-slate-700">
                  Whether you run a law practice, a health platform, or an expert‑led product, the site has one job: help the right people feel sure enough to take the next step.
                </p>
                <p className="text-[0.85rem] text-slate-700">
                  StudiYo Miyawaki blends strategy, interface design, copy, and engineering into one rhythm so you are never juggling three different vendors.
                </p>
              </MotionDiv>

              <MotionDiv
                variants={fadeInUp}
                className="md:col-span-5 space-y-3"
              >
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-[0.8rem] text-emerald-900 shadow-sm">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em]">
                    Snapshot
                  </p>
                  <p className="mt-1 font-medium">
                    90% of projects lead to follow‑up work within the first year.
                  </p>
                  <p className="mt-2 text-[0.78rem] text-emerald-900/90">
                    Most clients treat the studio as their quiet web partner: new pages, experiments, and refinements instead of one‑off launches.
                  </p>
                </div>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[0.8rem] font-semibold text-white shadow-md shadow-slate-900/40"
                >
                  <Link href="/#contact">Start a project conversation</Link>
                  <span className="text-xs">↗</span>
                </motion.button>
              </MotionDiv>
            </div>
          </MotionSection>

          {/* WHY WORK WITH US / STATS */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 md:grid-cols-12"
          >
            <MotionDiv
              variants={fadeInUp}
              className="relative col-span-12 md:col-span-4 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]"
              />
              <div className="relative space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                  Why this studio
                </p>
                <h2 className="text-lg font-medium text-slate-900">
                  Not just another “we build websites” page.
                </h2>
                <p className="text-[0.8rem] text-slate-700">
                  The work is narrow on purpose: service businesses, expert‑led products, and high‑trust platforms where calm clarity wins.
                </p>
              </div>
            </MotionDiv>

            <div className="col-span-12 md:col-span-8 grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <MotionDiv
                  key={item.label}
                  variants={fadeInUp}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 text-[0.8rem] shadow-md"
                >
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-600">
                      {item.label}
                    </p>
                    <p className="mt-2 text-[1.3rem] font-semibold text-emerald-500">
                      {item.value}
                    </p>
                  </div>
                  <p className="mt-2 text-[0.78rem] text-slate-600">
                    {item.note}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </MotionSection>

          {/* CORE SERVICE PACKAGES */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-4"
          >
            <MotionDiv
              variants={fadeInUp}
              className="rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                Core offers
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                Pick the lane that fits where your practice is right now.
              </p>
              <p className="mt-2 text-[0.8rem] text-slate-700">
                Every engagement starts with the same discovery sprint, then moves into whichever path matches your timeline and appetite for change.
              </p>
            </MotionDiv>

            <div className="grid gap-4 md:grid-cols-3">
              {coreServices.map((service) => (
                <MotionDiv
                  key={service.label}
                  variants={fadeInUp}
                  className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white px-5 py-5 text-[0.8rem] shadow-md"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%)]"
                  />
                  <div className="relative space-y-2">
                    <p className="inline-flex h-6 items-center rounded-full bg-slate-900 px-2 text-[0.65rem] uppercase tracking-[0.18em] text-slate-50">
                      {service.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {service.name}
                    </p>
                    <p className="text-[0.8rem] text-slate-700">
                      {service.short}
                    </p>
                    <ul className="mt-2 space-y-1 text-[0.78rem] text-slate-700">
                      <li>• {service.bullet1}</li>
                      <li>• {service.bullet2}</li>
                      <li>• {service.bullet3}</li>
                    </ul>
                  </div>
                  <Link
                    href="/#contact"
                    className="relative mt-4 inline-flex items-center gap-1 text-[0.75rem] text-emerald-600 hover:text-emerald-500"
                  >
                    Talk about this option <span>↗</span>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionSection>

          {/* ADD-ONS */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 md:grid-cols-12"
          >
            <MotionDiv
              variants={fadeInUp}
              className="relative col-span-12 md:col-span-4 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.18),_transparent_60%)]"
              />
              <div className="relative space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                  Add‑ons
                </p>
                <h2 className="text-lg font-medium text-slate-900">
                  Optional layers for when you want to go further.
                </h2>
                <p className="text-[0.8rem] text-slate-700">
                  These are small, focused projects that usually bolt onto a core engagement or a redesign you already have planned.
                </p>
              </div>
            </MotionDiv>

            <div className="col-span-12 md:col-span-8 grid gap-4">
              {addOns.map((item) => (
                <MotionDiv
                  key={item.title}
                  variants={fadeInUp}
                  className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 text-[0.8rem] shadow-md"
                >
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-emerald-600">
                      {item.tag}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.8rem] text-slate-700">
                      {item.copy}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionSection>

          {/* PROCESS + FAQ / CTA */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 md:grid-cols-12"
          >
            <MotionDiv
              variants={fadeInUp}
              className="relative col-span-12 md:col-span-5 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)]"
              />
              <div className="relative space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                  Process
                </p>
                <h2 className="text-lg font-medium text-slate-900">
                  Four steps from first call to launch.
                </h2>
                <ol className="mt-2 space-y-1 text-[0.8rem] text-slate-700">
                  <li>1. Discovery call and shared notes doc.</li>
                  <li>2. Positioning, sitemap, and low‑fi flows.</li>
                  <li>3. Interface, motion, and build in weekly slices.</li>
                  <li>4. Launch, instrumentation, and a 30‑day support window.</li>
                </ol>
              </div>
            </MotionDiv>

            <div className="col-span-12 md:col-span-7 space-y-3">
              {faqs.map((item) => (
                <MotionDiv
                  key={item.q}
                  variants={fadeInUp}
                  className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-[0.8rem] shadow-md"
                >
                  <p className="text-[0.78rem] font-semibold text-slate-900">
                    {item.q}
                  </p>
                  <p className="mt-1 text-[0.8rem] text-slate-700">
                    {item.a}
                  </p>
                </MotionDiv>
              ))}

              <MotionDiv
                variants={fadeInUp}
                className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-[0.8rem]"
              >
                <p className="text-[0.8rem] text-emerald-900">
                  If this sounds like the right way to work, the next step is a short intro call.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-1.5 text-[0.75rem] font-semibold text-white hover:bg-emerald-400"
                >
                  Book an intro slot ↗
                </Link>
              </MotionDiv>
            </div>
          </MotionSection>
        </div>
      </div>
    </main>
  );
}
