"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 1.5,
      ease: "easeIn",
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      damping: 20,
      stiffness: 150,
    },
  },
};

export default function HeroBanner() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="flex flex-col items-center md:pt-22"
    >
      <motion.div variants={childVariants} className="z-10 cursor-pointer">
        {/* glow background */}
        <span className="hero-logo-text absolute border bg-primary text-primary/40 blur-3xl select-none">
          HIGHCALL
        </span>

        <h1 className="hero-logo-text relative text-primary selection:bg-primary selection:text-primary-container">
          HIGHCALL
        </h1>
      </motion.div>

      <motion.h2
        variants={childVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="z-20 mt-10 font-semibold tracking-wide text-on-surface/60 transition-colors hover:text-white md:mt-20 md:text-lg 2xl:mt-30"
      >
        <Link href="#contact">BLITAR, ID — OPEN FOR BOOKING</Link>
      </motion.h2>
    </motion.div>
  );
}
