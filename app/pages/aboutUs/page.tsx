"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
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
    copy: "The studio works with a small number of founders and firms at a time so each site gets proper thinking.",
  },
];

const team = [
  {
    name: "Shubham Godiyal",
    role: "Developer",
    bio: "Turns complex ideas into clean, fast, and scalable Next.js systems.",
    image: "/assets/images/team-shubham.jpg",
  },
  {
    name: "Vatsala Singh",
    role: "Content & SEO",
    bio: "Shapes content and SEO so pages speak clearly to humans and search engines.",
    image: "/assets/images/team-vatsala.jpg",
  },
  {
    name: "Ekumpreet Singh",
    role: "Graphic Designer",
    bio: "Builds visual systems that feel consistent across web and brand touchpoints.",
    image: "/assets/images/team-ekumpreet.jpg",
  },
  {
    name: "Manan Kapoor",
    role: "Content Uploader",
    bio: "Keeps launches smooth by structuring and preparing content precisely.",
    image: "/assets/images/team-manan.jpg",
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % team.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? team.length - 1 : prev - 1
    );

  const member = team[activeIndex];

  return (
    <main className="min-h-screen text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-6 md:px-6 lg:px-0">
        {/* HEADER */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
              StudiYo Miyawaki
            </p>
            <h1 className="mt-2 text-2xl font-semibold">
              About the studio
            </h1>
          </div>
          <Link
            href="/"
            className="hidden rounded-full border px-3 py-1.5 text-[0.7rem] md:inline-flex"
          >
            Back to home ↗
          </Link>
        </header>

        <div className="space-y-6">
          {/* INTRO */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="rounded-3xl border bg-white px-6 py-7 shadow-md"
          >
            <MotionDiv variants={fadeInUp} className="space-y-3">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-600">
                Studio in one look
              </p>
              <h2 className="text-xl font-medium">
                A small studio building calm, product-like websites.
              </h2>
              <p className="text-[0.85rem] text-slate-700">
                We design and build intentional websites for founders and
                high-trust services.
              </p>
              <p className="text-[0.8rem] text-slate-600">
                Strategy, design, and engineering move together — so launches
                feel focused, not assembled.
              </p>
            </MotionDiv>
          </MotionSection>

          {/* PRINCIPLES */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-3"
          >
            {studioPrinciples.map((item) => (
              <MotionDiv
                key={item.label}
                variants={fadeInUp}
                className="rounded-3xl border bg-white px-5 py-4 shadow-md"
              >
                <p className="text-[0.7rem] text-emerald-600">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold">{item.title}</p>
                <p className="mt-1 text-[0.8rem] text-slate-700">
                  {item.copy}
                </p>
              </MotionDiv>
            ))}
          </MotionSection>

          {/* TEAM SLIDER */}
          <MotionSection
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl border bg-slate-900 px-6 py-7 text-white shadow-md"
          >
            <MotionDiv variants={fadeInUp} className="mb-5">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-emerald-200">
                Team
              </p>
              <h2 className="mt-2 text-lg font-medium">
                The people behind the work.
              </h2>
            </MotionDiv>

            <div className="flex justify-center">
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/70 px-6 py-6 backdrop-blur"
              >
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-3xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm font-semibold">
                    {member.name}
                  </p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-emerald-200">
                    {member.role}
                  </p>
                  <p className="mt-3 text-[0.8rem] text-slate-200">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={prev}
                    className="rounded-full border border-slate-600 px-3 py-1 text-[0.75rem]"
                  >
                    ← Prev
                  </button>
                  <span className="text-[0.7rem] text-slate-400">
                    {activeIndex + 1} / {team.length}
                  </span>
                  <button
                    onClick={next}
                    className="rounded-full border border-slate-600 px-3 py-1 text-[0.75rem]"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </div>
          </MotionSection>
        </div>
      </div>
    </main>
  );
}
