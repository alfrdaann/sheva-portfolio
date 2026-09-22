import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-[#1e1e2e] mb-4">404</p>
        <h1 className="text-2xl font-semibold text-white mb-3">Page not found</h1>
        <p className="text-[#8888a0] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
