import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/SectionTwo";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-5 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
    </div>
  );
}
