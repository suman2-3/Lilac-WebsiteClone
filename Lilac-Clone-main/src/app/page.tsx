import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import Reassurance from "./components/sections/Reassurance";
import Specialties from "./components/sections/Specialties";
import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Background from "./components/sections/Background";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <Reassurance />
      <About />
      <FAQ />
      <Background />
      <CTA />
      <Footer />
    </div>
  );
}
