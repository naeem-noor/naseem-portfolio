import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Credentials from "@/components/Credentials";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Expertise />
        <Experience />
        <Projects />
        <Workflow />
        <Credentials />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
