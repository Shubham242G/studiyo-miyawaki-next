// components/motion.tsx
"use client";

import { motion, Variants, Transition } from "framer-motion";

const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut", // <- typed literal Framer Motion accepts
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionSection = motion.section;
