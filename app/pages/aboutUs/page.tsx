"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  fadeIn,
  staggerContainer,
} from "../../components/motion";
import { motion } from "framer-motion";

const studioPrinciples = [
  {
    label: "01",
    title: "Clarity over cleverness",
    copy: "If a visitor understands who you are, what you do, and what to do next within seconds, the design is doing its job.",
  },
  {
    label: "02",
    title: "Calm as a feature",
    copy: "Interfaces stay quiet on purpose: soft motion, generous spacing, and typography that lets serious work breathe.",
  },
  {
    label: "03",
    title: "Fewer, better projects",
    copy: "The studio works with a small number of founders and firms at a time so each site gets proper thinking, not just ticketing.",
  },
];

const team = [
  {
    name: "Shubham Godiyal",
    role: "Developer",
    bio: "Leads engineering at StudiYo Miyawaki. Turns messy ideas into clean Next.js systems that are fast, predictable, and easy to extend.",
    image: "/assets/images/team-shubham.jpg",
  },
  {
    name: "Vatsala Singh",
    role: "Content & SEO",
    bio: "Shapes story and search so every page speaks clearly to humans while quietly attracting the right queries.",
    image: "/assets/images/team-vatsala.jpg",
  },
  {
    name: "Ekumpreet Singh",
    role: "Graphic Designer",
    bio: "Builds the visual language—logomarks, palettes, and layout accents—so your brand feels cohesive across web and print.",
    image: "/assets/images/team-ekumpreet.jpg",
  },
  {
    name: "Manan Kapoor",
    role: "Content Uploader",
    bio: "Keeps launches smooth by preparing and structuring content so what goes live matches what was planned.",
    image: "/assets/images/team-manan.jpg",
  },
];

const timeline = [
  {
    year: "2022",
    title: "First legal‑tech builds",
    copy: "Early projects in healthcare and law proved that calm, product‑like sites change the quality of inbound leads.",
  },
  {
    year: "2023",
    title: "Studio gets a name",
    copy: "StudiYo Miyawaki takes shape as a small, remote‑first studio focused on high‑trust, service‑led work.",
  },
  {
    year: "2024",
    title: "Systems, not one‑offs",
    copy: "Most new work becomes multi‑site ecosystems: flagship, content hub, and internal tooling sitting on one coherent stack.",
  },
];

const faqs = [
  {
    q: "What kinds of projects does the studio say yes to?",
    a: "Expert‑led products, law and health practices, and platforms where clarity and trust matter more than hype.",
  },
  {
    q: "How many projects run at once?",
    a: "Usually 1–2 sizeable builds. That keeps decision‑makers close to the work and timelines honest.",
  },
  {
    q: "Do you work with existing brands and sites?",
    a: "Yes. A lot of engagements are redesigns or second versions, keeping what already works and tightening everything else.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-6 md:px-6 lg:px-0">
        {/* PAGE HEADER */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
              StudiYo Miyawaki
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">
              About the studio
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
          {/* HERO / INTRO CARD */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-md md:px-7 md:py-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-15 mix-blend-soft-light"
            />
            <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
              <MotionDiv
                variants={fadeInUp}
                className="md:col-span-7 space-y-3"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                  Studio in one look
                </p>
                <h2 className="text-xl font-medium text-slate-900 md:text-[1.45rem]">
                  A small studio behind calm, product‑like websites for high‑trust work.
                </h2>
                <p className="text-[0.85rem] text-slate-700">
                  StudiYo Miyawaki works with founders, law practices, and expert‑led platforms that need their site to behave like a product, not a brochure.
                </p>
                <p className="text-[0.85rem] text-slate-700">
                  Strategy, design, and engineering sit at the same table from the first call, so what launches is one coherent system instead of a stitched‑together stack.
                </p>
              </MotionDiv>

              <MotionDiv
                variants={fadeInUp}
                className="md:col-span-5"
              >
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-[0.8rem] text-emerald-900 shadow-sm">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em]">
                    Today
                  </p>
                  <p className="mt-1 font-medium">
                    20+ projects shipped • 4–8 week build window • remote‑first, India‑based.
                  </p>
                  <p className="mt-2 text-[0.78rem] text-emerald-900/90">
                    One clear owner on your side, one on ours. Clear weeks, clear deliverables, no disappearing act after launch.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </MotionSection>

          {/* PRINCIPLES */}
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
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]"
              />
              <div className="relative space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-700">
                  Principles
                </p>
                <h2 className="text-lg font-medium text-slate-900">
                  The quiet rules behind every build.
                </h2>
                <p className="text-[0.8rem] text-slate-700">
                  These are the filters used when saying yes to projects and when making tiny interface decisions on a random Tuesday.
                </p>
              </div>
            </MotionDiv>

            <div className="col-span-12 grid gap-4 md:col-span-8">
              {studioPrinciples.map((item) => (
                <MotionDiv
                  key={item.label}
                  variants={fadeInUp}
                  className="relative flex gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-4 text-[0.82rem] shadow-md"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300 bg-emerald-50 text-[0.7rem] font-medium text-emerald-700">
                    {item.label}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
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

          {/* TEAM GRID */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 px-5 py-6 text-slate-50 shadow-md md:px-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[url('/images/team-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-soft-light"
            />
            <div className="relative grid gap-5 md:grid-cols-12">
              <MotionDiv
                variants={fadeInUp}
                className="md:col-span-4 space-y-3"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-emerald-200">
                  Team
                </p>
                <h2 className="text-lg font-medium">
                  The small team behind StudiYo Miyawaki.
                </h2>
                <p className="text-[0.8rem] text-slate-100/90">
                  You always know who is designing your flows, who is writing your copy, and who to ping when something needs to move.
                </p>
                <p className="text-[0.8rem] text-slate-100/80">
                  No layers of account management. Just the people actually touching the work.
                </p>
              </MotionDiv>

              <div className="md:col-span-8 grid gap-4 md:grid-cols-2">
                {team.map((member) => (
                  <MotionDiv
                    key={member.name}
                    variants={fadeInUp}
                    className="relative flex flex-col gap-3 rounded-3xl border border-slate-700/60 bg-slate-900/60 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-2xl bg-slate-800">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{member.name}</p>
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-emerald-200">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[0.8rem] text-slate-100/90">
                      {member.bio}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionSection>

          {/* TIMELINE */}
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
                  Timeline
                </p>
                <h2 className="text-lg font-medium text-slate-900">
                  How the studio grew up.
                </h2>
                <p className="text-[0.8rem] text-slate-700">
                  A quick look at where the work started and how it shifted into today&apos;s focus on high‑trust, service‑led sites.
                </p>
              </div>
            </MotionDiv>

            <div className="col-span-12 md:col-span-8">
              <div className="relative rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md">
                <div className="absolute left-4 top-6 bottom-6 w-px bg-slate-200 md:left-6" />
                <div className="space-y-4">
                  {timeline.map((step, i) => (
                    <MotionDiv
                      key={step.year}
                      variants={fadeInUp}
                      className="relative flex gap-4 pl-10 md:pl-12"
                    >
                      <div className="absolute left-2 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white text-[0.7rem] font-semibold text-slate-700 md:left-4">
                        {step.year}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {step.title}
                        </p>
                        <p className="mt-1 text-[0.8rem] text-slate-700">
                          {step.copy}
                        </p>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </div>
          </MotionSection>

          {/* FAQ / HOW WE WORK */}
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
                  How we work
                </p>
                <h2 className="text-lg font-medium text-slate-900">
                  One shared doc, one clear rhythm, no drama.
                </h2>
                <p className="text-[0.8rem] text-slate-700">
                  Most projects run inside one shared workspace with a simple weekly cadence: what just shipped, what&apos;s next, and what decisions are needed.
                </p>
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
                  Have a project that might fit this way of working?
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-1.5 text-[0.75rem] font-semibold text-white hover:bg-emerald-400"
                >
                  Start a project ↗
                </Link>
              </MotionDiv>
            </div>
          </MotionSection>
        </div>
      </div>
    </main>
  );
}
