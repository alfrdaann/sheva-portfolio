"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const techColors: Record<string, string> = {
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Laravel: "bg-red-500/10 text-red-400 border-red-500/20",
  PHP: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  SQLite: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Git: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  GitHub: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500/10 text-blue-400",
  "UI/UX": "bg-purple-500/10 text-purple-400",
  "Responsive Web": "bg-cyan-500/10 text-cyan-400",
  Backend: "bg-green-500/10 text-green-400",
  Database: "bg-yellow-500/10 text-yellow-400",
  CRUD: "bg-red-500/10 text-red-400",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="interactive-card group bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden hover:border-blue-500/30"
    >
      {/* Project Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="block overflow-hidden"
        aria-label={`View ${project.title} case study`}
      >
        <div className="relative h-56 overflow-hidden bg-[#0d0d16]">
          <Image
            src={project.images.hero.src}
            alt={project.images.hero.alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                categoryColors[cat] ?? "bg-gray-500/10 text-gray-400"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-[#8888a0] leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-1 rounded-md border font-mono ${
                techColors[tag] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e2e]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
            aria-label={`Open live demo of ${project.title}`}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
            <span className="inline-block transition-transform group-hover/link:translate-x-0.5">
              →
            </span>
          </a>
          <span className="text-[#1e1e2e]">|</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#8888a0] hover:text-white transition-colors group/link"
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
            <span className="inline-block transition-transform group-hover/link:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
