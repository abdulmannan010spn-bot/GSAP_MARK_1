import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Cocktails from "./Components/Cocktails";
import About from "./Components/About";
import Art from "./Components/Art";
import Lenis from "lenis";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};
export default App;
