import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Sheva Ananda Al Fardan`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Sheva Ananda Al Fardan`,
      description: project.shortDescription,
      type: "article",
    },
  };
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
  "Next.js": "bg-white/10 text-white border-white/20",
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Tailwind CSS": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Supabase: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500/10 text-blue-400",
  "UI/UX": "bg-purple-500/10 text-purple-400",
  "Responsive Web": "bg-cyan-500/10 text-cyan-400",
  Backend: "bg-green-500/10 text-green-400",
  Database: "bg-yellow-500/10 text-yellow-400",
  CRUD: "bg-red-500/10 text-red-400",
  "Business Website": "bg-amber-500/10 text-amber-400",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Top bar */}
      <div className="border-b border-[#1e1e2e] bg-[#0a0a0f]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-[#8888a0] hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
          >
            Sheva<span className="text-blue-500">.</span>
          </Link>
        </div>
      </div>

      <main id="main-content" className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className={`text-xs px-2.5 py-1 rounded-full font-mono ${
                  categoryColors[cat] ?? "bg-gray-500/10 text-gray-400"
                }`}
              >
                {cat}
              </span>
            ))}
            {project.location && (
              <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-white/5 text-[#8888a0] border border-white/10">
                📍 {project.location}
              </span>
            )}
            {project.role && (
              <span className="text-xs px-2.5 py-1 rounded-full font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                👤 {project.role}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-base sm:text-lg text-blue-400 font-mono mb-4">
              {project.subtitle}
            </p>
          )}

          <p className="text-[#8888a0] text-lg leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-card inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={`Open live website for ${project.title}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {project.liveButtonText ?? "Live Demo"}
            </a>

            <Link
              href="/#projects"
              className="interactive-card inline-flex items-center gap-2 border border-[#1e1e2e] hover:border-white/30 text-[#8888a0] hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-card inline-flex items-center gap-2 border border-[#1e1e2e] hover:border-blue-500/50 text-[#8888a0] hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
            )}
          </div>

          {/* Reliability notice */}
          {project.liveMayBeUnreliable && (
            <p className="text-xs text-yellow-400/70 bg-yellow-500/5 border border-yellow-500/20 rounded-lg px-3 py-2 mb-6 font-mono">
              ⚠️ Live deployment may occasionally be unavailable (Railway free tier).
            </p>
          )}
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 md:h-[440px] rounded-xl overflow-hidden bg-[#111118] border border-[#1e1e2e] mb-12">
          <Image
            src={project.images.hero.src}
            alt={project.images.hero.alt}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" aria-hidden="true" />
                Project Overview
              </h2>
              <div className="text-[#8888a0] leading-relaxed space-y-3">
                {project.overview.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* My Role */}
            <section aria-labelledby="role-heading">
              <h2 id="role-heading" className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-purple-500 rounded-full inline-block" aria-hidden="true" />
                My Role
                {project.roleTitle && (
                  <span className="text-xs font-mono text-purple-400 ml-2 font-normal">
                    — {project.roleTitle}
                  </span>
                )}
              </h2>
              {project.roleDescription && (
                <p className="text-[#8888a0] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{project.roleDescription}&rdquo;
                </p>
              )}
              <ul className="space-y-2.5">
                {project.myRole.map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888a0] text-sm leading-relaxed">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Features */}
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" aria-hidden="true" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888a0] text-sm leading-relaxed">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            {project.challenges && (
              <section aria-labelledby="challenges-heading">
                <h2 id="challenges-heading" className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-yellow-500 rounded-full inline-block" aria-hidden="true" />
                  Challenges
                </h2>
                <p className="text-[#8888a0] leading-relaxed">{project.challenges}</p>
              </section>
            )}

            {/* What I Learned */}
            {project.learned && (
              <section aria-labelledby="learned-heading">
                <h2 id="learned-heading" className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-green-500 rounded-full inline-block" aria-hidden="true" />
                  What I Learned
                </h2>
                <p className="text-[#8888a0] leading-relaxed">{project.learned}</p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technology */}
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t.name}
                    className={`text-xs px-2.5 py-1 rounded-md border font-mono ${
                      techColors[t.name] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20"
                    }`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories & Project Info */}
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className={`text-xs px-2.5 py-1 rounded-full font-mono ${
                        categoryColors[cat] ?? "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {project.role && (
                <div className="pt-3 border-t border-[#1e1e2e]">
                  <p className="text-xs text-[#8888a0] font-mono mb-1 uppercase tracking-wider">Role</p>
                  <p className="text-sm font-medium text-white">{project.role}</p>
                </div>
              )}

              {project.location && (
                <div className="pt-3 border-t border-[#1e1e2e]">
                  <p className="text-xs text-[#8888a0] font-mono mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium text-white">{project.location}</p>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white mb-4">Links</h3>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {project.liveButtonText ?? "Live Demo"}
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#8888a0] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Gallery / Screenshots */}
        {project.images.gallery.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" aria-hidden="true" />
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {project.images.gallery.map((img, i) => (
                <figure key={i} className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden shadow-lg">
                  <div className="relative w-full h-64 sm:h-96 md:h-[480px] bg-[#0d0d16]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain sm:object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="px-5 py-3 text-xs sm:text-sm text-[#8888a0] font-mono border-t border-[#1e1e2e] bg-[#111118]/80 flex items-center justify-between">
                      <span>{img.caption}</span>
                      <span className="text-[10px] text-white/30 uppercase tracking-widest hidden sm:inline">
                        Asset 0{i + 1}
                      </span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Live Project CTA */}
        <section className="mt-14 bg-gradient-to-br from-[#111118] to-[#151522] border border-[#1e1e2e] rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Explore the Live Website</h3>
            <p className="text-sm text-[#8888a0] max-w-xl leading-relaxed">
              Visit the {project.title} website to explore its apparel catalog, production portfolio, and quotation request features in action.
            </p>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-card shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-3.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
          >
            Visit Live Website
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </section>

        {/* Project Navigation (Previous / Next) */}
        <div className="mt-12 pt-8 border-t border-[#1e1e2e] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="flex items-center gap-2 text-sm text-[#8888a0] hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>
                  <span className="text-[10px] text-[#8888a0]/60 block uppercase font-mono">Previous</span>
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/#projects"
                className="flex items-center gap-2 text-sm text-[#8888a0] hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Projects
              </Link>
            )}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/#projects"
              className="text-xs font-mono text-[#8888a0] hover:text-white transition-colors uppercase tracking-wider"
            >
              All Projects
            </Link>
          </div>

          <div>
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex items-center gap-2 text-sm text-[#8888a0] hover:text-white transition-colors group text-right"
              >
                <span>
                  <span className="text-[10px] text-[#8888a0]/60 block uppercase font-mono">Next</span>
                  {nextProject.title}
                </span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            ) : (
              <Link
                href="/#contact"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1.5"
              >
                Get in Touch →
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
