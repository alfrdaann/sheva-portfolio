"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Used in Projects",
    description: "Technologies I've applied in real work",
    color: "blue",
    skills: [
      { name: "HTML", icon: "🟧" },
      { name: "CSS", icon: "🟦" },
      { name: "JavaScript", icon: "🟨" },
      { name: "PHP", icon: "🟣" },
      { name: "Laravel", icon: "🔴" },
      { name: "SQLite", icon: "🔵" },
      { name: "Git", icon: "🟠" },
      { name: "GitHub", icon: "⚫" },
      { name: "Figma", icon: "🟣" },
    ],
  },
  {
    title: "Currently Learning",
    description: "What I'm actively studying right now",
    color: "purple",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Data Analysis", icon: "📊" },
      { name: "Backend Dev", icon: "⚙️" },
      { name: "UI/UX Design", icon: "🎨" },
    ],
  },
  {
    title: "Exploring",
    description: "Technologies I'm curious about",
    color: "green",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
  },
];

const borderColorMap: Record<string, string> = {
  blue: "border-blue-500/30 hover:border-blue-500/50",
  purple: "border-purple-500/30 hover:border-purple-500/50",
  green: "border-green-500/30 hover:border-green-500/50",
};

const labelColorMap: Record<string, string> = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  green: "text-green-400",
};

const bgAccentMap: Record<string, string> = {
  blue: "bg-blue-500/5",
  purple: "bg-purple-500/5",
  green: "bg-green-500/5",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2">
            Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Skills
          </h2>
          <p className="text-[#8888a0] text-sm max-w-md">
            Technologies I&apos;ve worked with and am currently learning.
          </p>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className={`bg-[#111118] border ${borderColorMap[group.color]} rounded-xl p-6 transition-all duration-300`}
            >
              {/* Group header */}
              <div className="mb-5">
                <h3
                  className={`text-sm font-semibold ${labelColorMap[group.color]} mb-1`}
                >
                  {group.title}
                </h3>
                <p className="text-xs text-[#8888a0]">{group.description}</p>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 text-xs text-[#8888a0] hover:text-white px-2.5 py-1.5 rounded-lg ${bgAccentMap[group.color]} border border-[#1e1e2e] font-mono transition-colors duration-200`}
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-[#8888a0] mt-6 text-center font-mono"
        >
          * No percentage bars — still learning, still growing every day.
        </motion.p>
      </div>
    </section>
  );
}
