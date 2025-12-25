"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Sidebar() {
  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen lg:block lg:w-1/5">
        <div className="relative h-full w-full overflow-hidden bg-white ">
          <div className="relative flex h-full flex-col px-5 py-6">

            {/* ===== LOGO + BRAND ===== */}
            <Link href="/pages/home" className="flex items-center gap-3">
              <Image
                src="/assets/images/miyawaki_symbol.png"  
                alt="Studio Miyawaki"
                width={150}
                height={150}
                className="rounded-md"
              />
            </Link>

            {/* Divider */}
            <div className="mt-5 h-px w-full bg-slate-200" />

            {/* ===== NAVIGATION ===== */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-6 space-y-2 text-[0.7rem] uppercase tracking-[0.18em] text-slate-700"
            >
              <p className="text-[0.65rem] text-slate-400">Navigate</p>

              {[
                { label: "Home", href: "/pages/home" },
                { label: "About Us", href: "/pages/aboutUs" },
                { label: "Services", href: "/pages/services" },
                { label: "Contact Us", href: "/pages/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between rounded-full px-3 py-2 transition-all hover:scale-[1.02]"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="h-px w-6 bg-slate-300 group-hover:bg-slate-500 transition-all" />
                </Link>
              ))}
            </motion.nav>

            {/* ===== CTA ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/pages/contact"
                className="inline-flex w-full items-center justify-between gap-2 rounded-2xl bg-white px-4 py-2.5 text-[0.75rem] font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-100 hover:shadow-md hover:scale-[1.02]"
              >
                <span>Start a project</span>
                <span className="text-sm">↗</span>
              </Link>
            </motion.div>

            {/* ===== FOOTER ===== */}
            <div className="mt-auto pt-6 text-[0.65rem] text-slate-500 leading-relaxed">
              <div className="h-px w-full bg-slate-200 mb-3" />
              <p className="font-medium text-slate-700">
                Studio Miyawaki
              </p>
              <p>
                New Delhi, India <br />
                Working globally with founders & teams
              </p>
              <p className="mt-1 text-slate-400">
                © {new Date().getFullYear()}
              </p>
            </div>

          </div>
        </div>
      </aside>

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside className="px-4 pt-6 pb-4 lg:hidden">
      <div className="relative flex flex-col rounded-3xl border border-slate-200 bg-white px-2  shadow-xl">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/miyawaki_symbol.png"
            alt="Studio Miyawaki"
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-slate-200" />

        {/* Navigation */}
        <nav className="flex flex-wrap gap-x-4 gap-y-3 text-[0.7rem] uppercase tracking-[0.16em] text-slate-600">
          <Link href="/pages/home" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/pages/aboutUs" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/pages/services" className="hover:text-slate-900">
            Services
          </Link>
          <Link href="/pages/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
  href="/pages/contact"
  className="mt-5 inline-flex items-center justify-center gap-2
             rounded-xl border border-slate-300 bg-white
             px-4 py-2 text-[0.7rem] font-medium text-slate-900
             shadow-md transition hover:bg-slate-100"
>
  <span>Start a project</span>
  <span className="text-sm">↗</span>
</Link>
      </div>
    </aside>
    </>
  );
}
