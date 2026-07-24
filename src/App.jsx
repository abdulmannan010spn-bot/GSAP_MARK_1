import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Cocktails from "./Components/Cocktails";
import About from "./Components/About";
import Art from "./Components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};
export default App;
