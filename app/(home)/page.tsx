import Navbar from "@/app/(home)/components/Navbar";
import HeroSection from "@/app/(home)/components/HeroSection";
import Skills from "@/app/(home)/components/Skills";
import Projects from "@/app/(home)/components/Projects";

export default function Home() {
  return (
    <div className="min-h-[400vh] bg-black overflow-hidden">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative">
        <div className="max-w-7xl mx-auto px-5 xl:p-0">
          <Navbar/>
          <HeroSection/>
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-5 xl:p-0 mt-20">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
