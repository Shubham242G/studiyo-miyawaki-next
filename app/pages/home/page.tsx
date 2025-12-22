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
} from "../../components/motion";
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
    image: "/assets/images/gaurav_sharma.png",
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

const processSlides = [
  {
    id: 0,
    title: "How the process feels",
    body:
      "One clear owner on your side, one on ours. You always know what week you are in, what we are working on, and what decisions are in front of you.",
  },
  {
    id: 1,
    title: "01. Sense & frame",
    body:
      "A focused discovery sprint to understand your practice, constraints, and where a sharper web experience will actually move the needle.",
  },
  {
    id: 2,
    title: "02. Structure & story",
    body:
      "Sitemaps, flows, and content prompts so no page is random. You know what belongs where, and what each section is supposed to say.",
  },
  {
    id: 3,
    title: "03. Interface & motion",
    body:
      "Interfaces, typography, and motion details that feel calm and premium, with just enough movement to guide attention—not distract from the work.",
  },
  {
    id: 4,
    title: "04. Launch & steward",
    body:
      "A measured launch and light‑touch performance + SEO stewardship so the site stays healthy after day one without heavy retainers.",
  },
];

const aboutSlides = [
  {
    id: 0,
    tagline: "Studio",
    title: "A small team, on purpose.",
    body:
      "StudiYo Miyawaki is a compact studio that prefers a few deep projects over a crowded pipeline. The same people who join your first call stay with you through launch.",
  },
  {
    id: 1,
    tagline: "Miyawaki method",
    title: "Grow like a mini‑forest, not a single tree.",
    body:
      "The studio borrows from the Miyawaki method: build dense, healthy systems, not fragile one‑offs. Sites are designed to mature over time as new pages and products are added.",
  },
  {
    id: 2,
    tagline: "Ma (間)",
    title: "Space that lets work breathe.",
    body:
      "Ma is the Japanese idea of purposeful empty space. Interfaces use it to lower anxiety, highlight what matters, and give serious decisions room to land.",
  },
  {
    id: 3,
    tagline: "Ikigai",
    title: "A site with a reason for being.",
    body:
      "Ikigai is the intersection of what you love, what you are good at, and what the world needs. Each project starts by finding that overlap and designing the site around it.",
  },
  {
    id: 4,
    tagline: "Kaizen",
    title: "Small, steady improvements by design.",
    body:
      "Kaizen is continuous improvement through tiny, consistent changes. After launch, the studio favours light recurring passes over big, stressful rebuilds every few years.",
  },
];


const teamSlides = [
  {
    id: 0,
    name: "Shubham Godiyal",
    role: "Developer",
    bio:
      "Shubham leads development at StudiYo Miyawaki, turning messy ideas into fast, maintainable Next.js builds that feel calm to use and easy to extend.",
    image: "/assets/images/team-shubham.jpg",
  },
  {
    id: 1,
    name: "Vatsala Singh",
    role: "Content & SEO",
    bio:
      "Vatsala shapes the words and search strategy so every page speaks clearly to humans while quietly pulling in the right kind of traffic from search.",
    image: "/assets/images/team-vatsala.jpg",
  },
  {
    id: 2,
    name: "Ekumpreet Singh",
    role: "Graphic Designer",
    bio:
      "Ekumpreet builds the visual language—logomarks, palettes, and layout details—so your site looks like one cohesive brand, not a stitched‑together template.",
    image: "/assets/images/team-ekumpreet.jpg",
  },
  {
    id: 3,
    name: "Manan Kapoor",
    role: "Content Uploader",
    bio:
      "Manan keeps launches smooth by preparing, structuring, and uploading content with care, so what goes live matches what was planned.",
    image: "/assets/images/team-manan.jpg",
  },
];

const metrics = [
  { label: "Projects shipped", value: "20+" },
  { label: "Typical build window", value: "4–8 weeks" },
  { label: "Lighthouse score", value: "95+" },
  { label: "Return clients", value: "92%" },
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
      ease: [0.16, 1, 0.3, 1],
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

      setDisplayValues(() =>
        metrics.map((metric) => {
          const original = metric.value;
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
    "/images/hero-card-bg.jpg",
    "/images/hero-bg-2.jpg",
    "/images/hero-bg-3.jpg",
  ];
  const heroBgIndex = useTimedCycle(heroBgImages.length, 7000);

  const { displayValues } = useScrambledMetrics();
  const processIndex = useTimedCycle(processSlides.length, 3000);
  const teamIndex = useTimedCycle(teamSlides.length, 3000);

    const [activeAboutIndex, setActiveAboutIndex] = useState(0);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  // autoplay for About / Japanese concepts
  useEffect(() => {
    const id = setInterval(() => {
      setActiveAboutIndex((prev) => (prev + 1) % aboutSlides.length);
    }, 4000); // 4s
    return () => clearInterval(id);
  }, []);

  // autoplay for Team slider
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTeamIndex((prev) => (prev + 1) % teamSlides.length);
    }, 4000); // 4s
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900">
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

      {/* Main content */}
      <motion.div
        variants={pageEnter}
        initial="hidden"
        animate="show"
        className="min-h-screen"
      >
        <div className="min-h-screen pb-20 pt-4 lg:pb-16 lg:pt-10  lg:pr-10 px-4">
          <div className="space-y-10">
            {/* HERO WITH BACKGROUND VIDEO + STRONG CTA NEAR BOTTOM */}
            <section
  id="hero"
  className="relative overflow-hidden rounded-3xl border border-slate-200 px-6 py-10 shadow-md lg:px-10 lg:py-16"
>
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

  <div className="relative z-20 grid gap-10 md:grid-cols-3 md:items-end">
    {/* Left: original content + brand title */}
    <div className="md:col-span-2 flex flex-col justify-between min-h-[280px] md:min-h-[340px] relative">
      <div>
        <MotionSpan
          variants={fadeIn}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-900"
        >
          Studio Miyawaki
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          Web • SEO • Brand
        </MotionSpan>

        {/* Brand title block (new) */}
        <div className="mt-6 space-y-2">
          <h1 className="font-playfair text-[2.1rem] md:text-[2.5rem] lg:text-[2.8rem] leading-tight text-slate-50">
            Studio{" "}
            <span className="italic text-emerald-200">
              Miyawaki
            </span>
          </h1>
          <p className="max-w-md text-[0.85rem] text-slate-100/90">
            A Japanese‑inspired web studio for practices that grow like quiet
            forests: dense with trust, calm in presentation, sharp in
            performance.
          </p>
        </div>
      </div>

      {/* CTA – unchanged */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.22 }}
        className="mt-6 lg:ml-72 flex justify-center"
      >
        <motion.button
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/95 px-6 py-2.5 text-[0.8rem] font-semibold text-slate-900 shadow-md shadow-slate-900/30"
        >
          <span>Start my project with StudiYo Miyawaki</span>
          <span className="text-xs">↗</span>
        </motion.button>
      </motion.div>
    </div>
  </div>
</section>



            {/* METRICS STRIP (unchanged) */}
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

            {/* SERVICES (unchanged) */}
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
                className="
                  relative col-span-12 md:col-span-4
                  flex flex-col justify-between
                  overflow-hidden rounded-3xl
                  border border-slate-200
                  p-5 shadow-md"
              >
                {/* Background image layer */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assets/images/image_1.jpeg')",
                  }}
                />

                {/* Optional dark overlay */}
                <div className="absolute inset-0 z-0 bg-white/60" />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                    Services
                  </p>
                  <h2 className="mt-3 text-lg font-medium text-slate-900">
                    From story to system to stewardship.
                  </h2>
                  <p className="mt-3 text-[0.8rem] text-slate-700">
                    StudiYo Miyawaki blends strategy, interface design, and
                    engineering so your website behaves like an ongoing asset,
                    not a one-off launch.
                  </p>
                </div>
              </MotionDiv>




              <div className="col-span-12 grid gap-4 md:col-span-8 md:grid-cols-2">
                {services.map((service, index) => (
                  <MotionDiv
                    key={service.title}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md ${index % 2 === 0 ? "min-h-[220px]" : "min-h-[260px]"
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

            {/* PROCESS – REPLACED WITH SLIDER + DARKER UNIQUE COLORS */}
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
                className="relative col-span-12 flex flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 shadow-md"
              >
                {/* Background gradient */}
                <div
                  className={`
        absolute inset-0 transition-all duration-500
        ${processIndex === 0
                      ? "bg-gradient-to-br from-sky-300 via-cyan-200 to-sky-400"
                      : processIndex === 1
                        ? "bg-gradient-to-br from-emerald-300 via-lime-200 to-emerald-400"
                        : processIndex === 2
                          ? "bg-gradient-to-br from-indigo-300 via-violet-200 to-indigo-400"
                          : processIndex === 3
                            ? "bg-gradient-to-br from-amber-300 via-orange-200 to-amber-400"
                            : "bg-gradient-to-br from-rose-300 via-pink-200 to-rose-400"
                    }
      `}
                />

                {/* Soft light overlay for depth */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]"
                />

                {/* Content */}
                <div className="relative z-10 p-5 md:p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                        Process
                      </p>
                      <h2 className="mt-3 text-lg font-medium text-slate-900">
                        A clear, four-step rhythm from idea to interface.
                      </h2>
                    </div>

                    {/* Indicators */}
                    <div className="flex gap-1.5 mt-1">
                      {processSlides.map((slide, idx) => (
                        <button
                          key={slide.id}
                          type="button"
                          className={`h-1.5 w-1.5 rounded-full transition ${processIndex === idx
                            ? "bg-slate-900"
                            : "bg-slate-700/70"
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Slides */}
                  <div className="relative mt-4 flex-1 min-h-[150px]">
                    {processSlides.map((slide, idx) => (
                      <motion.div
                        key={slide.id}
                        className="absolute inset-0 flex flex-col justify-center px-4 py-3"
                        animate={{
                          opacity: processIndex === idx ? 1 : 0,
                          x: processIndex === idx ? 0 : 40,
                          pointerEvents:
                            processIndex === idx ? "auto" : "none",
                        }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {slide.title}
                        </p>
                        <p className="mt-2 text-[0.8rem] text-slate-800">
                          {slide.body}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </MotionSection>



            {/* ABOUT – BIGGER, DEDICATED SECTION AFTER PROCESS */}
            <MotionSection
              id="about"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-md"
            >
             
              <p className="text-xs uppercase tracking-[0.25em] text-slate-700 m-5">
                        About Us
              </p>
            

              {/* Content */}
              <div className="relative z-10 px-5 py-8 md:px-8">
  <div className="grid gap-6 md:grid-cols-12 items-start">
    {/* Card 1: About + Japanese concepts slider */}
    <MotionDiv
      variants={fadeInUp}
      className="col-span-12 md:col-span-6 space-y-4 rounded-3xl border border-slate-700/60 bg-slate-900/80 px-5 py-5 shadow-md"
    >
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
          About & concepts
        </p>
        <h2 className="text-xl font-medium text-white">
          The thinking behind StudiYo Miyawaki.
        </h2>
      </div>

      <div className="mt-2">
        {aboutSlides.map((slide, index) =>
          index === activeAboutIndex ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-2"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-emerald-200">
                {slide.tagline}
              </p>
              <p className="text-sm font-semibold text-slate-50">
                {slide.title}
              </p>
              <p className="text-[0.85rem] text-slate-200">
                {slide.body}
              </p>
            </motion.div>
          ) : null
        )}
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {aboutSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveAboutIndex(idx)}
            className={`h-1.5 w-1.5 rounded-full transition ${
              idx === activeAboutIndex ? "bg-emerald-300" : "bg-slate-500/60"
            }`}
          />
        ))}
      </div>
    </MotionDiv>

    {/* Card 2: Team slider */}
    <MotionDiv
      variants={fadeInUp}
      className="col-span-12 md:col-span-6 rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-md"
    >
      <div className="mb-3 space-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-600">
          Team
        </p>
        <h2 className="text-sm font-semibold text-slate-900">
          The people you&apos;ll work with.
        </h2>
      </div>

      <div className="relative">
        {teamSlides.map((member, index) =>
          index === activeTeamIndex ? (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-2xl bg-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {member.name}
                  </p>
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-slate-600">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-[0.8rem] text-slate-700">
                {member.bio}
              </p>
            </motion.div>
          ) : null
        )}
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {teamSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTeamIndex(idx)}
            className={`h-1.5 w-1.5 rounded-full transition ${
              idx === activeTeamIndex ? "bg-slate-900" : "bg-slate-400/70"
            }`}
          />
        ))}
      </div>
    </MotionDiv>
  </div>
</div>

            </MotionSection>





            {/* PROJECTS (unchanged) */}
            <MotionSection
              id="projects"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-5"
            >
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
            </MotionSection>

            {/* PHILOSOPHY + TESTIMONIALS (unchanged) */}
            <MotionSection
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-5"
            >
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
                      Interfaces that feel like your practice, not the latest trend.
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
                      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md ${i === 0 ? "min-h-[210px]" : "min-h-[260px]"
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

            {/* CONTACT (unchanged) */}
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
                {/* Left: copy + trust */}
                <div className="md:w-1/3 space-y-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-700">
                    Contact
                  </p>
                  <h3 className="text-lg font-medium text-slate-900">
                    Bring us the tangled version. We&apos;ll reply with a clear, written plan.
                  </h3>
                  <p className="text-[0.8rem] text-slate-700">
                    You don&apos;t need a perfect brief. Share links, context, or even a messy doc.
                    The studio replies within 48 hours with next steps, ballpark budget, and timing.
                  </p>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-[0.75rem] text-emerald-900">
                    <p className="text-[0.7rem] uppercase tracking-[0.18em]">
                      What happens after you hit send?
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>• A real person reads your note (no bots, no ticket system).</li>
                      <li>• You get a thoughtful reply, not a template, within 1–2 business days.</li>
                      <li>• If it&apos;s not a fit, you still leave with honest pointers.</li>
                    </ul>
                  </div>

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

                {/* Right: form */}
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
                        placeholder="Share where you are, what you’re aiming for, and any deadlines or links we should see."
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-[0.8rem] font-semibold text-white shadow-sm transition hover:bg-emerald-400"
                      >
                        Send a project inquiry
                        <span>↗</span>
                      </button>
                      <div className="space-y-0.5 text-[0.7rem] text-slate-600">
                        <p>Typical reply time: within 24–48 hours on business days.</p>
                        <p className="text-slate-500">
                          Your details are used only to respond to this inquiry.
                        </p>
                      </div>
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
