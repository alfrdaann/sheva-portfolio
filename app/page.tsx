import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
