"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Sidebar() {
  return (
    <>
      {/* Desktop sidebar – 20% width */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen lg:block lg:w-1/5">
        <div className="relative h-full w-full overflow-hidden  bg-slate-50">
          {/* Content */}
          <div className="relative flex h-full flex-col px-4 py-5">
            {/* Brand row */}
            <Link href="/pages/home" className="flex items-center gap-3 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[0.6rem] font-semibold tracking-[0.28em] text-slate-900 shadow-sm group-hover:scale-[1.03] transition-transform">
                SM
              </div>
              <div>
                <p className="text-[0.75rem] font-semibold tracking-[0.26em] text-slate-900 uppercase">
                  StudiYo Miyawaki
                </p>
                <p className="text-[0.65rem] text-slate-500">
                  Web • SEO • Brand
                </p>
              </div>
            </Link>

            {/* Divider */}
            <div className="mt-4 h-px w-full bg-slate-200" />

            {/* Nav */}
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-5 space-y-2 text-[0.7rem] uppercase tracking-[0.18em] text-slate-700"
            >
              <p className="text-[0.65rem] text-slate-400">Navigate</p>

              <Link
                href="/pages/services"
                className="group flex items-center justify-between rounded-full px-3 py-2 border border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300 hover:scale-[1.02] transition-all"
              >
                <span className="font-medium">Services</span>
                <span className="h-px w-6 bg-slate-300 group-hover:bg-slate-500 transition-all" />
              </Link>

              <Link
                href="/pages/aboutUs"
                className="group flex items-center justify-between rounded-full px-3 py-2 border border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300 hover:scale-[1.02] transition-all"
              >
                <span className="font-medium">About</span>
                <span className="h-px w-6 bg-slate-300 group-hover:bg-slate-500 transition-all" />
              </Link>

              <Link
                href="#contact"
                className="group flex items-center justify-between rounded-full px-3 py-2 border border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300 hover:scale-[1.02] transition-all"
              >
                <span className="font-medium">Contact</span>
                <span className="h-px w-6 bg-slate-300 group-hover:bg-slate-500 transition-all" />
              </Link>
            </motion.nav>

            {/* Bottom meta + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="mt-auto space-y-3 pb-1 text-[0.7rem] text-slate-600"
            >
              

              <div className="h-px w-full bg-slate-200" />

              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-between gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-[0.75rem] font-semibold text-slate-900 shadow-sm hover:bg-slate-100 hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <span>Start a project</span>
                <span className="text-sm">↗</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar – unchanged */}
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
            Calm, premium web experiences for law, health, and expert-led
            practices.
          </p>
          <nav className="mt-4 flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-slate-600">
            <Link href="/pages/services" className="hover:text-emerald-500">
              Services
            </Link>
            <Link href="/pages/aboutUs" className="hover:text-emerald-500">
              About
            </Link>
            <Link href="#contact" className="hover:text-emerald-500">
              Contact
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
