"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from "../../components/motion";

const principles = [
  {
    title: "Clarity over cleverness",
    body: "If someone cannot understand what you do within seconds, the problem is not the user. Clear structure, honest language, and obvious next steps come before visual tricks.",
  },
  {
    title: "Calm is not emptiness",
    body: "Quiet interfaces create confidence. We use spacing, typography, and restrained motion so the work feels considered — not loud or salesy.",
  },
  {
    title: "Small teams, serious work",
    body: "We take on fewer projects so thinking doesn’t get diluted. The same people stay involved from first call to post-launch.",
  },
];

const team = [
  {
    name: "Shubham Godiyal",
    role: "Development & Architecture",
    bio: "Builds fast, maintainable Next.js systems with a focus on performance, scalability, and long-term clarity.",
    image: "/assets/images/shubham.jpg",
  },
  {
    name: "Vatsala Singh",
    role: "Content & SEO",
    bio: "Shapes structure, language, and search foundations so pages speak clearly to both humans and search engines.",
    image: "/assets/images/vatsala.jpg",
  },
  {
    name: "Ekumpreet Singh",
    role: "Visual Design",
    bio: "Designs visual systems that feel intentional across web, brand, and future product touchpoints.",
    image: "/assets/images/ekam.jpg",
  },
  {
    name: "Manan Kapoor",
    role: "Operations & Publishing",
    bio: "Keeps launches smooth by structuring, preparing, and validating content with precision.",
    image: "/assets/images/manan.jpg",
  },
];

export default function AboutPage() {

  const [active, setActive] = useState(0);
  const member = team[active];

  useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % team.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
  
  return (
    <main className="relative min-h-screen text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-10 md:px-6">
        {/* HEADER */}
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              About
            </p>
            <h1 className="mt-3 text-3xl font-medium md:text-4xl">
              A small studio, by choice.
            </h1>
          </div>
          <Link
            href="/"
            className="hidden text-xs uppercase tracking-[0.25em] text-slate-500 hover:text-slate-900 md:block"
          >
            Back to home ↗
          </Link>
        </MotionDiv>

        {/* INTRO */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-6"
        >
          <MotionDiv variants={fadeInUp}>
            <p className="text-sm leading-relaxed text-slate-700">
              StudiYo Miyawaki designs and builds calm, product-like websites for
              founders, experts, and service-led teams who value clarity over
              noise.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <p className="text-sm leading-relaxed text-slate-700">
              We work at the intersection of strategy, design, and engineering —
              so what gets launched feels intentional, coherent, and easy to
              evolve as the business grows.
            </p>
          </MotionDiv>
        </MotionSection>

        {/* PRINCIPLES */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 grid gap-10 md:grid-cols-3"
        >
          {principles.map((item) => (
            <MotionDiv
              key={item.title}
              variants={fadeInUp}
              className="space-y-3"
            >
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-[0.9rem] leading-relaxed text-slate-700">
                {item.body}
              </p>
            </MotionDiv>
          ))}
        </MotionSection>

        {/* TEAM */}
        <MotionSection
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  className="mt-32 grid items-center gap-20 md:grid-cols-12"
>
  {/* LEFT — LARGE IMAGE */}
  <MotionDiv
    variants={fadeInUp}
    className="md:col-span-7"
  >
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-slate-200 md:h-[520px]">
      <motion.img
        key={member.image}
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </MotionDiv>

  {/* RIGHT — TEXT PANEL */}
  <MotionDiv
    variants={fadeInUp}
    className="md:col-span-5 space-y-6"
  >
    <div className="space-y-3 max-w-sm">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
        Team
      </p>
      <h2 className="text-2xl font-medium">
        The people behind the work.
      </h2>
      <p className="text-sm leading-relaxed text-slate-700">
        A small, senior-leaning team focused on clarity, quality, and long-term
        thinking.
      </p>
    </div>

    {/* SLIDING BIO */}
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-3"
    >
      <p className="text-sm font-semibold">
        {member.name}
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
        {member.role}
      </p>
      <p className="text-[0.95rem] leading-relaxed text-slate-700">
        {member.bio}
      </p>
    </motion.div>

    {/* NAV DOTS */}
    <div className="flex gap-2 pt-4">
      {team.map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
            i === active
              ? "bg-slate-900"
              : "bg-slate-300 hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  </MotionDiv>
</MotionSection>

      </div>
    </main>
  );
}
