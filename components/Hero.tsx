"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type Variants, type Easing } from "framer-motion";

const easeOut: Easing = "easeOut";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#030305]"
    >
      {/* ── Atmospheric background lighting ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft Blue glow — upper behind portrait */}
        <div className="absolute top-[5%] right-[10%] w-[50vw] max-w-[800px] h-[60vh] rounded-full bg-blue-600/15 blur-[120px]" />
        {/* Soft Purple glow — lower behind portrait */}
        <div className="absolute bottom-[15%] right-[-5%] w-[45vw] max-w-[700px] h-[50vh] rounded-full bg-purple-700/15 blur-[100px]" />
      </div>

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full min-h-[calc(100vh-6rem)]">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center py-10 lg:py-0 z-30 relative pointer-events-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] sm:text-xs tracking-[0.3em] text-[#8888a0] uppercase font-mono mb-6"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-black leading-[0.9] tracking-tight mb-8"
            >
              <span className="block text-[clamp(3.5rem,8vw,7.5rem)] text-white uppercase">
                Sheva Ananda
              </span>
              <span className="block text-[clamp(3.5rem,8vw,7.5rem)] text-white uppercase">
                Al Fardan
              </span>
            </motion.h1>

            {/* Editorial info row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12"
            >
              <p className="text-[10px] sm:text-xs tracking-[0.15em] text-[#8888a0] uppercase font-mono whitespace-nowrap">
                Student Developer based in Indonesia.
              </p>
              {/* Divider */}
              <span
                className="hidden sm:block h-px w-12 bg-[#2a2a3e] flex-shrink-0"
                aria-hidden="true"
              />
              <div className="flex sm:hidden w-12 h-px bg-[#2a2a3e]" aria-hidden="true" />
              <p className="text-[10px] sm:text-xs tracking-[0.15em] text-[#8888a0] uppercase font-mono whitespace-nowrap">
                SMK Antartika 2 Sidoarjo · RPL
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="interactive-card inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white text-sm font-semibold px-8 py-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="interactive-card inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-sm font-semibold px-8 py-4 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Portrait ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeOut, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end items-end w-full h-[60vh] sm:h-[70vh] lg:h-full mt-8 lg:mt-0"
          >
            {/* The portrait container - slightly scaled up (+10-15%) but bounded so head NEVER clips */}
            <div className="absolute bottom-0 right-[-10%] sm:right-[-5%] lg:right-[2%] xl:right-0 w-[135%] sm:w-[105%] md:w-[90%] lg:w-auto lg:h-[clamp(600px,90vh,920px)] aspect-[615/576] pointer-events-none flex items-end justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/images/profile-extended.png"
                  alt="Sheva Ananda Al Fardan"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl pointer-events-auto"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Smooth bottom fade - ONLY bottom 15% so arms stay highly visible */}
                <div
                  className="absolute bottom-[-1px] left-0 right-0 h-[15%] bg-gradient-to-t from-[#030305] via-[#030305]/70 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
            
            {/* "Keep Learning" subtle label - anchored to the container so it floats properly */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute top-[25%] right-2 xl:-right-4 hidden lg:flex flex-col items-end gap-1 z-20"
              aria-hidden="true"
            >
              <p className="text-[9px] tracking-[0.25em] text-white/30 uppercase font-mono">
                Keep Learning
              </p>
              <p className="text-[9px] tracking-[0.25em] text-white/30 uppercase font-mono">
                Keep Growing
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator — bottom left ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-6 lg:left-12 z-20"
      >
        <button
          onClick={() => scrollTo("#projects")}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
          aria-label="Scroll to projects"
        >
          <span className="text-[9px] tracking-[0.25em] text-[#8888a0] uppercase font-mono group-hover:text-white transition-colors">
            Scroll to Explore
          </span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-[#8888a0] group-hover:text-white transition-colors text-xs"
            aria-hidden="true"
          >
            →
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
}
