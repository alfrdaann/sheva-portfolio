import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sheva Ananda Al Fardan — Student Developer",
  description:
    "Personal portfolio of Sheva Ananda Al Fardan, a student developer exploring web development, backend systems, data, and digital products.",
  keywords: [
    "Sheva Ananda Al Fardan",
    "student developer",
    "web development",
    "Laravel",
    "PHP",
    "Indonesia",
    "portfolio",
  ],
  authors: [{ name: "Sheva Ananda Al Fardan" }],
  openGraph: {
    title: "Sheva Ananda Al Fardan — Student Developer",
    description:
      "Personal portfolio of Sheva Ananda Al Fardan, a student developer exploring web development, backend systems, data, and digital products.",
    url: "https://sheva.dev",
    siteName: "Sheva Ananda Al Fardan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheva Ananda Al Fardan — Student Developer",
    description:
      "Personal portfolio of Sheva Ananda Al Fardan, a student developer exploring web development, backend systems, data, and digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-[#0a0a0f] text-white antialiased`}
      >
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
