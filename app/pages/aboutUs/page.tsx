"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MotionDiv,
  MotionSection,
  fadeInUp,
  staggerContainer,
} from "../../components/motion";
import { ContactFormSection } from "../../components/contactForm";

const team = [
  {
    name: "Vatsala Singh",
    role: "Project Manager",
    bio: "Shapes language and search foundations clearly for humans and search engines.",
    image: "/assets/images/vatsala.png",
  },
  {
    name: "Shubham Godiyal",
    role: "Web Developer",
    bio: "Builds fast, maintainable web systems with clarity and performance.",
    image: "/assets/images/shubham.png",
  },
  {
    name: "Ekumpreet Singh",
    role: "Graphic Designer",
    bio: "Designs intentional visual systems across web and brand touchpoints.",
    image: "/assets/images/ekam.png",
  },
  {
    name: "Manan Kapoor",
    role: "Social Media Analyst",
    bio: "Keeps launches smooth by structuring, preparing, and validating content with precision.",
    image: "/assets/images/manan.png",
  },
];

const philosophyCards = [
  {
    kanji: "匠",
    title: "Takumi - Craftsmanship",
    description: "Every detail is crafted with precision and care.",
  },
  {
    kanji: "简",
    title: "Kanso - Simplicity",
    description: "Eliminate the unnecessary, reveal the essential.",
  },
  {
    kanji: "和",
    title: "Wa - Harmony",
    description: "Balance aesthetics, functionality, and purpose elegantly.",
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

      {/* ===== HEADER BANNER (ONLY CHANGE) ===== */}
      <MotionDiv
  variants={fadeInUp}
  initial="hidden"
  animate="show"
  className="relative w-full h-[240px] md:h-[300px] mx-4 my-6 rounded-2xl overflow-hidden shadow-lg"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center transform scale-105"
    style={{ backgroundImage: "url(/assets/images/aboutUs.jpg)" }}
  />

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 h-full px-6 flex items-center justify-between">
    <div>
      <p className="text-xs uppercase tracking-widest text-white/80">
        About
      </p>
      <h1 className="mt-3 text-3xl font-medium text-white md:text-4xl">
        A small studio, by choice.
      </h1>
    </div>

    <Link
      href="/"
      className="hidden text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white md:block"
    >
      Back to home ↗
    </Link>
  </div>
</MotionDiv>
      {/* ===== END HEADER BANNER ===== */}

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">

        {/* INTRO */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-6"
        >
          <MotionDiv variants={fadeInUp}>
            <p className="text-sm leading-relaxed text-slate-700">
              StudiYo Miyawaki builds calm, product-like websites for founders and
              service-led teams who value clarity.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <p className="text-sm leading-relaxed text-slate-700">
              We work at the intersection of strategy, design, and engineering —
              launching sites that feel intentional and coherent.
            </p>
          </MotionDiv>
        </MotionSection>

        {/* PHILOSOPHY CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {philosophyCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-3xl border border-white/20 shadow-lg text-center 
                         bg-gradient-to-br from-[#b36666]/15 via-transparent to-transparent transition-all duration-300"
            >
              <div className="text-6xl font-light text-stone-400 mb-4 group-hover:text-[#b36666]/70 transition-colors duration-300">
                {card.kanji}
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">
                {card.title}
              </h3>
              <p className="text-stone-600 text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* TEAM */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-32 grid items-center gap-20 md:grid-cols-12"
        >
          <MotionDiv variants={fadeInUp} className="md:col-span-7">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-slate-200 md:h-[520px]">
              <motion.img
                key={member.image}
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="md:col-span-5 space-y-6">
            <div className="space-y-3 max-w-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Team
              </p>
              <h2 className="text-2xl font-medium">
                The people behind the work.
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">
                A small, senior-leaning team focused on clarity and quality.
              </p>
            </div>

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <p className="text-sm font-semibold">{member.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {member.role}
              </p>
              <p className="text-[0.95rem] leading-relaxed text-slate-700">
                {member.bio}
              </p>
            </motion.div>

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

        {/* CONTACT */}
        <div className="mt-32">
          <ContactFormSection animated />
        </div>

      </div>
    </main>
  );
}
