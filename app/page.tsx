import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/SectionTwo";
import { SubstackSignup } from "./components/SubstackSignUp";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-5 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <SubstackSignup />
      <Footer />
    </div>
  );
}
