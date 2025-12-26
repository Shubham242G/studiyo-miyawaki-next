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

      {/* ===== HERO HEADER ===== */}
      <MotionDiv
  variants={fadeInUp}
  initial="hidden"
  animate="show"
  className="relative max-w-6xl mx-auto mb-32 rounded-3xl overflow-hidden h-[360px] mx-4 my-6"
>
  {/* Background image */}
  <div
    className="absolute inset-4 bg-cover bg-center rounded-2xl"
    style={{ backgroundImage: "url(/assets/images/aboutUs.jpg)" }}
  />

  {/* Overlay */}
  <div className="absolute inset-4 bg-black/45 rounded-2xl" />

  {/* Centered content */}
  <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">
    <p className="text-xs uppercase tracking-widest text-white">
      Studio Miyawaki
    </p>

    <h1 className="mt-2 text-3xl md:text-4xl font-medium text-white">
      About Us
    </h1>

    {/* CTA — ONLY ADDITION */}
    <div className="text-slate-900 mt-10">
  <Link
      href="/pages/contact"
      className="mt-6 rounded-full bg-white px-6 py-2.5
                 text-sm font-medium text-slate-900
                 transition hover:bg-white/90"
    >
      Contact Us
    </Link>
</div>
  </div>
</MotionDiv>



      {/* ===== END HERO HEADER ===== */}

      <div className="mx-auto max-w-6xl px-4  md:px-6">

        {/* INTRO (UNCHANGED CONTENT) */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-6"
        >
        </MotionSection>

        {/* PRINCIPLES HEADING */}
        <div className="mt-24 mb-10 text-center">
          <h2 className="text-2xl font-bold text-black">
            Our Principles
          </h2>
        </div>

        {/* PHILOSOPHY CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
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

        {/* TEAM (UNCHANGED) */}
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
