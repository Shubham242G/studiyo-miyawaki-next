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
import { motion, useScroll, useSpring, useCycle } from "framer-motion";
import { useEffect } from "react";

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
    image: "/images/MednLaw.png",
    link: "https://mednlaw.com/",
    tag: "Healthcare law",
  },
  {
    title: "Unsaathi",
    description: "A supportive platform for divorce and legal guidance.",
    image: "/images/unsaathi.png",
    link: "https://unsaathi.com/",
    tag: "Support platform",
  },
  {
    title: "GSLO",
    description: "Comprehensive legal services for the modern enterprise.",
    image: "/images/GSLO.jpg",
    link: "https://gslo.in/",
    tag: "Corporate law",
  },
  {
    title: "Gaurav Sharma",
    description: "A personal hub for legal expertise and thought leadership.",
    image: "/images/gaurav-sharma-white.png",
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  const heroBgImages = [
    "/images/hero-bg-1.jpg",
    "/images/hero-bg-2.jpg",
    "/images/hero-bg-3.jpg",
  ];
  const heroBgIndex = useTimedCycle(heroBgImages.length, 7000);

  return (
    <main className="relative min-h-screen text-white">
      <video
        className="fixed inset-0 -z-50 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/miyawaki.mp4" type="video/mp4" />
      </video>

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-40 h-[2px] w-full origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"
      />

      <div className="bg-black/40 min-h-screen">
        {/* shared page padding; sidebar + main share same x-padding and a consistent gap */}
        <div className="flex min-h-screen flex-col px-4 pb-20 pt-8 lg:flex-row lg:px-10 lg:pb-16 lg:pt-12 lg:gap-6">
          {/* SIDEBAR – compact, denser content */}
          <aside className="mb-6 flex w-full flex-none lg:mb-0 lg:w-64">
            <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-black/70 px-5 py-6">
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.35, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.16),_transparent_60%)]"
              />

              {/* Top: logo + short copy */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/80 text-[0.6rem] tracking-[0.28em]">
                    SM
                  </div>
                  <div>
                    <p className="text-[0.75rem] tracking-[0.25em] text-neutral-100">
                      STUDIYO MIYAWAKI
                    </p>
                    <p className="text-[0.65rem] text-neutral-400">
                      Web • SEO • Brand
                    </p>
                  </div>
                </div>
                <p className="text-[0.7rem] text-neutral-300">
                  Calm, premium web experiences for law, health, and expert‑led
                  practices.
                </p>
              </motion.div>

              {/* Middle: navigation */}
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="relative mt-6 flex flex-col gap-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-neutral-400"
              >
                <Link href="#hero" className="hover:text-emerald-300">
                  Overview
                </Link>
                <Link href="#services" className="hover:text-emerald-300">
                  Services
                </Link>
                <Link href="#process" className="hover:text-emerald-300">
                  Process
                </Link>
                <Link href="#projects" className="hover:text-emerald-300">
                  Studio sites
                </Link>
                <Link href="#contact" className="hover:text-emerald-300">
                  Contact
                </Link>
              </motion.nav>

              {/* Bottom: subtle brand stack so it doesn't feel empty */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="relative mt-8 flex flex-1 flex-col justify-end space-y-3 text-[0.65rem] text-neutral-400"
              >
                <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.18em]">
                  <span className="text-neutral-500">Remote‑first</span>
                  <span className="text-neutral-500">India‑based</span>
                </div>
                <div className="h-px w-full bg-white/10" />
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.65rem] font-medium text-neutral-100 transition hover:border-emerald-300/70 hover:bg-emerald-500/15"
                >
                  Start a project
                  <span className="text-xs">↗</span>
                </Link>
              </motion.div>
            </div>
          </aside>

          {/* RIGHT SIDE (no ml-60; uses flex-1 + same outer padding) */}
          <div className="flex-1 space-y-8">
            {/* HERO ROW */}
            <MotionSection
              id="hero"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid gap-4 md:grid-cols-12"
            >
              {/* Hero – with subtle bg image overlay */}
              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 overflow-hidden rounded-3xl border border-white/10 bg-black/60 px-6 py-9 md:col-span-8 lg:px-8 lg:py-12"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 mix-blend-soft-light"
                  style={{
                    backgroundImage: "url('/images/hero-card-bg.jpg')",
                  }}
                />

                <div className="relative">
                  <MotionSpan
                    variants={fadeIn}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-neutral-300"
                  >
                    StudiYo Miyawaki
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    Web • SEO • Brand
                  </MotionSpan>

                  <motion.h1
                    variants={fadeInUp}
                    className="mt-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.6rem]"
                  >
                    Web services for{" "}
                    <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                      thoughtful, high‑trust work
                    </span>
                    .
                  </motion.h1>

                  <motion.p
                    variants={fadeInUp}
                    className="mt-4 max-w-xl text-[0.85rem] text-neutral-200"
                  >
                    StudiYo Miyawaki crafts digital front doors for law
                    practices, health platforms, and expert businesses that need
                    more than another template.
                  </motion.p>

                  <motion.div
                    variants={fadeInUp}
                    className="mt-6 flex flex-wrap items-center gap-3 text-xs"
                  >
                    <Link
                      href="#services"
                      className="rounded-full bg-white px-4 py-2 text-[0.7rem] font-semibold text-black transition hover:bg-neutral-100"
                    >
                      Explore services
                    </Link>
                    <Link
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[0.7rem] text-neutral-200 transition hover:border-neutral-200 hover:bg-white/5"
                    >
                      View studio websites <span>↗</span>
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { delay: 0.5, duration: 0.9, ease: "easeOut" },
                  }}
                  className="pointer-events-none absolute -right-8 bottom-4 hidden h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-black/60 md:flex lg:h-40 lg:w-40"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-[0.55rem] tracking-[0.24em] text-neutral-200"
                  >
                    STUDIYO • MIYAWAKI • DIGITAL •
                  </motion.div>
                </motion.div>
              </MotionDiv>

              {/* Snapshot card with sliding background images */}
              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5 md:col-span-4"
              >
                {heroBgImages.map((src, i) => (
                  <motion.div
                    key={src}
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${src}')` }}
                    animate={{ opacity: heroBgIndex === i ? 0.6 : 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                ))}

                <div className="relative space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Snapshot
                  </p>
                  <p className="text-sm font-medium">
                    Built around deep conversations and precise execution.
                  </p>
                  <p className="text-[0.78rem] text-neutral-200">
                    A compact team of designers and engineers working directly
                    with founders—no noisy handoffs, no layers of project
                    management.
                  </p>
                </div>
                <div className="relative mt-4 flex flex-wrap gap-3 text-[0.7rem] text-neutral-200">
                  <span className="rounded-full bg-black/70 px-3 py-1">
                    Remote‑first
                  </span>
                  <span className="rounded-full bg-black/70 px-3 py-1">
                    One project at a time
                  </span>
                </div>
              </MotionDiv>
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
                className="relative col-span-12 md:col-span-4 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-soft-light"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Services
                  </p>
                  <h2 className="mt-3 text-lg font-medium">
                    From story to system to stewardship.
                  </h2>
                  <p className="mt-3 text-[0.8rem] text-neutral-200">
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
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5 ${
                      index % 2 === 0 ? "min-h-[220px]" : "min-h-[260px]"
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)] opacity-80"
                    />
                    <div className="relative">
                      <p className="text-sm font-medium text-neutral-50">
                        {service.title}
                      </p>
                      <p className="mt-2 text-[0.75rem] text-neutral-200">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.route}
                      className="relative mt-4 inline-flex items-center gap-1 text-[0.7rem] text-emerald-300 hover:text-emerald-200"
                    >
                      Learn more <span>↗</span>
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </MotionSection>

            {/* PROCESS + METRICS */}
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
                className="relative col-span-12 md:col-span-7 flex flex-col gap-3 overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5 md:p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[url('/images/process-bg.jpg')] bg-cover bg-center opacity-35 mix-blend-soft-light"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Process
                  </p>
                  <h2 className="mt-3 text-lg font-medium">
                    A quiet, four‑step rhythm from idea to interface.
                  </h2>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {processSteps.map((step, i) => (
                      <MotionDiv
                        key={step.label}
                        variants={fadeInUp}
                        whileHover={{ y: -3, rotate: -0.25 }}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-4"
                      >
                        <motion.div
                          aria-hidden
                          initial={{ opacity: 0, scale: 0.6 }}
                          whileInView={{ opacity: 0.35, scale: 1 }}
                          transition={{ duration: 0.7, delay: 0.06 * i }}
                          viewport={{ once: true }}
                          className="pointer-events-none absolute -right-6 -top-8 h-16 w-16 rounded-full bg-emerald-500/25 blur-2xl"
                        />
                        <p className="text-[0.7rem] text-neutral-400">
                          {step.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-neutral-50">
                          {step.title}
                        </p>
                        <p className="mt-2 text-[0.75rem] text-neutral-200">
                          {step.copy}
                        </p>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 md:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-5 py-5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.28),_transparent_60%)]"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Numbers
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Calm studio, sharp outcomes.
                  </p>
                </div>
                <div className="relative mt-4 grid grid-cols-2 gap-3 text-center">
                  {metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="rounded-2xl border border-white/10 bg-black/60 px-3 py-3"
                    >
                      <p className="text-[0.65rem] text-neutral-400">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-[0.95rem] font-semibold text-emerald-300">
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
              className="grid gap-4 md:grid-cols-12"
            >
              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 md:col-span-4 overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[url('/images/projects-bg.jpg')] bg-cover bg-center opacity-35 mix-blend-soft-light"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Studio websites
                  </p>
                  <h2 className="mt-3 text-lg font-medium">
                    A small constellation of service‑driven sites.
                  </h2>
                  <p className="mt-3 text-[0.8rem] text-neutral-200">
                    From MedNLaw to Unsaathi, StudiYo Miyawaki shapes legal‑tech,
                    support platforms, and personal brands into web experiences
                    that feel composed and trustworthy.
                  </p>
                </div>
              </MotionDiv>

              <div className="col-span-12 grid gap-4 md:col-span-8 md:grid-cols-2">
                {projects.map((project, index) => (
                  <MotionDiv
                    key={project.title}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/70 ${
                      index % 2 === 0 ? "min-h-[260px]" : "min-h-[220px]"
                    }`}
                  >
                    <div className="relative h-32 w-full overflow-hidden bg-neutral-900/80">
                      <motion.div
                        initial={{ scale: 1.03, y: 8 }}
                        whileInView={{ scale: 1.02, y: 0 }}
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full w-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={320}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-[0.6rem] text-neutral-200">
                        {project.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <p className="text-sm font-medium text-neutral-50">
                          {project.title}
                        </p>
                        <p className="mt-1 text-[0.75rem] text-neutral-200">
                          {project.description}
                        </p>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-[0.7rem] text-neutral-300 group-hover:text-white"
                      >
                        Visit website <span>↗</span>
                      </a>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionSection>

            <MotionSection
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-4 md:grid-cols-12"
            >
              <MotionDiv
                variants={fadeInUp}
                className="relative col-span-12 md:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/70 px-5 py-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_60%)]"
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Philosophy
                  </p>
                  <h2 className="mt-3 text-lg font-medium">
                    Interfaces that feel like your practice, not the latest
                    trend.
                  </h2>
                  <p className="mt-3 text-[0.8rem] text-neutral-200">
                    StudiYo Miyawaki favors timeless layouts, readable type, and
                    motion that whispers instead of shouts. The goal is quiet
                    confidence, not visual noise.
                  </p>
                </div>
                <p className="relative mt-4 text-[0.78rem] text-neutral-200">
                  Every decision is filtered through three lenses:{" "}
                  <span className="text-neutral-50">
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
                    className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/70 p-5 ${
                      i === 0 ? "min-h-[210px]" : "min-h-[260px]"
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center opacity-25 mix-blend-soft-light"
                    />
                    <p className="relative text-[0.8rem] text-neutral-200">
                      “{t.quote}”
                    </p>
                    <div className="relative mt-4 text-[0.7rem] text-neutral-400">
                      <p className="font-medium text-neutral-50">{t.name}</p>
                      <p>{t.role}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionSection>

            {/* FULL‑WIDTH CONTACT FORM (right area) */}
            <MotionSection
              id="contact"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/75 px-5 py-8 md:px-8 md:py-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-soft-light"
              />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="md:w-1/3 space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-300">
                    Contact
                  </p>
                  <h3 className="text-lg font-medium">
                    Bring us the tangled version. We&apos;ll return with a clean
                    web shape.
                  </h3>
                  <p className="text-[0.8rem] text-neutral-200">
                    Share links, context, or even a messy doc. StudiYo Miyawaki
                    replies within 48 hours with a lean, actionable path
                    forward.
                  </p>
                  <p className="pt-1 text-[0.75rem] text-neutral-400">
                    Prefer email?{" "}
                    <a
                      href="mailto:hello@studiomiyawaki.com"
                      className="text-emerald-300 hover:text-emerald-200"
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
                        className="block text-[0.75rem] text-neutral-200"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="How should we address you?"
                        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-emerald-400/80 focus:bg-black/80"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[0.75rem] text-neutral-200"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Where can we reply?"
                        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-emerald-400/80 focus:bg-black/80"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[0.75rem] text-neutral-200"
                      >
                        Company / project
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Firm, platform, or idea name"
                        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-emerald-400/80 focus:bg-black/80"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-[0.75rem] text-neutral-200"
                      >
                        Approx. budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-emerald-400/80 focus:bg-black/80"
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
                        className="block text-[0.75rem] text-neutral-200"
                      >
                        What would you like to build together?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Share where you are, what you&apos;re aiming for, and any links we should see."
                        className="mt-2 w-full rounded-2xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-emerald-400/80 focus:bg-black/80"
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[0.75rem] font-semibold text-black shadow-sm transition hover:bg-neutral-100"
                      >
                        Send request
                        <span>↗</span>
                      </button>
                      <p className="text-[0.7rem] text-neutral-400">
                        Expect a thoughtful reply within 1–2 business days.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </div>
    </main>
  );
}
