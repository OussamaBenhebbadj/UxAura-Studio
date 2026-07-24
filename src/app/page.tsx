import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
