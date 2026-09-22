"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const exploringItems = [
  { label: "Web Development", color: "blue" },
  { label: "Backend Development", color: "green" },
  { label: "Data & Programming", color: "purple" },
  { label: "UI/UX Design", color: "pink" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  green: "bg-green-500/10 text-green-400 border border-green-500/20",
  purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  pink: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
};

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
              Get to Know Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-[#8888a0] leading-relaxed">
              <p>
                Hi, I&apos;m{" "}
                <span className="text-white font-medium">
                  Sheva Ananda Al Fardan
                </span>
                . I&apos;m a student developer who enjoys exploring technology,
                building websites, and learning new programming skills.
              </p>
              <p>
                I&apos;m currently improving my skills in web development,
                programming, data science, and UI/UX design. I enjoy turning
                ideas into practical projects, experimenting with new
                technologies, and continuously improving through every project
                I build.
              </p>
            </div>

            {/* Currently Exploring */}
            <div className="mt-8">
              <p className="text-sm text-white font-medium mb-3">
                Currently Exploring:
              </p>
              <div className="flex flex-wrap gap-2">
                {exploringItems.map((item) => (
                  <span
                    key={item.label}
                    className={`text-sm px-3 py-1.5 rounded-lg font-mono ${colorMap[item.color]}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Education card inline */}
            <div className="mt-8 p-4 bg-[#111118] border border-[#1e1e2e] rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    SMK Antartika 2 Sidoarjo
                  </p>
                  <p className="text-[#8888a0] text-xs mt-0.5">
                    Rekayasa Perangkat Lunak (RPL)
                  </p>
                  <p className="text-[#8888a0] text-xs mt-0.5 font-mono">
                    2025 — 2028
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow */}
              <div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-[#111118] border border-[#1e1e2e]">
                <Image
                  src="/images/profile-casual.jpg"
                  alt="Sheva Ananda Al Fardan working at a laptop"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 288px, 320px"
                />
              </div>

              {/* "Build Something Better" label */}
              <div
                className="absolute -bottom-4 -left-4 bg-[#111118] border border-[#1e1e2e] rounded-xl px-4 py-2.5"
                aria-hidden="true"
              >
                <p className="text-[11px] text-[#8888a0] italic leading-snug">
                  Build Something
                  <br />
                  <span className="text-blue-400">Better</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
