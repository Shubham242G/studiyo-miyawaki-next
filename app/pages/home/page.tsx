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
import { motion, Variants, useScroll, useSpring, useCycle, AnimatePresence } from "framer-motion";
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
        description: "A personal hub for legal expertise and thought leadership.",
        gif: "/assets/videos/gaurav_sharma.mp4",
        link: "https://gauravsharma.org/",
        tag: "Personal brand",
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

const testimonials = [
    {
        name: "Adv. Rohit Malhotra",
        role: "Litigation Partner, GSLO",
        quote:
            "They understood litigation workflows deeply. The site feels calm, credible, and purpose-built for serious clients.",
    },
    {
        name: "Dr. Ananya Verma",
        role: "Founder, MedNLaw",
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
            "Every screen felt intentional. It didn’t feel like a template — it felt like us.",
    },
    {
        name: "Amit Jain",
        role: "Founder, Unsaathi",
        quote:
            "They think like product people, not designers chasing trends.",
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
        name: "Vatsala Singh",
        role: "Content & SEO",
        bio:
            "Vatsala shapes the words and search strategy so every page speaks clearly to humans while quietly pulling in the right kind of traffic from search.",
        image: "/assets/images/vatsala.jpg",
    },
    {
        id: 1,
        name: "Shubham Godiyal",
        role: "Developer",
        bio:
            "Shubham leads development at StudiYo Miyawaki, turning messy ideas into fast, maintainable Next.js builds that feel calm to use and easy to extend.",
        image: "/assets/images/shubham.jpg",
    },

    {
        id: 2,
        name: "Ekumpreet Singh",
        role: "Graphic Designer",
        bio:
            "Ekumpreet builds the visual language—logomarks, palettes, and layout details—so your site looks like one cohesive brand, not a stitched‑together template.",
        image: "/assets/images/ekam.jpg",
    },
    {
        id: 3,
        name: "Manan Kapoor",
        role: "Content Uploader",
        bio:
            "Manan keeps launches smooth by preparing, structuring, and uploading content with care, so what goes live matches what was planned.",
        image: "/assets/images/manan.jpg",
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


    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goNextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
    };

    const goPrevProject = () => {
        setActiveProject((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

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
                <div className="min-h-screen pb-20 pt-4 lg:pb-16 lg:pt-10 lg:pr-10 px-4">
                    <div className="space-y-10">

                        {/* HERO */}
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
                                            <h1 className="font-playfair text-[2.1rem] md:text-[2.5rem] lg:text-[2.8rem] leading-tight text-black">
                                                Studio{" "}
                                                <span className="italic text-black">
                                                    Miyawaki
                                                </span>
                                            </h1>
                                            <p className="max-w-md text-[0.85rem] text-black">
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
                                        <Link href="/pages/contact">
                                            <motion.div
                                                whileHover={{ y: -2, scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="inline-flex items-center gap-2 rounded-full bg-white/95 px-12 py-2.5 text-[0.8rem] font-semibold text-slate-900 shadow-md shadow-slate-900/30 cursor-pointer"
                                            >
                                                <span>Start your project </span>
                                                <span className="text-xs">↗</span>
                                            </motion.div>
                                        </Link>
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
                                    <span className="text-sm uppercase tracking-[0.16em] text-black font-medium">
                                        {metric.label}
                                    </span>
                                    <span className="text-3xl md:text-4xl font-bold text-black tabular-nums tracking-tight">
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
                            {/* LEFT – SERVICES INTRO */}
                            <MotionDiv
                                variants={fadeInUp}
                                className="
      relative col-span-12 md:col-span-4
      flex flex-col justify-between
      overflow-hidden rounded-3xl
      border border-slate-200
      p-5 shadow-md
    "
                            >
                                {/* Background image */}
                                <div
                                    className="absolute inset-0 z-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('/assets/images/aboutUs.webp')",
                                    }}
                                />

                                {/* Gradient overlay */}
                                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#b36666]/40 via-black/30 to-black/50" />

                                {/* Content */}
                                <div className="relative z-20">
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                                        Services
                                    </p>
                                    <h2 className="mt-3 text-xl font-bold text-white">
                                        From story to system to stewardship.
                                    </h2>
                                    <p className="mt-3 text-[0.8rem] text-white/90">
                                        We design and build digital systems that stay relevant — strategically
                                        planned, carefully engineered, and continuously improved over time.
                                    </p>
                                </div>
                            </MotionDiv>

                            {/* RIGHT – SERVICE CARDS */}
                            <div className="col-span-12 grid gap-4 md:col-span-8 md:grid-cols-2">
                                {[
                                    {
                                        title: "Web Development",
                                        description:
                                            "We design and build flagship marketing websites and founder hubs using Next.js, focused on speed, security, and long-term scalability. From clean information architecture to conversion-driven UI, every page is engineered to load fast, rank well, and evolve easily as your product, brand, or audience grows.",
                                        route: "/services/webDevelopment",
                                    },
                                    {
                                        title: "SEO Optimization",
                                        description:
                                            "Our SEO approach goes beyond keywords. We implement technical SEO foundations, smart information architecture, and on-page optimization aligned with real search intent — improving discoverability, performance, and qualified traffic.",
                                        route: "/services/seoOptimzation",
                                    },
                                    {
                                        title: "Personal Branding",
                                        description:
                                            "We craft signature personal websites for founders, creators, and practitioners who want their story to feel authentic and intentional — building trust, authority, and long-term recognition.",
                                        route: "/services/personalBranding",
                                    },
                                    {
                                        title: "Performance Management",
                                        description:
                                            "Through ongoing audits, analytics dashboards, and structured iteration cycles, we refine speed, UX, accessibility, and conversion — keeping your site sharp as your brand scales.",
                                        route: "/services/performanceManagement",
                                    },
                                ].map((service, index) => (
                                    <MotionDiv
                                        key={service.title}
                                        variants={fadeInUp}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 220, damping: 22 }}
                                        className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md ${index % 2 === 0 ? "min-h-[240px]" : "min-h-[280px]"
                                            }`}
                                    >
                                        {/* Gradient layer */}
                                        <div
                                            aria-hidden
                                            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#b36666]/15 via-transparent to-transparent"
                                        />

                                        {/* Content */}
                                        <div className="relative">
                                            <p className="text-base font-bold text-slate-900">
                                                {service.title}
                                            </p>
                                            <p className="mt-2 text-[0.75rem] leading-relaxed text-slate-700">
                                                {service.description}
                                            </p>
                                        </div>

                                        <Link
                                            href={service.route}
                                            className="relative mt-4 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-[#b36666] hover:opacity-80"
                                        >
                                            Learn more <span>↗</span>
                                        </Link>
                                    </MotionDiv>
                                ))}
                            </div>
                        </MotionSection>







                        {/* ABOUT – BIGGER, DEDICATED SECTION AFTER PROCESS */}
                        <MotionSection
                            id="about"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="
    relative
    mt-28
    overflow-hidden
    rounded-3xl
    border border-slate-200
    px-5 py-10
    shadow-md
    md:px-10
  "
                        >
                            {/* SECTION LABEL */}
                            <p className="mb-8 text-xs uppercase tracking-[0.3em] font-semibold text-slate-600">
                                About Us
                            </p>

                            {/* CONTENT GRID */}
                            <div className="grid items-center gap-8 md:grid-cols-12">
                                {/* LEFT — BLACK CARD (SMALLER) */}
                                <MotionDiv
                                    variants={fadeInUp}
                                    className="
        col-span-12 md:col-span-4
        rounded-3xl
        border border-slate-700/60
        bg-slate-900/85
        px-6 py-6
        shadow-md
      "
                                >
                                    <div className="space-y-3">
                                        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
                                            About & concepts
                                        </p>

                                        <h2 className="text-lg font-bold text-white">
                                            The thinking behind StudiYo Miyawaki.
                                        </h2>
                                    </div>

                                    <div className="mt-4 min-h-[160px]">
                                        {aboutSlides.map((slide, index) =>
                                            index === activeAboutIndex ? (
                                                <motion.div
                                                    key={slide.id}
                                                    initial={{ opacity: 0, y: 12 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="space-y-2"
                                                >
                                                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-emerald-200">
                                                        {slide.tagline}
                                                    </p>
                                                    <p className="text-sm font-semibold text-slate-50">
                                                        {slide.title}
                                                    </p>
                                                    <p className="text-[0.85rem] text-slate-200 leading-relaxed">
                                                        {slide.body}
                                                    </p>
                                                </motion.div>
                                            ) : null
                                        )}
                                    </div>

                                    {/* DOTS */}
                                    <div className="mt-5 flex justify-center gap-1.5">
                                        {aboutSlides.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveAboutIndex(idx)}
                                                className={`h-1.5 w-1.5 rounded-full transition ${idx === activeAboutIndex
                                                        ? "bg-emerald-300"
                                                        : "bg-slate-500/60"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </MotionDiv>

                                {/* RIGHT — WHITE CARD (BIG, VISUAL FIRST) */}
                                <MotionDiv
                                    variants={fadeInUp}
                                    className="
    col-span-12 md:col-span-8
    flex flex-col
    rounded-3xl
    border border-slate-200
    bg-white
    px-8 py-8
    shadow-md
    min-h-[620px]
  "
                                >
                                    {/* HEADER */}
                                    <div className="mb-5">
                                        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-500">
                                            Our team
                                        </p>
                                        <h2 className="mt-1 text-base font-bold text-slate-900">
                                            The people you’ll work with.
                                        </h2>
                                    </div>

                                    {/* SLIDER */}
                                    <div className="relative flex-1 min-h-[460px]">
                                        {teamSlides.map((member, index) =>
                                            index === activeTeamIndex ? (
                                                <motion.div
                                                    key={member.id}
                                                    initial={{ opacity: 0, y: 18 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                                    className="flex h-full flex-col"
                                                >
                                                    {/* IMAGE — FIXED HEIGHT (NO % HEIGHTS) */}
                                                    <div className="relative mb-6 w-full flex-1 min-h-[400px] overflow-hidden rounded-3xl bg-slate-200">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            fill
                                                            sizes="(min-width: 768px) 60vw, 100vw"
                                                            className="object-cover"
                                                            priority
                                                        />
                                                    </div>

                                                    {/* NAME + ROLE */}
                                                    <div className="text-center">
                                                        <p className="text-lg font-semibold text-slate-900">
                                                            {member.name}
                                                        </p>
                                                        <p className="mt-1 text-xs uppercase tracking-[0.25em] font-semibold text-slate-600">
                                                            {member.role}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ) : null
                                        )}
                                    </div>

                                    {/* DOT NAV */}
                                    <div className="mt-6 flex justify-center gap-2">
                                        {teamSlides.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveTeamIndex(idx)}
                                                className={`h-1.5 w-1.5 rounded-full transition ${idx === activeTeamIndex
                                                        ? 'bg-slate-900'
                                                        : 'bg-slate-400/60'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </MotionDiv>

                            </div>
                        </MotionSection>






                        {/* PROJECTS (unchanged) */}
                        <section className="relative flex items-center gap-6">
                            {/* OUTSIDE VERTICAL LABEL */}
                            <div className="flex h-[360px] items-center">
                                <span
                                    className="select-none text-[1.2rem] font-medium uppercase tracking-[0.55em] text-slate-400"
                                    style={{
                                        writingMode: "vertical-rl",
                                        transform: "rotate(180deg)",
                                    }}
                                >
                                    Our work
                                </span>
                            </div>

                            {/* MAIN SHOWCASE */}
                            <div className="relative flex-1 h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                                {/* subtle enhancement */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_65%)]"
                                />

                                {/* LEFT ARROW */}
                                <button
                                    onClick={goPrevProject}
                                    aria-label="Previous project"
                                    className="
            absolute left-4 top-1/2 -translate-y-1/2 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full border border-slate-300
            bg-white/80 backdrop-blur
            text-slate-600 hover:text-slate-900
            hover:border-slate-400
            transition
          "
                                >
                                    ←
                                </button>

                                {/* RIGHT ARROW */}
                                <button
                                    onClick={goNextProject}
                                    aria-label="Next project"
                                    className="
            absolute right-4 top-1/2 -translate-y-1/2 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full border border-slate-300
            bg-white/80 backdrop-blur
            text-slate-600 hover:text-slate-900
            hover:border-slate-400
            transition
          "
                                >
                                    →
                                </button>

                                {/* SLIDER */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProject}
                                        initial={{ opacity: 0, x: 80 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -80 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="relative h-full w-full"
                                    >
                                        {/* BIG GIF VIEWER */}
                                        <div className="relative h-full w-full bg-slate-100">
                                            <video
                                                key={projects[activeProject].gif}
                                                className="h-full w-full object-cover"
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


                                            <span className="absolute left-5 top-5 rounded-full bg-emerald-500/90 px-3 py-1 text-[0.65rem] font-medium text-white backdrop-blur-sm">
                                                Featured
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* HELPER TEXT */}
                            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[0.65rem] text-slate-500">
                                Click on the arrows to see other projects.
                            </p>
                        </section>






                        {/* TESTIMONIALS */}
                        <MotionSection
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="space-y-4"
                        >
                            {/* Subtle heading */}
                            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-600">
                                Testimonials
                            </p>

                            {/* Slider wrapper */}
                            <div className="relative overflow-hidden">
                                <motion.div
                                    animate={{ x: "-33.3333%" }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    key={startIndex}
                                    className="flex gap-4"
                                >
                                    {[0, 1, 2, 3].map((offset) => {
                                        const t =
                                            testimonials[(startIndex + offset) % testimonials.length];

                                        return (
                                            <div
                                                key={t.name + offset}
                                                className="min-w-[33.3333%]"
                                            >
                                                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md">
                                                    <div
                                                        aria-hidden
                                                        className="pointer-events-none absolute inset-0 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-soft-light"
                                                    />
                                                    <p className="relative text-[0.8rem] leading-relaxed text-slate-700">
                                                        “{t.quote}”
                                                    </p>
                                                    <div className="relative mt-4 text-[0.7rem] text-slate-600">
                                                        <p className="font-medium text-slate-900">{t.name}</p>
                                                        <p>{t.role}</p>
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
