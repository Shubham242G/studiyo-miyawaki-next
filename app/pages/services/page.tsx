"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactFormSection } from "../../components/contactForm";

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

const services = [
  {
    title: "Web Development",
    description:
      "We design and build flagship marketing websites and founder hubs using Next.js, focused on speed, security, and long-term scalability.",
    process: [
      "Architecture & stack planning",
      "UI engineering systems",
      "SEO & performance optimization",
      "Scalable deployments",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO, search intent mapping, and on-page systems designed to bring qualified traffic that converts.",
    process: [
      "Technical audits",
      "Search intent structuring",
      "On-page SEO & schema",
      "Monitoring & iteration",
    ],
  },
  {
    title: "Social media handling",
    description:
      "Signature personal websites for founders and professionals who want trust, clarity, and authority.",
    process: [
      "Positioning clarity",
      "Narrative structure",
      "Design & build",
      "Credibility refinement",
    ],
  },
  {
    title: "Performance Marketing",
    description:
      "Continuous performance, UX, and conversion optimization as your brand scales.",
    process: [
      "UX & speed audits",
      "Analytics tracking",
      "Iteration cycles",
      "Long-term governance",
    ],
  },
];

const testimonials = [
  {
    name: "Adv. Rohit Malhotra",
    role: "Litigation Partner, GSLO",
    quote:
      "They understood litigation workflows deeply. The site feels calm, credible, and purpose-built.",
  },
  {
    name: "Dr. Ananya Verma",
    role: "Peesonal branding",
    quote:
      "The redesign removed anxiety from the experience. Trust increased instantly.",
  },
  {
    name: "Kunal Sharma",
    role: "Startup Consultant",
    quote:
      "Nothing flashy. Just clarity. Exactly what service businesses need.",
  },
  {
    name: "Neha Kapoor",
    role: "Legal Ops Manager",
    quote:
      "Every screen felt intentional. It didn’t feel templated.",
  },
  {
    name: "Gaurav Sharma",
    role: "Founder, Unsaathi",
    quote:
      "They think like product people, not trend chasers.",
  },
];

export default function ServicesPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [offset, setOffset] = useState(0);

  /* testimonials auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen px-4 py-20 md:px-6 text-slate-900">

      {/* ================= SERVICES BANNER ================= */}
      <section className="relative max-w-6xl mx-auto mb-32 rounded-3xl overflow-hidden border border-slate-200 h-[260px]">
        <div
          className="absolute inset-4 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: "url(/assets/images/aboutUs.jpg)" }}
        />
        <div className="absolute inset-4 bg-black/45 rounded-2xl" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
          <p className="text-xs uppercase tracking-widest">
            Studio Miyawaki
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-medium">
            Services
          </h1>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-3xl border border-slate-200 bg-[#faf7f5] shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR WORK ================= */}
      <section className="relative max-w-6xl mx-auto mb-32 flex items-center gap-6">
        <div className="hidden md:flex h-[380px] items-center">
          <span
            className="select-none font-bold text-sm tracking-[0.45em] uppercase text-slate-400"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Project highlights
          </span>
        </div>

        <div className="relative flex-1 h-[380px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <video
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
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() =>
              setActiveProject(
                (p) => (p - 1 + projects.length) % projects.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 border"
          >
            ←
          </button>

          <button
            onClick={() =>
              setActiveProject((p) => (p + 1) % projects.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 border"
          >
            →
          </button>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-6xl mx-auto mb-32 overflow-hidden">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Testimonials
        </h2>

        <motion.div
          className="flex gap-6"
          animate={{ x: offset * 320 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="min-w-[280px] md:min-w-[320px] p-6 rounded-2xl bg-[#faf7f5] border border-slate-200 shadow-sm"
            >
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                “{t.quote}”
              </p>
              <div className="text-xs text-slate-500">
                <strong>{t.name}</strong>
                <div>{t.role}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-4xl mx-auto">
        <ContactFormSection animated />
      </section>

    </main>
  );
}
