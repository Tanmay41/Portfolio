import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/Contact";
import Header from "@/components/Header";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className="relative">
        <Skills />
        <Projects />
        <DotPattern className="absolute inset-0 -z-10" />
      </div>
      <Contact />
    </>
  );
}
