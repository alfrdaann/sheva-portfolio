"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check if user already saw preloader in this session
    try {
      const hasSeen = sessionStorage.getItem("sheva_portfolio_preloaded");
      if (hasSeen) {
        setIsLoading(false);
        return;
      }
    } catch {
      // Fallback if sessionStorage is disabled/inaccessible
    }

    // 2. Check reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      try {
        sessionStorage.setItem("sheva_portfolio_preloaded", "true");
      } catch {}
      setIsLoading(false);
      return;
    }

    // 3. Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // 4. Milestone-based progress progression (~1.2s active progress)
    const intervals = [
      { target: 10, delay: 180 },
      { target: 22, delay: 330 },
      { target: 38, delay: 500 },
      { target: 56, delay: 680 },
      { target: 74, delay: 860 },
      { target: 89, delay: 1030 },
      { target: 100, delay: 1200 },
    ];

    const timeouts: NodeJS.Timeout[] = [];

    intervals.forEach(({ target, delay }) => {
      const timeout = setTimeout(() => {
        setProgress(target);
      }, delay);
      timeouts.push(timeout);
    });

    // Hold at 100% for 200ms (until 1400ms), then trigger smooth cinematic exit crossfade
    const exitTimeout = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem("sheva_portfolio_preloaded", "true");
      } catch {}
    }, 1400);
    timeouts.push(exitTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {isLoading && (
        <motion.div
          key="portfolio-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.985,
            transition: {
              duration: 0.58,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#030305] flex flex-col items-center justify-center pointer-events-auto select-none will-change-[opacity,transform]"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Subtle background atmospheric glow consistent with Hero */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-purple-600/10 blur-[90px]" />
          </div>

          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: {
                duration: 0.45,
                ease: [0.65, 0, 0.35, 1],
              },
            }}
            className="relative z-10 flex flex-col items-center px-6"
          >
            {/* Number counter */}
            <div className="flex items-baseline justify-center font-mono font-bold tracking-tight text-white mb-6">
              <span className="text-6xl sm:text-7xl lg:text-8xl tabular-nums leading-none">
                {progress}
              </span>
              <span className="text-2xl sm:text-3xl text-blue-500 ml-1 font-sans font-semibold">
                %
              </span>
            </div>

            {/* Thin progress bar */}
            <div className="w-48 sm:w-64 max-w-[80vw] h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.17, ease: "easeOut" }}
              />
            </div>

            {/* Small subtitle */}
            <p className="text-[10px] sm:text-xs tracking-[0.25em] text-[#8888a0] uppercase font-mono">
              Initializing Portfolio
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
