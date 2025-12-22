"use client";

import { useState } from "react";
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
      "We craft modern, high-performance websites tailored to your business needs. Our approach ensures fast load times, scalable architecture, and maintainable code.",
    process: [
      "Requirement gathering and planning",
      "UI/UX design and prototyping",
      "Frontend and backend development",
      "Testing, optimization, and deployment",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your discoverability with technical SEO, on-page optimization, and content strategy. We make sure your website ranks well and attracts the right audience.",
    process: [
      "Site audit and keyword research",
      "Technical SEO improvements",
      "Content structure and on-page optimization",
      "Performance tracking and analytics",
    ],
  },
  {
    title: "UX & Visual Design",
    description:
      "We design user-centric experiences and visual systems that communicate your brand clearly. Every interaction is thoughtfully crafted to delight users.",
    process: [
      "User research and personas",
      "Wireframes and interactive prototypes",
      "Visual identity design",
      "Usability testing and refinement",
    ],
  },
];

export default function ServicesPage() {
  const [activeProject, setActiveProject] = useState(0);

  const goPrevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goNextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <main className="relative min-h-screen text-slate-900 px-4 py-16 md:px-6">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          We combine strategy, design, and engineering to deliver websites and digital experiences that are visually appealing, high-performing, and aligned with your business goals. Below is a quick overview of what we do and how we approach each service.
        </p>
      </div>

      {/* WORK SHOWCASE */}
      <section className="relative flex flex-col md:flex-row items-center gap-6 mb-24">
        <div className="flex h-[320px] items-center md:block hidden">
          <span
            className="select-none text-[1.2rem] font-medium uppercase tracking-[0.55em] text-slate-400"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Our work
          </span>
        </div>

        <div className="relative flex-1 h-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          {/* LEFT ARROW */}
          <button
            onClick={goPrevProject}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/80 backdrop-blur text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={goNextProject}
            aria-label="Next project"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/80 backdrop-blur text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
          >
            →
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <div className="relative h-full w-full bg-slate-100 rounded-3xl overflow-hidden">
                <video
                  key={projects[activeProject].gif}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={projects[activeProject].gif} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[0.65rem] text-slate-500">
          Click the arrows to see other projects.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="mt-12 grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative p-8 rounded-3xl shadow-lg border border-white/20 
                       bg-gradient-to-br from-[#b36666]/15 via-transparent to-transparent transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-stone-700 mb-3">{service.description}</p>
            <ul className="text-xs text-stone-600 list-disc list-inside space-y-1">
              {service.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CONTACT FORM */}
      <div className="mt-32">
        <ContactFormSection animated />
      </div>
    </main>
  );
}
