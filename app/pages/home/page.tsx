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
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useCycle,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ContactFormSection } from "@/app/components/contactForm";

interface Project {
  title: string;
  description: string;
  gif: string;
  link: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: "MedNLaw",
    description: "Licensing & legal solutions for medical professionals.",
    gif: "/assets/videos/mednlife.mp4",
    link: "https://mednlaw.com/",
    tag: "Flagship • Healthcare law",
  },
  {
    title: "Unsaathi",
    description: "A supportive platform for divorce and legal guidance.",
    gif: "/assets/videos/unsaathi.mp4",
    link: "https://unsaathi.com/",
    tag: "Support platform",
  },
  {
    title: "GSLO",
    description: "Comprehensive legal services for the modern enterprise.",
    gif: "/assets/videos/gslo_web.mp4",
    link: "https://gslo.in/",
    tag: "Corporate law",
  },
  {
    title: "Gaurav Sharma",
    description:
      "A personal hub for legal expertise and thought leadership.",
    gif: "/assets/videos/gaurav_sharma.mp4",
    link: "https://gauravsharma.org/",
    tag: "Personal brand",
  },
];

const processSlides = [
  {
    id: 0,
    title: "How the process feels",
    body: "One clear owner on your side, one on ours. You always know what week you are in, what we are working on, and what decisions are in front of you.",
  },
  {
    id: 1,
    title: "01. Sense & frame",
    body: "A focused discovery sprint to understand your practice, constraints, and where a sharper web experience will actually move the needle.",
  },
  {
    id: 2,
    title: "02. Structure & story",
    body: "Sitemaps, flows, and content prompts so no page is random. You know what belongs where, and what each section is supposed to say.",
  },
  {
    id: 3,
    title: "03. Interface & motion",
    body: "Interfaces, typography, and motion details that feel calm and premium, with just enough movement to guide attention—not distract from the work.",
  },
  {
    id: 4,
    title: "04. Launch & steward",
    body: "A measured launch and light‑touch performance + SEO stewardship so the site stays healthy after day one without heavy retainers.",
  },
];

const testimonials = [
  {
    name: "Adv. Rohit Malhotra",
    role: "Litigation Partner, GSLO",
    quote:
      "They understood litigation workflows deeply. The site feels calm, credible, and purpose-built for serious clients.",
  },
  {
    name: "Dr. Ananya Verma",
    role: "Personal Branding",
    quote:
      "The redesign removed anxiety from the experience. Patients and doctors both trust the platform more now.",
  },
  {
    name: "Kunal Sharma",
    role: "Startup Consultant",
    quote:
      "Nothing flashy, nothing forced. Just clarity. Exactly what service businesses need.",
  },
  {
    name: "Neha Kapoor",
    role: "Legal Ops Manager",
    quote:
      "Every screen felt intentional. It didn't feel like a template — it felt like us.",
  },
  {
    name: "Gaurav Sharma",
    role: "Founder, Unsaathi",
    quote: "They think like product people, not designers chasing trends.",
  },
];

const aboutSlides = [
  {
    id: 0,
    tagline: "Studio",
    title: "A small team, on purpose.",
    body: "Studio Miyawaki is a compact studio that prefers a few deep projects over a crowded pipeline. The same people who join your first call stay with you through launch.",
  },
  {
    id: 1,
    tagline: "Miyawaki method",
    title: "Grow like a mini‑forest, not a single tree.",
    body: "The studio borrows from the Miyawaki method: build dense, healthy systems, not fragile one‑offs. Sites are designed to mature over time as new pages and products are added.",
  },
  {
    id: 2,
    tagline: "Ma (間)",
    title: "Space that lets work breathe.",
    body: "Ma is the Japanese idea of purposeful empty space. Interfaces use it to lower anxiety, highlight what matters, and give serious decisions room to land.",
  },
  {
    id: 3,
    tagline: "Ikigai",
    title: "A site with a reason for being.",
    body: "Ikigai is the intersection of what you love, what you are good at, and what the world needs. Each project starts by finding that overlap and designing the site around it.",
  },
  {
    id: 4,
    tagline: "Kaizen",
    title: "Small, steady improvements by design.",
    body: "Kaizen is continuous improvement through tiny, consistent changes. After launch, the studio favours light recurring passes over big, stressful rebuilds every few years.",
  },
];

const teamSlides = [
  {
    id: 0,
    name: "Vatsala Singh",
    role: "Project Manager",
    bio: "Vatsala shapes the words and search strategy so every page speaks clearly to humans while quietly pulling in the right kind of traffic from search.",
    image: "/assets/images/vatsala.png",
  },
  {
    id: 1,
    name: "Shubham Godiyal",
    role: "Web Developer",
    bio: "Shubham leads development at Studio Miyawaki, turning messy ideas into fast, maintainable Next.js builds that feel calm to use and easy to extend.",
    image: "/assets/images/shubham.png",
  },
  {
    id: 2,
    name: "Ekumpreet Singh",
    role: "Graphic Designer",
    bio: "Ekumpreet builds the visual language—logomarks, palettes, and layout details—so your site looks like one cohesive brand, not a stitched‑together template.",
    image: "/assets/images/ekam.png",
  },
];

const metrics = [
  { label: "Projects shipped", value: "20+" },
  { label: "Typical build", value: "4–8 weeks" },
  { label: "Lighthouse score", value: "95+" },
  { label: "Return clients", value: "92%" },
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
    const randomDigit = () =>
      Math.floor(Math.random() * 10).toString();

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

  const [activeProject, setActiveProject] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

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
      setActiveAboutIndex(
        (prev) => (prev + 1) % aboutSlides.length
      );
    }, 4000); // 4s
    return () => clearInterval(id);
  }, []);

  // autoplay for Team slider
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTeamIndex(
        (prev) => (prev + 1) % teamSlides.length
      );
    }, 4000); // 4s
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goNextProject = () => {
    setActiveProject(
      (prev) => (prev + 1) % projects.length
    );
  };

  const goPrevProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 text-slate-900 relative overflow-hidden">
  {/* Attracting gradient background for main sections */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-400/10 to-slate-900/5" />
  
  {/* Scroll progress */}
  <motion.div
    style={{ scaleX }}
    className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"
  />

  {/* Studio status badge */}
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.9,
      duration: 0.6,
      ease: "easeOut",
    }}
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
    className="min-h-screen relative z-20"
  >
    <div className="min-h-screen pb-20 pt-4 lg:pb-16 lg:pt-10 lg:pr-10 px-4 relative z-20">
      <div className="space-y-10 relative z-20">
        
        {/* HERO - with gradient enhancement */}
        <section
          id="hero"
          className="relative overflow-hidden rounded-3xl border border-slate-200/50 px-6 py-10 shadow-2xl lg:px-10 lg:py-16 bg-gradient-to-br from-white/80 via-emerald-50/50 to-teal-50/30 backdrop-blur-sm"
        >
          <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/assets/videos/miyawaki.mp4"
              type="video/mp4"
            />
          </video>

          {/* Enhanced gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-slate-900/20 to-teal-500/20 z-10" />

          <div className="relative z-20 min-h-[280px] md:min-h-[340px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] flex flex-col items-center text-center space-y-5">
              <h1 className="uppercase font-semibold tracking-[0.26em] text-white text-[2.9rem] md:text-[3.4rem] lg:text-[3.9rem] leading-tight drop-shadow-2xl">
                Studio Miyawaki
              </h1>

              <p className="italic uppercase tracking-[0.26em] font-semibold text-white text-[0.85rem] md:text-[0.9rem] drop-shadow-lg">
                Planting Ideas, Growing Impact
              </p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.22 }}
              >
                <Link href="/pages/contact">
                  <motion.div
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-12 py-2.5 text-[0.8rem] font-semibold text-white shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300"
                  >
                    <span>Start your project</span>
                    <span className="text-xs">↗</span>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* METRICS STRIP - Enhanced gradient */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-4 md:grid-cols-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-slate-100/30 rounded-3xl p-8 backdrop-blur-sm border border-emerald-200/30 shadow-xl"
        >
          {metrics.map((metric, idx) => (
            <MotionDiv
              key={metric.label}
              variants={fadeInUp}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex flex-col gap-1 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 hover:border-emerald-300/50 shadow-lg hover:shadow-emerald-200/30 transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-[0.16em] text-slate-700 font-semibold">
                {metric.label}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-slate-900 tabular-nums tracking-tight bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent">
                {displayValues[idx]}
              </span>
            </MotionDiv>
          ))}
        </MotionSection>

        {/* SERVICES - Enhanced gradient background */}
        <MotionSection
          id="services"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-12 bg-gradient-to-br from-slate-50/70 via-emerald-50/50 to-teal-50/30 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-emerald-200/20 shadow-2xl"
        >
          {/* LEFT – SERVICES INTRO */}
          <MotionDiv
            variants={fadeInUp}
            className="relative col-span-12 md:col-span-4 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/50 p-8 shadow-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 backdrop-blur-sm"
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage: "url('/assets/images/aboutUs.webp')",
              }}
            />

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-emerald-500/40 via-slate-900/30 to-teal-500/40" />

            <div className="relative z-20">
              <p className="text-xs uppercase tracking-[0.25em] text-white/90 font-semibold">
                Services
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white drop-shadow-lg">
                From story to system to stewardship.
              </h2>
              <p className="mt-3 text-sm text-white/95 leading-relaxed">
                We design and build digital systems that stay relevant — strategically planned, carefully engineered, and continuously improved over time.
              </p>
            </div>

            <div className="relative z-20 mt-6">
              <Link href="/pages/contact">
                <motion.button
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 w-full rounded-2xl bg-white/95 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl hover:shadow-emerald-300/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Connect with us</span>
                  <span className="text-xs">↗</span>
                </motion.button>
              </Link>
            </div>
          </MotionDiv>

          {/* RIGHT – SERVICE CARDS */}
          <div className="col-span-12 grid gap-6 md:col-span-8 md:grid-cols-2">
            {[
              {
                title: "Web Development",
                description: "We design and build flagship marketing websites and founder hubs using Next.js, focused on speed, security, and long-term scalability.",
                route: "/services/webDevelopment",
              },
              {
                title: "SEO Optimization",
                description: "Our SEO approach goes beyond keywords. We implement technical SEO foundations, smart information architecture, and on-page optimization.",
                route: "/services/seoOptimzation",
              },
              {
                title: "Social media handling",
                description: "Signature personal websites for founders and professionals who want trust, clarity, and authority in their digital presence.",
                route: "/services/personalBranding",
              },
              {
                title: "Performance Marketing",
                description: "Through ongoing audits, analytics dashboards, and structured iteration cycles, we refine speed, UX, accessibility, and conversion.",
                route: "/services/performanceManagement",
              },
            ].map((service, index) => (
              <MotionDiv
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/50 bg-white/90 p-8 shadow-xl hover:shadow-emerald-300/30 hover:border-emerald-300/50 transition-all duration-400 backdrop-blur-sm hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
                <div className="relative">
                  <p className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{service.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {service.description}
                  </p>
                </div>
              </MotionDiv>
            ))}

            {/* 5th service - FULL WIDTH */}
            <MotionDiv
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="md:col-span-2 col-span-full relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-emerald-200/50 bg-white/90 p-10 shadow-2xl hover:shadow-emerald-400/40 hover:border-emerald-400/70 transition-all duration-400 backdrop-blur-sm hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-transparent" />
              <div className="relative">
                <p className="text-2xl font-bold text-slate-900 mb-4">Podcast production</p>
                <p className="text-sm leading-relaxed text-slate-700">
                  Signature podcast systems for creators and professionals who want to build massive reach, drive deep engagement, and establish undeniable authority.
                </p>
              </div>
            </MotionDiv>
          </div>
        </MotionSection>

        {/* ABOUT SECTION - Gradient enhancement */}
        <MotionSection
          id="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-slate-200/50 px-6 py-12 shadow-2xl md:px-12 md:py-16 bg-gradient-to-br from-white/80 via-emerald-50/40 to-teal-50/30 backdrop-blur-sm"
        >
          <p className="mb-10 text-sm uppercase tracking-[0.4em] font-semibold text-emerald-700 text-center">
            About Us
          </p>

          <div className="grid items-stretch gap-8 md:grid-cols-12">
            {/* LEFT — CARD */}
            <MotionDiv
              variants={fadeInUp}
              className="col-span-12 md:col-span-4 h-full rounded-3xl border border-slate-200/50 bg-white/90 px-8 py-8 shadow-xl flex flex-col relative overflow-hidden backdrop-blur-sm hover:shadow-emerald-300/30 transition-all duration-400"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5" />
              
              <div className="relative z-10 space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">
                  About & concepts
                </p>
                <h2 className="text-xl font-bold text-slate-900">
                  The thinking behind Studio Miyawaki.
                </h2>
              </div>

              <div className="mt-6 flex-1 min-h-[180px] relative z-10">
                {aboutSlides.map((slide, index) =>
                  index === activeAboutIndex ? (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="space-y-3"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-emerald-500 font-semibold">
                        {slide.tagline}
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        {slide.title}
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {slide.body}
                      </p>
                    </motion.div>
                  ) : null
                )}
              </div>

              <div className="mt-6 flex justify-center gap-2 relative z-10">
                {aboutSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAboutIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 shadow-md ${
                      idx === activeAboutIndex
                        ? "bg-emerald-500 scale-125 shadow-emerald-500/50"
                        : "bg-slate-300/70 hover:bg-emerald-400 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </MotionDiv>

            {/* RIGHT — TEAM CARD */}
            <MotionDiv
              variants={fadeInUp}
              className="col-span-12 md:col-span-8 h-full flex flex-col rounded-3xl border border-slate-200/50 bg-white/90 px-10 py-10 shadow-xl backdrop-blur-sm hover:shadow-emerald-300/30 transition-all duration-400"
            >
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.4em] font-semibold text-teal-600">
                  Our team
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  The people you'll work with.
                </h2>
              </div>

              <div className="relative flex-1 min-h-[450px]">
                {teamSlides.map((member, index) =>
                  index === activeTeamIndex ? (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex h-full flex-col items-center justify-center text-center"
                    >
                      <div className="relative mb-8 w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 hover:scale-105 transition-all duration-500">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 768px) 60vw, 100vw"
                          className="object-contain hover:scale-110 transition-transform duration-500"
                          priority
                        />
                      </div>

                      <p className="text-2xl font-bold text-slate-900 mb-3">
                        {member.name}
                      </p>
                      <p className="text-lg font-semibold text-teal-600 uppercase tracking-[0.25em]">
                        {member.role}
                      </p>
                    </motion.div>
                  ) : null
                )}
              </div>

              <div className="mt-8 flex justify-center gap-3">
                {teamSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTeamIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 shadow-lg ${
                      idx === activeTeamIndex
                        ? "bg-teal-500 scale-125 shadow-teal-500/50"
                        : "bg-slate-300/70 hover:bg-teal-400 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </MotionDiv>
          </div>
        </MotionSection>

        {/* PROJECTS - Gradient showcase */}
        <section className="relative flex items-center gap-8 bg-gradient-to-br from-slate-50/80 via-emerald-50/30 to-teal-50/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-200/30 shadow-xl">
          <div className="flex h-[400px] items-center min-w-[200px]">
            <span
              className="select-none text-xl font-semibold uppercase tracking-[0.4em] text-emerald-600 bg-gradient-to-t from-emerald-600 to-transparent bg-clip-text"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Project highlights
            </span>
          </div>

          <div className="relative flex-1 h-[400px] overflow-hidden rounded-3xl border-2 border-white/60 shadow-2xl bg-gradient-to-br from-white/90 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5" />

            <button
              onClick={goPrevProject}
              aria-label="Previous project"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-300/50 bg-white/90 backdrop-blur-xl text-slate-700 hover:text-emerald-600 hover:border-emerald-400 hover:shadow-emerald-300/30 transition-all duration-300 shadow-lg"
            >
              ←
            </button>

            <button
              onClick={goNextProject}
              aria-label="Next project"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-300/50 bg-white/90 backdrop-blur-xl text-slate-700 hover:text-emerald-600 hover:border-emerald-400 hover:shadow-emerald-300/30 transition-all duration-300 shadow-lg"
            >
              →
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <div className="relative h-full w-full bg-gradient-to-br from-slate-50 to-emerald-50/50">
                  <video
                    key={projects[activeProject].gif}
                    className="h-full w-full object-cover rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src={projects[activeProject].gif}
                      type="video/mp4"
                    />
                  </video>

                  <span className="absolute left-6 top-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl shadow-lg border border-emerald-400/50">
                    Featured
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-600 bg-white/90 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
            Click arrows to explore
          </p>
        </section>

        {/* TESTIMONIALS - Gradient cards */}
        <MotionSection
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6 bg-gradient-to-r from-emerald-50/50 via-teal-50/30 to-slate-50/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-200/30 shadow-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-emerald-700 text-center pb-8">
            Testimonials
          </p>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: "-33.3333%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              key={startIndex}
              className="flex gap-6"
            >
              {[0, 1, 2, 3].map((offset) => {
                const t = testimonials[(startIndex + offset) % testimonials.length];
                return (
                  <div key={t.name + offset} className="min-w-[33.3333%]">
                    <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/50 bg-white/90 p-8 shadow-xl backdrop-blur-sm hover:shadow-emerald-300/30 transition-all duration-400 hover:border-emerald-300/50">
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-teal-500/3" />
                      
                      <p className="relative text-sm leading-relaxed text-slate-700 z-10">
                        "{t.quote}"
                      </p>
                      
                      <div className="relative mt-6 text-sm text-slate-600 z-10">
                        <p className="font-semibold text-slate-900 text-lg">
                          {t.name}
                        </p>
                        <p className="text-emerald-600 font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </MotionSection>

        {/* CONTACT */}
        <ContactFormSection animated />
      </div>
    </div>
  </motion.div>
</main>
  );
}
