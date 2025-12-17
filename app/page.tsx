"use client";

import Link from "next/link";
import Image from "next/image"; 
import {
  MotionDiv,
  MotionSection,
  MotionSpan,
  fadeInUp,
  fadeIn,
  staggerContainer,
} from "./components/motion";
import { motion, Variants, useScroll, useSpring, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Flagship marketing sites and founder hubs engineered on Next.js with performance, security, and long‑term maintainability in mind.",
    route: "/services/webDevelopment",
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO, information architecture, and on‑page systems that keep you discoverable and relevant in the right searches.",
    route: "/services/seoOptimzation",
  },
  {
    title: "Personal Branding",
    description:
      "Signature personal sites for practitioners and founders where story, visuals, and content cadence feel like one voice.",
    route: "/services/personalBranding",
  },
  {
    title: "Performance Management",
    description:
      "Ongoing audits, dashboards, and iteration cycles that keep speed, UX, and conversion sharp as your brand scales.",
    route: "/services/performanceManagement",
  },
];

const projects = [
  {
    title: "MedNLaw",
    description: "Licensing & legal solutions for medical professionals.",
    image: "/assets/images/mednlaw.png",
    link: "https://mednlaw.com/",
    tag: "Flagship • Healthcare law",
  },
  {
    title: "Unsaathi",
    description: "A supportive platform for divorce and legal guidance.",
    image: "/assets/images/Unsaathi-logo1.png",
    link: "https://unsaathi.com/",
    tag: "Support platform",
  },
  {
    title: "GSLO",
    description: "Comprehensive legal services for the modern enterprise.",
    image: "/assets/images/GSLO-black.png",
    link: "https://gslo.in/",
    tag: "Corporate law",
  },
  {
    title: "Gaurav Sharma",
    description: "A personal hub for legal expertise and thought leadership.",
    image: "/assets/images/gaurav-sharma-white.png",
    link: "https://gauravsharma.org/",
    tag: "Personal brand",
  },
];

const processSteps = [
  {
    label: "01",
    title: "Sense & frame",
    copy: "A focused discovery sprint to understand your work, constraints, and where the web can do the most good.",
  },
  {
    label: "02",
    title: "Structure & story",
    copy: "Sitemaps, flows, and content prompts so every page and section has a real job.",
  },
  {
    label: "03",
    title: "Interface & motion",
    copy: "Interfaces and micro‑interactions that feel calm, premium, and unmistakably yours.",
  },
  {
    label: "04",
    title: "Launch & steward",
    copy: "Technical launch, instrumentation, and performance cycles that keep the site sharp.",
  },
];

const metrics = [
  { label: "Projects shipped", value: "20+" },
  { label: "Typical build window", value: "4–8 weeks" },
  { label: "Lighthouse score", value: "95+" },
  { label: "Return clients", value: "70%" },
];

const testimonials = [
  {
    quote:
      "They treated our platform like a product, not a brochure. Clients arrive calmer and more informed before the first call.",
    name: "Founder, MedNLaw",
    role: "Healthcare law platform",
  },
  {
    quote:
      "Studio Miyawaki turned scattered ideas into a web presence that actually reflects how we practice law.",
    name: "Partner, GSLO",
    role: "Corporate law firm",
  },
];

// simple timed image index hook using useCycle
function useTimedCycle(length: number, delayMs: number) {
  const [index, cycle] = useCycle(
    ...Array.from({ length }, (_, i) => i)
  );

  useEffect(() => {
    const id = setInterval(() => {
      cycle();
    }, delayMs);
    return () => clearInterval(id);
  }, [cycle, delayMs]);

  return index as number;
}

// subtle page-enter wrapper
const pageEnter: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // standard easeOut curve
    },
  },
};

// scramble numbers hook for metrics
function useScrambledMetrics(durationMs = 2500, intervalMs = 80) {
  const [displayValues, setDisplayValues] = useState<string[]>(
    metrics.map((m) => m.value)
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const randomDigit = () => Math.floor(Math.random() * 10).toString();

    const id = setInterval(() => {
      const now = performance.now();
      const elapsed = now - start;
      if (elapsed >= durationMs) {
        setDisplayValues(metrics.map((m) => m.value));
        setDone(true);
        clearInterval(id);
        return;
      }

      setDisplayValues((prev) =>
        metrics.map((metric, idx) => {
          const original = metric.value;
          // only scramble numeric characters; keep +, %, dash, etc
          return original
            .split("")
            .map((ch) => (/\d/.test(ch) ? randomDigit() : ch))
            .join("");
        })
      );
    }, intervalMs);

    return () => clearInterval(id);
  }, [durationMs, intervalMs]);

  return { displayValues, done };
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  const heroBgImages = [
    "/images/hero-card-bg.jpg", // use existing hero texture
    "/images/hero-bg-2.jpg",
    "/images/hero-bg-3.jpg",
  ];
  const heroBgIndex = useTimedCycle(heroBgImages.length, 7000);

  const { displayValues } = useScrambledMetrics();

  return (
    <main className="relative min-h-screen text-slate-900 bg-white">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-40 h-[2px] w-full origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"
      />

      {/* Studio status badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        className="fixed right-5 top-5 z-40 hidden items-center gap-2 rounded-full border border-emerald-300/40 bg-white/80 px-3 py-1.5 text-[0.7rem] text-slate-900 shadow-lg backdrop-blur-xl sm:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
        </span>
        Accepting 1 new project for Q1
      </motion.div>

      {/* Fixed sidebar on desktop */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 lg:block">
  <div className="relative h-full w-full overflow-hidden">
    {/* white gradient + bg image */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90" />
    <div className="absolute inset-0 bg-[url('/images/sidebar-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-normal" />

    {/* Main sidebar content */}
    <div className="relative flex h-full flex-col px-4 py-6">
      {/* vertical brand text - inside content, no clipping */}
      <div className="flex h-full flex-col items-center justify-center">
        <p className="-rotate-90 text-[1.3rem] mb-[150px] font-black tracking-[0.6em] text-slate-900 whitespace-nowrap">
          STUDIO&nbsp;MIYAWAKI
        </p>
      </div>

      {/* Navigation + footer pinned to bottom, not overlapping */}
      <div className="pointer-events-none absolute inset-x-4 bottom-4 flex flex-col">
        {/* Middle: navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col gap-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-slate-600 pointer-events-auto"
        >
          <Link href="#hero" className="hover:text-emerald-500">
            Overview
          </Link>
          <Link href="#services" className="hover:text-emerald-500">
            Services
          </Link>
          <Link href="#process" className="hover:text-emerald-500">
            Process
          </Link>
          <Link href="#projects" className="hover:text-emerald-500">
            Studio sites
          </Link>
          <Link href="#contact" className="hover:text-emerald-500">
            Contact
          </Link>
        </motion.nav>

        {/* Bottom: brand + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-4 flex flex-col justify-end space-y-3 text-[0.65rem] text-slate-500 pointer-events-auto"
        >
          <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.18em]">
            <span>Remote‑first</span>
            <span>India‑based</span>
          </div>
          <div className="h-px w-full bg-slate-200" />
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/70 bg-emerald-500/10 px-4 py-1.5 text-[0.65rem] font-medium text-emerald-700 transition hover:bg-emerald-500/20"
          >
            Start a project
            <span className="text-xs">↗</span>
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
</aside>




      {/* Mobile sidebar (scrolls with content) */}
      <aside className="px-4 pt-6 pb-4 lg:hidden">
        <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/80 bg-emerald-500/10 text-[0.6rem] font-semibold tracking-[0.28em] text-emerald-700">
              SM
            </div>
            <div>
              <p className="text-[0.75rem] tracking-[0.25em] text-slate-900">
                STUDIYO MIYAWAKI
              </p>
              <p className="text-[0.65rem] text-slate-500">
                Web • SEO • Brand
              </p>
            </div>
          </div>
          <p className="mt-3 text-[0.7rem] text-slate-600">
            Calm, premium web experiences for law, health, and expert‑led
            practices.
          </p>
          <nav className="mt-4 flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-slate-600">
            <Link href="#hero" className="hover:text-emerald-500">
              Overview
            </Link>
            <Link href="#services" className="hover:text-emerald-500">
              Services
            </Link>
            <Link href="#process" className="hover:text-emerald-500">
              Process
            </Link>
            <Link href="#projects" className="hover:text-emerald-500">
              Studio sites
            </Link>
            <Link href="#contact" className="hover:text-emerald-500">
              Contact
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main content shifted right of fixed sidebar on desktop */}
      <motion.div
        variants={pageEnter}
        initial="hidden"
        animate="show"
        className="min-h-screen"
      >
        <div className="min-h-screen pb-20 pt-4 lg:pb-16 lg:pt-10 lg:pl-[20rem] lg:pr-10 px-4">
          <div className="space-y-10">
            {/* FULL-WIDTH HERO BAND */}
            <section
  id="hero"
  className="relative overflow-hidden rounded-3xl border border-slate-200 px-6 py-10 shadow-md lg:px-10 lg:py-16"
>
  {/* Background video */}
  <video
    className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/assets/videos/miyawaki.mp4" type="video/mp4" />
  </video>

<div className="pointer-events-none absolute inset-0 bg-black/30 z-10" />
 

  {/* Content wrapper – must sit ABOVE video and overlay */}
  <div className="relative z-20 grid gap-10 md:grid-cols-3 md:items-end">
    {/* Left: label + main copy */}
    <div className="md:col-span-2">
      <MotionSpan
        variants={fadeIn}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-900"
      >
        StudiYo Miyawaki
        <span className="h-1 w-1 rounded-full bg-emerald-400" />
        Web • SEO • Brand
      </MotionSpan>

      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="mt-6 max-w-3xl text-[2.5rem] font-semibold leading-tight text-slate-50 md:text-[3rem] lg:text-[3.25rem]"
      >
        Web services for{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
          thoughtful, high‑trust work.
        </span>
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
        className="mt-4 max-w-xl text-[0.95rem] text-slate-100/90"
      >
        Digital front doors for law practices, health platforms, and
        expert businesses that need more than another template.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.18 }}
        className="mt-7 flex flex-wrap items-center gap-3 text-xs"
      >
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-slate-950 px-5 py-2.5 text-[0.75rem] font-semibold text-white shadow-md shadow-slate-950/40"
        >
          <Link href="#services">Explore services</Link>
        </motion.button>
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-[0.75rem] text-slate-900 transition hover:border-slate-300 hover:bg-white"
        >
          <Link href="#projects">View studio websites</Link>
          <span>↗</span>
        </motion.button>
      </motion.div>

      {/* mini trust row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.5 }}
        className="mt-6 flex flex-wrap items-center gap-4 text-[0.7rem] text-slate-100/90"
      >
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Built on Next.js & Tailwind
        </span>
        <span className="hidden h-3 w-px bg-slate-200 md:block" />
        <span>One project at a time • Founder‑direct</span>
      </motion.div>
    </div>

    {/* Right: snapshot / badge cluster */}
    <div className="relative md:col-span-1 md:justify-self-end ml-10">
      {/* rotating circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { delay: 0.4, duration: 0.9, ease: "easeOut" },
        }}
        className="pointer-events-none mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-black/40 backdrop-blur-xl md:h-32 md:w-32 lg:h-36 lg:w-36"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 text-[0.55rem] tracking-[0.24em] text-slate-100"
        >
          STUDIYO • MIYAWAKI • DIGITAL •
        </motion.div>
      </motion.div>

      {/* snapshot pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-black/40 p-4 text-[0.75rem] shadow-lg backdrop-blur-xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-100">
          Snapshot
        </p>
        <p className="mt-2 text-sm font-medium text-slate-50">
          A compact studio treating every site like a product, not a brochure.
        </p>
        <p className="mt-2 text-[0.78rem] text-slate-100/90">
          Design and engineering at the same table, from first call to launch.
        </p>
      </motion.div>
    </div>
  </div>
</section>




            {/* HERO METRICS STRIP – text only + shuffle animation */}
            <MotionSection
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-4 md:grid-cols-4"
            >
              {metrics.map((metric, idx) => (
                <MotionDiv
                  key={metric.label}
                  variants={fadeInUp}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-600">
                    {metric.label}
                  </span>
                  <span className="text-[1.1rem] font-semibold text-emerald-500 tabular-nums">
                    {displayValues[idx]}
                  </span>
                </MotionDiv>
              ))}
            </MotionSection>

            {/* SERVICES */}
            <MotionSection
              id="services"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 md:grid-cols-12"
            >
              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 md:col-span-4 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-soft-light"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                    Services
                  </p>
                  <h2 className="mt-3 text-lg font-medium text-slate-900">
                    From story to system to stewardship.
                  </h2>
                  <p className="mt-3 text-[0.8rem] text-slate-700">
                    StudiYo Miyawaki blends strategy, interface design, and
                    engineering so your website behaves like an ongoing asset,
                    not a one‑off launch.
                  </p>
                </div>
              </MotionDiv>

              <div className="col-span-12 grid gap-4 md:col-span-8 md:grid-cols-2">
                {services.map((service, index) => (
                  <MotionDiv
                    key={service.title}
                    variants={fadeInUp}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md ${
                      index % 2 === 0 ? "min-h-[220px]" : "min-h-[260px]"
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%)]"
                    />
                    <div className="relative">
                      <p className="text-sm font-medium text-slate-900">
                        {service.title}
                      </p>
                      <p className="mt-2 text-[0.75rem] text-slate-700">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.route}
                      className="relative mt-4 inline-flex items-center gap-1 text-[0.7rem] text-emerald-600 hover:text-emerald-500"
                    >
                      Learn more <span>↗</span>
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </MotionSection>

            {/* PROCESS + METRICS (TIMELINE STYLE) */}
            <MotionSection
              id="process"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-4 md:grid-cols-12"
            >
              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 md:col-span-7 flex flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md md:p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[url('/images/process-bg.jpg')] bg-cover bg-center opacity-25 mix-blend-soft-light"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                    Process
                  </p>
                  <h2 className="mt-3 text-lg font-medium text-slate-900">
                    A quiet, four‑step rhythm from idea to interface.
                  </h2>
                </div>

                {/* timeline rail */}
                <div className="relative mt-4">
                  <div className="absolute left-3 top-4 bottom-4 w-px bg-slate-200 md:left-4" />
                  <div className="space-y-4 md:space-y-3">
                    {processSteps.map((step, i) => (
                      <MotionDiv
                        key={step.label}
                        variants={fadeInUp}
                        whileHover={{ y: -2 }}
                        className="relative flex gap-4 pl-9 md:pl-10"
                      >
                        <motion.div
                          className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-300/70 bg-white text-[0.65rem] text-emerald-600 md:left-1"
                          animate={{
                            backgroundColor: [
                              "rgba(255,255,255,0.9)",
                              "rgba(16,185,129,0.08)",
                              "rgba(255,255,255,0.9)",
                            ],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut",
                          }}
                        >
                          {step.label}
                        </motion.div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {step.title}
                          </p>
                          <p className="mt-1 text-[0.78rem] text-slate-700">
                            {step.copy}
                          </p>
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 md:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.18),_transparent_60%)]"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                    Numbers
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-900">
                    Calm studio, sharp outcomes.
                  </p>
                </div>
                <div className="relative mt-4 grid grid-cols-2 gap-3 text-center">
                  {metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-3 shadow-sm"
                    >
                      <p className="text-[0.65rem] text-slate-700">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-[0.95rem] font-semibold text-emerald-500">
                        {metric.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </MotionDiv>
            </MotionSection>

            {/* PROJECTS + PHILOSOPHY + TESTIMONIALS */}
            <MotionSection
              id="projects"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-5"
            >
              {/* Header + highlight project in a band */}
              <div className="grid gap-4 md:grid-cols-12">
                <MotionDiv
                  variants={fadeInUp}
                  className="relative col-span-12 md:col-span-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[url('/images/projects-bg.jpg')] bg-cover bg-center opacity-25 mix-blend-soft-light"
                  />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                      Studio websites
                    </p>
                    <h2 className="mt-3 text-lg font-medium text-slate-900">
                      A small constellation of service‑driven sites.
                    </h2>
                    <p className="mt-3 text-[0.8rem] text-slate-700">
                      From MedNLaw to Unsaathi, StudiYo Miyawaki shapes legal‑tech,
                      support platforms, and personal brands into web experiences
                      that feel composed and trustworthy.
                    </p>
                  </div>
                </MotionDiv>

                {/* Highlight project (MedNLaw) */}
                <MotionDiv
                  variants={fadeInUp}
                  className="relative col-span-12 md:col-span-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-md"
                >
                  <div className="grid gap-4 md:grid-cols-2 md:items-center">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 1.02, y: 4 }}
                        whileInView={{ scale: 1.02, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full w-full flex items-center justify-center"
                      >
                        <Image
                          src={projects[0].image}
                          alt={projects[0].title}
                          width={600}
                          height={320}
                          className="max-h-full max-w-full object-contain"
                        />
                      </motion.div>
                      <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-[0.65rem] font-medium text-white">
                        Flagship build
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {projects[0].title}
                      </p>
                      <p className="text-[0.8rem] text-slate-700">
                        Licensing & legal solutions for medical professionals,
                        redesigned around clarity and calm for anxious visitors.
                      </p>
                      <p className="text-[0.75rem] text-slate-600">
                        “They treated our platform like a product, not a brochure.”
                      </p>
                      <a
                        href={projects[0].link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[0.7rem] text-emerald-600 hover:text-emerald-500"
                      >
                        Visit website <span>↗</span>
                      </a>
                    </div>
                  </div>
                </MotionDiv>
              </div>

              {/* Remaining projects grid */}
              <div className="grid gap-4 md:grid-cols-3">
                {projects.slice(1).map((project) => (
                  <MotionDiv
                    key={project.title}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md"
                  >
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 1.02, y: 4 }}
                        whileInView={{ scale: 1.02, y: 0 }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full w-full flex items-center justify-center"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={320}
                          className="max-h-full max-w-full object-contain"
                        />
                      </motion.div>
                      <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-2 py-1 text-[0.6rem] text-white border border-white/40">
                        {project.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {project.title}
                        </p>
                        <p className="mt-1 text-[0.75rem] text-slate-700">
                          {project.description}
                        </p>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-[0.7rem] text-slate-700 group-hover:text-slate-900"
                      >
                        Visit website <span>↗</span>
                      </a>
                    </div>
                  </MotionDiv>
                ))}
              </div>

              {/* Philosophy + Testimonials */}
              <div className="grid gap-4 md:grid-cols-12">
                <MotionDiv
                  variants={fadeInUp}
                  className="relative col-span-12 md:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-md"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_60%)]"
                  />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                      Philosophy
                    </p>
                    <h2 className="mt-3 text-lg font-medium text-slate-900">
                      Interfaces that feel like your practice, not the latest
                      trend.
                    </h2>
                    <p className="mt-3 text-[0.8rem] text-slate-700">
                      StudiYo Miyawaki favors timeless layouts, readable type, and
                      motion that whispers instead of shouts. The goal is quiet
                      confidence, not visual noise.
                    </p>
                  </div>
                  <p className="relative mt-4 text-[0.78rem] text-slate-700">
                    Every decision is filtered through three lenses:{" "}
                    <span className="text-slate-900">
                      clarity, calm, and credibility
                    </span>
                    .
                  </p>
                </MotionDiv>

                <div className="col-span-12 grid gap-4 md:col-span-7 md:grid-cols-2">
                  {testimonials.map((t, i) => (
                    <MotionDiv
                      key={t.name}
                      variants={fadeInUp}
                      whileHover={{ y: -4 }}
                      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md ${
                        i === 0 ? "min-h-[210px]" : "min-h-[260px]"
                      }`}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-soft-light"
                      />
                      <p className="relative text-[0.8rem] text-slate-700">
                        “{t.quote}”
                      </p>
                      <div className="relative mt-4 text-[0.7rem] text-slate-600">
                        <p className="font-medium text-slate-900">{t.name}</p>
                        <p>{t.role}</p>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </MotionSection>

            {/* CONTACT */}
            <MotionSection
              id="contact"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-8 shadow-md md:px-8 md:py-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-soft-light"
              />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="md:w-1/3 space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                    Contact
                  </p>
                  <h3 className="text-lg font-medium text-slate-900">
                    Bring us the tangled version. We&apos;ll return with a clean
                    web shape.
                  </h3>
                  <p className="text-[0.8rem] text-slate-700">
                    Share links, context, or even a messy doc. StudiYo Miyawaki
                    replies within 48 hours with a lean, actionable path forward.
                  </p>
                  <p className="pt-1 text-[0.75rem] text-slate-600">
                    Prefer email?{" "}
                    <a
                      href="mailto:hello@studiomiyawaki.com"
                      className="text-emerald-600 hover:text-emerald-500"
                    >
                      hello@studiomiyawaki.com
                    </a>
                  </p>
                </div>

                <div className="md:w-2/3">
                  <form className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[0.75rem] text-slate-700"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="How should we address you?"
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[0.75rem] text-slate-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Where can we reply?"
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[0.75rem] text-slate-700"
                      >
                        Company / project
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Firm, platform, or idea name"
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-[0.75rem] text-slate-700"
                      >
                        Approx. budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
                      >
                        <option value="">Select a range</option>
                        <option value="1">Exploratory / phased</option>
                        <option value="2">Growth stage</option>
                        <option value="3">Established practice</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-[0.75rem] text-slate-700"
                      >
                        What would you like to build together?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Share where you are, what you&apos;re aiming for, and any links we should see."
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-[0.75rem] font-semibold text-white shadow-sm transition hover:bg-emerald-400"
                      >
                        Send request
                        <span>↗</span>
                      </button>
                      <p className="text-[0.7rem] text-slate-600">
                        Expect a thoughtful reply within 1–2 business days.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
