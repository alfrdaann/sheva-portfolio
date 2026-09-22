"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2025",
    title: "Started at SMK Antartika 2 Sidoarjo",
    subtitle: "RPL — Rekayasa Perangkat Lunak",
    description:
      "Began my journey in software engineering, learning the fundamentals of programming and web development.",
    side: "left",
    accent: "blue",
  },
  {
    year: "2026",
    title: "Built first real web projects",
    subtitle: "Frontend Development",
    description:
      "Started building real projects. Developed the GeneralSolusindo Internal Portal using HTML, CSS, and Vanilla JavaScript.",
    side: "right",
    accent: "purple",
  },
  {
    year: "2026",
    title: "Explored backend development",
    subtitle: "Laravel & PHP",
    description:
      "Learned MVC architecture, Eloquent ORM, and database design by building the Inventarisasi Barang system with Laravel 11.",
    side: "left",
    accent: "blue",
  },
  {
    year: "2026",
    title: "Exploring data & design",
    subtitle: "Python, Data Analysis, UI/UX",
    description:
      "Currently diving into Python, data analysis tools, and improving my design skills through Figma and UI/UX principles.",
    side: "right",
    accent: "purple",
  },
  {
    year: "2026",
    title: "Built this portfolio",
    subtitle: "Next.js, TypeScript, Tailwind",
    description:
      "Designed and developed this personal portfolio to document my learning journey and showcase real projects.",
    side: "left",
    accent: "blue",
  },
  {
    year: "2028",
    title: "Expected graduation",
    subtitle: "Keep growing...",
    description:
      "The journey is still going. Building a better version of myself, one project at a time.",
    side: "right",
    accent: "gray",
    isFuture: true,
  },
];

const accentMap: Record<string, string> = {
  blue: "border-blue-500 bg-blue-500",
  purple: "border-purple-500 bg-purple-500",
  gray: "border-[#1e1e2e] bg-[#1e1e2e]",
};

const yearColorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  gray: "text-[#8888a0] bg-[#111118] border-[#1e1e2e]",
};

export default function Journey() {
  return (
    <section id="journey" className="py-24 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
            My Journey So Far
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Journey
          </h2>
        </motion.div>

        {/* Timeline — vertical on mobile, centered on desktop */}
        <div className="relative">
          {/* Center line — hidden on mobile */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-[#1e1e2e] to-purple-500/20 -translate-x-1/2"
            aria-hidden="true"
          />
          {/* Left line — mobile only */}
          <div
            className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-[#1e1e2e] to-purple-500/20"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex gap-6 md:gap-0 md:items-start"
              >
                {/* Mobile: dot */}
                <div className="md:hidden flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full border-2 mt-1 ${accentMap[item.accent]} ${item.isFuture ? "opacity-40" : ""}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Desktop left spacer — only for "right" items */}
                {item.side === "right" && (
                  <div className="hidden md:block md:w-[calc(50%-2rem)] flex-shrink-0" />
                )}

                {/* Content card */}
                <div
                  className={`flex-1 md:flex-none md:w-[calc(50%-2rem)] ${
                    item.side === "right" ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <div
                    className={`bg-[#111118] border border-[#1e1e2e] rounded-xl p-5 ${
                      item.isFuture ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-semibold text-sm leading-snug">
                        {item.title}
                      </h3>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded border flex-shrink-0 ${yearColorMap[item.accent]}`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className={`text-xs font-mono mb-2 ${item.accent === "gray" ? "text-[#8888a0]" : "text-blue-400"}`}>
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#8888a0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Desktop: center dot */}
                <div className="hidden md:flex flex-shrink-0 items-start justify-center w-16 pt-4">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${accentMap[item.accent]} ${item.isFuture ? "opacity-40" : ""}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Desktop right spacer — only for "left" items */}
                {item.side === "left" && (
                  <div className="hidden md:block md:w-[calc(50%-2rem)] flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-[#111118] border border-[#1e1e2e] rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                Education
              </p>
              <h3 className="text-white font-semibold text-base">
                SMK Antartika 2 Sidoarjo
              </h3>
              <p className="text-[#8888a0] text-sm mt-1">
                Rekayasa Perangkat Lunak (RPL)
              </p>
              <p className="text-[#8888a0] text-sm font-mono mt-0.5">
                2025 — 2028
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
